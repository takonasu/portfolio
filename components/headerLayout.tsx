import { ReactNode } from 'react';

import styles from '../styles/components/HeaderLayout.module.scss';

import Header from './organisms/header';

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
