import CarsController from "./Controllers/CarsController.js";
import JobsController from "./Controllers/JobsController.js";

class App {
  //valuesController = new ValuesController();
  carsController = new CarsController()
  jobsController = new JobsController()
}

window["app"] = new App();
