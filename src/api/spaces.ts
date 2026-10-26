import { apiRequest } from "./client";
import type { Mandate, SpaceSummary } from "./types";

export function getSpace(id: string): Promise<SpaceSummary> {
  return apiRequest<SpaceSummary>(`/v1/spaces/${id}`);
}

// Le mandat en vigueur de l'aidant connecté sur cet espace — 404 s'il n'y en
// a aucun actuellement (aucune route de révocation côté backend pour
// l'instant : il n'y a rien d'autre à exposer ici).
export function getMandate(spaceId: string): Promise<Mandate> {
  return apiRequest<Mandate>(`/v1/spaces/${spaceId}/mandate`);
}
