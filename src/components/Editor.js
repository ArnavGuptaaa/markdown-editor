import { useContext } from 'react';
import { MarkdownContext } from '../context/MarkdownContext';

const Editor = () => {
	const { setMarkdown } = useContext(MarkdownContext);
	return (
		<div className="markdown-editor-container">
			<textarea
				id="md-input"
				placeholder="Start writing your markdown..."
				onChange={(e) => setMarkdown(e.target.value)}
			></textarea>
		</div>
	);
};

export default Editor;
