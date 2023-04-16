<script lang="ts">
	import { addSnippet } from '../store/store';

	let formData: ICodeSnippetInput = {
		title: '',
		code: '',
		language: 'HTML'
	};
</script>

<h4 class="text-center py-6">Create a Code Snippet</h4>

<div class="card p-4 w-full text-token space-y-4">
	<label class="label">
		<span>Snippet Title</span>
		<input
			class="input"
			type="text"
			placeholder="Enter title here ..."
			bind:value={formData.title}
		/>
	</label>

	<label class="label">
		<span>Programming Language</span>
		<select class="select" bind:value={formData.language}>
			<option value="HTML">HTML</option>
			<option value="CSS">CSS</option>
			<option value="Typescript">Typescript</option>
			<option value="Javascript">Javascript</option>
			<option value="Rust">Rust</option>
		</select>
	</label>

	<label class="label">
		<span>Code Snippet</span>
		<textarea
			class="textarea min-h-fit"
			placeholder="Enter Your Snippet here "
			rows="4"
			bind:value={formData.code}
		/>
	</label>
	<button
		type="button"
		class="btn btn-sm variant-ghost-secondary"
		on:click={() => addSnippet(formData)}>Save Snippet</button
	>
</div>
