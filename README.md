# COSC2759 Assignment 1
## Notes App - CI Pipeline
- Full Name: **Zhenxin Li**
- Student ID: **s3726514**



## 1. Assessment of the problem
 The Alpine Inc teams was relied on munual building and deploying from the leader developer's laptop.  
     
  Whereas manual deployments leaves space for human error in manual processes, it is much buggier and more prone to breaks than automated deployments are.   
     
  The Alphine Inc has suffered a loss recently due to the leader developer's leave from work, and furthermore missed a critical release for one of the largest clients, and there were also historical instances where bugs have been introduced into production.   
     
     
  Hence, our solution provides a CI pipeline(ci-pipeline.yml) defeined in the .github/workflows directory, which provides 4 automated tests, intending to help the team enjoy the benefit of Continuous Integration. The solution also provides a relative Readme.md file at the root directory for any user to understand how the pipeline works.  
     
    
## 2. Solution Pipeline Structure(Branching)
  In order to get the pipeline run as expected, we have created a new branch called feature, which lets us to test the pipeline's functionalities.  
  
  Additionally, we've found some code errors while building the CI pipeline, hence, we've created another branch called codeFix for debugging.  
  
  Also, most of the dependency files are located in the src directory, thus most actions are set with a working directory of src, by using *env settings* and *--prefix-src* keywords.  
  
  Finally, the main branch is protected from direct commits. New features are developed on feature branches and merged into master with Pull Requests.  
  
  <p align="center">
    <img src="/img/BranchProtect.png" style="height: 700px;">
  </p>  
  
  The tests we are required to perform here are: 
  ### - Static Code Analysis / Lint   
  ### - Unit testing   
  ### - Integration testing
  ### - End-to-end testing

  As in an interative process as the diagram shows below:  
   
  ```mermaid
  flowchart TD;
    A[Push to branches] -- Triggers --> B[Lint];
    B --> C[Unit Test];
    C --> D(UT Code Coverage);
    C --> E[Integration Test];
    E --> F(IT Code Coverage);
    E --> G[E2E Test];
    G -- If on Main --> H[package];
    H --> I(package artefact);
  ```
    
  The reason why we have chosen this structure is based on their complexcity --- the more complex the test, the more time it requires to execute. ---  we've added the keyword 'needs' before each test scripts so that if one test fails, the following tests won't be executed(AKA a failure scenario), hence saved our VM's time and improved efficiency.  
  
  <p align="center">
    <img src="/img/FailureScenario.png" style="height: 180px;">  
  </p>
  
## Lint(Static Code Analysis)
  Lint test checks the codes' quality, it detects potential bugs lies within our code. 
  
  As we were implementing the linting test, we have discovered existing code errors:  
  
  <p align="center">
    <img src="/img/lintFail.png" style="height: 400px;">  
  </p>
    
  Hence we've created a new branch called codeFix and debugged the code error mentioned in the lint test report, and finally passed the lint test.  
  
  <p align="center">
    <img src="/img/lintPass.png" style="height: 400px;">  
  </p>
    
## Unit Testing
  Unit testing tests the smallest testable parts of an application for correct operation.
  
  There were also bugs in our unit testing:  
  
  <p align="center">
    <img src="/img/unitFail.png" style="height: 600px;">  
  </p> 
  
  After debugging the code we will be able to pass to the next stage.

## Integration Tests
  Integration tests are included in our pipeline. The automated test scripts ensures the application integrates properly with the MongoDB Backend.  
  
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
  
  <p align="center">
    <img src="/img/inteFail.png" style="height: 500px;">  
  </p> 

## E2E Tests
  E2E tests checks the application's behaviours are performing as expected.
  
  In case that the test fails, it breaks the build and returns a detailed log:  
  
  <p align="center">
    <img src="/img/e2eF.png" style="height: 500px;">  
  </p> 
       
## Artefacts
  We run code coverages on Unit tests and Integration tests, code coverage artifacts will be generated on successful test runs in main branch  
  
  If the tests have all passed, the ci pack pipeline will run and upload an artefact named *node-todo-xxxx* that can be deployed.  
  
  <p align="center">
    <img src="/img/arti.png" style="height: 400px;">  
  </p> 
  
  *changes to sub branches will trigger the test but no artefacts will be generated*
  
  <p align="center">
    <img src="/img/subBranch.png" style="height: 400px;">  
  </p> 
         
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

