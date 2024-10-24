pipeline {
    agent any 
    stages {
        stage('Feature') {
            echo "Building on branch: ${env.GIT_BRANCH}"
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
