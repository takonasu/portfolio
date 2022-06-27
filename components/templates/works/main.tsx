import styles from '../../../styles/components/templates/works/Main.module.scss';
import ArticleFrame from '../../organisms/articleFrame';
import Card from '../../molecules/card';
import Tag from '../../atoms/tag';
import { work, categories, tags } from '../../../types/cms-types';

type Props = {
	works: [work];
	categories: [categories];
	tags: [tags];
};

export const Main: React.FC<Props> = ({ works, categories, tags }) => {
	return (
		<ArticleFrame>
			<h1>All Works</h1>
			<div className={styles.workCards}>
				{works.map((elm) => {
					return (
						<div key={elm.id} className={styles.card}>
							<Card
								image="/images/twinte.jpg"
								title={elm.title}
								detail={elm.tags.toString()}
								link={`/works/${elm.id}`}
							/>
						</div>
					);
				})}
			</div>
			<div className={styles.workCards}>
				{categories.map((elm) => {
					return (
						<div key={elm.id} className={styles.card}>
							<Card image="/images/twinte.jpg" title={elm.name} detail="{elm.body}" link={`/works/${elm.id}`} />
						</div>
					);
				})}
			</div>
			{/* <div className={styles.workCards}>
				{tags.map((elm) => {
					return <Tag key={elm.id} label={elm.name} />;
				})}
			</div> */}
		</ArticleFrame>
	);
};

export default Main;
