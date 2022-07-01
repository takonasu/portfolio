import { NextApiHandler } from 'next';

import { client } from '../../libs/client';

const Preview: NextApiHandler = async (req, res) => {
	if (!req.query.slug || !req.query.draftKey) {
		return res.status(404).end();
	}

	const slug = req.query.slug;
	const slugExceptArray = slug instanceof Array ? slug[0] : slug;
	const draftKey = req.query.draftKey;
	const draftKeyExceptArray = draftKey instanceof Array ? draftKey[0] : draftKey;

	const content = await client
		.get({
			endpoint: 'work',
			contentId: slugExceptArray,
			queries: { draftKey: draftKeyExceptArray }
		})
		.then()
		.catch((error) => console.error(error));

	if (!content) {
		return res.status(401).json({ message: 'Invalid slug' });
	}
	res.setPreviewData({
		slug: content['id'],
		draftKey: req.query.draftKey
	});
	res.writeHead(307, { Location: `/works/${content['id']}` });
	res.end('Preview mode enabled');
};

export default Preview;
