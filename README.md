# Quizify

Quizify is an interactive app designed to challenge and enhance your knowledge through engaging quizzes. Whether you're testing your trivia skills, learning new facts, the app offers a fun and educational experience. It is a dynamic and user-friendly application that transforms learning into an enjoyable and rewarding experience, perfect for individuals of all ages and knowledge levels.

## Home Page
![Screenshot 2024-12-30 114523](https://github.com/user-attachments/assets/fcf913c0-8e38-4d4c-b04d-e421214e6270)

## Question Page
![Screenshot 2024-12-30 114719](https://github.com/user-attachments/assets/72200351-5814-41da-a36e-7881bd9b163f)

## Table of Contents
- [Quizify](#quizify)
- [Demo](#demo)
- [Features](#features)
- [API](#api)
- [Technologies](#technologies)
- [Getting Started](#getting-started)

## Demo
[Quizify](https://quizify-one-cyan.vercel.app/)

## Features
- **Diverse Categories**: Choose from topics like Music, Science, History and more
- **Customizable Question Limit**: Users can select the number of questions per quiz
- **Progressive Scoring** :Clear statistics track your progress and display your score
- **Motivational Feedback**: Personalized messages at the end of each quiz
- **Timed Mode**: Time limit for each question
- **Responsive Design**: Optimized for both mobile and desktop devices

## API
This project uses [The Trivia API](https://the-trivia-api.com/) to fetch quiz questions for each category.

## Technologies
+ Next.js
+ TypeScript
+ TailwindCSS
+ DaisyUI
+ Zustand

## Getting Started

### Prerequisites

Before runing the application and start using, make sure you have following installed:
- Node.js
- pnpm

### Installation
1. Clone the repository
```
git clone https://github.com/Mujo78/quizify.git
```

2. Go to the project directory and install dependencies for the application
```
pnpm install
```
3. Create a `.env.local` file in the project directory and add the environment variables as shown in the `.env.example` file

### Usage
1. Start the development server
```
pnpm run dev
```
2. Open [http://localhost:3000/](http://localhost:3000/) with your browser to see the application in action

### Building for Production
To create a production build run:
```
pnpm run build
```
