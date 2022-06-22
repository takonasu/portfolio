import styles from '../../../styles/components/organisms/top/TopUpper.module.scss';
import { Link as Scroll } from 'react-scroll';

type Props = {};

export const TopUpper: React.FC<Props> = ({}) => {
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
							<Scroll to="About" smooth={true} duration={600}>
								About
							</Scroll>
						</div>
						<div>
							<Scroll to="Works" smooth={true} duration={600}>
								Works
							</Scroll>
						</div>
						<div>
							<Scroll to="Links" smooth={true} duration={600}>
								Links
							</Scroll>
						</div>
						<div>
							<Scroll to="Contact" smooth={true} duration={600}>
								Contact
							</Scroll>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopUpper;
