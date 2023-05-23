function Pilot() {
	return (
		<>
			<article
				className='crew__details'
				id='pilot-tab'
				role='tabpanel'
				tabIndex='0'
			>
				<header>
					<h2 className='crew__role'>Pilot</h2>
					<p className='crew__name'>Victor Glover</p>
				</header>
				<p>
					Pilot on the first operational flight of the SpaceX Crew Dragon
					to the International Space Station. Glover is a commander in the
					U.S. Navy where he pilots an F/A-18.He was a crew member of
					Expedition 64, and served as a station systems flight engineer.
				</p>
			</article>

			<picture className='crew__image'>
				<source srcSet={'src.webp'} type='image/webp' />
				<source srcSet={'src.png'} type='image/png' />
				<img src={'src.png'} alt='Victor glover' />
			</picture>
		</>
	);
}

export default Pilot;
