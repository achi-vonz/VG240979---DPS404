"use client"

import React, {useState} from 'react'
import Todo from './Todo'
import styles from "../app/page.module.css"

const Form = () => {
    const [todo, setTodo]=useState({})
    const [todos, setTodos] =useState ([

        {todo: 'todo 1'},
        {todo: 'todo 2'},
        {todo: 'todo 3'}

    ])
    const handleChange=e=>setTodo({[e.target.name]:e.target.value})
    const handleClick=e=>{
    if(Object.keys(todo).length===0  || todo.todo.trim()===''){
        alert('el campo no puede ser vacio')
        return
    }
    setTodos([...todos,todo])
}

    const deleteTodo=indice=>{
        const newTodos=[...todos]
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }


 return (
 <>
<form onSubmit={e=>e.preventDefault()}>
    <label>Agregar tareas</label><br/>
    <input className={styles.form_input} type="next" name='todo' onChange={handleChange} />
    <button className={styles.form_button} onClick={handleClick}>Agregar</button>

</form>


 {
 todos.map((value,index) => 
 (<Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo}/>))

 }
 </>

 )
}
export default Form