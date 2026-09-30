---
topic: How time works in cryptocurrency systems (block clocks, timelocks, schedules, governance, external time, reporting) as input to CTCP
date: 2026-09-30
sources read with dates:
  - https://en.bitcoin.it/wiki/Timelock (fetched 2026-09-30, via summarising fetcher)
  - https://en.bitcoin.it/wiki/Block_timestamp (fetched 2026-09-30)
  - https://developer.bitcoin.org/devguide/block_chain.html (fetched 2026-09-30)
  - https://ethereum.org/developers/docs/consensus-mechanisms/pos/ (fetched 2026-09-30)
  - https://ethereum.org/developers/docs/consensus-mechanisms/pos/gasper/ (fetched 2026-09-30)
  - https://ethereum.org/developers/docs/blocks/ (fetched 2026-09-30)
  - https://docs.cosmos.network/sdk/latest/modules/staking/README (fetched 2026-09-30)
status: research — not yet promoted to .context/
---

# Time in cryptocurrency systems

## Method and limits

Seven pages were fetched. Each fetch went through a summarising tool, so quotes are what that tool returned, not raw page text. Search was rate-limited, so no search was run. Everything not in the "Verified" sections is **from memory** and marked `[memory]`. Memory items with exact numbers (fork timestamps, oracle heartbeats, governance parameters) need a primary-source check before anyone relies on them. Nothing here is investment advice.

## 1. Verified facts (each with URL)

### Bitcoin
- Difficulty: "Every 2,016 blocks, the network uses timestamps stored in each block header to calculate the number of seconds elapsed between generation of the first and last of those last 2,016 blocks." Target span is 1,209,600 s (two weeks). Adjustment is bounded: up to 300% increase, up to 75% decrease. https://developer.bitcoin.org/devguide/block_chain.html
- Coinbase outputs cannot be spent for at least 100 blocks; the stated reason is that the block might become stale after a reorganisation. https://developer.bitcoin.org/devguide/block_chain.html
- Block timestamp validity: greater than the median timestamp of the previous 11 blocks, and less than network-adjusted time + 2 hours. https://en.bitcoin.it/wiki/Block_timestamp
- nLockTime: since July 2016 it is compared against median time past, not the block's own timestamp. https://en.bitcoin.it/wiki/Timelock
- CLTV (BIP65, late 2015): script fails unless the transaction's nLockTime is equal to or greater than the given parameter. https://en.bitcoin.it/wiki/Timelock
- CSV (BIP68/112/113, mid 2016): script fails unless nSequence shows at least the given relative locktime has passed. Maximum is 65535 blocks (~455 days) or 65535 x 512 s (~388 days). https://en.bitcoin.it/wiki/Timelock

### Ethereum
- Time is divided into 12-second slots; epochs are 32 slots. https://ethereum.org/developers/docs/consensus-mechanisms/pos/
- One validator is chosen per slot to propose a block; if all are online there is a block every slot. Block time is 12 s only under that assumption. https://ethereum.org/developers/docs/blocks/
- A committee of validators is chosen each slot; every active validator attests once per epoch, not every slot. https://ethereum.org/developers/docs/consensus-mechanisms/pos/
- Finality: only epoch-boundary blocks (checkpoints) can be justified and finalized; a two-thirds supermajority link between two successive checkpoints is needed; finalized blocks cannot be reverted short of an attacker destroying at least 1/3 of staked ether. https://ethereum.org/developers/docs/consensus-mechanisms/pos/gasper/
- Inactivity leak begins when the chain has failed to finalize for more than four epochs. https://ethereum.org/developers/docs/consensus-mechanisms/pos/gasper/

### Cosmos SDK staking
- Unbonding time is a chain-specific parameter; the docs' example is `unbonding_time: 1814400s` (21 days). The completion time is "a full unbonding period from the current time". https://docs.cosmos.network/sdk/latest/modules/staking/README
- Tokens remain slashable during unbonding for offences committed while they were bonded. Same URL.

## 2. From memory (unverified) `[memory]`

