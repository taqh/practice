function Titan() {
	return (
		<>
			<picture hidden id='titan-image'>
				<source srcSet={'src.webp'} type='image/webp' />
				<source srcSet={'src.png'} type='image/png' />
				<img src={''} alt='' />
			</picture>

			<article
				hidden
				className='destination-info flow'
				id='titan-tab'
				tabIndex='0'
				role='tabpanel'
			>
				<h2 className='fs-800 ff-serif uppercase'>Titan</h2>

				<p>
					The only moon known to have a dense atmosphere other than Earth,
					Titan is a home away from home (just a few hundred degrees
					colder!). As a bonus, you get striking views of the Rings of
					Saturn.
				</p>

				<div className='destination-meta flex'>
					<div>
						<h3 className='txt-accent fs-200 uppercase'>Avg. distance</h3>
						<p className=' ff-serif uppercase'>1.6 bil. km</p>
					</div>
					<div>
						<h3 className='txt-accent fs-200 uppercase'>
							Est. travel time
						</h3>
						<p className=' ff-serif uppercase'>7 years</p>
					</div>
				</div>
			</article>
		</>
	);
}

export default Titan;
