import styles from '../../styles/components/atoms/Button.module.scss';

type Props = {
	label: string;
	link: string;
};
export const Button: React.FC<Props> = ({ label, link }) => {
	return (
		<a href={link} className={styles.main} target="_blank" rel="noopener noreferrer">
			{label}
		</a>
	);
};

export default Button;
