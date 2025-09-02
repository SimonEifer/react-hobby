import { useState } from "react";
import TimetrackingOverview from "./timetracking-overview";
import MyTime from "./my-time";
import WeeklyHours from "./weekly-hours";
import Calendar from "./calendar";

const Timetracking = () => {
	const [activeTab, setActiveTab] = useState("overview");

	const tabs = [
		{ id: "overview", label: "Overview" },
		{ id: "my-time", label: "My Time" },
		{ id: "weekly-hours", label: "Weekly Hours" },
		{ id: "calendar", label: "Calendar" },
	];

	return (
		<>
			<div className="font-manrope text-2xl font-bold mb-6">
				Timetracking
			</div>
			<div className="flex space-x-4 mb-6 border-b">
				{tabs.map((tab) => (
					<button
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={`pb-2 px-4 font-manrope text-sm hover:text-primary-600 hover:cursor-grab ${activeTab === tab.id ? "border-b-2 border-primary-500 text-primary-500" : "text-gray-600"}`}
					>
						{tab.label}
					</button>
				))}
			</div>
			{activeTab === "overview" && <TimetrackingOverview />}
			{activeTab === "my-time" && <MyTime />}
			{activeTab === "weekly-hours" && <WeeklyHours />}
			{activeTab === "calendar" && <Calendar />}
		</>
	);
};

export default Timetracking;
