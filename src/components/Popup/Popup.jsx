// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoCloseOutline } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const Popup = ({ orderPopup, handleOrderPopup }) => {
	return (
		<>
			{orderPopup && (
				<div
					data-aos="zoom-in"
					data-aos-duration="150"
					className="w-screen h-screen fixed top-0 left-0 z-20 backdrop-blur-sm">
					<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 dark:text-white duration-200 p-4 rounded-md shadow-lg w-[300px]">
						{/* Header */}
						<div className="flex items-center justify-between">
							<h1>Order Books</h1>
							<div>
								<IoCloseOutline
									className="text-2xl cursor-pointer"
									onClick={() => handleOrderPopup(false)}
								/>
							</div>
						</div>
						{/* Form */}
						<div className="mt-4">
							{/* name */}
							<input
								type="text"
								placeholder="Name"
								className="w-full p-2 rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
							/>
							{/* email */}
							<input
								type="text"
								placeholder="Email"
								className="w-full p-2 rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
							/>
							{/* address */}
							<input
								type="text"
								placeholder="Address"
								className="w-full p-2 rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
							/>
							{/* button */}
							<div className="flex justify-center">
								<button className="bg-blue-400 text-white px-4 py-2 rounded-lg">
									Order Now
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Popup;
