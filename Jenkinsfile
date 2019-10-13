pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 5000:5000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'cd ./server' 
            }
            steps {
                sh 'npm install' 
            }
            steps {
                sh 'cd ./test' 
            }
            steps {
                sh 'npm test' 
            }
        }
    }
}