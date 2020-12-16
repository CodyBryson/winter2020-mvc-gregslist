import Car from "./Models/Car.js"
import Job from "./Models/Jobs.js"
import House from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = [new Car({ make: "Benz", model: "1", year: 1985, price: 10000000, description: "Its old", imgUrl: "https://d1vl6ykwv1m2rb.cloudfront.net/blog/wp-content/uploads/2018/03/20142414/auto-11.jpg" })];

  /**@type {Job[]} */
  jobs = [new Job({ title: "Junior Developer", company: "Boise Codeworks", salary: 35000, description: "figure out javascript" })];

  /**@type {House[]} */
  houses = [new House({ type: "Family Home", squareft: 3000, city: "Nampa", state: "ID", price: 190000, description: "Quiet and quaint", imgUrl: "https://multifiles.pressherald.com/uploads/sites/10/2020/03/TF.NC_.FrptHabitatHouse.0319.jpg?rel=related" })]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
