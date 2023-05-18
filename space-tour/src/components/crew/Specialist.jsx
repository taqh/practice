function Specialist() {
	return (
		<>
			<article
				hidden
				className='crew-details flow'
				id='mission-tab'
				role='tabpanel'
				tabIndex='0'
			>
				<header className='flow flow--space-small'>
					<h2 className='fs-600 ff-serif uppercase'>Mission Specialist</h2>
					<p className='fs-700 uppercase ff-serif'>Mark Shuttleworth</p>
				</header>
				<p>
					Mark Richard Shuttleworth is the founder and CEO of Canonical,
					the company behind the Linux-based Ubuntu operating system.
					Shuttleworth became the first South African to travel to space as
					a space tourist.
				</p>
			</article>

			<picture hidden id='mission-image'>
				<source srcSet={'src.webp'} type='image/webp' />
				<source srcSet={'src.png'} type='image/png' />
				<img src={'src.png'} alt='Mark Shuttleworth' />
			</picture>
		</>
	);
}

export default Specialist;
