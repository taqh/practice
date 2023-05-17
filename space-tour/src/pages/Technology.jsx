function Technology() {
	return (
		<>
			{/* <!-- number indicator --> */}
			<div className='cover'>
				<div className='number-indicators' role='tablist'>
					<button
						aria-selected='true'
						aria-controls='launch-tab'
						role='tab'
						data-image='launch-image'
					>
						<span className='sr-only '>Launch vehicle</span>1
					</button>
					<button
						aria-selected='false'
						aria-controls='capsule-tab'
						role='tab'
						data-image='capsule-image'
					>
						<span className='sr-only'>Space capsule</span>2
					</button>
					<button
						aria-selected='false'
						aria-controls='spaceport-tab'
						role='tab'
						data-image='spaceport-image'
					>
						<span className='sr-only'>Spaceport</span>3
					</button>
				</div>

				{/* <!-- launch --> */}
				<article
					className='technology-details flow'
					id='launch-tab'
					role='tabpanel'
					tabindex='0'
				>
					<header className='flow flow--space-small'>
						<h2 className='fs-500 ff-serif uppercase'>
							The terminology...
						</h2>
						<p className='fs-700 uppercase ff-serif d-block'>
							Launch vehicle
						</p>
					</header>
					<p>
						A launch vehicle or carrier rocket is a rocket-propelled
						vehicle used to carry a payload from Earth's surface to space,
						usually to Earth orbit or beyond. Our WEB-X carrier rocket is
						the most powerful in operation. Standing 150 metres tall, it's
						quite an awe-inspiring sight on the launch pad!
					</p>
				</article>

				{/* <!-- capsule --> */}
				<article
					hidden
					className='technology-details flow'
					id='capsule-tab'
					role='tabpanel'
					tabindex='0'
				>
					<header className='flow flow--space-small'>
						<h2 className='fs-600 ff-serif uppercase'>
							The terminology...
						</h2>
						<p className='fs-700 uppercase ff-serif'>Space capsule</p>
					</header>
					<p>
						A space capsule is an often-crewed spacecraft that uses a
						blunt-body reentry capsule to reenter the Earth's atmosphere
						without wings. Our capsule is where you'll spend your time
						during the flight. It includes a space gym, cinema, and plenty
						of other activities to keep you entertained.
					</p>
				</article>

				{/* <!-- spaceport --> */}
				<article
					hidden
					className='technology-details flow'
					id='spaceport-tab'
					role='tabpanel'
					tabindex='0'
				>
					<header className='flow flow--space-small'>
						<h2 className='fs-600 ff-serif uppercase'>
							The terminology...
						</h2>
						<p className='fs-700 uppercase ff-serif'>Spaceport</p>
					</header>
					<p>
						A spaceport or cosmodrome is a site for launching (or
						receiving) spacecraft, by analogy to the seaport for ships or
						airport for aircraft. Based in the famous Cape Canaveral, our
						spaceport is ideally situated to take advantage of the Earth’s
						rotation for launch.
					</p>
				</article>

				<picture id='launch-image'>
					<source
						media='(max-width: 50em)'
						srcSet={src.webp - lanscape}
						type='image/webp'
					/>
					<source
						media='(max-width: 50em)'
						srcSet={src.png - landscape}
						type='image/png'
					/>
					<img src={src.png - portrait} alt='Launch vehicle' />
				</picture>

				{/* <!-- space capsule --> */}
				<picture hidden id='capsule-image'>
					<source
						media='(max-width: 50em)'
						srcSet={src.webp - lanscape}
						type='image/webp'
					/>
					<source
						media='(max-width: 50em)'
						srcSet={src.png - landscape}
						type='image/png'
					/>
					<img src={src.png - portrait} alt='space capsule' />
				</picture>

				{/* <!-- spaceport --> */}

				<picture hidden id='spaceport-image'>
					<source
						media='(max-width: 50em)'
						srcSet={src.webp - lanscape}
						type='image/webp'
					/>
					<source
						media='(max-width: 50em)'
						srcSet={src.png - landscape}
						type='image/png'
					/>
					<img src={src.png - portrait} alt='spaceport' />
				</picture>
			</div>
		</>
	);
}

export default Technology;
