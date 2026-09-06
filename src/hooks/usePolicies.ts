import { getPolicies } from "../api/policies";
import { useAsync } from "./useAsync";

export function usePolicies() {
  return useAsync(getPolicies, []);
}
