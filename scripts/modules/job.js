class Job {
  constructor(company, position, location, superjob) {
    this.company = company;
    this.position = position;
    this.location = location;
    this.superjob = superjob;
  }

  testClass() {
    return `Hello ${this.company} ${this.position} ${this.location} ${this.superjob}`;
  }
}

export { Job };
