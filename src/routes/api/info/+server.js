import { osInfo } from 'systeminformation';


export const GET = async (event) => {
  const hostname = await osInfo()
    .then(data => {
      return data.hostname
  })
  .catch(error => {
    return error
  })

  return new Response(JSON.stringify([
    {"id": "hostname", "data": hostname}
  ]))    
}