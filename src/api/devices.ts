import { apiRequest } from "./client";
import type {
  CommandType,
  Device,
  DeviceCommandResult,
  DeviceDetail,
  EnrollmentToken,
} from "./types";

export function getDevices(): Promise<Device[]> {
  return apiRequest<Device[]>("/devices");
}

export function getDevice(id: string): Promise<DeviceDetail> {
  return apiRequest<DeviceDetail>(`/devices/${id}`);
}

export function createEnrollmentToken(childId: string): Promise<EnrollmentToken> {
  return apiRequest<EnrollmentToken>("/devices/enroll-token", {
    method: "POST",
    body: { childId },
  });
}

export function sendDeviceCommand(id: string, type: CommandType): Promise<DeviceCommandResult> {
  return apiRequest<DeviceCommandResult>(`/devices/${id}/command`, {
    method: "POST",
    body: { type },
  });
}

export function deleteDevice(id: string): Promise<void> {
  return apiRequest<void>(`/devices/${id}`, { method: "DELETE" });
}
