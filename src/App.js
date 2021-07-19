import Topbar from './components/Topbar';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { BrowserRouter as Router } from 'react-router-dom';
import { MarkdownContextProvider } from './context/MarkdownContext';

function App() {
	return (
		<Router>
			<MarkdownContextProvider>
				<div className="App">
					<Topbar />
					<div className="main">
						<Editor />
						<Preview />
					</div>
				</div>
			</MarkdownContextProvider>
		</Router>
	);
}

export default App;
