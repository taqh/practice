function Europa() {
	return (
		<>
			<picture hidden id='europa-image'>
				<source srcSet={'src.webp'} type='image/webp' />
				<source srcSet={''} type='image/png' />
				<img src={''} alt='' />
			</picture>

			<article
				hidden
				className='destination-info flow'
				id='europa-tab'
				tabIndex='0'
				role='tabpanel'
			>
				<h2 className='fs-800 ff-serif uppercase'>Europa</h2>

				<p>
					{' '}
					The smallest of the four Galilean moons orbiting Jupiter, Europa
					is a winter lover’s dream. With an icy surface, it’s perfect for
					a bit of ice skating, curling, hockey, or simple relaxation in
					your snug wintery cabin.
				</p>

				<div className='destination-meta flex'>
					<div>
						<h3 className='txt-accent fs-200 uppercase'>Avg. distance</h3>
						<p className=' ff-serif uppercase'>628 mil. km</p>
					</div>
					<div>
						<h3 className='txt-accent fs-200 uppercase'>
							Est. travel time
						</h3>
						<p className=' ff-serif uppercase'>3 years</p>
					</div>
				</div>
			</article>
		</>
	);
}

export default Europa;
