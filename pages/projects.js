import fetch from 'isomorphic-unfetch';
import HeadlineModule from '../components/modules/HeadlineModule/HeadlineModule';
import ParagraphModule from '../components/modules/ParagraphModule/ParagraphModule';
import ImageModule from '../components/modules/ImageModule/ImageModule';

function fetchUrl(url) {
	return fetch(url).then(r => r.json());
}
const Projects = ({ data }) => {
	const { content } = data;
	// const codeString = JSON.stringify(content);

	const headlineModuleData = content.body.find(
		item => item.component === 'Headline Module'
	);
	const paragraphModuleData = content.body.filter(item =>
		item.component.includes('Paragraph Module')
	);

	const imageModuleData = content.body.filter(image =>
		image.component.includes('Image')
	);
	console.log(imageModuleData);
	return (
		<div>
			{headlineModuleData ? (
				<HeadlineModule title={headlineModuleData.title} />
			) : null}

			{paragraphModuleData
				? paragraphModuleData.map((module, index) => {
						return <ParagraphModule key={index} text={module.Text} />;
				  })
				: null}

			{imageModuleData
				? imageModuleData.map((image, index) => {
						return (
							<ImageModule key={index} image={image.Image} text={image.Text} />
						);
				  })
				: null}
		</div>
	);
};

Projects.getInitialProps = async ({ query }) => {
	const { projects } = query;
	const data = await fetchUrl('http://localhost:3000/api/page/projects');
	return { data };
};

export default Projects;
