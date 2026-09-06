import { apiRequest } from "./client";
import type { AuthResponse, User } from "./types";

export function signup(email: string, password: string): Promise<User> {
  return apiRequest<User>("/auth/signup", {
    method: "POST",
    body: { email, password },
    auth: false,
  });
}

export function login(email: string, password: string): Promise<AuthResponse> {
  return apiRequest<AuthResponse>("/auth/login", {
    method: "POST",
    body: { email, password },
    auth: false,
  });
}
