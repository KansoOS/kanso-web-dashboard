import { http, HttpResponse } from "msw";
import type {
  Child,
  CommandType,
  Device,
  DeviceCommandResult,
  EnrollmentToken,
  Policy,
  PolicyConfig,
  PolicyType,
} from "../api/types";
import { mockDeviceDetails, mockDevices, mockHousehold, mockPolicies } from "./data";

let devices = [...mockDevices];
let policies = [...mockPolicies];
const household = { ...mockHousehold, children: [...mockHousehold.children] };

let nextId = 100;
const newId = (prefix: string) => `${prefix}-${nextId++}`;

export const handlers = [
  http.post("*/auth/signup", async ({ request }) => {
    const { email } = (await request.json()) as { email: string; password: string };
    return HttpResponse.json({ id: newId("user"), email }, { status: 201 });
  }),

  http.post("*/auth/login", async ({ request }) => {
    const { email } = (await request.json()) as { email: string; password: string };
    return HttpResponse.json({
      token: "mock-jwt-token",
      user: { id: "user-1", email },
    });
  }),

  http.get("*/household", () => {
    return HttpResponse.json(household);
  }),

  http.post("*/household/children", async ({ request }) => {
    const { name } = (await request.json()) as { name: string };
    const child: Child = { id: newId("child"), name };
    household.children.push(child);
    return HttpResponse.json(child, { status: 201 });
  }),

  http.get("*/devices", () => {
    return HttpResponse.json(devices);
  }),

  http.get("*/devices/:id", ({ params }) => {
    const detail = mockDeviceDetails[params.id as string];
    if (!detail) return new HttpResponse(null, { status: 404 });
    return HttpResponse.json(detail);
  }),

  http.post("*/devices/enroll-token", async () => {
    const body: EnrollmentToken = {
      enrollmentToken: `enroll-${nextId++}`,
      qrCodeData: "data:image/png;base64,mock",
      expiresAt: new Date(Date.now() + 15 * 60_000).toISOString(),
    };
    return HttpResponse.json(body, { status: 201 });
  }),

  http.post("*/devices/:id/command", async ({ request }) => {
    const { type } = (await request.json()) as { type: CommandType };
    const result: DeviceCommandResult = { commandId: newId("cmd"), status: "sent" };
    void type;
    return HttpResponse.json(result, { status: 202 });
  }),

  http.delete("*/devices/:id", ({ params }) => {
    devices = devices.filter((d: Device) => d.id !== params.id);
    return new HttpResponse(null, { status: 204 });
  }),

  http.get("*/policies", () => {
    return HttpResponse.json(policies);
  }),

  http.post("*/policies", async ({ request }) => {
    const body = (await request.json()) as { name: string; type: PolicyType; config: PolicyConfig };
    const policy: Policy = { id: newId("policy"), assignedDeviceIds: [], ...body };
    policies.push(policy);
    return HttpResponse.json(policy, { status: 201 });
  }),

  http.put("*/policies/:id", async ({ params, request }) => {
    const body = (await request.json()) as { name: string; type: PolicyType; config: PolicyConfig };
    const existing = policies.find((p) => p.id === params.id);
    if (!existing) return new HttpResponse(null, { status: 404 });
    Object.assign(existing, body);
    return HttpResponse.json(existing);
  }),

  http.delete("*/policies/:id", ({ params }) => {
    policies = policies.filter((p) => p.id !== params.id);
    return new HttpResponse(null, { status: 204 });
  }),

  http.post("*/policies/:id/assign", async ({ params, request }) => {
    const { deviceIds } = (await request.json()) as { deviceIds: string[] };
    const policy = policies.find((p) => p.id === params.id);
    if (!policy) return new HttpResponse(null, { status: 404 });
    policy.assignedDeviceIds = deviceIds;
    return HttpResponse.json({ policyId: policy.id, assignedDeviceIds: deviceIds });
  }),
];
