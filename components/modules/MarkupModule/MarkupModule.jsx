import style from './MarkupModule.scss';

const MarkupModule = ({ text, href }) => {
	return (
		<div className={style.root}>
			<p>
				{text}
				<a target='_blank' href={href}>
					{href}
				</a>
			</p>
		</div>
	);
};

export default MarkupModule;
