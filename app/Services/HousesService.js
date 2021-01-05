import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"
import { api } from "./AxiosService.js"

class HousesService {

  async getHouses() {
    let res = await api.get("houses")
    ProxyState.houses = res.data.map(h => new House(h))
  }
  async deleteHouse(id) {
    let res = await api.delete("houses/" + id)
    ProxyState.houses = ProxyState.houses.filter(house => house.id != id)
  }
  async createHouse(newHouse) {
    let house = await api.post("houses", newHouse)

    this.getHouses()
  }
  async bid(id, newPrice) {
    let houseData = { price: newPrice }
    let res = await api.put("houses/" + id, houseData)
    let oldHouseIndex = ProxyState.houses.findIndex(h => h.id == id)

    let temp = ProxyState.houses
    temp.splice(oldHouseIndex, 1, new House(res.data))
    ProxyState.houses = temp
  }
}
export const housesService = new HousesService()