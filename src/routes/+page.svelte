<script lang="ts">
	import CodeSnippetCard from '../components/code-snippet-card.svelte';
</script>

<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 mix-w-full md:min-w-[750px]">
		<h3 class="text-center py-6">Create a Code Snippet</h3>
		<div class="card p-4 w-full text-token space-y-4">
			<label class="label">
				<span>Snippet Title</span>
				<input class="input" type="text" placeholder="Enter title here ..." />
			</label>

			<label class="label">
				<span>Programming Language</span>
				<select class="select">
					<option value="HTML">HTML</option>
					<option value="CSS">HTML</option>
					<option value="Typescript">HTML</option>
					<option value="Javascript">HTML</option>
					<option value="Rust">HTML</option>
				</select>
			</label>

			<label class="label">
				<span>Code Snippet</span>
				<textarea class="textarea" placeholder="Enter Your Snippet here " rows="4" />
			</label>
		</div>
		<div class="text-center py-6">
			<h2>Code Snippets</h2>
		</div>
		<CodeSnippetCard />
	</div>
</div>
