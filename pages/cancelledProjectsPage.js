import fetch from 'isomorphic-unfetch';
import HeadlineModule from '../components/modules/HeadlineModule/HeadlineModule';
import ParagraphModule from '../components/modules/ParagraphModule/ParagraphModule';
import ImageModule from '../components/modules/ImageModule/ImageModule';
import GalleryLayout from '../components/layouts/GalleryLayout/GalleryLayout';

function fetchUrl(url) {
	return fetch(url).then(r => r.json());
}
const Projects = ({ data }) => {
	const { content } = data;
	// const codeString = JSON.stringify(content);

	const headlineModuleData = content.body.find(
		item => item.component === 'Headline'
	);

	const projectsGalleryData = content.body.filter(modules =>
		modules.component.includes('Module')
	);

	const modulePrintHandler = projectsGalleryData => {
		return projectsGalleryData.map((module, index) => {
			return index % 2 == 0 ? (
				<ImageModule key={index} image={module.Image} text={module.Text} />
			) : (
				<ParagraphModule key={index} text={module.Text} />
			);
		});
	};

	return (
		<GalleryLayout>
			<HeadlineModule title={headlineModuleData.title} />
			{modulePrintHandler(projectsGalleryData)}
		</GalleryLayout>
	);
};

Projects.getInitialProps = async ({ query }) => {
	const { projects } = query;
	const data = await fetchUrl('http://localhost:3000/api/page/projects');
	return { data };
};

export default Projects;
