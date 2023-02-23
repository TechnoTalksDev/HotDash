import { cpuTemperature, currentLoad, mem } from 'systeminformation';

function convert(bytes) {
  return (bytes/Math.pow(10,9)).toFixed(2)
}


export const GET = async (event) => {

  const cpu_temp =  await cpuTemperature()
    .then(data => {
      return data.main
    })
    .catch(error => {
      return error
    })

   const cpu_percent = await currentLoad()
    .then(data => {
      return Math.round(data.currentLoad)
    })
    .catch(error => {
      return error
    })

    return new Response(JSON.stringify([
      {"id": "CPU usage", "data": cpu_percent+"%"},
      {"id": "CPU temp", "data": cpu_temp+"C"}
    ]))
    
}


