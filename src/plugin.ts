import type { Brand } from "ts-brand";

/**
 * This is provided by the plugin itself.
 */
export type PluginID = Brand<string, "PluginID">;

/**
 * Base things an plugin needs to store with its custom ones
 *
 * This way, plugins can use each others data.
 * For example; theme config from SyncTheme can be read by ever other plugin by searhing other plugins sub elements like bgColor.
 *
 * TODO: Build this, so plugins can build around this.
 */
export type PluginContainerMetaData = { something: unknown };

/**
 * Data for plugins that changes runtime behavior.
 *
 * This way, multiple plugins that touch to engine can know each others data.
 * // (isolation can be considered in the future)
 *
 * TODO: Build this, so plugins can build around this.
 */
export type PluginContainerEngineData = { something: unknown };
