# Member

## Member object

| Field       | Type                                     | Description                                                                                   |
|-------------|------------------------------------------|-----------------------------------------------------------------------------------------------|
| id          | long                                     |                                                                                               |
| user        | [user](user#user-object) object          |                                                                                               |
| channel?    | [channel](channel#channel-object) object | not null only in GET `/channels/{id}/members/{memberId}` and PUT `/channels/{id}/members/@me` |
| permissions | long                                     | [member permissions](member#member-permissions)                                               |
| joined_at   | timestamp                                |                                                                                               |

## Member permissions

| Value         | Permission      | Description                                                       |
|---------------|-----------------|-------------------------------------------------------------------|
| `1 << 0` (1)  | ADMIN           | Allows all permissions and bypasses channel permission overwrites |
| `1 << 1` (2)  | BAN_MEMBERS     | Allows banning members                                            |
| `1 << 2` (4)  | KICK_MEMBERS    | Allows kicking members                                            |
| `1 << 3` (8)  | MANAGE_MESSAGES | Allows for deletion of other users messages                       |
| `1 << 4` (16) | MANAGE_CHANNEL  | Allows management and editing of the channel                      |
| `1 << 5` (32) | ATTACH_FILES    | Allows for uploading images and files                             |
| `1 << 6` (64) | SEND_MESSAGES   | Allows for sending messages in a channel                          |
