# Catinder

Catinder is a mobile application built with React Native and Expo, where users can browse and match with adorable cats available.

<div align="center">
  <img alt="Rafael Ferreira" src="https://i.imgur.com/S1aBE6X.gif" width="auto">
</div>

<br>

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)

## Features

- **Swipe to Match:** Swipe left or right to browse through cat profiles.


## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** and **npm** installed on your development machine.
- **Expo CLI** installed globally (`npm install -g expo-cli`).
- A physical device or emulator/simulator set up for testing.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ravigaou/catinder.git
   cd catinder
   ```

2. **Install dependencies:**
   ```bash 
   npm install
   ```

3. **Generate your own CAT_API_KEY and replace in .env file**
   ```bash 
   EXPO_PUBLIC_CAT_API_KEY=
   ```

 ### Running the app

1. **Download Expo Go:**  
   - For Android: [Download from Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)
   - For iOS: [Download from App Store](https://itunes.apple.com/app/apple-store/id982107779)


2. **Running the project:**  
   ```bash 
   npx expo start
   ```

3. **Scan the QRcode:**  
   
    Then just scan using your phone's camera the QRcode, or insert the URL exposed by Expo project.


 ### Problems found on the API
1. **get/cats**
- https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=aZyiLrsCh#tag/Breeds/paths/~1breeds/get

1. **post/votes**
https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=aZyiLrsCh#tag/Votes/paths/~1votes/post?api_key=live_xm7TtR4nlcF6MUq6I1vNKSvLKpLZT7DVyJUkbwHjJZ6ggY7JY9xNFwbgnjyH1rt8'

> [!NOTE]

> Even adding the API_KEY both request didn't work. (https://developers.thecatapi.com)

> So, I have implemented using the public API. (https://api.thecatapi.com/v1)

 ### Dependencies
 
1. **Key dependencies used in this project:**

- React Native - Core framework for building mobile apps.
- Expo - Framework and platform for universal React applications.
- Axios - HTTP client for API requests.


