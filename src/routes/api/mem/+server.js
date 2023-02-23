import { cpu, currentLoad, mem } from 'systeminformation';

function convert(bytes) {
  return (bytes/Math.pow(10,9)).toFixed(2)
}

export const GET = async (event) => {
  return new Response(await mem()
  .then(data => {
    return JSON.stringify([
      {"id": "RAM used", "data": convert(data.used)+"G"},
      {"id": "RAM usage", "data": (convert(data.used)/convert(data.total)*100).toFixed(0)+"%"},
      {"id": "RAM total", "data": convert(data.total)+"G"}
    ])
    //{["percent": convert(data.used)], ["used": (convert(data.used)/convert(data.total)*100).toFixed(0)]}
  }))
}