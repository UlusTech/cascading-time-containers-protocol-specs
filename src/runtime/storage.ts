/**
 * For now, we only store on memory.
 * @module
 */

import type { Cascade } from "./cascade";
import {
	type Container,
	ContainerID,
	type ContainerMetaData,
} from "./container";
import type {
	PathID,
	PathRecord,
	PathSegmentID,
	PathSegmentRecord,
} from "./path";

export enum StoreTable {
	Container = "container",
	Segment = "segment",
	Path = "path",
	Cascade = "cascade",
	Meta = "meta",
	Engine = "engine",
}

type ContainerMap = Map<ContainerID, Omit<Container, "id">>;

type SegmentMap = Map<PathSegmentID, Omit<PathSegmentRecord, "id">>;

type PathMap = Map<PathID, Omit<PathRecord, "id">>;

type CascadeMap = Map<ContainerID, Cascade["childiren"]>;

type MetaDataMap = Map<ContainerID, ContainerMetaData>;

type EngineDataMap = Map<ContainerID, Record<string, unknown>>;

export type MemoryStoreSchema = {
	[StoreTable.Container]: ContainerMap;
	[StoreTable.Segment]: SegmentMap;
	[StoreTable.Path]: PathMap;
	[StoreTable.Cascade]: CascadeMap;
	[StoreTable.Meta]: MetaDataMap;
	[StoreTable.Engine]: EngineDataMap;
};

export const InMemoryStore = (() => {
	const containerStore: ContainerMap = new Map([
		[ContainerID("test-container"), { childirens: [], parents: [] }],
	]);
	const segmentStore: SegmentMap = new Map();
	const pathStore: PathMap = new Map();
	const cascadeStore: CascadeMap = new Map();
	const metaStore: MetaDataMap = new Map();
	const engineStore: EngineDataMap = new Map();

	return {
		[StoreTable.Container]: containerStore,
		[StoreTable.Segment]: segmentStore,
		[StoreTable.Path]: pathStore,
		[StoreTable.Cascade]: cascadeStore,
		[StoreTable.Meta]: metaStore,
		[StoreTable.Engine]: engineStore,
	} as const satisfies MemoryStoreSchema;
})();
