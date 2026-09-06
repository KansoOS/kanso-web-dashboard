import { getHousehold } from "../api/household";
import { useAsync } from "./useAsync";

export function useHousehold() {
  return useAsync(getHousehold, []);
}
