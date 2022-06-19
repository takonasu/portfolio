import styles from '../../styles/components/molecules/NormalList.module.scss';

type Props = {
	day: string;
	title: string;
	detail?: string;
};
export const NormalList: React.FC<Props> = ({ day, title, detail }) => {
	return (
		<div className={styles.main}>
			<div className={styles.day}>{day}</div>
			<div className={styles.contents}>
				<p>{title}</p>
				{detail ? <p>{detail}</p> : <></>}
			</div>
		</div>
	);
};

export default NormalList;
