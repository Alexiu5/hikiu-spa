import './styles.scss';

const ProfilesCard = ({ current, images, onClick }) => {
	const filesUrl = 'https://files.hikiulab.com/images/team/thumbs';
	return (
		<div id="profiles-card">
			<div className="images-container">
				{images.map((e, index) => (
					<span
						key={index}
						className={
							current === index
								? 'image-content active'
								: 'image-content'
						}
						onClick={()=> onClick(index)}
					>
						<img
							src={`${filesUrl}/${e.image}`}
							alt="our team image"
							className="image"
						/>
					</span>
				))}
			</div>
		</div>
	);
};

export default ProfilesCard;
