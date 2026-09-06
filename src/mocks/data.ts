import type { Device, DeviceDetail, Household, Policy } from "../api/types";

export const mockHousehold: Household = {
  id: "household-1",
  children: [
    { id: "child-1", name: "Léo" },
    { id: "child-2", name: "Nina" },
  ],
};

export const mockDevices: Device[] = [
  {
    id: "device-1",
    name: "iPad de Léo",
    childId: "child-1",
    status: "online",
    lastSyncAt: "2026-09-06T08:12:00.000Z",
  },
  {
    id: "device-2",
    name: "Téléphone de Nina",
    childId: "child-2",
    status: "offline",
    lastSyncAt: "2026-09-05T20:45:00.000Z",
  },
];

export const mockDeviceDetails: Record<string, DeviceDetail> = {
  "device-1": { ...mockDevices[0], policies: ["policy-1"] },
  "device-2": { ...mockDevices[1], policies: [] },
};

export const mockPolicies: Policy[] = [
  {
    id: "policy-1",
    name: "Écran limité en semaine",
    type: "screenTime",
    config: { dailyLimitMinutes: 120 },
    assignedDeviceIds: ["device-1"],
  },
  {
    id: "policy-2",
    name: "Coucher",
    type: "schedule",
    config: { allowedFrom: "07:00", allowedTo: "20:00" },
    assignedDeviceIds: [],
  },
];
