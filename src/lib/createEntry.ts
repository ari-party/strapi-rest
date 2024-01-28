import type { BaseOptions } from '../types/baseFunction';
import type { Entry } from '../types/entry';
import combineUrl from '../utils/combineUrl.js';
import request from '../utils/request.js';

export interface Options extends BaseOptions {
  /**
   * The API ID of the collection type
   */
  collection: string;

  data: Record<string, unknown>;
}

/**
 * @link https://docs.strapi.io/dev-docs/api/rest#create-an-entry
 */
export default async function createEntry<T>(
  options: Options,
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
