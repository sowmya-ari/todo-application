pipeline {
    environment {
      serverregistry = 'sowmya1234/todo-web'
      registryCredential = 'dockerhub'
      serverdockerimage = ''
    }
    agent {
        docker {
            image 'node:8.16.2-jessie' 
            args '-p 5000:5000' 
        }
    }
    stages {
        stage('Cloning todo git repository') {
            steps {
              git 'https://github.com/sowmya-ari/todo-application.git'
            }
        }
        stage('Build') {
            steps {
                sh 'cd server && npm install'
                sh 'cd client && npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'cd server/test && npm test'
                sh 'cd client/src/test && npm test a'
            }
        }
        stage('Building Docker image') {
            steps {
                sh 'cd server' && script {
                dockerImage = docker.build  serverregistry + ":$BUILD_NUMBER"}
            }
        }
       
    }
}