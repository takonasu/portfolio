import compareDesc from 'date-fns/compareDesc';
import Link from 'next/link';

import styles from '../../../styles/components/organisms/top/TopWork.module.scss';
import { work } from '../../../types/cms-types';
import Card from '../../molecules/card';
import MainArticle from '../../molecules/mainArticle';

type Props = {
	works: [work];
};

export const TopWork: React.FC<Props> = ({ works }: Props) => {
	const sortedWorks = [...works]
		.filter((elm) => elm.priority == 0)
		.sort((a, b) => compareDesc(new Date(a.workCreatedDate), new Date(b.workCreatedDate)))
		.sort((a, b) => (a.priority <= b.priority ? -1 : 1));
	return (
		<div className={styles.workFrame}>
			<h1>Works</h1>
			<MainArticle>
				<div className={styles.workCards}>
					{sortedWorks.map((elm) => {
						return (
							<div key={elm.id} className={styles.card}>
								<Card
									image={elm.image.url ?? '/images/no_image.png'}
									title={elm.title}
									detail={elm.description}
									link={`/works/${elm.id}`}
								/>
							</div>
						);
					})}
				</div>
			</MainArticle>
			<MainArticle>
				<div className={styles.allWorks}>
					<Link href="/works">
						<a>すべての作品 &gt;</a>
					</Link>
				</div>
			</MainArticle>
		</div>
	);
};

export default TopWork;
