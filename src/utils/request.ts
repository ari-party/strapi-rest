import qs from 'qs';
import type { RequestResponse } from '../types/request';

export interface RequestOptions {
  /** @default GET */
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  parameters?: Record<string, unknown>;
  data?: Record<string, unknown>;
  /** @link https://docs.strapi.io/user-docs/settings/API-tokens */
  token?: string;
}

export default async function request<T>(
  options: RequestOptions,
): Promise<RequestResponse<T>> {
  let { url } = options;
  if (options.parameters)
    url = `${url}?${qs.stringify(options.parameters, { arrayFormat: 'indices' })}`;

  const headers: HeadersInit = {};
  if (options.token) headers.authorization = `Bearer ${options.token}`;

  const response = await fetch(url, {
    method: options.method ?? 'GET',
    headers,
    body:
      options.data &&
      ((options.method === 'POST' || options.method === 'PUT'
        ? JSON.stringify({ data: options.data })
        : null) as BodyInit | null | undefined),
  });

  const body = await response.json();

  return body;
}
