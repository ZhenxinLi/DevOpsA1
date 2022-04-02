# COSC2759 Assignment 1
## Notes App - CI Pipeline
- Full Name: **Zhenxin Li**
- Student ID: **s3726514**

### Guidance (remove this section before final submission)

1. Refer for assignment specification `Marking Guide` for details of what should appear in this README.

1. If you do not see an `Actions` tab in your GitHub, email ashley.mallia@rmit.edu.au with URL to your repository, so that it can be enabled.

1. Implement your CI pipeline in the directory `.github/workflows`.

1. Refer to [src/README.md](/src/README.md) for important details on building and testing the application.

1. Commit images to the `img` directory and add them like 
    ```html
    <img src="/img/md.png" style="height: 70px;"/>
    ```
    <img src="/img/md.png" style="height: 70px;"/>


## Assessment of the problem
    The Alpine Inc teams was relied on munual building and deploying from the leader developer's laptop. Whereas manual deployments leaves space for human error in manual processes, it is much buggier and more prone to breaks than automated deployments are.  The Alphine Inc has suffered a loss recently due to the leader developer's leave from work, and furthermore missed a critical release for one of the largest clients, and there were also historical instances where bugs have been introduced into production.
    Hence, our solution provides a CI pipeline(ci-pipeline.yml) defeined in the .github/workflows directory, intending to help the team enjoying the benefit of Continuous Integration. The solution also provides a relative Readme.md file at the root directory for any user to understand how the pipeline works.
    
## 1. Solution Pipeline Structure
  In order to get the pipeline run as expected, we have created a new branch called feature, which lets us to test the pipeline's functionalities.
  Addtionally we are required to perform:
  ### Static Code Analysis / Lint   
  ### Unit testing   
  ### Integration testing
  ### End-to-end testing
  As in an interative process as the diagram shows below:
      ```html
    <img src="/img/md.png" style="height: 70px;"/>
  The reason why we have chosen this structure is based on their complexcity and 
  
  
## Lint
  As we were implementint the linting test, we have discovered existing code errors:
        ```html
    <img src="/img/md.png" style="height: 70px;"/>
  Hence we've created a new branch called codeFix and debugged the code error mentioned in the lint test report, and finally passed the lint test.
          ```html
    <img src="/img/md.png" style="height: 70px;"/>
  
  
## 1. Heading
### 1.1 Subheading 
### 1.2 Subheading 

## 2. Heading
### 2.1 Subheading 
### 2.2 Subheading 
