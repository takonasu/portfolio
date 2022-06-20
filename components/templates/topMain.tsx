import styles from '../../styles/components/templates/TopMain.module.scss';
import TopAbout from '../organisms/top/topAbout';
import TopWork from '../organisms/top/topWork';
import TopLink from '../organisms/top/topLink';

type Props = {};

export const TopMain: React.FC<Props> = ({}) => {
	return (
		<div className={styles.main}>
			<div className={styles.contentFrame}>
				<TopAbout />
			</div>
			<div className={styles.contentFrame}>
				<TopWork />
			</div>
			<div className={styles.contentFrame}>
				<TopLink />
			</div>
		</div>
	);
};

export default TopMain;
