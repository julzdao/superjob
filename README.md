# Superjob - The Odin Project

![Frame 1portadagithub](https://user-images.githubusercontent.com/66780327/125776757-b41cb3d5-bb40-4dc3-ba26-b7324808565b.png) 

Go to the [Live Preview](#);

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: Table of Contents</h2>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project"> ➤ About The Project</a></li>
    <li><a href="#folder-structure"> ➤ Folder Structure</a></li>
    <li><a href="#the-challenge"> ➤ The Challenge</a></li>
    <li><a href="#features"> ➤ Features</a></li>
    <li><a href="#screenshots"> ➤ Screenshots</a></li>
    <li><a href="#improvements"> ➤ Improvements</a></li>
    <li><a href="#faq"> ➤ FAQ</a></li>
    <li><a href="#attribution"> ➤ Attribution </a></li>
    <li><a href="#team"> ➤ Team</a></li>
  </ol>
</details>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- ABOUT THE PROJECT -->
<h2 id="about-the-project"> :pencil: About The Project</h2>

Superjob is a Job tracking web application made in Vanilla Javascript. This is the result of a collaboration between Nicolás Ríos and Julen Diaz for one of the assignments in The Odin Project. The Challenge was to build a Book Storage application where you could use it as an online library. However, because of our current job hunt in the field of Software development, instead of books, we thought about building a simple web application to track the best job offers out there in a Kanban Style. 

Even though we are still working on it, we have decided to share it with the community in case anyone would like to contribute. We think this is a great way of getting stronger as developers, so we hope that this project serves as an example of how to work on a team to build any student project. 

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- :paw_prints:-->
<!-- FOLDER STRUCTURE -->
<h2 id="folder-structure"> :cactus: Folder Structure</h2>

    code
    .
    │
    ├── assets
    │   ├── icons
    │   ├── images
    │   ├── feature_label_tables
    ├── css                        // Folder to compile all the css
    │   ├── styles.css
    │   ├── styles.css.map
    ├── sass                        // Everything with sass
    │   ├── 1_base
    │   ├── 2_utils
    │   ├── 3_layout
    │   ├── 4_modules
    │   ├── 5_states
    │   ├── 6_queries
    │   ├── style.scss              // Bridge to bring all sass modules together
    ├── scripts                     // javascript code herre
    │   ├── modules                 // Playing with modules to get a feel for modular js
    │   │    ├── api.js             
    │   │    ├── dragger.js
    │   │    ├── form.js
    │   │    ├── job.js
    │   │    ├── listeners.js
    │   │    ├── localStorage.js   
    │   │    ├── modals.js           
    │   │    ├── ui.js
    │   ├── main.js           
    ├── .gitignore 
    ├── index.html 
    ├── README.md 

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="the-challenge"> 🎯 The Challenge</h2>

- [X] Build a web application to track the best jobs
- [X] Understand how to use IIFE's
- [X] Create the Kanban feature to grap each application
- [X] Use localStorage to save the jobs
- [X] Use an API for getting company logos
- [X] Have fun
- [ ] Make it Live

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="features"> 🔥 Features </h2>

👔 Add a new job with the help of a modal form

✅️ Feature superjobs with a checkbox and black theme status

🐲 Drag jobs from one stage into another like a Kanban Board

🔗 Add a link to the Original job offer to check more details

🗑️ Delete jobs with a little icon on the right-bottom corner

⏳️ Count jobs in each stage

🏦 Get company logo with API 

🏬 Store jobs in a localStorage


<br/>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="screenshots"> 📷 Screenshots </h2>

![fullscreen](https://user-images.githubusercontent.com/66780327/130353281-3aea537f-00b3-4099-8fdd-c8a18426b8ea.png)

![supercard](https://user-images.githubusercontent.com/66780327/130353300-db8bed27-678f-4a4c-a89f-8ea9e68b66eb.png)

![whitecard](https://user-images.githubusercontent.com/66780327/130353307-4e25351c-24fd-4362-92dd-646d50e3593e.png)

![form](https://user-images.githubusercontent.com/66780327/130353313-2dd04e3f-9921-4277-bb47-cf833511d8e8.png)

![form-validation](https://user-images.githubusercontent.com/66780327/130353330-5d87786a-2ec3-41a3-9e49-ec618a58ab5c.png)

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="improvements"> ➕️ Additional Improvements </h2>

- [ ] Expand each job application to see more details 
- [ ] Edit each card with edit icon next to trash
- [ ] Add a profile section to keep your data online or locally 
- [ ] Add Tutorial to teach how to add a new job 
- [ ] Make it open-source so everyone can enjoy it

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="faq"> ❓️ FAQ </h2>

<!-- FAQ 1-->
<details>
<summary> How can I add a new Job?</summary>
<br/>
Just by clicking on the "+" black button on each stage, you can fill up the details of each job application, click on submit and be able to drag it wherever you want. 
</details>
<br/>

<!-- FAQ 2-->
<details>
<summary> Did you use a Pair-Programming Approach?</summary>
<br/>
More or less. We started the project with the aim of trying out this pair-programming technique. Apart from that, we have also worked on our own and merge together the code in a ping-pong style. The whole experience have been a great one for learning and sharing the best tips and strategies to make our code stronger. 
</details>
<br/>

<!-- FAQ 3-->
<details>
<summary> Can I contribute to the project?</summary>
<br/>
Absolutely! The goal of this application is to be able to track the best jobs out there so we can take a thoughtful decision about our future job. Completely free. Take into account that this was supposed to be an student project, so right now is really Vanilla. We are working little by little on make it live for everyone to enjoy.  
</details>
<br/>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="attribution"> 💬 Attribution </h2>

- Company Logo API by Clearbit [Documentation](https://clearbit.com/docs#logo-api)

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="team"> 👥 Team </h2>

- Nicolás Ríos 
- Julen Diaz 
