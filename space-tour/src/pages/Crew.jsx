import crew from '../assets/crew/image-douglas-hurley.png'
import crew_alt from '../assets/crew/image-douglas-hurley.webp'

function Crew() {
	return (
		<>
			<h1 className='numbered-title crew__heading'>
				<span aria-hidden='true'>02 </span> Meet your crew
			</h1>

			<div
				className='crew__tab'
				role='tablist'
				aria-label='crew member list'
			>
				<button
					role='tab'
					aria-selected='true'
					aria-controls='commander-tab'
					className='dot'
				>
					<span className='sr-only'>The commander</span>
				</button>
				<button
					role='tab'
					aria-selected='false'
					aria-controls='mission-tab'
					className='dot'
				>
					<span className='sr-only'>The mission specialist</span>
				</button>
				<button
					aria-selected='false'
					aria-controls='pilot-tab'
					role='tab'
					className='dot'
				>
					<span className='sr-only'>The pilot</span>
				</button>
				<button
					role='tab'
					aria-selected='false'
					aria-controls='crew-tab'
					className='dot'
				>
					<span className='sr-only'>The crew engineer</span>
				</button>
			</div>

			<article
				className='crew__details'
				id='commander-tab'
				role='tabpanel'
			>
				<header>
					<h2 className='crew__role'>Commander</h2>
					<p className='crew__name'>Douglas Hurley</p>
				</header>
				<p>
					Douglas Gerald Hurley is an American engineer, former Marine
					Corps pilot and former NASA astronaut. He launched into space for
					the third time as commander of Crew Dragon Demo-2.
				</p>
			</article>

			<picture className='crew__image'>
				<source srcSet={crew_alt} type='image/webp' />
				<source srcSet={crew} type='image/png' />
				<img src={crew} alt='Douglas Hurley' />
			</picture>
		</>
	);
}

export default Crew;
