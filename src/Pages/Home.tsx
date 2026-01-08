import { useState, useEffect } from "react";
import {
	FaStar,
	FaMapPin,
	FaPhone,
	FaEnvelope,
	FaWifi,
	FaCar,
	FaPersonSwimming,
	FaDumbbell,
	FaBellConcierge as FaConciergeBell,
	FaShieldHalved,
	FaCheck as FaCheckCircle,
	FaQuoteLeft,
} from "react-icons/fa6";

const GavaHeightsLanding = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeImage, setActiveImage] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveImage((prev) => (prev + 1) % heroImages.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const heroImages = [
		"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
		"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
		"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80",
	];

	const amenities = [
		{
			icon: <FaWifi />,
			title: "High-Speed WiFi",
			description: "Complimentary throughout",
		},
		{
			icon: <FaCar />,
			title: "Secure Parking",
			description: "24/7 covered parking",
		},
		{
			icon: <FaPersonSwimming />,
			title: "Pool & Spa",
			description: "Rooftop infinity pool",
		},
		{
			icon: <FaDumbbell />,
			title: "Fitness Center",
			description: "State-of-the-art equipment",
		},
		{
			icon: <FaConciergeBell />,
			title: "Concierge Service",
			description: "Round-the-clock assistance",
		},
		{
			icon: <FaShieldHalved />,
			title: "Security",
			description: "Advanced security systems",
		},
	];

	const testimonials = [
		{
			name: "Sarah Mitchell",
			role: "Business Executive",
			text: "Gava Heights exceeded every expectation. The attention to detail and exceptional service made my extended stay feel like home.",
			rating: 5,
		},
		{
			name: "David Chen",
			role: "Travel Enthusiast",
			text: "Absolutely stunning property with world-class amenities. The staff went above and beyond to ensure our comfort.",
			rating: 5,
		},
		{
			name: "Emily Rodriguez",
			role: "Corporate Guest",
			text: "Perfect location, impeccable rooms, and outstanding hospitality. Gava Heights has become my preferred choice for business stays.",
			rating: 5,
		},
	];

	const suiteFeatures = [
		"Spacious layouts with premium finishes",
		"Floor-to-ceiling windows with panoramic views",
		"Smart home automation systems",
		"Gourmet kitchens with high-end appliances",
		"Spa-inspired bathrooms with rainfall showers",
		"Premium bedding and luxury linens",
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
			{/* Navigation */}
			<nav
				className={`fixed w-full z-50 transition-all duration-300 ${
					isScrolled ? "bg-white shadow-lg" : "bg-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-20">
						<div className="flex items-center space-x-2">
							<div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center shadow-lg">
								<span className="text-white font-bold text-xl">GH</span>
							</div>
							<div>
								<h1
									className={`text-2xl font-bold tracking-tight ${
										isScrolled ? "text-slate-900" : "text-white drop-shadow-lg"
									}`}
									style={{
										fontFamily: "'Playfair Display', serif",
										letterSpacing: "2px",
									}}
								>
									GAVA HEIGHTS
								</h1>
								<p
									className={`text-xs tracking-widest ${
										isScrolled ? "text-amber-700" : "text-amber-200"
									}`}
								>
									LUXURY HOSPITALITY
								</p>
							</div>
						</div>
						<div className="hidden md:flex space-x-8">
							<a
								href="#suites"
								className={`font-medium transition-colors ${
									isScrolled
										? "text-slate-700 hover:text-amber-700"
										: "text-white hover:text-amber-200"
								}`}
							>
								Suites
							</a>
							<a
								href="#amenities"
								className={`font-medium transition-colors ${
									isScrolled
										? "text-slate-700 hover:text-amber-700"
										: "text-white hover:text-amber-200"
								}`}
							>
								Amenities
							</a>
							<a
								href="#testimonials"
								className={`font-medium transition-colors ${
									isScrolled
										? "text-slate-700 hover:text-amber-700"
										: "text-white hover:text-amber-200"
								}`}
							>
								Reviews
							</a>
							<a
								href="#contact"
								className="bg-amber-600 text-white px-6 py-2 rounded-full font-medium hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl"
							>
								Book Now
							</a>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="relative h-screen overflow-hidden">
				{heroImages.map((img, idx) => (
					<div
						key={idx}
						className={`absolute inset-0 transition-opacity duration-1000 ${
							idx === activeImage ? "opacity-100" : "opacity-0"
						}`}
					>
						<img
							src={img}
							alt="Gava Heights"
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />
					</div>
				))}

				<div className="relative z-10 h-full flex items-center">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
						<div className="max-w-2xl">
							<div className="inline-block mb-4">
								<span className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
									PREMIUM HOSPITALITY REDEFINED
								</span>
							</div>
							<h2
								className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
								style={{ fontFamily: "'Playfair Display', serif" }}
							>
								Welcome to
								<br />
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
									Gava Heights
								</span>
							</h2>
							<p className="text-xl text-gray-200 mb-8 leading-relaxed">
								Experience unparalleled luxury and comfort in our meticulously
								designed suites. Where exceptional service meets sophisticated
								elegance.
							</p>
							<div className="flex flex-wrap gap-4">
								<a
									href="#contact"
									className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-all shadow-2xl hover:shadow-amber-600/50 flex items-center space-x-2"
								>
									<span>Reserve Your Stay</span>
								</a>
								<a
									href="#suites"
									className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/30"
								>
									Explore Suites
								</a>
							</div>
							<div className="mt-12 flex items-center space-x-8">
								<div className="flex items-center space-x-2">
									<div className="flex">
										{[...Array(5)].map((_, i) => (
											<FaStar key={i} className="text-amber-400 text-xl" />
										))}
									</div>
									<span className="text-white font-semibold">5.0 Rating</span>
								</div>
								<div className="text-white">
									<p className="text-3xl font-bold">500+</p>
									<p className="text-sm text-gray-300">Happy Guests</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Trust Banner */}
			<section className="bg-gradient-to-r from-slate-900 to-slate-800 py-6">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-wrap justify-around items-center text-center gap-8">
						<div className="flex items-center space-x-3">
							<FaCheckCircle className="text-amber-500 text-2xl" />
							<div className="text-white">
								<p className="font-bold">Verified Property</p>
								<p className="text-sm text-gray-300">Licensed & Certified</p>
							</div>
						</div>
						<div className="flex items-center space-x-3">
							<FaShieldHalved className="text-amber-500 text-2xl" />
							<div className="text-white">
								<p className="font-bold">Secure Bookings</p>
								<p className="text-sm text-gray-300">Encrypted Transactions</p>
							</div>
						</div>
						<div className="flex items-center space-x-3">
							<FaConciergeBell className="text-amber-500 text-2xl" />
							<div className="text-white">
								<p className="font-bold">24/7 Support</p>
								<p className="text-sm text-gray-300">Always Available</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Amenities Section */}
			<section id="amenities" className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<span className="text-amber-600 font-semibold tracking-wide uppercase text-sm">
							World-Class Facilities
						</span>
						<h3
							className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4"
							style={{ fontFamily: "'Playfair Display', serif" }}
						>
							Premium Amenities
						</h3>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Every detail curated to enhance your stay and exceed your
							expectations
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{amenities.map((amenity, idx) => (
							<div
								key={idx}
								className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 group"
							>
								<div className="text-amber-600 text-4xl mb-4 group-hover:scale-110 transition-transform">
									{amenity.icon}
								</div>
								<h4 className="text-xl font-bold text-slate-900 mb-2">
									{amenity.title}
								</h4>
								<p className="text-gray-600">{amenity.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Suites Section */}
			<section
				id="suites"
				className="py-20 bg-gradient-to-b from-slate-50 to-white"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<span className="text-amber-600 font-semibold tracking-wide uppercase text-sm">
							Luxury Accommodations
						</span>
						<h3
							className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4"
							style={{ fontFamily: "'Playfair Display', serif" }}
						>
							Exquisite Suites
						</h3>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Thoughtfully designed spaces that blend comfort, style, and
							functionality
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
						<div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
							<img
								src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80"
								alt="Executive Suite"
								className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent flex items-end p-8">
								<div className="text-white">
									<h4
										className="text-3xl font-bold mb-2"
										style={{ fontFamily: "'Playfair Display', serif" }}
									>
										Executive Suites
									</h4>
									<p className="text-gray-200 mb-4">
										Sophisticated elegance with panoramic city views
									</p>
									<button className="bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-all">
										View Details
									</button>
								</div>
							</div>
						</div>
						<div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
							<img
								src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
								alt="Penthouse"
								className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent flex items-end p-8">
								<div className="text-white">
									<h4
										className="text-3xl font-bold mb-2"
										style={{ fontFamily: "'Playfair Display', serif" }}
									>
										Penthouse Collection
									</h4>
									<p className="text-gray-200 mb-4">
										Ultimate luxury with exclusive amenities
									</p>
									<button className="bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-all">
										View Details
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
						<h4
							className="text-2xl font-bold text-slate-900 mb-6"
							style={{ fontFamily: "'Playfair Display', serif" }}
						>
							Suite Features
						</h4>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{suiteFeatures.map((feature, idx) => (
								<div key={idx} className="flex items-start space-x-3">
									<FaCheckCircle className="text-amber-600 text-xl mt-1 flex-shrink-0" />
									<p className="text-gray-700">{feature}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section id="testimonials" className="py-20 bg-slate-900 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<span className="text-amber-400 font-semibold tracking-wide uppercase text-sm">
							Guest Experiences
						</span>
						<h3
							className="text-4xl md:text-5xl font-bold mt-2 mb-4"
							style={{ fontFamily: "'Playfair Display', serif" }}
						>
							What Our Guests Say
						</h3>
						<p className="text-gray-300 text-lg max-w-2xl mx-auto">
							Testimonials from those who have experienced the Gava Heights
							difference
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{testimonials.map((testimonial, idx) => (
							<div
								key={idx}
								className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-amber-600 transition-all hover:shadow-2xl hover:shadow-amber-600/20"
							>
								<FaQuoteLeft className="text-amber-500 text-3xl mb-4" />
								<div className="flex mb-4">
									{[...Array(testimonial.rating)].map((_, i) => (
										<FaStar key={i} className="text-amber-400" />
									))}
								</div>
								<p className="text-gray-300 mb-6 leading-relaxed">
									{testimonial.text}
								</p>
								<div>
									<p className="font-bold text-white">{testimonial.name}</p>
									<p className="text-sm text-amber-400">{testimonial.role}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="py-20 bg-gradient-to-b from-white to-slate-50"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<span className="text-amber-600 font-semibold tracking-wide uppercase text-sm">
								Get In Touch
							</span>
							<h3
								className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6"
								style={{ fontFamily: "'Playfair Display', serif" }}
							>
								Begin Your Gava Heights Experience
							</h3>
							<p className="text-gray-600 text-lg mb-8">
								Our dedicated team is ready to assist you with reservations,
								inquiries, or any special requests to make your stay
								unforgettable.
							</p>
							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="bg-amber-100 p-3 rounded-full">
										<FaMapPin className="text-amber-600 text-xl" />
									</div>
									<div>
										<p className="font-semibold text-slate-900">Location</p>
										<p className="text-gray-600">
											Premium District, Central Business Area
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-4">
									<div className="bg-amber-100 p-3 rounded-full">
										<FaPhone className="text-amber-600 text-xl" />
									</div>
									<div>
										<p className="font-semibold text-slate-900">Phone</p>
										<p className="text-gray-600">+256 (700) 123-456</p>
									</div>
								</div>
								<div className="flex items-start space-x-4">
									<div className="bg-amber-100 p-3 rounded-full">
										<FaEnvelope className="text-amber-600 text-xl" />
									</div>
									<div>
										<p className="font-semibold text-slate-900">Email</p>
										<p className="text-gray-600">
											reservations@gavaheights.com
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-200">
							<h4
								className="text-2xl font-bold text-slate-900 mb-6"
								style={{ fontFamily: "'Playfair Display', serif" }}
							>
								Request Information
							</h4>
							<form className="space-y-4">
								<div>
									<input
										type="text"
										placeholder="Full Name"
										className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
									/>
								</div>
								<div>
									<input
										type="email"
										placeholder="Email Address"
										className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
									/>
								</div>
								<div>
									<input
										type="tel"
										placeholder="Phone Number"
										className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
									/>
								</div>
								<div>
									<textarea
										placeholder="Your Message"
										rows={4}
										className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
									/>
								</div>
								<button
									type="submit"
									className="w-full bg-amber-600 text-white py-4 rounded-lg font-semibold hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-slate-900 text-white py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
						<div>
							<div className="flex items-center space-x-2 mb-4">
								<div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
									<span className="text-white font-bold">GH</span>
								</div>
								<div>
									<h5
										className="text-xl font-bold"
										style={{
											fontFamily: "'Playfair Display', serif",
											letterSpacing: "2px",
										}}
									>
										GAVA HEIGHTS
									</h5>
									<p className="text-xs text-amber-400 tracking-widest">
										LUXURY HOSPITALITY
									</p>
								</div>
							</div>
							<p className="text-gray-400">
								Setting new standards in luxury hospitality with exceptional
								service and unmatched comfort.
							</p>
						</div>
						<div>
							<h6 className="font-bold mb-4 text-lg">Quick Links</h6>
							<ul className="space-y-2 text-gray-400">
								<li>
									<a
										href="#suites"
										className="hover:text-amber-400 transition-colors"
									>
										Our Suites
									</a>
								</li>
								<li>
									<a
										href="#amenities"
										className="hover:text-amber-400 transition-colors"
									>
										Amenities
									</a>
								</li>
								<li>
									<a
										href="#testimonials"
										className="hover:text-amber-400 transition-colors"
									>
										Testimonials
									</a>
								</li>
								<li>
									<a
										href="#contact"
										className="hover:text-amber-400 transition-colors"
									>
										Contact Us
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h6 className="font-bold mb-4 text-lg">Business Hours</h6>
							<ul className="space-y-2 text-gray-400">
								<li>Front Desk: 24/7</li>
								<li>Concierge: 24/7</li>
								<li>Reservations: 8AM - 10PM</li>
							</ul>
						</div>
					</div>
					<div className="border-t border-slate-800 pt-8 text-center text-gray-400">
						<p>
							&copy; 2026 Gava Heights. All rights reserved. | Privacy Policy |
							Terms of Service
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default GavaHeightsLanding;
