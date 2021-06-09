import './style.scss';

const Profile = ({ image, custom }) => {
	const filesUrl = 'https://files.hikiulab.com/images/team';
	return (
		<div id="photo-container">
			<div className={`team-member ${custom ? 'space-4' : 'space-20'}`}>
				{
					custom ? (<img className="custom" src={`${filesUrl}/${image}`} alt="nuestro equipo" />) : (<><img src={image} alt="nuestro equipo" /><div className="circle"></div> </>)
				}
			</div>
		</div>
	);
};

export default Profile;
