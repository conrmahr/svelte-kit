import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';

export const handle = SvelteKitAuth({
	providers: [GitHub({ clientId: process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET })]
});
