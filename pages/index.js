import style from './index.scss';
import DefaultLayout from '../components/layouts/DefaultLayout';

const DefaultPage = () => {
	return (
		<DefaultLayout>
			<div className={style.gridContainer}>
				<div className={style.styleRight}>
					<h2>FRONTEND DEVELOPMENT by</h2>
					<hr />
				</div>

				<h1 className={style.styleCenter}>DUYGU GÖZEN</h1>
				<ul className={style.styleLeft}>
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
		</DefaultLayout>
	);
};

export default DefaultPage;
