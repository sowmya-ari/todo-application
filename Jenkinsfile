pipeline {
    agent {
        docker {
            image 'node:8.16.2-jessie' 
            args '-p 5000:5000' 
        }
    }
    stages {
        stage('Ansible'){
            steps {
                sh 'apt-get update -qy && apt-get install -qy software-properties-common && apt-get install -qy ansible'
                sh 'apt-get install sshpass'
                sh 'sshpass -p "ChangeMe" ssh -o StrictHostKeyChecking=no sowmya@10.10.10.156'
              }
        }
    }
}