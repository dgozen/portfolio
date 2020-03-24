import fetch from 'isomorphic-unfetch';
import ParagraphModule from '../components/modules/ParagraphModule';

const About = () => {
	const { content } = data;
	const codeString = JSON.stringify(content);
	console.log(codeString);
	return <p>test</p>;
};

About.getInitialProps = async ({ query }) => {
	const { page } = query;
	const data = await fetchUrl(`http://localhost:3000/api/page/${page}`);
	return { data };
};

export default About;
