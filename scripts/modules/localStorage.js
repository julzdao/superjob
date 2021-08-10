export default class Storage {
  static saveJob(job) {
    //Get job array from local, if null, create new empty array
    let jobArray = JSON.parse(localStorage.getItem("jobApplications")) || [];
    jobArray.push(job);
    //Parse to JSON
    let jobArrayJSON = JSON.stringify(jobArray);
    //Save array into localStorage 
    localStorage.setItem("jobApplications", jobArrayJSON);
  }

  static getJobs() {
    return JSON.parse(localStorage.getItem("jobApplications")) || [];
  }

  static deleteJob() {
    const trashIcons = document.querySelectorAll(".icon--trash");

    trashIcons.forEach((icon) => {
      icon.addEventListener("click", function () {
        const card = icon.parentElement.parentElement.parentElement; 
        const currentArr = JSON.parse(localStorage.getItem("jobApplications"));

        for (let i = 0; i < currentArr.length; i++) {
          if (currentArr[i].id === card.id) {
            JSON.parse(localStorage.getItem("jobApplications")).splice(currentArr.indexOf(currentArr[i]), 1);
          }
        }
        console.log(JSON.parse(localStorage.getItem("jobApplications"))[0].company)

      })
    })
  }
}
