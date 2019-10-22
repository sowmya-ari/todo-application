pipeline {
    agent {
        docker {
            image 'node:10' 
        }
    }
    stages {
        stage('Ansible'){
            steps {
                sh 'apt-get update -qy && apt-get install -qy software-properties-common && apt-get install -qy ansible'
                sh 'apt-get install openssh-server'
                sh 'systemctl enable ssh'
                sh 'apt-get install sshpass'
                sh 'which ansible'
                sh 'sshpass -p "ChangeMe" ssh -o StrictHostKeyChecking=no sowmya@10.10.10.160'
              }
        }
    }
}