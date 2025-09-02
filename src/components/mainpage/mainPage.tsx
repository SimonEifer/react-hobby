import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import Dashboard from "../dashboard/dashboard";
import Statistics from "../dashboard/statistics";
import Employees from "../dashboard/employees/employees";
import Appearance from "../dashboard/appearance";
import Preferences from "../dashboard/preferences";
import Info from "../dashboard/info";
import Timetracking from "../dashboard/timetracking/timetracking";

const MainPage = () => {
	const [activeContent, setActiveContent] = React.useState("dashboard");

	return (
		<div className="flex h-full w-full bg-neutral-200">
			<Sidebar setActiveContent={setActiveContent} />
			<div className="flex-1 flex flex-col">
				<Header />
				<div className="mr-4 mt-4 h-full mb-2 border-2 rounded-2xl bg-white border-primary-500">
					<div className="p-6">
						{activeContent === "dashboard" && (
							<Dashboard user={"Simon"} />
						)}
						{activeContent === "statistics" && <Statistics />}
						{activeContent === "timetracking" && <Timetracking />}
						{activeContent === "employees" && <Employees />}
						{activeContent === "appearance" && <Appearance />}
						{activeContent === "info" && <Info />}
						{activeContent === "preferences" && <Preferences />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
