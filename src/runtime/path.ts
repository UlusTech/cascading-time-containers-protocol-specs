/**
 * We store paths on the db in a separte way.
 * Why?
 * Not sure as im writing this.
 *
 * @module
 */
import type { Brand } from "ts-brand";
import type { ContainerID } from "./container";

/**
 * Every path segment has an id
 */
export type PathSegmentID = Brand<string, "PathSegmentID">;

/**
 * Path segments gets used multiple times,
 * helps showing relations
 */
export type PathSegmentRecord = {
	id: PathSegmentID;
	containerID: ContainerID;
};

/**
 * Every path has an id to store in the db
 */
export type PathID = Brand<string, "PathID">;

/**
 * Paths are stored
 */
export type PathRecord = {
	id: PathID;
	/**
	 * I dont know if this is the right thing.
	 *
	 * I was using {@linkcode ContainerID} but than i said; "why?".
	 * So we started storing the segment, but do we have it in the `segments`?
	 * I dont know if this makes sens but we need this for indexin? idk.
	 */
	containerSegment: PathSegmentID;
	segments: PathSegmentID[];
};

/**
 * The actual path we have.
 *
 * I dont know if this makes sens, because segments has tehir own ids;
 * i guess the paths should made up from segment ids now.
 * But its not user friendly, and not easy to use on other systems.
 *
 * TODO: Fix this segment crysis.
 */
export type ContainerPath = Brand<string, "ContainerPath">;
