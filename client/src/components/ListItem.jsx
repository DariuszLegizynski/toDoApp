import ProgressBar from "./ProgressBar"
import TickIcon from "./TickIcon"

const ListItem = ({task}) => {
  return (
    <li className="list-item">
      <section className="info-container">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        <ProgressBar />
      </section>

      <section className='button-container'>
        <button className="edit">EDIT</button>
        <button className="delete">DELETE</button>
      </section>
    </li>
  )
}

export default ListItem