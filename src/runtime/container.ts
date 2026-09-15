import { type Brand, make } from "ts-brand";

/**
 * Separator used to join a {@linkcode RawContainerID} into a
 * {@linkcode ContainerID}.
 */
const CONTAINER_ID_SEPARATOR = ".";

/**
 * A segment may not contain {@linkcode CONTAINER_ID_SEPARATOR}, otherwise
 * {@linkcode getContainerIDFromRaw} and {@linkcode getRawContainerID} stop
 * round-tripping.
 */
const CONTAINER_ID_SEGMENT_PATTERN = /^[^.]+$/;

/** One or more segments joined by {@linkcode CONTAINER_ID_SEPARATOR}. */
const CONTAINER_ID_PATTERN = /^[^.]+(?:\.[^.]+)*$/;

export type ContainerIDSegment = Brand<string, "ContainerIDSegment">;

export type RawContainerID = ContainerIDSegment[];

export type ContainerID = Brand<string, "ContainerID">;

/**
 * Parses a string into a {@linkcode ContainerIDSegment}.
 *
 * Passes: `"a"`, `"test-container"`, `"A_b"`, `"9"`, `"üç"`.
 * Fails: `""`, `"."`, `"a.b"`.
 *
 * Whitespace is currently accepted
 *
 * @throws If the value contains {@linkcode CONTAINER_ID_SEPARATOR} or is empty.
 */
export const ContainerIDSegment = make<ContainerIDSegment>((value) => {
	if (!CONTAINER_ID_SEGMENT_PATTERN.test(value)) {
		throw new Error(`Invalid ContainerIDSegment: ${value}`);
	}
});

/**
 * Parses a string into a {@linkcode ContainerID}.
 *
 * Passes: `"a"`, `"a.b"`, `"a.b.c"`, `"test-container"`.
 * Fails: `""`, `"."`, `".a"`, `"a."`, `"a..b"`
 *
 * Can have whitespace
 *
 * @throws If the value is not a separator-joined run of non-empty segments.
 */
export const ContainerID = make<ContainerID>((value) => {
	if (!CONTAINER_ID_PATTERN.test(value)) {
		throw new Error(`Invalid ContainerID: ${value}`);
	}
});

export function getContainerIDFromRaw(
	rawContainerID: RawContainerID,
): ContainerID {
	return ContainerID(rawContainerID.join(CONTAINER_ID_SEPARATOR));
}

export function getRawContainerID(containerID: ContainerID): RawContainerID {
	return containerID
		.split(CONTAINER_ID_SEPARATOR)
		.map((segment) => ContainerIDSegment(segment));
}

export type Container = {
	id: RawContainerID;
	/** I dont plan to use this, they sit here dummy */
	childirens: ContainerID[];
	/** I dont plan to use this, they sit here dummy */
	parents: ContainerID[];
};

export type ContainerMetaData = { something: unknown };
