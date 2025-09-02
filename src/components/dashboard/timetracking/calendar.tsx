import { useState, useEffect } from "react";

const Calendar = () => {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [calendarDays, setCalendarDays] = useState<(number | null)[]>([]);
	const today = new Date();

	useEffect(() => {
		const year = currentDate.getFullYear();
		const month = currentDate.getMonth();
		const firstDay = new Date(year, month, 1);
		const lastDay = new Date(year, month + 1, 0);
		const daysInMonth = lastDay.getDate();
		const startingDay = firstDay.getDay();

		const days = [];
		for (let i = 0; i < startingDay; i++) {
			days.push(null);
		}
		for (let i = 1; i <= daysInMonth; i++) {
			days.push(i);
		}

		setCalendarDays(days);
	}, [currentDate]);

	const prevMonth = () => {
		setCurrentDate(
			new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
		);
	};

	const nextMonth = () => {
		setCurrentDate(
			new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
		);
	};

	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	return (
		<div className="font-manrope">
			<div className="flex justify-between items-center mb-4">
				<button
					onClick={prevMonth}
					className="text-primary-500 hover:text-primary-700 hover:underline"
				>
					&lt;
				</button>
				<h2 className="text-lg font-bold">
					{monthNames[currentDate.getMonth()]}{" "}
					{currentDate.getFullYear()}
				</h2>
				<button
					onClick={nextMonth}
					className="text-primary-500 hover:text-primary-700 hover:underline"
				>
					&gt;
				</button>
			</div>
			<div className="grid grid-cols-7 gap-2">
				{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
					(day) => (
						<div key={day} className="text-center font-semibold">
							{day}
						</div>
					)
				)}
				{calendarDays.map((day, index) => {
					const isToday =
						day &&
						day === today.getDate() &&
						currentDate.getMonth() === today.getMonth() &&
						currentDate.getFullYear() === today.getFullYear();
					return (
						<div
							key={index}
							className={`text-center p-6 border border-primary-500 rounded-md hover:cursor-grab hover:bg-primary-100 ${isToday ? "bg-primary-500 text-white hover:bg-primary-600" : ""}`}
						>
							{day && <span>{day}</span>}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Calendar;
