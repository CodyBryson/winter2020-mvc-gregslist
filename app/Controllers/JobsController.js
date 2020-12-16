import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"

function _drawJobs() {
  let jobs = ProxyState.jobs
  let template = ''
  jobs.forEach(job => {
    template += job.Template
  })
  document.getElementById('jobs').innerHTML = template
}

export default class JobsController {
  constructor() {
    ProxyState.on("jobs", _drawJobs)
    _drawJobs()
  }

  createJob() {
    window.event.preventDefault()
    let form = window.event.target
    let newJob = {
      title: form['title'].value,
      company: form['company'].value,
      salary: form['salary'].value,
      description: form['description'].value
    }
    jobsService.createJob(newJob)
    // @ts-ignore
    form.reset()
    // @ts-ignore
    $("#new-job-modal").modal('hide');
  }


  deleteJob(id) {
    jobsService.deleteJob(id)
  }
}