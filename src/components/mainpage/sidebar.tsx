import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChartLine,
	faHome,
	faPaintBrush,
	faCog,
	faUsers,
	faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ setActiveContent }) => {
	const menuItems = [
		{
			label: "Home",
			icon: faHome,
			onClick: () => setActiveContent("dashboard"),
		},
		{
			label: "Statistics",
			icon: faChartLine,
			onClick: () => setActiveContent("statistics"),
		},
		{
			label: "Employees",
			icon: faUsers,
			onClick: () => setActiveContent("employees"),
		},
		{
			label: "Appearance",
			icon: faPaintBrush,
			onClick: () => setActiveContent("appearance"),
		},
	];
	const preferencesItem = {
		label: "Preferences",
		icon: faCog,
		onClick: () => setActiveContent("preferences"),
	};
	const infoItem = {
		label: "Info",
		icon: faInfoCircle,
		onClick: () => setActiveContent("info"),
	};

	return (
		<div className="w-24 bg-white ml-2 mt-2 mb-2 mr-4 text-primary-500 border-2 border-primary-500 h-auto p-4 rounded-2xl flex flex-col items-center justify-between">
			<div>
				<div className="mb-10">
					<img
						src="../src/assets/images/growthlogo.png"
						className="w-10 h-10 text-4xl hover:cursor-grab"
					/>
				</div>
				<nav className="flex flex-col space-y-6">
					{menuItems.map((item, index) => (
						<button
							key={index}
							onClick={item.onClick}
							className="p-2 w-10 h-10 flex items-center justify-center rounded-md transition text-center hover:cursor-grab outline-primary-500 hover:outline-1 hover:bg-primary-100"
						>
							<FontAwesomeIcon
								icon={item.icon}
								className="text-xl"
							/>
						</button>
					))}
				</nav>
			</div>
			<nav className="flex flex-col space-y-6">
				<button
					onClick={infoItem.onClick}
					className="p-2 w-10 h-10 flex items-center justify-center rounded-md transition text-center hover:cursor-grab outline-primary-500 hover:outline-1 hover:bg-primary-100"
				>
					<FontAwesomeIcon icon={infoItem.icon} className="text-xl" />
				</button>
				<button
					onClick={preferencesItem.onClick}
					className="p-2 w-10 h-10 flex items-center justify-center rounded-md transition text-center hover:cursor-grab outline-primary-500 hover:outline-1 hover:bg-primary-100"
				>
					<FontAwesomeIcon
						icon={preferencesItem.icon}
						className="text-xl"
					/>
				</button>
			</nav>
		</div>
	);
};

export default Sidebar;
