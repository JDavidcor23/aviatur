export const getData = async(url)=>{
    const resp = await fetch(url, {
      method: 'GET',
      headers: new Headers({ 'Content-type': 'application/json'}),
      mode: 'cors'
  });
    const data = await resp.json()
    return data
  }