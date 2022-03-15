const moneyFormat = price =>{
    if(price.length!==5){
        var newPriceFormat =price
        
        // $1
        if(newPriceFormat.length===1){
            newPriceFormat+=".00"
        }
        //5.2 vs 19
        else if(newPriceFormat.length===2){
            if(newPriceFormat.includes(".")){
                newPriceFormat+="0"
            }else{
                newPriceFormat+=".00"
            }
            
        }
        //9.3 vs 5.02
        else if(newPriceFormat.length===3){
            newPriceFormat+="0"
        }
        //19.2
        else if(newPriceFormat.length===4){
            if(price<10){
                return price
            }
            
            newPriceFormat+="0"
        }
        
        return newPriceFormat
    }

    return price
}

export default moneyFormat