/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import { AppWrap, SuperWrap } from "../../wrapper";
import { urlFor, client } from "../../services/client";
import { v4 as uuidv4 } from "uuid";
import "./Skills.scss";

const Skills = () => {
	const [experiences, setExperiences] = useState([]);
	const [skills, setSkills] = useState([]);

	useEffect(() => {
		const query = '*[_type == "experiences"]';
		const skillsQuery = '*[_type == "skills"]';

		client.fetch(query).then((data) => {
			setExperiences(data);
		});

		client.fetch(skillsQuery).then((data) => {
			setSkills(data);
		});
	}, []);

	return (
		<>
			<h2 className="head-text">Skills <span>&</span> Experience</h2>
			<div className="app__skills-container">
				<motion.div className="app__skills-list">
					{skills.map((skill) => (
						<motion.div
							whileInView={{ opacity: [0, 1] }}
							transition={{ duration: 0.5 }}
							className="app__skills-item app__flex"
							key={uuidv4()}>
							<div
								className="app__flex"
								style={{ backgroundColor: skill.bgColor }}>
								<img src={urlFor(skill.icon)} alt={`${skill.name}_icon`} />
							</div>
							<p className="p-text">{skill.name}</p>
						</motion.div>
					))}
				</motion.div>
				<motion.div className="app__skills-exp">
					<p className="p-text">📌 HOVER TO SEE MORE 📌</p>
					{experiences.map((experience) => (
						<motion.div className="app__skills-exp-item" key={uuidv4()}>
							<div className="app__skills-exp-year">
								<p className="bold-text">{experience.year}</p>
							</div>
							<motion.div className="app__skills-exp-works" key={uuidv4()}>
								{experience.works.map((work) => (
									<div key={uuidv4()}>
										<motion.div
											whileInView={{ opacity: [0, 1] }}
											transition={{ duration: 0.5 }}
											className="app__skills-exp-work"
											data-tooltip-id={work.name}
											key={uuidv4()}>
											<h4 className="bold-text" key={uuidv4()}>
												{work.name}
											</h4>
											<p className="p-text" key={uuidv4()}>
												{work.company}
											</p>
										</motion.div>
										<Tooltip
											key={uuidv4()}
											id={work.name}
											effect="solid"
											arrowColor="#fff"
											className="skills-tooltip">
											{work.desc}
										</Tooltip>
									</div>
								))}
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</>
	);
};
export default AppWrap(
	SuperWrap(Skills, "app__skills"),
	"skills",
	"app__whitebg"
);
