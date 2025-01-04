# Microservices using webpack Module Fedrationn

## TierOne Saas 
To Visit App:
https://d2wp3ptv2obz4u.cloudfront.net/ (This site is down as AWS started charging money you can check the [installation](#installation-and-setup-instruction) and run this locally  )
# Table of contents
- [Title](#markdown-badges)
- [Table of contents](#table-of-contents)
- [Description](#Description)
- [Project assmed requirements](#project-assumed-requirements)
- [Installation and Setup Instructions](#installation-and-setup-instruction)
- [Reflection](#Reflection)
  
## Description:
This app shows how `microservices` can be used to make different apps and integrate them made for my personal  learning purpose and is not functional with api integartion.
* This app used ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  and ![Vue.js](https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) framework to make micro apps and uses ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)   as a budler and `module fedration` to create and integrate microservices
* The app uses ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) and ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) for version control and `CI/CD` worflows to run actions
* `Amazon S3 storage` is used to store the build files automatically using github actions on push
* `Amazon cloudFront` is used to deploy the APP

## Project Assumed Requirements:
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


## Project Screen Shot(s):
Container Service is the Host App showing Header and Marketing Service using `Module Fedration`
![Screenshot 2023-10-22 201314](https://github.com/legendvi/module_fedration_tierOneSaas/assets/41253273/704e5e1a-3e46-44b1-9a91-5abbc6724ea6)
![Screenshot 2023-10-22 201244](https://github.com/legendvi/module_fedration_tierOneSaas/assets/41253273/d957a4e8-e01d-4314-9855-412ca740db3c)



Authetication Service:
![Screenshot 2023-10-22 201336](https://github.com/legendvi/module_fedration_tierOneSaas/assets/41253273/a41c19c9-8e86-4fd6-875a-ff41a83614f8)
![Screenshot 2023-10-22 201329](https://github.com/legendvi/module_fedration_tierOneSaas/assets/41253273/ab37565a-c159-4eab-b108-5f4e9ec4d6cb)


Dashboard Service:
![Screenshot 2023-10-23 185350](https://github.com/legendvi/module_fedration_tierOneSaas/assets/41253273/aa020476-7868-40de-98b5-fbcfc23c07bc)


## Installation and Setup Instructions:
  
Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm start`  

## Reflection:

This is a side Project I developed to better understand how to work with micro frontends to create apps which are independent and can be developed and modified in isolation.
This was a two week long project and started as a  `React` based microfrontend.

Communicating Navigation history  used some amount props driling and could have solved using a shared state but I wanted all thee apps to be almost independently developled and deployed so most communications between host and remote are only using Callback functions and

Also I have not used create-react-app or Vue-cli to build the apps as that would include all other dependencies with them and I wanted to keep this light as the goal was only to better understand miccro fronends

Took help of documentation to see how to use CI/CD to and deploy to S3 on push to `main` branch and how to deploy in cloudfront

