function Europa() {
	return (
		<>
			<picture className='destination__image'>
				<source srcSet={'src.webp'} type='image/webp' />
				<source srcSet={''} type='image/png' />
				<img src={''} alt='' />
			</picture>

			<article
				className='destination__info'
				id='europa-tab'
				tabIndex='0'
				role='tabpanel'
			>
				<h2 className='destination__name'>Europa</h2>

				<p>
					The smallest of the four Galilean moons orbiting Jupiter, Europa
					is a winter lover’s dream. With an icy surface, it’s perfect for
					a bit of ice skating, curling, hockey, or simple relaxation in
					your snug wintery cabin.
				</p>

				<div className='destination__details'>
					<div>
						<h3 className='detail__heading'>Avg. distance</h3>
						<p className='spacetime'>628 mil. km</p>
					</div>
					<div>
						<h3 className='detail__heading'>Est. travel time</h3>
						<p className='spacetime'>3 years</p>
					</div>
				</div>
			</article>
		</>
	);
}

export default Europa;