### Bitcoin
- 10-minute block time is a target. Actual intervals are roughly exponential (a Poisson-like process); hash-rate growth makes blocks faster than 10 min between adjustments, and hash-rate drops make them slower. `[memory]`
- The 2016-block retarget has a known off-by-one (it measures 2015 intervals). `[memory]`
- Halving every 210,000 blocks (~4 years). Past dates: block 210,000 on 2012-11-28; 420,000 on 2016-07-09; 630,000 on 2020-05-11; 840,000 on 2024-04-20. Next is block 1,050,000, commonly predicted for around April 2028. `[memory]`
- Why the predicted date drifts: the height is fixed, the date is height times average block interval. Any change in hash rate shifts the interval, so the estimate moves for months and converges only near the end. Public countdown sites show an estimate, not a schedule. `[memory]`
- nLockTime values below 500,000,000 are block heights; at or above that they are Unix times. The relative-lock bit in nSequence selects blocks vs 512-second units. `[memory]`
- The 2-hour future limit and a 2015-interval retarget together enable the "time warp" attack; a fix was proposed (BIP54 / consensus cleanup) but I cannot confirm its status. `[memory]`
- Timestamps can be non-monotonic: a block may carry an earlier timestamp than its parent as long as it beats the median of 11. `[memory]`

### Ethereum
- Genesis of the beacon chain 2020-12-01 12:00:23 UTC; the Merge on 2022-09-15. `[memory]`
- Fork activation after the Merge is by epoch (Capella/Shapella at epoch 194048, 2023-04-12 ~22:27 UTC; Deneb/Dencun at epoch 269568, 2024-03-13 ~13:55 UTC; Electra/Pectra at epoch 364032, 2025-05-07 ~10:05 UTC). Before the Merge, forks were scheduled by block number. Some execution-layer forks use timestamps. Dates are computable from epoch because slot time is fixed. `[memory]`
- A missed slot leaves a gap: the next block's timestamp is still slot-derived, so timestamps jump by a multiple of 12 s. `[memory]`
- Finality typically arrives after about two epochs (~12.8 min): justified after one, finalized on the next. `[memory]`
- Short reorgs of 1 to a few slots are normal; a 7-block beacon reorg was reported in May 2022. `[memory, unsure of detail]`
- Validator exit queue: exits are rate-limited by a churn limit; withdrawal after exit adds a delay; queue lengths have varied from none to weeks. `[memory]`

### Reorgs and confirmation depth
- Bitcoin convention: 6 confirmations (~1 hour) is folk wisdom for high value; exchanges pick their own depth per asset. `[memory]`
- Exchanges credit deposits after a chain-specific depth. A deposit shown at 2/6 can disappear if reorganised. `[memory]`
- A reorg changes which block a transaction sits in, and therefore its block timestamp. `[memory]`

### Token and staking schedules
- Vesting: typical shape is a cliff (e.g. 12 months, nothing unlocks) then linear monthly or per-block/second release over e.g. 36 more months. Contracts often count in seconds (block.timestamp) or blocks. `[memory]`
- Unlock calendars are third-party sites that publish dates as UTC days. Team-published schedules often say "monthly on the 1st", and a contract's actual first unlock depends on deployment or TGE time. `[memory]`
- Unbonding varies by chain: Cosmos Hub 21 days; other chains 7 to 28 days (e.g. Osmosis 14). Polkadot 28 days (era-based). `[memory]`
- Liquid-staking withdrawal times vary with the exit queue. `[memory]`

### Governance
- Compound-style Governor: voting delay and voting period counted in blocks (e.g. ~3 days as ~19,700 blocks at 12 s), then a Timelock delay (often 2 days) before execution, plus an expiry ("grace") window. OpenZeppelin Governor supports either block-number or timestamp clocks (ERC-6372). `[memory]`
- Because the block count is fixed and block time was not, a "3-day" vote could really run 2.5 to 3.5 days on proof-of-work Ethereum. On Ethereum PoS it is far tighter but missed slots still exist. `[memory]`
- Cosmos governance: voting period is a duration (e.g. 14 days on Cosmos Hub; earlier 21) not blocks. `[memory]`

