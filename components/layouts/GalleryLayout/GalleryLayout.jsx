import style from './GalleryLayout.scss';
import Head from '../../common/Head';

const GalleryLayout = props => {
	const title = 'Duygu Gözen';
	const description = 'My Portfolio';

	return (
		<div className={style.galleryContainer}>
			<Head title={title} description={description} />
			{props.children}
		</div>
	);
};

export default GalleryLayout;
