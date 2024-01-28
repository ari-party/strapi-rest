export interface StrapiError {
  status: string;
  name: string;
  message: string;
  details: Record<string, unknown>;
}
