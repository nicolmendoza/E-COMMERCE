export const addCart=(product)=>{
    return{
        type:"ADDCART",
        payload:product
    }
}

export const deleteCart=(product)=>{
    return{
        type:"DELETEITEM",
        payload:product
    }
}