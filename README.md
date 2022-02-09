# Superjob - The Odin Project

![portada](https://user-images.githubusercontent.com/66780327/153207325-b04958aa-e276-4808-a674-2e37763b69d4.png)

Go to the [Live Preview](https://julendiaz.github.io/superjob/);

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

<img width="1047" alt="screenshotzero" src="https://user-images.githubusercontent.com/66780327/153207542-fa9dac0d-9938-48a3-84c8-4ba97c3a5ec1.PNG">
<img width="1035" alt="form" src="https://user-images.githubusercontent.com/66780327/153207526-555fe256-0752-477b-83cd-f513d60c9403.PNG">
<img width="231" alt="stagescreenshot" src="https://user-images.githubusercontent.com/66780327/153207545-2341533a-4a5d-4a8b-b224-df8c1c7067c5.PNG">
<img width="268" alt="card" src="https://user-images.githubusercontent.com/66780327/153207547-ba7a7e1f-f46e-468a-b8a9-e5b6407a416b.PNG">

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
