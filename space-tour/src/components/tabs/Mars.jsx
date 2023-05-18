function Mars() {
	return (
		<>
			<picture hidden id='mars-image'>
				<source srcSet={'src.webp'} type='image/webp' />
				<source srcSet={''} type='image/png' />
				<img src={''} alt='' />
			</picture>

			<article
				hidden
				className='destination-info flow'
				id='mars-tab'
				tabIndex='0'
				role='tabpanel'
			>
				<h2 className='fs-800 ff-serif uppercase'>Mars</h2>

				<p>
					Don’t forget to pack your hiking boots. You’ll need them to
					tackle Olympus Mons, the tallest planetary mountain in our solar
					system. It’s two and a half times the size of Everest!
				</p>

				<div className='destination-meta flex'>
					<div>
						<h3 className='txt-accent fs-200 uppercase'>Avg. distance</h3>
						<p className=' ff-serif uppercase'>225 mil. km</p>
					</div>
					<div>
						<h3 className='txt-accent fs-200 uppercase'>
							Est. travel time
						</h3>
						<p className=' ff-serif uppercase'>9 months</p>
					</div>
				</div>
			</article>
		</>
	);
}

export default Mars;
