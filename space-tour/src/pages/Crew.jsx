import { useEffect, useState } from 'react';
import { crew } from '../data/data.json';

function Crew() {
	const [currentMember, setCurrentMember] = useState(crew[0]);

	const switchMember = (role) => {
		const nextMember = crew.findIndex(
			(member) => member.role.toLowerCase() === role
		);
		setCurrentMember(crew[nextMember]);
	};

	useEffect(() => {
		const currMemberIndex = crew.findIndex(
			(member) => member.name === currentMember.name
		);
		const timeout = setTimeout(() => {
			setCurrentMember((prev) => {
				const nextMemberIndex = (currMemberIndex + 1) % crew.length;
				return crew[nextMemberIndex];
			});
		}, 15000);

		return () => clearTimeout(timeout);
	}, [currentMember]);

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
					aria-selected={currentMember.role.toLowerCase() === 'commander'}
					aria-controls='commander-tab'
					className='crew-btn'
					onClick={() => switchMember('commander')}
				>
					<span className='sr-only'>The commander</span>
				</button>
				<button
					role='tab'
					aria-selected={
						currentMember.role.toLowerCase() === 'mission specialist'
					}
					aria-controls='mission_specialist-tab'
					className='crew-btn'
					onClick={() => switchMember('mission specialist')}
				>
					<span className='sr-only'>The mission specialist</span>
				</button>
				<button
					aria-selected={currentMember.role.toLowerCase() === 'pilot'}
					aria-controls='pilot-tab'
					role='tab'
					className='crew-btn'
					onClick={() => switchMember('pilot')}
				>
					<span className='sr-only'>The pilot</span>
				</button>
				<button
					role='tab'
					aria-selected={
						currentMember.role.toLowerCase() === 'flight engineer'
					}
					aria-controls='flight_engineer-tab'
					className='crew-btn'
					onClick={() => switchMember('flight engineer')}
				>
					<span className='sr-only'>The flight engineer</span>
				</button>
			</div>

			<article
				className='crew__details'
				id={`${currentMember.role.replace(' ', '_').toLowerCase()}-tab`}
				role='tabpanel'
			>
				<header>
					<h2 className='crew__role'>{currentMember.role}</h2>
					<p className='crew__name'>{currentMember.name}</p>
				</header>
				<p>{currentMember.bio}</p>
			</article>

			<picture className='crew__image'>
				<source srcSet={currentMember.images.webp} type='image/webp' />
				<source srcSet={currentMember.images.png} type='image/png' />
				<img src={currentMember.images.png} alt={`${currentMember.name}`} />
			</picture>
		</>
	);
}

export default Crew;
