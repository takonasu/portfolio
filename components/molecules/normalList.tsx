import { ReactNode } from 'react';
import styles from '../../styles/components/molecules/NormalList.module.scss';

type Props = {
	day: string;
	children: ReactNode;
};

export const NormalList: React.FC<Props> = ({ day, children }) => {
	return (
		<div className={styles.main}>
			<p>{day}</p>
			<p>{children}</p>
		</div>
	);
};

export default NormalList;
