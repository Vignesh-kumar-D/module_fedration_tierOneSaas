# Microservices using webpack Module Fedrationn
# TierOne: Microservices Architecture with Module Federation

## Live Demo
[Demo Link](https://d2wp3ptv2obz4u.cloudfront.net/) (Currently offline - see local setup instructions below)

## 🎯 Overview
Enterprise-grade demonstration of micro-frontend architecture using Webpack 5's Module Federation. This project showcases how large-scale applications can be broken down into independently deployable micro-frontends while maintaining seamless user experience.

## 🏗️ Architecture
The TierOne application implements a micro-frontend architecture using Webpack 5's Module Federation. Here's how the different pieces fit together:
```mermaid
graph TD
    A[Start] g?}
    B -->|Yes| C[Great!]
    B -->|No| D[Check the syntax]


### Core Services
1. **Container (Host)**
   - Main application shell
   - Routing and navigation management
   - Micro-frontend orchestration

2. **Marketing Service**
   - Built with React
   - Showcases product features
   - Independent deployment pipeline

3. **Authentication Service**
   - User authentication flow
   - Session management
   - Secure routing implementation

4. **Dashboard Service**
   - Built with Vue.js
   - Data visualization
   - Cross-framework integration example

## 🚀 Technical Highlights

### Module Federation Implementation
- Zero-coupling architecture between micro-frontends
- Cross-framework compatibility (React + Vue.js)
- Runtime dependency sharing
- Isolated CSS implementation using Material-UI
- Version control independence

### CI/CD Pipeline
- GitHub Actions workflow
- Automated testing
- S3 bucket deployment
- CloudFront distribution
- Zero-downtime deployment

### Performance Optimizations
- Lazy loading of micro-frontends
- Shared dependencies management
- Optimized bundle splitting
- Caching strategies

## 🛠️ Tech Stack
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![Vue.js](https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
- ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
- ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
- ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

## 📸 Screenshots
Container Service is the Host App showing Header and Marketing Service using `Module Fedration`
![Screenshot 2023-10-22 201314](https://github.com/legendvi/module_fedration_tierOneSaas/assets/41253273/704e5e1a-3e46-44b1-9a91-5abbc6724ea6)
![Screenshot 2023-10-22 201244](https://github.com/legendvi/module_fedration_tierOneSaas/assets/41253273/d957a4e8-e01d-4314-9855-412ca740db3c)



Authetication Service:
![Screenshot 2023-10-22 201336](https://github.com/legendvi/module_fedration_tierOneSaas/assets/41253273/a41c19c9-8e86-4fd6-875a-ff41a83614f8)
![Screenshot 2023-10-22 201329](https://github.com/legendvi/module_fedration_tierOneSaas/assets/41253273/ab37565a-c159-4eab-b108-5f4e9ec4d6cb)


Dashboard Service:
![Screenshot 2023-10-23 185350](https://github.com/legendvi/module_fedration_tierOneSaas/assets/41253273/aa020476-7868-40de-98b5-fbcfc23c07bc)


## 🚦 Getting Started

### Prerequisites
- Node.js >= 14.x
- npm >= 6.x

### Local Development
```bash
# Clone the repository
git clone https://github.com/legendvi/module_fedration_tierOneSaas.git

# Install dependencies
npm install

# Start development server
npm start

# Running tests
npm test

# Building for production
npm run build
 

## Reflection:

This is a side Project I developed to better understand how to work with micro frontends to create apps which are independent and can be developed and modified in isolation.
This was a two week long project and started as a  `React` based microfrontend.

Communicating Navigation history  used some amount props driling and could have solved using a shared state but I wanted all thee apps to be almost independently developled and deployed so most communications between host and remote are only using Callback functions and

Also I have not used create-react-app or Vue-cli to build the apps as that would include all other dependencies with them and I wanted to keep this light as the goal was only to better understand miccro fronends

Took help of documentation to see how to use CI/CD to and deploy to S3 on push to `main` branch and how to deploy in cloudfront

