pipeline {
    agent {
        docker {
            image 'node:8.16.2-jessie' 
            args '-p 5000:5000' 
        }
        docker { 
            image 'sowmya1234/todo-database-postgres' 
            args '-p 5432:5432 -e POSTGRES_PASSWORD=postgres POSTGRES_USER=postgres POSTGRES_DB=todo POSTGRES_PORT=5432'
        }
    }
    stages {
        stage('Cloning todo repository') {
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
                sh 'cd server/test && npm test'
            }
        }
       
    }
}