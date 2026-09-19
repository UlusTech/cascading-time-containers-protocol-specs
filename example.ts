const entryTalk = {
	/**
	 * Meta data is a bit far from the engine. We dont really care about it. Its usally plugins work or UI things.
	 */
	meta: {
		name: "Entry talk of the party",
		description:
			"First, Scaylx will speak, we will show the anual data. Than Bilgehan will speak, and start the party.",
		/**
		 * When talk heppens, we can get the transcript that happend. (1)
		 */
		transcript: [],
		/**
		 * Or we can have it like a pre made script if its like that (2)
		 */
		talkScript: "Lorem Ipsum",
		/**
		 * Or we can have a shared file system (3)
		 */
		files: ["talkscript.md"],
	},
};
const entryMeal = {
	meta: {
		/**
		 * How the meal will be?
		 * What the meal contains,
		 * is it vegan and stuff.
		 */
	},
};
const partyDinner = {};
const partyDesert = {};

const dinnerParty = {
	/**
	 * How to express that entry talk is 10 to 15 minutes, and entry meal is 30?
	 * How to express when entry meal starts?
	 *
	 * How to express the times?
	 *
	 * How can we say that desert might be shorter because of any delays because we have a fixed end time?
	 *
	 * How to express the range of entry talk?
	 *
	 * How to have conditions?
	 */
	children: [entryTalk, entryMeal, partyDinner, partyDesert],
};

/**
 * Bottom part.
 * The exampels below shows the data similarity from example.jsonc
 * Not my example.
 */

const midnightParty = {
	id: "midnight-party",
	meta: {
		name: "Midnight Party",
		description: "We party tonight!",
	},
};

const minute00 = {
	id: "utc.minute.00",
	children: [midnightParty],
};

const hour23 = {
	id: "utc.hour.23",
	children: [minute00],
};

/** Case 1: `gregorian.day.12/midnight-party` */
/** Case 2: `gregorian.day.12/utc.hour.23/utc.minute.00/midnight-party` */
const day12 = {
	id: "gregorian.day.12",
	children: [midnightParty, hour23],
};

const anyMinute = {
	id: "utc.minute.*",
};

const anyHour = {
	id: "utc.hour.*",
	children: [anyMinute],
};

const anyDay = {
	id: "gregorian.day.*",
	children: [anyHour],
};

const anyMonth = {
	id: "gregorian.month.*",
	children: [anyDay], // Ever month has days
};

const anyYear = {
	id: "gregorian.year.*",
	children: [anyMonth],
};

const gregorian = {
	id: "gregorian",
	children: [anyYear],
};
