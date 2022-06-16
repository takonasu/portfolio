import styles from '../../styles/components/organisms/Top.module.scss';

type Props = {};

export const Top: React.FC<Props> = ({}) => {
	return (
		<div className={styles.main}>
			<h1>Takonasu's Portfolio</h1>
		</div>
	);
};

export default Top;
