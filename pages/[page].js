/*  client side */
import fetch from 'isomorphic-unfetch';
import DefaultLayout from '../components/layouts/DefaultLayout/DefaultLayout';
import ParagraphModule from '../components/modules/ParagraphModule/ParagraphModule';
import HeadlineModule from '../components/modules/HeadlineModule/HeadlineModule';
import MarkupModule from '../components/modules/MarkupModule/MarkupModule';
import ImageModule from '../components/modules/ImageModule/ImageModule';
/* Helper function to fetch data - do we need this as an extra function? Debatable. 😊 */
function fetchUrl(url) {
	return fetch(url).then(r => r.json());
}

/* This route gets hit first, appends a slug to the url 
and therefore the page request, e.g. your-site.com/about */
const SlugPage = ({ data }) => {
	const { content } = data;
	const codeString = JSON.stringify(content);

	const headlineModuleData = content.body.find(
		item => item.component === 'Headline'
	);
	const paragraphModuleData = content.body.filter(item =>
		item.component.includes('Paragraph Module')
	);

	const markupModuleData = content.body.filter(item =>
		item.component.includes('Markup')
	);
	const imageModuleData = content.body.find(item => item.component === 'Image');

	return (
		<DefaultLayout>
			{imageModuleData ? (
				<ImageModule
					image={imageModuleData.Image}
					text={imageModuleData.Text}
				/>
			) : null}

			{headlineModuleData ? (
				<HeadlineModule title={headlineModuleData.title} />
			) : null}

			{paragraphModuleData
				? paragraphModuleData.map((module, index) => {
						return <ParagraphModule key={index} text={module.Text} />;
				  })
				: null}

			{markupModuleData
				? markupModuleData.map((module, index) => {
						return (
							<MarkupModule
								key={index}
								text={module.Markup.content[0].content[0].text}
								href={module.Markup.content[0].content[1].text}
							/>
						);
				  })
				: null}
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
