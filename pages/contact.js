import style from './index.scss';
import Head from '../components/common/Head/index';
import HeadlineModule from '../components/modules/HeadlineModule/HeadlineModule';
import DefaultLayout from '../components/layouts/DefaultLayout/DefaultLayout';

const contact = () => {
	const title = 'Duygu Gözen';
	const description = 'My Portfolio';
	return (
		<DefaultLayout>
			<Head title={title} description={description} />
			<HeadlineModule
				className={style.textShadow}
				title='{... Contact Me ...}'
			/>
			<p>nazduyguakyol@gmail.com</p>
			<a target='_blank' href='https://www.linkedin.com/in/duygu-g%C3%B6zen/'>
				LinkedIn
			</a>
			<a target='_blank' href='https://www.instagram.com/nduyguakyol/'>
				Instagram
			</a>
		</DefaultLayout>
	);
};

export default contact;
