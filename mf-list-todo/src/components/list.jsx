import React, { useEffect, useState } from 'react'

import "./styles.css"

const list = ({ UtilsFunctions }) => {

  const [tasks, setTasks] = useState([]);

  UtilsFunctions.subscribelib("tasks", (msg, data) => {
    getTasks()
  })


  useEffect(() => {
    getTasks()
  }, []);

  const getTasks = () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }

  return (
    <div className='list-container'>
      {tasks.length ?
        (
          <>
            {
              tasks.map((task, index) => (
                <div className='padding list' key={index}>
                  <input type="checkbox" id="cbox2" value="task.complete" />
                  <span>{task.task}</span>
                </div>
              ))}
            <div className='padding total-items'>Total items: {tasks.length}</div>
          </>
        ) : (
          <div className='padding no-items'>
            <span>No se han añadido tareas...</span>
          </div>
        )
      }
    </div>
  )
}

export default list