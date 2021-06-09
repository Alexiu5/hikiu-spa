import './profiles.scss';
import Profile from './profile/profile.component';

const Profiles = ({ current, images }) => {
	const slidePositions = [0, 1, 2, 3];

	return (
		<div className="profile-container" data-aos="zoom-in">
			{images.map((e, index) => (
				<div
					key={index}
					className={index === current ? 'slide active' : 'slide'}
				>
					{index === current && (
						<div className="profile-pic">
							<Profile image={e.image} custom={e.custom} />
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default Profiles;
