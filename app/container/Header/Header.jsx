import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./Header.scss";
import AIChatButton from "../../components/AIChatbox/AIChatButton";
import Image from "next/image";

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};

// eslint-disable-next-line react-refresh/only-export-components
const Header = () => {
	return (
		<>
			<header className="app__header app__flex">
				<motion.div
					whileInView={{ x: [-100, 0], opacity: [0, 1] }}
					transition={{ duration: 0.5 }}
					className="app__header-info">
					<div className="app__header-badge">
						<div className="badge-cmp app__flex">
							<span>👋🏾</span>
							<div style={{ marginLeft: 20 }}>
								<p className="p-text">Hello, I am</p>
								<h1 className="head-text">Harvey</h1>
							</div>
						</div>
						<div className="tag-cmp app__flex">
							<p className="p-text">Fullstack</p>
							<p className="p-text">Web Developer</p>
						</div>
					</div>
				</motion.div>
				<motion.div
					whileInView={{ opacity: [0, 1] }}
					transition={{ duration: 0.5, delayChildren: 0.5 }}
					className="app__header-img">
					<Image src={images.harvey} alt="profile_bg" />
					<motion.div
						whileInView={{ scale: [0, 1] }}
						transition={{ duration: 1, ease: "easeInOut" }}
						className="overlay_circle">
						<Image src={images.circle} alt="profile_circle" />
					</motion.div>
				</motion.div>
				<motion.div
					variants={scaleVariants}
					whileInView={scaleVariants.whileInView}
					className="app__header-circles">
					{[images.node, images.tailwind, images.nextjs, images.react].map(
						(circle, index) => (
							<div key={`circle-${index}`} className="circle-cmp app__flex">
								<Image src={circle} alt="circle" />
							</div>
						)
					)}
				</motion.div>
			</header>
			<div className="flex w-full justify-end bottom-0 right-0">
				<AIChatButton />
			</div>
		</>
	);
};
// eslint-disable-next-line react-refresh/only-export-components
export default AppWrap(Header, "home");
