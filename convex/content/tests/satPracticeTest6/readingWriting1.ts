import type { TestModule } from '../../types'

/**
 * Reading and Writing — Module 1. 27 questions, fixed (non-adaptive).
 *
 * The source document italicises with `_underscores_`; `RichText` only knows
 * `*asterisks*`, so titles are converted on the way in.
 */
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
      correctAnswer: 0,
      passageIntro:
        'The following text is from Lilliam Rivera’s 2020 novel *Never Look Back*. The text describes the narrator arriving at his father’s apartment.',
      passage:
        '“Pops, I’m here!” I drop my bag and set my guitar case against a wall. I <u>place</u> my keys on the bowl right next to the ceramic elephant Pops got me on one of his trips to Santo Domingo when I was a little kid.',
      prompt:
        'As used in the text, what does the word “place” most nearly mean?',
      choices: ['Put', 'Remove', 'Rank', 'Unfold'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q2',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 3,
      passage:
        'One way to ______ the importance of a scholar’s research is to track how often other scholars refer to that research. For example, Federal Reserve Bank of Cleveland economist Loretta J. Mester, who studies central banking, is among the world’s most frequently cited researchers in her field, indicating that her work has been quite significant.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['diminish', 'increase', 'vary', 'measure'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q3',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 1,
      passage:
        'Though most hoaxes perpetrated as jokes by mischievous users of Wikipedia, an online encyclopedia that almost anyone can freely edit, have quickly been detected and removed, a few fictitious entries, such as those for the American punk rock band The Deadweights and the 17th-century legislator Nicholas Burkhart, persisted on the site for many years before they were finally recognized as ______ and deleted.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['enhancements', 'pranks', 'revelations', 'analyses'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q4',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 1,
      passage:
        'There are many famous examples of election pollsters making inaccurate predictions in presidential elections. But neuroscientist and election pollster Sam Wang has said that these prediction failures should not lead campaigns to ______ election polling entirely. Polling is about more than just predicting the winner; throughout campaigns, it helps strategists identify where their efforts are most likely to be effective.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['distort', 'neglect', 'supplement', 'enact'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q5',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 3,
      passageIntro:
        'The following text is adapted from Virginia Woolf’s 1919 novel *Night and Day*. Katharine is the granddaughter of a celebrated poet.',
      passage:
        '[Katharine’s] descent from [a celebrated poet] was no surprise to her, but matter for satisfaction, until, as the years wore on, certain drawbacks made themselves very <u>manifest</u>. Perhaps it is a little depressing to inherit not lands but an example of intellectual virtue; perhaps the conclusiveness of a great ancestor is a little discouraging to those who run the risk of comparison with him.',
      prompt:
        'As used in the text, what does the word “manifest” most nearly mean?',
      choices: ['Particular', 'Involved', 'Expected', 'Evident'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q6',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 1,
      passage:
        'What is a city? The answer depends on where you live! Many countries define an area as a city based on how many people live there. However, not every country uses the same numbers. Albania defines a city as an area with a population of at least 400, while Greece defines a city as having a minimum population of 10,000. Some countries even define cities using other factors, like the number of buildings in the area.',
      prompt: 'Which choice best describes the overall structure of the text?',
      choices: [
        'It lists the number of cities in one country, then compares that number to the number of cities in another country.',
        'It poses a question, then explains why the question has many answers.',
        'It describes two locations, then explains why only one of the locations is considered a city.',
        'It offers a recommendation, then provides reasons for that recommendation.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q7',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 2,
      passageIntro:
        'The following text is from Bram Stoker’s 1911 novel *The Lair of the White Worm*. Adam is meeting his great-uncle Richard at a port.',
      passage:
        'The meeting so auspiciously begun proceeded well. Adam, seeing that the old man was interested in the novelty of the ship, suggested that he should stay the night on board, and that he would himself be ready to start at any hour and go anywhere that the other suggested. This affectionate willingness to fall in with his own plans quite won the old man’s heart. He warmly accepted the invitation, and at once they became not only on terms of affectionate relationship, but almost like old friends.',
      prompt: 'Which choice best states the main purpose of the text?',
      choices: [
        'It describes why Adam and his great-uncle Richard are excited for their upcoming journey on the ship.',
        'It contrasts great-uncle Richard’s wary first impressions of Adam with his ultimate affection toward him.',
        'It showcases how Adam’s flexibility and consideration strengthen his relationship with his great-uncle Richard.',
        'It states the reasons why Adam and his great-uncle Richard decide to sleep on the ship rather than finding lodging on land.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q8',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 1,
      passage:
        'A team of researchers discovered that Matabele ants can identify an infected wound in a member of the colony and then treat the infection by covering the wound with antimicrobial secretions that the ants produce. The team found that the mortality rate for Matabele ants with infected injuries was reduced by 90% with this treatment, and they are hopeful that this discovery could aid in the development of new antibiotics for human use.',
      prompt: 'Which choice best describes the overall structure of the text?',
      choices: [
        'It identifies an issue concerning Matabele ants and then proposes a solution to address the issue.',
        'It summarizes research findings on Matabele ants and then identifies an area for further research.',
        'It describes unique properties of Matabele ants and then speculates on how those properties evolved.',
        'It introduces a study of Matabele ants and then explains the research methods used in the study.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q9',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 2,
      passage:
        'Archaeologists have observed similarities in the tools, such as bidirectional blades, uncovered at the Neolithic-period Mesopotamian settlement of Çayönü Tepesi and those uncovered at roughly contemporaneous settlements elsewhere in Southwest Asia, including those in the South Levant, Central Anatolia, and Central Zagros. Although similarities in tools could be attributed to imitative behavior or trade, Nefize Ezgi Alunışık et al. found evidence of genetic affinity among the populations of Çayönü Tepesi, Central Anatolia, the South Levant, and—to a lesser extent—Central Zagros.',
      prompt:
        'Information in the text best supports which statement about the finding made by Alunışık et al.?',
      choices: [
        'It suggests that in the Neolithic period, people in the South Levant and Central Anatolia imitated tool designs originating in Çayönü Tepesi more frequently than people in Central Zagros did.',
        'It helps explain why contemporaneous Neolithic peoples in Southwest Asia had similar tools but lacked other obvious cultural similarities.',
        'It raises the possibility that similarities in the design of tools found at Neolithic settlements in Southwest Asia emerged due to population blending between those settlements.',
        'It implies that people and tools likely arrived in Çayönü Tepesi from settlements in Central Anatolia and the South Levant at an earlier time than they arrived from settlements in Central Zagros.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q10',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 1,
      passageIntro:
        'The following text is from Mark Haber’s 2022 novel *Saint Sebastian’s Abyss*. The narrator and Schmidt are both art critics.',
      passage:
        'When my first wife admitted to Schmidt over dinner that she didn’t find art, painting in particular, especially compelling, Schmidt winced, set down his fork, and sighed dramatically; he then excused himself, explaining an appointment he’d forgotten about had suddenly and inexplicably been remembered, while making it abundantly clear there was no appointment at all.',
      prompt: 'Based on the text, what is notable about Schmidt’s behavior?',
      choices: [
        'Schmidt is only given to theatrical behavior when in the company of the narrator and his first wife.',
        'Schmidt conveys his feelings about one of his dining companions without explicitly stating them.',
        'Schmidt’s absentmindedness regarding his schedule is uncharacteristic of him.',
        'Schmidt’s departure is occasioned by the resumption of a previous disagreement with the narrator’s first wife about a particular painting.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q11',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 0,
      passage:
        '*Dos Mujeres (Salvadora y Herminia)* is a painting by Frida Kahlo, dated 1928. It’s part of the full collection of the Museum of Fine Arts, Boston, in Boston, Massachusetts. A digital image of it can also be found in an online collection. In a paper, a student claims <u>that people usually spend more time viewing a work of art in a museum than they do online.</u>',
      prompt:
        'Which finding, if true, would most directly support the underlined claim?',
      choices: [
        'Most people spend about three minutes viewing *Dos Mujeres (Salvadora y Herminia)* at the museum and only about one minute viewing it online.',
        '*Dos Mujeres (Salvadora y Herminia)* isn’t the only work of art by Frida Kahlo that has been put online.',
        'Most people who go to museums in Boston are visiting from other places.',
        'More than one museum has works of art by Frida Kahlo in its full collection.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q12',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 0,
      passage:
        '“Aunt Sue’s Stories” is a 1926 poem by Langston Hughes. In the poem, the speaker indicates that the stories Aunt Sue tells are based on Aunt Sue’s personal experiences, saying that ______',
      prompt:
        'Which choice most effectively uses a quotation from “Aunt Sue’s Stories” to illustrate the claim?',
      choices: [
        'a listening child “knows that Aunt Sue / Never got her stories out of any book at all. / But that they came / Right out of her own life.”',
        'the people in the stories “Mingle themselves softly / In the flow of old Aunt Sue’s voice, / Mingle themselves softly.”',
        'dark shadows “cross and recross / Aunt Sue’s stories.”',
        'the stories are told during “Summer nights on the front porch.”',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q13',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 0,
      passage:
        '*Poems* is an 1895 collection of poetry by Frances E.W. Harper. In one of Harper’s poems, the speaker suggests that those who mistreat people with less privilege will eventually receive divine judgment for it, saying, ______',
      prompt:
        'Which quotation from *Poems* most effectively illustrates the claim?',
      choices: [
        '“Men may tread down the poor and lowly, / May crush them in anger and hate, / But surely the mills of God’s justice / Will grind out the grist of their fate,” (from “An Appeal to My Countrywomen”)',
        '“When ye plead for the wrecked and fallen, / The exile from far-distant shores, / Remember that men are still wasting / Life’s crimson around your own doors.” (from “An Appeal to My Countrywomen”)',
        '“Say not the age is hard and cold— / I think it brave and grand: / when men of diverse sects and creeds / Are clasping hand in hand,” (from “The Present Age”)',
        '“God help our native land, / Bring success to her strife, / And shower from thy hand / A more abundant life,” (from “God Bless Our Native Land”)',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q14',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 3,
      passage:
        'To measure whether countries in free trade agreements (FTAs)—agreements among nations to reduce tariffs, duties, and other trade barriers—experience changes in total agricultural exports, economist Kayode Ajewole and colleagues calculated average export growth rates for several countries over the five years before and the five years after entering an FTA with the United States. The graph shows the results for three countries in the study. Consulting the graph, a student claims that joining an FTA increases the rate of growth of a country’s total agricultural exports.',
      figureNote:
        'Graph “Average Total Agricultural Export Growth Rate, Five Years Pre- and Post-FTA with the United States” pending insertion — the source document does not include it.',
      prompt:
        'Which choice best describes data from the graph that weaken the student’s claim?',
      choices: [
        'All the countries shown had positive growth in agricultural exports over the five years after joining their respective FTAs, but their rates of export growth varied.',
        'Although agricultural exports from Jordan decreased over the five years before JOFTA, a reversal in this trend was observed over the five years after Jordan joined JOFTA.',
        'Over the five years after Costa Rica joined CAFTA-DR, agricultural exports from Costa Rica grew at a rate of about 13.5 percent, which is higher than the rate over the five years before Costa Rica joined the agreement.',
        'Although agricultural exports from Morocco grew over the five years after Morocco joined MAFTA, their growth rate was even higher in the five years before MAFTA.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q15',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 1,
      passage:
        'Born in Chile in 1917, artist and ethnomusicologist Violeta Parra was a pioneer in the nueva canción Chilena (Chilean New Song) movement that emerged in the late 1950s and then spread throughout Latin America, Portugal, and Spain as nueva canción. Parra traveled all over Chile compiling extensive records of authentic folk music as well as recipes, proverbs, and other facets of cultural history. These records formed the foundation for the early movement’s revival of traditional Chilean folk forms in new songs that represented modern realities of the working class and strongly advocated for social change. <u>As the movement spread beyond Chile, the breadth of musical traditions incorporated into its foundation also expanded.</u>',
      prompt:
        'Which detail about songs associated with nueva canción, if true, would best illustrate the underlined claim?',
      choices: [
        'Many feature political commentary addressing contemporary issues that stemmed from shared experiences of European colonization in Latin American countries.',
        'Many demonstrate the stylistic influence of corrido, a genre of narrative songs from Mexico that had come to be characterized by political themes in the early 1800s.',
        'Many were produced by Argentinian artists in the late 1950s, with others by artists in additional Latin American countries first emerging soon after.',
        'Many were written with parts meant to be played on the quena, a traditional flute used across Andean countries, including Chile.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q16',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 1,
      passage:
        'The first modern public zoo opened at the height of the French Revolution in 1793. Located in downtown Paris, the zoo was called the Menagerie du Jardin des Plantes. It was filled with living animals that had been confiscated ______ the private collections of French aristocrats.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['from;', 'from', 'from:', 'from,'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q17',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 2,
      passage:
        'Cy Twombly, a US painter and sculptor, created many large-scale abstract works, such as his 10-painting series *Fifty Days at Iliam*. In these works, Twombly’s artistic style is exemplified by his use of graffiti-like ______ often incorporate words or phrases from poetry and mythology.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'scribbles; that',
        'scribbles. That',
        'scribbles that',
        'scribbles: that',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q18',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 1,
      passage:
        'Kizomba, a genre of dance that originated in Angola, has become an international ______ 2022, the Indian dance duo known as Elvis and Namrata defeated performers from around the world to win the annual Olympiads of Kizomba competition held in Paris, France, becoming the first ever Asian winners.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'phenomenon and in',
        'phenomenon. In',
        'phenomenon, in',
        'phenomenon in',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q19',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 2,
      passage:
        'While some computer scientists, such as Michael Running Wolf, are optimistic about the use of large language models (LLMs) to preserve endangered Indigenous languages, researchers like Aliya Bhatia of the Center for Democracy and Technology ______ that from an archival standpoint, English-based LLMs may do more harm than good, given their propensity for error.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['fears', 'has feared', 'fear', 'is fearful'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q20',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 1,
      passage:
        'As a leader of the National Woman Suffrage Association in the late 1800s, Olympia Brown of ______ an important role in the campaign to secure voting rights for US women.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'Connecticut. Played',
        'Connecticut played',
        'Connecticut; played',
        'Connecticut: played',
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
      correctAnswer: 3,
      passage:
        'In astrophysics, a ring of debris orbiting a larger object within the object’s Roche limit is expected to persist as a ring, whereas a ring of debris orbiting outside this limit would likely accrete into a satellite (e.g., a moon). Bruno Morgado and colleagues, ______ detected a dense ring of material orbiting the trans-Neptunian object Quaoar at a distance of 2,500 miles, well outside the calculated Roche limit of 1,100 miles, that has remained intact.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: ['likewise,', 'for example,', 'fittingly,', 'though,'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q23',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 3,
      passage:
        'A team led by Portuguese researcher Isabel C.F.R. Ferreira found that many species of mushrooms contain chemicals called phenolic compounds, such as protocatechuic acid and biochanin. ______ Ferreira detected protocatechuic acid in *Agaricus bisporus* mushrooms and biochanin in *Ganoderma lucidum* mushrooms.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: [
        'Nevertheless,',
        'However,',
        'For this reason,',
        'For example,',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q24',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 3,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Hina Hanta is an online archive curated by the Choctaw Nation of Oklahoma.\n• It features images of cultural artifacts relevant to the history of the Choctaw people.\n• It features household items, including a cup (*isht ishko* in Choctaw) made from clay.\n• The cup was made in 1891.\n• Hina Hanta features sports apparel, including a stickball collar (*innuchi*) made from horsehair.\n• The stickball collar was made in 2016.\n\nThe student wants to make a generalization about the Hina Hanta archive.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'The Choctaw name for the clay cup is *isht ishko*.',
        'Included in the Hina Hanta online archive is a clay cup.',
        'The horsehair stickball collar (*innuchi*) was made in 2016.',
        'Not all artifacts in the Hina Hanta archive are from the 1800s.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q25',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 3,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Most of the plant and bird species in Oahu, Hawaii, are non-native.\n• In a 2019 study, researchers wanted to know what role non-native birds play in dispersing plant seeds in Oahu.\n• Researchers catalogued plant seeds found in fecal samples from non-native birds.\n• *Clermontia kakeana*, a flowering shrub, was one of fifteen native species catalogued.\n• *Ardisia elliptica*, a tree, was one of twenty-nine non-native species catalogued.\n• Researchers concluded that non-native birds play a vital role in dispersing the seeds of native and non-native plants.\n\nThe student wants to emphasize a difference between the two plants.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'Seeds from *Clermontia kakeana* and *Ardisia elliptica* plants were found in the fecal samples of non-native Hawaiian birds, according to a 2019 study.',
        'A 2019 study catalogued plant seeds found in bird fecal samples in Oahu, Hawaii, to determine what role non-native birds play in seed dispersal.',
        'Most plant species found in Oahu, Hawaii, like *Ardisia elliptica*, are non-native.',
        'Though *Clermontia kakeana* and *Ardisia elliptica* can both be found in Oahu, Hawaii, only the former plant is native.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q26',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 2,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Gianpaolo Bellini is an Italian particle physicist.\n• Particle physicists study subatomic particles.\n• Neutrinos are some of the least understood subatomic particles.\n• Neutrinos were first discovered in the mid-twentieth century.\n• Bellini is known for his research on solar and geoneutrinos.\n\nThe student wants to provide an example of a particle physicist whose research focuses on neutrinos.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'Neutrinos are a type of subatomic particle that particle physicists are still trying to understand.',
        'By studying solar and geoneutrinos—to name just one example—particle physicists can learn more about neutrinos.',
        'Particle physicist Gianpaolo Bellini is known for his research on solar and geoneutrinos.',
        'The research done on solar and geoneutrinos exemplifies the work particle physicists do to advance our understanding of subatomic particles.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q27',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 3,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• In a 2003 study, Alexander and Schrag tested the effect of plant litter on seedling emergence in a grassland setting.\n• The test site was a mesic grassland in a dry midlatitude climate in the United States.\n• The researchers found that in these environmental conditions the presence of plant litter had a positive effect on seedling emergence.\n• Seedling emergence is when a seedling sprouts above ground and begins photosynthesis.\n\nThe student wants to present the study’s findings to an audience already familiar with the concept of seedling emergence.',
      prompt:
        'Which choice most effectively uses information from the notes to accomplish this goal?',
      choices: [
        'The findings of Alexander and Schrag’s study were published in 2003.',
        'In a 2003 study by Alexander and Schrag, plant litter was found to have a positive effect on seedling emergence, which is when a seedling sprouts and begins photosynthesis.',
        'The effect of plant litter, which includes dead leaves and other plant matter, on seedling emergence has been the subject of scientific study.',
        'Alexander and Schrag found that in a mesic grassland and a dry mid-latitude climate the presence of plant litter had a positive effect on seedling emergence.',
      ],
    },
  ],
}
