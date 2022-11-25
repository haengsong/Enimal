pipeline {
    agent any
    tools {
        nodejs "node14"
        git "Default"
    }
    stages {
        stage('prepare') {
            steps {
                echo 'prepare'
                 git branch: "front", credentialsId: "haengsong", url: 'https://lab.ssafy.com/s07-blockchain-nft-sub2/S07P22C106.git'
                 sh  'ls -al'
            }
        }
        stage('build') {
            steps {
                sh 'ls -al'
                sh "docker stop frontend"
                sh "docker rm frontend"
                sh 'docker build -t ./frontend'
                sh 'docker run -d -p 3000:3000 —name frontend ./frontend'

            }
        }
        stage('deploy') {
            steps {
                sh "ls -al"
                echo 'deploy'   
            }
        }
    }
}