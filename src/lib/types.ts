import type { LoadClerkJsScriptOptions } from '@clerk/shared';
import type { Clerk, ClerkOptions, ClientResource, Without } from '@clerk/types';
import type { PropsWithChildren } from 'ripple';

export interface HeadlessBrowserClerk extends Clerk {
	load: (opts?: Without<ClerkOptions, 'isSatellite'>) => Promise<void>;
	updateClient: (client: ClientResource) => void;
}

export interface BrowserClerk extends HeadlessBrowserClerk {
	onComponentsReady: Promise<void>;
	components: unknown;
}

export type ClerkProviderProps = PropsWithChildren<LoadClerkJsScriptOptions>;

declare global {
	interface Window {
		Clerk: HeadlessBrowserClerk | BrowserClerk;
	}
}
