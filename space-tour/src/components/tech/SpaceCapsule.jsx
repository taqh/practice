import React from 'react';

function SpaceCapsule() {
	return (
		<>
			<article
				hidden
				className='technology-details flow'
				role='tabpanel'
				tabIndex='0'
			>
				<header className='flow flow--space-small'>
					<h2 className='fs-600 ff-serif uppercase'>The terminology...</h2>
					<p className='fs-700 uppercase ff-serif'>Space capsule</p>
				</header>
				<p>
					A space capsule is an often-crewed spacecraft that uses a
					blunt-body reentry capsule to reenter the Earth&apos;s atmosphere
					without wings. Our capsule is where you&apos;ll spend your time
					during the flight. It includes a space gym, cinema, and plenty of
					other activities to keep you entertained.
				</p>
			</article>

         <picture hidden className='capsule-image'>
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
