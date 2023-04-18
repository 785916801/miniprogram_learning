function seekNum(id,globalData){
    if(globalData.shoppingData.length===0){
        return true
    }else{
        for(let [index,item] of globalData.shoppingData.entries()){
            if(item.shoppingInfo.item_id===id){
                item.count=item.count+1
                return false
            }else if(item.shoppingInfo.item_id !== id && index === globalData.shoppingData.length-1){
                return true
            }
        }
    }
}
module.exports={
    seekNum:seekNum
}