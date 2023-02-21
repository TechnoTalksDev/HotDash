import { cpu, currentLoad, mem } from 'systeminformation';

let cpu_percent

function convert(bytes) {
  return (bytes/Math.pow(10,9)).toFixed(2)
}


export const GET = async (event) => {
  return new Response(await currentLoad()
  .then(data => {
    return Math.round(data.currentLoad)
  })
  .catch(error => {
    return error
  }))
  
}


