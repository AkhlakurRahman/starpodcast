import { v } from 'convex/values';
import { internalMutation } from './_generated/server';

export const createUser = internalMutation({
	args: {
		email: v.string(),
		imageUrl: v.string(),
		clerkId: v.string(),
		title: v.string(),
	},
	handler: async (ctx, args) => {
		await ctx.db.insert('users', {
			clerkId: args.clerkId,
			email: args.email,
			imageUrl: args.imageUrl,
			title: args.title,
		});
	},
});
