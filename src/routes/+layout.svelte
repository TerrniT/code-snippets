<script lang="ts">
	import { page } from '$app/stores';
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	import 'highlight.js/styles/tokyo-night-dark.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import Navigation from '$lib/navigation.svelte';
	import Footer from '$lib/footer.svelte';
	import Meta from '$lib/meta.svelte';
	import {
		AppBar,
		AppShell,
		Drawer,
		Toast,
		drawerStore,
		storeHighlightJs
	} from '@skeletonlabs/skeleton';

	import hljs from 'highlight.js';
	import { drawerSettings } from '../utils';
	storeHighlightJs.set(hljs);

	$: classesSidebarLeft = $page.url.pathname === '/' ? 'w-0' : 'w-0 lg:w-64';

	function drawerOpen(): void {
		drawerStore.open(drawerSettings);
	}
</script>

<Drawer>
	<Navigation />
</Drawer>

<svelte:head>
	<Meta />
</svelte:head>

<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64" {classesSidebarLeft}>
	<svelte:fragment slot="header">
		<AppBar>
			<div class="text-center">
				<h3>Code Snippets</h3>
			</div>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class=" btn btn-icon-sm" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
	<Toast />
	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</AppShell>
