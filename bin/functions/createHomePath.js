module.exports = {
    'createHomePath' : (fs, OSname) => {
        if(fs.existsSync(`C:/Users/${OSname}/Documents/.infedit`)){
            if(fs.existsSync(`C:/Users/${OSname}/Documents/.infedit/modpacks`)){
            }else{
                fs.mkdirSync(`C:/Users/${OSname}/Documents/.infedit/modpacks`);
            }
            if(fs.existsSync(`C:/Users/${OSname}/Documents/.infedit/settings.json`)){   
            }else{
                fs.writeFileSync(`C:/Users/${OSname}/Documents/.infedit/settings.json`,JSON.stringify({lang:"en",email:'undefined', password:'undefined', min:512, max:4096, enableUpdate:'true', console:'false'}));
            }
        }else{
            console.log("Creating root folder");
            fs.mkdirSync(`C:/Users/${OSname}/Documents/.infedit`);
            console.log("Creating modpack folder");
            fs.mkdirSync(`C:/Users/${OSname}/Documents/.infedit/modpacks`);
            console.log("Creating settings file");
            fs.writeFileSync(`C:/Users/${OSname}/Documents/.infedit/settings.json`,JSON.stringify({lang:"en",email:'undefined', password:'undefined', min:512, max:4096, enableUpdate:'true', console:'false'}));
        }
    }
}