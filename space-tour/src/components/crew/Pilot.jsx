function Pilot() {
	return (
		<>
			<article
				hidden
				className='crew-details flow'
				id='pilot-tab'
				role='tabpanel'
				tabIndex='0'
			>
				<header className='flow flow--space-small'>
					<h2 className='fs-600 ff-serif uppercase'>Pilot</h2>
					<p className='fs-700 uppercase ff-serif'>Victor Glover</p>
				</header>
				<p>
					Pilot on the first operational flight of the SpaceX Crew Dragon
					to the International Space Station. Glover is a commander in the
					U.S. Navy where he pilots an F/A-18.He was a crew member of
					Expedition 64, and served as a station systems flight engineer.
				</p>
			</article>

			<picture hidden id='pilot-image'>
				<source srcSet={'src.webp'} type='image/webp' />
				<source srcSet={'src.png'} type='image/png' />
				<img src={'src.png'} alt='Victor glover' />
			</picture>
		</>
	);
}

export default Pilot;
