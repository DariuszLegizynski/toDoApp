import { useState } from "react"
import { useCookies } from "react-cookie"

import Modal from "./Modal"

const ListHeader = ({ listName, getData }) => {
	const [cookies, setCookie, removeCookie] = useCookies(null)
	const [ showModal, setShowModal ] = useState(false)

	const signOut = () => {
		removeCookie('Email')
		removeCookie('Authoken')
		window.location.reload()
	};

	return (
		<article className="list-header">
			<h1>{listName}</h1>
			<section className="button-container">
				<button className="create" onClick={() => setShowModal(true)}>ADD NEW</button>
				<button className="signout" onClick={signOut}>
					SIGN OUT
				</button>
			</section>
			{showModal && <Modal mode={"create"} setShowModal={setShowModal} getData={getData} />}
		</article>
	);
};

export default ListHeader;
