import { useReducer, useRef, useState, useEffect } from 'react';
import ChatContext from './ChatContext';
import chatReducer from './chatReducer';
import dayjs from '../dayjsConfig';
import { Comment as CommentType } from '../types';

function ChatProvider({ children }) {
  const initialState: CommentType[] = [];
  const [chatData, setChatData] = useState<CommentType[]>(initialState);
  const [chatState, dispatch] = useReducer(chatReducer, chatData);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [loading, setLoading] = useState(false);

  const modalRef = useRef();

  useEffect(() => {
    const getComments = async () => {
      setLoading(true);
      try {
        const res = await fetch('http://localhost:5000/comments');
        const data = await res.json();
        setChatData(data.comments);
        console.log(data.comments);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    getComments();
    return () => {clearTimeout(timeout)};
  }, []);

  const formatTime = (time: string | number) => {
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

  const addComment = (comment: string) => {
    if (comment.trim().length !== 0) {
      dispatch({ type: 'ADDED', payload: comment });
    } else return;
  };

  const addReply = (reply: string, id: string, replyingTo: string) => {
    if (reply.trim().length !== 0) {
      dispatch({ type: 'REPLIED', payload: { reply, id, replyingTo } });
    } else return;
  };

  const updateComment = (text: string, id: string) => {
    if (text.trim().length !== 0) {
      dispatch({ type: 'UPDATED', payload: { text, id } });
    }
  };

  const showModal = (id) => {
    setDeleting(true);
    setCommentToDelete(id);
  };

  // ensure showModal() is only called when the modal component is available in the DOM
  useEffect(() => {
    if (deleting && modalRef.current && !modalRef.current.open) {
      modalRef.current.showModal();
    }
  }, [deleting]);

  const cancelDelete = () => {
    modalRef.current.close();
    setDeleting(false);
  };

  const deleteComment = () => {
    dispatch({ type: 'DELETED', payload: commentToDelete });
    modalRef.current.close();
    setCommentToDelete(null);
    setDeleting(false);
  };

  const chatContext = {
    loading: loading,
    posts: chatData,
    addReply: addReply,
    modalRef: modalRef,
    showModal: showModal,
    cancel: cancelDelete,
    delete: deleteComment,
    formatTime: formatTime,
    addComment: addComment,
    updateComment: updateComment,
    deleting: deleting,
  };

  return (
    <ChatContext.Provider value={chatContext}>{children}</ChatContext.Provider>
  );
}

export default ChatProvider;
