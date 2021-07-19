import GitHubIcon from '@material-ui/icons/GitHub';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';

const Topbar = () => {
	return (
		<div className="topbar-container">
			<h1>Markdown Editor</h1>

			<ul className="buttons">
				<li>
					<GitHubIcon />
					<p className="btn-text">Github Repo</p>
				</li>
				<li>
					<MenuBookRoundedIcon />
					<p className="btn-text">Learn Markdown</p>
				</li>
			</ul>
		</div>
	);
};

export default Topbar;
