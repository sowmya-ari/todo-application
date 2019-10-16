pipeline {
    environment {
      serverimage = ''
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
                sh 'cd server && docker image build -t web .'
                sh 'cd client && docker image build -t client .'
            }
        }
        stage('Deploying docker image to docker hub') {
            steps {
                sh 'docker tag client sowmya1234/todo-client:latest && docker tag web sowmya1234/todo-web'
                sh 'docker login --username=sowmya1234 --password=sowmya1234 && docker push sowmya1234/todo-web && docker push sowmya1234/todo-client'
            }
        }
       
    }
}