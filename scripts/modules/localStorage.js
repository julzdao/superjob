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
}
