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
	}
>;

export interface EndPoints {
	get: {
		work: work<'get'>;
	};
	gets: {
		work: work<'gets'>;
	};
	post: {
		work: work<'post'>;
	};
	put: {
		work: work<'put'>;
	};
	patch: {
		work: work<'patch'>;
	};
}
