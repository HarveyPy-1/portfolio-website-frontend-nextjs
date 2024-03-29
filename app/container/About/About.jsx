import "./About.scss";
import { motion } from "framer-motion";
// import { images } from "../../constants";
import { useEffect, useState } from "react";
import { urlFor, client } from "../../services/client";
import { AppWrap, SuperWrap } from "../../wrapper";

// const abouts = [
// 	{
// 		title: "FrontEnd Development",
// 		description: "I am a good web developer",
// 		imgUrl: images.about01,
// 	},
// 	{
// 		title: "BackEnd Development",
// 		description: "I am a good web developer",
// 		imgUrl: images.about02,
// 	},
// 	{
// 		title: "UI/UX",
// 		description: "I am a good web developer",
// 		imgUrl: images.about03,
// 	},
// 	{
// 		title: "Web Animations",
// 		description: "I am a good web developer",
// 		imgUrl: images.about04,
// 	},
// ];

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		const query = '*[_type == "abouts"]';

		client.fetch(query).then((data) => setAbouts(data));
	}, []);

	return (
		<div>
			<h2 className="head-text">
				Get To <span>Know Me</span>
			</h2>

			<section className="app__profiles">
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: "tween" }}
						className="app__profile-item"
						key={about.title + index}>
						<img src={urlFor(about.imgUrl)} alt={about.title} />
						<h2 className="bold-text" style={{ marginTop: "20px" }}>
							{about.title}
						</h2>
						<p className="p-text" style={{ marginTop: "10px" }}>
							{about.description}
						</p>
					</motion.div>
				))}
			</section>
		</div>
	);
};
// eslint-disable-next-line react-refresh/only-export-components
export default AppWrap(SuperWrap(About, "app__about"), "about", "app__whitebg");
