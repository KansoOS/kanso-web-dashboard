import { getDevice, getDevices } from "../api/devices";
import { useAsync } from "./useAsync";

export function useDevices() {
  return useAsync(getDevices, []);
}

export function useDevice(id: string) {
  return useAsync(() => getDevice(id), [id]);
}
