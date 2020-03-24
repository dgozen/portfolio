import DefaultLayout from '../components/layouts/DefaultLayout';

const DefaultPage = () => {
	return (
		<DefaultLayout>
			<h1>DUYGU GÖZEN</h1>
			<h2>FRONEND DEVELOPMENT by</h2>
			<a href='/about'>About</a>
			<a href='/projects'>Projects</a>
			<a href='/contact'>Contact</a>
		</DefaultLayout>
	);
};

export default DefaultPage;
