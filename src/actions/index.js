export const addItems = (data) => {             //an  inputData arg we are passing from home file, need to be get in this action folder through 'data' variabl
    return {
        type:"ADD_ITEMS",
        payload:{
            id: new Date().getTime().toString(),
            data:data                                                       //we will destructure this id and data in listReducer file
        }
    }
}

export const deleteItems = (id) => {
    return {
        type:"DELETE_ITEMS",
        id
    }
}

export const removeItems = () => {
    return {
        type:"REMOVE_ITEMS"
        
    }
}