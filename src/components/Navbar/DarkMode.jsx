// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import darkpng from "../../assets/dark-mode-button.png";
import lightpng from "../../assets/light-mode-button.png";

// dark theme
const DarkMode = () => {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
	);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [theme]);
	return (
		<>
			<div className="relative">
				<img
					src={lightpng}
					alt=""
					className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10  
          ${theme === "dark" ? "opacity-0" : "opacity-100"} `}
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
				/>
				<img
					src={darkpng}
					alt=""
					className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300"
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
				/>
			</div>
		</>
	);
};

export default DarkMode;
