import type { TestModule } from '../../types'

/** Reading and Writing — Module 1. 27 questions, fixed (non-adaptive). */
export const readingWriting1: TestModule = {
  id: 'rw-1',
  title: 'Reading and Writing — Module 1',
  section: 'reading-writing',
  timeLimitSeconds: 32 * 60,
  questions: [
    {
      type: 'multiple-choice',
      id: 'rw1-q1',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 1,
      passageIntro:
        'The following text is from Lilliam Rivera’s 2020 novel *Never Look Back*. The text describes the narrator arriving at his father’s apartment.',
      passage:
        '“Pops, I’m here!” I <u>drop</u> my bag and set my guitar case against a wall. I place my keys on the bowl right next to the ceramic elephant Pops got me on one of his trips to Santo Domingo when I was a little kid.',
      prompt:
        'As used in the text, what does the word “drop” most nearly mean?',
      choices: ['Forget about', 'Put down', 'Unbolt', 'Empty'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q2',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 0,
      passage:
        'Postcranial skeletal pneumaticity (PSP) refers to the presence of extensions of an animal’s lungs and air sacs inside its bones. Though such structures do not typically fossilize, they are believed to have been present in *Tyrannosaurus*, *Anhanguera*, and other Cretaceous theropods and pterosaurs. To ______ PSP from fossils, researchers look for indicators such as large foramina (holes in bones).',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['infer', 'preserve', 'isolate', 'acquire'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q3',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 2,
      passage:
        'For most of its length, the Pungue River has sufficiently high flow velocity to suspend sedimentary particles, but when the river reaches the calmer waters of the Indian Ocean, its channel widens and divides, reducing flow velocity and thereby ______ sedimentary particle suspension. Particles are thus deposited, eventually forming deltaic lobes.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['compounding', 'obscuring', 'interrupting', 'expediting'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q4',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 1,
      passage:
        'Maryam Hosseini and her team used aerial images of well-mapped areas of Boston to train a computer program to identify sidewalks. When it was tested on images of Brooklyn, it ______ identified sidewalks in the vast majority of cases and even whether sidewalks were concrete or brick. Hosseini believes the program will improve on this already-strong performance as it gets used more.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['clumsily', 'reliably', 'rarely', 'slowly'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q5',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 3,
      passage:
        'The Polynesian languages, a group of related languages originating on islands in the Pacific, typically have ______ array of consonant sounds. For example, the Tokelauan language of the South Pacific has eleven consonants, and ‘Olelo Hawai‘i, the language of the Native Hawaiian people, has eight. Globally, however, the median number of consonants per language is over twenty-two.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['a musical', 'an unvarying', 'an exclusive', 'a modest'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q6',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 3,
      passage:
        'Movies that are part of larger franchises are often criticized for being predictable. Take, for instance, *Spider-Man: Far From Home* (2019), which is part of the Marvel Cinematic Universe franchise. It is true that this movie resembles earlier Marvel movies. But just because a movie has familiar elements doesn’t mean it can’t also be worth watching. Critics generally agree that *Spider-Man: Far From Home* isn’t the most exciting franchise movie, but franchise movies are rarely as stale as some people claim. And some franchise movies, like *Logan* (2017), are wonderfully original.',
      prompt: 'Which choice best describes the overall structure of the text?',
      choices: [
        'The text summarizes the plot of a franchise movie, then explains how the plot is continued in a later movie in that franchise.',
        'The text explains why some people enjoyed a particular franchise movie, then considers why other people disliked it.',
        'The text describes audiences’ reactions to a movie that is part of a larger franchise, then presents some critics’ reactions to that movie.',
        'The text discusses a common criticism of franchise movies, then argues that the criticism is mostly undeserved.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q7',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 3,
      passageIntro:
        'The following text is from Julia Alvarez’s 2000 novel *In the Name of Salomé*. Salomé, a poet, is hosting guests in the front parlor of her family home, and Ramona is her sister. A salon is a social gathering for the exploration of intellectual ideas.',
      passage:
        'It was evening when the two men got up to leave. Tía Ana had already come into the room several times to see if these guests had departed yet. The front parlor had always been her <u>special province</u>, as she used it for her little school. Now, every evening, it turned into Salomé’s salon, as Ramona called it, and it was never in order for its transformation back to a classroom the following morning.',
      prompt:
        'Which choice best describes the function of the reference to the parlor as Tía Ana’s “special province”?',
      choices: [
        'It reveals that Tía Ana feels as if Salomé has betrayed her trust by allowing guests into a space she considers her own.',
        'It indicates the joy that Tía Ana feels when she uses her classroom for varying purposes.',
        'It characterizes the room as a place where Tía Ana can go to escape social pressures.',
        'It introduces an idea that helps explain Tía Ana’s apparent eagerness for Salomé’s guests to leave the space.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q8',
      domain: 'Craft and Structure',
      skill: 'Cross-Text Connections',
      correctAnswer: 1,
      passage:
        'Text 1\n\nDespite how the Indian dish madras differs from Mauritius’s gato pima, both dishes are described as a “curry.” The word’s history, however, is fraught. It’s a term created by British and Portuguese colonizers to refer to the myriad spiced sauces with ties to the Indian subcontinent. In 1973, chef Madhur Jaffrey dismissed the term “curry” as inaccurate, and in 2021 blogger Nisha Vedi Pawar suggested that people abandon the term both for its colonial origin and for its failure to grasp the intricacies of India’s cuisines.\n\nText 2\n\nGrowing up in India, chef Chintan Pandya didn’t encounter the term “curry” often: his family didn’t cook curries, but some of his neighbors did. Although the blanket use of the term is rooted in colonialism, Pandya calls some of his dishes curries. Having traveled throughout India as part of his training, he came to appreciate the country’s diverse cuisines and the diverse uses of the term “curry.”',
      prompt: 'Text 1 and Text 2 present points of view about which topic?',
      choices: [
        'The history of the peoples on the Indian subcontinent',
        'The use of the term “curry”',
        'The difference between madras and gato pima',
        'The best method for studying a region’s cuisine',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q9',
      domain: 'Information and Ideas',
      skill: 'Central Ideas and Details',
      correctAnswer: 3,
      passage:
        'Sandra Cisneros’s English-language short story “Eyes of Zapata” occasionally includes words and phrases from the Mexican dialect of Spanish. While the story doesn’t translate the Spanish text into English, the meaning can be inferred from the surrounding English text. Ana Castillo adopts a comparable approach to Spanish in her English-language novel *So Far from God*. Both works thus remain accessible to all readers of English, not just those who can also read Spanish.',
      prompt: 'What is the main topic of the text?',
      choices: [
        'The difficulty of translating Sandra Cisneros’s works into languages other than English',
        'The commercial success of English-language literature around the world',
        'The enduring popularity of Ana Castillo’s works in Mexico',
        'The use of non-English vocabulary in two English-language literary works',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q10',
      domain: 'Information and Ideas',
      skill: 'Central Ideas and Details',
      correctAnswer: 3,
      passage:
        'In a large community science effort, biologist Grace Herzel and colleagues collaborated with hundreds of students and other amateur science enthusiasts for more than three years to study how butterfly color and weather conditions relate to butterfly behavior. They found that butterfly color might influence behavior more than butterfly size does, and that butterflies tended to prefer orange and red flowers on cloudy days and multicolor flowers on partly cloudy days.',
      prompt: 'Which choice best states the main idea of the text?',
      choices: [
        'Collaboration between professional scientists and members of the public is especially useful when studying the behavior of butterflies and other flying insects.',
        'A recent study suggested that butterflies’ coloring seems to be less relevant to their behavior than weather conditions.',
        'Weather conditions and butterfly color seem to have less influence on butterfly behavior than the location where the butterflies are studied does.',
        'A large study suggested that butterfly color and weather conditions might influence the behavior of certain butterflies.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q11',
      domain: 'Information and Ideas',
      skill: 'Central Ideas and Details',
      correctAnswer: 3,
      passage:
        '*Uncle Boonmee Who Can Recall His Past Lives* (2010) and other films by Thai director Apichatpong Weerasethakul are contributions to slow cinema, an art house genre whose contemplative pacing and deprivileging of narrative are further exemplified by films such as Andrei Tarkovsky’s *Solaris* (1972). Apichatpong describes his films as sleep-inducing, which might suggest that they bore their audiences, but boredom does not necessarily cause sleep: in the absence of a goal to which one attaches attention and interest, the tension of boredom can be anxiety-inducing rather than soporific. Thus, Apichatpong’s description of his films is not self-deprecation; rather, his work invites sleep and thereby strips the description of its negative connotation.',
      prompt: 'Which choice best states the main idea of the text?',
      choices: [
        'Audiences will fail to enjoy both *Solaris* and *Uncle Boonmee Who Can Recall His Past Lives* if they confuse sleepiness with boredom.',
        'Slow-cinema films can relieve anxiety for those who embrace their languid pace but the films increase anxiety for those experiencing boredom as a result of the lack of a cohesive narrative.',
        '*Solaris* and many other slow cinema films often induce anxiety in their audiences due to their measured pace, but films by Apichatpong do not, despite possessing other traits characteristic of the genre.',
        'It would be a misunderstanding to interpret Apichatpong’s reflection on his work as a confession of its failure, because the effects his films produce on audiences are intentional.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q12',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 2,
      passage:
        'The Pueblo of Laguna is the largest of the nineteen Pueblo tribal nations in New Mexico, covering nearly 800 square miles. Most Pueblo tribal nations are much smaller. For example, the total area of Pueblo of Sandia is 38.9 square miles, and the total area of Pueblo de Cochiti is ______',
      table: {
        caption: 'Total Areas of Five Pueblo Nations in New Mexico',
        headers: ['Tribal nation', 'Area (square miles)'],
        rows: [
          ['Pueblo of Acoma', '595.7'],
          ['Taos Pueblo', '156.2'],
          ['Pueblo of Sandia', '38.9'],
          ['Pueblo de Cochiti', '82.1'],
          ['Pueblo of Pojoaque', '21.4'],
        ],
      },
      prompt:
        'Which choice most effectively uses data from the table to complete the statement?',
      choices: [
        '156.2 square miles.',
        '595.7 square miles.',
        '82.1 square miles.',
        '21.4 square miles.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q13',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 3,
      passage:
        'A student who is researching volcanoes in Ecuador notes that the country is home to different types of volcanoes. For example, ______',
      table: {
        caption: 'Volcanoes in Ecuador',
        headers: ['Name of volcano', 'Year of last eruption', 'Volcano type'],
        rows: [
          ['Chacana', '1773 CE', 'caldera'],
          ['Imbabura', '5550 BCE', 'compound'],
          ['Chimborazo', '550 BCE', 'stratovolcano'],
          ['Fernandina', '2020 CE', 'shield'],
        ],
      },
      prompt:
        'Which choice most effectively uses information from the table to complete the example?',
      choices: [
        'Chacana is a caldera volcano, and Fernandina is a stratovolcano.',
        'Chimborazo is a caldera volcano, and Imbabura is a stratovolcano.',
        'Imbabura is a compound volcano, and Chacana is a shield volcano.',
        'Fernandina is a shield volcano, and Chimborazo is a stratovolcano.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q14',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 2,
      passage:
        'Ants and aphids are known to be mutualistic: ants feed on the honeydew produced by aphids, while aphids benefit from ants’ protection against predators. If aphid colonies — which generally require relatively stable surfaces, such as trees or other woody plants, to thrive — are too small to produce significant volumes of honeydew, however, ants will prey on aphids. Researcher Tae-Sung Kwon examined ant and aphid abundance in two habitats in South Korea, one on the mainland and one on Jeju Island. Though the habitats differed in some important respects, both were predominantly grassland, which could help explain why Kwon observed ______',
      prompt: 'Which choice most logically completes the text?',
      choices: [
        'different ant and aphid species on the mainland compared to those on the island',
        'a positive correlation between aphid diversity and abundance on both the mainland and the island.',
        'a negative correlation between ant and aphid abundance on both the mainland and the island.',
        'diminished ant and aphid abundance on the mainland compared to that on the island.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q15',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 0,
      passage:
        'British professional soccer team Manchester United Football Club, whose home uniform color is mainly red, won more than half its home matches between 1947 and 2003. This is a higher proportion of home matches than Hull City Association Football Club, whose home uniform color is not red, won during the same period. According to a study by Martin J. Attrill and colleagues, the color red can cause people to respond with fear and hesitation, which the researchers think helps explain Manchester United’s success. Nadav Goldschmied and colleagues reanalyzed the published data from this study, however, and found no evidence that red-uniformed teams are more likely than other teams to win, suggesting that Manchester United’s performance at its home stadium ______',
      prompt: 'Which choice most logically completes the text?',
      choices: [
        'would probably have remained roughly the same if its players had not been wearing red uniforms',
        'was likely influenced by its opponents’ associations with the color red.',
        'was directly tied to its players’ general satisfaction with their uniform color.',
        'may have influenced other teams to change their uniform colors.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q16',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 3,
      passage:
        'London-based Nigerian sculptor Sokari Douglas Camp creates art by cutting, bending, and welding recycled metal materials into new and thought-provoking shapes. Her work — which has been featured in galleries around the world, such as the Potters Field Commission for Southwark Council in London and Skidmore College’s Tang Teaching Museum and Art Gallery in New York — often references at least one of several ______ the environment, and Kalabari culture.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'themes; movement,',
        'themes. Movement,',
        'themes movement,',
        'themes: movement.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q17',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 0,
      passage:
        'Drummer Dennis Chambers’s distinguished career includes many memorable achievements, such as working on the Brecker Brothers’ album *Return of the Brecker Brothers*. However, as house drummer at Sugar Hill Records, a record label that was a pioneer of early hip-hop ______ Chambers joined too late to play drums on the label’s classic song “Rapper’s Delight.”',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['music,', 'music;', 'music, which', 'music'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q18',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 2,
      passage:
        'Blaise Pascal’s Pascaline device — conceived, like William Oughtred’s earlier Circular Slide Rule, amid the seventeenth century push to replace manual calculations with faster and more accurate machine-based methods — ______ among the first reproducible calculating machines.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['being', 'were', 'was', 'are'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q19',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 2,
      passage:
        'When a soil is classified using the International Union of Soil Sciences’ system, its similarity to each of the 32 soil reference groups — defined by several criteria — ______ evaluated, one group at a time, until a match is found. The comparisons are made in a specific order: thus, the criteria for lixisols (soils with clay-rich subsoil) are only applied if the soil doesn’t match the criteria for ferralsols.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['have been', 'are', 'is', 'was'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q20',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 2,
      passage:
        'Enacted in 1944, Iceland’s constitution, according to legal ______ contains one of the six constitutional features that enhance judicial independence. Explicit provisions for judicial independence, Melton and Ginsburg’s research explains, are more likely to be found in constitutions enacted after 1985.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'researchers James Melton and Tom Ginsburg',
        'researchers, James Melton and Tom Ginsburg',
        'researchers James Melton and Tom Ginsburg,',
        'researchers, James Melton and Tom Ginsburg,',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q21',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 3,
      passage:
        'Generally, sleek vehicles are more aerodynamic than bulkier ones. For example, the streamlined nose of the T-38 Talon jet helps it glide through wind with relative ease. ______ a boxy semitruck encounters more wind resistance, making it less aerodynamic.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: [
        'As a result,',
        'Specifically,',
        'In conclusion,',
        'On the other hand,',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q22',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 0,
      passage:
        'Amruta Yelamanchili has worked at NASA’s famed Jet Propulsion Laboratory (JPL), one of the world’s leading facilities for robotic space exploration. ______ Yelamanchili worked as a data scientist on the JPL’s Mars 2020 Perseverance rover team, which improved upon the 2011 Curiosity rover design by adding a coring drill to the robot that could collect rock samples for later analysis.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: ['Specifically,', 'Conversely,', 'Finally,', 'Nevertheless,'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q23',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 0,
      passage:
        'Two siblings from the same biological parents can inherit different physical traits. For instance, one sibling might inherit thin lips; the other sibling, ______ might inherit full lips.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: [
        'by contrast,',
        'for example,',
        'with this in mind,',
        'lastly,',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q24',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 2,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Soap forms as the result of a chemical reaction between fats and either sodium or potassium hydroxide.\n• One end of a soap molecule is hydrophobic (water-repelling), and one end is hydrophilic (water-attracting).\n• The hydrophobic ends of soap molecules adhere to hydrophobic surface contaminants, such as dirt and oils.\n• The soap molecules form circular structures (micelles) around contaminants.\n• The hydrophilic ends of the molecules encase the micelles in water, lifting the micelles and contaminants off surfaces.\n\nThe student wants to explain how soap removes a surface contaminant.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'Surface contaminants like dirt and oils are hydrophobic, not hydrophilic — meaning they repel water rather than attract it.',
        'Micelles are circular structures created when soap molecules attach themselves to dirt or oils.',
        'To remove dirt from a surface, soap molecules form a circular structure, or micelle, around the contaminant; next, the molecules encase the micelle in water, lifting it—and the dirt—off the surface.',
        'Dirt, an example of a hydrophobic surface contaminant, can be removed from a surface by soap, which forms as the result of a chemical reaction between fats and either sodium or potassium hydroxide.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q25',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 2,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• E. M. Forster was an acclaimed writer.\n• He is best known for his novels.\n• Forster’s most famous novels include *A Room with a View* (1908) and *Howards End* (1910).\n• His first published work of fiction was a short story called “Albergo Empedocles.”\n• It was published in *Temple Bar* in 1903.\n\nThe student wants to provide a specific example of one of E. M. Forster’s most famous works.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'E. M. Forster was an acclaimed writer known for his novels',
        '“Albergo Empedocles” was published before some of E. M. Forster’s most famous novels.',
        'The 1908 novel *A Room with a View* is one of E. M. Forster’s most famous works.',
        'E. M. Forster’s first published work of fiction was a 1903 short story called “Albergo Empedocles.”',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q26',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 0,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• The Carnegie Prize is an international art competition administered by the Carnegie Museum of Art in Pittsburgh, Pennsylvania.\n• Painter Anselm Kiefer of Germany won a Carnegie Prize gold medal in 1985.\n• Kiefer’s winning artwork was a painting entitled *Midgard*.\n• Sculptor Jean Arp of Germany won a Carnegie Prize gold medal in 1964.\n• Arp’s winning artwork was a sculpture entitled *Sculpture Classique*.\n\nThe student wants to contrast the two artworks.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'Kiefer’s *Midgard* is a painting, while Arp’s *Sculpture Classique* is a sculpture.',
        'Kiefer won a Carnegie Prize gold medal in 1985 for the painting *Midgard*',
        'Carnegie Prize gold medals have been awarded to both painters and sculptors.',
        'Both *Midgard* and *Sculpture Classique* are Carnegie Prize gold medal-winning artworks.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q27',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 2,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• The Polytechnic in Gdańsk, Poland, is home to a Foucault pendulum.\n• The pendulum consists of a weighted ball that swings at the end of a roughly 26-meter-long cable.\n• Like all Foucault pendulums, it dangles from a fixed point that ensures the swing path of the pendulum doesn’t change.\n• To an observer, the swing path of a Foucault pendulum appears to change over time because Earth rotates beneath it.\n• Foucault pendulums are used as a simple way to provide evidence of Earth’s rotation.\n\nThe student wants to specify the parts of a Foucault pendulum.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'The Foucault pendulum at the Polytechnic in Gdańsk, Poland, includes a cable that is roughly 26 meters long.',
        'With a swing path that appears to change over time, a Foucault pendulum provides evidence of Earth’s rotation.',
        'Dangling from a fixed point, the Foucault pendulum at the Polytechnic consists of a cable with a weighted ball at the end.',
        'The swing path of the Foucault pendulum at the Polytechnic appears to change over time.',
      ],
    },
  ],
}
