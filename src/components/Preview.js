import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { useContext } from 'react';
import { MarkdownContext } from '../context/MarkdownContext';

const Preview = () => {
	const { markdown } = useContext(MarkdownContext);
	return (
		<div className="markdown-preview-container">
			<ReactMarkdown remarkPlugins={[gfm]} children={markdown} skipHtml />
		</div>
	);
};

export default Preview;
