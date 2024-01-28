import type { BaseOptions } from '../types/baseFunction';
import type { Entry } from '../types/entry';
import combineUrl from '../utils/combineUrl.js';
import { request } from '../utils/request.js';

export interface CreateEntryOptions extends BaseOptions {
  /**
   * The API ID of the collection type
   */
  collection: string;

  data: Record<string, unknown>;
}

/**
 * @link https://docs.strapi.io/dev-docs/api/rest#create-an-entry
 * @example ```ts
 * import { createEntry } from "strapi-rest"
 *
 * await createEntry({
 *   apiUrl: "http://localhost:1337/api/",
 *   collection: "posts",
 *   data: {
 *     title: "Hello world"
 *   }
 * })
 * ```
 */
export async function createEntry<T>(
  options: CreateEntryOptions,
): Promise<Entry<T | Record<string, unknown>>> {
  const response = await request({
    method: 'POST',
    url: combineUrl(options.apiUrl, options.collection),
    token: options.token,
    data: options.data,
  });

  if (response.error) throw new Error(JSON.stringify(response.error));
  return response.data as Entry<T | Record<string, unknown>>;
}
