import styles from '../../styles/components/organisms/TopAbout.module.scss';
import Image from 'next/image';
import MainArticle from '../molecules/mainArticle';
import NormalList from '../molecules/normalList';

type Props = {};

export const TopAbout: React.FC<Props> = ({}) => {
	return (
		<div className={styles.aboutFrame}>
			<h1>About</h1>
			<div className={styles.title}>
				<div className={styles.myImage}>
					<Image src="/images/profile.jpeg" width={200} height={200} objectFit="contain" alt="profile image" />
				</div>
				<div className={styles.myName}>
					<h1>Takanashi Yuya</h1>
					<h2>(takonasu)</h2>
					<p>
						筑波大学 大学院理工情報生命学術院 <br />
						システム情報工学研究群 情報理工学位プログラム
					</p>
				</div>
			</div>
			<MainArticle title="自己紹介">
				<p>
					コンピュータネットワークの研究をしている筑波大学院生です。
					<br />
					モノづくりが趣味で電子工作やWEBアプリケーションを作成したりなど幅広く扱っています。
					<br />
					のべ12,000人以上が利用している筑波大学専用時間割アプリ <a href="https://www.twinte.net">Twin:te</a>
					(ついんて)の発起人で代表を務めています。
				</p>
			</MainArticle>
			<MainArticle title="免許・資格">
				<NormalList day="2021年6月" title="ネットワークスペシャリスト 試験合格" />
				<NormalList day="2021年1月" title="第二種電気工事士 免許取得" />
				<NormalList day="2020年12月" title="応用情報技術者  試験合格" />
				<NormalList day="2018年4月" title="普通自動車運転(AT限定) 免許取得" />
			</MainArticle>
			<MainArticle title="経歴">
				<NormalList
					day="2022年4月 -"
					title="筑波大学大学院情報理工学位プログラム"
					detail="コンピュータネットワークの研究"
				/>
				<NormalList
					day="2022年4月 -"
					title="株式会社Kaizen Platform 長期インターン"
					detail="WEBフロント・バックエンド開発"
				/>
				<NormalList
					day="2020年6月 - 2022年3月"
					title="ナイル株式会社"
					detail="社内システム・サーバレスなサービスの開発"
				/>
				<NormalList day="2018年4月 -" title="某学習塾 アルバイト" detail="塾講師として小学・中学・高校生を指導" />
				<NormalList day="2018年4月 - 2022年3月" title="筑波大学情報学群情報科学類" />
				<NormalList day="2012年4月 - 2018年03月" title="茨城県立並木中等教育学校" />
			</MainArticle>
		</div>
	);
};

export default TopAbout;
