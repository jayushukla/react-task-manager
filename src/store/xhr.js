const JSONHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  
  export const xhr = (url, options) => {
    let headers = Object.assign({}, JSONHeaders)
    return fetch(url, Object.assign({ headers }, options))
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json()
        } else {
          return response.json()
            .then((error) => {
            //   let error = new Error(response.status)
            //   error.response = body
            //   error.status = response.status
              return Promise.reject(error)
            })
        }
      })
  }
  
  export default xhr
  