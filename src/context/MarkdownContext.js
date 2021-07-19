import { createContext } from 'react';
import { useState } from 'react';

export const MarkdownContext = createContext();

export const MarkdownContextProvider = ({ children }) => {
	const [markdown, setMarkdown] = useState(``);

	const value = {
		markdown,
		setMarkdown,
	};

	return (
		<MarkdownContext.Provider value={value}>
			{children}
		</MarkdownContext.Provider>
	);
};
