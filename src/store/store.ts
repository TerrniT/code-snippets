import { writable, get } from 'svelte/store';
import { drawerStore, toastStore } from '@skeletonlabs/skeleton';
import { toastSettings } from '../utils';

export const snippetStore = writable<ICodeSnippet[]>([]);

export function addSnippet(input: ICodeSnippetInput) {
	const snippets = get(snippetStore);
	snippetStore.update(() => {
		return [{ ...input, favorite: false }, ...snippets];
	});

	drawerStore.close();
	toastStore.trigger(toastSettings);
}

export function deleteSnippet(index: number) {
	const snippets = get(snippetStore);
	snippets.splice(index, 1);
	snippetStore.update(() => {
		return snippets;
	});
}

export function toggleFavorite(index: number) {
	const snippets = get(snippetStore);

	snippetStore.update(() => {
		return snippets.map((snippet, snippetIndex) => {
			if (snippetIndex === index) {
				return { ...snippet, favorite: !snippet.favorite };
			}
			return snippet;
		});
	});
}
