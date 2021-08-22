# Superjob - The Odin Project

![Frame 1portadagithub](https://user-images.githubusercontent.com/66780327/125776757-b41cb3d5-bb40-4dc3-ba26-b7324808565b.png) 

Go to the [Live Preview](#);

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: Table of Contents</h2>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project"> ➤ About The Project</a></li>
    <li><a href="#prerequisites"> ➤ Prerequisites</a></li>
    <li><a href="#folder-structure"> ➤ Folder Structure</a></li>
    <li><a href="#dataset"> ➤ Dataset</a></li>
    <li><a href="#roadmap"> ➤ Roadmap</a></li>
    <li>
      <a href="#preprocessing"> ➤ Preprocessing</a>
      <ul>
        <li><a href="#preprocessed-data">Pre-processed data</a></li>
        <li><a href="#statistical-feature">Statistical feature</a></li>
        <li><a href="#topological-feature">Topological feature</a></li>
      </ul>
    </li>
    <!--<li><a href="#experiments">Experiments</a></li>-->
    <li><a href="#results-and-discussion"> ➤ Results and Discussion</a></li>
    <li><a href="#references"> ➤ References</a></li>
    <li><a href="#contributors"> ➤ Contributors</a></li>
  </ol>
</details>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- ABOUT THE PROJECT -->
<h2 id="about-the-project"> :pencil: About The Project</h2>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
## Overview

This is the first assignment from the Javascript course on The Odin Project. The main task was to build a kind of Library App to store all the books that you are reading. Instead of going for the simpler route, giving the case that I am currently actively looking for a job, I wanted to build a job board to keep track of all the applications.

With a little bit of research, I saw a few other apps out there with a similar idea with the one I had. For educational purposes, I really do not aspire to create a fully fledge application. In that case, I will keep it simple and use it as a way of learning about Object-Oriented Programming and the curiosity of how to create kanban boards.

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- :paw_prints:-->
<!-- FOLDER STRUCTURE -->
<h2 id="folder-structure"> :cactus: Folder Structure</h2>

    code
    .
    │
    ├── data
    │   ├── raw_data
    │   │   ├── phone
    │   │   │   ├── accel
    │   │   │   └── gyro
    │   │   ├── watch
    │   │       ├── accel
    │   │       └── gyro
    │   │
    │   ├── transformed_data
    │   │   ├── phone
    │   │   │   ├── accel
    │   │   │   └── gyro
    │   │   ├── watch
    │   │       ├── accel
    │   │       └── gyro
    │   │
    │   ├── feature_label_tables
    │   │    ├── feature_phone_accel
    │   │    ├── feature_phone_gyro
    │   │    ├── feature_watch_accel
    │   │    ├── feature_watch_gyro
    │   │
    │   ├── wisdm-dataset
    │        ├── raw
    │        │   ├── phone
    │        │   ├── accel
    │        │   └── gyro
    │        ├── watch
    │            ├── accel
    │            └── gyro
    │
    ├── CNN_Impersonal_TransformedData.ipynb
    ├── CNN_Personal_TransformedData.ipynb  
    ├── CNN_Impersonal_RawData.ipynb    
    ├── CNN_Personal_RawData.ipynb 
    ├── Classifier_SVM_Personal.ipynb
    ├── Classifier_SVM_Impersonal.ipynb
    ├── statistical_analysis_time_domain.py
    ├── Topological data analysis.ipynb  
## The Challenge

- [ ] Build a job board to store all job applications
- [ ] Use Object-Oriented Programming for new Applications
- [ ] Create the Kanban feature to grap each application
- [ ] Create an home-made illustration for the thumbnail
- [ ] Use an API for the logos
- [ ] Have fun

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
## Features

☢ Deeply Reactive, Directly Mutate State at any level to Update Component

⚡ Blazing Fast - 25% faster than `useState`

📺 No Extra Re-Renders - Auto Mutation batching

🌿 Always Fresh State, _unlike_ `useState`

🧬 Reactive Bindings For Inputs

⚛ Reactive Props

☕ Zero Dependencies, Ultra Light-Weight `< 1kb`

<br/>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

### Useful Sources

- [How to get values from an HTML form](https://stackoverflow.com/questions/3547035/javascript-getting-html-form-values)
- [How to get the checked value from a checkbox](https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/)
- [How to get Y position from a div](https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element-relative-to-the-browser-window)
- [Get Bounding Client Rect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
- [Git Repo as a Module ES6 Example](https://github.com/mdn/js-examples/tree/master/modules)

## Approaches

## Additional Improvements

- [ ] Add more information for each position
- [ ] Be able to open-up each position to see more details
- [ ] Add a profile section to keep your data online or locally


## ❓ FAQs

<!-- faq 1 -->
<details>
<summary>Can I use useRS hook more than once ? </summary>
<br/>

**Yes.** You don't have to put all of the state of the component inside the state object. You can use the hook more than once.

#### Example

```javascript
const todos = useRS([])
const form = useRS({
  name: '',
  age: 0,
})
```

While this is okay, **I would advise you to not do this**, Because putting all of state in one object gives you **better *performance** in the case of radioactive-state. (because of better mutation batching)

It would also be **hard to store simple value types**, because simple value types can not be mutated and so you would need to wrap it inside an object.

#### Example

```javascript
const count = useRS(0) // invalid, gives error ❌
```

```javascript
const count = useRS( { value: 0 }) // works ✅
```

This would also make creating reactive bindings awkward. That's why it is **strongly recommended to store all the state into a single object** by using useRS only once !

---
</details>


<!-- FAQ 2 -->
<details>
<summary> Is this magic, How does it work ? </summary>
<br/>
radioactive-state uses **JavaScript Proxy** to create a deeply reactive state by recursively proxifying the state. Whenever a mutation occurs in the state tree, a function is called with information about where the mutation took place which schedules an async re-render to update the component to reflect the changes in state to UI.
</details>
<br/>


## Team

[![Harsh Vijay](https://avatars1.githubusercontent.com/u/12688534?v=3&s=144)](https://github.com/iharsh234)  | [![Quandl.com](https://github.com/iharsh234/WebApp/blob/master/images/quandl.jpg)](https://www.quandl.com/)
---|---
[Harsh Vijay ](https://github.com/iharsh234) |[Quandl](https://www.quandl.com)
