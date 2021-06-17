import './style.scss';

const Profile = ({ image, custom }) => {
	const filesUrl = 'https://files.hikiulab.com/images/team';
	return (
		<div id="photo-container">
			<div className={`team-member ${custom ? 'space-4' : 'space-20'}`}>
				{
					custom ? (<div className='custom' style={{backgroundImage: `url(${filesUrl}/${image})`}}> </div>) : (<div className="circle"></div>)
				}
			</div>
		</div>
	);
};

export default Profile;
