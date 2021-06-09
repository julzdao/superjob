# Job Board - The Odin Project

<!-- ![Frame 1portadagithub](assets/images/portada.png) -->

Go to the [Live Preview](#);

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Key Features](#key-features)
- [My process](#my-process)
  - [Understand the problem](#understand-the-problem)
  - [Pseudocode](#pseudocode)
  - [Mindmap](#mindmap)
  - [Useful sources](#useful-sources)
- [Approaches](#approaches)
  - [Main Operator](#main-operator)
  - [Clear All](#clear-all)
  - [Check Decimals](#check-decimals)
  - [Keyboard Support](#keyboard-support)
- [Additional Improvements](#additional-improvements)
- [Attribution](#attribution)
- [Contact](#contact)

## Overview

This is the first assignment from the Javascript course on The Odin Project. The main task was to build a kind of Library App to store all the books that you are reading. Instead of going for the simpler route, giving the case that I am currently actively looking for a job, I wanted to build a job board to keep track of all the applications.

With a little bit of research, I saw a few other apps out there with a similar idea with the one I had. For educational purposes, I really do not aspire to create a fully fledge application. In that case, I will keep it simple and use it as a way of learning about Object-Oriented Programming and the curiosity of how to create kanban boards.

## The Challenge

- [ ] Build a job board to store all job applications
- [ ] Use Object-Oriented Programming for new Applications
- [ ] Create the Kanban feature to grap each application
- [ ] Create an home-made illustration for the thumbnail
- [ ] Use an API for the logos
- [ ] Have fun

## Key Features

- Add new Job Applications
- Be able to transfer Applications from one stage into another (Kanban)
- Add 3 simple data for each application (Business, Position, Location)
- Search for the logo of the Business with an API
- Scroll infinitely in each stage

## My Process

> Thinking like a Programmer is about having fun with problem-solving

### Understand the problem

- How are we going to create new job applications?
  - Using the object-oriented exercise we did with the book store
- Where are we going to store all of the applications?
  - In an array
- What are we going to put inside the constructor?
  - Business Name
  - Position
  - Location
  - Salary
  - Superjob checkbox
- How are we going to get the values from the form?
  - Using the id's from each element on the form
  - When poping each form and pressing submit -> Those values create a new Application
- How are we going to add each new application with the second function?
  - Add an event listener outside for the form submit -> Assign those values
  - With the second function -> Create new Application and push that into the array
- How to submit the values?
  - Add an event listener for submit inside the second function
- How to add each application to the display?
  - Create a for loop and add all of the array items with appendchild to the container div
- How to remove an element from the list?
  - By giving each one a data-attribute and find the index of that element on the array list
- How to toggle between superwork or not?
  - By creating a function that toggles between both stages
- How to store data?
  - Use Firebase so we can store all the data online, so when we log every time, the same job applications keep being there.

### Pseudocode

After reading the first chapter of the book "Think like a programmer", I wanted to put in practice that philosophy of "Always have a plan". For this purpose, I spend a few hours researching and thinking about the best way to implement each feature in plain english.

```
Create an empty array for storing all Applications
Create function Constructor for new Applications (company, position, location, salary, superjob)
  this company name = company
  this position name = position
  this location name = location
Create function inside the prototype for Application for the superjob checkbox
  if (superjob) then tick the checkbox
Create function for adding new Applications to the ApplicationArray
  Create new const for currentApplication = new App(newCompany, newPosition, newLocation, newSalary, newSuperjob)
  const applicationArr.push(currentApplication)
Add event listener for newApplication button
  Display pop up with form so the user can get the input
Add event listener for removing each application
  Find the index of the application in the applicationArr given the data-attribute
  Splice the array so you remove only that element
Create a function that toggles the superjob status when onClick()
  Get the data-attribute from the application clicked
  Assign that superjob status on its object to true or false if checkbox is ticked or not

```

Obviously, after coding for a while, I had to re-arrange blocks and come up with solutions for a few other problems. Overall, it really helped me with speeding up the workflow.

### Mindmap

After finishing up the pseudocode method, I thought that some parts were a bit confusing to digest for my current level. That's why I tried to express each solution and function into a simple mindmap. This way I could visualize all the co-relations between variables and organize all of the ideas.

This is the first solution I came up with before any code was written. Even though it was a good start and helped me a lot in visualizing the funcion callings, I had to re-arrange lots of thinks in order to work it out.

![Mindmap](#)

### Useful Sources

- [How to get values from an HTML form](https://stackoverflow.com/questions/3547035/javascript-getting-html-form-values)

## Approaches

## Additional Improvements

- [ ] Add more information for each position
- [ ] Be able to open-up each position to see more details
- [ ] Add a profile section to keep your data online or locally

## Attribution

## Contact

[<img alt="Instagram" src="https://img.shields.io/badge/shifujulen%20-%23E4405F.svg?&style=for-the-badge&logo=Instagram&logoColor=white"/>](https://www.instagram.com/shifujulen/)
[<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>](https://www.linkedin.com/in/julenfront/)
[<img alt="Youtube" src="https://img.shields.io/badge/shifujulen%20-%23FF0000.svg?&style=for-the-badge&logo=YouTube&logoColor=white"/>](https://www.youtube.com/channel/UCUoloquxVnnNLFTD8RwthIQ)
[<img alt="Twitter" src="https://img.shields.io/badge/@shifujulen%20-%231DA1F2.svg?&style=for-the-badge&logo=Twitter&logoColor=white"/>](https://twitter.com/shifujulen)
