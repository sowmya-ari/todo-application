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
        stage('Build') {
            steps {
                sh 'cd ./server'
                sh 'npm install' 
            }
        }
        stage('moving in to test folder and running test cases') {
            steps {
                sh 'cd ./server'
                sh 'cd ./test' 
                sh 'npm test'
            }
        }
       
    }
}