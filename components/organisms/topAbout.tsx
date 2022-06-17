import styles from '../../styles/components/organisms/TopAbout.module.scss';
import Image from 'next/image';
import AboutArticle from '../molecules/aboutArticle';
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
			<div>
				<AboutArticle title="自己紹介">
					<p>
						コンピュータネットワークの研究をしている筑波大学院生です。
						<br />
						モノづくりが趣味で電子工作やWEBアプリケーションを作成したりなど幅広く扱っています。
						<br />
						のべ12,000人以上が利用している筑波大学専用時間割アプリ <a href="https://www.twinte.net">Twin:te</a>
						(ついんて)の発起人で代表を務めています。
					</p>
				</AboutArticle>
				<AboutArticle title="免許・資格">
					<NormalList day="2021年6月">ネットワークスペシャリスト 試験合格</NormalList>
				</AboutArticle>
				<AboutArticle title="経歴">
					<NormalList day="2020年6月-2022年3月">ナイル</NormalList>
				</AboutArticle>
			</div>
		</div>
	);
};

export default TopAbout;
