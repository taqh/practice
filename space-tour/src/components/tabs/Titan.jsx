function Titan() {
	return (
		<>
			<picture className='destination__image'>
				<source srcSet={'src.webp'} type='image/webp' />
				<source srcSet={'src.png'} type='image/png' />
				<img src={''} alt='' />
			</picture>

			<article
				className='destination__info'
				id='titan-tab'
				tabIndex='0'
				role='tabpanel'
			>
				<h2 className='destination__name'>Titan</h2>

				<p>
					The only moon known to have a dense atmosphere other than Earth,
					Titan is a home away from home (just a few hundred degrees
					colder!). As a bonus, you get striking views of the Rings of
					Saturn.
				</p>

				<div className='destination__details'>
					<div>
						<h3 className='detail__heading'>Avg. distance</h3>
						<p className='spacetime'>1.6 bil. km</p>
					</div>
					<div>
						<h3 className='detail__heading'>Est. travel time</h3>
						<p className='spacetime'>7 years</p>
					</div>
				</div>
			</article>
		</>
	);
}

export default Titan;
