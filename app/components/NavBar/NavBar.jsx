import "./NavBar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { AiOutlineDownload } from 'react-icons/ai'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const NavBar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		// Class naming is using BEM methodology
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<a href="/">
					<img src={images.harvey_logo} alt="logo" />
				</a>
			</div>
			<ul className="app__navbar-links">
				{["home", "about", "projects", "skills", "certificates", "contact"].map(
					(item, index) => (
						// The '#' in the link is to enable the page jump to that section when clicked
						<li key={`link-${index}`} className="app__flex p-text">
							<div />
							<a href={`#${item}`}>{item}</a>
						</li>
					)
				)}
				<li className="app__flex p-text">
					<div />
					<a
						href="https://drive.google.com/file/d/1HilLn51eaHJuRuQB3FtHSkuEJx7-fB7u/view?usp=sharing"
						target="_blank"
						rel="noreferrer noopener">
						RESUME <AiOutlineDownload size="15"/>
					</a>
				</li>
			</ul>

			<div className="app__navbar-menu">
				<HiMenuAlt4
					onClick={() => {
						setToggle(true);
					}}
				/>
				<AnimatePresence>
					{toggle && (
						<motion.div
							initial={{ x: 300 }}
							// whileInView={{ x: [300, 0] }}
							animate={{ x: 0 }}
							exit={{ x: 300, transition: { duration: 0.2 } }}
							transition={{ duration: 0.85, ease: "easeOut" }}>
							<HiX onClick={() => setToggle(false)} />

							<ul>
								{[
									"home",
									"about",
									"projects",
									"skills",
									"certificates",
									"contact",
								].map((item, index) => (
									<li key={index}>
										<a href={`#${item}`} onClick={() => setToggle(false)}>
											{item}
										</a>
									</li>
								))}
								<li onClick={() => setToggle(false)}>
									<a
										href="https://drive.google.com/file/d/1HilLn51eaHJuRuQB3FtHSkuEJx7-fB7u/view?usp=sharing"
										target="_blank"
										rel="noreferrer noopener">
										RESUME
									</a>
								</li>
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</nav>
	);
};
export default NavBar;
