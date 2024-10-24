pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "Building the project..."
                // Komendy builda tutaj, np. uruchomienie testów
            }
        }
        stage('Test') {
            steps {
                echo "Running tests..."
                // Przykład testów jednostkowych
                sh 'echo "Run some tests here"'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying the project..."
                // Krok deploymentu
            }
        }
    }

    post {
        success {
            githubNotify context: 'CI', status: 'SUCCESS', description: 'Build passed'
        }
        failure {
            githubNotify context: 'CI', status: 'FAILURE', description: 'Build failed'
        }
    }
}
