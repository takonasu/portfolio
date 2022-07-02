import Head from 'next/head';

import TopUpper from '../components/organisms/top/topUpper';
import Main from '../components/templates/top/main';
import { client } from '../libs/client';
import styles from '../styles/Home.module.scss';
import { work } from '../types/cms-types';

type Props = {
	works: [work];
};

const Home = ({ works }: Props) => {
	return (
		<>
			<Head>
				<meta property="og:description" content="Takonasu's Portfolio | TOP" />
			</Head>
			<div className={styles.container}>
				<TopUpper />
				<Main works={works} />
			</div>
		</>
	);
};

export const getStaticProps = async () => {
	const apiResult = await Promise.all([client.get({ endpoint: 'work' })]);
	return {
		props: {
			works: apiResult[0].contents
		}
	};
};

export default Home;
