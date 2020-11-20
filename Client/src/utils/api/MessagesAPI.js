const apiAddress = process.env.REACT_APP_API + '/api/messages/';

const postData = (realtiveApiCallPath, body = {}) => {
  let url = new URL(apiAddress + realtiveApiCallPath);
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json()).catch(error => console.log(error));
}

const getData = (realtiveApiCallPath, queryParams) => {
  let url = new URL(apiAddress + realtiveApiCallPath);
  for (const key in queryParams) {
    if (queryParams[key]) {
      url.searchParams.append(key, queryParams[key]);
    }
  }
  return fetch(url, { method: 'GET' }).then(res => res.json()).catch(error => console.log(error));
}


export const MessagesAPI = {
  getItemsList: (filterValue) => {
    return getData('getItems', { 'filterBy': filterValue });
  },

  submitNewItem: (newMessageData) => {
    return postData('add', newMessageData);
  },

  getLastActivatedTime: (email) => {
    return getData('getLastActivatedTime', { 'email': email });
  }
}