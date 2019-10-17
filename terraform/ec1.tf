resource "aws_vpc" "todovpc" {
    cidr_block = "10.0.0.0/16"
    enable_dns_hostnames = true
    tags={
        Name = "terraform-todo-vpc"
    }
}
resource "aws_internet_gateway" "todogw" {
    vpc_id = "${aws_vpc.todovpc.id}"
}
resource "aws_subnet" "todo-public-subnet" {
    vpc_id = "${aws_vpc.todovpc.id}"
    cidr_block = "10.0.0.0/24"
    availability_zone = "us-east-2a"

    tags={
        Name = "Public Subnet"
    }
}
resource "aws_route_table" "todo-public-subnet" {
    vpc_id = "${aws_vpc.todovpc.id}"

    route {
        cidr_block = "0.0.0.0/0"
        gateway_id = "${aws_internet_gateway.todogw.id}"
    }

    tags={
        Name = "Public Subnet Route Table"
    }
}
resource "aws_route_table_association" "todo-subnet-route" {
    subnet_id = "${aws_subnet.todo-public-subnet.id}"
    route_table_id = "${aws_route_table.todo-public-subnet.id}"
}
resource "aws_security_group" "web" {
    name = "vpc_web"
    description = "Allow incoming HTTP connections."

    ingress {
        from_port = 80
        to_port = 80
        protocol = "tcp"
        cidr_blocks = ["10.0.0.0/24"]
    }
    ingress {
        from_port = 443
        to_port = 443
        protocol = "tcp"
        cidr_blocks = ["10.0.0.0/24"]
    }
    ingress {
        from_port = 22
        to_port = 22
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
    ingress {
        from_port = 5432
        to_port = 5432
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
    ingress {
        from_port = 3000
        to_port = 3000
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
    ingress {
        from_port = -1
        to_port = -1
        protocol = "icmp"
        cidr_blocks = ["0.0.0.0/0"]
    }

    egress {
        from_port = 80
        to_port = 80
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
    egress {
        from_port = 443
        to_port = 443
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
    egress {
        from_port = 5432
        to_port = 5432
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
    egress {
        from_port = 3000
        to_port = 3000
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
    egress {
        from_port = 22
        to_port = 22
        protocol = "tcp"
        cidr_blocks = ["10.0.0.0/24"]
    }
    egress {
        from_port = -1
        to_port = -1
        protocol = "icmp"
        cidr_blocks = ["10.0.0.0/24"]
    }

    vpc_id = "${aws_vpc.todovpc.id}"

    tags={
        Name = "WebServerSG"
    }
}
provider "aws" {
    shared_credentials_file = "/Users/sowmya/.aws/credentials"
    region = "us-east-2"
}
resource "aws_instance" "web" {
  ami             = "ami-05c1fa8df71875112"
  instance_type   = "t2.micro"
  vpc_security_group_ids = ["${aws_security_group.web.id}"]
  subnet_id = "${aws_subnet.todo-public-subnet.id}"
  associate_public_ip_address = true
  key_name = "interns_key"
  source_dest_check = false

  tags={
    Name = "interns-web"
  }
}
resource "aws_instance" "database" {
  ami             = "ami-05c1fa8df71875112"
  instance_type   = "t2.micro"
  vpc_security_group_ids = ["${aws_security_group.web.id}"]
  subnet_id = "${aws_subnet.todo-public-subnet.id}"
  associate_public_ip_address = true
  key_name = "interns_key"
  source_dest_check = false

  tags={
    Name = "interns-web"
  }
}

resource "aws_eip" "web" {
    instance = "${aws_instance.web.id}"
    vpc = true
}
resource "aws_eip" "database" {
    instance = "${aws_instance.database.id}"
    vpc = true
}