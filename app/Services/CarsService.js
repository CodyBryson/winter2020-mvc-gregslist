import { ProxyState } from "../AppState.js"
import Car from "../Models/Car.js"
import { api } from "./AxiosService.js"
class CarsService {

  async getCars() {
    let res = await api.get("cars")
    ProxyState.cars = res.data.map(c => new Car(c))
  }
  async deleteCar(id) {
    let res = await api.delete("cars/" + id)

    ProxyState.cars = ProxyState.cars.filter(car => car.id != id)
  }
  async createCar(newCar) {
    let car = await api.post("cars", newCar)

    this.getCars()
  }
  async bid(id, newPrice) {
    let carData = { price: newPrice }
    let res = await api.put("cars/" + id, carData)
    let oldCarIndex = ProxyState.cars.findIndex(c => c.id == id)

    let temp = ProxyState.cars
    temp.splice(oldCarIndex, 1, new Car(res.data))
    ProxyState.cars = temp
  }

}
// Singleton Pattern
export const carsService = new CarsService()