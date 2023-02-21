import { cpu, currentLoad, mem } from 'systeminformation';
import { cpu_percent, mem_gb, mem_percent } from './stores';

function convert(bytes) {
  return (bytes/Math.pow(10,9)).toFixed(2)
}

function updateCPU() {
  console.log("Updating memory values")
  currentLoad()
  .then(data => {
    cpu_percent.update(Math.round(data.currentLoad))
    console.log(`CPU: ${cpu_percent}%`)
  })
  .catch(error => console.error(error));
}

function updateMem() {
  console.log("Updating memory values")
  mem()
  .then(data => {
    mem_gb.update(convert(data.used))
    mem_percent.update((convert(data.used)/convert(data.total)*100).toFixed(0))
    console.log(`Mem: ${mem_gb} GB`)
    console.log(mem_percent)
  })
}

setInterval(updateCPU, 100000)
setInterval(updateMem, 100000)

