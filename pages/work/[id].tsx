import { GetStaticProps } from 'next';
import { work } from '../../types/cms-types';
import { client } from '../../libs/client';

type Props = {
	article: work;
};

export default function Article({ article }: Props) {
	return (
		<div className="bg-gray-50">
			<div
				dangerouslySetInnerHTML={{
					__html: `${article.body}`
				}}
			/>
		</div>
	);
}

export const getStaticPaths = async () => {
	type DataType = {
		contents: [work];
	};
	const data: DataType = await client.get({ endpoint: 'work' });
	const paths = data.contents.map((content) => `/work/${content.id}`);
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
