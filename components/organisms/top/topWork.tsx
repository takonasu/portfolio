import styles from '../../../styles/components/organisms/top/TopWork.module.scss';
import MainArticle from '../../molecules/mainArticle';
import Card from '../../molecules/card';

type Props = {};

export const TopWork: React.FC<Props> = ({}) => {
	return (
		<div className={styles.workFrame}>
			<h1>Works</h1>
			<MainArticle>
				<div className={styles.workCards}>
					<Card
						image="/images/twinte.jpg"
						title="Twin:te"
						detail="筑波大学生専用の時間割アプリ。延べ12,000人以上が利用している。代表を務めるとともに、技術面では主にiOS全般を担当。"
						link="https://www.twinte.net"
					/>
					<Card
						image="/images/AGStation.jpg"
						title="AGStation(β)"
						detail="ffmpeg で録画できる超 A&amp;G への予約を支援するツール。WEB フロントエンド経由で予約録画できる。"
						link="https://github.com/takonasu/AG_Station"
					/>
					<Card
						image="/images/maumarutime.jpg"
						title="ロゴジェネレーター"
						detail="「バジリスクタイム」風のロゴを作ることができる。月1000人の利用者がいる。"
						link="https://maumarutime.ml"
					/>
				</div>
			</MainArticle>
			<MainArticle>
				<div className={styles.allWorks}>
					<a href="./work">すべての作品 &gt;</a>
				</div>
			</MainArticle>
		</div>
	);
};

export default TopWork;
