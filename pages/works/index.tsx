import type { NextPage } from 'next';
import Link from 'next/link';
import { client } from '../../libs/client';
import { work, categories, tags } from '../../types/cms-types';
import Main from '../../components/templates/works/main';

type Props = {
	works: [work];
	categories: [categories];
	tags: [tags];
};

const Home = ({ works, categories, tags }: Props) => {
	return (
		<div>
			<Main works={works} categories={categories} tags={tags} />
		</div>
	);
};

export const getStaticProps = async () => {
	const apiResult = await Promise.all([
		client.get({ endpoint: 'work' }),
		client.get({ endpoint: 'categories' }),
		client.get({ endpoint: 'tags' })
	]);

	return {
		props: {
			works: apiResult[0].contents,
			categories: apiResult[1].contents,
			tags: apiResult[2].contents
		}
	};
};

export default Home;
