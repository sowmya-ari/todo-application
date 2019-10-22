pipeline {
    agent {
        docker {
            image 'node:10' 
        }
    }
    stages {
        stage('Cloning todo git repository') {
            steps {
              git 'https://github.com/sowmya-ari/todo-application.git'
            }
        }
        stage('Build') {
            parallel {
                stage('build backend'){
                  steps {
                    sh 'cd server && npm install'
                  }
                }
                stage('build frontend'){
                  steps {
                    sh 'cd client && npm install'
                  }
                }
            }
        }

        stage('Test') {
            parallel{
                stage('backend testing'){
                  steps {
                    sh 'cd server/test && npm test'
                  }
                }
                stage('frontend testing'){
                  steps {
                    sh 'cd client/src/test && npm test a'
                  }
                }
            }
        }

        stage('Building Docker image') {
            parallel{
                stage('server image'){
                  steps {
                    sh 'cd server && docker image build -t web .'
                    sh 'docker tag web sowmya1234/todo-web:latest'
                  }
                }
                stage('client image'){
                  steps {
                    sh 'cd client && docker image build -t client .'
                    sh 'docker tag client sowmya1234/todo-client:latest' 
                  }
                }
            }
        }
        stage('Deploying docker images to dockerhub'){
            steps {
                withDockerRegistry([ credentialsId: "dockerhub", url: "" ]) {
                 sh 'docker push sowmya1234/todo-client:latest'
                 sh 'docker push sowmya1234/todo-web:latest'
                }
            }
        }
        stage('Ansible'){
            steps {
                sh 'apt-get update -qy && apt-get install -qy software-properties-common && apt-get install -qy ansible'
                sh 'apt-get install sshpass'
                sh 'which ansible'
                sh 'sshpass -p "ChangeMe" ssh -o StrictHostKeyChecking=no sowmya@10.10.10.160'
                sh 'sshpass -p "ChangeMe" ssh -o StrictHostKeyChecking=no sowmya@10.10.10.156'
                sh 'cd todo-ansible && ansible all -m ping -i inventory.txt'
                sh 'cd todo-ansible && ansible-playbook docker.yml -i inventory.txt -k -K'
              }
        }
    }
}