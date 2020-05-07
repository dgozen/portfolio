import fetch from 'isomorphic-unfetch';
import style from './projects.scss';
import Head from '../components/common/Head/index';
import HeadlineModule from '../components/modules/HeadlineModule/HeadlineModule';
import ImageModule from '../components/modules/ImageModule/ImageModule';

function fetchUrl(url) {
	return fetch(url).then((r) => r.json());
}
const Projects = ({ data }) => {
	const { content } = data;

	const title = 'Duygu Gözen';
	const description = 'My Portfolio';
	const headlineModuleData = content.body.find(
		(item) => item.component === 'Headline'
	);
	const imageModuleData = content.body.filter((item) =>
		item.component.includes('Image')
	);

	return (
		<div className={style.header}>
			<Head title={title} description={description} />
			<HeadlineModule
				className={style.textShadow}
				title={headlineModuleData.title}
			/>
			<div className={style.projectsContainer}>
				<ImageModule
					image={imageModuleData[1].Image}
					text={imageModuleData[1].Text}
				/>
				<p>
					An accessible gym web app built on React.js for mobile display. UI was
					designed for motor function disabilities and dyslexia. Screen readers
					can easily navigate. You can find the complete accessibility
					documentation details on{' '}
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
					Here is the
					<a target='_blank' href='https://gymappremake.netlify.com'>
						{' '}
						live link{' '}
					</a>
					to the prototype.
				</p>
				<ImageModule
					image={imageModuleData[0].Image}
					text={imageModuleData[0].Text}
				/>
				<p>
					An innovative timeline feature created for Global Resilience
					Partnership's new website. You can see the live desktop version{' '}
					<a target='_blank' href='https://grp-timeline.now.sh/'>
						here
					</a>{' '}
					and the code base on
					<a target='_blank' href='https://github.com/dgozen/GRPtimeline'>
						{' '}
						GitHub.{' '}
					</a>
					This project was built by using React.js.
				</p>
				<ImageModule
					image={imageModuleData[2].Image}
					text={imageModuleData[2].Text}
				/>
				<p>
					A small jump scare game built on JavaScript. You can play it live on
					your desktop{' '}
					<a target='_blank' href='https://mazewoman.netlify.com/'>
						{' '}
						here
					</a>{' '}
					or take a look at the code in
					<a target='_blank' href='https://github.com/dgozen/mazeWoman'>
						{' '}
						GitHub
					</a>
					.
				</p>
				<ImageModule
					image={imageModuleData[4].Image}
					text={imageModuleData[4].Text}
				/>
				<p>
					A design system created for WWT's (We Were There) landing page to help
					deliever their message and increase conversion rate.
				</p>
				<ImageModule
					image={imageModuleData[3].Image}
					text={imageModuleData[3].Text}
				/>
				<p>
					This website's technology uses a headless CMS system from Storyblok
					and Next.js.
				</p>
			</div>
		</div>
	);
};

Projects.getInitialProps = async ({ query }) => {
	const { projects } = query;
	const data = await fetchUrl('https://duygu-gozen.now.sh/api/page/projects');
	return { data };
};

export default Projects;
