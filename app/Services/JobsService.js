import { ProxyState } from "../AppState.js"
import Job from "../Models/Jobs.js"
import { api } from "./AxiosService.js"

class JobsService {

  async getJobs() {
    let res = await api.get("jobs")
    ProxyState.jobs = res.data.map(j => new Job(j))
  }
  async deleteJob(id) {
    let res = await api.delete("jobs/" + id)
    ProxyState.jobs = ProxyState.jobs.filter(job => job.id != id)
  }
  async createJob(newJob) {
    let job = await api.post("jobs", newJob)

    this.getJobs()
  }

}
export const jobsService = new JobsService()