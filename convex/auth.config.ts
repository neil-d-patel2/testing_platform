export default {
  providers: [
    {
      // Set on the Convex deployment, not in .env.local:
      //   npx convex env set CLERK_JWT_ISSUER_DOMAIN https://<your-app>.clerk.accounts.dev
      // This is the "Issuer" shown on the `convex` JWT template in Clerk.
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
      applicationID: 'convex',
    },
  ],
}
