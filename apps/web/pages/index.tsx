import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { GetStaticProps, NextPage } from "next";
import { useEffect, useRef } from "react";
import AboutMe from "../components/UI/about-me";
import ContactMe from "../components/UI/contact-me";
import CustomerStory from "../components/UI/customer-story";
import FeaturedBlogPosts from "../components/UI/featured-blog-posts";
import Hero from "../components/UI/hero";
import Layout from "../components/UI/layout";
import Meta from "../components/meta";
import { HomePageProps } from "../types/interfaces";

import {
	getAboutMeText,
	getAllPostsForHome,
	getCustomerStoryText,
	getHeroText,
} from "../lib/api";

const Home: NextPage<HomePageProps> = ({
	allPosts,
	heroText,
	aboutMeText,
	customerStoryText,
}: HomePageProps) => {
	gsap.registerPlugin(ScrollTrigger);
	const revealRefs = useRef([] as HTMLDivElement[]);
	revealRefs.current = [];

	const addToRefs = (el: HTMLDivElement) => {
		revealRefs.current.push(el);
	};

	useEffect(() => {
		revealRefs.current.forEach((el, i) => {
			gsap.from(el, {
				y: 100,
				scrollTrigger: {
					id: `section-${i + 1}`,
					trigger: el,
					start: "top bottom",
					end: "bottom bottom",
					scrub: 1,
				},
			});
		});
	}, []);

	return (
		<>
			<Meta />
			<Layout preview={false}>
				<Hero content={heroText} />
				<div className="scroll-reveal" ref={addToRefs}>
					<CustomerStory content={customerStoryText} />
				</div>
				<div className="scroll-reveal" ref={addToRefs}>
					<AboutMe content={aboutMeText} />
				</div>

				<div className="scroll-reveal" ref={addToRefs}>
					<FeaturedBlogPosts content={allPosts} />
				</div>
				<div className="scroll-reveal" ref={addToRefs}>
					<ContactMe />
				</div>

				<br />
			</Layout>
		</>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
	const allPosts = await getAllPostsForHome({
		preview,
		numberOfPosts: 4,
		offset: 0,
	});

	const heroText = await getHeroText();

	const aboutMeText = await getAboutMeText();
	const customerStoryText = await getCustomerStoryText();

	return {
		props: {
			allPosts,
			heroText,
			aboutMeText,
			customerStoryText,
		},
		revalidate: 1,
	};
};
