import Button from './Button';
import { useState } from 'react';
import { MinusIcon, PlusIcon } from './icons';

export default function Vote(props: { score: number; user: boolean }) {
  const trials: number = 1;
  const [score, setScore] = useState(props.score);
  const [voteTries, setVoteTries] = useState(trials);

  const handleVote = (voteType: string) => {
    switch (voteType) {
      case 'upvoted':
        voteTries > 0
          ? setScore((prevScore: number) => prevScore++)
          : setScore((prevScore: number) => prevScore--);
        return setVoteTries(trials);
        break;

      case 'downvoted':
        voteTries > 0 && score !== 0
          ? setScore((prevScore: number) => prevScore--)
          : setScore((prevScore: number) => prevScore++);
        setVoteTries(trials);
        break;

      default:
        throw Error('Unknown action: ' + voteType);
    }
  };

  return (
    <div className='vote h-fit bg-LightGray dark:bg-Vote flex md:flex-col gap-2 items-center justify-center p-2 w-fit rounded-lg transition duration-300'>
      <Button
        onClick={() => handleVote('upvoted')}
        className={` ${
          props.user && 'pointer-events-none cursor-not-allowed'
        } w-5 h-5 justify-center flex items-center fill-[#C5C6EF] hover:fill-ModerateBlue dark:hover:fill-Blueish`}
      >
        <span className='sr-only'>upvote</span>
        <PlusIcon aria-hidden='true' />
      </Button>
      <span className='text-ModerateBlue dark:text-SoftBlue font-bold'>
        {score}
      </span>
      <Button
        onClick={() => handleVote('downvoted')}
        className='w-5 h-5 justify-center flex items-center fill-[#C5C6EF] hover:fill-ModerateBlue dark:hover:fill-Blueish'
      >
        <span className='sr-only'>downvote</span>
        <MinusIcon aria-hidden='true' />
      </Button>
    </div>
  );
}
