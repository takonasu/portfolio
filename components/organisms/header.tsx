import Link from 'next/link';
import styles from '../../styles/components/organisms/Header.module.scss';

type Props = {};

export const Header: React.FC<Props> = ({}) => {
	return (
		<header className={styles.main}>
			<div className={styles.logo}>
				<Link href="/">
					<a>Takonasu&apos;s Portfolio</a>
				</Link>
			</div>
			<div className={styles.links}>
				<Link href="/works">
					<a>All Works</a>
				</Link>
			</div>
		</header>
	);
};

export default Header;