### Distribution and trading
- Airdrop eligibility uses a snapshot at a block height or timestamp, usually announced in advance, sometimes after the fact. Users move assets before a known snapshot. `[memory]`
- Perpetual futures funding: every 8 h on Binance (00:00, 08:00, 16:00 UTC); some venues hourly (e.g. Hyperliquid). Position held across the timestamp pays or receives; one second before vs after matters. `[memory]`
- Crypto markets trade 24/7/365; equities and futures have sessions, holidays, half days, and settlement times. Tokenised stocks and stablecoin flows meet both clocks. `[memory]`

### External time
- Chainlink-style price feeds update on a heartbeat (e.g. 3600 s for ETH/USD on mainnet, 24 h for stable pairs) or on deviation threshold (e.g. 0.5%). Consumers must check `updatedAt` for staleness. A quiet market can legally show a price an hour old. `[memory]`
- Oracle time comes from off-chain reporters; chain time is block timestamp; the two can differ by more than a minute. `[memory]`

### Reporting
- Exchange daily candles close at 00:00 UTC by convention; some venues use other zones (e.g. UTC+8 for some Asian venues). `[memory]`
- Tax: most jurisdictions tax by calendar date/tax year of the event in local time; the chain records block time in UTC (or block height). A trade at 23:30 US Pacific on Dec 31 is Jan 1 UTC. Staking rewards may be taxed at receipt, at claim, or at sale, depending on jurisdiction, so "when the event happened" is contested. `[memory, no jurisdiction verified]`

## 3. Gaps

- No search run; no primary confirmation of any fork epoch/timestamp, halving date, oracle parameter, or governance parameter above.
- Current (2026) Bitcoin halving estimate not fetched.
- Exit queue length, Ethereum MAX_EB / Pectra changes to exits: not checked.
- Solana, Cardano, Polkadot, Cosmos governance clocks: not read.
- Tax rules: no jurisdiction read. Turkish rules in particular not checked.
- The fetch summariser reported that the Timelock wiki page did not state the 500,000,000 threshold; that comes from memory.

## 4. Observations relevant to CTCP's premise

- A block height is an order with a clock attached only loosely. "Block 1,050,000" is exact as a position and only an estimate as a date. This matches "order without time" and "an estimate that updates from real data": the date attached to the same position gets revised as hash rate changes.
- The same event carries several kinds of time at once: exact (height), range (MTP bounds; timestamp between median-of-11 and now+2h), estimate (calendar date of halving), and prediction (countdown sites). Users treat them as one thing.
- Blockchains offer two clock bases side by side: height/slot/epoch and Unix seconds. Bitcoin's nLockTime switches on a numeric threshold; CSV switches on a flag and changes units (blocks vs 512 s). A single lock can therefore be in either base.
- Two chains have unrelated clocks. Ethereum's is nearly deterministic (12 s); Bitcoin's is probabilistic. A plan that spans both is a plan across mismatched calendars that can only be mapped to UTC approximately.
- The recent past can change (reorgs). An item shown as done may become undone; confirmation depth is a social convention on how sure "done" is. Finality on Ethereum is a defined state; on Bitcoin only a probability.
- "Pushing" is visible in three places: missed slots delay everything after them; Bitcoin retargets push the calendar; unbonding and exit queues push a person's own schedule by amounts they do not control.
- Schedules stack: a vesting unlock, an unbonding period, a vote with a timelock, and a tax-year boundary can all fall in the same week, each counted in a different unit and timezone.
- Calendars really are plural: UTC candles vs local midnight, 8-hour funding periods, Cosmos duration-based votes vs Compound block-based votes, tax years by jurisdiction, market sessions vs 24/7.
- Announced-in-advance points (airdrop snapshots, fork epochs) are commitments made in one clock and observed in another. People act ahead of them.
- Timestamps that are slightly wrong but valid (inside the accepted window) are ordinary; a consumer cannot treat block time as wall time within about minutes to hours.
- External data has its own cadence (heartbeats). "Now" for an oracle-driven fact can be stale by design.
- Federated parties would disagree about the same fact: an exchange, a wallet and a tax tool each hold a different confirmation depth, timezone and clock for one transfer. Each can be right for its own purpose.
