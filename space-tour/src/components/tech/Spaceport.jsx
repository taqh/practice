function Spaceport() {
	return (
		<>
			<article
				hidden
				className='technology-details flow spaceport-tab'
				role='tabpanel'
				tabIndex='0'
			>
				<header className='flow flow--space-small'>
					<h2 className='fs-600 ff-serif uppercase'>The terminology...</h2>
					<p className='fs-700 uppercase ff-serif'>Spaceport</p>
				</header>
				<p>
					A spaceport or cosmodrome is a site for launching (or receiving)
					spacecraft, by analogy to the seaport for ships or airport for
					aircraft. Based in the famous Cape Canaveral, our spaceport is
					ideally situated to take advantage of the Earth’s rotation for
					launch.
				</p>
			</article>

			<picture hidden className='spaceport-image'>
				<source
					media='(max-width: 50em)'
					srcSet={'lanscape'}
					type='image/webp'
				/>
				<source
					media='(max-width: 50em)'
					srcSet={'landscape'}
					type='image/png'
				/>
				<img src={'portrait'} alt='spaceport' />
			</picture>
		</>
	);
}

export default Spaceport;
