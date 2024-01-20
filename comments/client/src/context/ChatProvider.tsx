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

  const serverUrl = 'https://comment-section-pk6h.onrender.com/comments/';
  // const serverUrl = 'http://localhost:5000/comments/';
  const modalRef = useRef<HTMLDialogElement>(null);
  const authRef = useRef<HTMLDialogElement>(null);

  const getComments = async () => {
    setLoading(true);
    try {
      const response = await fetch(serverUrl);
      const data = await response.json();
      if (response.ok) {
        setChatData(data.comments);
        console.log(data.comments);
      }
    } catch (error) {
      console.log(error);
    } finally {
      // sets loading to false wether fetch is successful or not
      setLoading(false);
    }
  };

  useEffect(() => {
    getComments();
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
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: text,
            score: 0,
            createdAt: new Date().toISOString(),
            user: {
              avatar: 'https://i.pravatar.cc/100?u=1',
              username: username,
            },
            replies: [],
          }),
        });

        if (response.ok) {
          console.log(response.status, response.statusText);
          setTimeout(() => {
            getComments();
          }, 1000);
        }
      } catch (error) {
        console.error('Error:', error);
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
            createdAt: new Date().toISOString(),
            replyingTo: replyingTo,
            score: 0,
            user: {
              avatar: 'https://i.pravatar.cc/100?u=1',
              username: username,
            },
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
          setTimeout(() => {
            getComments();
          }, 1000);
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
        setTimeout(() => {
          getComments();
        }, 1000);
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
      });
      if (!response.ok) {
        console.log(
          'Failed to delete comment:',
          response.status,
          response.statusText
        );
      } else {
        console.log(response.status, response.statusText);
        setTimeout(() => {
          getComments();
        }, 1000);
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
