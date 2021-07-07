class Job {
  constructor(company, position, location, superjob) {
    this.company = company;
    this.position = position;
    this.location = location;
    this.superjob = superjob;
  }

  isSuperJob(bool) {
    if (typeof bool !== "boolean") return;
    return this.superjob = bool;
  }
}

export { Job };
