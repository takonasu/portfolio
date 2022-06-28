import styles from '../../styles/components/atoms/Tag.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

type Props = {
	label: string;
};

export const Tag: React.FC<Props> = ({ label }) => {
	return (
		<span className={styles.main}>
			<FontAwesomeIcon icon={faTag} size="sm" />
			<span className={styles.span}>{label}</span>
		</span>
	);
};

export default Tag;
