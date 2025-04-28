import {
  EmbedBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
} from "discord.js";

export default {
  name: "help",
  aliases: ["h"],
  category: "Utility",
  desc: "📜 Displays all available commands!",
  options: {
    owner: false,
    inVc: false,
    sameVc: false,
    player: {
      playing: false,
      active: false,
    },
    premium: false,
    vote: false,
  },

  /**
   * @param {{ client: import("../../../Struct/Client"), message: import("discord.js").Message }}
   */
  run: async ({ client, message }) => {
    const helpEmbed = new EmbedBuilder()
      .setColor("#5865F2") // Discord blurple color
      .setAuthor({
        name: `${client.user.username} Help Center 💡`,
        iconURL: client.user.displayAvatarURL(),
      })
      .setDescription(
        `Olá **${message.author.username}**! 👋\n\n` +
          `Eu sou o **${client.user.username}**, um **bot de música** meio bosta dos ludibriadores!\n` +
          `🎵 Músicas, 📜 filtros, e quase mais nada!\n\n` +
          `Clique em algum dos botões abaixo para informações específicas.`
      )
      .addFields({
        name: "📂 Catiguria",
        value:
          "🎼 **Música**\n🎚 **Filtros**\n⚙️ **Utilidades**\n🔍 **Fontes**\n\n🔗 "})
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
      .setFooter({
        text: "Peipei mais um que eu ludibriei 🎶",
        iconURL: message.guild.iconURL({ dynamic: true }),
      });

    // Buttons
    const buttons = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setStyle(ButtonStyle.Secondary)
        .setCustomId("music")
        .setEmoji("🎼")
        .setLabel("Music"),
      new ButtonBuilder()
        .setStyle(ButtonStyle.Secondary)
        .setCustomId("filters")
        .setEmoji("🎚")
        .setLabel("Filters"),
      new ButtonBuilder()
        .setStyle(ButtonStyle.Secondary)
        .setCustomId("utility")
        .setEmoji("⚙️")
        .setLabel("Utility"),
      new ButtonBuilder()
        .setStyle(ButtonStyle.Secondary)
        .setCustomId("sources")
        .setEmoji("🔍")
        .setLabel("Sources")
    );

    const messageResponse = await message.reply({
      embeds: [helpEmbed],
      components: [buttons],
    });

    const collector = messageResponse.createMessageComponentCollector({
      filter: (interaction) => interaction.user.id === message.author.id,
      time: 60000, // 1-minute timeout
    });

    collector.on("collect", async (interaction) => {
      const category = interaction.customId;

      const commandCategories = {
        music: {
          title: "🎼 Music Commands",
          commands: [
            "24/7",
            "Autoplay",
            "Clear",
            "Disconnect",
            "Grab",
            "Join",
            "Loop",
            "Lyrics",
            "Pause",
            "Play",
            "Previous",
            "Queue",
            "Remove",
            "Resume",
            "Search",
            "Seek",
            "Shuffle",
            "Skip",
            "SoundCloud",
            "Spotify",
            "Stop",
            "Volume",
          ],
        },
        filters: {
          title: "🎚 Filter Commands",
          commands: [
            "8D",
            "Bass",
            "Bassboost",
            "Chipmunk",
            "China",
            "Dance",
            "Darth Vader",
            "Daycore",
            "DoubleTime",
            "TrebleBass",
          ],
        },
        utility: {
          title: "⚙️ Utility Commands",
          commands: [
            "Invite",
            "Ping",
            "Prefix",
            "Stats",
            "Support",
            "Uptime",
            "Vote",
          ],
        },
        sources: {
          title: "🔍 Source Commands",
          commands: ["Musixmatch", "Deezer", "SoundCloud", "Spotify"],
        },
      };

      const selectedCategory = commandCategories[category];

      if (!selectedCategory) return;

      const categoryEmbed = new EmbedBuilder()
        .setColor("#5865F2")
        .setTitle(selectedCategory.title)
        .setDescription(`\`\`\`${selectedCategory.commands.join(", ")}\`\`\``);

      await interaction.reply({ embeds: [categoryEmbed], ephemeral: true });
    });

    collector.on("end", () => {
      messageResponse.edit({ components: [] }).catch(() => {});
    });
  },
};
