module.exports = {
    'importPacks': (fs,OSname) => {
        if(fs.existsSync(`C:/Users/${OSname}/Documents/.infedit`)){
            if(fs.existsSync(`C:/Users/${OSname}/Documents/.infedit`)){
            }else{
                fs.mkdirSync(`C:/Users/${OSname}/Documents/.infedit/modspacks`);
            }
            if(fs.existsSync(`C:/Users/${OSname}/Documents/.infedit/packs.json`)){   
                return JSON.parse(fs.readFileSync('C:/Users/'+OSname+'/Documents/.infedit/packs.json', "utf8"));
            }else{
                fs.writeFileSync(`C:/Users/${OSname}/Documents/.infedit/packs.json`,JSON.stringify({packs:"first_run"}));
                return undefined;
            }
        }else{
            fs.mkdirSync(`C:/Users/${OSname}/Documents/.infedit`);
            return undefined;
        }
    }
}