import { useState } from 'react';
import { MinusIcon, PlusIcon } from './icons';
import Button from './Button';

export default function Vote(props) {
	const [score, setScore] = useState(props.score);
	const handleVote = () => {};

	return (
		<div className='vote h-fit bg-LightGray dark:bg-Vote flex md:flex-col gap-2 items-center justify-center p-2 w-fit rounded-lg transition duration-300'>
			<Button
				onClick={() => setScore((prevScore) => prevScore + 1)}
				className='w-5 h-5 justify-center flex items-center fill-[#C5C6EF] hover:fill-ModerateBlue dark:hover:fill-SoftBlue'
			>
				<PlusIcon />
			</Button>
			<span className='text-ModerateBlue font-bold'>{score}</span>
			<Button
				onClick={() => setScore((prevScore) => prevScore - 1)}
				className='w-5 h-5 justify-center flex items-center fill-[#C5C6EF] hover:fill-ModerateBlue dark:hover:fill-SoftBlue'
			>
				<MinusIcon />
			</Button>
		</div>
	);
}
