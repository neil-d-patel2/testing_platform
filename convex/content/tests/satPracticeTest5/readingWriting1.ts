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
      correctAnswer: 2,
      passage:
        'Scientists have used machine learning tools to study elephant sounds, uncovering a sophisticated communication system. The tools ______ unique patterns in the rumbling sounds elephants make. The scientists claim that these patterns are specific calls the elephants use for individuals, similar to names.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['created', 'corrected', 'detected', 'scattered'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q2',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 0,
      passageIntro:
        'The following text is from Chinua Achebe’s 1964 novel *Arrow of God*. The novel is set in Nigeria in the 1920s. Ezeulu, who is the religious leader for several villages, announces when the annual yam harvest can begin.',
      passage:
        'Whenever Ezeulu <u>considered</u> the immensity of his power over the year and the crops and, therefore, over the people he wondered if it was real. It was true he named the day for the feast of the Pumpkin Leaves and for the New Yam feast; but he did not choose it. He was merely a watchman. His power was no more than the power of a child over a goat that was said to be his.',
      prompt:
        'As used in the text, what does the word “considered” most nearly mean?',
      choices: ['Pondered', 'Anticipated', 'Allowed', 'Respected'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q3',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 2,
      passageIntro:
        'The following text is adapted from John Mathews’s 1925 short story “Fog.”',
      passage:
        'The fog extended its tentacles over city and river, gradually obliterating <u>traces</u> of familiar landscapes. At five-thirty the old Panhandle bridge, supported by massive sandstone pillars, stalwart, as when erected fifty years before to serve a generation now passed behind the portals of life, had become a spectral outline against the sky.',
      prompt:
        'As used in the text, what does the word “traces” most nearly mean?',
      choices: ['Debris', 'Copies', 'Indications', 'Remembrances'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q4',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 1,
      passage:
        'Microplastics are a common pollutant in large masses of water like glaciers. High concentrations and ______ among particles—variations in size, shape, and material—make it onerous to comprehensively classify the microplastics in a water sample, so Ojeda-Benítez et al. are exploring a device to help quickly and accurately identify certain characteristics.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: [
        'restraints',
        'inconsistencies',
        'incompatibilities',
        'disruptions',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q5',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 1,
      passageIntro:
        'The following text is adapted from Henry James’s 1881 novel *The Portrait of a Lady*.',
      passage:
        'Everything Osmond did was pose—pose so subtly considered that if one were not on the lookout one mistook it for impulse. Ralph had never met a man who lived so much in the land of <u>consideration</u>. His tastes, his studies, his accomplishments, his collections, were all for a purpose.',
      prompt:
        'As used in the text, what does the word “consideration” most nearly mean?',
      choices: ['Deference', 'Calculation', 'Indecision', 'Courtesy'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q6',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 2,
      passage:
        'Adult glass eels can be found off the coast of Maine, but the eels begin their lives in the Sargasso Sea, a diverse area in the North Atlantic Ocean where they are born and later return to breed. Though biologists believe they have identified the general area in the Sargasso Sea that is crucial to the endangered eels’ survival, little is yet known about how the animals spawn there. Scientists believe that solving the mystery will lead to better conservation of glass eels and their habitat, <u>helping in turn to sustain several other species that rely on them as a food source.</u>',
      prompt:
        'Which choice best describes the function of the underlined portion in the text as a whole?',
      choices: [
        'It presents a finding from a study that identifies the circumstances required to ensure the survival of glass eels.',
        'It suggests that scientists are more concerned about other species than about glass eels’ habitat.',
        'It indicates that the benefit of understanding glass eels’ spawning behavior extends beyond the eels.',
        'It discusses a role that glass eels and other species serve in supporting the ecosystem of the Sargasso Sea.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q7',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 2,
      passage:
        'Tomi Adeyemi’s first published work, the inventive West African-inspired fantasy novel *Children of Blood and Bone*, has intriguing things to say about the relationship between identity and power. Adeyemi works in a decades-long tradition going back to writers such as Samuel Delany and Octavia Butler, who wove cultural elements of the Black diaspora into their science fiction and fantasy in a movement known as Afrofuturism. At its core, the movement is characterized by speculation, not just about distant futures or other planets but also about alternative versions of our shared past. Afrofuturism’s meditations on authority reinvigorate the creative potential of fiction.',
      prompt: 'Which choice best describes the overall structure of the text?',
      choices: [
        'It notes the political stance of an author, compares that author’s book to other earlier works, and then analyzes the influence of political events on the book.',
        'It praises a newly published author, compares that author with others who might appear superficially similar, and then points out the features of that author’s work that make it unique.',
        'It introduces an intriguing debut work, contextualizes that work as part of an ongoing literary tradition, and then describes important themes of that tradition.',
        'It summarizes a book, describes characteristics of the artistic movement of which the book is a part, and then points out the features the book shares with more widely read works.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q8',
      domain: 'Information and Ideas',
      skill: 'Central Ideas and Details',
      correctAnswer: 0,
      passage:
        'Founded in 1904, the Hispanic Society of America showcases the arts and cultures of Spanish-speaking and Portuguese-speaking regions around the world, including Latin America. It is located in New York City and has more than 18,000 objects in its museum collection. Since 2000, a number of other institutions devoted to Latino cultures have opened in the United States. A notable example is La Plaza de Cultura y Artes in Los Angeles. It focuses on Mexican American art and culture.',
      prompt:
        'Which statement about the Hispanic Society of America is best supported by the text?',
      choices: [
        'Its collection includes over 18,000 objects.',
        'It is no longer located in New York City.',
        'It was founded after 2000.',
        'It is visited by more people than any other Latino cultural institution in the US.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q9',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 0,
      passage:
        'In a 2024 study, Corrine Walsh and colleagues examined whether the composition of soil microbial communities could affect plants’ flavor chemistry. Whereas Baslam et al. (2011) showed that adding specific bacterial or fungal strains to soil can yield increased flavonoid content in spinach crops, Walsh and team applied intact microbial communities gathered from ecologically distinct settings across Colorado, including areas of ponderosa pine forest and irrigated pasture, to mustard plants and evaluated the flavor compounds in the plants’ seeds. This ensured that the microbial conditions in their experiment would better reflect the variation and complexity of naturally occurring communities.',
      prompt:
        'Based on the text, what is the most likely reason Walsh and colleagues chose to avoid the method used in the spinach study?',
      choices: [
        'The composition of microorganisms in the soil in the spinach study may not have been representative of naturally existing composition.',
        'The microbial community in the soil from the spinach study affected plants’ nutrition, not their flavor chemistry.',
        'The microbial community in the soil from the spinach study likely included similar species to those in wild soils.',
        'The diversity of species of microorganisms in the soil from the spinach study was already abnormally high before the researchers added further microorganisms.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q10',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 2,
      passage:
        'A student is writing a paper on the global rise of the home video game industry during the 1980s. The student is researching the relative popularity of various genres of console and computer games. Looking at the information in the table, the student finds that the games in the genres of ______',
      table: {
        caption: 'Home Console and Computer Games of the 1980s',
        headers: [
          'Title',
          'Approximate number of units sold worldwide',
          'Genre',
          'Developer',
        ],
        rows: [
          [
            '*Super Mario Brothers 2*',
            '7,460,000',
            'platformer',
            'Nintendo EAD',
          ],
          ['*Ice Hockey*', '2,420,000', 'sports', 'Nintendo R&D2'],
          [
            '*Where in the World Is Carmen Sandiego?*',
            '4,000,000',
            'education',
            'Broderbund',
          ],
          ['*Tetris*', '43,000,000', 'puzzle', 'Nintendo R&D1'],
        ],
      },
      prompt:
        'Which choice most effectively uses data from the table to complete the statement?',
      choices: [
        'puzzle and sports sold nearly the same number of units.',
        'platformer and education sold nearly the same number of units.',
        'puzzle and platformer outsold the games in the other genres.',
        'platformer and sports outsold the games in the other genres.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q11',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 3,
      passage:
        'Wenhao Xu and colleagues demonstrated that applying a low direct current electrical field to graphite (a conductor) and an acrylamide (AAm) gel can increase how strongly materials adhere to each other. At some voltages, adhesion strength—as measured in kilopascals (kPa) of stress needed to pull the materials apart—was high (more than 30 kPa). But the mere application of a direct current electrical field with positive voltage is not sufficient to cause increased adhesion, as evidenced by the fact that ______',
      figureNote:
        'Graph “Mean Adhesion Strength of Graphite and Acrylamide Gel, at Varying Voltages” pending insertion — the source document does not include it.',
      prompt:
        'Which choice most effectively uses data from the graph to complete the statement?',
      choices: [
        'at 0 V, mean adhesion strength was equal to 0 kPa.',
        'at 3 V, mean adhesion strength reached its highest observed level at approximately 30 kPa.',
        'at 2 V, mean adhesion strength was lower than it was at both 1 V and 3 V.',
        'at 1 V, mean adhesion strength was approximately equal to adhesion strength at 0 V.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q12',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 2,
      passage:
        'Working in Ghana, Emmanuel Hanyabui and colleagues compared the impact on pineapple growth of different combinations of soil additives, including NPK fertilizer (an inorganic fertilizer containing nitrogen, phosphorus, and potassium), organic compost, and biochar (a carbon-rich material produced from organic waste matter). Based on data in the table, pineapple farmers with no access to inorganic soil additives would likely increase the weight and size of their fruits by the greatest amount by using ______',
      table: {
        caption:
          'Effect of Various Soil Treatments on Mean Pineapple Fruit Weight and Size',
        headers: [
          'Soil treatment',
          'Weight (grams)',
          'Length (centimeters)',
          'Diameter (centimeters)',
        ],
        rows: [
          ['Control', '825.9', '6.14', '13.63'],
          ['Biochar', '915.7', '6.56', '13.63'],
          ['Compost', '864.8', '6.15', '13.22'],
          ['Biochar and compost', '979.3', '6.76', '13.68'],
          ['Biochar and NPK fertilizer', '1032.1', '6.78', '13.96'],
        ],
      },
      prompt:
        'Which choice most effectively uses data from the table to complete the text?',
      choices: [
        'compost alone.',
        'biochar alone.',
        'biochar and compost.',
        'biochar and NPK fertilizer.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q13',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 1,
      passage:
        'Neuroscientist Artin Arshamian and his team sought to determine what affects a person’s perception of an odor as pleasant: is it culture, personal taste, or aspects of human anatomy? The team assessed odor preferences in ten groups of people with different modes of living (urban, agricultural, and hunter-gatherer) including urban dwellers from a large city in Thailand and the Seri people from a small community in Mexico. The team observed that across cultures, people generally rated odors about the same: vanillin, which smells like vanilla, was typically rated more pleasant than galbazine, which smells like peanuts. The team therefore concluded that ______',
      prompt: 'Which choice most logically completes the text?',
      choices: [
        'culture likely plays more of a role in a person’s perception of how pleasant an odor is than does human anatomy.',
        'a person’s mode of living likely doesn’t have a large influence on that person’s perception of whether an odor is pleasant or unpleasant.',
        'a person who lives in an urban area is more likely to encounter the odor of vanillin than is a person who lives in a small community.',
        'a person who perceives certain odors as pleasant will likely perceive the odors as roughly equal in pleasantness.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q14',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 1,
      passage:
        'Outi Tervo and team studied the effect of human-caused noise on narwhals (*Monodon monoceros*), arctic marine mammals that are sensitive to acoustic changes in their environment. Hypothesizing that elevated sound levels affect foraging among narwhals, Tervo’s team compared narwhal diving behaviors in natural sound conditions with those behaviors in two human-caused sound exposure conditions—ship sounds and ship sounds coupled with sonic pulses. Both exposure conditions resulted in significant decreases in the number and target depth of deep dives (associated with foraging) relative to natural conditions. However, differences between diving behaviors in the two exposure types were negligible, a finding that could be attributed to the fact that ______',
      prompt: 'Which choice most logically completes the text?',
      choices: [
        'sonic pulses can be heard at significantly greater ocean depths than ship sounds can.',
        'ship sounds contribute so much to the overall sound level that the addition of sonic pulses has little effect on the narwhals’ auditory environment.',
        'narwhals forage at shallower depths in the presence of ship sounds alone than in the presence of ship sounds coupled with sonic pulses.',
        'the narwhals weren’t as sensitive to human-caused sounds as the researchers had predicted.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q15',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 1,
      passage:
        'Jesse Treviño’s 1976 painting *Mis Hermanos* was featured in the Smithsonian’s 2013 exhibition *Our America: The Latino Presence in American Art*. The piece ______ chosen for the exhibition by curator E. Carmen Ramos.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['is', 'had been', 'will be', 'is being'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q16',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 2,
      passage:
        'Mia Heavener’s 2019 novel *Under Nushagak Bluff*, which takes place in a mid-twentieth-century rural Alaskan fishing ______ the story of three Yup’ik women who grapple with the rise of commercial fisheries and other changes affecting their community.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'village; tells',
        'village. Tells',
        'village, tells',
        'village tells',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q17',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 0,
      passage:
        'Many works of the Greek historian Strabo (1st century BCE) are ______ his *Geographica*, a descriptive history of the ancient world, is an extant work: it can still be read.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'lost. Conversely,',
        'lost and conversely,',
        'lost, conversely,',
        'lost, and conversely',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q18',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 3,
      passage:
        'Enacted in 1944, Iceland’s 4,089-word constitution, in contrast to Spain’s, which was enacted in 1978 and contains a far greater number (17,608) of words, ______ as the 2nd shortest in the world. Such data are studied by constitutional scholars like George Tsebelis, who can use them to draw broader conclusions.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['have ranked', 'rank', 'are ranking', 'ranks'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q19',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 2,
      passage:
        'Working on an unimaginably small scale of billionths of a meter, nanoengineers have found ways to leverage cerium oxide ______ to improve treatments for certain conditions related to oxidative stress.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'nanoparticles’ properties’',
        'nanoparticles properties',
        'nanoparticles’ properties',
        'nanoparticle’s properties',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q20',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 0,
      passage:
        'Recordings of electrical activity in the brain, ______ increased activity in brain areas associated with suppressing motor functions.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'electrograms show that while responding to hypothetical match scenarios, the most highly skilled soccer players have',
        'hypothetical match scenario responses show that the most highly skilled soccer players captured in electrograms have',
        'the most highly skilled soccer players responding to hypothetical match scenarios have electrograms that show',
        'responses to hypothetical match scenarios show that the most highly skilled soccer players have electrograms with',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q21',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 3,
      passage:
        'A team led by Portugal researcher Isabel C.F.R. Ferreira found that many species of mushrooms contain chemicals called phenolic compounds, such as cinnamic acid and catechin. ______ Ferreira detected cinnamic acid in *Agaricus blazei* mushrooms and catechin in *Lentinus edodes* mushrooms.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: [
        'For this reason,',
        'However,',
        'Nevertheless,',
        'For example,',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q22',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 3,
      passage:
        'Resins play several important roles in maintaining the health of conifers and many other kinds of trees. ______ resins quickly seal wounds, which helps prevent harmful insects and fungi from entering trees. These sticky substances also help trees retain water that is needed for them to survive.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: ['Regardless,', 'Next,', 'However,', 'For example,'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q23',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 1,
      passage:
        'While some researchers have identified the planet Kepler-296e as potentially habitable, it’s unlikely that humanity will be able to take advantage of its favorable conditions anytime soon—it is 737 light years away. ______ humanity must first focus on making planets within our solar system more habitable.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: ['Likewise,', 'Instead,', 'For example,', 'Next,'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q24',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 1,
      passage:
        'The Tres Zapotes archaeological site is located in our home state of Veracruz, Mexico. ______ an 8.5-ton stone statue of a human head was left behind by the ancient Olmec civilization. In the nearby state of Tabasco was another stone statue that weighs 19.8 tons.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: ['In other words,', 'Here,', 'Similarly,', 'Therefore,'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q25',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 0,
      passage:
        'In a 1948 article titled “The Language of Lines,” Brazilian photographer José Yalenti argued that black-and-white photography’s distinctive—and in his view, superior—use of lines is what elevates the medium to the status of fine art. ______ Yalenti insisted that conveying perspective through linear forms is photography’s “indisputable and exclusive domain,” creating a visual language surpassing even celebrated painters’ works.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: ['Indeed,', 'In any case,', 'However,', 'Even so,'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q26',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 2,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• A merchant ship is any ship hired to carry cargo or passengers.\n• A ship’s carrying capacity is also known as its deadweight tonnage (DWT).\n• In 2021, there were a total of 1,323 merchant ships registered in the Bahamas.\n• The combined DWT of these ships was 74.3 million tons.\n\nThe student wants to emphasize the combined deadweight tonnage of the Bahamas’ merchant ships in 2021.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'The carrying capacity of a merchant ship is also known as deadweight tonnage.',
        'In 2021, the Bahamas had 1,323 merchant ships hired to carry cargo or passengers.',
        'Combined, the Bahamas’ merchant ships had a deadweight tonnage of 74.3 million tons in 2021.',
        'There were a total of 1,323 merchant ships—ships hired to carry cargo or passengers—registered in the Bahamas in 2021.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q27',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 2,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Louis Ballard was a classical composer and citizen of the Quapaw Tribe.\n• Ballard’s composition *Desert Trilogy* was nominated for the Pulitzer Prize in music in 1971.\n• His composition *Devil’s Promenade* incorporates a Seneca cow-horn rattle, a traditional Native instrument.\n• Ethnomusicologist Tara Browner claims that Ballard’s compositions rely on elements originating within Native musical traditions.\n\nThe student wants to support Browner’s claim about Louis Ballard’s compositions.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'According to Browner, composer Louis Ballard, who wrote *Desert Trilogy*, relies on elements with origins in Native musical traditions.',
        'Classical composer Louis Ballard, who wrote *Devil’s Promenade*, was nominated for the Pulitzer Prize in music in 1971.',
        'Browner posits that Louis Ballard’s compositions rely on elements originating within Native musical traditions; *Devil’s Promenade* affirms this assertion, incorporating a Seneca cow-horn rattle.',
        'Browner claims that Louis Ballard’s compositions, one of which was nominated for the Pulitzer Prize, rely on elements originating within Native musical traditions.',
      ],
    },
  ],
}
