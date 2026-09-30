import type { PathSegmentID } from "./path";

/**
 * Childiren of cascades can have sizes.
 *
 * Sometimes an child just exist, and sometime it has a size.
 * They also can exist co-along.
 * Also, there are containerless sizes, which acts like spaces.
 *
 * # Why?
 * Containers being able to have their own size, without depending on each other makes the cascade has a size.
 * So when you want something to have an pos or size, you can just use these. Because size also means pos in this cascade right?
 * That means we have calculateable poses, and size.
 *
 * We use {@linkcode PathSegmentID} because wather a container being insade of something or not can depend on its path.
 * And the segment idea of ours makes paths be able to depend on each other, point to each other, use same roots and stuff.
 * So path segments shows if an path is related with others. This also helps with search too.
 * So when we have them on cascades, we can think of the ordering with it.
 *
 * > I have originally only tought of cascades and had no idea on paths, so this idea is new.
 */
type CascadeChildiren =
	| { size: number; id: PathSegmentID } // Should be a tuple?
	| number
	| PathSegmentID;

export type Cascade = { parent: PathSegmentID; childiren: CascadeChildiren[] };
