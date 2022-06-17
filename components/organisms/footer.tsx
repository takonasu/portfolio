import styles from '../../styles/components/organisms/Footer.module.scss';

type Props = {};

export const Footer: React.FC<Props> = ({}) => {
	return (
		<footer className={styles.main}>
			<p>
				<span className={styles.kanon}>&copy;</span> <span className={styles.chisato}>2022</span>
				<span className={styles.keke}>Takanashi</span>
				<span className={styles.sumire}>Yuya</span>(<span className={styles.ren}>takonasu</span>)
			</p>
		</footer>
	);
};

export default Footer;
