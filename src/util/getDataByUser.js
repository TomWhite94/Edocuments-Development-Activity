const getDataByUser = type => fetch(`https://edocsapi.azurewebsites.net/Core6/api/${type}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Digest username="xikxafatwae" realm="_root_" password="abYfny+z+2y5/HXa2L0QKW9jzYdqsbnTI9qCv73cdok5B2hHm2tnLsbcslgaa6/3H9xynBYR64GxkoZKiPzbduwTdlgpcTkwzw8Xg8Ej74rL/0ulmlGv6/yNsc9FHYb3FGszbAlYyuSkZYngNrvSv/cXyIcolPK0aBXSYxcAIx0="'
    },
    body: JSON.stringify(),
  })

export default getDataByUser