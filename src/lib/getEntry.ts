import type { BaseOptions } from '../types/baseFunction';
import type { Entry } from '../types/entry';
import combineUrl from '../utils/combineUrl.js';
import { request } from '../utils/request.js';

export interface GetEntryOptions extends BaseOptions {
  /**
   * The API ID of the collection type
   */
  collection?: string;

  /**
   * The API ID of the single type or entry id of the collection type
   */
  id: string;
}

/**
 * @link https://docs.strapi.io/dev-docs/api/rest#get-an-entry
 *
 * @example
 * ```ts
 * import { getEntry } from "strapi-rest"
 *
 * interface PostEntry {
 *   title: "Hello world"
 * }
 *
 * await getEntry<PostEntry>({
 *   apiUrl: "http://localhost:1337/api/",
 *   collection: "posts",
 *   id: "1"
 * })
 * ```
 */
export async function getEntry<T>(
  options: GetEntryOptions,
): Promise<Entry<T | Record<string, unknown>>> {
  const response = await request({
    method: 'GET',
    url: combineUrl(
      options.apiUrl,
      options.collection ?? options.id,
      options.collection ? options.id : undefined,
    ),
    token: options.token,
  });

  if (response.error) throw new Error(JSON.stringify(response.error));
  return response.data as Entry<T | Record<string, unknown>>;
}
