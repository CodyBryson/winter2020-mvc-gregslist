import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"

class HousesService {
  deleteHouse(id) {
    ProxyState.houses = ProxyState.houses.filter(house => house.id != id)
  }
  createHouse(newHouse) {
    let house = new House(newHouse)
    ProxyState.houses = [...ProxyState.houses, house]

  }

}
export const housesService = new HousesService()