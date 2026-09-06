/**
 * Time containers.
 *
 * {@linkcode Container}s holds containers in them, so they create cascades.
 * Every container insade that container has an pos, so they push each other.
 * Order is time. X comes before Y, and Z is right next of the Y. So X is before for Y, Z is after.
 *
 * If you want to create the classical calendar system we have, you need to invent it seperately.
 * Containers are there for the Freely express anything. There is no direct relations between containers and celandar blocks.
 *
 * If you want to create an calendar system, you create an plugin that adds meta and engine data to containers;
 * than you add those containers insade of your own custom codded (Custom UI and working logic) containers. Those behave in the way you want.
 * So you design an UI that you can see the containers in a classical time system, and move them insade the dates and stuff.
 * You can not create every minute on every year, so you cheat a bit; you dont make every year real. You make one year and use it multiple times.
 * The ones that store data will store it.
 *
 * @module
 */
/** biome-ignore-all lint/correctness/noUnusedVariables: <We are working on un-used data to design how system works.> */

import type { Brand } from "ts-brand";
import type {
	PluginContainerEngineData,
	PluginContainerMetaData,
	PluginID,
} from "./plugin";

/**
 * Every container has its own uniqe ID.
 */
type ContainerID = Brand<string, "ContainerID">;

/**
 * An container is actually an box, that can have boxes insade of it; and be in boxes.
 *
 * The "box" you see in most calendars can not host other ones, to you have single depth.
 * This is fixed by making containers be able to contain others insade of it. See {@linkcode parents} and {@linkcode childirens}.
 *
 * An container might be in multiple containers, and their order only depends on each parent container.
 * So one container can be insade multiple, and that does not (necessarily) bothers others. See {@linkcode childirens}.
 *
 * An container being insade of an other container does not means it needs an position on that containers parent.
 * So "Big talk" can be insade the "Dinner event" but it does not needs to be a childiren of the time containers.
 *
 * Order is "when", and it does not needs to correspond to a spesific container, like a day, hour, minute or second.
 * They can, if you want them to.
 *
 * Containers are arragend by an engine that checks for conditions, moves with conditions, predicts and plans.
 * This way, you always have an up-to-date calendar, with no conflicts.
 *
 * TODO: We need to think about the "path" things.
 * We have a logic called "path", it makes you be able to get a spesific container on reqursive systems.
 * Like "gregorian-year/2026/gregorian-month/09/gregorian-day/06/utc-hour/16/utc-minute/30/dinner-event" is the event at 06-09-2026 16:30
 * But there can be an other dinner event that is at 2027 or 2025.
 * You should be able to generative/reqursive container logic.
 * Single container at multiple dates, and does not crosses each other. Like when one gets delayed, other ones stay same.
 * Think about this. This is important.
 */
type Container = {
	/**
	 * The uniqe identifier of this container
	 */
	id: ContainerID;
	/**
	 * Every container stores where it is on its parent.
	 *
	 * TODO: Question if we should do {@linkcode parents} reverse. Insted of parents hosting the pos, childiren holding it.
	 */
	parents: ContainerID[];
	/**
	 * Every container has its childiren listed.
	 * Currently, you get a containers pos by getting that parents chiliren list.
	 * This is in a better way for simulations, data sync is important.
	 */
	childirens: { [key in ContainerID]: number };
};

/**
 * The meta data helps UI to be better.
 * Engine or plugins does not uses this meta data, its for UI and stuff.
 */
type ContainerMetaData = {
	/**
	 * The human readable name of it.
	 * Usually, a better looking version of id.
	 */
	name: string;
	/**
	 * For hover info and etc
	 */
	details: string;
	/**
	 * Usually UI falls back to {@linkcode icon} if not provided
	 */
	image: URL;
	/**
	 * Usually UI falls back to {@linkcode image} if not provided
	 */
	icon: URL;
	plugins: {
		[key in PluginID]: PluginContainerMetaData;
	};
};

/**
 * Record might not be the right thing, but this is the shape when its stored.
 * See {@linkcode ContainerMetaData}.
 */
type ContainerMetaDataRecord = ContainerMetaData & { id: ContainerID };

/**
 * {@linkcode Container} and its meta data ({@linkcode ContainerMetaData}) together.
 */
type ContainerWithMetaData = Container & ContainerMetaData;

/**
 * Engine data is there for to help the runtime (idk should we call it engine or runtime, TODO: Think about wording.) run.
 *
 * It has information for moving and stuff.
 * The formulas to move, the conditions and stuff.
 *
 * TODO: Write this part when working on engine
 * // Maybe move these to an seperate file? idk.
 */
type ContainerEngineData = {
	plugins: {
		[key in PluginID]: PluginContainerEngineData;
	};
};

/**
 * Record might not be the right thing, but this is the shape when its stored.
 * See {@linkcode ContainerEngineData}.
 */
type ContainerEngineDataRecord = ContainerEngineData & { id: ContainerID };

/**
 * {@linkcode Container} and its engine data ({@linkcode ContainerEngineData}) together.
 */
type ContainerWithEnginData = Container & ContainerEngineData;
