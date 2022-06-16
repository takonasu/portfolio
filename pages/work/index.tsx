import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { client } from '../../libs/client';
import { work } from '../../types/cms-types';

type Props = {
	works: [work];
};

const Home = ({ works }: Props) => {
	// console.log(works);
	return (
		<div>
			<ul>
				{works.map((work) => (
					<li key={work.id}>
						<Link href={`/work/${work.id}`}>
							<a>{work.title}</a>
						</Link>
					</li>
				))}
			</ul>
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
