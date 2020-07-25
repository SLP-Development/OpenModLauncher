modules.exports = {
    'resolveAuthentification': (request, fs, OSname) => {
        request({
            method:'POST',
            uri: 'https://authserver.mojang.com/authenticate',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                agent: {
                    name: 'Minecraft'
                },
                username: "mauricefl@outlook.de",
                password: "22999Mau"
            })
        }, (error, response, body) => {
            // Resolve Response from MojangAPI
            try{
                console.log(response);
                console.log(body);
            }catch(error){
                console.error(error);
            }
        })
    }
}