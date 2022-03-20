const withoutApostrophe = title =>{
    var newString = ""
    for(let i in title){        
        if(title[i]==="'"){
            continue
        }
        newString += title[i]
    }


    return newString
}

export default withoutApostrophe