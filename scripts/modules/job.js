export default class Job {
  constructor(company, position, location, link, superjob, stage, date) {
    this.company = company;
    this.position = position;
    this.location = location;
    this.link = link;
    this.superjob = superjob;
    this.stage = stage || "wish-list";
    this.date = date;
  }
}
