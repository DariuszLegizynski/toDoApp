import { useState } from 'react'

const Modal = () => {
  const mode = "create"
  const editMode = mode === 'edit' ? true : false

  const [ data, setData ] = useState({
    user_email: "",
    title: "",
    progress: "",
    date: editMode ? "" : new Date()
  })

  const handleChange = e => {
    const { name, value } = e.target

    setData(data => ({
      ...data,
      [name]: value
    }))
  }

  console.log("changing!", data)

  return (
    <article className="overlay">
      <section className="modal">
        <div className="form-title-container">
          <h3>Let`s {mode} you`re task</h3>
          <button>X</button>
        </div>
        <form>
          <input
            required
            maxLength={30}
            placeholder='Your task goes here'
            name="title"
            value={data.title}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="range">Drag to select your current progress</label>
          <input
            required
            id="range"
            type="range"
            min="0"
            max="100"
            name="progress"
            value={data.progress}
            onChange={handleChange}
          />
          <input className={mode} type="submit" />
        </form>
      </section>
    </article>
  )
}

export default Modal