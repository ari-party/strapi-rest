import combineUrl from '../utils/combineUrl.js';
import { request } from '../utils/request.js';

import type { BaseOptions } from '../types/baseFunction';
import type { Entry } from '../types/entry';

export interface UpdateEntryOptions extends BaseOptions {
  /**
   * The API ID of the collection type
   */
  collection: string;

  data: Record<string, unknown>;
}

/**
 * @link https://docs.strapi.io/dev-docs/api/rest#update-an-entry
 *
 * @example
 * ```ts
 * import { updateEntry } from "strapi-rest"
 *
 * await updateEntry({
 *   apiUrl: "http://localhost:1337/api/",
 *   collection: "posts",
 *   data: {
 *     title: "Hello world"
 *   }
 * })
 * ```
 */
export async function updateEntry(
  options: UpdateEntryOptions,
): Promise<Entry<Record<string, unknown>>> {
  const response = await request({
    method: 'PUT',
    url: combineUrl(options.apiUrl, options.collection),
    token: options.token,
    data: options.data,
  });

  if (response.error) throw new Error(JSON.stringify(response.error));
  return response.data as Entry<Record<string, unknown>>;
}
