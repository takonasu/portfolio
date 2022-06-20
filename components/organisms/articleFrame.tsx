import { ReactNode } from 'react';
import styles from '../../styles/components/organisms/ArticleFrame.module.scss';

type Props = {
	children: ReactNode;
};

export const Article: React.FC<Props> = ({ children }) => {
	return <div className={styles.main}>{children}</div>;
};

export default Article;
