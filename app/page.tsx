"use client"
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import About from "./container/About/About";
import Certificates from "./container/Certificates/Certificates";
import Footer from "./container/Footer/Footer";
import Header from "./container/Header/Header";
import Skills from "./container/Skills/Skills";
import Work from "./container/Work/Work";

function App() {
	return (
		<>
			<div className="app">
				<NavBar />
				<Header />
				<About />
				<Work />
				<Skills />
				<Certificates />
				<Footer />
			</div>
		</>
	);
}

export default App;
