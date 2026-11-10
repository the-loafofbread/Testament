export interface Verse {
  num: string;
  text: string;
}

export interface Chapter {
  id: string;
  chapterIndex: number;
  title: string;
  verses: Verse[];
}

export interface Book {
  id: string;
  number: string;
  subtitle: string;
  chapters: Chapter[];
}

export interface Benediction {
  id: string;
  title: string;
  lines: string[];
  quote: string;
  amen: string;
  hygieneReminder: string;
}

export interface NotablePrayer {
  id: string;
  title: string;
  subtitle: string;
  targetId: string;
  previewText: string;
  category: "prayer" | "benediction" | "commandment" | "creed";
}

export interface HeaderData {
  title: string;
  subtitle: string;
  haloIcon: string;
  communityLink: string;
  communityText: string;
}

export interface FooterData {
  praise: string;
  credits: string;
}

export interface BreadTestamentData {
  header: HeaderData;
  books: Book[];
  benediction: Benediction;
  footer: FooterData;
  notablePrayers: NotablePrayer[];
}

export const breadTestamentData: BreadTestamentData = {
  header: {
  "title": "The Bread Testament",
  "subtitle": "The Sacred Scriptures of the Breadkind",
  "haloIcon": "🍞",
  "communityLink": "https://yapin.gg/invite/bread",
  "communityText": "💬 Join the Yappin Council Server"
},
  books: [
  {
    "id": "book-1",
    "number": "BOOK I: THE BOOK OF DOUGH",
    "subtitle": "Of Creation, the First Flour, and the Birth of All Things",
    "chapters": [
      {
        "id": "book-1-chapter-1",
        "chapterIndex": 1,
        "title": "Chapter 1 — The Beginning",
        "verses": [
          {
            "num": "1:1",
            "text": "In the beginning there was nothing, and nothing had no name, for there was none to name it."
          },
          {
            "num": "1:2",
            "text": "There was neither light nor darkness, neither warmth nor cold, neither hunger nor satisfaction, neither baker nor bread."
          },
          {
            "num": "1:3",
            "text": "And the emptiness stretched unto eternity, and there was no oven in which the void might be warmed."
          },
          {
            "num": "1:4",
            "text": "And God looked upon the nothingness and found it unsatisfactory, for even the nothingness had nothing to offer."
          },
          {
            "num": "1:5",
            "text": "And God pondered the emptiness, and God became hungry."
          },
          {
            "num": "1:6",
            "text": "And God said unto the void, \"Let there be dough.\""
          },
          {
            "num": "1:7",
            "text": "And there was dough."
          },
          {
            "num": "1:8",
            "text": "And the dough was without form, and it was without purpose, and it stuck unto the hands of God."
          },
          {
            "num": "1:9",
            "text": "And God looked upon the dough and declared, \"This is a beginning.\""
          },
          {
            "num": "1:10",
            "text": "And thus was the First Dough brought into existence, from which all things that would ever be baked were destined to arise."
          },
          {
            "num": "1:11",
            "text": "And God kneaded the dough, and the dough resisted, for it knew not what it was meant to become."
          },
          {
            "num": "1:12",
            "text": "And God kneaded it again, and the dough yielded, for God had greater strength than the dough and considerably more patience."
          },
          {
            "num": "1:13",
            "text": "And God separated a portion of the First Dough and called it the Foundation, and the Foundation became the substance from which all creation would be formed."
          },
          {
            "num": "1:14",
            "text": "And God said, \"Let this dough be the beginning of all beginnings, the foundation of all foundations, and the ingredient from which all things shall find their purpose.\""
          },
          {
            "num": "1:15",
            "text": "And the dough was good."
          }
        ]
      },
      {
        "id": "book-1-chapter-2",
        "chapterIndex": 2,
        "title": "Chapter 2 — The Baking of the Universe",
        "verses": [
          {
            "num": "2:1",
            "text": "And God took the First Dough and stretched it across the emptiness, spreading it thin in some places and thick in others."
          },
          {
            "num": "2:2",
            "text": "And God folded the dough upon itself, and within its folds there arose space, and within that space there arose time."
          },
          {
            "num": "2:3",
            "text": "And God sprinkled the dough with the spices of creation, and the spices were innumerable."
          },
          {
            "num": "2:4",
            "text": "And from the first pinch of salt came the seas, and from the scattering of flour came the stars, and from the warmth of God's hands came the first light."
          },
          {
            "num": "2:5",
            "text": "And God placed great lumps of dough throughout the heavens, and these became the galaxies."
          },
          {
            "num": "2:6",
            "text": "And within the galaxies God placed smaller pieces of dough, and these became the stars and their worlds."
          },
          {
            "num": "2:7",
            "text": "And God heated the great oven of the cosmos, and the universe began to bake."
          },
          {
            "num": "2:8",
            "text": "And the stars were the first crusts of creation, glowing with the heat of the divine oven."
          },
          {
            "num": "2:9",
            "text": "And the planets cooled, and their surfaces hardened, and their interiors remained warm, as though they remembered the hands that had shaped them."
          },
          {
            "num": "2:10",
            "text": "And God observed the universe and said, \"This is a fine loaf, though it is not yet finished.\""
          },
          {
            "num": "2:11",
            "text": "For the universe had form, but it had no creatures to behold it; it had beauty, but none to appreciate it; it had abundance, but none to share in its abundance."
          },
          {
            "num": "2:12",
            "text": "And God declared, \"Let there be things to eat bread.\""
          },
          {
            "num": "2:13",
            "text": "And so God began the next stage of creation."
          }
        ]
      },
      {
        "id": "book-1-chapter-3",
        "chapterIndex": 3,
        "title": "Chapter 3 — The First Life",
        "verses": [
          {
            "num": "3:1",
            "text": "And God placed upon the worlds the waters of life, and within those waters stirred the smallest of creatures."
          },
          {
            "num": "3:2",
            "text": "And the creatures were simple, for they had neither mouths to speak nor minds to comprehend the wonders around them."
          },
          {
            "num": "3:3",
            "text": "And they multiplied, and they changed, and they adapted to the worlds upon which they lived."
          },
          {
            "num": "3:4",
            "text": "And through countless generations, the creatures became many kinds, and from the many kinds arose others still."
          },
          {
            "num": "3:5",
            "text": "And God watched as life unfolded according to the laws of creation."
          },
          {
            "num": "3:6",
            "text": "And God said, \"Let the creatures grow, let them change, and let them become what they may through the long passage of time.\""
          },
          {
            "num": "3:7",
            "text": "And evolution proceeded according to its nature, and God did not interfere, for God had made the universe with laws and saw no reason to interrupt them."
          },
          {
            "num": "3:8",
            "text": "And from the smallest creatures came the great multitude of living things, swimming in the seas, crawling upon the land, and soaring through the skies."
          },
          {
            "num": "3:9",
            "text": "And the world became filled with life, though none yet understood the sacred art of baking."
          },
          {
            "num": "3:10",
            "text": "And God looked upon the creatures and found them good, but the ovens remained unused, and the flour remained undiscovered."
          },
          {
            "num": "3:11",
            "text": "And God waited."
          },
          {
            "num": "3:12",
            "text": "For the time of the baker had not yet come."
          }
        ]
      },
      {
        "id": "book-1-chapter-4",
        "chapterIndex": 4,
        "title": "Chapter 4 — The Coming of Humanity",
        "verses": [
          {
            "num": "4:1",
            "text": "And after ages beyond counting, humanity arose from the long history of life, possessing hands to shape, minds to understand, and mouths through which to proclaim their hunger."
          },
          {
            "num": "4:2",
            "text": "And humanity looked upon the world and found it full of wonders, yet they knew not why they had been given the gift of hands."
          },
          {
            "num": "4:3",
            "text": "They built shelters, gathered food, tended fires, and sought to understand the mysteries of the heavens."
          },
          {
            "num": "4:4",
            "text": "And God looked upon humanity and saw that they possessed the ability to make something greater than the sum of its ingredients."
          },
          {
            "num": "4:5",
            "text": "And God called unto them, saying, \"You have been given the hands to knead, the minds to learn, and the mouths to enjoy. What shall you make of these gifts?\""
          },
          {
            "num": "4:6",
            "text": "And humanity answered, \"We shall make what sustains us, and we shall seek that which brings us joy.\""
          },
          {
            "num": "4:7",
            "text": "And God said, \"Then let your first great undertaking be bread.\""
          },
          {
            "num": "4:8",
            "text": "And humanity was confused, for they knew not what bread was."
          },
          {
            "num": "4:9",
            "text": "And God showed them the grains of the earth, the waters of the rivers, and the power of warmth."
          },
          {
            "num": "4:10",
            "text": "And God taught them that flour and water, when brought together and worked with patience, could become something greater than either alone."
          },
          {
            "num": "4:11",
            "text": "And God said, \"Remember this: the grain may feed one, but bread may feed many. The ingredients may be separate, but their purpose is fulfilled when they are brought together.\""
          },
          {
            "num": "4:12",
            "text": "And humanity received the first lesson of the Bread."
          },
          {
            "num": "4:13",
            "text": "And thus began the sacred duty of the baker."
          }
        ]
      }
    ]
  },
  {
    "id": "book-2",
    "number": "BOOK II: THE BOOK OF FIRE",
    "subtitle": "Of the First Flame, the First Prophet, and the Sacred Art",
    "chapters": [
      {
        "id": "book-2-chapter-1",
        "chapterIndex": 1,
        "title": "Chapter 1 — The Gift of Fire",
        "verses": [
          {
            "num": "1:1",
            "text": "And God saw that humanity possessed flour and water, but knew not how to transform them into the bread that had been promised."
          },
          {
            "num": "1:2",
            "text": "For the dough was raw, and raw dough was not the fulfillment of the divine purpose."
          },
          {
            "num": "1:3",
            "text": "And God gathered the first people upon a plain and placed before them a spark."
          },
          {
            "num": "1:4",
            "text": "And the spark became a flame, and the flame became a fire, and the fire illuminated the darkness."
          },
          {
            "num": "1:5",
            "text": "And the people recoiled, for they feared the great heat and knew not whether it was a blessing or a curse."
          },
          {
            "num": "1:6",
            "text": "But God spoke unto them, saying, \"Fear not the flame, but respect its power. For that which may destroy can also transform.\""
          },
          {
            "num": "1:7",
            "text": "And God taught the people to control the fire, to feed it with wood, and to contain it within places prepared for its warmth."
          },
          {
            "num": "1:8",
            "text": "And the people learned to cook their food, and they learned to warm themselves during the cold nights."
          },
          {
            "num": "1:9",
            "text": "Yet the sacred purpose of the flame remained undiscovered."
          },
          {
            "num": "1:10",
            "text": "For no one had yet baked the first true loaf."
          }
        ]
      },
      {
        "id": "book-2-chapter-2",
        "chapterIndex": 2,
        "title": "Chapter 2 — The First Prophet",
        "verses": [
          {
            "num": "2:1",
            "text": "And among the people there arose a woman whose heart was generous and whose curiosity was greater than her fear."
          },
          {
            "num": "2:2",
            "text": "She observed the dough, the fire, and the grains of the earth, and she wondered whether the gifts of God might be brought together."
          },
          {
            "num": "2:3",
            "text": "And she said unto the people, \"I will bake the bread.\""
          },
          {
            "num": "2:4",
            "text": "And the people laughed, for they believed that the dough would burn, the fire would consume it, and their ingredients would be wasted."
          },
          {
            "num": "2:5",
            "text": "But the woman was not discouraged."
          },
          {
            "num": "2:6",
            "text": "She gathered the flour, added water, and worked the dough with her hands."
          },
          {
            "num": "2:7",
            "text": "She waited, and she shaped the dough, and she placed it near the warmth of the fire."
          },
          {
            "num": "2:8",
            "text": "And when the dough had risen, she placed it within the heat and waited once more."
          },
          {
            "num": "2:9",
            "text": "And the aroma of the baking dough spread across the plain."
          },
          {
            "num": "2:10",
            "text": "And the people gathered, drawn by a fragrance they had never known."
          },
          {
            "num": "2:11",
            "text": "And the woman removed the loaf from the fire, and the crust was golden, and the inside was soft, and the bread was warm."
          },
          {
            "num": "2:12",
            "text": "And she broke the loaf and offered a piece to those who had laughed at her."
          },
          {
            "num": "2:13",
            "text": "And they tasted it, and their laughter ceased."
          },
          {
            "num": "2:14",
            "text": "For they had tasted something greater than sustenance."
          },
          {
            "num": "2:15",
            "text": "They had tasted the fulfillment of a promise."
          },
          {
            "num": "2:16",
            "text": "And God spoke from the heavens, saying, \"This is the way.\""
          },
          {
            "num": "2:17",
            "text": "And the woman became the First Prophet and the First Baker, and her name was remembered wherever bread was made."
          },
          {
            "num": "2:18",
            "text": "But her name was not preserved in every telling, and some scholars claim it was lost to the ages."
          },
          {
            "num": "2:19",
            "text": "Others claim that she deliberately withheld it, saying that the Bread was greater than the one who baked it."
          },
          {
            "num": "2:20",
            "text": "And the Council of Crumbs would later declare that the name mattered less than the deed."
          }
        ]
      },
      {
        "id": "book-2-chapter-3",
        "chapterIndex": 3,
        "title": "Chapter 3 — The First Sharing",
        "verses": [
          {
            "num": "3:1",
            "text": "And the First Prophet baked many loaves, and she gave them unto the hungry."
          },
          {
            "num": "3:2",
            "text": "And the people came to her from distant lands, bringing their grain, their water, and the fruits of their labor."
          },
          {
            "num": "3:3",
            "text": "She taught them how to knead, how to shape, how to wait, and how to recognize when the bread was ready."
          },
          {
            "num": "3:4",
            "text": "And she did not demand riches for her teachings, nor did she forbid the people from learning her methods."
          },
          {
            "num": "3:5",
            "text": "For she understood that a recipe withheld from the world fed only one household, while a recipe shared could feed an entire civilization."
          },
          {
            "num": "3:6",
            "text": "And the people established ovens in their villages, and they taught their children the art of baking."
          },
          {
            "num": "3:7",
            "text": "And the children taught their children, and the knowledge passed from generation to generation."
          },
          {
            "num": "3:8",
            "text": "And the first bakeries arose, and with them came the first gatherings of the people."
          },
          {
            "num": "3:9",
            "text": "For people who had once eaten alone began to sit together."
          },
          {
            "num": "3:10",
            "text": "And neighbors who had once been strangers became friends through the breaking of bread."
          },
          {
            "num": "3:11",
            "text": "And God looked upon the people and was pleased."
          },
          {
            "num": "3:12",
            "text": "And the First Prophet declared, \"Let no one claim that bread belongs only to the hands that bake it, for the bread fulfills its purpose when it is shared.\""
          },
          {
            "num": "3:13",
            "text": "And this became the First Teaching of the Bread."
          },
          {
            "num": "3:14",
            "text": "And the people remembered it."
          },
          {
            "num": "3:15",
            "text": "For a time."
          }
        ]
      }
    ]
  },
  {
    "id": "book-3",
    "number": "BOOK III: THE BOOK OF FOOD POISONING",
    "subtitle": "Of Poy, the Treacherous Son, the Corruption of Bread, and the Birth of Evil",
    "chapters": [
      {
        "id": "book-3-chapter-1",
        "chapterIndex": 1,
        "title": "Chapter 1 — The Age of Abundance",
        "verses": [
          {
            "num": "1:1",
            "text": "After the First Prophet came many others, each seeking to improve the lives of their people."
          },
          {
            "num": "1:2",
            "text": "And some became healers, some became teachers, some became builders, and many became bakers."
          },
          {
            "num": "1:3",
            "text": "For the art of baking had spread across the land, and no village was complete without an oven."
          },
          {
            "num": "1:4",
            "text": "And the people experimented with their recipes, adding herbs, fruits, seeds, oils, and spices to their dough."
          },
          {
            "num": "1:5",
            "text": "Some baked flatbreads, others baked great loaves, and others shaped the dough into twists and sticks."
          },
          {
            "num": "1:6",
            "text": "And among these bakers there arose a man named Poy."
          },
          {
            "num": "1:7",
            "text": "Now Poy was a humble baker, though his skill was without equal."
          },
          {
            "num": "1:8",
            "text": "His bread was soft, his crust was golden, and his recipes possessed a quality that caused even the most troubled soul to pause and appreciate the meal before them."
          },
          {
            "num": "1:9",
            "text": "But Poy was best known for his breadsticks."
          },
          {
            "num": "1:10",
            "text": "And the breadsticks of Poy were magnificent."
          },
          {
            "num": "1:11",
            "text": "For they were crisp upon the outside, soft within, and seasoned with herbs and spices whose combination had never before been attempted."
          },
          {
            "num": "1:12",
            "text": "Travelers crossed mountains to taste them, merchants journeyed from distant cities, and kings sent messengers bearing gifts in exchange for a single basket."
          },
          {
            "num": "1:13",
            "text": "And those who tasted the breadsticks declared, \"Never have we known such a thing.\""
          },
          {
            "num": "1:14",
            "text": "And those who tasted them a second time declared, \"Bring us more.\""
          },
          {
            "num": "1:15",
            "text": "And those who tasted them a third time declared, \"We shall return tomorrow.\""
          },
          {
            "num": "1:16",
            "text": "And God looked upon the world and smiled, for Poy had discovered a gift that brought joy to many."
          },
          {
            "num": "1:17",
            "text": "And Poy did not hoard his recipes, nor did he refuse a hungry traveler."
          },
          {
            "num": "1:18",
            "text": "He baked for the rich and the poor, for the powerful and the powerless, for the stranger and the friend."
          },
          {
            "num": "1:19",
            "text": "And when asked why he gave so freely, Poy answered, \"For what is a baker who will not feed the hungry?\""
          },
          {
            "num": "1:20",
            "text": "And his words were remembered by the people."
          },
          {
            "num": "1:21",
            "text": "And his breadsticks were remembered by the people even more."
          }
        ]
      },
      {
        "id": "book-3-chapter-2",
        "chapterIndex": 2,
        "title": "Chapter 2 — The Son of Poy",
        "verses": [
          {
            "num": "2:1",
            "text": "And Poy had a son, who grew up surrounded by the abundance of his father's bakery."
          },
          {
            "num": "2:2",
            "text": "The son observed the travelers who came from distant lands and the gifts they brought to Poy."
          },
          {
            "num": "2:3",
            "text": "He observed the merchants who praised his father's skill and the nobles who sought to purchase his recipes."
          },
          {
            "num": "2:4",
            "text": "And he began to wonder why his father gave away that which others would pay dearly to possess."
          },
          {
            "num": "2:5",
            "text": "For the son believed that the breadsticks were not merely food, but wealth."
          },
          {
            "num": "2:6",
            "text": "And he said unto his father, \"Why do you share our bread with these people? They come, they eat, and they depart. Yet they leave us with no lasting reward.\""
          },
          {
            "num": "2:7",
            "text": "And Poy answered, \"They leave with full stomachs, and that is a reward.\""
          },
          {
            "num": "2:8",
            "text": "But the son was not satisfied."
          },
          {
            "num": "2:9",
            "text": "And he said, \"Your food is your wealth. You must keep it to yourself if you wish to remain powerful.\""
          },
          {
            "num": "2:10",
            "text": "And Poy looked upon his son with sorrow, for he had taught him how to bake but had failed to teach him the meaning of the Bread."
          },
          {
            "num": "2:11",
            "text": "And Poy answered, \"A loaf locked away in a chest feeds no one. A recipe buried in the earth teaches no one. Wealth that brings no good to the world is a burden disguised as a blessing.\""
          },
          {
            "num": "2:12",
            "text": "But the son turned away, for he desired power more than wisdom."
          },
          {
            "num": "2:13",
            "text": "And he began to count the loaves in his father's bakery, not by how many people they might feed, but by how much they might be worth."
          },
          {
            "num": "2:14",
            "text": "He counted the coins in his father's purse and imagined how many more he might possess."
          },
          {
            "num": "2:15",
            "text": "He watched the hungry and saw customers who had not yet paid."
          },
          {
            "num": "2:16",
            "text": "He watched the poor and saw mouths that could not make him rich."
          },
          {
            "num": "2:17",
            "text": "And in his heart, a terrible thought took root."
          },
          {
            "num": "2:18",
            "text": "That which had been given to all should belong to him alone."
          },
          {
            "num": "2:19",
            "text": "And the son of Poy became the first to taste greed."
          },
          {
            "num": "2:20",
            "text": "And greed, having found a home, hungered for more."
          }
        ]
      },
      {
        "id": "book-3-chapter-3",
        "chapterIndex": 3,
        "title": "Chapter 3 — The Conspiracy of the Greedy",
        "verses": [
          {
            "num": "3:1",
            "text": "Now there were among the nobles certain individuals who had grown wealthy by keeping the necessities of life beyond the reach of the common people."
          },
          {
            "num": "3:2",
            "text": "They had stores of grain, barrels of oil, and cellars filled with food."
          },
          {
            "num": "3:3",
            "text": "Yet they desired more, for the heart that seeks only wealth is never satisfied by the wealth it obtains."
          },
          {
            "num": "3:4",
            "text": "And when they heard of Poy's breadsticks, they came unto his son in secret."
          },
          {
            "num": "3:5",
            "text": "And they said, \"Your father possesses a recipe that brings the people together. While he shares it freely, the people remain content without us.\""
          },
          {
            "num": "3:6",
            "text": "And the son answered, \"Then we must ensure that the people cannot obtain it without our permission.\""
          },
          {
            "num": "3:7",
            "text": "And one noble said, \"We shall purchase the recipe.\""
          },
          {
            "num": "3:8",
            "text": "But another said, \"Poy would refuse.\""
          },
          {
            "num": "3:9",
            "text": "And another said, \"We shall offer him a fortune.\""
          },
          {
            "num": "3:10",
            "text": "But the son said, \"My father would give it away before accepting your fortune.\""
          },
          {
            "num": "3:11",
            "text": "And they were troubled, for the generosity of Poy stood in the way of their ambitions."
          },
          {
            "num": "3:12",
            "text": "Then the son devised a plan."
          },
          {
            "num": "3:13",
            "text": "He said, \"If the people come to believe that bread may bring them harm, they shall fear to eat bread that we have not approved.\""
          },
          {
            "num": "3:14",
            "text": "And the nobles understood his meaning."
          },
          {
            "num": "3:15",
            "text": "Together they conspired to corrupt the meal that had brought joy to the people."
          },
          {
            "num": "3:16",
            "text": "And they devised a diabolical seasoning, whose purpose was not to improve the taste of food but to bring sickness upon those who consumed it."
          },
          {
            "num": "3:17",
            "text": "And they named it Poison."
          },
          {
            "num": "3:18",
            "text": "And thus was the first weapon made from that which should have nourished humanity."
          },
          {
            "num": "3:19",
            "text": "And the conspirators rejoiced, believing that they had found a means to turn the gift of the Bread against the people."
          },
          {
            "num": "3:20",
            "text": "But they did not understand that evil, once introduced into the world, does not remain obedient to those who first summon it."
          }
        ]
      },
      {
        "id": "book-3-chapter-4",
        "chapterIndex": 4,
        "title": "Chapter 4 — The Feast of Betrayal",
        "verses": [
          {
            "num": "4:1",
            "text": "And Poy announced that he would hold a great feast, inviting all who wished to taste his breadsticks."
          },
          {
            "num": "4:2",
            "text": "He called upon the villagers, the travelers, the merchants, and the poor."
          },
          {
            "num": "4:3",
            "text": "He invited the nobles, for he believed that even the proud might learn generosity by sitting among their fellow people."
          },
          {
            "num": "4:4",
            "text": "And the feast was prepared beneath a great canopy, and the tables were covered with bread, fruit, vegetables, and other foods."
          },
          {
            "num": "4:5",
            "text": "And the people gathered, rejoicing in the promise of a meal shared together."
          },
          {
            "num": "4:6",
            "text": "Poy entered the feast carrying a great basket of breadsticks, and the people welcomed him with cheers."
          },
          {
            "num": "4:7",
            "text": "And Poy's son approached his father and said, \"Allow me to serve the breadsticks, that I may honor you before the people.\""
          },
          {
            "num": "4:8",
            "text": "And Poy, believing that his son wished to do good, gave him the basket."
          },
          {
            "num": "4:9",
            "text": "But the son had already conspired with the greedy nobles."
          },
          {
            "num": "4:10",
            "text": "And he served the breadsticks to the gathered people, withholding them only from those who had joined in the conspiracy."
          },
          {
            "num": "4:11",
            "text": "And the people ate, and they praised the breadsticks, for the flavor remained as wonderful as it had always been."
          },
          {
            "num": "4:12",
            "text": "And for a brief moment, the world was as it had been before greed entered the heart of man."
          },
          {
            "num": "4:13",
            "text": "Then tragedy struck."
          },
          {
            "num": "4:14",
            "text": "And the people began to feel ill."
          },
          {
            "num": "4:15",
            "text": "Their joy turned to confusion, and their confusion turned to fear."
          },
          {
            "num": "4:16",
            "text": "One cried out, \"What has happened to us?\""
          },
          {
            "num": "4:17",
            "text": "Another said, \"The bread has betrayed us!\""
          },
          {
            "num": "4:18",
            "text": "And the people grew sick, and many fled the feast in distress."
          },
          {
            "num": "4:19",
            "text": "And the tables were overturned, the baskets were abandoned, and the great feast became a scene of sorrow."
          },
          {
            "num": "4:20",
            "text": "Poy looked upon the people and was horrified, for he knew that his breadsticks had never brought harm to anyone before."
          },
          {
            "num": "4:21",
            "text": "He examined the remaining food, and he searched for the source of the calamity."
          },
          {
            "num": "4:22",
            "text": "But his son stood among the nobles, silent and watchful."
          },
          {
            "num": "4:23",
            "text": "And the conspirators spread their lie, declaring that Poy's breadsticks were dangerous and that only their own approved food could be trusted."
          },
          {
            "num": "4:24",
            "text": "And the people, frightened by their suffering, believed that the bread itself had become their enemy."
          },
          {
            "num": "4:25",
            "text": "And Poy wept, for his greatest creation had been used to bring misery upon those he loved."
          }
        ]
      },
      {
        "id": "book-3-chapter-5",
        "chapterIndex": 5,
        "title": "Chapter 5 — The Birth of Evil",
        "verses": [
          {
            "num": "5:1",
            "text": "And evil was born."
          },
          {
            "num": "5:2",
            "text": "Not from the fire, nor from the flour, nor from the dough, but from the choice to use a gift for the suffering of others."
          },
          {
            "num": "5:3",
            "text": "For poison had existed as a substance, but now it had become an instrument of deception."
          },
          {
            "num": "5:4",
            "text": "And the son of Poy stood before the people and said, \"Behold, the bread has made you sick. You cannot trust every baker, nor can you trust every loaf.\""
          },
          {
            "num": "5:5",
            "text": "And the nobles stood beside him, saying, \"You must purchase your food from those who possess the means to guarantee its safety.\""
          },
          {
            "num": "5:6",
            "text": "And they offered bread at a price that the poor could not afford."
          },
          {
            "num": "5:7",
            "text": "And the people who had once eaten together began to fear one another."
          },
          {
            "num": "5:8",
            "text": "They questioned the ingredients in their meals and the hands that had prepared them."
          },
          {
            "num": "5:9",
            "text": "They accused innocent bakers of corruption and abandoned the recipes that had once sustained their families."
          },
          {
            "num": "5:10",
            "text": "And the greedy nobles seized the opportunity, gathering the grain and controlling the ovens."
          },
          {
            "num": "5:11",
            "text": "And Poy sought to reveal the truth, but the nobles had already spread their lies throughout the land."
          },
          {
            "num": "5:12",
            "text": "Some called him a fool."
          },
          {
            "num": "5:13",
            "text": "Others called him a liar."
          },
          {
            "num": "5:14",
            "text": "And many simply turned away, for they feared that the truth might require them to abandon the comfort of blaming another."
          },
          {
            "num": "5:15",
            "text": "And the son of Poy, having gained wealth through betrayal, found that his hunger for power had grown greater still."
          },
          {
            "num": "5:16",
            "text": "For greed does not end when it obtains what it desires."
          },
          {
            "num": "5:17",
            "text": "It merely discovers a greater desire."
          },
          {
            "num": "5:18",
            "text": "And thus the first corruption spread throughout the land."
          },
          {
            "num": "5:19",
            "text": "And the Bread, which had once brought people together, became a means by which they were divided."
          },
          {
            "num": "5:20",
            "text": "And God looked upon the world and did not smile."
          }
        ]
      }
    ]
  },
  {
    "id": "book-4",
    "number": "BOOK IV: THE BOOK OF HUNGER",
    "subtitle": "Of Famine, Division, False Prophets, and the Council of Crumbs",
    "chapters": [
      {
        "id": "book-4-chapter-1",
        "chapterIndex": 1,
        "title": "Chapter 1 — The Great Hoarding",
        "verses": [
          {
            "num": "1:1",
            "text": "And after the corruption of the feast, fear spread throughout the land."
          },
          {
            "num": "1:2",
            "text": "The greedy nobles gathered the grain into great storehouses and locked their doors with iron."
          },
          {
            "num": "1:3",
            "text": "They seized the ovens and declared that only those who paid tribute might use them."
          },
          {
            "num": "1:4",
            "text": "They purchased the fields, the mills, and the tools of the bakers, until the people possessed little with which to make their own bread."
          },
          {
            "num": "1:5",
            "text": "And those who had once shared their loaves began to hide them."
          },
          {
            "num": "1:6",
            "text": "For they feared that their neighbors might take what little they possessed."
          },
          {
            "num": "1:7",
            "text": "And the evil whispered into their ears, saying, \"Keep your bread. Give nothing away. The world is full of those who would take from you.\""
          },
          {
            "num": "1:8",
            "text": "And some believed the whisper."
          },
          {
            "num": "1:9",
            "text": "Others, who had been generous all their lives, began to wonder whether generosity had been their mistake."
          },
          {
            "num": "1:10",
            "text": "And the evil whispered again, saying, \"You have worked harder than the others. You are more worthy. Take the bread of those who have less, and call it your reward.\""
          },
          {
            "num": "1:11",
            "text": "And many who had once been content with their own loaves began to seize the loaves of others."
          },
          {
            "num": "1:12",
            "text": "And the storehouses grew full, while the tables of the poor grew empty."
          },
          {
            "num": "1:13",
            "text": "And famine plagued the land, not because the earth could produce no grain, but because the grain was kept from those who needed it."
          },
          {
            "num": "1:14",
            "text": "And the hungry looked upon the locked storehouses and wondered why there was hunger in a world filled with food."
          },
          {
            "num": "1:15",
            "text": "And the greedy looked upon the hungry and declared that their suffering was proof that they deserved nothing."
          },
          {
            "num": "1:16",
            "text": "Thus did the people confuse possession with worthiness."
          },
          {
            "num": "1:17",
            "text": "And the world grew colder, though the ovens still burned."
          }
        ]
      },
      {
        "id": "book-4-chapter-2",
        "chapterIndex": 2,
        "title": "Chapter 2 — The False Teaching",
        "verses": [
          {
            "num": "2:1",
            "text": "And the prophets gathered in the villages and called upon the people to remember the First Teaching."
          },
          {
            "num": "2:2",
            "text": "They said, \"This is not the way.\""
          },
          {
            "num": "2:3",
            "text": "And the greedy answered, \"Who are you to tell us what is right? We have earned our bread, and what we possess belongs to us.\""
          },
          {
            "num": "2:4",
            "text": "The prophets replied, \"That which you have made with your hands may belong to you, but your hands did not create the earth from which your grain grows.\""
          },
          {
            "num": "2:5",
            "text": "\"You did not command the rain to fall, nor did you command the sun to shine. You did not invent the grain, nor did you create the laws by which life flourishes.\""
          },
          {
            "num": "2:6",
            "text": "\"You have labored, and your labor has value. But do not mistake the value of your labor for proof that another person deserves to starve.\""
          },
          {
            "num": "2:7",
            "text": "But the greedy would not listen."
          },
          {
            "num": "2:8",
            "text": "And they said, \"The hungry are different from us. They have less because they are less. They do not deserve the bread that we have earned.\""
          },
          {
            "num": "2:9",
            "text": "And the prophets answered, \"There are many kinds of bread, as there are many kinds of people.\""
          },
          {
            "num": "2:10",
            "text": "\"Some loaves are dark, some are light. Some are soft, some are hard. Some rise high, and others remain flat.\""
          },
          {
            "num": "2:11",
            "text": "\"Yet each has its purpose, and none should be condemned merely for being unlike another.\""
          },
          {
            "num": "2:12",
            "text": "\"It is not the shape of the loaf that makes it bread, nor is it the wealth of a person that makes them worthy of life.\""
          },
          {
            "num": "2:13",
            "text": "\"It is the fact that we are people that brings us together.\""
          },
          {
            "num": "2:14",
            "text": "And the people listened, and many wept, for they remembered a time when they had sat together without fear."
          },
          {
            "num": "2:15",
            "text": "But the corrupt nobles spread their own teachings, claiming that the prophets sought to steal the wealth of those who possessed it."
          },
          {
            "num": "2:16",
            "text": "And they called the prophets enemies of prosperity."
          },
          {
            "num": "2:17",
            "text": "And the people were divided between those who desired justice and those who feared losing their privilege."
          },
          {
            "num": "2:18",
            "text": "And the false teaching spread."
          }
        ]
      },
      {
        "id": "book-4-chapter-3",
        "chapterIndex": 3,
        "title": "Chapter 3 — The Parable of the Two Loaves",
        "verses": [
          {
            "num": "3:1",
            "text": "And a prophet named Elowen stood before the people and spoke a parable."
          },
          {
            "num": "3:2",
            "text": "She said, \"There were once two bakers who lived beside the same river.\""
          },
          {
            "num": "3:3",
            "text": "\"The first baker possessed a single loaf, and the second baker possessed a hundred.\""
          },
          {
            "num": "3:4",
            "text": "\"And a traveler came unto the first baker, hungry and weary, and asked for a piece of bread.\""
          },
          {
            "num": "3:5",
            "text": "\"The first baker broke his loaf in two and gave half to the traveler.\""
          },
          {
            "num": "3:6",
            "text": "\"And though he now possessed less bread, he had fed another person, and together they sat beside the river and ate.\""
          },
          {
            "num": "3:7",
            "text": "\"Then the traveler came unto the second baker and asked for a piece of bread.\""
          },
          {
            "num": "3:8",
            "text": "\"But the second baker said, 'I have a hundred loaves, and I shall not part with even one, for I must protect my wealth.'\""
          },
          {
            "num": "3:9",
            "text": "\"And the traveler departed hungry.\""
          },
          {
            "num": "3:10",
            "text": "\"That night, a great rain fell upon the land, and the river rose.\""
          },
          {
            "num": "3:11",
            "text": "\"The first baker and the traveler helped one another reach higher ground, and both survived.\""
          },
          {
            "num": "3:12",
            "text": "\"But the second baker remained in his storehouse, guarding his hundred loaves, until the waters surrounded him.\""
          },
          {
            "num": "3:13",
            "text": "\"And when morning came, the first baker had lost his bread, but he had gained a friend.\""
          },
          {
            "num": "3:14",
            "text": "\"The second baker still possessed his wealth, but he had no one to help him.\""
          },
          {
            "num": "3:15",
            "text": "And Elowen looked upon the people and said, \"What good is a hundred loaves if you have no one with whom to share them?\""
          },
          {
            "num": "3:16",
            "text": "And some among the people understood."
          },
          {
            "num": "3:17",
            "text": "But others asked whether the second baker's storehouse had been insured."
          },
          {
            "num": "3:18",
            "text": "And Elowen sighed, for not every soul could be reached by a parable."
          }
        ]
      },
      {
        "id": "book-4-chapter-4",
        "chapterIndex": 4,
        "title": "Chapter 4 — The Gathering of the Prophets",
        "verses": [
          {
            "num": "4:1",
            "text": "And as famine continued, the prophets understood that their words alone could not restore what had been lost."
          },
          {
            "num": "4:2",
            "text": "For the greedy possessed the storehouses, the nobles controlled the ovens, and the hungry had neither grain nor power."
          },
          {
            "num": "4:3",
            "text": "And the prophets gathered in secret, beneath the ruins of an ancient bakery."
          },
          {
            "num": "4:4",
            "text": "There came bakers, farmers, millers, teachers, healers, and those who had lost their homes to the famine."
          },
          {
            "num": "4:5",
            "text": "And each spoke of the suffering they had witnessed."
          },
          {
            "num": "4:6",
            "text": "One spoke of children who had never tasted a proper loaf."
          },
          {
            "num": "4:7",
            "text": "Another spoke of bakers forbidden to teach their craft."
          },
          {
            "num": "4:8",
            "text": "Another spoke of villages where the grain stores were full, yet the people starved outside their walls."
          },
          {
            "num": "4:9",
            "text": "And a fourth spoke of the son of Poy, who had grown wealthy from the suffering he had helped create."
          },
          {
            "num": "4:10",
            "text": "And the gathering fell silent."
          },
          {
            "num": "4:11",
            "text": "Then the eldest prophet stood and said, \"We must stop this hunger.\""
          },
          {
            "num": "4:12",
            "text": "And another asked, \"How shall we do so? Evil tells us that we may take the bread of others, and many among us obey.\""
          },
          {
            "num": "4:13",
            "text": "A third said, \"We have taught generosity, yet generosity alone cannot protect the people from those who would exploit it.\""
          },
          {
            "num": "4:14",
            "text": "And a fourth declared, \"Then we must write down the way, that no generation may claim ignorance of what we have learned.\""
          },
          {
            "num": "4:15",
            "text": "And the prophets considered this."
          },
          {
            "num": "4:16",
            "text": "For spoken words may be forgotten, and memories may be twisted, and the teachings of the wise may be stolen by the powerful."
          },
          {
            "num": "4:17",
            "text": "But a book, carefully preserved and taught, might endure beyond the lives of those who first composed it."
          },
          {
            "num": "4:18",
            "text": "And so the prophets resolved to create a sacred collection of teachings."
          },
          {
            "num": "4:19",
            "text": "They would record the duties of the baker, the obligations of the powerful, the rights of the hungry, and the principles by which the people might live together."
          },
          {
            "num": "4:20",
            "text": "And they named this collection the Book of Cooking."
          },
          {
            "num": "4:21",
            "text": "And the Book of Cooking would become the foundation of a greater testament."
          }
        ]
      },
      {
        "id": "book-4-chapter-5",
        "chapterIndex": 5,
        "title": "Chapter 5 — The First Council of Crumbs",
        "verses": [
          {
            "num": "5:1",
            "text": "And the prophets understood that a book alone would not feed the hungry."
          },
          {
            "num": "5:2",
            "text": "For words may guide the hand, but the hand must still knead the dough."
          },
          {
            "num": "5:3",
            "text": "And so they established a council to preserve the teachings, organize the bakers, and restore the ovens of the land."
          },
          {
            "num": "5:4",
            "text": "They called themselves the Council of Crumbs, for they believed that even the smallest remnant of goodness must be preserved."
          },
          {
            "num": "5:5",
            "text": "And the council declared that no person should be denied the knowledge required to bake bread."
          },
          {
            "num": "5:6",
            "text": "They declared that those who possessed great stores of food must not use hunger as a means of controlling others."
          },
          {
            "num": "5:7",
            "text": "They declared that the recipes of the First Prophet should be taught freely, and that the crimes of Poy's son should never be forgotten."
          },
          {
            "num": "5:8",
            "text": "They established common ovens in the villages and appointed bakers to teach those who had never learned."
          },
          {
            "num": "5:9",
            "text": "They organized the distribution of grain and encouraged the people to rebuild their bakeries."
          },
          {
            "num": "5:10",
            "text": "And where a storehouse had been seized by the greedy, the council demanded that its contents be used to feed those who had been denied food."
          },
          {
            "num": "5:11",
            "text": "And some nobles surrendered their stores willingly."
          },
          {
            "num": "5:12",
            "text": "Others refused, and the council recorded their names in the Book of Hunger, that future generations might know who had chosen wealth over the lives of their neighbors."
          },
          {
            "num": "5:13",
            "text": "But the council did not declare all wealth evil."
          },
          {
            "num": "5:14",
            "text": "For the baker who labored honestly was entitled to enjoy the fruits of their work."
          },
          {
            "num": "5:15",
            "text": "Rather, the council condemned the use of wealth to deny others the means of survival."
          },
          {
            "num": "5:16",
            "text": "And the council taught that the purpose of abundance was not to create endless privilege, but to make hunger unnecessary."
          },
          {
            "num": "5:17",
            "text": "And the people began to rebuild."
          },
          {
            "num": "5:18",
            "text": "Yet the son of Poy remained at large, and the council knew that the struggle was not over."
          }
        ]
      }
    ]
  },
  {
    "id": "book-5",
    "number": "BOOK V: THE BOOK OF THE CRUST",
    "subtitle": "Of the Preservation of Knowledge and the Trials of the First Council",
    "chapters": [
      {
        "id": "book-5-chapter-1",
        "chapterIndex": 1,
        "title": "Chapter 1 — The Bread That Endured",
        "verses": [
          {
            "num": "1:1",
            "text": "And the Council of Crumbs sent its members throughout the land to restore the art of baking."
          },
          {
            "num": "1:2",
            "text": "They traveled through villages, cities, and kingdoms, carrying seeds, flour, and the sacred recipes."
          },
          {
            "num": "1:3",
            "text": "They taught the people to prepare their own bread, that no single ruler might possess control over the food of an entire nation."
          },
          {
            "num": "1:4",
            "text": "And wherever they went, they established ovens and gathering places."
          },
          {
            "num": "1:5",
            "text": "And the people learned once more that bread was not merely an object to be purchased, but a skill to be practiced and a tradition to be shared."
          },
          {
            "num": "1:6",
            "text": "Yet the council discovered that many recipes had been lost during the famine."
          },
          {
            "num": "1:7",
            "text": "Some had been destroyed by fire, others had been hidden by the greedy, and others had disappeared with the bakers who once knew them."
          },
          {
            "num": "1:8",
            "text": "And the council mourned the loss of these recipes."
          },
          {
            "num": "1:9",
            "text": "Then one of the elders said, \"Let us not mourn only what has been lost. Let us also preserve what remains, and teach the next generation to create what has not yet been imagined.\""
          },
          {
            "num": "1:10",
            "text": "And the council began to record every recipe it could recover."
          },
          {
            "num": "1:11",
            "text": "They recorded the names of the bakers, the ingredients of their loaves, and the methods by which the dough was prepared."
          },
          {
            "num": "1:12",
            "text": "They recorded the mistakes as well as the successes, for they understood that a failed loaf might teach as much as a perfect one."
          },
          {
            "num": "1:13",
            "text": "And the people began to understand that the preservation of knowledge was itself an act of generosity."
          },
          {
            "num": "1:14",
            "text": "For knowledge that survives the death of its teacher may continue to nourish the living."
          }
        ]
      },
      {
        "id": "book-5-chapter-2",
        "chapterIndex": 2,
        "title": "Chapter 2 — The Trial of the Burnt Loaf",
        "verses": [
          {
            "num": "2:1",
            "text": "And there was a young baker who sought to join the council."
          },
          {
            "num": "2:2",
            "text": "He had studied the sacred recipes and practiced the art for many years, yet every loaf he baked emerged burnt."
          },
          {
            "num": "2:3",
            "text": "And the people mocked him, saying, \"You have no place among the bakers, for even the simplest loaf escapes your mastery.\""
          },
          {
            "num": "2:4",
            "text": "And the young baker became ashamed."
          },
          {
            "num": "2:5",
            "text": "He approached the council and asked, \"Am I unworthy to learn the sacred art?\""
          },
          {
            "num": "2:6",
            "text": "And the eldest councilor answered, \"Have you ceased to bake?\""
          },
          {
            "num": "2:7",
            "text": "The young baker replied, \"I have not.\""
          },
          {
            "num": "2:8",
            "text": "The councilor asked, \"Have you ceased to learn?\""
          },
          {
            "num": "2:9",
            "text": "And the young baker replied, \"I have not.\""
          },
          {
            "num": "2:10",
            "text": "Then the councilor said, \"Then you have not failed the Bread. You have merely discovered that your present method does not produce the loaf you desire.\""
          },
          {
            "num": "2:11",
            "text": "And the young baker was silent."
          },
          {
            "num": "2:12",
            "text": "The councilor continued, \"The dough does not become perfect because the baker demands it. The baker must learn to understand the dough.\""
          },
          {
            "num": "2:13",
            "text": "And the young baker returned to his oven."
          },
          {
            "num": "2:14",
            "text": "He studied the fire, adjusted the heat, changed his methods, and sought the advice of others."
          },
          {
            "num": "2:15",
            "text": "And at last, he baked a loaf that was golden and whole."
          },
          {
            "num": "2:16",
            "text": "And he brought it before the council."
          },
          {
            "num": "2:17",
            "text": "They broke the loaf and tasted it."
          },
          {
            "num": "2:18",
            "text": "And the eldest councilor declared, \"Behold, the lesson of the burnt loaf: the one who learns from failure may yet become a master.\""
          },
          {
            "num": "2:19",
            "text": "And the young baker was welcomed into the council."
          },
          {
            "num": "2:20",
            "text": "And from that day forward, the council forbade the mocking of those who were still learning."
          }
        ]
      },
      {
        "id": "book-5-chapter-3",
        "chapterIndex": 3,
        "title": "Chapter 3 — The Bread of Many Nations",
        "verses": [
          {
            "num": "3:1",
            "text": "And as the people recovered from the famine, they traveled to distant lands and discovered that not all bread was alike."
          },
          {
            "num": "3:2",
            "text": "Some peoples baked thin loaves upon hot stones, while others baked great rounds in deep ovens."
          },
          {
            "num": "3:3",
            "text": "Some added seeds and herbs, while others preferred only flour, water, and salt."
          },
          {
            "num": "3:4",
            "text": "Some baked their bread until it became hard and crisp, while others prized the softness of a freshly risen loaf."
          },
          {
            "num": "3:5",
            "text": "And the people wondered which bread was the true bread."
          },
          {
            "num": "3:6",
            "text": "Then a prophet rose and said, \"You ask which loaf is worthy, as though the Creator had commanded that all bread must be identical.\""
          },
          {
            "num": "3:7",
            "text": "\"But behold the fields: do all grains grow in the same soil?\""
          },
          {
            "num": "3:8",
            "text": "\"Behold the people: do all communities possess the same ingredients, the same tools, or the same traditions?\""
          },
          {
            "num": "3:9",
            "text": "\"A people who dwell among mountains may bake differently from a people who dwell beside the sea.\""
          },
          {
            "num": "3:10",
            "text": "\"A people who possess little fuel may prepare their bread differently from those who possess great ovens.\""
          },
          {
            "num": "3:11",
            "text": "\"Yet all seek to nourish themselves, and all may share in the blessing of a meal.\""
          },
          {
            "num": "3:12",
            "text": "And the prophet broke a loaf from one nation and a loaf from another."
          },
          {
            "num": "3:13",
            "text": "She placed them upon the same table."
          },
          {
            "num": "3:14",
            "text": "And the people tasted both."
          },
          {
            "num": "3:15",
            "text": "And they discovered that difference did not diminish the goodness of either loaf."
          },
          {
            "num": "3:16",
            "text": "And the prophet declared, \"Let no baker condemn another merely because their bread is unfamiliar.\""
          },
          {
            "num": "3:17",
            "text": "\"For the world is not made poorer by the existence of many kinds of bread. It is made richer.\""
          },
          {
            "num": "3:18",
            "text": "And the people remembered this teaching."
          },
          {
            "num": "3:19",
            "text": "And the Council of Crumbs recorded it among the sacred teachings of the Bread."
          }
        ]
      }
    ]
  },
  {
    "id": "book-6",
    "number": "BOOK VI: THE BOOK OF THE TABLE",
    "subtitle": "Of Fellowship, Hospitality, and the Sacred Duty of Sharing",
    "chapters": [
      {
        "id": "book-6-chapter-1",
        "chapterIndex": 1,
        "title": "Chapter 1 — The Empty Seat",
        "verses": [
          {
            "num": "1:1",
            "text": "And in a village restored by the Council of Crumbs, there lived a baker who prepared a great feast every year."
          },
          {
            "num": "1:2",
            "text": "He invited his family, his friends, his neighbors, and all who had helped him throughout the seasons."
          },
          {
            "num": "1:3",
            "text": "And each year, he set a table filled with bread and food."
          },
          {
            "num": "1:4",
            "text": "Yet he always left one seat empty."
          },
          {
            "num": "1:5",
            "text": "And the people asked him, \"Why do you reserve a place for one who does not attend?\""
          },
          {
            "num": "1:6",
            "text": "And the baker answered, \"I know not who may come.\""
          },
          {
            "num": "1:7",
            "text": "\"Perhaps a traveler will arrive after a long journey. Perhaps a stranger will seek shelter from the rain. Perhaps a hungry person will pass our village without knowing that a feast has been prepared.\""
          },
          {
            "num": "1:8",
            "text": "\"And if such a person comes, shall I tell them that there is no room at my table?\""
          },
          {
            "num": "1:9",
            "text": "The people considered his words."
          },
          {
            "num": "1:10",
            "text": "And the baker continued, \"I would rather prepare a place for a stranger who never arrives than refuse a stranger who has nowhere else to go.\""
          },
          {
            "num": "1:11",
            "text": "And that year, as the feast began, a traveler arrived at the village."
          },
          {
            "num": "1:12",
            "text": "The traveler was weary, hungry, and unfamiliar with the customs of the people."
          },
          {
            "num": "1:13",
            "text": "The baker welcomed the traveler and seated them in the empty place."
          },
          {
            "num": "1:14",
            "text": "And the traveler ate, rested, and spoke with the people."
          },
          {
            "num": "1:15",
            "text": "And the gathering became richer for the presence of one who had not been expected."
          },
          {
            "num": "1:16",
            "text": "And the village remembered the lesson of the empty seat."
          },
          {
            "num": "1:17",
            "text": "And the council declared, \"Let every table leave room for kindness.\""
          }
        ]
      },
      {
        "id": "book-6-chapter-2",
        "chapterIndex": 2,
        "title": "Chapter 2 — The Loaf Divided",
        "verses": [
          {
            "num": "2:1",
            "text": "And there was a famine in a distant village, and a family possessed only one loaf of bread."
          },
          {
            "num": "2:2",
            "text": "The father looked upon the loaf and saw that it was not enough to satisfy every member of his household."
          },
          {
            "num": "2:3",
            "text": "And he feared that if he shared the loaf equally, none would be satisfied."
          },
          {
            "num": "2:4",
            "text": "So he hid the bread and ate it alone."
          },
          {
            "num": "2:5",
            "text": "And his family went hungry, and his heart grew heavy."
          },
          {
            "num": "2:6",
            "text": "For he had satisfied his stomach but burdened his soul."
          },
          {
            "num": "2:7",
            "text": "The following day, he found a neighbor standing outside his door."
          },
          {
            "num": "2:8",
            "text": "The neighbor possessed a loaf of bread and offered to divide it with the family."
          },
          {
            "num": "2:9",
            "text": "And the father was ashamed."
          },
          {
            "num": "2:10",
            "text": "He asked, \"Why do you share your bread with us when you know that your own household must also eat?\""
          },
          {
            "num": "2:11",
            "text": "And the neighbor answered, \"Because tomorrow I may be the one who has nothing.\""
          },
          {
            "num": "2:12",
            "text": "\"And when that day comes, I shall pray that someone remembers what it means to share.\""
          },
          {
            "num": "2:13",
            "text": "And the father understood."
          },
          {
            "num": "2:14",
            "text": "He had believed that sharing made a person weaker, but he now saw that sharing could create bonds stronger than fear."
          },
          {
            "num": "2:15",
            "text": "And he confessed his wrongdoing to his family."
          },
          {
            "num": "2:16",
            "text": "Together they began to prepare food for their neighbors, and their neighbors did the same."
          },
          {
            "num": "2:17",
            "text": "And though the famine did not vanish in a single day, the village endured it together."
          },
          {
            "num": "2:18",
            "text": "And the council recorded these words: \"The loaf divided among many may be small, but the kindness within it is not diminished.\""
          }
        ]
      }
    ]
  },
  {
    "id": "book-7",
    "number": "BOOK VII: THE BOOK OF THE FALSE CRUST",
    "subtitle": "Of the Return of Poy's Son and the Temptation of Power",
    "chapters": [
      {
        "id": "book-7-chapter-1",
        "chapterIndex": 1,
        "title": "Chapter 1 — The Return of the Greedy",
        "verses": [
          {
            "num": "1:1",
            "text": "And many years passed, and the Council of Crumbs grew strong."
          },
          {
            "num": "1:2",
            "text": "The ovens burned in the villages, the grain was planted in the fields, and the people once again gathered to share their bread."
          },
          {
            "num": "1:3",
            "text": "And some believed that the age of greed had ended."
          },
          {
            "num": "1:4",
            "text": "But evil had not been destroyed, for evil is not a creature that may be slain with a single blow."
          },
          {
            "num": "1:5",
            "text": "It is a choice that may be made again whenever a person values power above the well-being of others."
          },
          {
            "num": "1:6",
            "text": "And the son of Poy, who had long avoided the judgment of the people, returned from distant lands."
          },
          {
            "num": "1:7",
            "text": "He came dressed in fine garments and bearing gifts of gold."
          },
          {
            "num": "1:8",
            "text": "And he declared, \"I have learned much during my travels. I have discovered new methods of baking, new methods of trade, and new ways by which the people may prosper.\""
          },
          {
            "num": "1:9",
            "text": "And many welcomed him, for they knew not the deeds of his youth."
          },
          {
            "num": "1:10",
            "text": "But the elders of the council remembered."
          },
          {
            "num": "1:11",
            "text": "They approached him and asked, \"Have you come to make amends for what you did to your father and the people?\""
          },
          {
            "num": "1:12",
            "text": "And he answered, \"I have come to offer prosperity.\""
          },
          {
            "num": "1:13",
            "text": "The elders asked again, \"Have you come to make amends?\""
          },
          {
            "num": "1:14",
            "text": "And the son replied, \"Must the past forever bind us? Surely a man may grow beyond his mistakes.\""
          },
          {
            "num": "1:15",
            "text": "And the elders answered, \"A man may grow beyond his mistakes, but he must first acknowledge them.\""
          },
          {
            "num": "1:16",
            "text": "Yet the son refused to confess his deeds."
          },
          {
            "num": "1:17",
            "text": "Instead, he offered the council a bargain."
          },
          {
            "num": "1:18",
            "text": "He would provide the villages with grain, provided that the council granted him exclusive rights to the finest recipes."
          },
          {
            "num": "1:19",
            "text": "And the elders recognized the old temptation beneath the new promises."
          },
          {
            "num": "1:20",
            "text": "For the son had changed his garments, but not his heart."
          }
        ]
      },
      {
        "id": "book-7-chapter-2",
        "chapterIndex": 2,
        "title": "Chapter 2 — The Lesson of the Bitter Loaf",
        "verses": [
          {
            "num": "2:1",
            "text": "And the son opened a great bakery and proclaimed that his bread was superior to all others."
          },
          {
            "num": "2:2",
            "text": "He declared that only his ovens could produce a truly worthy loaf."
          },
          {
            "num": "2:3",
            "text": "He hired scribes to record the names of those who purchased his bread and those who refused it."
          },
          {
            "num": "2:4",
            "text": "And he offered the poor a single loaf at a low price, but required them to surrender their labor in exchange."
          },
          {
            "num": "2:5",
            "text": "And those who could not pay were forbidden from entering his bakery."
          },
          {
            "num": "2:6",
            "text": "Soon the people began to depend upon him, for he had purchased the fields and mills surrounding the village."
          },
          {
            "num": "2:7",
            "text": "And he declared, \"Behold, I have brought order to the chaos of the bakers. I have given the people a single standard by which to judge all bread.\""
          },
          {
            "num": "2:8",
            "text": "But the council observed that the bread was expensive, the workers were poorly treated, and the people had lost the ability to bake for themselves."
          },
          {
            "num": "2:9",
            "text": "Then the eldest councilor purchased a loaf and brought it before the gathering."
          },
          {
            "num": "2:10",
            "text": "The people tasted it and found that it was ordinary bread."
          },
          {
            "num": "2:11",
            "text": "And the councilor said, \"The loaf is not evil because it is made by the son of Poy. Nor is it good because he calls it superior.\""
          },
          {
            "num": "2:12",
            "text": "\"Judge the bread by what it is, and judge the baker by what they do.\""
          },
          {
            "num": "2:13",
            "text": "\"For a fine crust cannot conceal a corrupt heart forever.\""
          },
          {
            "num": "2:14",
            "text": "And the people understood that the false crust was not a kind of bread, but a disguise worn by those who wished to appear righteous without practicing righteousness."
          },
          {
            "num": "2:15",
            "text": "And the council rejected the son's bargain."
          },
          {
            "num": "2:16",
            "text": "And the son departed in anger, swearing that the Council of Crumbs would one day kneel before him."
          }
        ]
      }
    ]
  },
  {
    "id": "book-8",
    "number": "BOOK VIII: THE BOOK OF RISING",
    "subtitle": "Of Renewal, Perseverance, and the Promise of the Next Loaf",
    "chapters": [
      {
        "id": "book-8-chapter-1",
        "chapterIndex": 1,
        "title": "Chapter 1 — The Fallen Dough",
        "verses": [
          {
            "num": "1:1",
            "text": "And there was a baker who prepared a great quantity of dough for a feast."
          },
          {
            "num": "1:2",
            "text": "He worked through the night, measuring the ingredients, kneading the mixture, and preparing it to rise."
          },
          {
            "num": "1:3",
            "text": "But when morning came, the dough had not risen."
          },
          {
            "num": "1:4",
            "text": "And the baker was troubled, for the feast was near, and the people were waiting."
          },
          {
            "num": "1:5",
            "text": "He cried, \"All my labor has been wasted!\""
          },
          {
            "num": "1:6",
            "text": "And he considered abandoning the dough."
          },
          {
            "num": "1:7",
            "text": "But an elder who had observed his work approached and said, \"Why do you condemn the dough before you understand what has happened?\""
          },
          {
            "num": "1:8",
            "text": "The baker answered, \"It has failed to rise.\""
          },
          {
            "num": "1:9",
            "text": "And the elder replied, \"Then learn why it has not risen.\""
          },
          {
            "num": "1:10",
            "text": "The baker examined the dough and discovered that the room had been too cold."
          },
          {
            "num": "1:11",
            "text": "He moved the dough to a warmer place and waited."
          },
          {
            "num": "1:12",
            "text": "And the dough began to rise."
          },
          {
            "num": "1:13",
            "text": "The baker watched in wonder as the mixture grew and softened."
          },
          {
            "num": "1:14",
            "text": "And the elder said, \"Behold, the dough has not abandoned its purpose merely because it has taken longer than you expected.\""
          },
          {
            "num": "1:15",
            "text": "\"So too may a person stumble, struggle, or require more time than others.\""
          },
          {
            "num": "1:16",
            "text": "\"Do not mistake delay for defeat, nor difficulty for proof that you are unworthy.\""
          },
          {
            "num": "1:17",
            "text": "And the baker remembered these words."
          },
          {
            "num": "1:18",
            "text": "And the feast was prepared, and the people ate."
          },
          {
            "num": "1:19",
            "text": "And the baker taught his apprentices the lesson of the fallen dough."
          }
        ]
      },
      {
        "id": "book-8-chapter-2",
        "chapterIndex": 2,
        "title": "Chapter 2 — The New Grain",
        "verses": [
          {
            "num": "2:1",
            "text": "And as the people rebuilt their lands, they discovered new grains and learned new methods of cultivation."
          },
          {
            "num": "2:2",
            "text": "Some grains grew well in dry soil, while others flourished beside rivers."
          },
          {
            "num": "2:3",
            "text": "Some produced flour suited to flatbreads, while others yielded loaves that rose high within the oven."
          },
          {
            "num": "2:4",
            "text": "And the people debated which grain should be planted throughout the land."
          },
          {
            "num": "2:5",
            "text": "Then a farmer stood and said, \"Why must we choose only one?\""
          },
          {
            "num": "2:6",
            "text": "\"Let us plant that which thrives in each field, and let each village learn the ways of its own soil.\""
          },
          {
            "num": "2:7",
            "text": "And the people accepted his counsel."
          },
          {
            "num": "2:8",
            "text": "They experimented with new crops and exchanged their discoveries with neighboring communities."
          },
          {
            "num": "2:9",
            "text": "And the harvests improved, and the people gained new kinds of bread."
          },
          {
            "num": "2:10",
            "text": "And the council declared that the discovery of something new did not dishonor the traditions of the old."
          },
          {
            "num": "2:11",
            "text": "For the First Prophet had not taught the people to cease learning once they had baked their first loaf."
          },
          {
            "num": "2:12",
            "text": "She had taught them to begin."
          },
          {
            "num": "2:13",
            "text": "And thus the sacred art continued to grow."
          }
        ]
      }
    ]
  },
  {
    "id": "book-9",
    "number": "BOOK IX: THE BOOK OF COOKING",
    "subtitle": "The Sacred Cookbook and the Three Commandments of the Bread",
    "chapters": [
      {
        "id": "book-9-chapter-1",
        "chapterIndex": 1,
        "title": "Chapter 1 — The First Commandment",
        "verses": [
          {
            "num": "1:1",
            "text": "Thou shalt bake bread."
          },
          {
            "num": "1:2",
            "text": "For the grain has been given, the water has been given, the fire has been given, and the hands to knead have been given."
          },
          {
            "num": "1:3",
            "text": "Let no person believe that the gifts of creation exist without purpose."
          },
          {
            "num": "1:4",
            "text": "Thou shalt learn the sacred art, whether thy first loaf be great or humble."
          },
          {
            "num": "1:5",
            "text": "Thou shalt not despise the apprentice whose dough is uneven, nor mock the baker whose first attempts have failed."
          },
          {
            "num": "1:6",
            "text": "For every master was once a beginner, and every great bakery was once an empty room."
          },
          {
            "num": "1:7",
            "text": "Thou shalt respect the ingredients, understand the fire, and give the dough the time it requires."
          },
          {
            "num": "1:8",
            "text": "Thou shalt seek knowledge from those who know more than thee, and thou shalt teach those who know less."
          },
          {
            "num": "1:9",
            "text": "Thou shalt not claim mastery merely because thou hast baked one perfect loaf."
          },
          {
            "num": "1:10",
            "text": "For the art of baking is a lifelong practice, and the wise baker remains a student even when others call them a master."
          },
          {
            "num": "1:11",
            "text": "Thou shalt bake bread according to thy means, and thou shalt not condemn thyself for lacking the finest ovens or the rarest ingredients."
          },
          {
            "num": "1:12",
            "text": "For the greatness of a baker is not measured solely by the equipment they possess, but by the care with which they use it."
          },
          {
            "num": "1:13",
            "text": "And when thy bread is burnt, learn from it."
          },
          {
            "num": "1:14",
            "text": "When thy dough refuses to rise, learn from it."
          },
          {
            "num": "1:15",
            "text": "When thy recipe fails, learn from it."
          },
          {
            "num": "1:16",
            "text": "And when thy loaf is successful, remember what brought thee there."
          },
          {
            "num": "1:17",
            "text": "For the purpose of the first commandment is not merely that bread shall be made, but that the sacred art shall endure."
          }
        ]
      },
      {
        "id": "book-9-chapter-2",
        "chapterIndex": 2,
        "title": "Chapter 2 — The Second Commandment",
        "verses": [
          {
            "num": "2:1",
            "text": "Thou shalt share the bread."
          },
          {
            "num": "2:2",
            "text": "For the Bread was not given that one person might feast while another starves."
          },
          {
            "num": "2:3",
            "text": "Thou shalt remember the First Prophet, who gave her first loaf to those who had laughed at her."
          },
          {
            "num": "2:4",
            "text": "Thou shalt remember Poy, who fed the people without demanding that they first prove their worthiness."
          },
          {
            "num": "2:5",
            "text": "And thou shalt remember the son of Poy, whose greed transformed a feast into a tragedy."
          },
          {
            "num": "2:6",
            "text": "Thou shalt not hoard food merely to make others dependent upon thee."
          },
          {
            "num": "2:7",
            "text": "Thou shalt not use hunger as a weapon, nor deny another person the means of survival merely because thou possessest the power to do so."
          },
          {
            "num": "2:8",
            "text": "Thou shalt offer hospitality to the traveler, kindness to the stranger, and assistance to the neighbor in need."
          },
          {
            "num": "2:9",
            "text": "Thou shalt not demand that the hungry praise thee before receiving food."
          },
          {
            "num": "2:10",
            "text": "For the purpose of feeding the hungry is that they may eat, not that the giver may be celebrated."
          },
          {
            "num": "2:11",
            "text": "Thou shalt recognize that sharing does not require thee to destroy thy own well-being, nor does generosity demand that one person bear every burden alone."
          },
          {
            "num": "2:12",
            "text": "Rather, let the people support one another, that no single household must face every hardship without help."
          },
          {
            "num": "2:13",
            "text": "Thou shalt remember that a community is strengthened when its members care for one another."
          },
          {
            "num": "2:14",
            "text": "Thou shalt not condemn another person's bread merely because it differs from thy own."
          },
          {
            "num": "2:15",
            "text": "For the loaf of thy neighbor may be shaped differently, seasoned differently, and prepared according to traditions thou hast never known."
          },
          {
            "num": "2:16",
            "text": "Yet it may nourish them as thy own bread nourishes thee."
          },
          {
            "num": "2:17",
            "text": "And if thou hast more bread than thou requirest, consider those whose tables remain empty."
          },
          {
            "num": "2:18",
            "text": "For abundance carries with it the opportunity to do good."
          },
          {
            "num": "2:19",
            "text": "And when thou receivest bread from another, accept it with gratitude."
          },
          {
            "num": "2:20",
            "text": "For the hand that gives and the hand that receives are both part of the sacred fellowship."
          }
        ]
      },
      {
        "id": "book-9-chapter-3",
        "chapterIndex": 3,
        "title": "Chapter 3 — The Third Commandment",
        "verses": [
          {
            "num": "3:1",
            "text": "The bread will show the way."
          },
          {
            "num": "3:2",
            "text": "For bread is the lesson, the symbol, and the reminder of that which humanity may accomplish when it works together."
          },
          {
            "num": "3:3",
            "text": "As flour and water become dough, so may strangers become companions."
          },
          {
            "num": "3:4",
            "text": "As dough rises through patience, so may a person grow through learning."
          },
          {
            "num": "3:5",
            "text": "As the oven transforms the dough, so may hardship transform the heart, provided that the heart remains willing to learn."
          },
          {
            "num": "3:6",
            "text": "As the crust protects the loaf, so must the people protect the vulnerable."
          },
          {
            "num": "3:7",
            "text": "And as a loaf may be divided among many, so may kindness be multiplied through its giving."
          },
          {
            "num": "3:8",
            "text": "Thou shalt not mistake the bread for the whole of the teaching, for the bread is a reminder of the teaching."
          },
          {
            "num": "3:9",
            "text": "A person may bake every day and yet fail to understand the Bread."
          },
          {
            "num": "3:10",
            "text": "A person may recite every commandment and yet refuse to help a hungry neighbor."
          },
          {
            "num": "3:11",
            "text": "A person may possess the finest oven in the kingdom and yet have a heart colder than the stone beneath it."
          },
          {
            "num": "3:12",
            "text": "Therefore, let the commandments be measured not only by the words spoken, but by the deeds performed."
          },
          {
            "num": "3:13",
            "text": "For the one who speaks of generosity but practices greed has not understood the Second Commandment."
          },
          {
            "num": "3:14",
            "text": "The one who claims wisdom but refuses to learn has not understood the First."
          },
          {
            "num": "3:15",
            "text": "And the one who claims to follow the Bread while using it to divide the people has not understood the Third."
          },
          {
            "num": "3:16",
            "text": "Let the baker bake, the hungry be fed, the learner be taught, and the stranger be welcomed."
          },
          {
            "num": "3:17",
            "text": "Let the people remember the First Prophet, the generosity of Poy, the treachery of his son, and the wisdom of the Council of Crumbs."
          },
          {
            "num": "3:18",
            "text": "Let the recipes be shared, the ovens be tended, and the tables be prepared."
          },
          {
            "num": "3:19",
            "text": "And whenever the people break bread together, let them remember that no loaf was ever made from a single grain."
          },
          {
            "num": "3:20",
            "text": "For the world is vast, the people are many, and the ways of baking are countless."
          },
          {
            "num": "3:21",
            "text": "Yet the purpose of the Bread remains."
          },
          {
            "num": "3:22",
            "text": "To nourish the body."
          },
          {
            "num": "3:23",
            "text": "To bring people together."
          },
          {
            "num": "3:24",
            "text": "And to remind humanity that goodness, like dough, must be worked with care if it is to rise."
          }
        ]
      }
    ]
  },
  {
    "id": "book-10",
    "number": "BOOK X: THE BOOK OF THE LAST CRUMB",
    "subtitle": "Of the Final Teaching, the Preservation of the Testament, and the Promise of the Bread",
    "chapters": [
      {
        "id": "book-10-chapter-1",
        "chapterIndex": 1,
        "title": "Chapter 1 — The Last Crumb",
        "verses": [
          {
            "num": "1:1",
            "text": "And the Council of Crumbs gathered in the final year of its first age to review the teachings that had been preserved."
          },
          {
            "num": "1:2",
            "text": "They had recorded the creation of the universe, the rise of humanity, the deeds of the First Prophet, the generosity of Poy, and the corruption that had followed his son's greed."
          },
          {
            "num": "1:3",
            "text": "They had recorded the famine, the false teachings, the restoration of the ovens, and the commandments by which the people might live."
          },
          {
            "num": "1:4",
            "text": "And they asked themselves, \"What shall we teach the generations that come after us?\""
          },
          {
            "num": "1:5",
            "text": "One councilor said, \"We shall teach them to bake.\""
          },
          {
            "num": "1:6",
            "text": "Another said, \"We shall teach them to share.\""
          },
          {
            "num": "1:7",
            "text": "Another said, \"We shall teach them to remember the evils of greed.\""
          },
          {
            "num": "1:8",
            "text": "And another said, \"We shall teach them to question those who claim authority over the Bread.\""
          },
          {
            "num": "1:9",
            "text": "For the council had learned that even sacred teachings could be twisted by those who sought power."
          },
          {
            "num": "1:10",
            "text": "And the eldest among them stood and held up a single crumb."
          },
          {
            "num": "1:11",
            "text": "He said, \"Behold this crumb. It is small, and many would consider it worthless.\""
          },
          {
            "num": "1:12",
            "text": "\"Yet this crumb was once part of a loaf, and that loaf was once dough, and that dough was made from ingredients drawn from the earth.\""
          },
          {
            "num": "1:13",
            "text": "\"And the earth was formed within the universe, and the universe was brought forth from the First Dough.\""
          },
          {
            "num": "1:14",
            "text": "\"Thus even the smallest crumb bears within its history the story of creation.\""
          },
          {
            "num": "1:15",
            "text": "\"And so it is with the smallest act of kindness.\""
          },
          {
            "num": "1:16",
            "text": "\"A loaf shared with one hungry person may inspire another to share with two.\""
          },
          {
            "num": "1:17",
            "text": "\"A recipe taught to one apprentice may be passed to a thousand bakers.\""
          },
          {
            "num": "1:18",
            "text": "\"A single good deed may be remembered long after the hand that performed it has returned to the earth.\""
          },
          {
            "num": "1:19",
            "text": "And the council understood that the greatness of the Bread was not found only in the grandest feasts or the finest loaves."
          },
          {
            "num": "1:20",
            "text": "It was found in the daily choice to do good."
          }
        ]
      },
      {
        "id": "book-10-chapter-2",
        "chapterIndex": 2,
        "title": "Chapter 2 — The Promise of the Bread",
        "verses": [
          {
            "num": "2:1",
            "text": "And the eldest councilor declared, \"The Bread shall endure, so long as there remain those who are willing to bake.\""
          },
          {
            "num": "2:2",
            "text": "\"The Bread shall endure, so long as there remain those who are willing to share.\""
          },
          {
            "num": "2:3",
            "text": "\"The Bread shall endure, so long as there remain those who remember that hunger is not a punishment for being poor.\""
          },
          {
            "num": "2:4",
            "text": "\"The Bread shall endure, so long as there remain those who teach the young, welcome the stranger, and preserve the knowledge of those who came before.\""
          },
          {
            "num": "2:5",
            "text": "\"For the Bread is older than any kingdom, and its teachings are greater than any single ruler.\""
          },
          {
            "num": "2:6",
            "text": "\"Kings shall rise and fall, empires shall crumble, and the names of mighty nobles shall fade from memory.\""
          },
          {
            "num": "2:7",
            "text": "\"Yet somewhere, a child shall mix flour and water for the first time.\""
          },
          {
            "num": "2:8",
            "text": "\"Somewhere, a baker shall open an oven before dawn.\""
          },
          {
            "num": "2:9",
            "text": "\"Somewhere, a traveler shall be welcomed to a table.\""
          },
          {
            "num": "2:10",
            "text": "\"And somewhere, a hungry person shall receive a loaf from a stranger who asks nothing in return.\""
          },
          {
            "num": "2:11",
            "text": "\"And in those moments, the First Teaching shall live again.\""
          },
          {
            "num": "2:12",
            "text": "Then the council placed the sacred testament within a chest of cedar and sealed it with wax."
          },
          {
            "num": "2:13",
            "text": "And they entrusted the book to those who would preserve it, teach it, and guard it from corruption."
          },
          {
            "num": "2:14",
            "text": "But they commanded that the book must never be locked away from the people."
          },
          {
            "num": "2:15",
            "text": "For a testament that cannot be read cannot teach, and a teaching that cannot be practiced cannot fulfill its purpose."
          },
          {
            "num": "2:16",
            "text": "And the council spoke its final words:"
          },
          {
            "num": "2:17",
            "text": "\"Bake the bread.\""
          },
          {
            "num": "2:18",
            "text": "\"Share the bread.\""
          },
          {
            "num": "2:19",
            "text": "\"Remember the Bread.\""
          },
          {
            "num": "2:20",
            "text": "And the people answered, \"The bread will show the way.\""
          }
        ]
      }
    ]
  }
],
  benediction: {
  "id": "benediction",
  "title": "THE FINAL VERSE —  The Benediction of the Loaf",
  "lines": [
    "The Benediction of the Loaf",
    "And so it was written, and so it was preserved.",
    "From the First Dough came the universe.",
    "From the universe came life.",
    "From life came humanity.",
    "From humanity came the baker.",
    "From the baker came the loaf.",
    "From the loaf came the table.",
    "From the table came fellowship.",
    "And from fellowship came the hope that no person need face the world alone.",
    "Yet from the loaf also came greed, and from greed came poison, and from poison came hunger.",
    "Therefore, let no person believe that the Bread is righteous merely because it is bread.",
    "For even the finest ingredients may be used for evil, and even the most sacred traditions may be corrupted by those who seek power.",
    "Judge not the loaf by its crust alone.",
    "Judge not the baker by their title.",
    "Judge not the hungry by their hunger.",
    "Judge not the stranger by the shape of their bread.",
    "But look upon the hands that knead, the heart that gives, and the table at which the people gather.",
    "For the Bread was never meant to be a weapon.",
    "It was never meant to be a chain.",
    "It was never meant to be the property of the powerful alone.",
    "It was made to nourish.",
    "It was made to sustain.",
    "It was made to be shared.",
    "And should the world fall into famine once more, should the ovens grow cold, and should the greedy once again lock their storehouses, let the people remember the words of the First Prophet:",
    "For as long as there is flour, there is possibility.",
    "As long as there is water, there is potential.",
    "As long as there is fire, there is transformation.",
    "And as long as there are people willing to work together, there shall be bread.",
    "Go forth, therefore, and bake.",
    "Go forth, and share.",
    "Go forth, and let the bread show the way."
  ],
  "quote": "\"I will bake the bread.\"",
  "amen": "Amen.",
  "hygieneReminder": "🧼 And also, please wash thy hands before kneading."
},
  footer: {
  "praise": "Praise be to the First Dough & The Council of Crumbs",
  "credits": "Written by @loaf and developed by @b4u"
},
  notablePrayers: [
  {
    "id": "prayer-benediction",
    "title": "The Benediction of the Loaf",
    "subtitle": "The Final Verse of the Sacred Scriptures",
    "targetId": "benediction",
    "previewText": "From the First Dough came the universe. From the universe came life. From life came humanity...",
    "category": "benediction"
  },
  {
    "id": "prayer-first-commandment",
    "title": "The First Commandment: Thou Shalt Bake",
    "subtitle": "Book IX: The Sacred Cookbook — Chapter 1",
    "targetId": "book-9-chapter-1",
    "previewText": "Thou shalt bake bread... For the purpose of the first commandment is not merely that bread shall be made, but that the sacred art shall endure.",
    "category": "commandment"
  },
  {
    "id": "prayer-second-commandment",
    "title": "The Second Commandment: Thou Shalt Share",
    "subtitle": "Book IX: The Sacred Cookbook — Chapter 2",
    "targetId": "book-9-chapter-2",
    "previewText": "Thou shalt share bread... Thou shalt not demand that the hungry praise thee before receiving food.",
    "category": "commandment"
  },
  {
    "id": "prayer-third-commandment",
    "title": "The Third Commandment: The Bread Will Show The Way",
    "subtitle": "Book IX: The Sacred Cookbook — Chapter 3",
    "targetId": "book-9-chapter-3",
    "previewText": "The bread will show the way... Therefore, let the commandments be measured not only by the words spoken, but by the deeds performed.",
    "category": "commandment"
  },
  {
    "id": "prayer-prophet-vow",
    "title": "The First Prophet’s Vow",
    "subtitle": "Book II: The Book of Fire — Chapter 2",
    "targetId": "book-2-chapter-2",
    "previewText": "\"I will bake the bread.\" — The pledge of the First Prophet before the hearth.",
    "category": "creed"
  },
  {
    "id": "prayer-fellowship",
    "title": "The Sacred Liturgy of the Hearth & Table",
    "subtitle": "Book VI: The Book of the Table — Chapter 1",
    "targetId": "book-6-chapter-1",
    "previewText": "Of Fellowship, Hospitality, and the Sacred Duty of Sharing at the Hearth.",
    "category": "prayer"
  },
  {
    "id": "prayer-hungry",
    "title": "The Supplication for the Hungry",
    "subtitle": "Book VI: The Book of the Table — Chapter 2",
    "targetId": "book-6-chapter-2",
    "previewText": "\"And when that day comes, I shall pray that someone remembers what it means to share.\"",
    "category": "prayer"
  },
  {
    "id": "prayer-council-creed",
    "title": "The Final Council Creed: The Three Eternal Words",
    "subtitle": "Book X: The Book of the Last Crumb — Chapter 2",
    "targetId": "book-10-chapter-2",
    "previewText": "\"Bake the bread. Share the bread. Remember the Bread.\" And the people answered, \"The bread will show the way.\"",
    "category": "creed"
  },
  {
    "id": "prayer-hygiene",
    "title": "The Holy Hygiene Precept",
    "subtitle": "The Benediction — Postscript",
    "targetId": "benediction",
    "previewText": "🧼 And also, please wash thy hands before kneading.",
    "category": "prayer"
  }
]
};
