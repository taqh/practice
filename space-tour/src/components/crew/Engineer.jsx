function Engineer() {
	return (
		<>
			<article
				hidden
				className='crew-details flow'
				id='crew-tab'
				role='tabpanel'
				tabIndex='0'
			>
				<header className='flow flow--space-small'>
					<h2 className='fs-600 ff-serif uppercase'>Flight Engineer</h2>
					<p className='fs-700 uppercase ff-serif'>Anousheh Ansari</p>
				</header>
				<p>
					Anousheh Ansari is an Iranian American engineer and co-founder of
					Prodea Systems. Ansari was the fourth self-funded space tourist,
					the first self-funded woman to fly to the ISS, and the first
					Iranian in space.
				</p>
			</article>

         <picture hidden id='crew-image'>
				<source srcSet={'src.webp'} type='image/webp' />
				<source srcSet={'src.png'} type='image/png' />
				<img src={'src.png'} alt='Anousheh ansari' />
			</picture> 
		</>
	);
}

export default Engineer;
