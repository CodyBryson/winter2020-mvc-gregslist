import { ProxyState } from "../AppState.js"
import Job from "../Models/Jobs.js"

class JobsService {
  deleteJob(id) {
    ProxyState.jobs = ProxyState.jobs.filter(job => job.id != id)
  }
  createJob(newJob) {
    let job = new Job(newJob)
    ProxyState.jobs = [...ProxyState.jobs, job]

  }

}
export const jobsService = new JobsService()