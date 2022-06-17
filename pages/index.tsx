import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import TopUpper from '../components/organisms/topUpper';
import TopMain from '../components/organisms/topMain';
import Footer from '../components/organisms/footer';

const Home: NextPage = () => {
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
			<TopMain />
			<Footer />
		</div>
	);
};

export default Home;
