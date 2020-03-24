/* The server side, where all the fun happens! */
/* dependencies */
const StoryblokClient = require('storyblok-js-client');

/* Initiating Storyblok client, to be able to 
connect to Storyblok account and space. */
const Storyblok = new StoryblokClient({
	accessToken: 'mp1Pg8gloFqbKzin0pUvHwtt',
	cache: {
		clear: 'auto',
		type: 'memory'
	}
});

export default async (req, res) => {
	/* First extract the slug from the request,
	so that you can later fetch the right data from Storyblok
	same as => const slug = req.query.slug	*/
	const {
		query: { slug }
	} = req;

	/* Making a request to Storybloks API, using  the Storyblok Client
	 thats set up before */
	Storyblok.get(`cdn/stories/${slug}`, {})
		.then(response => {
			const {
				data: {
					story: { content }
				}
			} = response; /* Same as: const content = data.story.content */
			const data = { content };
			res.setHeader('Content-Type', 'application/json');
			res.statusCode = 200;
			res.end(JSON.stringify(data));
		})
		.catch(error => {
			console.log(error);
			res.setHeader('Content-Type', 'application/json');
			res.statusCode = 500;
			res.end(JSON.stringify(`${error.name}: ${error.message}`));
		});
};
