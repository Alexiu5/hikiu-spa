import Slideshow from './slideshow/Slideshow.component';
import './styles.scss';

const Works = () => {
	const filesUrl = 'https://files.hikiulab.com/images/works';
	const works = [
		{
			name: 'Fotografia',
			images: [
				`${filesUrl}/fotografia/1-A.jpg`,
				`${filesUrl}/fotografia/2-A.jpg`,
				`${filesUrl}/fotografia/3-A.jpg`,
				`${filesUrl}/fotografia/4-A.jpg`,
				`${filesUrl}/fotografia/5-A.jpg`
			],
		},
		{
			name: 'Dirección de arte',
			images: [
				`${filesUrl}/arte/1-B.png`,
				`${filesUrl}/arte/2-B.png`,
				`${filesUrl}/arte/3-B.jpg`,
				`${filesUrl}/arte/4-B.jpg`,
				`${filesUrl}/arte/5-B.png`
			],
		},
		{
			name: 'Branding',
			images: [
				`${filesUrl}/branding/1-C.jpg`,
				`${filesUrl}/branding/2-C.jpg`,
				`${filesUrl}/branding/3-C.jpg`,
				`${filesUrl}/branding/4-C.jpg`,
				`${filesUrl}/branding/5-C.jpg`,
				`${filesUrl}/branding/6-C.jpg`,
				`${filesUrl}/branding/7-C.jpg`,
				`${filesUrl}/branding/8-C.jpg`,
			],
		},
		{
			name: 'Fotografía de producto',
			images: [
				`${filesUrl}/producto/1-D.jpg`,
				`${filesUrl}/producto/2-D.jpg`,
				`${filesUrl}/producto/3-D.jpg`,
				`${filesUrl}/producto/4-D.jpg`
			],
		},
		{
			name: 'Render',
			images: [
				`${filesUrl}/render/1-E.jpg`,
				`${filesUrl}/render/2-E.jpg`,
				`${filesUrl}/render/3-E.jpg`,
				`${filesUrl}/render/4-E.jpg`,
				`${filesUrl}/render/5-E.jpg`
			]
		},
	];

	return (
		<section id="works-container">
			<h2 className="title">Trabajos Hikiu</h2>
			<Slideshow images={works}/>
		</section>
	);
};

export default Works;
