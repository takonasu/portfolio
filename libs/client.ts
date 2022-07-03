import { createClient } from 'microcms-js-sdk';

export const client = createClient({
	serviceDomain: 'takonasu-portfolio',
	apiKey: process.env.API_KEY as string
});
