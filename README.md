# COSC2759 Assignment 1
## Notes App - CI Pipeline
- Full Name: **Zhenxin Li**
- Student ID: **s3726514**



## 1. Assessment of the problem
     The Alpine Inc teams was relied on munual building and deploying from the leader developer's laptop.  
     
     Whereas manual deployments leaves space for human error in manual processes, it is much buggier and more prone to breaks than automated deployments are.   
     
     The Alphine Inc has suffered a loss recently due to the leader developer's leave from work, and furthermore missed a critical release for one of the largest clients, and there were also historical instances where bugs have been introduced into production.   
     
     
     Hence, our solution provides a CI pipeline(ci-pipeline.yml) defeined in the .github/workflows directory, intending to help the team enjoying the benefit of Continuous Integration. The solution also provides a relative Readme.md file at the root directory for any user to understand how the pipeline works.  
     
    
## 2. Solution Pipeline Structure(Branching)
  In order to get the pipeline run as expected, we have created a new branch called feature, which lets us to test the pipeline's functionalities.  
  
  Additionally, we've found some code errors while building the CI pipeline, hence, we've created another branch called codeFix for debugging.  
  
  Also, most of the dependency files are located in the src directory, thus most actions are set with a working directory of src, by using env settings and --prefix-src keyword.  
  
  Finally, the main branch is protected from direct commits. New features are developed on feature branches and merged into master with Pull Requests.  
  
      <img src="/img/BranchProtect.png"/>
  The tests we are required to perform here are: 
  ### - Static Code Analysis / Lint   
  ### - Unit testing   
  ### - Integration testing
  ### - End-to-end testing

  As in an interative process as the diagram shows below:  
  
    <img src="/img/md.png" style="height: 70px;"/>  
    
  The reason why we have chosen this structure is based on their complexcity --- the more complex the test, the more time it requires to execute. ---  we've added the keyword 'needs' before each test scripts so that if one test fails, the following tests won't be executed(AKA a failure scenario), hence saved our VM's time and improved efficiency.  
  
    <img src="/img/FailureScenario.png"/>  
  
## Lint(Static Code Analysis)
  As we were implementing the linting test, we have discovered existing code errors:  
  
    <img src="/img/lintFail.png"/>  
    
  Hence we've created a new branch called codeFix and debugged the code error mentioned in the lint test report, and finally passed the lint test.  
  
    <img src="/img/lintPass.png"/>  
    
## Unit Testing
  There were also bugs in our unit testing:  
  
     <img src="/img/unitFail.png" style="height: 70px;"/>   

## Integration Tests
  Integration tests are included in our pipeline. The automated scripts ensures the application integrates properly with the MongoDB Backend.  
  
  It requires communication with the DB backend, hence we need to set up the portal for this test, for example:  
  
   ```  
      mongodb:
    image: mongo:4.0
    options: >-
      --health-cmd mongo
      --health-interval 10s
      --health-timeout 5s
      --health-retries 5
    ports:
      - 27017:27017
    ```  
    
  If the test fails, it breaks the build and returns a failure log:  
  
     <img src="/img/inteFail.png"/>  

## E2E Tests
  E2E tests checks the application's behaviours are performing as expected  
  
  In case that the test fails, it breaks the build and returns a detailed log:  
  
     <img src="/img/inteFail.png"/>  
       
## Artefacts
  We run code coverages on Unit tests and Integration tests, code coverage artifacts will be generated on successful test runs in main branch  
  
  If the tests have all passed, the ci pack pipeline will run and upload an artefact that can be deployed.  
  
       <img src="/img/codeCoverage.png" style="height: 70px;"/>   
       
## CS build trigger   
  Our pipeline script has ensured triggering when a push occurs to any branch and works with all existing branches:  
  
    ```  
    on:
  push:
    branches:
      - main
      - feature/**
      - feature
      - codeFix
  pull_request:
    branches:
      - main
    ```  
         
         
   Thank you for your effort marking my assignment.  

