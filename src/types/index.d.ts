declare module 'discord.js' {
  interface ChatInputCommandInteraction {
    main: typeof import('../index');
  }
}

declare module '_localizations.json' {
  const commands: { [commandName: string]: import('discord.js').LocalizationMap }
  export default commands;
}

declare module 'config.jsonc' {
  const config: IConfig;
  export default config;
}

export interface IConfig {
  discord_token: string; 
  guild_id: string; 
  channel_id: string; 
  port: number; 
  language: string; 
  timezone: string; 
  prefix: string; 
  command_role_id: string[];
  ready_message: boolean; 
  delete_color_prefix: boolean;
  use_custom_regex: boolean;
  scripts_entry: string;
  command_version: import('socket-be').VersionResolvable;
  debug: boolean;
}