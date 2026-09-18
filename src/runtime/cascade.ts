import type { ContainerID } from "./container";

type CascadeChildiren = { size: number } | { size: number; id: ContainerID };

export type Cascade = { parent: ContainerID; childiren: CascadeChildiren[] };
