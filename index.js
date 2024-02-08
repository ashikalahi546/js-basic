function deleteInvalids(array){
        if(!Array.isArray(array)){
            return 'Invaid Array';
        }
        const result = [];
        for(const item of array){
            if(typeof item === 'number' && !isNaN(item)){
                result.push(item)
            }
        }return result;
    }

    
function password(obj) {  
    if (!obj.name || !obj.birthYear || !obj.siteName || isNaN(obj.birthYear) || obj.birthYear.toString().length !== 4) {
        return "invalid";
    }
    const capitalized = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
    const result = capitalized + '#' + obj.name + '@' + obj.birthYear;
    return result;
}