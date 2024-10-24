pipeline {
    agent any
    
    stages {
                stage('Build') {
                     when {
                branch pattern: "feature/.*", comparator: "REGEXP"
                    }
                    steps {
                        echo "Building feature branch..."
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
