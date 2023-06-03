import { useContext, useState } from 'react';
import Button from './Button';
import ChatContext from '../../context/ChatContext';
import { DeleteIcon, EditIcon, ReplyIcon } from './icons';
export default function UserActions({
   currentUser,
   isReplying,
   setIsReplying,
   setIsediting,
}) {
   const addCtx = useContext(ChatContext);
   const replyTo = (id) => {
      setIsReplying((prevState) => !prevState);
   };

   return (
      <>
         {!currentUser ? (
            <Button
               className='reply flex gap-2 items-center justify-self-end text-ModerateBlue hover:text-LightBlue font-bold'
               onClick={replyTo}
            >
               <ReplyIcon />
               <span>Reply</span>
            </Button>
         ) : (
            <div className='del flex justify-self-end gap-2'>
               <Button
                  className='reply flex gap-2 items-center justify-self-end text-SoftRed hover:text-PaleRed font-bold'
                  onClick={addCtx.showModal}
               >
                  <DeleteIcon />
                  <span>Delete</span>
               </Button>
               <Button
                  className='reply flex gap-2 items-center justify-self-end text-ModerateBlue hover:text-LightBlue font-bold'
                  onClick={() => setIsediting((prev) => !prev)}
               >
                  <EditIcon />
                  <span>Edit</span>
               </Button>
            </div>
         )}
      </>
   );
}
