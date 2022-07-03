import format from 'date-fns/format';
import { GetStaticProps } from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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
	if (!article) {
		return <ErrorPage statusCode={404} />;
	}

	const articleFooter = (
		<Link href="/works">
			<a>&lt; All Worksへ戻る</a>
		</Link>
	);
	return (
		<>
			<Head>
				<title>Takonasu&apos;s Portfolio | {article.title}</title>
				<meta property="og:description" content={"Takonasu's Portfolio | " + article.title} />
			</Head>
			<HeaderLayout>
				<ArticleFrame articleFooter={articleFooter}>
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
					<div className={styles.previewImage}>
						<div className={styles.previewImageWrapper}>
							<Image
								src={article.image.url}
								width={article.image.width}
								height={article.image.height}
								layout="responsive"
								objectFit="contain"
								alt="work image"
							/>
						</div>
					</div>
					<div
						className={styles.article}
						dangerouslySetInnerHTML={{
							__html: `${article.body}`
						}}
					/>
				</ArticleFrame>
			</HeaderLayout>
		</>
	);
}

export const getStaticPaths = async () => {
	type DataType = {
		contents: [work];
	};
	const data: DataType = await client.get({ endpoint: 'work' });
	const paths = data.contents.map((content) => `/works/${content.id}`);
	return { paths, fallback: true };
};

const isDraft = (item: any): item is { draftKey: string } => item?.draftKey && typeof item.draftKey === 'string';

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id;
	const idExceptArray = id instanceof Array ? id[0] : id;
	const draftKey = isDraft(context.previewData) ? { draftKey: context.previewData.draftKey } : {};

	let data;

	try {
		data = await client.get({
			endpoint: 'work',
			contentId: idExceptArray,
			queries: draftKey
		});
	} catch (error) {
		data = null;
	}

	return {
		props: {
			article: data
		}
	};
};
