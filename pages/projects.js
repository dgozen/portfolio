import fetch from 'isomorphic-unfetch';
import style from './projects.scss';
import Head from '../components/common/Head/index';
import HeadlineModule from '../components/modules/HeadlineModule/HeadlineModule';
import ImageModule from '../components/modules/ImageModule/ImageModule';

function fetchUrl(url) {
	return fetch(url).then(r => r.json());
}
const Projects = ({ data }) => {
	const { content } = data;

	const title = 'Duygu Gözen';
	const description = 'My Portfolio';
	const headlineModuleData = content.body.find(
		item => item.component === 'Headline'
	);
	const imageModuleData = content.body.filter(item =>
		item.component.includes('Image')
	);

	return (
		<div className={style.header}>
			<Head title={title} description={description} />
			<HeadlineModule title={headlineModuleData.title} />
			<div className={style.projectsContainer}>
				<ImageModule
					image={imageModuleData[0].Image}
					text={imageModuleData[0].Text}
				/>
				<p>
					An accessible gym web app built on React.js. UI was designed for motor
					function disabilities and dyslexia. Screen readers can easily
					navigate. You can find the full design details on{' '}
					<a
						target='_blank'
						href='https://www.figma.com/file/tc4FJrHbhwDBtX8Y1SwWV7/Friskis-and-Svettis?node-id=0%3A1'
					>
						Figma
					</a>{' '}
					and the code base on
					<a target='_blank' href='https://github.com/dgozen/FriskisSvettisApp'>
						{' '}
						GitHub.{' '}
					</a>
					Here is the live link to the{' '}
					<a target='_blank' href='https://gymappremake.netlify.com'>
						{' '}
						mobile{' '}
					</a>
					prototype.
				</p>
				<ImageModule
					image={imageModuleData[1].Image}
					text={imageModuleData[1].Text}
				/>
				<p>
					A small jump scare game built on JavaScript. You can play it live{' '}
					<a target='_blank' href='https://mazewoman.netlify.com/'>
						{' '}
						here
					</a>{' '}
					or take a look at the code in{' '}
					<a target='_blank' href='https://mazewoman.netlify.com/'>
						{' '}
						GitHub
					</a>
					.
				</p>
			</div>
		</div>
	);
};

Projects.getInitialProps = async ({ query }) => {
	const { projects } = query;
	const data = await fetchUrl('http://localhost:3000/api/page/projects');
	return { data };
};

export default Projects;
