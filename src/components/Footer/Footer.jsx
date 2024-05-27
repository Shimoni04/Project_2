// eslint-disable-next-line no-unused-vars
import React from "react";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaLocationArrow,
	FaMobileAlt,
} from "react-icons/fa";
// import logo from "../../assets/logo.png";
const FooterLinks = [
	{
		title: "Home",
		link: "/#",
	},
	{
		title: "About",
		link: "/#about",
	},
	{
		title: "Contact",
		link: "/#contact",
	},
	{
		title: "Blog",
		link: "/#blog",
	},
];
const Footer = () => {
	return (
		<div className="bg-gray-100 dark:bg-gray-800">
			<div className="container">
				<div className="grid md:grid-cols-3 py-5">
					{/* Company Links */}
					<div className="py-8 px-4">
						<h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
							Book Store
						</h1>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
							quos quam, temporibus debitis, maxime exercitationem impedit
							aliquam eaque dolores voluptas nisi vero.{" "}
						</p>
						<br />
						{/* Contact */}
						<div className="flex items-center gap-3">
							<FaLocationArrow />
							<p>Ahmedabad, Gujarat</p>
						</div>
						<div className="flex items-center gap-3">
							<FaMobileAlt />
							<p>+91 12345678</p>
						</div>
						{/* Social Media */}
						<div className="flex items-center gap-3 mt-6">
							<a href="#">
								<FaInstagram className="text-3xl" />
							</a>
							<a href="#">
								<FaFacebook className="text-3xl" />
							</a>
							<a href="#">
								<FaLinkedin className="text-3xl" />
							</a>
						</div>
					</div>
					{/* Links Section */}
					<div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
						<div>
							<div className="py-8 px-4">
								<h1 className="text-xl font-bold sm:text-left text-justify mb-3">
									Important Links
								</h1>
								<ul className="flex flex-col gap-3">
									{FooterLinks.map((data, index) => (
										<li
											key={index}
											className="cursor-pointer hover:translate-x-1 duration-300 hover:text-blue-400 space-x-1 text-gray-500">
											<span>&#11162;</span>
											<span>{data.title}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Copyrights section */}
			<div>
				<div className="border-t-2 border-gray-300/50">
					<p className="text-center py-10">
						Copyright 2024. All rights reserved || Made with ❤️ by Shimoni
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
