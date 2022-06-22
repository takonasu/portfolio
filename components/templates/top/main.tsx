import styles from '../../../styles/components/templates/top/Main.module.scss';
import ArticleFrame from '../../organisms/articleFrame';
import TopAbout from '../../organisms/top/topAbout';
import TopWork from '../../organisms/top/topWork';
import TopLink from '../../organisms/top/topLink';
import TopContact from '../../organisms/top/topContact';

type Props = {};

export const Main: React.FC<Props> = ({}) => {
	return (
		<ArticleFrame>
			<div className={styles.contentFrame} id="About">
				<TopAbout />
			</div>
			<div className={styles.contentFrame} id="Works">
				<TopWork />
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
