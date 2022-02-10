import { defaultJobs } from "./defaultJobs.js";

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

  static saveJobArr(arr) {
    let arrJSON = JSON.stringify(arr);
    localStorage.setItem("jobApplications", arrJSON);
  }

  static getJobs() {
    return JSON.parse(localStorage.getItem("jobApplications")) || defaultJobs;
  }

  static getJob(jobId) {
    const jobs = this.getJobs();
    const index = jobs.findIndex((key) => key.id === jobId);
    return jobs[index];
  }

  static editJob(jobId, key, val) {
    const jobs = this.getJobs();
    const index = jobs.findIndex((key) => key.id === jobId);
    jobs[index][key] = val;
    this.saveJobArr(jobs);
  }

  static deleteJob(jobId) {
    const jobs = this.getJobs();
    const filteredJobs = jobs.filter(job => job.id !== jobId)
    this.saveJobArr(filteredJobs);
  }
}
