function Mars() {
	return (
		<>
			<picture className='destination__image'>
				<source srcSet={'src.webp'} type='image/webp' />
				<source srcSet={''} type='image/png' />
				<img src={''} alt='' />
			</picture>

			<article
				className='destination__info'
				id='mars-tab'
				tabIndex='0'
				role='tabpanel'
			>
				<h2 className='destination__name'>Mars</h2>

				<p>
					Don’t forget to pack your hiking boots. You’ll need them to
					tackle Olympus Mons, the tallest planetary mountain in our solar
					system. It’s two and a half times the size of Everest!
				</p>

				<div className='destination__details'>
					<div>
						<h3 className='detail__heading'>Avg. distance</h3>
						<p className='spacetime'>225 mil. km</p>
					</div>
					<div>
						<h3 className='detail__heading'>Est. travel time</h3>
						<p className='spacetime'>9 months</p>
					</div>
				</div>
			</article>
		</>
	);
}

export default Mars;
