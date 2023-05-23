function Spaceport() {
	return (
		<>
			<article className='technology__details' role='tabpanel' tabIndex='0'>
				<div>
					<h2 className='terminology'>The terminology...</h2>
					<p className='tech-name'>Spaceport</p>
				</div>
				<p>
					A spaceport or cosmodrome is a site for launching (or receiving)
					spacecraft, by analogy to the seaport for ships or airport for
					aircraft. Based in the famous Cape Canaveral, our spaceport is
					ideally situated to take advantage of the Earth’s rotation for
					launch.
				</p>
			</article>

			<picture hidden className='technology__image'>
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
