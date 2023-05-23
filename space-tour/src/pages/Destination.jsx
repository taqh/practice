import moon from '../assets/destination/image-moon.png';
import moon_alt from '../assets/destination/image-moon.webp';

function Destination() {
	return (
		<>
			<h1 className='numbered-title destination__heading'>
				<span aria-hidden='true'>01</span> Pick your destination
			</h1>

			<picture className='destination__image'>
				<source srcSet={moon_alt} type='image/webp' />
				<source srcSet={moon} type='image/png' />
				<img src={moon} alt={''} />
			</picture>

			<div
				className='destination__tab'
				role='tablist'
				aria-label='destination list'
			>
				<button
					role='tab'
					className='tab-btn'
					aria-selected='true'
					aria-controls='moon-tab'
				>
					Moon
				</button>
				<button
					role='tab'
					className='tab-btn'
					aria-selected='false'
					aria-controls='mars-tab'
				>
					Mars
				</button>
				<button
					role='tab'
					className='tab-btn'
					aria-selected='false'
					aria-controls='europa-tab'
				>
					Europa
				</button>
				<button
					role='tab'
					className='tab-btn'
					aria-selected='false'
					aria-controls='titan-tab'
				>
					Titan
				</button>
			</div>

			<article
				className='destination__info'
				id='moon-tab'
				tabIndex='0'
				role='tabpanel'
			>
				<h2 className='destination__name'>Moon</h2>

				<p>
					See our planet as you’ve never seen it before. A perfect relaxing
					trip away to help regain perspective and come back refreshed.
					While you’re there, take in some history by visiting the Luna 2
					and Apollo 11 landing sites.
				</p>

				<div className='destination__details'>
					<div>
						<h3 className='detail__heading'>Avg. distance</h3>
						<p className='spacetime'>384,400 km</p>
					</div>
					<div>
						<h3 className='detail__heading'>
							Est. travel time
						</h3>
						<p className='spacetime'>3 days</p>
					</div>
				</div>
			</article>
		</>
	);
}

export default Destination;
