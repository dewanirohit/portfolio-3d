import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";

import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((tech, index) => (
				<motion.div
					key={tech.name}
					variants={fadeIn("", "", `${index * 0.1}`, 1)}
				>
					<div className="cursor-grab">
						<BallCanvas icon={tech.icon} />
					</div>

					<p className={`text-center ${styles.sectionSubText}`}>
						{tech.name}
					</p>
				</motion.div>
			))}
		</div>
	);
};

export default Tech;
