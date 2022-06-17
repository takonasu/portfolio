import styles from '../../styles/components/organisms/TopMain.module.scss';
import TopAbout from './topAbout';

type Props = {};

export const TopMain: React.FC<Props> = ({}) => {
	return (
		<div className={styles.main}>
			<TopAbout />
		</div>
	);
};

export default TopMain;
