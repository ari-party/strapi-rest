import type { StrapiError } from './error';

export interface RequestResponse<T> {
  data: T | Record<string, unknown> | Array<Record<string, unknown>>;
  meta: Record<string, unknown>;
  error?: StrapiError;
}
