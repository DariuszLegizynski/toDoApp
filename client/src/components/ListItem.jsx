import { useState } from 'react'

import ProgressBar from "./ProgressBar"
import TickIcon from "./TickIcon"
import Modal from "./Modal"

const ListItem = ({task}) => {
  const [showModal, setShowModal ] = useState(false)


  return (
    <li className="list-item">
      <section className="info-container">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        <ProgressBar />
      </section>

      <section className='button-container'>
        <button className="edit" onClick={() => setShowModal(true)}>EDIT</button>
        <button className="delete">DELETE</button>
      </section>
      {showModal && <Modal mode={"edit"} setShowModal={setShowModal} task={task} />}
    </li>
  )
}

export default ListItem