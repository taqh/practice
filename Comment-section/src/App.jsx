import './App.css';
import CommentSection from './components/CommentSection';
import ChatProvider from './context/ChatProvider';

function App() {
	return (
		<ChatProvider>
			<CommentSection />
		</ChatProvider>
	);
}

export default App;
