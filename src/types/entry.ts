export interface Entry<T> {
  id: number;
  attributes: T;
  meta: Record<string, unknown>;
}
