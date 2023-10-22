# Microservices using webpack Module Fedrationn

##TierOne Saas 

This app shows how `microservices` can be used to make different apps and integrate them made for my personal  learning purpose and is not functional with api integartion.
* This app used `React` and `Vue` framework to make micro apps and uses `webpack` as a budler and `module fedration` to create and integrate microservices
* The app uses `git/github` for version control and `CI/CD` worflows to run actions
* `Amazon S3 storage` is used to store the build files automatically using github actions on push
* `Amazon cloudFront` is used to deploy the APP

## Project Assumed Requirements
1. Zero coupling between child projects
   - Each microservice is a individual package and can be used in isolation also for development
   -  To demostrate all apps can be developed independently one microservices  is built using `Vue` while others are using `React`
2. Near-zero coupling between container and child apps
   - The integartion is done in a very generic way using a callback function and there are no states or objects or components shared or imported
3. CSS from one project shouldn't affect another
   - This project used material ui for styling and customizes its CSS in JS feature  
4. Version control (monorepo vs separate) shouldn't have any impact on the overall project
   - All pacakges are part of same repo but even if decided to deploy the app using different repos it will not affect the projec
5. Container should be able to decide to always use the latest version of a microfrontend or specify a specific version
    - Currently only latest version of the microservices are deployed  but if required container can specify a version and deploy and use the specific version 

###Challenges faced while Development:
1. CSS from one app was applied to another apps element when integrated
   - This happened only in prod as both sub apps had different styles with same class name and all styles were applied when integrated 
   - Resolved by customizing the material UI's CSS in JS feature in each microservice to generate unique class name
2.  Cloudfront did not serve the pages when deployed i

## Project Screen Shot(s)
Container Service is the Host App showing Header and Marketing Service using `Module Fedration`
![Screenshot 2023-10-22 201314](https://github.com/legendvi/module_fedration_tierOneSaas/assets/41253273/5e6dcb2b-ec49-476b-a95d-a3f32f41efdc)
![Screenshot 2023-10-22 201244](https://github.com/legendvi/module_fedration_tierOneSaas/assets/41253273/525b8084-26e2-4bf6-8c0d-2ca4dc012d5b)

Authetication Service:
![Screenshot 2023-10-22 201336](https://github.com/legendvi/module_fedration_tierOneSaas/assets/41253273/5e9f551d-ce22-4a07-9bf7-faf535b1db7e)
![Screenshot 2023-10-22 201329](https://github.com/legendvi/module_fedration_tierOneSaas/assets/41253273/dffd7ea4-8734-4526-bce3-6dba119557b9)
Dashboard Service:
![Screenshot 2023-10-22 201404](https://github.com/legendvi/module_fedration_tierOneSaas/assets/41253273/585bd5ef-6e4a-4360-ad63-11059c69ff7f)

## Installation and Setup Instructions

  
Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  


To Start Server:

`npm start`  

To Visit App:

`https://d2wp3ptv2obz4u.cloudfront.net/ 

## Reflection

  - What was the context for this project? (ie: was this a side project? was this for Turing? was this for an experiment?)
  - What did you set out to build?
  - Why was this project challenging and therefore a really good learning experience?
  - What were some unexpected obstacles?
  - What tools did you use to implement this project?
      - This might seem obvious because you are IN this codebase, but to all other humans now is the time to talk about why you chose webpack instead of create react app, or D3, or vanilla JS instead of a framework etc. Brag about your choices and justify them here.  

#### Example:  

This was a 3 week long project built during my third module at Turing School of Software and Design. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.  

Originally I wanted to build an application that allowed users to pull data from the Twitter API based on what they were interested in, such as 'most tagged users'. I started this process by using the `create-react-app` boilerplate, then adding `react-router-4.0` and `redux`.  

One of the main challenges I ran into was Authentication. This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. Due to project time constraints, I had to table authentication and focus more on data visualization from parts of the API that weren't restricted to authenticated users.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, LoDash, D3, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on handrolling a `webpack.config.js` file to more fully understand the build process.
