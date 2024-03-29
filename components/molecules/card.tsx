import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/components/molecules/Card.module.scss';

type Props = {
	image: string;
	title: string;
	detail: string;
	link?: string;
};
export const Card: React.FC<Props> = ({ image, title, detail, link }) => {
	return (
		<div className={styles.main}>
			<div className={styles.image}>
				<Image src={image} width={300} height={150} layout="responsive" objectFit="contain" alt="work image" />
			</div>
			<div className={styles.title}>
				<p>{title}</p>
			</div>
			<div className={styles.detail}>
				<p>{detail}</p>
			</div>

			{link ? (
				<div className={styles.link}>
					<Link href={link}>
						<a>詳細 &gt;</a>
					</Link>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default Card;
