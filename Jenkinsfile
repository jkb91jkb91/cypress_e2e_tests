pipeline {
    agent any

    stages {
        stage('Build') {
            when {
                branch pattern: "feature-.*", comparator: "REGEXP"
            }
            steps {
                echo "Building feature branch..."
            }
        }
        stage('Test') {
            steps {
                echo "Running tests..."
                sh 'echo "Run some tests here"'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying the project..."
 
            }
        }
    }
}
