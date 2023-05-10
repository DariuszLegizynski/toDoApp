import { useState } from 'react'

import ProgressBar from "./ProgressBar"
import TickIcon from "./TickIcon"
import Modal from "./Modal"

const ListItem = ({ task, getData }) => {
  const [showModal, setShowModal ] = useState(false)

  const deleteItem = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${task.id}`, {
				method: "DELETE"
			})

      if (response.status === 200) {
				getData()
			}
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <li className="list-item">
      <section className="info-container">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        <ProgressBar progress={task.progress} />
      </section>

      <section className='button-container'>
        <button className="edit" onClick={() => setShowModal(true)}>EDIT</button>
        <button className="delete" onClick={deleteItem}>DELETE</button>
      </section>
      {showModal && <Modal mode={"edit"} setShowModal={setShowModal} getData={getData} task={task} />}
    </li>
  )
}

export default ListItem