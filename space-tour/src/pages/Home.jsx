import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
	const navigate = useNavigate();

	return (
		<>
			<div className='breifing'>
				<h1 className='home__heading'>
					So, you want to travel to
					<span className='large__text'>Space</span>
				</h1>
				<p className='txt-accent'>
					Let’s face it if you want to go to space, you might as well
					genuinely go to outer space and not hover kind of on the edge of
					it. Well sit back, and relax because we’ll give you a truly out
					of this world experience!
				</p>
			</div>
			<div>
				<Link
					onClick={navigate('/destination')}
					className='explore-btn'
				>
					Explore
				</Link>
			</div>
		</>
	);
}

export default HomePage;
