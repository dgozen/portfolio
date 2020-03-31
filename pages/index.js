import style from './index.scss';
import Head from '../components/common/Head/index';

const DefaultPage = () => {
	const title = 'Duygu Gözen';
	const description = 'My Portfolio';
	return (
		<div className={style.container}>
			<Head title={title} description={description} />
			<div className={style.styleLabel}>
				<h2>FRONTEND DEVELOPMENT by</h2>
				<hr className={style.hidden} />
			</div>
			<h1 className={style.styleName}>DUYGU GÖZEN</h1>
			<ul className={style.stylePages}>
				<li>
					<a href='/about'>About</a>
					<hr />
				</li>
				<li>
					<a href='/projects'>Projects</a>
					<hr />
				</li>
				<li>
					<a href='/contact'>Contact</a>
					<hr />
				</li>
			</ul>
		</div>
	);
};

export default DefaultPage;
