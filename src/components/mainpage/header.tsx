import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
	return (
		<div className="bg-white p-4 border-2 flex my-2 mr-4 border-primary-500 justify-between items-center rounded-2xl">
			<nav className="space-x-4">
				<span className="flex items-center font-bold text-lg font-manrope">
					Dashboard
				</span>
				<span className="flex items-center text-base font-light font-manrope">
					Some description
				</span>
			</nav>
			<div className="flex-1 items-end flex space-x-2 justify-end">
				<input
					type="text"
					placeholder="Search"
					className="p-2 border border-primary-500 rounded-lg font-manrope focus:outline-primary-600"
				/>
				<button className="p-2 border border-primary-500 rounded-lg hover:bg-primary-100 hover:cursor-grab">
					<FontAwesomeIcon
						icon={faBell}
						className="text-primary-500"
					/>
				</button>
			</div>
		</div>
	);
};

export default Header;
