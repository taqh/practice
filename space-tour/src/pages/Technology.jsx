import { useEffect, useState } from 'react';
import { technology } from '../data/data.json';

function Technology() {
	const [currentTech, setCurrentTech] = useState(technology[0]);

	const changeTech = (target) => {
		const targetTech = technology.findIndex(
			(tech) => tech.name.toLowerCase() === target
		);
		setCurrentTech(technology[targetTech]);
	};

	useEffect(() => {
		const currentTechIndex = technology.findIndex(
			(tech) => tech.name === currentTech.name
		);
		const timeout = setTimeout(() => {
			setCurrentTech(() => {
				const nextTechIndex = (currentTechIndex + 1) % technology.length;
				return technology[nextTechIndex];
			});
		}, 15000);
		
		return () => clearTimeout(timeout);
	}, [currentTech]);

	return (
		<>
			<h1 className='numbered-title technology__heading'>
				<span aria-hidden='true'>03</span> Space launch 101
			</h1>

			<div className='technology__tab' role='tablist'>
				<button
					aria-selected={
						currentTech.name.toLowerCase() === 'launch vehicle'
					}
					aria-controls='launch-tab'
					role='tab'
					className='num-btn'
					onClick={() => changeTech('launch vehicle')}
				>
					<span className='sr-only'>Launch vehicle</span>1
				</button>
				<button
					role='tab'
					aria-selected={currentTech.name.toLowerCase() === 'spaceport'}
					aria-controls='spaceport-tab'
					className='num-btn'
					onClick={() => changeTech('spaceport')}
				>
					<span className='sr-only'>Spaceport</span>2
				</button>
				<button
					role='tab'
					aria-selected={
						currentTech.name.toLowerCase() === 'space capsule'
					}
					aria-controls='capsule-tab'
					className='num-btn'
					onClick={() => changeTech('space capsule')}
				>
					<span className='sr-only'>Space capsule</span>3
				</button>
			</div>

			<article className='technology__details' role='tabpanel' tabIndex='0'>
				<div>
					<h2 className='terminology'>The terminology...</h2>
					<p className='tech-name'>{currentTech.name}</p>
				</div>
				<p>{currentTech.description}</p>
			</article>

			<picture className='technology__image'>
				<source
					media='(max-width: 51.255em)'
					srcSet={currentTech.images.landscape}
					type='image/webp'
				/>
				<source
					media='(max-width: 51.255em)'
					srcSet={currentTech.images.landscape}
					type='image/png'
				/>
				<img
					src={currentTech.images.portrait}
					alt={`image of ${currentTech.name}`}
				/>
			</picture>
		</>
	);
}

export default Technology;
