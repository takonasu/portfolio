import Head from 'next/head';

import '../styles/globals.scss';
import Layout from '../components/layout';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link rel="icon" href="/images/ogp.jpg" />
				<meta
					property="og:url"
					content={process.env.NEXT_PUBLIC_HOST_URL ?? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`}
				/>
				<meta property="og:title" content="Takonasu's Portfolio" />
				<meta
					property="og:image"
					content={`${
						process.env.NEXT_PUBLIC_HOST_URL ?? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
					}/images/ogp.jpg`}
				/>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@ITF_tako" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
