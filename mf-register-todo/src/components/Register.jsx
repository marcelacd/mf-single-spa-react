import React, { useState } from 'react'

import "./styles.css"

const Register = ({ UtilsFunctions }) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.unshift({ task, complet: false });
        localStorage.setItem("tasks", JSON.stringify(tasks));

        UtilsFunctions.publishlib("tasks", task)

        setTask("");
    };

    return (
        <>
            <div className='register-container'>

                <form onSubmit={handleSubmit}>
                    <input
                        className='css-input'
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder='Nueva tarea'
                        required
                    />
                    {/* <button className='css-button-gradient--1' type="submit">Guardar</button> */}
                </form>
                
            </div>
        </>
    )
}

export default Register