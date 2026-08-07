import type { TestModule } from '../../types'

/** Reading and Writing — Module 2. 27 questions, fixed (non-adaptive). */
export const readingWriting2: TestModule = {
  id: 'rw-2',
  title: 'Reading and Writing — Module 2',
  section: 'reading-writing',
  timeLimitSeconds: 32 * 60,
  // The break between Reading and Writing and Math, as on the real exam.
  breakAfterSeconds: 10 * 60,
  questions: [
    {
      type: 'multiple-choice',
      id: 'rw2-q1',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 3,
      passage:
        'The minor planet 8764 Gallinago was named after the animal genus that includes snipes, but most minor planets are given only an identification number, largely due to there being over 500,000 such bodies known at present. So while the task of finding a unique name for each minor planet was ______ when few had been discovered, so many minor planets have since been discovered that the task has become nearly impossible.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['insurmountable', 'substantial', 'ambiguous', 'feasible'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q2',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 1,
      passage:
        'Any effort to raise the toll that drivers must pay to use the Lewiston–Queenston Bridge, which spans the Niagara River to connect New York State and Ontario, Canada, should explain why a higher toll is necessary; no amount of justification, however, is likely to persuade some drivers who believe the current toll is ______.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['warranted', 'exorbitant', 'equivocal', 'contentious'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q3',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 3,
      passage:
        'Archaeologists have identified a plethora of beads fashioned from *Tritia gibbosula* shells in many Middle Stone Age (MSA) sites across western North Africa, including El Mnasra Cave, Morocco. In a 2021 paper, El Mehdi Sehasseh et al. attribute these artifacts’ ______ to the evolution and propagation of symbolic behavior (e.g., use of personal ornaments) in humans and the availability of *T. gibbosula* during the MSA.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['fecundity', 'heterogeneity', 'expediency', 'ubiquity'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q4',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 1,
      passage:
        'Svante Pääbo and other researchers studying the history of organisms have long utilized ancient DNA — DNA recovered from ancient organic material that has been preserved under natural conditions. However, Reyjane P. Oliveira and colleagues’ 2017 study of the evolutionary trajectory of the Malagasy grass genus *Chasechloa* instead relied on historical DNA — genomic data incidentally preserved in specimens that are housed in natural history collections — <u>thus capitalizing on the research potential offered by a vast but hitherto relatively underutilized source of insight into the biological past.</u>',
      prompt:
        'Which choice best describes the function of the underlined portion in the text as a whole?',
      choices: [
        'It explains why the research methodology selected by Oliveira and colleagues is not widely used.',
        'It offers commentary on the significance of the approach that Oliveira and colleagues used for their study.',
        'It emphasizes the importance of Oliveira and colleagues’ findings about the DNA of flora.',
        'It specifies potential applications of the approach that Oliveira and colleagues used in their study.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q5',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 2,
      passage:
        'Established knowledge of prehistoric societies primarily stems from analysis of durable historical artifacts, including stone tools, but Mercedes Murillo-Barroso and her team have contributed new insights with a unique analysis of plant-based items. Plant-based artifacts, including straw baskets, are seldom studied due to their perishable nature. <u>This relative scarcity</u> made it all the more exciting when the team examined remains of well-preserved organic artifacts discovered in a cave in Spain and determined that they dated even further back than previously thought.',
      prompt:
        'Which choice best describes the function of the underlined portion in the text as a whole?',
      choices: [
        'It suggests that the researchers did not fully achieve a goal outlined earlier in the text.',
        'It describes the uncertain nature of a discovery by the researchers mentioned earlier in the text.',
        'It refers to a challenging situation presented earlier in the text.',
        'It distinguishes between the two types of historical artifacts discussed earlier in the text.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q6',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 3,
      passage:
        'In 2023 Nobel Prize-winning physicist Giorgio Parisi published *In a Flight of Starlings*, a collection of essays on scientific subjects. Acclaimed author Sam Kean, who uses the form of nonfiction narrative to explore scientific discoveries, is interested in the collection less for its aesthetic merit than for its focus on “the false starts…and mistakes that beset real scientific research every day.” Kean argues that all too often, scientists omit this “human stuff” from written accounts of their research and thus ultimately “fail to explain how science really gets done.”',
      prompt: 'Which choice best states the main purpose of the text?',
      choices: [
        'It explores a subtle difference between Kean’s and Parisi’s respective objections to scientific research methods.',
        'It describes Kean’s view that nonfiction narrative is an effective way for Parisi to share his accomplishments.',
        'It presents Kean’s claim that Parisi is too modest about his own achievements as a scientist.',
        'It outlines an area of agreement between Parisi and Kean in how they think about the work of science.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q7',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 0,
      passageIntro:
        'The following text is from William Shakespeare’s circa 1611 play *The Winter’s Tale*. Camillo has been away from his home in Sicily and serves in the court of Polixenes, the king of Bohemia. He has asked Polixenes for permission to return to Sicily.',
      passage:
        '**POLIXENES:** I pray thee, good Camillo, be no more\nimportunate. ’Tis a sickness denying thee anything,\na death to grant this.\n\n**CAMILLO:** It is fifteen years since I saw my country.\nThough I have for the most part been aired abroad,\nI desire to lay my bones there. Besides, the penitent\nking, my master, hath sent for me, to whose feeling\nsorrows I might be some allay—or <u>I o’erween [presume] to\nthink so</u>—which is another spur to my departure.',
      prompt:
        'Which choice best describes the function of the underlined portion in the text as a whole?',
      choices: [
        'It conveys Camillo’s recognition that one benefit his presence may afford the king of Sicily is merely speculative.',
        'It suggests that Camillo feels compelled to persuade Polixenes that Camillo’s decision to leave the court is justified.',
        'It establishes Camillo’s hope that Polixenes will be comforted knowing that Camillo is not departing at his own discretion.',
        'It bolsters the idea that Camillo’s primary motivation to return home is his concern for the king of Sicily’s well-being in his absence.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q8',
      domain: 'Information and Ideas',
      skill: 'Central Ideas and Details',
      correctAnswer: 1,
      passageIntro:
        'The following text is from Narciso Tondreau’s 1898 poem “Yesterday and To-Day” (translated by Agnes Blake Poor in 1918). The poem is about an old statue of the Greek goddess Venus, which now lies on the ground in a state of disrepair.',
      passage:
        'How long ago, by summer breezes fanned,\nHere stood the newborn Venus, fresh and fair,\nAll palpitating from the master’s hand,\nThe last touch of his chisel lingering there.\n“And surely this shall last!” he proudly thought;\n“Fixed in immortal marble is my fame!”\nJust here, where human hand has surely wrought,\nSome crumbling letters may have spelled his name.',
      prompt:
        'In the text, what does the speaker say that the artist believed about his sculpture?',
      choices: [
        'Its beauty would be recognized as surpassing that of other images of Venus.',
        'It would bring him enduring fame by withstanding time.',
        'It would be praised for its intricate details that he carefully chiseled.',
        'It would be carefully repaired when it inevitably begins to deteriorate.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q9',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 3,
      passage:
        'Esther Sanyé-Mengual, Kathrin Specht, and their team surveyed three groups of people in Bologna, Italy — leaders of urban agriculture projects, stakeholders in urban agriculture (e.g., food researchers and urban farming associations), and the general public — to compare their views about the extent to which urban agriculture contributes to 25 social or ecological services that the team identified. The researchers used these ratings to rank the services for each group, with a ranking of 1 indicating that a group perceives that urban agriculture benefits that service the most. Using only the rankings shown in the table, a city planner in Bologna who is promoting a new urban agriculture project concludes that advertisements aimed at stakeholders should emphasize the project’s benefit to the increase in global biodiversity.',
      table: {
        caption:
          'Ranking of Environmental and Sociocultural Benefits of Urban Agriculture (scale of 1 to 25; 1 = highest)',
        headers: [
          'Social or ecological service',
          'Project leaders',
          'Stakeholders',
          'General public',
        ],
        rows: [
          ['increase in global biodiversity', '5', '8', '17'],
          ['provision of food', '4', '15', '8'],
          ['improvement of community building', '17', '12', '10'],
          ['improvement of local microclimate', '13', '14', '20'],
          ['provision of medicinal plants', '22', '21', '5'],
        ],
      },
      prompt:
        'Which choice best describes data in the table that support the city planner’s conclusion?',
      choices: [
        'The improvement of community building was ranked lower for stakeholders than it was for project leaders.',
        'The increase in global biodiversity was ranked higher for the general public than it was for stakeholders.',
        'The provision of medicinal plants was ranked higher for stakeholders than was the increase in global biodiversity.',
        'The increase in global biodiversity was ranked higher for stakeholders than were the other four services.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q10',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 0,
      passage:
        'In an international collaboration, Elaine Ostrander, Alan K. Outram, and other researchers probed the evolutionary history of size variation in modern dogs. Scientific consensus held that early dogs had large body mass and that a genetic driver of smaller size in some breeds (e.g., bulldogs) developed only within the last 20,000 years as a result of selective breeding for characteristics favored by humans. Ostrander et al. assert that this explanation is flawed, having discovered that a mutation responsible for variants of *IGF1*, a gene found in many mammals that regulates production of insulin-like growth factor 1, is ubiquitous in domestic dog breeds.',
      prompt:
        'Which finding, if true, would most directly support the researchers’ assertion?',
      choices: [
        'The mutation related to *IGF1* influences body size and is found in 53,000-year-old genetic material from fossils of Siberian wolves (*Canis lupus campestris*), an ancestor of dogs.',
        'One variant of *IGF1* is found only in smaller dog breeds like bulldogs and appears to have emerged no more than 20,000 years ago.',
        'An additional mutation related to *IGF1* affects the development of characteristics other than body size in smaller dog breeds like bulldogs.',
        '*IGF1* has been isolated in genetic material from fossils more than 20,000 years old of the red wolf (*Canis rufus*) and certain other species related to dogs.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q11',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 3,
      passage:
        'Callie W. Babbitt, Hema Madaka, and colleagues assembled a database of materials used in consumer electronics by studying products in the lab and by gathering data from similar product studies. The team gave each of these studies a rating for level of detail (with a higher rating for reported data with more detail) and for level of traceability (with a higher rating for clearer descriptions of procedures). Based on these ratings, a second research team concluded that a study by Greg L. Kozak and Gregory A. Keoleian provided more specificity in its data than a study by Oguchi Masahiro and colleagues did.',
      prompt:
        'Which finding, if true, would most directly challenge the second research team’s conclusion?',
      choices: [
        'The study by Kozak and Keoleian had a high detail rating and a high traceability rating.',
        'The study by Oguchi and colleagues had a low detail rating and a low traceability rating',
        'The study by Kozak and Keoleian had a lower traceability rating than the study by Oguchi and colleagues did.',
        'The study by Kozak and Keoleian had a lower detail rating than the study by Oguchi and colleagues did.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q12',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 3,
      passage:
        'Soil thawing in Alaska has been accelerating as a result of climate changes, potentially enabling increased carbon dioxide (CO₂) absorption through greater productivity of arctic bramble (*Rubus arcticus*) plants and other vegetation, but also potentially enabling increased CO₂ output through greater heterotrophic respiration (CO₂ generated by the activity of soil microorganisms). Hydrologist Yonghong Yi and her colleagues developed a model incorporating numerous inputs — years of soil temperature and snow cover data among them — to evaluate the effects of climate changes on the CO₂ balance in Alaska, concluding that net CO₂ is likely to increase if seasonal snow cover arrives earlier relative to the onset of soil surface freezing.',
      prompt:
        'Which finding, if true, would most directly support the researchers’ conclusion?',
      choices: [
        'The effect of soil temperature on the growth of vegetation and on the rate of heterotrophic respiration is stronger during the period of seasonal snow cover than during the period without snow cover',
        'Relatively early snow cover reduces the amount of soil moisture available for the growth of plant species such as *R. arcticus* and lowers the rate of heterotrophic respiration.',
        'Seasonal snow cover tends to persist longer in areas of relatively low vegetation growth and high heterotrophic respiration than in areas of relatively high vegetation growth and low heterotrophic respiration.',
        'The soil insulation provided by snow cover enables heterotrophic respiration to continue during a period in which plant species such as *R. arcticus* are typically not growing.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q13',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 3,
      passage:
        'Over 600 languages are spoken in New York City in addition to English — one can find Bambara spoken in the neighborhood of Kingsbridge, or Ghale in Jackson Heights. Most speakers of Chinese languages reside in the neighborhood of Flushing (part of New York City’s borough of Queens), where the dominant Chinese language is Mandarin, and in Chinatown, in the borough of Manhattan, where the dominant Chinese languages are Cantonese and Fuzhounese. Mandarin is widely spoken in north China, while Cantonese and Fuzhounese are widely spoken in south China. It can therefore be inferred that ______',
      prompt: 'Which choice most logically completes the text?',
      choices: [
        'Chinese immigrants who emigrated to New York City many years ago are more likely to speak several Chinese languages than are more recent Chinese immigrants.',
        'Chinese immigrants regularly change their residences between Queens and Manhattan after they emigrate, rather than staying in one borough.',
        'taken together, there are more Cantonese and Fuzhounese speakers among Chinese immigrants in New York City than there are Mandarin speakers.',
        'people who emigrate from north China tend to settle in Queens, while people who emigrate from south China tend to settle in Manhattan.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q14',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 1,
      passage:
        'Dai Sijie’s 2000 novel *Balzac and the Little Chinese Seamstress* contains elements drawn from Sijie’s own life — there are many parallels between the experiences of the novel’s unnamed narrator and those of Sijie — and as a result *Balzac and the Little Chinese Seamstress* is regularly described as an autobiographical novel. This characterization can be useful, but it also presents drawbacks in terms of how the work is perceived, given the high value placed on creativity and imagination in artistic endeavors. Readers who take this characterization to mean that Sijie merely fictionalized actual events may conclude that ______',
      prompt: 'Which choice most logically completes the text?',
      choices: [
        'the real-world counterparts of other characters in *Balzac and the Little Chinese Seamstress* are hard to identify.',
        '*Balzac and the Little Chinese Seamstress* is not as worthy of praise as it might have been if it had no basis in fact.',
        'critics disagree about whether *Balzac and the Little Chinese Seamstress* shows greater originality than works without autobiographical elements.',
        'Sijie should not have claimed that *Balzac and the Little Chinese Seamstress* is based on real events.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q15',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 2,
      passage:
        'Since the nineteenth century, Egyptologists have commonly divided ancient Egyptian history into three primary ______ Old Kingdom (2700–2200 BCE), the Middle Kingdom (2050–1800 BCE), and the New Kingdom (1550–1100 BCE). Some historians, however, criticize the names of these periods for revealing more about the culture of the mainly European Egyptologists than that of ancient Egypt itself.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['periods. The', 'periods; the', 'periods: the', 'periods, the'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q16',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 0,
      passage:
        'The allocation of a new country dialing prefix (+994) to route incoming international calls ______ among the infrastructural changes necessitated by Azerbaijan’s 1991 split from the Soviet Union.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['was', 'are', 'have been', 'were'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q17',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 1,
      passage:
        'Funafuti, the capital of Tuvalu, has a population of 4,492, which accounts for 45.48 percent of the country’s total population. Having proportionally large populations ______ common for national capitals.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['have been', 'is', 'were', 'are'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q18',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 0,
      passage:
        'The Lyrid meteor shower’s brightness typically surpasses that of the Puppid-Velid meteor shower due to the interplay of three main factors — namely, the size and composition of the ______ velocity upon entering Earth’s mesosphere, with higher-velocity meteoroids releasing more energy; and atmospheric fluctuations, such as changes in humidity.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'meteoroids; their',
        'meteoroids — their',
        'meteoroids, their',
        'meteoroids. Their',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q19',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 2,
      passage:
        'In Hafez’s *Diván*, the writer muses on love, faith, and protest. So impactful is this particular work by Hafez, a Persian lyric poet whose authorial perspective was at once mystical and critical, that its ruminations on fourteenth-century Persian life ______ Iranian society hundreds of years later.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['is influencing', 'influences', 'influence', 'has influenced'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q20',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 1,
      passage:
        'In 2018, the Contessa Gallery in Miami, Florida, exhibited the work of Slovak ______ who aptly describes her photos as “minimalistic but also futuristic.”',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'photographer, Mária Svarbová,',
        'photographer Mária Svarbová,',
        'photographer, Mária Svarbová',
        'photographer Mária Svarbová',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q21',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 0,
      passage:
        'Instead of sleeping on soft pillows, ancient Egyptians slept on hard, elevated headrests, their design ______ airflow, protection from insects, and hairstyle maintenance over comfort.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'prioritizing',
        'had prioritized',
        'prioritized',
        'was prioritizing',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q22',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 1,
      passage:
        'French mathematician Michel Talagrand has shown that over large numbers of trials, variables that appear to be independent and random are in fact extremely likely to cluster around an average. ______ according to Talagrand’s research, if you flip a coin 1,000 times, there is a 99.7% probability that the coin will land heads side up between 450 and 550 times.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: ['In addition,', 'For instance,', 'However,', 'In comparison,'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q23',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 0,
      passage:
        'The Jiangsu Qidong, an offshore wind farm located off the coast of China, produces about 802 megawatts (MW) of electricity per year. ______ England’s Hornsea Project One offshore wind farm, which generates the most power of any single offshore farm, produces 1,218 MW of electricity.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: ['By comparison,', 'For instance,', 'That is,', 'As a result,'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q24',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 3,
      passage:
        'Space scientist Antonella Nota is excited about the potential of the new James Webb Space Telescope (JWST). Unlike its predecessor, the Hubble Telescope, the JWST is primarily an infrared telescope. Most light from distant galaxies is infrared; ______ the JWST can provide Nota and her team much more information about these galaxies than the Hubble could.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: ['alternatively,', 'in contrast,', 'for instance,', 'hence,'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q25',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 2,
      passage:
        'Edge modeling is one process digital artists employ while developing visuals for video games. ______ digital artists use edge modeling to piece together separate shapes to create 3D objects for games.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: ['Thus,', 'In addition,', 'Specifically,', 'By comparison,'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q26',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 0,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Linguistic typologists classify and compare languages according to their structural features.\n• One such structure is word order, or the way subjects (S), verbs (V), and objects (O) are typically arranged in a sentence.\n• English employs an SVO word order (e.g., *Cows eat grass*).\n• Bengali employs an SOV word order (e.g., *Cows grass eat*).\n• Filipino employs a VSO word order (e.g., *Eat cows grass*).\n• 87 percent of the world’s languages are classified as either SVO or SOV.\n\nThe student wants to make a generalization about how word order is employed across languages.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'The majority of languages place the subject of a sentence before the verb and object.',
        'Word order is one of the structural features by which linguistic typologists classify and compare the world’s languages.',
        'Linguistic typologists analyze and compare how word order is employed across languages.',
        'The way in which subjects, verbs, and objects are typically arranged in a sentence is also called word order.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q27',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 0,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Producing the nutrient-rich cyanobacterium *L. maxima* at industrial scale requires high-quality samples of *L. maxima* DNA.\n• Yirlis Yadeth Pineda-Rodríguez and a team of researchers at the University of Córdoba, Colombia, evaluated the quantity and purity of *L. maxima* DNA extracted using three different DNA extraction kits.\n• CTAB 2X (kit 1) had a DNA yield of 2,134 nanograms per microliter (ng/µL) and a purity ratio of 2.2.\n• Pbact (kit 2) had a DNA yield of 157 ng/µL and a purity ratio of 1.6.\n• Pplant (kit 3) had a DNA yield of 12.5 ng/µL and a purity ratio of 1.5.\n• According to the researchers, Pbact was the most effective because it was the only one with both a sufficiently high yield and a purity rate close to the ideal of 1.8.\n\nThe student wants to emphasize the significance of a similarity between two of the kits.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'Due to their insufficient yield or purity, CTAB 2X and Pplant were deemed by the researchers to be less effective than Pbact.',
        'CTAB 2X and Pplant both had a DNA yield above 10 and a purity ratio above 1.4.',
        'Compared to CTAB 2X, which had a DNA yield of 2,134 ng/µL, both Pbact and Pplant had insufficient yields; Pplant, in particular, was ineffective due to its low yield.',
        'With the ideal purity ratio being 1.8, CTAB 2X and Pbact were equal in purity, according to the researchers.',
      ],
    },
  ],
}
