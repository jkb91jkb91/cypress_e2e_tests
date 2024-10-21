pipeline {
    agent any
    stages {
        stage('Parallel Execution') {
            parallel {
                stage('Build') {
                    steps {
                        echo "Building the project..."
                        // Dodaj kroki związane z buildem
                    }
                }
                stage('Test') {
                    steps {
                        echo "Running tests..."
                        // Dodaj kroki związane z testowaniem
                    }
                }
                stage('Deploy') {
                    steps {
                        echo "Deploying the project..."
                        // Dodaj kroki związane z wdrażaniem
                    }
                }
            }
        }
    }
}
