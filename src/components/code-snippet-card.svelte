<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import FaHeart from 'svelte-icons/fa/FaHeart.svelte';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	import { deleteSnippet, toggleFavorite } from '../store/store';
	export let index: number;
	export let snippet: ICodeSnippet = {
		title: '',
		language: '',
		code: '',
		favorite: false
	};
</script>

<div class="card flex flex-col">
	<header class="card-header">
		{snippet.title}
		<div class="float-right flex gap-2">
			<button
				class="btn btn-sm variant-filled-tertiary transition-all duration-100 py-2"
				type="button"
				on:click={() => toggleFavorite(index)}
			>
				{#if snippet.favorite}
					<div class="w-4 h-4 text-pink-500">
						<FaHeart />
					</div>
				{:else}
					<div class="w-4 h-4">
						<FaHeart />
					</div>
				{/if}
			</button>
			<button
				class="btn btn-sm variant-filled-error"
				type="button"
				on:click={() => deleteSnippet(index)}
			>
				<div class="w-5 h-5">
					<MdDelete />
				</div>
			</button>
		</div>
	</header>
	<section class="p-4">
		<CodeBlock language={snippet.language} code={snippet.code} />
	</section>
</div>
