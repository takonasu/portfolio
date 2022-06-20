import type { NextPage } from 'next';
import Link from 'next/link';
import { client } from '../../libs/client';
import { work } from '../../types/cms-types';
import Main from '../../components/templates/works/main';

type Props = {
	works: [work];
};

const Home = ({ works }: Props) => {
	return (
		<div>
			<Main works={works} />
		</div>
	);
};

export const getStaticProps = async () => {
	const data = await client.get({ endpoint: 'work' });
	return {
		props: {
			works: data.contents
		}
	};
};

export default Home;
