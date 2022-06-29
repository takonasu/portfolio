import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

import styles from '../../../styles/components/organisms/top/TopLink.module.scss';
import LinkCard from '../../molecules/linkCard';
import MainArticle from '../../molecules/mainArticle';

type Props = {};

export const TopLink: React.FC<Props> = ({}) => {
	return (
		<div className={styles.linkFrame}>
			<h1>Links</h1>
			<MainArticle>
				<div className={styles.linkCards}>
					<div className={styles.linkCard}>
						<LinkCard
							icon={faGithub}
							title="GitHub"
							detail="各種作品のソースコードを公開しています。"
							link="https://github.com/takonasu"
						/>
					</div>
					<div className={styles.linkCard}>
						<LinkCard
							icon={faTwitter}
							title="Twitter"
							detail="一言日記です。技術的な話は特にしていません。"
							link="https://twitter.com/ITF_tako"
						/>
					</div>
					<div className={styles.linkCard}>
						<LinkCard
							icon={faPencil}
							title="Qiita"
							detail="技術的な小ネタ等の記事を公開しています。"
							link="https://qiita.com/takonasu"
						/>
					</div>
				</div>
			</MainArticle>
		</div>
	);
};

export default TopLink;
