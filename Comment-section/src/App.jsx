import './App.css';
import ChatProvider from './context/ChatProvider';
import CommentSection from './components/CommentSection';

function App() {
	return (
		<ChatProvider>
			<main>
				<CommentSection />
			</main>
		</ChatProvider>
	);
}

export default App;
