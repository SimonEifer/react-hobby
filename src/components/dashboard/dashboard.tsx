const Dashboard = ({ user }) => {
	if (!user) user = "Guest";
	return (
		<div className="font-manrope text-2xl">
			Welcome to the Dashboard, {user}!
		</div>
	);
};

export default Dashboard;
