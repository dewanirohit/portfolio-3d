import {
	css,
	fancyBlog,
	figma,
	firebase,
	git,
	html,
	javascript,
	mongodb,
	netlify,
	nodejs,
	pintrigue,
	radflix,
	radStore,
	reactjs,
	redux,
	sanity,
	sass,
	styledComponents,
	tailwind,
	threejs,
	typescript,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "project",
		title: "Projects",
	},

	{
		id: "contact",
		title: "Contact",
	},
];

export const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "Sass",
		icon: sass,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Styled Components",
		icon: styledComponents,
	},
	{
		name: "Figma",
		icon: figma,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React Js",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Firebase",
		icon: firebase,
	},
	{
		name: "Sanity",
		icon: sanity,
	},
	{
		name: "Git",
		icon: git,
	},
	{
		name: "Netlify",
		icon: netlify,
	},
];

export const projects = [
	{
		name: "Online Fashion Store",
		description:
			"I developed an e-commerce website using the MERN stack for a fashion and accessories brand. I built a RESTful API for the backend with Express and MongoDB, and used React hooks and Redux to manage state and build reusable UI components using Styled Components. The application has features such as product listings, cart functionality, and payment integration using Stripe.",
		tags: [
			{
				name: "react",
				color: "text-[#149eca]",
			},
			{
				name: "nodejs",
				color: "text-[#5fa04e]",
			},
			{
				name: "styled-components",
				color: "text-[#e98dd0]",
			},
			{
				name: "redux",
				color: "text-[#764abc]",
			},
			{
				name: "mongodb",
				color: "text-[#00ed64]",
			},
			{
				name: "stripe",
				color: "text-[#111439]",
			},
		],
		image: radStore,
		source_code_link: "https://github.com/dewanirohit/react-shop",
		live_website_link: "https://the-rad-store.netlify.app/",
	},
	{
		name: "Dynamic and Performant Blog with GraphCMS",
		description:
			"A blog website built using NextJS and Tailwind CSS. I used the hygraph CMS which uses GraphQL as the backend to store all the articles and posts. The application has features such as dynamic post categories, information about the writer of the post, and related posts. I have also deployed the application using Vercel.",
		tags: [
			{
				name: "next",
				color: "text-[#000]",
			},
			{
				name: "tailwind",
				color: "text-[#38bdf8]",
			},
			{
				name: "hygraph",
				color: "text-[#fff]",
			},
		],
		image: fancyBlog,
		source_code_link: "https://github.com/dewanirohit/next-graphql-blog",
		live_website_link: "https://the-fancy-blog.vercel.app/",
	},
	{
		name: "Image sharing app",
		description:
			"A fullstack responsive image sharing social media application built with ReactJS and Tailwind CSS and Sanity as the backend. Users can login using their Google account which is implemented via Firebase Authentication and create 'Pins' which can be viewed and/or searched by other users. The app is deployed using Netlify.",
		tags: [
			{
				name: "react",
				color: "text-[#149eca]",
			},
			{
				name: "sanity",
				color: "text-[#f03e2f]",
			},
			{
				name: "tailwind",
				color: "text-[#38bdf8]",
			},
		],
		image: pintrigue,
		source_code_link:
			"https://github.com/dewanirohit/image-sharing-social-app/tree/main/frontend/src",
		live_website_link: "https://pintrigue.netlify.app/",
	},
	{
		name: "Netflix Front-End UI",
		description:
			"A responsive front-end Netflix UI clone built using ReactJS and Sass. I used the TMDB API to fetch movie details and dynamically display it to the frontend. Redux is used to manage state throughout the app. I have also used Firebase Authentication for user sign up and sign in. To enhance the user experience, I implemented features such as dynamic movie categories, search functionality, movie trailers, and user authentication. I then deployed the app using Netlify.",
		tags: [
			{
				name: "react",
				color: "text-[#149eca]",
			},
			{
				name: "sass",
				color: "text-[#cf649a]",
			},
			{
				name: "redux",
				color: "text-[#764abc]",
			},
			{
				name: "tmdb",
				color: "text-[#0ab5e0]",
			},
		],
		image: radflix,
		source_code_link: "https://github.com/dewanirohit/react-netflix-clone",
		live_website_link: "https://radflix.netlify.app/",
	},
];
