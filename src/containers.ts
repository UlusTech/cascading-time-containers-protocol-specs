/**
 * Time containers
 * @module
 */

import type { Brand } from "ts-brand";

export type CascadeID = Brand<string, "CascadeID">;

export type ContainerID = Brand<string, "ContainerID">;

type PosOnCascade = {
	start: { containerID: ContainerID; pos: number }[];
	end: { containerID: ContainerID; pos: number }[];
};

type ContainerSize =
	| {
			kind: "fixed";
			value: number;
	  }
	| {
			kind: "subTotal";
	  };

export type BaseContainer = {
	id: ContainerID;
};

export type Container = BaseContainer & {
	name: string;
	cascadeIDs: CascadeID[];
};

export type ContainerInCascade = BaseContainer & {
	size: ContainerSize;
	childrenIds: ContainerID[];
	cascadeID: CascadeID;
	pos: PosOnCascade;
};

// [key in CascadeID]: PosOnCascade

const AnCascadeID: CascadeID = "cascadeID" as CascadeID;
const _OtherCascadeID: CascadeID = "otherCascadeID" as CascadeID;

export const AnContainer: ContainerInCascade = {
	id: "xyz" as ContainerID,
	size: {
		kind: "fixed",
		value: 10,
	},
	childrenIds: [],
	cascadeID: AnCascadeID,
	pos: {
		start: [{ containerID: "xyz" as ContainerID, pos: 0 }],
		end: [{ containerID: "xyz" as ContainerID, pos: 1 }],
	},
};

export type StaticContainer = {
	kind: "static";
	size: number;
	pos: {
		start: object;
		end: number;
	};
	// parent: Container;
};

/**
 * ms has 1000 steps before becoming {@linkcode SecondsContainer}
 *
 * It actually does not becomes an second, but it gets to its new ms.
 * Like: "starts at 0, ends at 700" to "starts at 0:0 ends at 1:200", this means its in the first seconds 200th ms (idk if i said it right)
 */
export type MiliSecondsContainer = StaticContainer & {
	size: 1000;
};

/**
 * {@linkcode MunitesContainer}
 */
export type SecondsContainer = StaticContainer & {
	size: 60;
};

/**
 * {@linkcode HoursContainer}
 */
export type MunitesContainer = StaticContainer & {
	size: 60;
};

/**
 * {@linkcode MonthContainer}
 */
export type HoursContainer = StaticContainer & {
	size: 24;
};

/**
 * {@linkcode YearContainer}
 */
export type MonthContainer = StaticContainer & {
	size: 12;
};

/** */
export type YearContainer = StaticContainer;

export type DynamicContainer = {
	kind: "dynamic";
	size: number;
	pos: {
		start: number;
		end: number;
	};
	// parent: Container;
};

// export type Container = StaticContainer | DynamicContainer;

/**
 * Cascades contains containers
 */
export type Cascade = {
	containers: string;
};
