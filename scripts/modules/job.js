export default class Job {
  constructor(company, position, location, superjob, stage) {
    this.company = company;
    this.position = position;
    this.location = location;
    this.superjob = superjob;
    this.stage = stage || "wish-list";
  }
}
