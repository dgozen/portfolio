import fetch from 'isomorphic-unfetch';
import ParagraphModule from '../components/modules/ParagraphModule/ParagraphModule';

function fetchUrl(url) {
	return fetch(url).then(r => r.json());
}
const Projects = ({ data }) => {
	const { content } = data;
	const codeString = JSON.stringify(content);
	const paragraphModuleData = content.body.find(
		item => item.component === 'Paragraph Module'
	);
	console.log(paragraphModuleData);

	return <ParagraphModule text={paragraphModuleData.Text} />;
};

Projects.getInitialProps = async ({ query }) => {
	const { projects } = query;
	const data = await fetchUrl('http://localhost:3000/api/page/projects');
	return { data };
};

export default Projects;
