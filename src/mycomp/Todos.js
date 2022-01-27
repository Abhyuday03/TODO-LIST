import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    
    
    return (
       <> 
            
            <div className="input-group mb-3 w-50 mt-5" style={{ marginLeft:"25%"}}>
              <input type="text" id="inputbtn" className="form-control"  placeholder="ENTER TASK" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
              <button className="btn btn-outline-secondary" type="submit" onClick={(e)=>{
                  props.onAdd(document.getElementById("inputbtn").value)}}id="button-addon2">ADD TO LIST</button>
        
        <div className="container">
            <h3 className="text-center my-5" > Todos-List </h3>
           {props.todos.length===0?<h5 className="text-center my-3"> No todos to display</h5>:props.todos.map((todo)=>{
        return(
            <TodoItem todo ={todo} key={todo.sno} ind={props.todos.indexOf(todo)} onDelete={props.onDelete} onAdd={props.onAdd}/>
        )
    })}         

        </div>
        </div>
        </>
    )
}
