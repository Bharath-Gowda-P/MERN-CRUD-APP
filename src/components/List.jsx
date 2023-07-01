import React from 'react'
import {BiEditAlt} from "react-icons/bi"
import {BsTrash} from "react-icons/bs"

export const List = ({id, task, updateUI, setUpdateUI, updateMode}) => {
    const removeTask = () => {
        try{
            fetch(`${process.env.REACT_APP_API_URL}/delete/${id}`, {
                method: "DELETE"
            })
            setUpdateUI((prevState) => !prevState)
        }
        catch(error){
            console.log(error)
        }
    }
  return (
    <li>
        {task}
        <div className="icon_holder">
            <BiEditAlt className="icon" onClick={() => updateMode(id, task)}/>
            <BsTrash className="icon" onClick={removeTask}/>
        </div>
    </li>
  )
}
