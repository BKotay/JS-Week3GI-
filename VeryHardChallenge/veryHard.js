//Created person class and used this. to target the properties being made.

class Person {
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }

  fetchJob() {
    return `${this.name} is a ${this.job}`;
  }

  exercise() {
    return "Running is fun! - said no one ever.";
  }
}
//public field
class Programmer extends Person {
  lang = [];
  name;
  job;
  constructor(name, job, age, lang) {
    super(name, job, age);
    this.lang.push(...lang);
    console.log(this.lang);
    this.busy = true;
  }

  completeTask() {
    this.busy = false;
  }

  acceptNewTask() {
    this.busy = true;
  }

  offerNewTask() {
    if (this.busy) {
      console.log(`${this.name} can't accept any new tasks right now`);
    } else {
      console.log(`${this.name} would love to take on the responsibility.`);
    }
  }

  learnLanguage(codingLang) {
    lang.push(codingLang);
    // this.listLanguages()
  }

  listLanguages() {
    for (let i = 0; i < this.lang.length; i++) {
      return this.lang;
    }
  }
}

const person1 = new Person("Harold", "Backend Enginner", 20);
console.log(person1.fetchJob());

const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);

const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);

const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);

console.log(c1.busy)
c1.completeTask()
console.log(c1.busy)
c1.acceptNewTask()
console.log(c1.busy)
c1.offerNewTask()
c1.busy = false
console.log(c1.offerNewTask() + c1.offerNewTask())

console.log(c1.listLanguages()[1]);
console.log(c2.listLanguages());
console.log(c3.listLanguages());
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise();
person1.fetchJob();
