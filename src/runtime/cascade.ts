import type { PathSegmentID } from "./path";

type CascadeChildiren =
	| { size: number; id: PathSegmentID } // Should be a tuple?
	| number
	| PathSegmentID;

export type Cascade = { parent: PathSegmentID; childiren: CascadeChildiren[] };
