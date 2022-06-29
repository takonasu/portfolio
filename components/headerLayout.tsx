import { ReactNode } from 'react';
import Header from './organisms/header';
import styles from '../styles/components/HeaderLayout.module.scss';

type Props = {
	children: ReactNode;
};
export const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className={styles.container}>
			<Header />
			<div>{children}</div>
		</div>
	);
};

export default Layout;
