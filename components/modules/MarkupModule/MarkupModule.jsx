import style from './MarkupModule.scss';

const MarkupModule = ({ text, href }) => {
	return (
		<p className={style.root}>
			{text}{' '}
			<a target='_blank' href='https://{href}'>
				{href}
			</a>
		</p>
	);
};

export default MarkupModule;
