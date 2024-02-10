import { RiTwitterXLine } from "react-icons/ri";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
	return (
		<div className="app__social">
			<div>
				<a
					href="https://github.com/HarveyPy-1"
					target="_blank"
					rel="noreferrer noopener">
					<BsGithub />
				</a>
			</div>
			<div>
				<a
					href="https://linkedin.com/in/harveyezihe"
					target="_blank"
					rel="noreferrer noopener">
					<BsLinkedin />
				</a>
			</div>
			<div>
				<a
					href="https://twitter.com/HARVEY_dwg"
					target="_blank"
					rel="noreferrer noopener">
					<RiTwitterXLine />
				</a>
			</div>
		</div>
	);
};
export default SocialMedia;
