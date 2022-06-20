import styles from '../../../styles/components/templates/top/Main.module.scss';
import TopAbout from '../../organisms/top/topAbout';
import TopWork from '../../organisms/top/topWork';
import TopLink from '../../organisms/top/topLink';

type Props = {};

export const Main: React.FC<Props> = ({}) => {
	return (
		<div className={styles.main}>
			<div className={styles.contentFrame} id="About">
				<TopAbout />
			</div>
			<div className={styles.contentFrame} id="Works">
				<TopWork />
			</div>
			<div className={styles.contentFrame} id="Links">
				<TopLink />
			</div>
		</div>
	);
};

export default Main;
