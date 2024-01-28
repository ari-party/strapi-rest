export interface BaseOptions {
  /**
   * Link to the Strapi API (with trailing slash)
   * @example https://example.com/api/
   */
  apiUrl: string;

  /**
   * Your generated API token
   * @link https://docs.strapi.io/user-docs/settings/API-tokens
   */
  token?: string;
}
