import { NavigationDots, SocialMedia } from "../components";

const year = new Date().getFullYear();

// HOC - Higher Order Component
const AppWrap = (Component, idName, className) =>
	function HOC() {
		return (
			<div id={idName} className={`app__container ${className}`}>
				<SocialMedia />
				<div className="app__wrapper app__flex">
					<Component />
					<div className="copyright">
						<p className="p-text">{` Copyright ©️ ${year}. Made with ❤️ by Harvey`}</p>
					</div>
				</div>
				<NavigationDots active={idName} />
			</div>
		);
	};
export default AppWrap;
