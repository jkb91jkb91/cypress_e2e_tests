pipeline {
    agent any 
    stages {
        stage('COMMON STEPS') {
            steps {
                  echo "Building on branch: ${env.GIT_BRANCH}"
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

        
           stage('Manual Approval') {
            steps {
                script {
                    // Krok manualny
                    def userInput = input(
                        id: 'manualApproval', 
                        message: 'Czy chcesz kontynuować z wdrożeniem?', 
                        parameters: [
                            [$class: 'BooleanParameterDefinition', 
                             name: 'Proceed?', 
                             defaultValue: true, 
                             description: 'Kliknij, aby kontynuować.']
                        ]
                    )
                    echo "User selected: ${userInput}"
                }
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
