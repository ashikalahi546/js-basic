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