pipeline {
    agent any 
    stages {
        stage('Feature') {
            when {
                branch pattern: "feature-.*", comparator: "REGEXP"
            }
            steps {
                echo "Building feature branch..."
            }
        }
        stage('Develop') {
              when {
                branch pattern: "develop", comparator: "REGEXP"
            }
             steps {
                echo "Building develop branch..."
            }
        }

        stage('Master') {
              when {
                branch pattern: "master", comparator: "REGEXP"
            }
             steps {
                echo "Building master branch..."
            }
        }
    }
}
