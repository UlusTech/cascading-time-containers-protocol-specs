/**
 * Salt-eklemeli olay logu + Lamport saati.
 *
 * Geçmiş = çözülmüş gelecek. Planlama ve "kayıt defteri" (uyku, diyet, doktor)
 * ayrı özellikler değil; aynı logun cepheden geride kalan yüzü.
 *
 * Fiziksel zaman federe sıralama için yetmez: bir *zaman* protokolü teklif
 * çakışmalarını çözmek için mantıksal saat ister. Buradaki ironi bilinçli.
 */

export type LogKind =
	| "observation"
	| "branch-forced"
	| "budget-changed"
	| "proposal-sent"
	| "proposal-received"
	| "decision-sent"
	| "decision-received"
	| "freebusy-query"
	| "freebusy-answer"
	| "capability-denied"
	| "unit-observed"
	| "plan-moved";

export interface LogEvent {
	seq: number;
	lamport: number;
	wall: string;
	kind: LogKind;
	note: string;
	data?: unknown;
}

export class EventLog {
	private seq = 0;
	lamport = 0;
	readonly events: LogEvent[] = [];

	/** yerel olay / giden mesaj */
	tick(): number {
		return ++this.lamport;
	}

	/** gelen mesaj: L = max(L, peer) + 1 */
	merge(peerLamport: number): number {
		this.lamport = Math.max(this.lamport, peerLamport) + 1;
		return this.lamport;
	}

	append(kind: LogKind, note: string, data?: unknown): LogEvent {
		const e: LogEvent = {
			seq: ++this.seq,
			lamport: this.lamport,
			wall: new Date().toISOString().slice(11, 19),
			kind,
			note,
			data,
		};
		this.events.push(e);
		return e;
	}

	tail(n = 40): LogEvent[] {
		return this.events.slice(-n).reverse();
	}
}

/**
 * Teklif çakışması çözümü: (lamport, nodeId) leksikografik sırası.
 * Duvar saati kullanılsa iki sunucu aynı ms'de farklı sonuca varabilir.
 */
export function proposalWins(
	a: { lamport: number; node: string },
	b: { lamport: number; node: string },
): boolean {
	if (a.lamport !== b.lamport) return a.lamport > b.lamport;
	return a.node > b.node;
}
