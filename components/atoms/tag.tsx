import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../styles/components/atoms/Tag.module.scss';

type Props = {
	label: string;
};

export const Tag: React.FC<Props> = ({ label }) => {
	return (
		<span className={styles.main}>
			<FontAwesomeIcon icon={faTag} size="1x" />
			<span className={styles.span}>{label}</span>
		</span>
	);
};

export default Tag;
