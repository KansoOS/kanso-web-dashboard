import { apiRequest } from "./client";
import type { Policy, PolicyAssignment, PolicyConfig, PolicyType } from "./types";

export function getPolicies(): Promise<Policy[]> {
  return apiRequest<Policy[]>("/policies");
}

export function createPolicy(
  name: string,
  type: PolicyType,
  config: PolicyConfig
): Promise<Policy> {
  return apiRequest<Policy>("/policies", {
    method: "POST",
    body: { name, type, config },
  });
}

export function updatePolicy(
  id: string,
  name: string,
  type: PolicyType,
  config: PolicyConfig
): Promise<Policy> {
  return apiRequest<Policy>(`/policies/${id}`, {
    method: "PUT",
    body: { name, type, config },
  });
}

export function deletePolicy(id: string): Promise<void> {
  return apiRequest<void>(`/policies/${id}`, { method: "DELETE" });
}

export function assignPolicy(id: string, deviceIds: string[]): Promise<PolicyAssignment> {
  return apiRequest<PolicyAssignment>(`/policies/${id}/assign`, {
    method: "POST",
    body: { deviceIds },
  });
}
