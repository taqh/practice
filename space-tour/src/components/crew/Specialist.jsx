function Specialist() {
	return (
		<>
			<article
				className='crew__details'
				id='mission-tab'
				role='tabpanel'
				tabIndex='0'
			>
				<header>
					<h2 className='crew__role'>Mission Specialist</h2>
					<p className='crew__name'>Mark Shuttleworth</p>
				</header>
				<p>
					Mark Richard Shuttleworth is the founder and CEO of Canonical,
					the company behind the Linux-based Ubuntu operating system.
					Shuttleworth became the first South African to travel to space as
					a space tourist.
				</p>
			</article>

			<picture className='crew__image'>
				<source srcSet={'src.webp'} type='image/webp' />
				<source srcSet={'src.png'} type='image/png' />
				<img src={'src.png'} alt='Mark Shuttleworth' />
			</picture>
		</>
	);
}

export default Specialist;
