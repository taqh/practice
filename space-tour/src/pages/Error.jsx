import { useNavigate } from 'react-router-dom';
import moon from '../assets/destination/image-moon.png';
function ErrorPage() {
	const navigate = useNavigate();
	return (
		<section className='error'>
			<div>
				<h1 className='error__heading'>
					Oops
					<span className='error__heading--small'>
						Looks Like you got lost in space
					</span>
				</h1>
				<p>
					Let’s go back
					<button onClick={navigate('/')} className='home-btn'>
						Home
					</button>
				</p>
			</div>
			<img src={moon} alt='a moon' />
		</section>
	);
}

export default ErrorPage;
