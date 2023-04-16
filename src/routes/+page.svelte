<script lang="ts">
	import { snippetStore } from '../store/store';
	import CodeSnippetCard from '../components/code-snippet-card.svelte';

	import type { PageData } from './$types';
	export let data: PageData;

	snippetStore.set(data.snippets);
</script>

<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 mix-w-full md:min-w-[750px] pt-8">
		{#each $snippetStore as snippet, index}
			<CodeSnippetCard {snippet} {index} />
		{/each}
	</div>
</div>
