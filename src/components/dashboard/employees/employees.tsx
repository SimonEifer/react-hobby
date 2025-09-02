import { useState } from "react";
import EmpOverview from "./emp-overview";
import EmpActivity from "./emp-activity";
import EmpPerformance from "./emp-performance";
import EmpDocuments from "./emp-documents";

const Employees = () => {
	const [activeTab, setActiveTab] = useState("overview");

	const tabs = [
		{ id: "overview", label: "Overview" },
		{ id: "activity", label: "Activity" },
		{ id: "performance", label: "Performance" },
		{ id: "documents", label: "Documents" },
	];

	return (
		<>
			<div className="font-manrope text-2xl font-bold mb-6">
				Employees
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
			{activeTab === "overview" && <EmpOverview />}
			{activeTab === "activity" && <EmpActivity />}
			{activeTab === "performance" && <EmpPerformance />}
			{activeTab === "documents" && <EmpDocuments />}
		</>
	);
};

export default Employees;
