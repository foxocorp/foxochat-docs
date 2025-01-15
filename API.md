API Documentation here: https://docs.foxogram.su/

# Endpoints
- `https://api.foxogram.su` - Production
- `https://api.dev.foxogram.su` - Development

# User types
- `1` - User
- `2` - Bot

# User flags
- `1 << 0` (1) - Awaiting confirmation
- `1 << 1` (2) - Email verified
- `1 << 2` (4) - Disabled

# Channel types
- `1` - DM
- `2` - Group
- `3` - Channel

# Member permissions
- `1 << 0` (1) - Admin
- `1 << 1` (2) - Ban members
- `1 << 2` (4) - Kick members
- `1 << 3` (8) - Manage messages
- `1 << 4` (16) - Manage channel
- `1 << 5` (32) - Attach files
- `1 << 6` (64) - Send messages

# Error codes
### User errors
- `100` - Not found
- `101` - Email not verified
- `102` - Credentials duplicate
- `103` - Credentials is invalid
- `104` - Unauthorized

### Channel errors
- `200` - Not found
- `201` - Already exist

### Member errors
- `300` - Not found
- `301` - Already exist
- `302` - Missing permissions

### Message erros
- `400` - Not found

### Code errors (Email verification code)
- `500` - Is invalid
- `501` - Expired
- `502` - Wait to resend

### CDN errors
- `600` - Upload failed
- `601` - Invalid file format

### API errors
- `700` - Rate limit exceeded
- `701` - Empty body
- `702` - Validation error
- `703` - Route not found
