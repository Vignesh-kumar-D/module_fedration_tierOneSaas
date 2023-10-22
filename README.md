# Microservices using webpack Module Fedrationn


## TierOne Saas 
To Visit App:
https://d2wp3ptv2obz4u.cloudfront.net/ 
# Table of contents
- [Title](#markdown-badges)
- [Table of contents]T(#table-of-contents)
- [Description](#Description)
- [Project assmed requirements](#project-assumed-requirements)
- [Installation and Setup Instructions](#installation-and-setup-instruction)
- [Reflection](#Reflection)
- 
## Description:
This app shows how `microservices` can be used to make different apps and integrate them made for my personal  learning purpose and is not functional with api integartion.
* This app used ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  and ![Vue.js](https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) framework to make micro apps and uses |![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)   as a budler and `module fedration` to create and integrate microservices
* The app uses ![GithubPages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)  for version control and `CI/CD` worflows to run actions
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
![Screenshot 2023-10-22 201314](https://github.com/legendvi/module_fedration_tierOneSaas/assets/41253273/5e6dcb2b-ec49-476b-a95d-a3f32f41efdc)
![Screenshot 2023-10-22 201244](https://github.com/legendvi/module_fedration_tierOneSaas/assets/41253273/525b8084-26e2-4bf6-8c0d-2ca4dc012d5b)

Authetication Service:
![Screenshot 2023-10-22 201336](https://github.com/legendvi/module_fedration_tierOneSaas/assets/41253273/5e9f551d-ce22-4a07-9bf7-faf535b1db7e)
![Screenshot 2023-10-22 201329](https://github.com/legendvi/module_fedration_tierOneSaas/assets/41253273/dffd7ea4-8734-4526-bce3-6dba119557b9)
Dashboard Service:
![Screenshot 2023-10-22 201404](https://github.com/legendvi/module_fedration_tierOneSaas/assets/41253273/585bd5ef-6e4a-4360-ad63-11059c69ff7f)

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

 
One of the main challenges I ran into was Authentication. This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. Due to project time constraints, I had to table authentication and focus more on data visualization from parts of the API that weren't restricted to authenticated users.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, LoDash, D3, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on handrolling a `webpack.config.js` file to more fully understand the build process.
