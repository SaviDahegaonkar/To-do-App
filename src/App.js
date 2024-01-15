import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
const[ShoppingList,setShoppingList] = useState([])

const addItem = (event) =>{
event.preventDefault();
let form = event.target;
let formData = new FormData(form)
let formDataObj = Object.fromEntries(formData.entries())
formDataObj.purchased =false;
setShoppingList([...ShoppingList,formDataObj])
}


const markDone= (event) =>{
let markIt = event.target.value;
ShoppingList.map(function(val,index){
  if(markIt===val.name){
    val.purchased=true;
  }
})
setShoppingList([...ShoppingList])
}


const removeItem = (event) => {
  let removeIt=event.target.value;
  let newList = ShoppingList.filter(function(item){
  if(removeIt===item.name){
    return false;
  }
  else{
    return true;
  }
  })
  setShoppingList(newList)
  }
  




  return (
    <>

<h1 className='textdeco'>Shopping List Manager</h1>
    <div className='card '>
      <form onSubmit={addItem} className='flex-apart'>
      <input type="text" name="name" placeholder ='Add item to this.....'/>
      <button className='btn pink' type='submit'>Add</button>
      </form>
    </div>
    {
      ShoppingList.map(function(val,index){
        return(
        <div className={val.purchased ? 'card flex-apart green' : 'card flex-apart'} key={index}>
         <span>{val.name} / {val.purchased ?"Yes":"No"}</span>
         <span><button className='pink' onClick={markDone} value={val.name}> Done </button>
         &nbsp;
         <button className='btn' onClick={removeItem} value={val.name}> X </button></span>
      </div>
        );
      })
    }
    </>
  );
}

export default App;
