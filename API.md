API Documentation here: https://docs.foxogram.su/

# Endpoints
- `https://api.foxogram.su` - Production
- `https://api.dev.foxogram.su` - Development

# User types
- `1` - User
- `2` - Bot

# User flags
- `1` - Awaiting confirmation
- `2` - MFA enabled
- `4` - Email verified
- `8` - Disabled

# Channel types
- `1` - DM
- `2` - Group
- `3` - Channel

# Member permissions
- `1` - Admin
- `2` - Ban members
- `4` - Kick members
- `8` - Manage messages
- `16` - Manage channel
- `32` - Attach files
- `64` - Send messages

# Error codes
- `101` - Message not found
- `201` - Channel not found
- `301` - User not found
- `302` - User email not verified
- `303` - User credentials duplicate
- `304` - User credentials is invalid
- `305` - User unauthorized
- `401` - Member in channel not found
- `402` - Member already in channel
- `403` - Missing permissions
- `501` - Code is invalid
- `502` - Code expired
- `503` - Need to wait before resend
- `601` - TOTP key is invalid
- `602` - MFA is invalid
