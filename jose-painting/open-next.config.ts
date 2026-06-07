import { defineCloudflareConfig } from "@opennextjs/cloudflare";

/**
 * OpenNext config for Cloudflare Workers.
 *
 * Minimal setup: the site is fully static/SSG (no ISR / on-demand
 * revalidation), so no incremental cache (R2/KV) is needed yet. When a future
 * DhanGen block introduces cached dynamic data, add an `incrementalCache`
 * override here (e.g. r2IncrementalCache) plus the matching binding in
 * wrangler.jsonc.
 */
export default defineCloudflareConfig();
