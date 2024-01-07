import Button from '../ui/Button';
import { useContext } from 'react';
import { createPortal } from 'react-dom';
import ChatContext from '../../context/ChatContext';

const Warning = () => {
  const modalContext = useContext(ChatContext);

  return (
    <dialog
      className='scale-0 m-auto bg-transparent backdrop:bg-black/50 grid place-content-center p-0'
      ref={modalContext.modalRef}
      onClose={modalContext.cancel} // remove the modal from the DOM when users press esc on their keyboard it sets deleting to false in the context
    >
      <div className='max-w-screen-xsm bg-white dark:bg-DarkGray p-5 shadow-md rounded-lg'>
        <h2 className='text-DarkBlue text-xl font-bold dark:text-Username'>
          Delete comment
        </h2>
        <p className='text-GrayBlue dark:text-PaleBlue my-5'>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className='flex gap-4 uppercase text-white text-sm'>
          <Button
            className='w-full bg-GrayBlue hover:bg-GrayBlue/50 px-3 py-3 rounded-md uppercase'
            onClick={modalContext.cancel}
          >
            no, cancel
          </Button>
          <Button
            className='w-full bg-SoftRed dark:hover:bg-DarkRed hover:bg-PaleRed px-3 py-3 rounded-md uppercase transition'
            onClick={modalContext.deleteComment}
          >
            yes, delete
          </Button>
        </div>
      </div>
    </dialog>
  );
};

function DeleteModal() {
  const portalContainer = document.getElementById('portal') as Element | null;
  if (!portalContainer) {
    return null;
  }
  return <>{createPortal(<Warning />, portalContainer)}</>;
}

export default DeleteModal;
