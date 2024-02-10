/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap, SuperWrap } from "../../wrapper";
import { urlFor, client } from "../../services/client";
import { useState, useEffect } from "react";
import "./Certificates.scss";

const Certificates = () => {
	const [brands, setBrands] = useState([]);
	const [certificates, setCertificates] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleClick = (index) => {
		setCurrentIndex(index);
	};

	useEffect(() => {
		const query = '*[_type == "certificates"]';
		const brandsQuery = '*[_type == "brands"]';

		client.fetch(query).then((data) => {
			setCertificates(data);
		});

		client.fetch(brandsQuery).then((data) => {
			setBrands(data);
		});
	}, []);

	const qualification = certificates[currentIndex];

	return (
		<>
			<h2 className="head-text">
				My <span>Certificates</span> & <span>Qualifications</span>
			</h2>
			{certificates.length && (
				<>
					<div className="app__certificate-item app__flex">
						<img src={urlFor(qualification.imgUrl)} alt="certificate" />
					</div>
					<div className="app__certificate-btns app__flex">
						<div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentIndex === 0
										? certificates.length - 1
										: currentIndex - 1
								)
							}>
							<HiChevronLeft />
						</div>
						<div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentIndex === certificates.length - 1
										? 0
										: currentIndex + 1
								)
							}>
							<HiChevronRight />
						</div>
					</div>
				</>
			)}
			<div className="app__certificates-brands app__flex">
				{brands.map((brand, index) => (
					<motion.div
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5, type: "tween" }}
						key={index}>
						<img src={urlFor(brand.imgUrl)} alt={brand.name + "image"} />
					</motion.div>
				))}
			</div>
		</>
	);
};
export default AppWrap(
	SuperWrap(Certificates, "app__certificate"),
	"certificates",
	"app__primarybg"
);
