/* eslint-disable no-unused-vars */
import React from "react";
import Img1 from "../../assets/book1.jpg";
import Img2 from "../../assets/book2.jpg";
import Img3 from "../../assets/book3.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
	{
		id: 1,
		img: Img1,
		title: "His Life",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate amet, saepe autem laudantium culpa.",
	},
	{
		id: 2,
		img: Img2,
		title: "Who's There",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate amet, saepe autem laudantium culpa.",
	},
	{
		id: 3,
		img: Img3,
		title: "Lost Boy",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate amet, saepe autem laudantium culpa.",
	},
];

const BestBooks = () => {
	return (
		<>
			<div className="py-10">
				<div className="container">
					{/* Texts */}
					<div className="text-center mb-20 max-w-[400px] mx-auto">
						<p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
							Trending Books
						</p>
						<h1 className="text-3xl font-bold">Best Books</h1>
						<p className="text-sm text-gray-500">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>
					{/* Books Card Section */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
						{/* First card */}
						{BooksData.map((book) => (
							<div
								data-aos="zoom-in"
								key={book.id}
								className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-blue-400 hover:text-white relative shadow-xl duration-200 transition-all group max-w-[300px]">
								<div className="flex flex-col items-center p-4">
									<img
										src={book.img}
										alt={book.title}
										className="max-w-[100px] block mx-auto transform translate-y-4 group-hover:scale-105 duration-300 shadow-md"
									/>
									<div className="w-full flex items-center justify-center mt-8">
										<FaStar className="text-yellow-500" />
										<FaStar className="text-yellow-500" />
										<FaStar className="text-yellow-500" />
										<FaStar className="text-yellow-500" />
									</div>
									<h1 className="text-xl font-bold mt-4">{book.title}</h1>
									<p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 mt-2">
										{book.description}
									</p>
									<button className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200">
										Order Now
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default BestBooks;
