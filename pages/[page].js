/* 🌈 This is the client side 🌈*/
/* dependencies */
import fetch from 'isomorphic-unfetch';
import DefaultLayout from '../components/layouts/DefaultLayout/DefaultLayout';
import ParagraphModule from '../components/modules/ParagraphModule/ParagraphModule';
import HeadlineModule from '../components/modules/HeadlineModule/HeadlineModule';
/* Helper function to fetch data - do we need this as an extra function? Debatable. 😊 */
function fetchUrl(url) {
	return fetch(url).then(r => r.json());
}

/* This route gets hit first, appends a slug to the url 
and therefore the page request, e.g. your-site.com/about */
const SlugPage = ({ data }) => {
	const { content } = data;
	const codeString = JSON.stringify(content);
	// console.log(codeString);

	const headlineModuleData = content.body.find(
		item => item.component === 'Headline Module'
	);
	const paragraphModuleData = content.body.filter(item =>
		item.component.includes('Paragraph Module')
	);
	return (
		<DefaultLayout>
			{headlineModuleData ? (
				<HeadlineModule title={headlineModuleData.title} />
			) : null}
			{paragraphModuleData ? (
				<ParagraphModule text={paragraphModuleData[0].Text} />
			) : null}
			{paragraphModuleData[1] ? (
				<ParagraphModule text={paragraphModuleData[1].Text} />
			) : null}
			{paragraphModuleData[2] ? (
				<ParagraphModule text={paragraphModuleData[2].Text} />
			) : null}
		</DefaultLayout>
	);
};

/* calling internal API endpoint (server).
This call is hitting the code written in 'pages/api/page/[slug].js' */
SlugPage.getInitialProps = async ({ query }) => {
	/* {query} is an object received within this method from Next,
	 so that we can retrieve the slug (e.g. '/welcome') coming with the route */
	const { page } = query;
	/* Calling internal api endpoint to fetch Storyblok content server-side 
	(client-side here) */
	const data = await fetchUrl(`http://localhost:3000/api/page/${page}`);
	/* Returning the data back into SlugPage as props */
	return { data }; /* This is the same as { data: data } */
};

export default SlugPage;
