/*
The only purpose of this file was to test what the mojang api returns 
you can safely remove this file if you dont want it to be in you project
*/
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
                username: "",
                password: ""
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
