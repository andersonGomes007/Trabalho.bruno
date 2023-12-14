const httpService = {
    login: (data) => {
        return fetch ("http://localhost:3000/api/user/auth",
        { 
            method:"POST",
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(data)
        })
    },
    createUser: (data) => {
        return fetch ("http://localhost:3000/api/user",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }
}

export default httpService;