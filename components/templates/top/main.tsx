import styles from '../../../styles/components/templates/top/Main.module.scss';
import { work } from '../../../types/cms-types';
import ArticleFrame from '../../organisms/articleFrame';
import TopAbout from '../../organisms/top/topAbout';
import TopContact from '../../organisms/top/topContact';
import TopLink from '../../organisms/top/topLink';
import TopWork from '../../organisms/top/topWork';

type Props = {
	works: [work];
};

export const Main: React.FC<Props> = ({ works }: Props) => {
	return (
		<ArticleFrame>
			<div className={styles.contentFrame} id="About">
				<TopAbout />
			</div>
			<div className={styles.contentFrame} id="Works">
				<TopWork works={works} />
			</div>
			<div className={styles.contentFrame} id="Links">
				<TopLink />
			</div>
			<div className={styles.contentFrame} id="Contact">
				<TopContact />
			</div>
		</ArticleFrame>
	);
};

export default Main;
