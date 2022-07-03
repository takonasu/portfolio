import styles from '../../../styles/components/organisms/top/TopContact.module.scss';
import Button from '../../atoms/button';
import MainArticle from '../../molecules/mainArticle';

type Props = {};

export const TopLink: React.FC<Props> = ({}) => {
	return (
		<div>
			<h1>Contact</h1>
			<MainArticle>
				<p>
					上記リンク記載のTwitter DMもしくは下記のGoogle Formsよりお願いいたします。
					<br />
					知人の方の場合、家庭内ネットワークや家庭内電気設備の相談も受け付けております。
				</p>
			</MainArticle>
			<div className={styles.button}>
				<Button
					label="お問い合わせ"
					link="https://docs.google.com/forms/d/e/1FAIpQLSez7mvGC_IKCc9RAeaHVVpHME5-Q4lsEGCcCMjsXAO4JLJc9w/viewform?usp=sf_link"
				/>
			</div>
		</div>
	);
};

export default TopLink;
