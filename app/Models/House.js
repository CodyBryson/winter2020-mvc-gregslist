import { generateId } from "../Utils/GenerateId.js"

export default class House {
  constructor({ type, squareft, city, state, price, description, imgUrl }) {
    this.id = generateId()
    this.type = type
    this.squareft = squareft
    this.city = city
    this.state = state
    this.price = price
    this.description = description
    this.imgUrl = imgUrl
  }

  get Template() {
    return `
    <div class="col-md-4 col-6 mt-3">
    <div class="card">
        <img class="card-img-top" src="${this.imgUrl}" alt="">
        <div class="card-body">
            <h4 class="card-title">${this.squareft} sq ft.<span> </span>${this.type}</h4>
            <h5> Located in ${this.city}, ${this.state}</h5>
            <p class="card-text">${this.description}</p>
            <p class="card-text">$${this.price}</p>
            <div class="text-right">
                <button type="button" class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">Delete</button>
            </div>
        </div>
    </div>
    </div>
        `
  }
}