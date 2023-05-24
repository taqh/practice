import { useState } from 'react';
import { technology } from '../data/data.json';

function Technology() {
	const [currentSlide, setCurrentSlide] = useState(technology[0]);

	const changeSlide = (target) => {
		const targetSlide = technology.findIndex(
			(tech) => tech.name.toLowerCase() === target
		);

		setCurrentSlide(technology[targetSlide]);
	};

	return (
		<>
			<h1 className='numbered-title technology__heading'>
				<span aria-hidden='true'>03</span> Space launch 101
			</h1>

			<div className='technology__tab' role='tablist'>
				<button
					aria-selected={
						currentSlide.name.toLowerCase() === 'launch vehicle'
					}
					aria-controls='launch-tab'
					role='tab'
					className='num-btn'
					onClick={() => changeSlide('launch vehicle')}
				>
					<span className='sr-only'>Launch vehicle</span>1
				</button>
				<button
					role='tab'
					aria-selected={
						currentSlide.name.toLowerCase() === 'space capsule'
					}
					aria-controls='capsule-tab'
					className='num-btn'
					onClick={() => changeSlide('space capsule')}
				>
					<span className='sr-only'>Space capsule</span>2
				</button>
				<button
					role='tab'
					aria-selected={currentSlide.name.toLowerCase() === 'spaceport'}
					aria-controls='spaceport-tab'
					className='num-btn'
					onClick={() => changeSlide('spaceport')}
				>
					<span className='sr-only'>Spaceport</span>3
				</button>
			</div>

			<article className='technology__details' role='tabpanel' tabIndex='0'>
				<div>
					<h2 className='terminology'>The terminology...</h2>
					<p className='tech-name'>{currentSlide.name}</p>
				</div>
				<p>{currentSlide.description}</p>
			</article>

			<picture className='technology__image'>
				<source
					media='(max-width: 51.255em)'
					srcSet={currentSlide.images.landscape}
					type='image/webp'
				/>
				<source
					media='(max-width: 51.255em)'
					srcSet={currentSlide.images.landscape}
					type='image/png'
				/>
				<img
					src={currentSlide.images.portrait}
					alt={`image of ${currentSlide.name}`}
				/>
			</picture>
		</>
	);
}

export default Technology;
