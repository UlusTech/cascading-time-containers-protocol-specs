import type { PathSegmentRecordID } from "./path";

/**
 * The interior of one occurrence, in order.
 *
 * Waterfall. One water molecule pushes another. The index is the order and the
 * order is time — there is no pos field, because a number lets two members both
 * claim 3 and an array can not represent that at all.
 *
 * This is the source of truth for the whole tree.
 */
export type Cascade = {
	/**
	 * `null` is the root cascade — the containers that sit in nothing.
	 */
	owner: PathSegmentRecordID | null;
	members: PathSegmentRecordID[];
};
