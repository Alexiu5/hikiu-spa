import AppNavbar from '../components/layout/navbar/navbar.component';
import Banner from '../components/banner/Banner.component';
import Philosophy from '../components/philosophy/Philosophy.component';
import OurTeam from '../components/our-team/OurTeam.component';
import ContactComponent from '../components/contact/contact.component';
import FooterComponent from '../components/layout/footer/footer.component';
import Pillars from '../components/pillars/Pillars';
import Works from '../components/works/works.component';
import '../App.scss';
import { useState, useEffect } from 'react';

const HomePage = () => {
	const [isNavbarBackground, setIsNavbarBackground] = useState(false);
	const observerOptions = {};

	const sectionObserver = new IntersectionObserver(
		(entries, sectionOneObserver) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					setIsNavbarBackground(true);
				} else {
					setIsNavbarBackground(false);
				}
			});
		},
		observerOptions
	);

	useEffect(() => {
		const banner = document.querySelector('#banner');
		sectionObserver.observe(banner);
	}, []);

	return (
		<div className="layout">
			<AppNavbar isActive={isNavbarBackground} />
			<Banner />
			<Philosophy />
			<OurTeam />
			<Pillars />
			<Works/>
			<ContactComponent />
			<FooterComponent />
		</div>
	);
};

export default HomePage;
