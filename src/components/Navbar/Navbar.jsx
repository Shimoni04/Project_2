// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../../assets/download.jpeg";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
	{
		id: 1,
		name: "Home",
		link: "/#",
	},
	{
		id: 2,
		name: "Best Sellers",
		link: "/#services",
	},
];
const DropdownLinks = [
	{
		name: "Trending Books",
		link: "#",
	},
	{
		name: "Best Sellers",
		link: "#",
	},
	{
		name: "Authors",
		link: "#",
	},
];
// eslint-disable-next-line react/prop-types
const Navbar = ({ handleOrderPopup }) => {
	return (
		<div className="shadow-lg bg-white dark:bg-gray-600 dark:text-white duration-300">
			<div className="container py-3 sm:py-0">
				<div className="flex justify-between items-center">
					<div>
						<a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
							<img src={Logo} alt="" className="w-10" />
							Books
						</a>
					</div>
					<div className="flex items-center justify-between gap-4">
						{/* Dark Mode */}
						<div>
							{/* eslint-disable-next-line react/jsx-no-undef */}
							<DarkMode />
						</div>
						<ul className="items-center gap-4 hidden sm:flex">
							{Menu.map((menu) => (
								<li key={menu.id}>
									<a
										href={menu.link}
										className="inline-block py-4 px-4 hover:text-blue-500 duration-200">
										{menu.name}
									</a>
								</li>
							))}
							{/* Simple Dropdown */}
							<li className="group relative cursor-pointer">
								<a
									href="/#home"
									className="flex h-[72px] items-center gap-[2px]">
									Quick Links{" "}
									<span>
										<FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
									</span>
								</a>
								<div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block ">
									<ul className="space-y-3">
										{/* Simple Dropdown and Links */}
										{DropdownLinks.map((data) => (
											<li key={data.name}>
												<a
													className="inline-block w-full rounded-md p-2 hover:bg-blue-100"
													href={data.link}>
													{data.name}
												</a>
											</li>
										))}
									</ul>
								</div>
							</li>
						</ul>
						{/* Button */}
						<button
							onClick={handleOrderPopup}
							className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 items-center rounded-full flex gap-3 hover:scale-105 duration-300">
							Order{" "}
							<FaCartShopping className="text-xl text-white drop-shadow-md cursor-pointer" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
