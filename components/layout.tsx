import { ReactNode } from 'react';
import Footer from './organisms/footer';
import styles from '../styles/components/Layout.module.scss';

type Props = {
	children: ReactNode;
};
export const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className={styles.container}>
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
