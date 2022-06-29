import { ReactNode } from 'react';

import styles from '../styles/components/Layout.module.scss';

import Footer from './organisms/footer';

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
