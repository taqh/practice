import portrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import landscape from '../assets/technology/image-launch-vehicle-landscape.jpg';

function Technology() {
	return (
		<>
			<h1 className='numbered-title technology__heading'>
				<span aria-hidden='true'>03</span> Space launch 101
			</h1>

			<div className='numbered-tab' role='tablist'>
				<button
					aria-selected='true'
					aria-controls='launch-tab'
					role='tab'
					className='num-btn'
				>
					<span className='sr-only'>Launch vehicle</span>1
				</button>
				<button
					role='tab'
					aria-selected='false'
					aria-controls='capsule-tab'
					className='num-btn'
				>
					<span className='sr-only'>Space capsule</span>2
				</button>
				<button
					role='tab'
					aria-selected='false'
					aria-controls='spaceport-tab'
					className='num-btn'
				>
					<span className='sr-only'>Spaceport</span>3
				</button>
			</div>

			<article
				className='technology-details flow tech-tab'
				role='tabpanel'
				tabIndex='0'
			>
				<div className='flow flow--space-small'>
					<h2 className='terminology'>The terminology...</h2>
					<p className='tech'>
						Launch vehicle
					</p>
				</div>
				<p>
					A launch vehicle or carrier rocket is a rocket-propelled vehicle
					used to carry a payload from Earth&apos;s surface to space,
					usually to Earth orbit or beyond. Our WEB-X carrier rocket is the
					most powerful in operation. Standing 150 metres tall, it&apos;s
					quite an awe-inspiring sight on the launch pad!
				</p>
			</article>

			<picture className='tech-image'>
				<source
					media='(max-width: 51.255em)'
					srcSet={landscape}
					type='image/webp'
				/>
				<source
					media='(max-width: 51.255em)'
					srcSet={landscape}
					type='image/png'
				/>
				<img src={portrait} alt='Launch vehicle' />
			</picture>
		</>
	);
}

export default Technology;
