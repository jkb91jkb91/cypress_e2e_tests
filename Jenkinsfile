pipeline {
    agent any 
    stages {
        stage('Informations printer') {
            steps {
                  echo "Building on branch: ${env.GIT_BRANCH}"
            }
          }
        stage('Feature') {
           when {
               not {
                  anyOf {
                    branch 'master';
                    branch 'develop'
                  }
               }
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
                    expression {
                        return env.GIT_BRANCH == "origin/master"
                    }
              }
             steps {
                echo "Building master branch..."
            }
        }
    }
}
