pipeline {
    environment {
      dockerhubCredential = 'dockerhub'
      web = ''
      client = ''
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
                sh 'cd server && web=docker image build -t web .'
                sh 'cd client && client=docker image build -t client .'
            }
        }
        stage('Deploying docker image to docker hub') {
            steps {
                script {
                  docker.withRegistry( '', dockerhubCredential ){
                  web.push()
                  client.push()}
                }
            }
        }
       
    }
}