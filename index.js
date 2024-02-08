    function calculateMoney(ticketSale) {
     if(isNaN(ticketSale) || ticketSale < 0){
     return 'Invalid Number'}
     const ticketPrice = 120;
     const totalTicket = ticketPrice * ticketSale;
     const darYan  = 500;
     const lunchPerPerson = 50;
     const issTaff = 8;
     const fixKroroc = issTaff * lunchPerPerson + darYan ;
     const totalAmount = totalTicket - fixKroroc;
     return totalAmount;
      }



      
  function checkName(name) {
  if(typeof name !== 'string'){
      return 'invalid';
  }
   const lowerCase = name.toLowerCase();
   const allNames = ['tonoy', 'utsho' , 'roide', 'shanto'];
   const nameWords = ['A', 'y', 'i' , 'e' , 'o' , 'u', 'w'];
   const result = lowerCase.charAt(lowerCase.length -1);
   for(let names of allNames){
      if(lowerCase.includes(names)){
            return 'Bad Name';
      }
   }
       if(nameWords.includes(result)){
         return 'Good Name'
   }
      else{
         return'Bad Name';
   }
      }



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

   


  function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return "invalid input";
    }

  }

