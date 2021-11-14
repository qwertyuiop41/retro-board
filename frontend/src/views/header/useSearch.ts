import { useRecoilValue } from 'recoil';
import { SearchState } from './state';

export default function useSearch(): string {
  const value = useRecoilValue(SearchState);
  return value;
}
