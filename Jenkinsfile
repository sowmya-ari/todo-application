pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 5000:5000' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Cloning Git') {
            steps {
              git 'https://github.com/sowmya-ari/todo-application.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install' 
            }
        }
        stage('moving in to test folder and running test cases') {
            steps {
                sh 'cd ./server/test'
                sh 'npm test'
            }
        }
       
    }
}