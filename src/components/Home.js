import React,{ useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItems, deleteItems, removeItems } from '../actions/index';

const Home = () => {

    const [inputData, setInputData] = useState();
    console.log(inputData)

    const dispatch = useDispatch();
    const List = useSelector((state)=>state.listReducer.list);
    
    return (
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <figcaption>Add Your List Here</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder="Add Items" value={inputData} 
                    onChange={(e)=>setInputData(e.target.value)}/>

                    <i className="fa fa-plus add-btn" onClick={()=>dispatch(addItems(inputData),
                    setInputData(''))}>+</i>
                    
                </div>
                <div className='showItems'>
                    {
                        List.map((cdata)=> {
                            return (
                                <div className='eachItem' key={cdata.id}>
                                <h3>{cdata.data}</h3>
                                    <div className="todo-btn">
                                <i className="far fa-trash-alt add-btn" title ="Delete Items" onClick={()=>dispatch(deleteItems(cdata.id))}>-</i>
                                    </div>
                                </div>
                            )   
                        })
                    }
                    
                </div>
                <div>
                    <button className="btn effect04" data-sm-link-text="Remove All"
                    onClick={()=>dispatch(removeItems())}><span>Check List</span></button>
                </div>

            </div>
            
        </div>
    )
}

export default Home
