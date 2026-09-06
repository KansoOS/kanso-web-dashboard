# KansoOS — Contrat d'API v1 (draft, à valider avec le backend)

Convention : toutes les réponses en JSON. Auth via header `Authorization: Bearer <JWT>` sauf mention contraire. Dates en ISO 8601.

---

## Auth

### `POST /auth/signup`
**Body**
```json
{ "email": "string", "password": "string" }
```
**Réponse 201**
```json
{ "id": "string", "email": "string" }
```

### `POST /auth/login`
**Body**
```json
{ "email": "string", "password": "string" }
```
**Réponse 200**
```json
{ "token": "string", "user": { "id": "string", "email": "string" } }
```

---

## Household (foyer)

### `GET /household`
**Réponse 200**
```json
{
  "id": "string",
  "children": [
    { "id": "string", "name": "string" }
  ]
}
```

### `POST /household/children`
**Body**
```json
{ "name": "string" }
```
**Réponse 201**
```json
{ "id": "string", "name": "string" }
```

---

## Devices

### `GET /devices`
**Réponse 200**
```json
[
  {
    "id": "string",
    "name": "string",
    "childId": "string",
    "status": "online | offline | pending",
    "lastSyncAt": "ISO8601 string"
  }
]
```

### `GET /devices/:id`
**Réponse 200**
```json
{
  "id": "string",
  "name": "string",
  "childId": "string",
  "status": "online | offline | pending",
  "lastSyncAt": "ISO8601 string",
  "policies": ["policyId1", "policyId2"]
}
```

### `POST /devices/enroll-token`
**Body**
```json
{ "childId": "string" }
```
**Réponse 201**
```json
{ "enrollmentToken": "string", "qrCodeData": "string", "expiresAt": "ISO8601 string" }
```

### `POST /devices/:id/command`
**Body**
```json
{ "type": "lock | wipe | reboot" }
```
**Réponse 202**
```json
{ "commandId": "string", "status": "sent | failed" }
```

### `DELETE /devices/:id`
**Réponse 204** (pas de body)

---

## Policies

### `GET /policies`
**Réponse 200**
```json
[
  {
    "id": "string",
    "name": "string",
    "type": "screenTime | appBlock | schedule",
    "config": { "...": "dépend du type" },
    "assignedDeviceIds": ["string"]
  }
]
```

### `POST /policies`
**Body**
```json
{
  "name": "string",
  "type": "screenTime | appBlock | schedule",
  "config": { "...": "dépend du type" }
}
```
**Réponse 201** — même forme qu'un item de `GET /policies`

### `PUT /policies/:id`
**Body** — mêmes champs que `POST /policies`
**Réponse 200** — policy mise à jour

### `DELETE /policies/:id`
**Réponse 204**

### `POST /policies/:id/assign`
**Body**
```json
{ "deviceIds": ["string"] }
```
**Réponse 200**
```json
{ "policyId": "string", "assignedDeviceIds": ["string"] }
```

---

## Enums partagés (à respecter identiquement back/front)

- **Device status** : `online`, `offline`, `pending`
- **Policy type** : `screenTime`, `appBlock`, `schedule`
- **Command type** : `lock`, `wipe`, `reboot`
- **Command status** : `sent`, `failed`

---

## Exemple de config par type de policy

**screenTime**
```json
{ "dailyLimitMinutes": 120 }
```

**appBlock**
```json
{ "blockedPackages": ["com.example.app"] }
```

**schedule**
```json
{ "allowedFrom": "07:00", "allowedTo": "20:00" }
```

---

**Statut :** draft v1, non validé par le backend. À revoir ensemble dès que la personne backend commence les tickets 2/3/5/6/7/9/10/11.
