pipeline {
    agent {
        docker {
            image 'node:8.16.2-jessie' 
            args '-p 5000:5000' 
        }
    }
    stages {
        stage('Cloning Git') {
            steps {
              git 'https://github.com/sowmya-ari/todo-application.git'
            }
        }
        stage('Build') {
            steps {
                sh 'cd server && npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'docker pull sowmya1234/todo-database-postgres && docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres POSTGRES_USER=postgres POSTGRES_DB=todo POSTGRES_PORT=5432 -d sowmya1234/todo-database-postgres'
            }
            steps {
                sh 'cd server/test && npm test'
            }
            steps {
                sh 'docker stop sowmya1234/todo-database-postgres'
            }
        }
       
    }
}