import styles from '../../styles/WorkArticle.module.scss';
import ArticleFrame from '../../components/organisms/articleFrame';
import { GetStaticProps } from 'next';
import { work } from '../../types/cms-types';
import { client } from '../../libs/client';

type Props = {
	article: work;
};

export default function WorkArticle({ article }: Props) {
	return (
		<ArticleFrame>
			<div
				className={styles.article}
				dangerouslySetInnerHTML={{
					__html: `${article.body}`
				}}
			/>
		</ArticleFrame>
	);
}

export const getStaticPaths = async () => {
	type DataType = {
		contents: [work];
	};
	const data: DataType = await client.get({ endpoint: 'work' });
	const paths = data.contents.map((content) => `/works/${content.id}`);
	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const id = ctx.params?.id;
	const idExceptArray = id instanceof Array ? id[0] : id;
	const data = await client.get({
		endpoint: 'work',
		contentId: idExceptArray
	});

	return {
		props: {
			article: data
		}
	};
};
