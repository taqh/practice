import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageContext from '../context/PageContext';

function HomePage() {
	const navigate = useNavigate();
	const { switchActivePage } = useContext(PageContext);

	const explore = () => {
		navigate('/destination');
		switchActivePage('destination');
	};

	return (
		<>
			<div className='breifing'>
				<h1 className='home__heading'>
					So, you want to travel to
					<span className='home__heading--large'>Space</span>
				</h1>
				<p>
					Let’s face it if you want to go to space, you might as well
					genuinely go to outer space and not hover kind of on the edge of
					it. Well sit back, and relax because we’ll give you a truly out
					of this world experience!
				</p>
			</div>
			<div className='explore'>
				<Link onClick={explore} className='explore-btn'>
					Explore
				</Link>
			</div>
		</>
	);
}

export default HomePage;
