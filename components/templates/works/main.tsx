import { work } from '../../../types/cms-types';
import styles from '../../../styles/components/templates/works/Main.module.scss';
import Card from '../../molecules/card';

type Props = {
	works: [work];
};

export const Main: React.FC<Props> = ({ works }) => {
	return (
		<div className={styles.main}>
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
		</div>
	);
};

export default Main;
