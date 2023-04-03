import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, StarsCanvas, Works } from "./components";

function App() {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />

					<Hero />
				</div>

				<About />

				<Works />

				<div className="relative z-0">
					<Contact />

					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
