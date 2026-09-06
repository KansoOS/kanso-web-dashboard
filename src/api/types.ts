// Types générés à partir du contrat d'API v1 (draft, non validé par le backend).
// Voir API-CONTRACT.md à la racine du repo.

export type DeviceStatus = "online" | "offline" | "pending";
export type PolicyType = "screenTime" | "appBlock" | "schedule";
export type CommandType = "lock" | "wipe" | "reboot";
export type CommandStatus = "sent" | "failed";

export interface User {
  id: string;
  email: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface Child {
  id: string;
  name: string;
}

export interface Household {
  id: string;
  children: Child[];
}

export interface Device {
  id: string;
  name: string;
  childId: string;
  status: DeviceStatus;
  lastSyncAt: string;
}

export interface DeviceDetail extends Device {
  policies: string[];
}

export interface EnrollmentToken {
  enrollmentToken: string;
  qrCodeData: string;
  expiresAt: string;
}

export interface DeviceCommandResult {
  commandId: string;
  status: CommandStatus;
}

export interface ScreenTimeConfig {
  dailyLimitMinutes: number;
}

export interface AppBlockConfig {
  blockedPackages: string[];
}

export interface ScheduleConfig {
  allowedFrom: string;
  allowedTo: string;
}

export type PolicyConfig = ScreenTimeConfig | AppBlockConfig | ScheduleConfig;

export interface Policy {
  id: string;
  name: string;
  type: PolicyType;
  config: PolicyConfig;
  assignedDeviceIds: string[];
}

export interface PolicyAssignment {
  policyId: string;
  assignedDeviceIds: string[];
}
