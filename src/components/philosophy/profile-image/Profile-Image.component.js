import Figure from '../figures/figure';
import './style.scss';

const ProfileImage = ({ image, alt }) => {
	return (
		<div className="image-container" data-aos="fade-left">
			<img src={image} alt={alt} id="image" />
			<Figure
				customclass="absolute circle-small"
			/>
			<Figure
				customclass="absolute circle-big"
			/>
		</div>
	);
};

export default ProfileImage;
