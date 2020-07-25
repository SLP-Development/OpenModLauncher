module.exports = {
    'importSettings': (fs, OSname) => {
        if(fs.existsSync(`C:/Users/${OSname}/Documents/.infedit`)){
            if(fs.existsSync(`C:/Users/${OSname}/Documents/.infedit`)){
            }else{
                fs.mkdirSync(`C:/Users/${OSname}/Documents/.infedit/modspacks`);
            }
            if(fs.existsSync(`C:/Users/${OSname}/Documents/.infedit/settings.json`)){   
                return JSON.parse(fs.readFileSync('C:/Users/'+OSname+'/Documents/.infedit/settings.json', "utf8"));
            }else{
                fs.writeFileSync(`C:/Users/${OSname}/Documents/.infedit/settings.json`,JSON.stringify({lang:"en",email:'undefined', password:'undefined', min:512, max:4096, enableUpdate:'true', console:'false'}));
                return undefined;
            }   
        }else{
            fs.mkdirSync(`C:/Users/${OSname}/Documents/.infedit`);
            return undefined;
        }
    }
}