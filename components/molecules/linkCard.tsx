import { ReactNode } from 'react';

import styles from '../../styles/components/molecules/LinkCard.module.scss';

type Props = {
	icon: ReactNode;
	title: string;
	detail: string;
	link: string;
};

export const LinkCard: React.FC<Props> = ({ icon, title, detail, link }) => {
	return (
		<a href={link} className={styles.main}>
			<header>
				<div className={styles.icon}>{icon}</div>
				<div className={styles.title}>
					<p>{title}</p>
				</div>
			</header>
			<div className={styles.detail}>
				<p>{detail}</p>
			</div>
		</a>
	);
};

export default LinkCard;
