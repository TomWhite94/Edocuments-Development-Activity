const getDataByUser = (type, authToken) => fetch(`https://edocsapi.azurewebsites.net/Core6/api/${type}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Digest username="xikxafatwae" realm="_root_" password="${authToken}"`
    },
    body: JSON.stringify(),
})

export default getDataByUser;