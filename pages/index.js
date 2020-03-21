import DefaultLayout from '../components/layouts/DefaultLayout';

/* This route gets hit by default, e.g. your-site.com */
const DefaultPage = () => {
	return (
		<DefaultLayout>
			<h1>DUYGU GÖZEN</h1>
			<a href='/about'>About</a>
			<a href='/projects'>Projects</a>
			<a href='/contact'>Contact</a>
		</DefaultLayout>
	);
};

export default DefaultPage;
