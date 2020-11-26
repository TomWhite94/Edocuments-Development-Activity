const getAuthToken = () => fetch('https://edocsapi.azurewebsites.net/Auth/api/Login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Digest username="xikxafatwae" realm="_root_" password=""'
    },
    body: JSON.stringify({"username":"testuser1@edocuments.co.uk","password":"20DemoPass20"})
})

export default getAuthToken;
