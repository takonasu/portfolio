type Reference<T, R> = T extends 'get' ? R : string | null;
interface GetsType<T> {
	contents: T[];
	totalCount: number;
	offset: number;
	limit: number;
}
type DateType = {
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
};
type Structure<T, P> = T extends 'get'
	? { id: string } & DateType & Required<P>
	: T extends 'gets'
	? GetsType<{ id: string } & DateType & Required<P>>
	: Partial<DateType> & (T extends 'patch' ? Partial<P> : P);

export type work<T = 'get'> = Structure<
	T,
	{
		/**
		 * タイトル
		 */
		title: string;
		/**
		 * 本文
		 */
		body: string;
		/**
		 * カテゴリー
		 */
		category?: Reference<T, unknown>[];
		/**
		 * タグ
		 */
		tags?: Reference<T, tags>[];
		/**
		 * 説明
		 */
		description: string;
		/**
		 * 作品作成年
		 */
		workCreatedDate: string;
		/**
		 * 作品画像
		 */
		image: { url: string; width: number; height: number };
		/**
		 * 優先度
		 */
		priority: number;
	}
>;

export type tags<T = 'get'> = Structure<
	T,
	{
		/**
		 * タグ名
		 */
		name: string;
	}
>;

export type categories<T = 'get'> = Structure<
	T,
	{
		/**
		 * カテゴリ名
		 */
		name: string;
	}
>;

export interface EndPoints {
	get: {
		work: work<'get'>;
		tags: tags<'get'>;
		categories: categories<'get'>;
	};
	gets: {
		work: work<'gets'>;
		tags: tags<'gets'>;
		categories: categories<'gets'>;
	};
	post: {
		work: work<'post'>;
		tags: tags<'post'>;
		categories: categories<'post'>;
	};
	put: {
		work: work<'put'>;
		tags: tags<'put'>;
		categories: categories<'put'>;
	};
	patch: {
		work: work<'patch'>;
		tags: tags<'patch'>;
		categories: categories<'patch'>;
	};
}
