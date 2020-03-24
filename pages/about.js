import fetch from 'isomorphic-unfetch';
import ParagraphModule from '../components/modules/ParagraphModule';

function fetchUrl(url) {
	return fetch(url).then(r => r.json());
}
const About = () => {
	const { content } = data;
	const codeString = JSON.stringify(content);
	console.log(codeString);
	return <p>test</p>;
};

About.getInitialProps = async ({ query }) => {
	const { about } = query;
	const data = await fetchUrl('http://localhost:3000/api/page/about');
	return { data };
};

export default About;
