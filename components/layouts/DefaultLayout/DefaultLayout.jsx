import style from './DefaultLayout.scss';
import resets from './styleReset.scss';
import Head from '../../common/Head';

const DefaultLayout = props => {
	const title = 'Duygu Gözen';
	const description = 'My Portfolio';

	return (
		<div className={(resets, style.root)}>
			{/* <div className={style.pageWrapper}> */}
			<Head title={title} description={description} />
			{props.children}
			{/* </div> */}
		</div>
	);
};

export default DefaultLayout;
