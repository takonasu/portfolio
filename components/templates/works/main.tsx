import styles from '../../../styles/components/templates/works/Main.module.scss';
import ArticleFrame from '../../organisms/articleFrame';
import Card from '../../molecules/card';
import { work } from '../../../types/cms-types';

type Props = {
	works: [work];
};

export const Main: React.FC<Props> = ({ works }) => {
	return (
		<ArticleFrame>
			<div className={styles.workCards}>
				{works.map((elm) => {
					return (
						<Card
							key={elm.id}
							image="/images/twinte.jpg"
							title={elm.title}
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
