import { useState } from "react"
import Modal from "./Modal"

const ListHeader = ({ listName, getData }) => {
	const [ showModal, setShowModal ] = useState(false)

	const signOut = () => {
		console.log("sign out");
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
