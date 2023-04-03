import { motion } from "framer-motion";

import { ComputersCanvas } from "./canvas";

import { styles } from "../styles";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915eff]" />

					<div className="violet-gradient w-1 sm:h-80 h-40" />
				</div>

				<div>
					<p className={`${styles.heroSubText}`}>
						Hi, I'm <span className="text-[#915eff]">Rohit</span>
					</p>

					<p className={`${styles.heroHeadText} text-white`}>
						Creative Web Developer
					</p>

					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						Your partner in creating an outstanding online presence
					</p>
				</div>
			</div>

			<span className="cursor-grab">
				<ComputersCanvas />
			</span>

			<div className="absolute bottom-10 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
