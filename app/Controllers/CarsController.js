import { ProxyState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js"



function _drawCars() {
  let cars = ProxyState.cars
  let template = ''
  cars.forEach(car => {
    // NOTE Getters FAKE properties as methods
    template += car.Template
  })
  document.getElementById('cars').innerHTML = template
}

export default class CarsController {
  constructor() {
    ProxyState.on("cars", _drawCars)
    _drawCars()
    this.getCars()
  }

  getCars() {
    try {
      carsService.getCars()
    } catch (error) {
      console.error(error)
    }
  }
  createCar() {
    window.event.preventDefault()
    let form = window.event.target
    let newCar = {
      make: form['make'].value,
      model: form['model'].value,
      year: form['year'].value,
      price: form['price'].value,
      description: form['description'].value,
      imgUrl: form['imgUrl'].value
    }
    try {
      carsService.createCar(newCar)

    } catch (error) {
      console.error(error)
    }

    // @ts-ignore
    form.reset()
    // @ts-ignore
    $("#new-car-modal").modal('hide');
  }


  deleteCar(id) {
    try {
      carsService.deleteCar(id)
    } catch (error) {
      console.error(error)
    }
  }

  bid(id, price) {
    try {
      carsService.bid(id, price)
    } catch (error) {
      console.error(error)
    }
  }
  openShop(evt, offerName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(offerName).style.display = "block";
    evt.currentTarget.className += " active";
  }
}