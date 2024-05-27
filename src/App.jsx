/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BestBooks from "./components/BestBooks/BestBooks";
import Banner from "./components/Banner/Banner";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import TopBooks from "./components/TopBooks/TopBooks";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

// aos for Animate on scroll feature
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "./components/Popup/Popup";

const App = () => {
	const [orderPopup, setOrderPopup] = React.useState(false);
	const handleOrderPopup = () => {
		setOrderPopup(!orderPopup);
	};
	React.useEffect(() => {
		AOS.init({
			offset: 100,
			duration: 800,
			easing: "ease-in-sine",
			delay: 100,
		});
		AOS.refresh();
	}, []);
	return (
		<>
			<div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
				<Navbar handleOrderPopup={handleOrderPopup} />
				<Hero handleOrderPopup={handleOrderPopup} />
				<BestBooks handleOrderPopup={handleOrderPopup} />
				<Banner />
				<AppStoreBanner />
				<TopBooks />
				<Testimonial />
				<Footer />
				<Popup handleOrderPopup={handleOrderPopup} orderPopup={orderPopup} />
			</div>
		</>
	);
};

export default App;
