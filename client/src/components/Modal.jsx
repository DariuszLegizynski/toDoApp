import { useState } from "react"

const Modal = ({ mode, setShowModal, getData, task }) => {
	const editMode = mode === "edit" ? true : false

	const [data, setData] = useState({
		user_email: editMode ? task.user_email : "d.legizynski@gmail.com",
		title: editMode ? task.title : "",
		progress: editMode ? task.progress : 50,
		date: editMode ? task.date : new Date(),
	})

	const postData = async e => {
		e.preventDefault()

		try {
			const response = await fetch(`http://localhost:8000/todos`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			})
			if (response.status === 200) {
				setShowModal(false)
				getData()
			}
		} catch (err) {
			console.log(err)
		}
	}

	const handleChange = e => {
		const { name, value } = e.target

		setData(data => ({
			...data,
			[name]: value,
		}))
	}

	const editData = async e => {
		e.preventDefault()

		try {
			const response = await fetch(`http://localhost:8000/todos/${task.id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			})

      if (response.status === 200) {
				setShowModal(false)
				getData()
			}
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<article className="overlay">
			<section className="modal">
				<div className="form-title-container">
					<h3>Let`s {mode} you`re task</h3>
					<button onClick={() => setShowModal(false)}>X</button>
				</div>
				<form>
					<input required maxLength={30} placeholder="Your task goes here" name="title" value={data.title} onChange={handleChange} />
					<br />
					<label htmlFor="range">Drag to select your current progress</label>
					<input required id="range" type="range" min="0" max="100" name="progress" value={data.progress} onChange={handleChange} />
					<input className={mode} type="submit" onClick={editMode ? editData : postData} />
				</form>
			</section>
		</article>
	)
}

export default Modal
