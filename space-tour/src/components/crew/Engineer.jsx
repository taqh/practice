function Engineer() {
	return (
		<>
			<article
				className='crew__details'
				id='crew-tab'
				role='tabpanel'
				tabIndex='0'
			>
				<div>
					<h2 className='crew__role'>Flight Engineer</h2>
					<p className='crew__name'>Anousheh Ansari</p>
				</div>
				<p>
					Anousheh Ansari is an Iranian American engineer and co-founder of
					Prodea Systems. Ansari was the fourth self-funded space tourist,
					the first self-funded woman to fly to the ISS, and the first
					Iranian in space.
				</p>
			</article>

			<picture className='crew__image'>
				<source srcSet={'src.webp'} type='image/webp' />
				<source srcSet={'src.png'} type='image/png' />
				<img src={'src.png'} alt='Anousheh ansari' />
			</picture>
		</>
	);
}

export default Engineer;
