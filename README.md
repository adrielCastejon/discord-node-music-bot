# Discord Music Bot

A powerful Discord music bot built with Node.js, Discord.js, and MongoDB. This bot offers premium music features including multi-platform support for YouTube, Spotify, and Deezer, along with advanced playback controls and voting system.

## ✨ Features

- 🎵 **Multi-platform Support**: Play music from YouTube, Spotify, and Deezer
- 📃 **Playlist Support**: Load and play entire playlists
- 🎚️ **Advanced Controls**: Adjust volume, pitch, and seek within tracks
- 🗳️ **Voting System**: Community voting features
- 🔄 **Real-time Updates**: Webhook integration for instant command responses
- 💾 **Persistent Data**: MongoDB integration for settings and preferences

## 📋 Requirements

- Node.js 22.14.0 or higher
- MongoDB database
- Discord Bot Token

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/discord-music-bot.git
   cd discord-music-bot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Rename the `.env-example` file to `.env` and add your bot token to TOKEN:
   ```
   TOKEN=your_discord_bot_token
   ```

4. Configure your Discord application to use webhooks in the Discord Developer Portal

5. Start the bot:
   ```bash
   npm start
   ```

## 📝 Commands

### Music Playback
| Command | Description | Usage |
|---------|-------------|-------|
| `!play` | Play a song or add to queue | `!play <song name/URL>` |
| `!pause` | Pause the current track | `!pause` |
| `!resume` | Resume playback | `!resume` |
| `!stop` | Stop playback and clear queue | `!stop` |
| `!seek` | Seek to a specific position | `!seek <time in seconds>` |
| `!skip` | Skip the current song | `!skip` |

### Queue Management
| Command | Description | Usage |
|---------|-------------|-------|
| `!queue` | Display the current queue | `!queue` |
| `!clear` | Clear the current queue | `!clear` |
| `!remove` | Remove a specific song from queue | `!remove <position>` |
| `!shuffle` | Shuffle the current queue | `!shuffle` |

### Audio Controls
| Command | Description | Usage |
|---------|-------------|-------|
| `!volume` | Adjust playback volume | `!volume <0-100>` |
| `!pitch` | Adjust pitch of current track | `!pitch <value>` |
| `!bass` | Adjust bass levels | `!bass <value>` |
| `!loop` | Toggle loop mode | `!loop <song/queue/off>` |

### Voting System
| Command | Description | Usage |
|---------|-------------|-------|
| `!vote` | Start a vote | `!vote <option>` |
| `!voteskip` | Vote to skip current track | `!voteskip` |
| `!voteresults` | Show voting results | `!voteresults` |

### Configuration
| Command | Description | Usage |
|---------|-------------|-------|
| `!settings` | Display bot settings | `!settings` |
| `!prefix` | Change command prefix | `!prefix <new prefix>` |
| `!language` | Change bot language | `!language <lang code>` |

## 🔧 Advanced Configuration

The bot uses MongoDB to store guild-specific settings. You can configure default behavior per server using the settings command or by directly modifying the database.

### Webhook Integration

This bot accepts webhooks directly from Discord, providing real-time command feedback. Configure your webhook endpoints in the Discord Developer Portal and ensure your server has the appropriate permissions.
