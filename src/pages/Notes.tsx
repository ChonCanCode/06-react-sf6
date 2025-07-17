import SearchBar from "../components/SearchBar";

const notes = [
  {
    date: "2025-07-17",
    tags: ["Neutral"],
    entry:
      "Lvl 1 to counter any 2MK > Cdr.lp combo if there is any gap in between",
  },
  {
    date: "2025-07-17",
    tags: ["Neutral"],
    entry:
      "If they catching your HP by counter hit, delay HP with max range or MK > l.dk to push out",
  },
  {
    date: "2025-07-15",
    tags: ["Neutral"],
    entry: "MK2 > cdr.2LP > mixup into my game plan",
  },
  {
    date: "2025-07-17",
    players: ["General"],
    entries: [
      "Buffer LvL 1 to counter cdr > lp to punish gapped cdr",
      "Punished HP > delay HP / MK to push out for distance control",
    ],
  },
  {
    date: "2025-07-15",
    players: ["General"],
    entries: [
      "Implementing MK2 > cdr.2LP > mixup into the game",
      "Improve conrer pressure > HP > 2MP",
      "HP > 2LP on close for frame trap",
    ],
  },
  {
    date: "2025-07-14",
    players: ["Momo"],
    entries: [
      "Bait 2HP - Back dash → 2MK buffer",
      "With bar - counter dk > 2LP > LP > EX Bomb",
      "Cornered 2LP -1 + pushed out of light ranges",
      "Use 2MP CDR into HK → 2HK combo",
    ],
  },
  {
    date: "2025-07-13",
    players: ["Tony", "Momo"],
    entries: [
      "Anti ball with parry buffer drive rush",
      "Use more 2MK at corner",
      "On close: more 2HP → 2LP",
    ],
  },
  {
    date: "2025-07-10",
    players: ["Tony"],
    entries: [
      "Good opening, but need better awareness to capture the opportunity to maximise damage. Slowing pushing to my corner, hold your ground, in case of jump in just",
      "HP counter is a -6 continue 2MP buffer",
    ],
  },
  {
    date: "2025-07-10",
    players: ["General"],
    entries: [
      "On Bomb double HP > 1st HP to control range > 2nd HP to gap close for > 2MP > m.Bomb (once bomb on block triggered then block chain frame trap rotations)",
      "Think of block chain rotation",
      "Block chain option 1 Safe > 6HK > 2LK > 2LP",
      "Block chain option 2 > 6HK > 6HK",
      "Block chain option 3 > 6HK > 2MP",
      "1. Cornered pressure > 2HP > 2MP",
      "2. Cornered pressure jumper > 2HP > 2MK > 2HP",
      "What to do with +3 after target combo?",
    ],
  },
];

export default function Notes() {
  return (
    <div>
      <SearchBar notes={notes} />
    </div>
  );
}
