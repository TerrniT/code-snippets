<script lang="ts">
	import SidebarForm from '../components/sidebar-form.svelte';
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="p-2">
	<button class=" btn btn-icon-sm" on:click={drawerClose}>
		<span>
			<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
				<rect width="100" height="20" />
				<rect y="30" width="100" height="20" />
				<rect y="60" width="100" height="20" />
			</svg>
		</span>
	</button>
	<SidebarForm />
</nav>
