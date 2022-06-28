import styles from '../../styles/components/molecules/LinkCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
	icon: IconProp;
	title: string;
	detail: string;
	link: string;
};

export const LinkCard: React.FC<Props> = ({ icon, title, detail, link }) => {
	return (
		<a href={link} className={styles.main}>
			<header>
				<div className={styles.icon}>
					<FontAwesomeIcon icon={icon} size="1x" />
				</div>
				<div className={styles.title}>
					<p>{title}</p>
				</div>
			</header>
			<div className={styles.detail}>
				<p>{detail}</p>
			</div>
		</a>
	);
};

export default LinkCard;
