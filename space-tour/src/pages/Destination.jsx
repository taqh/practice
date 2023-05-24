import { useState, useEffect } from 'react';
import { destinations } from '../data/data.json';

function Destination() {
	const [currentLocation, setCurrentLocation] = useState(destinations[0]);

	const changeLocation = (target) => {
		const targetLocation = destinations.findIndex(
			(location) => location.name.toLowerCase() === target
		);
		setCurrentLocation(destinations[targetLocation]);
	};

	useEffect(() => {
		// const timeout = setTimeout(() => {
		// 	setCurrentLocation((prevLocation) => {
		// 		const nextIndex = (prevLocation + 1) % destinations.length;
		// 		return destinations[nextIndex];
		// 	});
		// }, 15000);

		// return () => clearTimeout(timeout);
	}, [currentLocation]);


	return (
		<>
			<h1 className='numbered-title destination__heading'>
				<span aria-hidden='true'>01</span> Pick your destination
			</h1>

			<picture className='destination__image'>
				<source srcSet={currentLocation.images.webp} type='image/webp' />
				<source srcSet={currentLocation.images.png} type='image/png' />
				<img
					src={currentLocation.images.png}
					alt={`Image of ${currentLocation.name}`}
				/>
			</picture>

			<div
				className='destination__tab'
				role='tablist'
				aria-label='destination list'
			>
				<button
					role='tab'
					className='tab-btn'
					aria-selected={currentLocation.name.toLowerCase() === 'moon'}
					aria-controls='moon-tab'
					onClick={() => changeLocation('moon')}
				>
					Moon
				</button>
				<button
					role='tab'
					className='tab-btn'
					aria-selected={currentLocation.name.toLowerCase() === 'mars'}
					aria-controls='mars-tab'
					onClick={() => changeLocation('mars')}
				>
					Mars
				</button>
				<button
					role='tab'
					className='tab-btn'
					aria-selected={currentLocation.name.toLowerCase() === 'europa'}
					aria-controls='europa-tab'
					onClick={() => changeLocation('europa')}
				>
					Europa
				</button>
				<button
					role='tab'
					className='tab-btn'
					aria-selected={currentLocation.name.toLowerCase() === 'titan'}
					aria-controls='titan-tab'
					onClick={() => changeLocation('titan')}
				>
					Titan
				</button>
			</div>

			<article
				className='destination__info'
				id={`${currentLocation.name.toLowerCase()}-tab`}
				tabIndex='0'
				role='tabpanel'
			>
				<h2 className='destination__name'>{currentLocation.name}</h2>

				<p>{currentLocation.description}</p>

				<div className='destination__details'>
					<div>
						<h3 className='detail__heading'>Avg. distance</h3>
						<p className='spacetime'>{currentLocation.distance}</p>
					</div>
					<div>
						<h3 className='detail__heading'>Est. travel time</h3>
						<p className='spacetime'>{currentLocation.travel}</p>
					</div>
				</div>
			</article>
		</>
	);
}

export default Destination;
