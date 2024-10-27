pipeline {
    agent any 
    stages {
        stage('COMMON STEPS') {
            steps {
                 error("Wymuszone zakończenie z błędem!")
                
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

def githubNotify() {
    // Wtyczka GitHub API powinna być włączona
    def message = currentBuild.result == 'SUCCESS' ? 'Build was successful' : 'Build failed'
    def context = 'CI' // Ustaw kontekst, na przykład 'CI'
    
    // Użyj API GitHub do aktualizacji statusu
    def token = credentials('cypres-token') // Użyj ID swojego sekretu
    def repo = 'jkb91jkb91/cypress_e2e_tests' // Użyj pełnej ścieżki do swojego repozytorium
    def sha = env.GIT_COMMIT // Użyj sha commit
    def url = "https://api.github.com/repos/${repo}/statuses/${sha}"

    // Użyj funkcji do wykonania żądania HTTP
    def response = httpRequest(
        url: url,
        httpMode: 'POST',
        contentType: 'APPLICATION_JSON',
        requestBody: """{
            "state": "${currentBuild.result == 'SUCCESS' ? 'success' : 'failure'}",
            "description": "${message}",
            "context": "${context}"
        }""",
        customHeaders: [[name: 'Authorization', value: "token ${token}"]]
    )
    echo "GitHub status updated: ${response.status}"
}
