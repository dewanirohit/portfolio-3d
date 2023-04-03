import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

import SectionWrapper from "../hoc/SectionWrapper";
import Tech from "./Tech";

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>

				<p className={styles.sectionHeadText}>About me.</p>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				Hi there! My name is Rohit Dewani and I'm a web developer based
				in Manarashtra, India. I have a passion for creating beautiful
				and functional websites that provide great user experiences.
			</motion.p>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				I may not have years of industry experience, but I've spent
				countless hours learning HTML, CSS, JavaScript, and other
				programming languages. I'm a dedicated learner who's always
				looking to improve my skills and stay up-to-date with the latest
				trends in the industry.
			</motion.p>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				As a web developer, I have a range of technical and professional
				skills that enable me to create beautiful and functional
				websites. Here are some of the skills that I bring to the table:
			</motion.p>

			<Tech />
		</>
	);
};

export default SectionWrapper(About, "about");
