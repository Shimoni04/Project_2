// eslint-disable-next-line no-unused-vars
import React from "react";
import Book1 from "../../assets/book1.jpg";
import Book2 from "../../assets/book2.jpg";
import Book3 from "../../assets/book3.jpg";
import { FaStar } from "react-icons/fa";
const BooksData = [
	{
		id: 1,
		img: Book1,
		title: "Who's there",
		rating: 5.0,
		author: "Someone",
	},
	{
		id: 2,
		img: Book2,
		title: "His Life",
		rating: 4.5,
		author: "John",
	},
	{
		id: 3,
		img: Book3,
		title: "Lost Boys",
		rating: 4.7,
		author: "Lost Girls",
	},
	{
		id: 4,
		img: Book2,
		title: "His Life",
		rating: 4.4,
		author: "Someone",
	},
	{
		id: 5,
		img: Book3,
		title: "Who's there",
		rating: 5.0,
		author: "Someone",
	},
];
const TopBooks = () => {
	return (
		<>
			<div>
				<div className="container py-10 placeholder-gray-100">
					{/* header */}
					<div
						data-aos="slide-up"
						className="text-center mb-20 max-w-[400px] mx-auto">
						<p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
							Top Books
						</p>
						<h1 className="text-3xl font-bold">Top Books</h1>
						<p className="text-sm text-gray-500">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
						</p>
					</div>
					{/* Card section */}
					<div data-aos="slide-up" className="py-3">
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-content-center gap-5">
							{BooksData.map((book) => (
								<div
									key={book.id}
									className="bg-white dark:bg-slate-500 p-4 space-y-3 rounded-md shadow-md dark:text-gray-400">
									<img
										src={book.img}
										alt={book.title}
										className="h-[220px] w-[150px] object-cover rounded-md"
									/>
									<div>
										<h2 className="font-semibold">{book.title}</h2>
										<p className="text-sm text-gray-500 dark:text-white">
											by {book.author}
										</p>
										<div className="flex items-center gap-1">
											<FaStar className="text-yellow-500" />
											<span>{book.rating}</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					{/* Button */}
					<div className="flex justify-center">
						<button
							className="text-center mt-10 cursor-pointer bg-blue-400 text-white py-2 px-5 rounded-full
            ">
							View All books
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default TopBooks;
