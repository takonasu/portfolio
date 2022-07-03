import compareDesc from 'date-fns/compareDesc';
import Link from 'next/link';

import styles from '../../../styles/components/templates/works/Main.module.scss';
import { work, categories, tags } from '../../../types/cms-types';
import Card from '../../molecules/card';
import ArticleFrame from '../../organisms/articleFrame';

type Props = {
	works: [work];
	categories: [categories];
	tags: [tags];
};

export const Main: React.FC<Props> = ({ works, categories, tags }) => {
	const sortedWorks = [...works]
		.filter((work) => work.visibleList)
		.sort((a, b) => compareDesc(new Date(a.workCreatedDate), new Date(b.workCreatedDate)))
		.sort((a, b) => (a.priority <= b.priority ? -1 : 1));
	const articleFooter = (
		<Link href="/">
			<a>&lt; TOPへ戻る</a>
		</Link>
	);
	return (
		<ArticleFrame articleFooter={articleFooter}>
			<h1>All Works</h1>
			<div className={styles.workCards}>
				{sortedWorks.map((elm) => {
					return (
						<div key={elm.id} className={styles.card}>
							<Card
								image={elm.image.url ?? '/images/no_image.png'}
								title={elm.title}
								detail={elm.description}
								link={`/works/${elm.id}`}
							/>
						</div>
					);
				})}
			</div>
		</ArticleFrame>
	);
};

export default Main;
