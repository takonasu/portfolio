import Link from 'next/link';
import styles from '../../styles/components/atoms/Button.module.scss';

type Props = {
	label: string;
	link: string;
};
export const Button: React.FC<Props> = ({ label, link }) => {
	return (
		<div className={styles.main}>
			<Link href={link}>
				<a>{label}</a>
			</Link>
		</div>
	);
};

export default Button;
