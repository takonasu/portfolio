import { ReactNode } from 'react';

import styles from '../../styles/components/organisms/ArticleFrame.module.scss';

type Props = {
	children: ReactNode;
	articleFooter?: ReactNode;
};

export const Article: React.FC<Props> = ({ children, articleFooter }) => {
	return (
		<div className={styles.main}>
			{children}
			<footer>{articleFooter}</footer>
		</div>
	);
};

export default Article;
