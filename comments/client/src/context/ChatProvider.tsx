import { useRef, useState, useEffect, ReactNode } from 'react';
import ChatContext from './ChatContext';
import dayjs from '../dayjsConfig';
import { Comment as CommentType, ContextValues } from '../types';

const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const storedName = localStorage.getItem('USERNAME');
  const initialUsername = storedName ? JSON.parse(storedName) : '';

  const initialState: CommentType[] = [];
  const [chatData, setChatData] = useState<CommentType[]>(initialState);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState<string | null>();
  const [username, setUsername] = useState<string>(initialUsername);

  const serverUrl = 'https://comment-section-pk6h.onrender.com/'
  // const serverUrl = 'http://localhost:5000/comments/';
  const modalRef = useRef<HTMLDialogElement>(null);
  const authRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const getComments = async () => {
      setLoading(true);
      try {
        const res = await fetch(serverUrl);
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
    }, 1000); // timeout to always create a brief loading state after requests

    getComments();
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const formatTime = (time: string) => {
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
    username ? setAuthenticated(true) : authRef.current?.showModal();
  }, [username]);

  const setUser = (username: string) => {
    localStorage.setItem('USERNAME', JSON.stringify(username));
    setAuthenticated(true);
    setUsername(username);
    authRef.current?.close();
  };

  const addComment = async (text: string) => {
    if (text.trim().length !== 0) {
      try {
        const response = await fetch(serverUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Corrected headers object
          },
          body: JSON.stringify({
            id: crypto.randomUUID(),
            text: text,
            username: username,
          }),
        });

        if (!response.ok) {
          console.error(
            'Failed to post reply:',
            response.status,
            response.statusText
          );
        } else {
          console.log('Reply posted successfully');
        }
      } catch (error) {
        console.error('Error posting reply:', error);
      }
    } else return;
  };

  const addReply = async (text: string, id: string, replyingTo: string) => {
    if (text.trim().length !== 0) {
      try {
        const response = await fetch(`${serverUrl}${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: id,
            text: text,
            replyingTo: replyingTo,
            username: username,
          }),
        });

        if (!response.ok) {
          console.error(
            'Failed to post reply:',
            response.status,
            response.statusText
          );
        } else {
          console.log('Reply posted successfully');
        }
      } catch (error) {
        console.error('Error posting reply:', error);
      }
    }
  };

  const updateComment = async (text: string, id: string) => {
    try {
      const response = await fetch(`${serverUrl}${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          text: text,
        }),
      });
      if (!response.ok) {
        console.error(
          'Failed to put comment:',
          response.status,
          response.statusText
        );
      } else {
        console.log('Comment updated successfully');
      }
    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };

  const showModal = (id: string) => {
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
    modalRef.current?.close();
    setDeleting(false);
  };

  const deleteComment = async () => {
    console.log(commentToDelete);
    try {
      const response = await fetch(`${serverUrl}${commentToDelete}`, {
        method: 'DELETE',
        // params: JSON.stringify(commentToDelete)
      });
      if (!response.ok) {
        console.log(
          'Failed to delete comment:',
          response.status,
          response.statusText
        );
      } else {
        console.log('deleted successfully');
      }
    } catch (error) {
      console.error('failed to delete ' + error);
    }

    modalRef.current?.close();
    setCommentToDelete(null);
    setDeleting(false);
  };

  const contextValues: ContextValues = {
    posts: chatData,
    setUser: setUser,
    loading: loading,
    authRef: authRef,
    modalRef: modalRef,
    addReply: addReply,
    deleting: deleting,
    username: username,
    showModal: showModal,
    cancel: cancelDelete,
    formatTime: formatTime,
    addComment: addComment,
    authenticated: authenticated,
    deleteComment: deleteComment,
    updateComment: updateComment,
  };

  return (
    <ChatContext.Provider value={contextValues}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
