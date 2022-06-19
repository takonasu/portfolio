import styles from '../../styles/components/templates/TopMain.module.scss';
import TopAbout from '../organisms/topAbout';
import TopWork from '../organisms/topWork';

type Props = {};

export const TopMain: React.FC<Props> = ({}) => {
	return (
		<div className={styles.main}>
			<TopAbout />
			<TopWork />
		</div>
	);
};

export default TopMain;
