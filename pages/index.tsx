import type { NextPage } from 'next';
import { client } from '../libs/client';
import { work } from '../types/cms-types';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import TopUpper from '../components/organisms/top/topUpper';
import Main from '../components/templates/top/main';

type Props = {
	works: [work];
};

const Home = ({ works }: Props) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Takonasu&apos;s Portfolio</title>
				<link rel="icon" href="/favicon.ico" />

				<meta property="og:url" content={process.env.HOST_URL ?? process.env.VERCEL_URL} />
				<meta property="og:title" content="Takonasu's Portfolio" />
				<meta
					property="og:image"
					content={`${process.env.HOST_URL ?? process.env.VERCEL_URL}}/images/background.png`}
				/>
				<meta property="og:description" content="たこなすのポートフォリオ" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@ITF_tako" />
			</Head>

			<TopUpper />
			<Main works={works} />
		</div>
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
