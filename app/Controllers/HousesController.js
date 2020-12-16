import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"

function _drawHouses() {
  let houses = ProxyState.houses
  let template = ''
  houses.forEach(house => {
    template += house.Template
  })
  document.getElementById('houses').innerHTML = template
}

export default class HousesController {
  constructor() {
    ProxyState.on("houses", _drawHouses)
    _drawHouses()
  }

  createHouse() {
    window.event.preventDefault()
    let form = window.event.target
    let newHouse = {
      type: form['type'].value,
      squareft: form['squareft'].value,
      city: form['city'].value,
      state: form['state'].value,
      price: form['price'].value,
      descrption: form['description'].value,
      imgUrl: form['imgUrl'].value
    }
    housesService.createHouse(newHouse)
    // @ts-ignore
    form.reset()
    // @ts-ignore
    $("#new-house-modal").modal('hide');
  }


  deleteHouse(id) {
    housesService.deleteHouse(id)
  }
}