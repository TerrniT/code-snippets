import type { DrawerSettings, ToastSettings } from '@skeletonlabs/skeleton';

export const drawerSettings: DrawerSettings = {
	bgDrawer: 'text-white card variant-glass-surface',
	bgBackdrop: 'bg-gradient-to-tr w-full from-purple-900/90 via-black/50 to-pink-900/50',
	width: 'w-[480px] md:w-[580px]',
	padding: 'p-2',
	rounded: 'rounded-xl'
};

export const toastSettings: ToastSettings = {
	message: '🏆 Success of creating a new snippet!',
	background: 'variant-filled-success',
	timeout: 2500
};
