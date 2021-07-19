import Topbar from './components/Topbar';
import Editor from './components/Editor';
import Preview from './components/Preview';

import { MarkdownContextProvider } from './context/MarkdownContext';

function App() {
	return (
		<MarkdownContextProvider>
			<div className="App">
				<Topbar />
				<div className="main">
					<Editor />
					<Preview />
				</div>
			</div>
		</MarkdownContextProvider>
	);
}

export default App;
