import { apiRequest } from "./client";
import type { Child, Household } from "./types";

export function getHousehold(): Promise<Household> {
  return apiRequest<Household>("/household");
}

export function addChild(name: string): Promise<Child> {
  return apiRequest<Child>("/household/children", {
    method: "POST",
    body: { name },
  });
}
