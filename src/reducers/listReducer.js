const initialState ={
    list:[]
}

const listReducer = (state=initialState, action) =>{
    switch(action.type) {
        case "ADD_ITEMS" :

        const {id, data }= action.payload;                                       //data variable will get the updated data
        return{
            ...state,
            list:[
                ...state.list,
                {
                    id:id,
                    data:data

            }
        ]                                                  //getting current data in the form of array by passing 'id' and 'updated data i.e data var'
        }

        case "DELETE_ITEMS" :

        const newList = state.list.filter((cdata)=> cdata.id !== action.id)                                      //data variable will get the updated data
        return{
            ...state,
            list:newList                                     //getting current data in the form of array by passing 'id' and 'updated data i.e data var'
        }

        case "REMOVE_ITEMS":
            return {
                ...state,
                list:[]
            }
        default:
            return state
    }
}
export default listReducer