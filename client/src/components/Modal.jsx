const Modal = () => {

  const mode = 'edit'

  const handleChange = () => {
    console.log("changing!")
  }

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
            value={""}
            onChange={handleChange}
          />
          <br />
          <label>Drag to select your current progress</label>
          <input
            required
            type="range"
            min="0"
            max="100"
            name="progress"
            value={""}
            onChange={handleChange}
          />
          <input className={mode} type="submit" />
        </form>
      </section>
    </article>
  )
}

export default Modal