import { useReducer, useRef, useState, useEffect } from 'react';
import ChatContext from './ChatContext';
import chatReducer from './chatReducer';
import data from '../data/data.json';
import dayjs from '../dayjsConfig';

function ChatProvider({ children }) {
   const chatData =
      JSON.parse(localStorage.getItem('COMMENTS')) || data.comments;
   const [chatState, dispatch] = useReducer(chatReducer, chatData);
   const [commentToDelete, setCommentToDelete] = useState(null);
   const modalRef = useRef();

   //  ideally the .close() method is supposed to remove the open attribute on a dialog
   //  but for some reason im getting an error hence why i had to test some solutions
   // here's a solution i found on github https://github.com/facebook/react/issues/24399
   // I ended up using somethinf different however

   const formatTime = (time) => {
      // because the json timestamps are strings calling the dayjs methods would display NaN
      // so i first need to check if its from the data.json file || local storage
      // check if time is a string (from local storage or JSON)
      if (typeof time === 'string') {
         // check if the string can be parsed as a date
         const parsedTime = Date.parse(time);
         if (!isNaN(parsedTime)) {
            // if so, convert to dayjs object
            return dayjs(parsedTime).fromNow();
         }
         // otherwise, return the original string
         return time;
      }
      // if time is already a Date or dayjs object, format it using fromNow
      return dayjs(time).fromNow();
   };

   useEffect(() => {
      localStorage.setItem('COMMENTS', JSON.stringify(chatState));
   }, [chatState]);

   const addComment = (comment) => {
      if (comment.trim().length !== 0) {
         dispatch({ type: 'ADDED', payload: comment });
      } else return;
   };

   const addReply = (reply, id, replyingTo) => {
      if (reply.trim().length !== 0) {
         dispatch({ type: 'REPLIED', payload: { reply, id, replyingTo } });
      } else return;
   };

   const updateComment = (text, id) => {
      if (text.trim().length !== 0) {
         dispatch({ type: 'UPDATED', payload: { text, id } });
      }
   };

   const showModal = (id) => {
      if (!modalRef.current.open) {
         modalRef.current.showModal();
      }
      setCommentToDelete(id);
   };

   const cancelDelete = () => {
      modalRef.current.close();
   };

   const deleteComment = () => {
      dispatch({ type: 'DELETED', payload: commentToDelete });
      modalRef.current.close();
      setCommentToDelete(null);
   };

   const chatContext = {
      posts: chatState,
      addReply: addReply,
      modalRef: modalRef,
      showModal: showModal,
      cancel: cancelDelete,
      delete: deleteComment,
      formatTime: formatTime,
      addComment: addComment,
      updateComment: updateComment,
   };

   return (
      <ChatContext.Provider value={chatContext}>
         {children}
      </ChatContext.Provider>
   );
}

export default ChatProvider;
