import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Top from '../components/organisms/top';

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

			<Top />

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
};

export default Home;
