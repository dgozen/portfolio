import fetch from 'isomorphic-unfetch';
import ParagraphModule from '../components/modules/ParagraphModule/ParagraphModule';

function fetchUrl(url) {
	return fetch(url).then(r => r.json());
}
const About = ({ data }) => {
	const { content } = data;
	const codeString = JSON.stringify(content);
	const paragraphModuleData = content.body.find(
		item => item.component === 'Paragraph Module'
	);
	console.log(paragraphModuleData);

	return <ParagraphModule text={paragraphModuleData.Text} />;
};

About.getInitialProps = async ({ query }) => {
	const { about } = query;
	const data = await fetchUrl('http://localhost:3000/api/page/about');
	return { data };
};

export default About;
