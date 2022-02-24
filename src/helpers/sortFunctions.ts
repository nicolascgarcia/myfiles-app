import { Document } from '@/context/APIContext';

export const sortByTitle = (a: Document, b: Document): number => {
	if (a.Title > b.Title) return 1;
	if (a.Title < b.Title) return -1;
	return 0;
};

export const sortByDate = (a: Document, b: Document): number => {
	if (new Date(a.CreatedAt) > new Date(b.CreatedAt)) return -1;
	if (new Date(a.CreatedAt) < new Date(b.CreatedAt)) return 1;
	return 0;
};
