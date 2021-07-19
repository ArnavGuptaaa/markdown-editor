import GitHubIcon from '@material-ui/icons/GitHub';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';

const Topbar = () => {
	return (
		<div className="topbar-container">
			<h1>Markdown Editor</h1>

			<ul className="buttons">
				<li>
					<a
						href="https://github.com/ArnavGuptaaa/markdown-editor"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GitHubIcon />
						<p className="btn-text">Github Repo</p>
					</a>
				</li>
				<li>
					<a
						href="https://github.com/tchapi/markdown-cheatsheet"
						target="_blank"
						rel="noopener noreferrer"
					>
						<MenuBookRoundedIcon />
						<p className="btn-text">Learn Markdown</p>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Topbar;
