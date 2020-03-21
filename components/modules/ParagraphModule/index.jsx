/* styles */
import style from './index.scss';

const ParagraphModule = ({ text }) => {
	return (
		<div className={style.root}>
			<p>{text}</p>
		</div>
	);
};

export default ParagraphModule;
