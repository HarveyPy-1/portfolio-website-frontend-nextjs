/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { images } from "../../constants";
import { AppWrap, SuperWrap } from "../../wrapper";
import { client } from "../../services/client";
import "./Footer.scss";
import Image from "next/image";

const year = new Date().getFullYear();

const Footer = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, email, message } = formData;

	const handleChangeInput = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setLoading(true);

		const contact = {
			_type: "contact",
			name: name,
			email: email,
			message: message,
		};

		// Upload to Sanity
		client.create(contact).then(() => {
			setLoading(false);
			setIsFormSubmitted(true);
		});
	};

	return (
		<>
			<h2 className="head-text">
				<span>Let's Work</span>! Contact Me!
			</h2>
			<div className="app__footer-cards">
				<div className="app__footer-card">
					<Image src={images.email} alt="email image" />
					<a href="mailto:eziheugonna@gmail.som" className="p-text">
						eziheugonna@gmail.com
					</a>
				</div>
				<div className="app__footer-card">
					<Image src={images.mobile} alt="mobile image" />
					<a href="tel: +447741944233">+447741944233</a>
				</div>
			</div>

			{!isFormSubmitted ? (
				<div className="app__footer-form app__flex">
					<div className="app__flex">
						<input
							type="text"
							className="p-text"
							placeholder="Your Name"
							name="name"
							value={name}
							onChange={handleChangeInput}
						/>
					</div>
					<div className="app__flex">
						<input
							type="email"
							className="p-text"
							placeholder="Your Email"
							name="email"
							value={email}
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<textarea
							name="message"
							cols="30"
							rows="10"
							className="p-text"
							value={message}
							placeholder="Your Message"
							onChange={handleChangeInput}></textarea>
					</div>
					<button type="button" className="p-text" onClick={handleSubmit}>
						{loading ? "Sending..." : "Send Message"}
					</button>
				</div>
			) : (
				<div>
					<h3 className="head-text">
						Thank you for getting in touch! I will get back to you shortly!
					</h3>
				</div>
			)}
			<footer className="footer-text">
				<p className="p-text">{` Copyright ©️ ${year}. Made with ❤️ by Harvey`}</p>
			</footer>
		</>
	);
};
export default AppWrap(
	SuperWrap(Footer, "app__footer"),
	"contact",
	"app__whitebg"
);
