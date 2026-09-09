import type { Brand } from "ts-brand";
import type { ContainerID } from "./containers";

/**
 * One occurrence of a container.
 *
 * A {@linkcode ContainerID} is one record no matter how many places it sits in.
 * This is the thing that says *which* of those places. Meta data and engine data
 * hang on this, not on the container.
 */
export type PathSegmentRecordID = Brand<string, "PathSegmentRecordID">;

/**
 * A segment is one occurrence and nothing else.
 *
 * It carries no parent and no pos. Who holds it and in what order is the
 * {@linkcode Cascade}'s job — two encodings of one tree drift, and order can
 * not be derived from parenthood while parenthood can be derived from order.
 *
 * A segment exists only when it carries something the walk-up does not.
 * "Entry talk" inside a dinner party with no time gets one segment; give it
 * 16:35 of its own and it gets a second, under the time chain.
 * Segment present means it draws as its own block. Absent means it draws as a
 * list element inside whatever holds it.
 */
export type PathSegmentRecord = {
	id: PathSegmentRecordID;
	containerId: ContainerID;
};

/**
 * A concrete path is a chain of occurrences, and the leaf already chains all
 * the way to the root through the cascades. So the leaf *is* the path.
 *
 * Not an array of {@linkcode PathSegmentRecordID}s — that is this with extra
 * steps. Not a string either; two "big-talk"s in one dinner party stringify
 * identically, so a string can never be identity.
 */
export type Path = PathSegmentRecordID;

/**
 * The head of a {@linkcode ContainerID}, or the whole of one.
 *
 * `["utc", "minute"]` names no container — only `["utc", "minute", "30"]` does.
 * An incomplete array is not an id that secretly means "many"; it is a shape,
 * and it lives in {@linkcode Pattern} where being a shape is the point.
 */
export type ContainerIDPrefix = readonly string[];

/**
 * A shape that many occurrences share. This is recurrence.
 *
 * A {@linkcode Path} is a chain of occurrences. A pattern is a chain of
 * identities, so it matches wherever that identity appears. You do not write a
 * recurrence rule; you address one level up.
 *
 * Every September 6th, any year:
 * ```
 * { anchor: null, tail: [["gregorian", "month", "09"], ["gregorian", "day", "06"]] }
 * ```
 *
 * Every minute of one specific hour:
 * ```
 * { anchor: sHour, tail: [["utc", "minute"]] }
 * ```
 *
 * TODO: Must {@linkcode tail} match a contiguous run ending at the matched
 * container, or may it skip levels? Contiguous is indexable. Skipping turns
 * matching into a subsequence search with nothing to lean on.
 */
export type Pattern = {
	/**
	 * Concrete occurrence the match starts under. `null` means anywhere, which
	 * is what makes "every year" fall out with no token for it.
	 */
	anchor: PathSegmentRecordID | null;
	/**
	 * Matched left to right. Each element matches any container whose id starts
	 * with it, so `["utc", "minute"]` takes all sixty.
	 */
	tail: readonly ContainerIDPrefix[];
};
