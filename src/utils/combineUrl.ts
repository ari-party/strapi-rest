export default function combineUrl(
  apiUrl: string,
  collectionOrSingleType: string,
  id?: string,
) {
  return `${apiUrl}${collectionOrSingleType}${id ? `/${id}` : ''}`;
}
