import { useState } from 'react';

import Plus from '../../assets/icon-plus.svg';
import Minus from '../../assets/icon-minus.svg';
import Reply from '../../assets/icon-reply.svg';
import pfp from '../../assets/avatars/image-amyrobson.png';
import Button from '../ui/Button';

function Comment(props) {
	const [count, setCount] = useState(12);

	return (
		<div className='comment grid gap-3 bg-white p-4 rounded-lg'>
			<div className='user flex items-center gap-2'>
				{' '}
				<img src={pfp} alt='user-image' className='w-8 h-8' />
				<p className='text-DarkBlue font-bold'>amyrobson</p>
				<span>1 month ago</span>
			</div>
			<p className='text '>
				Impressive! Though it seems the drag feature could be improved. But
				overall it looks incredible. You've nailed the design and the
				responsiveness at various breakpoints works really well.
			</p>
			<div className='vote bg-LightGray flex md:flex-col gap-2 items-center justify-center p-1 w-fit rounded-md'>
				<Button onClick={() => setCount((prevCount) => prevCount + 1)}>
					<img src={Plus} alt='upvote' />
				</Button>
				<span className='text-ModerateBlue font-bold'>{count}</span>
				<Button onClick={() => setCount((prevCount) => prevCount - 1)}>
					<img src={Minus} alt='downvote' />
				</Button>
			</div>

			<Button className='reply flex gap-2 items-center justify-self-end text-ModerateBlue font-bold'>
				<img src={Reply} alt='reply' />
				<span>Reply</span>
			</Button>
		</div>
	);
}

export default Comment;
