import { urls } from 'src/api/urls'

const headers: Headers = new Headers({
  'Accept': 'application/json',
  'Mode': 'no-cors',
})

const getRequest = (url: string): Request => new Request(url, { 
  method: 'GET',
  headers: headers,
})

const getJSON = (url: string): Promise<any> => {
  return fetch(getRequest(url))
    .then(res => {
      const resJson = res.json()
      return resJson
    })
    .catch(err => {
      console.log('Cannot get resource... - ', err)
    })
}

export const Api = {
  get: (url: string) => getJSON(url)
}