import { ReactNode } from 'react';

import styles from '../../styles/components/molecules/MainArticle.module.scss';

type Props = {
	title?: string;
	children: ReactNode;
};

export const MainArticle: React.FC<Props> = ({ title, children }) => {
	return (
		<div className={styles.main}>
			{title ? <h2>{title}</h2> : <></>}
			<div className={styles.articleContent}>{children}</div>
		</div>
	);
};

export default MainArticle;
