import fetch from 'isomorphic-unfetch';
import style from './projects.scss';
import Head from '../components/common/Head/index';
import HeadlineModule from '../components/modules/HeadlineModule/HeadlineModule';
import Calendar from '../pictures/calendar.png';
import Design from '../pictures/design.png';
import Grp from '../pictures/grp.png';
import Portfolio from '../pictures/portfolio.png';
import Quotey from '../pictures/quotey.png';

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
	return (
		<div className={style.header}>
			<Head title={title} description={description} />
			<HeadlineModule
				className={style.textShadow}
				title={headlineModuleData.title}
			/>
			<div className={style.projectsContainer}>
				<img
					src={Grp}
					alt='Global Resilience
				Partnership timeline'
				/>
				<p>
					An innovative timeline feature created for Global Resilience
					Partnership's new website. You can see the live desktop version{' '}
					<a target='_blank' href='https://grp-timeline.now.sh/'>
						{' '}
						here{' '}
					</a>{' '}
					and the code base on
					<a target='_blank' href='https://github.com/dgozen/GRPtimeline'>
						{' '}
						GitHub.{' '}
					</a>
					This project was built by using React.js.
				</p>
				<img id='calendar' src={Calendar} alt='Mobile Gym App' />
				<p>
					An accessible gym web app built on React.js for mobile display. UI was
					designed for motor function disabilities and dyslexia. Screen readers
					can easily navigate. You can find the complete accessibility
					documentation details on{' '}
					<a
						target='_blank'
						href='https://www.figma.com/file/tc4FJrHbhwDBtX8Y1SwWV7/Friskis-and-Svettis?node-id=0%3A1'
					>
						Figma{' '}
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

				<img src={Quotey} alt='JavaScript Game' />
				<p>
					A small JavaScript Vanilla game that makes it possible to chat as
					specific character's voices using websockets for multiple players. You
					can play the game live{' '}
					<a target='_blank' href='https://dgozen-quotey.glitch.me/'>
						{' '}
						here{' '}
					</a>{' '}
					or take a look at the code in
					<a target='_blank' href='https://github.com/dgozen/quotey'>
						{' '}
						GitHub
					</a>
				</p>
				<img src={Design} alt='WWT Design System' />
				<p>
					A design system created for WWT's (We Were There) landing page to help
					deliever their message and increase conversion rate.
				</p>
				<img src={Portfolio} alt='portfolio' />
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
