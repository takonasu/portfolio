import format from 'date-fns/format';
import { GetStaticProps } from 'next';

import Tag from '../../components/atoms/tag';
import HeaderLayout from '../../components/headerLayout';
import ArticleFrame from '../../components/organisms/articleFrame';
import { client } from '../../libs/client';
import styles from '../../styles/WorkArticle.module.scss';
import { work } from '../../types/cms-types';

type Props = {
	article: work;
};

export default function WorkArticle({ article }: Props) {
	return (
		<HeaderLayout>
			<ArticleFrame>
				<h1>{article.title}</h1>
				<div className={styles.info}>
					<p>作品制作年：{format(new Date(article.workCreatedDate), 'yyyy年')}</p>
					<p>
						タグ：
						{article.tags.map((tag) => {
							return <Tag key={tag.id} label={tag.name} />;
						})}
					</p>
				</div>
				<div
					className={styles.article}
					dangerouslySetInnerHTML={{
						__html: `${article.body}`
					}}
				/>
			</ArticleFrame>
		</HeaderLayout>
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
