import React from 'react'

export const TodoItem = (props) => {
    return (
       <div>
           <h4 style={{textAlign:"center"}}>{props.todo.title}</h4>
           <div className="text-center mb-4 mt-1">
           <button className="btn btn-danger btn-sm mt-1 "  onClick={()=>{props.onDelete(props.ind)}}>delete</button>
           <hr></hr>
           </div>
       </div>
    )
}
  