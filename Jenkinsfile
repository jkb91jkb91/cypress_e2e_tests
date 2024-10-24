pipeline {
    agent any 
    stages {
        stage('COMMON STEPS') {
            steps {
                echo "******************************************************"
                echo "Building on branch: ${env.GIT_BRANCH}"
                echo "Building on branch: ${env.CHANGE_ID}"
                echo "******************************************************"
            }
          }
        stage('Pull Request section') {
             when {
               expression {
                    return env.CHANGE_ID != null
                }
             }
            steps {
                  echo "THIS IS PULL REQUEST SECTION"
          }
        }
        stage('RUN ONLY ON Feature BRANCH') {
          when {
               expression {
                    echo "Branch detected: ${env.GIT_BRANCH}"
                    return env.GIT_BRANCH ==~ /.*feature-.*/
                }
             }
            steps {
                echo "Building feature branch..."
            }
        }
        stage('RUN ONLY ON Develop BRANCH') {
              when {
                branch pattern: "develop", comparator: "REGEXP"
            }
             steps {
                echo "Building develop branch..."
            }
        }

        stage('RUN ONLY ON Master BRANCH') {
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
