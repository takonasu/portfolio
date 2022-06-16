import styles from '../../styles/components/organisms/Top.module.scss';

type Props = {};

export const Top: React.FC<Props> = ({}) => {
	return (
		<div className={styles.main}>
			<div className={styles.top}>
				<div className={styles.topMenuFrame}>
					<div className={styles.titleFrame}>
						<h1>Takonasu&apos;s Portfolio</h1>
						<p>A Master&apos;s Student Of Computer Science At Univ. Tsukuba.</p>
					</div>
					<div className={styles.linksFrame}>
						<div>
							<a href="">About</a>
						</div>
						<div>
							<a href="">Works</a>
						</div>
						<div>
							<a href="">Links</a>
						</div>
						<div>
							<a href="">Contact</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Top;
