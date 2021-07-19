import { createContext } from 'react';
import { useState } from 'react';

export const MarkdownContext = createContext();

export const MarkdownContextProvider = ({ children }) => {
	const [markdown, setMarkdown] = useState(`---
# Made with ❤ by Nav
### Find me on : 
####  > [Github](https://github.com/ArnavGuptaaa/) 
#### > [Linked In](https://www.linkedin.com/in/arnav-gupta-143534209/)
---
### Fork this [repo.](https://github.com/ArnavGuptaaa/markdown-editor) 
---
### Learn Markdown From [Markdown cheatsheet](https://github.com/tchapi/markdown-cheatsheet)
---`);

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
