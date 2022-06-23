import styles from '../../../styles/components/templates/works/Main.module.scss';
import ArticleFrame from '../../organisms/articleFrame';
import Card from '../../molecules/card';
import { work, categories, tags } from '../../../types/cms-types';

type Props = {
	works: [work];
	categories: [categories];
	tags: [tags];
};

export const Main: React.FC<Props> = ({ works, categories, tags }) => {
	// console.log(works);
	// console.log(categories);
	// console.log(tags);
	return (
		<ArticleFrame>
			<div className={styles.workCards}>
				{works.map((elm) => {
					return (
						<Card
							key={elm.id}
							image="/images/twinte.jpg"
							title={elm.title}
							detail={elm.tags.toString()}
							link={`/works/${elm.id}`}
						/>
					);
				})}
			</div>
			<div className={styles.workCards}>
				{categories.map((elm) => {
					return (
						<Card
							key={elm.id}
							image="/images/twinte.jpg"
							title={elm.name}
							detail="{elm.body}"
							link={`/works/${elm.id}`}
						/>
					);
				})}
			</div>
			<div className={styles.workCards}>
				{tags.map((elm) => {
					return (
						<Card
							key={elm.id}
							image="/images/twinte.jpg"
							title={elm.name}
							detail="{elm.body}"
							link={`/works/${elm.id}`}
						/>
					);
				})}
			</div>
		</ArticleFrame>
	);
};

export default Main;
