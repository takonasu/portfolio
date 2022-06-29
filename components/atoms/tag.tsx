import { FaTag } from 'react-icons/fa';

import styles from '../../styles/components/atoms/Tag.module.scss';

type Props = {
	label: string;
};

export const Tag: React.FC<Props> = ({ label }) => {
	return (
		<span className={styles.main}>
			<FaTag size="1rem" />
			<span className={styles.span}>{label}</span>
		</span>
	);
};

export default Tag;
