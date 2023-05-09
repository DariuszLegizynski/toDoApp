import Modal from "./Modal"

const ListHeader = ({ listName }) => {
	const signOut = () => {
		console.log("sign out");
	};

	return (
		<article className="list-header">
			<h1>{listName}</h1>
			<section className="button-container">
				<button className="create">ADD NEW</button>
				<button className="signout" onClick={signOut}>
					SIGN OUT
				</button>
			</section>
			<Modal />
		</article>
	);
};

export default ListHeader;
