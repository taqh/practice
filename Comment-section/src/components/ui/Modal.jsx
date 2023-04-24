import { useContext } from 'react';
import Button from './Button';
import { createPortal } from 'react-dom';
import ChatContext from '../../context/ChatContext';

const Warning = ({ onClick }) => {
	const modalCtx = useContext(ChatContext);

	return (
		<dialog
			className='m-auto bg-transparent backdrop:bg-black/50 grid place-content-center p-0'
			onClick={onClick}
			ref={modalCtx.modalRef}
		>
			<div className='max-w-screen-xsm bg-white p-5 shadow-md rounded-lg'>
				<h2 className='text-DarkBlue text-xl font-bold'>Delete comment</h2>
				<p className='text-GrayBlue my-5'>
					Are you sure you want to delete this comment? This will remove
					the comment and can't be undone.
				</p>
				<div className='flex gap-4 uppercase text-white text-sm'>
					<Button
						className='w-full bg-GrayBlue hover:bg-GrayBlue/50 px-3 py-3 rounded-md uppercase'
						onClick={modalCtx.remove}
					>
						no, cancel
					</Button>
					<Button
						className='w-full bg-SoftRed hover:bg-PaleRed px-3 py-3 rounded-md uppercase transition'
						onClick={modalCtx.remove}
					>
						yes, delete
					</Button>
				</div>
			</div>
		</dialog>
	);
};

function Modal() {
	return <>{createPortal(<Warning />, document.getElementById('overlay'))}</>;
}

export default Modal;
