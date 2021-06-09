import './styles.scss';
import translation from './es';
import ProfileImage from './profile-image/Profile-Image.component';
import image from '../../assets/png/img_8.png';

const Philosophy = () => {
	return (
		<section className="philosophy-container" id="philosophy">
			<div className="section left">
				<div className="content-container">
					<div className="title">
						<span className="blue">
							{translation.philosophy.title.blue}
						</span>
						<span className="red">
							{translation.philosophy.title.red}
						</span>
						<span className="purple">
							{translation.philosophy.title.purple}
						</span>
					</div>
					<div className="shadow-content "></div>
					<div className="card-container">
						<div className="card-content bottom-left">
							<p>
								{translation.philosophy.desc.text}&nbsp;
								<strong className="bold">
									{translation.philosophy.desc.strongOne}
									&nbsp;
								</strong>
								{translation.philosophy.desc.subText}&nbsp;
								<strong className="bold">
									{translation.philosophy.desc.strongTwo}
								</strong>
							</p>
						</div>
					</div>
					<div className="summary">
						<p>
							{translation.philosophy.summary.text}&nbsp;
							<strong className="text-purple">
								{translation.philosophy.summary.purple}&nbsp;
							</strong>
							<br />
							{translation.philosophy.summary.subText}&nbsp;
							<strong className="text-red">
								{translation.philosophy.summary.redStrong}
							</strong>
						</p>
					</div>
				</div>
			</div>
			<div className="section right">
				<div className="welcome-image">
					<ProfileImage image={image} />
				</div>
				<div className="welcome-container">
					<div className="welcome">
						<span className="top">
							{translation.philosophy.profile.welcome}{' '}
							<strong>
								{translation.philosophy.profile.strongPurple}
							</strong>
						</span>
						<span className="bottom">
							<strong>
								{
									translation.philosophy.profile.profiles[0]
										.name
								}{' '}
								-{' '}
								{
									translation.philosophy.profile.profiles[0]
										.role
								}
							</strong>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Philosophy;
