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
      passage:
        '*October*, painted in the Realist style by Jules Bastien-Lepage, depicts peasant women picking potatoes. The Realists’ emphasis on accurately portraying the experiences of average working people was largely a rejection of the romantic style evident in many paintings by Jean-Victor Schnetz, which instead ______ their subjects’ beauty or heroism while hiding all imperfection.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['mock', 'exaggerate', 'correct', 'undermine'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q2',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 3,
      passage:
        'The Magdalena River delta in Colombia is where the river flows into the Caribbean Sea. As the river reaches the sea, it forms smaller channels where sediments carried by the river are deposited and form many deltaic lobes, or wetland formations. The shape and size of the delta are ______ by the sea’s tides, which shift sediments along the coast and reshape the deltaic lobes over time.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['enhanced', 'protected', 'surpassed', 'influenced'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q3',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 3,
      passage:
        'Lisa Linn Kanae is a celebrated contemporary Hawaiian author whose work is ______ by a rich literary history. From the traditional stories of the Kanaka Maoli, or Native Hawaiian people, to the works of writers such as David Malo, the literary heritage of Hawai‘i is distinctive and vibrant.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['summarized', 'overlooked', 'supplanted', 'preceded'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q4',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 0,
      passage:
        'The term “agglomeration economies” refers to the economic benefits enjoyed by firms in the same industry that ______ in a region. For example, in the computer manufacturing industry in the United Kingdom, firms that locate near one another can more readily take advantage of increased potential for information sharing among firms that fosters greater technological innovation.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['concentrate', 'recur', 'dissipate', 'terminate'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q5',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 1,
      passage:
        'In the decades after Mexico won its independence from Spain, literature became a medium through which the new nation ______ its autonomous identity, with authors such as Manuel Payno and Justo Sierra Méndez helping to shape what would become a distinctly Mexican literary tradition.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['decried', 'realized', 'evaded', 'overcame'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q6',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 0,
      passage:
        'Researchers examining data from the New Horizons space probe, which passed Pluto in 2015, were puzzled by a 27-mile-long crater on Pluto’s icy surface. Although Pluto is mostly covered in frozen methane and nitrogen, the surface near the crater seemed to show the presence of water ice and ammonia—both of which are associated with eruptions from ice volcanoes. <u>Additionally, the shape and appearance of the crater did not suggest that it was formed by impact.</u> Based on this evidence, scientist Dale Cruikshank and his team hypothesized that the crater was likely once a massive ice volcano.',
      prompt:
        'Which choice best describes the function of the underlined sentence in the text as a whole?',
      choices: [
        'It implies that the research team eliminated an alternative explanation for the crater based on available evidence.',
        'It identifies a misconception that the researchers had about the crater when they were first studying the data.',
        'It emphasizes the importance of the New Horizons space probe to researchers.',
        'It introduces previous findings that suggested a research method for Cruikshank and his team.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q7',
      domain: 'Craft and Structure',
      skill: 'Cross-Text Connections',
      correctAnswer: 3,
      passage:
        'Text 1\n\nIn the past, music albums were created to be played back on physical formats like records. A typical record holds only about twenty-five minutes of music on each of its shiny black sides. This forced artists and producers to think carefully about what music to include on an album and what to leave out. Today’s artists don’t have to worry as much about fitting their music on physical formats. For this reason, many of today’s artists are making albums that are much longer than albums from decades past.\n\nText 2\n\nIn today’s digital age, most music is created to be streamed from online services. These services remove the limitations of physical formats like records and CDs. This may be why many new albums are longer and have more songs than albums crafted for physical formats. Unfortunately, many of these longer albums suffer from a lack of focus.',
      prompt:
        'Based on the texts, the author of Text 1 and the author of Text 2 would most likely agree with which statement about many new albums?',
      choices: [
        'Many new albums sell more copies than albums generally once sold.',
        'Many new albums are quieter than albums generally once were.',
        'Many new albums include more artwork than albums generally once included.',
        'Many new albums are longer than albums generally once were.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q8',
      domain: 'Information and Ideas',
      skill: 'Central Ideas and Details',
      correctAnswer: 2,
      passage:
        'It has long been thought that the original author of the US Pledge of Allegiance was Francis Bellamy, who said that he wrote the pledge one evening in August of 1892. But a historian recently discovered a newspaper article that was published several months before August 1892. The article describes students reciting the same pledge that Bellamy claims he first wrote in August. This means that Bellamy may not have created the pledge after all.',
      prompt:
        'Based on the text, what piece of knowledge about the Pledge of Allegiance has recently become uncertain?',
      choices: [
        'The name of the newspaper that first published the pledge',
        'How many changes were made to the pledge in the 1900s',
        'The identity of the person who first wrote the pledge',
        'Which part of the pledge students liked best in 1892',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q9',
      domain: 'Information and Ideas',
      skill: 'Central Ideas and Details',
      correctAnswer: 2,
      passage:
        'Toads and macaque monkeys can see in three dimensions (3D), which helps them perceive distance and depth. Octopuses and squid are thought to lack 3D vision. Many researchers once thought the same about cuttlefish, but Trevor Wardill and his team wanted to test whether this assumption was true. The team studied how cuttlefish wearing 3D glasses reacted to 3D images of shrimp (a favorite prey) projected on a tank wall. Cuttlefish changed their striking position to match the 3D images, suggesting that their vision is more like that of toads and macaque monkeys than that of octopuses or squid.',
      prompt: 'Which choice best states the main idea of the text?',
      choices: [
        'Wardill’s team designed 3D glasses for cuttlefish.',
        'Before completing their study, Wardill’s team showed that toads have 3D vision, but macaque monkeys may not.',
        'The findings of Wardill and his team’s study suggest that like toads and macaque monkeys, cuttlefish may also have 3D vision',
        'Cuttlefish eyes are much more complex than those of either toads or macaque monkeys.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q10',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 0,
      passageIntro:
        'The following text is from Anthony Trollope’s 1855 novel *The Warden*. Tom Towers is a writer for the newspaper *The Jupiter*.',
      passage:
        'It is true that in far-off provinces men did not talk daily of Tom Towers but they read *The Jupiter*, and acknowledged that without *The Jupiter* life was not worth having. This kind of hidden but still conscious glory suited the nature of the man. He loved to sit silent in a corner of his club and listen to the loud chattering of politicians, and to think how they all were in his power, — how he could smite the loudest of them, were it worth his while to raise his pen for such a purpose.',
      prompt: 'What does the text most strongly suggest about Tom Towers?',
      choices: [
        'He takes private satisfaction in his capacity to influence public opinion.',
        'He seeks mainly the admiration of readers in places that are far away.',
        'He has received much praise but tends to place too much value on his own importance.',
        'He flatters himself that his readers take a greater interest in him than in politicians.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q11',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 2,
      passage:
        'Researchers Carolina Laura Morales and Anna Traveset gathered data about flowering plants growing alongside each other in various locations. In each case, the researchers identified one plant as a “target species” and a nearby plant as a “neighboring species.” The researchers then calculated a value to show how the neighboring species affected pollinator visits to the target species. The table shows that the prickly pear had an effect value of ______',
      table: {
        caption:
          'Effect of Neighboring Species on Pollinator Visits to Target Species',
        headers: ['Neighboring species', 'Target species', 'Effect value'],
        rows: [
          ['sticky catchfly', 'common cow-wheat', '0.2379'],
          ['prickly pear', 'jagged lavender', '0.1292'],
          ['viper’s-bugloss', 'butterfly flower', '−0.3312'],
        ],
      },
      prompt:
        'Which choice most effectively uses data from the table to complete the example?',
      choices: ['0.2379.', '−0.3312.', '0.1292.', '−3.2570.'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q12',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 3,
      passage:
        'The nearly forty tribes located in Oklahoma, including the Chickasaw Nation and the Seminole Nation, operate numerous businesses and generate billions of dollars in revenue. A student in an economics class is researching the tribes’ collective activity as a single industry. The student wants to compare that industry’s contribution to Oklahoma’s overall economy in 2017 with the contributions made by three other industries in the state. Looking at the table, the student finds that tribal economic activity totaled over $7.3 billion, ranking it above ______',
      table: {
        caption: 'Impact of Four Key Industries on Oklahoma Economy in 2017',
        headers: [
          'Industry',
          'Approximate total contribution by industry',
          'Number of people employed by industry',
          'Average contribution per employee by industry',
        ],
        rows: [
          [
            'Accommodation/food services',
            '$5,242,100,000',
            '150,373',
            '$34,861',
          ],
          ['Tribal economic activity', '$7,312,400,000', '51,674', '$141,510'],
          ['Health care', '$13,727,300,000', '193,514', '$70,937'],
          ['Retail', '$10,738,800,000', '179,208', '$59,924'],
        ],
      },
      prompt:
        'Which choice most effectively uses data from the table to complete the comparison?',
      choices: [
        'health care, retail, and accommodation/food services.',
        'both accommodation/food services and retail but below health care.',
        'accommodation/food services and nearly equal to health care and retail.',
        'accommodation/food services but below both health care and retail.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q13',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 0,
      passage:
        'Assessing the role of forests as sinks for airborne microplastics that would otherwise continue to disperse in the atmosphere, Akane Miyazaki and her team measured concentrations of plastic particulates on leaves from konara oak trees in Japan. The team used three separate extraction methods: an ultrapure water rinse, a rinse combined with ultrasonic waves, and an alkaline solution treatment that removes epicuticular wax (a surface coating on most land plants to which particles can adhere). The concentrations of particulates recovered were 7.6 percent for water extraction, 38.4 percent for ultrasonic extraction, and 53.8 percent for alkaline extraction, leading the team to conclude that previous assessments have likely underestimated forest canopies’ capacity as sinks.',
      prompt:
        'Which detail, if true, would most directly support the team’s conclusion?',
      choices: [
        'Most studies of microplastic accumulation on leaves have utilized extraction methods that do not have a substantial effect on epicuticular wax.',
        'Most studies of microplastic accumulation on leaves have focused on forests with diverse tree species that exhibit varying levels of epicuticular wax',
        'Most studies of microplastic accumulation on leaves have involved the application of alkaline treatments before water and ultrasonic treatments rather than after them.',
        'Most studies of microplastic accumulation on leaves have found particulate concentrations that greatly exceeded 53.8 percent.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q14',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 0,
      passage:
        'Mariana Lopes Barata and Pedro Simóes Coelho collected data from 324 music-streaming service users to identify factors that influence users to opt for paid (premium) versions of music streaming services, like Apple Music. They hypothesized that hedonic motivation (the enjoyment that a consumer perceives to be associated with using a service) would be positively correlated with users’ intentions to adopt premium versions. The researchers asked participants to rate statements such as “Using paid music streaming services is pleasant.” They found that, indeed, hedonic motivation positively influences the intention to adopt premium streaming service versions, which suggests that ______',
      prompt: 'Which choice most logically completes the text?',
      choices: [
        'it may be advantageous for music streaming companies to try to influence the extent to which potential users perceive the premium version as pleasant to use',
        'the statement “Using paid music streaming services is pleasant” is not a reliable measure of hedonic motivation.',
        'users’ intentions to pay for premium streaming services are probably unaffected by factors other than hedonic motivation.',
        'participants who strongly agreed with the statement “Using paid music streaming services is pleasant” were more likely to express loyalty to Apple Music than to other streaming services.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q15',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 1,
      passage:
        'On January 24, 2013, the *Navajo Times* ______ a profile of Cornfields Chapter (Kiiltsoitah), which is one of the 110 chapters of the Navajo Nation (Naabeehó Bináhásdzo). The article was later included in a book series called *Exploring the Navajo Nation Chapter by Chapter*.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['will publish', 'published', 'publishes', 'is publishing'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q16',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 1,
      passage:
        'Topographical prominence is a measure of a mountain’s independence from other mountains. Having 11,486 feet of prominence, ______',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'geographers have ranked Mount Hayes, a peak in the United States, as the world’s 51st most prominent mountain.',
        'Mount Hayes, a peak located in the United States, is ranked by geographers as the world’s 51st most prominent mountain.',
        'the list of mountains geographers rank as the world’s most prominent includes Mount Hayes, a peak located in the United States, at number 51.',
        'the ranking given by geographers to Mount Hayes, a peak located in the United States, is 51st most prominent mountain in the world.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q17',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 2,
      passage:
        'According to the original text of the US Constitution, written in 1787, the presidential candidate receiving the second-most Electoral College votes becomes vice president. The 12th Amendment, ratified in ______ separated the elections for the two offices.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['1804—', '1804', '1804,', '1804:'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q18',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 3,
      passage:
        'The colors of Navajo (Diné) weaver Melissa Cody’s work *World Traveler* (2014) recall both the Germantown revival, a weaving style developed by Navajo Nation ______ ago, and the color palette of the video games that Cody played as a child.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'artist’s over 160 year’s',
        'artists’ over 160 years',
        'artists over 160 years’',
        'artists over 160 years',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q19',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 2,
      passage:
        'A groundbreaking visual artist of her day, ______ including artists Vasily Kandinsky and Piet Mondrian.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'well before many of her contemporaries, Hilma af Klint explored abstract modes of painting,',
        'the explorations of Hilma af Klint into abstract modes of painting occurred well before those of many of her contemporaries,',
        'Hilma af Klint explored abstract modes of painting well before many of her contemporaries,',
        'Hilma af Klint, well before many of her contemporaries, explored abstract modes of painting,',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q20',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 1,
      passage:
        'The small celestial body known as 55576 Amycus is expected to have a relatively short lifetime in the outer solar system. Within just a few million years, 55576 Amycus is likely to migrate into the inner solar system or be destroyed, according to ______ trajectory.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'astronomer’s modeling of the object’s',
        'astronomers’ modeling of the object’s',
        'astronomers modeling of the objects',
        'astronomers modeling of the object’s',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q21',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 1,
      passage:
        'Many works of the Greek historian and geographer Agatharchides (second century BCE), including his history of Europe, *Ta kata ten Europen*, have been lost to time. Scholars wishing to read a work written by the Greek historian and geographer needn’t ______ they can still procure a copy of Agatharchides’s *De Mari Erythraeo*, a geographical treatise.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'despair, though,',
        'despair, though;',
        'despair, though',
        'despair-though',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q22',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 1,
      passage:
        'Using LiDAR (Light Detection and Ranging) technology, a Tulane University archaeologist scanned and mapped the ancient Maya city of Tikal, which lies deep in the Guatemalan rainforest. Some of Tikal’s old stones are intertwined with the roots of surrounding trees, rendering parts of the complex physically inaccessible to researchers. ______ the LiDAR’s penetrating light waves were the only way to reveal some previously unknown aspects of the Maya city.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: ['Afterward,', 'Hence,', 'Similarly,', 'Specifically,'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q23',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 1,
      passage:
        'Imagine a magazine that a reader has thrown away. This magazine is post-consumer waste, because it became waste after reaching the consumer. ______ the paper scraps left over from printing the magazine are pre-consumer waste, as they became waste before reaching the consumer.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: [
        'As a result,',
        'By contrast,',
        'For example,',
        'Specifically,',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q24',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 1,
      passage:
        'One proposed boundary between Earth’s atmosphere and outer space is the Kármán line, 100 kilometers above sea level. Based on the work of physicist Theodore von Kármán, this line marks the theoretical height at which an aircraft no longer remains aloft using the force of lift. ______ an aircraft sustains flight past this altitude primarily by its velocity, reaching a speed sufficient to maintain an orbit but not to generate enough lift from the thin air.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: ['Regardless,', 'Instead,', 'Granted,', 'For instance,'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q25',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 2,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• The Schomburg Center for Research in Black Culture is a research library in New York City.\n• It was named for Arturo Alfonso Schomburg.\n• It was founded in 1925.\n\nThe student wants to indicate the year the Schomburg Center was founded.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'The Schomburg Center is a research library.',
        'The Schomburg Center is located in New York City.',
        'The Schomburg Center was founded in 1925.',
        'The Schomburg Center was named for Arturo Alfonso Schomburg.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q26',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 0,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Kale is a vegetable that contains ascorbic acid, an essential nutrient for humans.\n• Grapes are fruits that contain ascorbic acid.\n• There are 120 milligrams (mg) of ascorbic acid in every 100 grams (g) of kale.\n• There is 10 mg of ascorbic acid in every 100 g of grapes.\n• Humans cannot make ascorbic acid in their bodies, so they must get it from foods, including fruits and vegetables.\n• Ascorbic acid is also known as vitamin C.\n\nThe student wants to compare the vitamin C content of kale and grapes.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'Kale and grapes both contain vitamin C, but kale contains more.',
        'Kale contains vitamin C (also known as ascorbic acid)—120 mg in every 100 g, to be exact.',
        'Kale is a vegetable, and grapes are fruits.',
        'Humans cannot make ascorbic acid in their bodies, but they can get it from kale.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q27',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 2,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Merle Oberon (1911–1979) was an actress born in Mumbai (then known as Bombay), India.\n• She was of Indian, Māori, and Irish heritage.\n• She was the first Indian-born actress to be nominated for an Academy Award.\n• Early in her career, she played many nameless, uncredited roles, such as her role in *Strange Evidence* (1933).\n• Later she played many named, credited roles, such as Jill Baker in *That Uncertain Feeling* (1941).\n\nThe student wants to emphasize a similarity between the two films.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        '*Strange Evidence* (1933) was released early in actress Merle Oberon’s career, whereas *That Uncertain Feeling* (1941) came out later.',
        'Early in her career, Merle Oberon wasn’t listed in some film credits, such as the credits for the film *Strange Evidence*, where she played a nameless, uncredited role.',
        '*Strange Evidence* and *That Uncertain Feeling* are both films that include Merle Oberon, the first Indian-born actress to be nominated for an Academy Award.',
        'In *Strange Evidence* (1933), actress Merle Oberon played a nameless, uncredited role; however, in *That Uncertain Feeling* (1941), she played a credited role—that of Jill Baker.',
      ],
    },
  ],
}
