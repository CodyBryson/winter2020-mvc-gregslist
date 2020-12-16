import { generateId } from "../Utils/GenerateId.js"

export default class Job {

  constructor({ title, company, salary, description }) {
    this.id = generateId()
    this.title = title
    this.company = company
    this.salary = salary
    this.description = description

  }

  get Template() {
    return `
    <div class="col-md-4 col-6 mt-3">
      <div class="card" style = "width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <p class="card-text">${this.company}</p>
          <p class="card-text">$${this.salary}</p>
          <p class="card-text">${this.description}</p>
          <a href="#" class="btn btn-primary">Apply Now!</a>
          <div class="text-right">
            <button type="button" class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">Delete</button>
          </div>
        </div>
      </div>
      </div>
      `
  }
}