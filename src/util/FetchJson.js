import 'whatwg-fetch'
let FetchJson = (url, param) => {
  return new Promise((resolve, reject) => {
    let form = new FormData;
    for (let pkey in param) {
      form.append(pkey, param[pkey])
    }
    let postBody = {method: "POST", body: form}
    fetch(url, postBody).then(res => {
      return res.json()
    }).then(json => {
      resolve(json)
    }).catch((error) => {
      reject(error)
    })
  })
}

export default FetchJson
