/**
 * `VERSION` managed by https://deno.land/x/publish
 */
export const VERSION = "0.1.1";

/**
 * `prepublish` will be invoked before publish, return `false` to prevent the publish
 *
 * @param {String} version - Module version
 */
export async function prepublish(_version: string): Promise<void> {}

/**
 * `postpublish` will be invoked after published
 *
 * @param {String} version - Module version
 */
export async function postpublish(_version: string): Promise<void> {}
