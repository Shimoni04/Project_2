import React from "react";
import Book1 from "../../assets/book1.jpg";
import Book2 from "../../assets/book2.jpg";
import Book3 from "../../assets/book3.jpg";
import Vector from "../../assets/blue-pattern.png";
const ImageList = [
	{
		id: 1,
		img: Book1,
		title: "His Life will Forever be Changed",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate amet, saepe autem laudantium culpa. Temporibus expedita animi numquam tempore, veritatis minima laboriosam, magni accusantium delectus ut, modi eius enim!",
	},
	{
		id: 2,
		img: Book2,
		title: "Who's There",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate amet, saepe autem laudantium culpa. Temporibus expedita animi numquam tempore, veritatis minima laboriosam, magni accusantium delectus ut, modi eius enim!",
	},
	{
		id: 3,
		img: Book3,
		title: "Lost Boy",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate amet, saepe autem laudantium culpa. Temporibus expedita animi numquam tempore, veritatis minima laboriosam, magni accusantium delectus ut, modi eius enim!",
	},
];
// hero image on every load
const Hero = ({ handleOrderPopup }) => {
	const [imageId, setImageId] = React.useState(Book1);
	const [title, setTitle] = React.useState("His Life will Forever be Changed");
	const [description, setDescription] = React.useState(
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate amet, saepe autem laudantium culpa. Temporibus expedita animi numquam tempore, veritatis minima laboriosam, magni accusantium delectus ut, modi eius enim!"
	);
	const bgImage = {
		backgroundImage: `url(${Vector})`,
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		width: "100%",
	};
	return (
		<>
			<div
				className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
				style={bgImage}>
				<div className="container pb-8 sm:pb-0">
					<div className="grid grid-cols-1 sm:grid-cols-2">
						{/* Hero Text area */}
						<div
							data-aos="zoom-out"
							data-aos-duration="500"
							className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
								{title}
								<p
									data-aos="slide-up"
									data-aos-duration="500"
									data-aos-delay="100"
									className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 text-[24px] ml-[20rem]">
									By Anonymous
								</p>{" "}
							</h1>
							<p
								data-aos="slide-up"
								data-aos-duration="500"
								data-aos-delay="100"
								className="text-sm">
								{description}
							</p>
							{/* Order Now Button */}
							<div>
								<button
									onClick={handleOrderPopup}
									data-aos="zoom-in"
									className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 w-[150px]">
									Order Now
								</button>
							</div>
						</div>
						{/* Hero Image area */}
						<div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
							{/* Main image */}
							<div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
								<img
									data-aos="zoom-in"
									data-aos-once="true"
									src={imageId}
									alt=""
									className="w-[300px] h-[300px] sm:[h-450px] sm:w-[450px] sm:scale-135 object-contain mx-auto"
								/>
							</div>
							{/* Other Images List */}
							<div className="flex lg:flex-col lg:top-1/2 lg:translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[300px] lg:-right-1 bg-white rounded-full">
								{ImageList.map((item) => (
									<img
										data-aos="zoom-in"
										data-aos-once="true"
										key={item.id}
										src={item.img}
										alt={item.title}
										onClick={() => {
											setImageId(
												item.id === 1 ? Book1 : item.id === 2 ? Book2 : Book3
											);
											setTitle(item.title);
											setDescription(item.description);
										}}
										className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
