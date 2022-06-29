import HeaderLayout from '../../components/headerLayout';
import Main from '../../components/templates/works/main';
import { client } from '../../libs/client';
import { work, categories, tags } from '../../types/cms-types';

type Props = {
	works: [work];
	categories: [categories];
	tags: [tags];
};

const Home = ({ works, categories, tags }: Props) => {
	return (
		<HeaderLayout>
			<Main works={works} categories={categories} tags={tags} />
		</HeaderLayout>
	);
};

export const getStaticProps = async () => {
	const apiResult = await Promise.all([
		client.get({ endpoint: 'work' }),
		client.get({ endpoint: 'categories' }),
		client.get({ endpoint: 'tags' })
	]);

	return {
		props: {
			works: apiResult[0].contents,
			categories: apiResult[1].contents,
			tags: apiResult[2].contents
		}
	};
};

export default Home;
