import { ReactNode } from 'react';
import styles from '../../styles/components/molecules/AboutArticle.module.scss';

type Props = {
	title: string;
	children: ReactNode;
};

export const AboutArticle: React.FC<Props> = ({ title, children }) => {
	return (
		<div className={styles.main}>
			<h2>{title}</h2>
			<div className={styles.articleContent}>{children}</div>
		</div>
	);
};

export default AboutArticle;
