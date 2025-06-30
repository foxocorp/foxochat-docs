# User

## User object

| Field             | Type                                               | Description                                                   |
|-------------------|----------------------------------------------------|---------------------------------------------------------------|
| id                | long                                               |                                                               |
| avatar            | [attachment](attachment#attachment-object) object  |                                                               |
| display_name      | string                                             |                                                               |
| username          | string                                             | username in lowercase, special characters `-` and `_` allowed |
| email?            | string                                             | not null only in GET and PATCH `/users/@me`                   |
| channels?         | array of [channel](channel#channel-object) objects | not null only in GET and PATCH `/users/@me`                   |
| status            | integer                                            | [user status](user#user-statuses)                             |
| status_updated_at | timestamp                                          |                                                               |
| flags             | long                                               | [user flags](user#user-flags)                                 |
| type              | integer                                            | [user type](user#user-types)                                  |
| created_at        | timestamp                                          |                                                               |

## User statuses

| Value | Type    |
|-------|---------|
| 0     | OFFLINE |
| 1     | ONLINE  |

## User flags

| Value        | Flag                  | Description                      |
|--------------|-----------------------|----------------------------------|
| `1 << 0` (1) | AWAITING_CONFIRMATION | User wait for email confirmation |
| `1 << 1` (2) | EMAIL_VERIFIED        | User has a verified email        |
| `1 << 2` (4) | DISABLED              | User disabled                    |

## User types

| Value | Type |
|-------|------|
| 1     | USER |
| 2     | BOT  |
