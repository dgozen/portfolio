import style from './DefaultLayout.scss';
import resets from './styleReset.scss';
import Head from '../../common/Head';

const DefaultLayout = props => {
	const title = 'Duygu Gözen';
	const description = 'My Portfolio';

	return (
		<div className={(resets, style.root)}>
			<Head title={title} description={description} />
			{props.children}
		</div>
	);
};

export default DefaultLayout;
