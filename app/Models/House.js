import { generateId } from "../Utils/GenerateId.js"

export default class House {
  constructor({ bedrooms, bathrooms, levels, imgUrl, year, price, description, id }) {
    this.id = id
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.levels = levels
    this.imgUrl = imgUrl
    this.year = year
    this.price = price
    this.description = description
  }

  get Template() {
    return `
    <div class="col-md-4 col-6 mt-3">
    <div class="card">
        <img class="card-img-top" src="${this.imgUrl}" alt="">
        <div class="card-body">
            <h4 class="card-title">${this.levels}floor<span> </span>${this.bedrooms}bedroom(s)<span></span>${this.bathrooms}bathroom(s)</h4>
            <h5> Built in ${this.year}</h5>
            <p class="card-text">${this.description}</p>
            <p class="card-text">$${this.price}</p>
            <div class="text-right">
            <button type="button" class="btn btn-success" onclick="app.housesController.bid('${this.id}'), ('${this.price += 5000}')">Bid</button>
                <button type="button" class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
            </div>
        </div>
    </div>
    </div>
        `
  }
}