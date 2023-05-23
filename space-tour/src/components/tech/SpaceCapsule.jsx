import React from 'react';

function SpaceCapsule() {
	return (
		<>
			<article className='technology__details' role='tabpanel' tabIndex='0'>
				<div>
					<h2 className='terminology'>The terminology...</h2>
					<p className='tech-name'>Space capsule</p>
				</div>
				<p>
					A space capsule is an often-crewed spacecraft that uses a
					blunt-body reentry capsule to reenter the Earth&apos;s atmosphere
					without wings. Our capsule is where you&apos;ll spend your time
					during the flight. It includes a space gym, cinema, and plenty of
					other activities to keep you entertained.
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
				<img src={'portrait'} alt='space capsule' />
			</picture>
		</>
	);
}

export default SpaceCapsule;
