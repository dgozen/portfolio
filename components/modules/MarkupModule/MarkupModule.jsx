import style from './MarkupModule.scss';

const MarkupModule = ({ text, href }) => {
	return (
		<p>
			{text}{' '}
			<a target='_blank' href={href}>
				{href}
			</a>
		</p>
	);
};

export default MarkupModule;
