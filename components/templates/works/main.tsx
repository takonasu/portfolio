import styles from '../../../styles/components/templates/works/Main.module.scss';
import ArticleFrame from '../../organisms/articleFrame';
import Card from '../../molecules/card';
import { work, categories, tags } from '../../../types/cms-types';
import compareDesc from 'date-fns/compareDesc';

type Props = {
	works: [work];
	categories: [categories];
	tags: [tags];
};

export const Main: React.FC<Props> = ({ works, categories, tags }) => {
	const sortedWorks = [...works]
		.sort((a, b) => compareDesc(new Date(a.workCreatedDate), new Date(b.workCreatedDate)))
		.sort((a, b) => (a.priority <= b.priority ? -1 : 1));
	return (
		<ArticleFrame>
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
