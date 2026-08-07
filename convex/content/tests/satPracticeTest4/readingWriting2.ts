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
      correctAnswer: 0,
      passage:
        'Noah Fierer and colleagues ______ pots of sterilized soil with slurries of live microbes collected from soil in five sites across Colorado, including areas of ponderosa pine forest and dry pasture. Fierer and team then grew mustard plants in the pots to see if the different microbial slurries affected levels of spicy glucosinolates like 3-methylthiopropyl in the plants’ seeds.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['populated', 'precluded', 'sanitized', 'estimated'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q2',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 0,
      passage:
        'The collectibles market is one of the most difficult segments of the consumer economy to ______. Few economists would have predicted, for example, that the prices of vintage movie posters would soar in the 2010s, but soar they did.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['forecast', 'avoid', 'exchange', 'monitor'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q3',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 2,
      passage:
        'Derived from research conducted with factory workers from 1924 to 1933, the Hawthorne effect suggests that participants’ awareness that they are being studied alters their behavior and influences study outcomes. Since then, several researchers have claimed to invalidate this phenomenon, positing that the Hawthorne effect cannot be ______ because attempts to detect it invariably involve faulty research methods.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['inculcated', 'rectified', 'substantiated', 'hypothesized'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q4',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 3,
      passage:
        'Paleontologists think that *Anhanguera*, *Saltasaurus*, and other long-extinct pterosaurs and sauropods may have breathed using air sacs connected to tubelike extensions inside the animals’ bones. Such structures are found in modern birds, which is why some paleontologists treat the respiratory systems of birds as ______ those of *Anhanguera*, *Saltasaurus*, and other pterosaurs and sauropods.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: [
        'emissaries for',
        'subordinates of',
        'harbingers of',
        'proxies for',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q5',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 3,
      passage:
        'Advancements like the emergence of glassmaking in Mesopotamia circa 3500 BCE are overemphasized in innovation studies, contributing to the idea that technological change always brings greater complexity. Research by Nathaniel Erb-Satullo reveals an important exception: gold metallurgy flourished in the Caucasus in the Bronze Age, but a steep drop during that time (circa 1500 BCE) in objects featuring gold filigree (in which fine threads of gold are arranged in intricate patterns) and other sophisticated goldsmithing techniques suggests that simpler processes supplanted advanced methods.',
      prompt: 'Which choice best describes the overall structure of the text?',
      choices: [
        'It details the near-consensus among researchers in a particular field of study regarding how technology evolves and then indicates the controversial nature of a study challenging that broadly accepted view.',
        'It summarizes the findings of several studies into the origins of a particular invention and then presents additional evidence from a more recent study that contradicts those findings.',
        'It advances a claim made by researchers in one academic field about the nature of technological change and then critiques a contrasting claim presented by a researcher from a related academic field.',
        'It explains that a particular interpretation of technological development has been perpetuated in an academic field and then provides a counterexample demonstrating that interpretation isn’t always accurate.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q6',
      domain: 'Craft and Structure',
      skill: 'Cross-Text Connections',
      correctAnswer: 3,
      passage:
        'Text 1\n\nFor decades, ornithologists assumed that if they saw a singing house wren—a bird species found in temperate North America—they must be observing a male trying to attract a mate or claim territory. As Peter J.B. Slater and Nigel I. Mann have emphasized, however, a similar assumption can’t be made about birds in the tropics, where females sing as often as males do. Slater and Mann call for more research on this discrepancy between tropical and temperate female birdsong.\n\nText 2\n\nRecent evidence shows that a female house wren is as capable of song as a male is. In fact, female birdsong is more common among temperate species than currently assumed, claim Evangeline Rose and colleagues. These female songbirds sing less frequently than males do, and in duller tones, making it “easy for researchers to miss the quiet and hidden females and focus on the loud and colorful males,” says Rose.',
      prompt:
        'Based on the texts, how would Rose and colleagues (Text 2) most likely respond to the assertion by Slater and Mann (Text 1) about the different prevalence of female birdsong in temperate and tropical areas?',
      choices: [
        'They would raise the possibility that the difference in prevalence may be due to differences in the timing of the mating season among temperate and tropical bird species.',
        'They would caution that the seeming difference in prevalence may be an artifact of researchers’ tendency to study birdsong among temperate species more frequently than among tropical species.',
        'They would concede that the geographic difference in prevalence is real but argue that the frequency with which male tropical birds sing has been overstated by previous researchers.',
        'They would argue that the apparent difference in prevalence may partly reflect a difference in the ease with which female birdsong and male birdsong can be detected.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q7',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 2,
      passage:
        'In their study of the steering muscles regulating sclerites (minute hardened structures) in the *Drosophila* (fruit fly) wing hinge, Johan M. Melis et al. used machine learning to devise a convolutional neural network (CNN) model capable of predicting the pattern of wing motion produced by the maximum activity of the muscles. The CNN model’s output aligned with results of prior studies by other researchers measuring muscle activity patterns directly—one of several indications, said Melis et al., that the model accurately represents important biomechanical processes underlying wing motion.',
      prompt: 'Which choice best states the main purpose of the text?',
      choices: [
        'To account for Melis et al.’s reliance in their study on a CNN model in lieu of direct measurement',
        'To provide an overview of how Melis et al. honed the accuracy of their CNN model',
        'To present evidence from Melis et al.’s study in support of the efficacy of their CNN model',
        'To compare results obtained by Melis et al. using their CNN model to prior results obtained from other researchers’ models',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q8',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 3,
      passageIntro:
        'The following text is from Julia Alvarez’s 2000 novel *In the Name of Salomé*. The narrator and her sister, daughters of a famous poet, are being tutored by Alejandro Román.',
      passage:
        'Our tutor, Alejandro Román, brought his younger brother, Miguel, to class one day. By now I was eighteen and had learned everything Alejandro had to teach me, so I was glad for a new face. Miguel was an aspiring poet, and he had heard from his brother that the Ureña girls were none other than the daughters of Nicolás Ureña, and they were smart as clockwork. Miguel was hoping not only to meet us but to make the acquaintance of the poet himself at Mamá’s house.',
      prompt:
        'Based on the text, why does Miguel accompany his brother to the sisters’ house one day?',
      choices: [
        'Miguel has not received formal instruction in poetry and wants to ask the sisters’ famous father to be his mentor.',
        'Miguel wants to recite his poems to the sisters and inquire about their perspectives on his work.',
        'Miguel has learned all his brother can teach him and now desires to be taught by the sisters.',
        'Miguel anticipates having the opportunity to be introduced to both the sisters and their father.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q9',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 3,
      passage:
        'Motivated to sell as many paintings as possible, Alfred Hair, an influential figure among the landscape artists known as the Florida Highwaymen, pioneered “fast painting,” which in part involved swift applications of paint. That many of Hair’s acolytes, including Livingston Roberts, imitated the technique accounts in part for the impressionistic qualities that are now synonymous with the group’s shared aesthetic. But not all Highwaymen fully embraced this approach; for instance, though Charles Walker was also prolific, his paintings were executed with greater attention to detail.',
      prompt:
        'What does the text most strongly suggest about paintings by Roberts?',
      choices: [
        'Roberts’s reliance on the technique of fast painting likely accounts for his works being more aesthetically interesting than works by Walker are.',
        'The lack of precision with which they were executed suggests that they are inferior to works by either Hair or Walker.',
        'Although it is evident that Roberts adopted some of Hair’s preferred techniques, Roberts’s works are less derivative of works by Hair than is typically acknowledged.',
        'Because of the manner in which they were created, they likely have visual qualities that are regarded as more typical of Florida Highwaymen paintings than the qualities in works by Walker are.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q10',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 1,
      passage:
        'While US public charities, like Commonfund, must file Form 990 yearly with the IRS, private foundations, such as Lilly Endowment Inc., must file a different form, 990-PF. In addition, foundations that engage in certain prohibited activities must also file Form 4720 and pay a penalty tax on the money involved. Private foundations are prohibited from holding excess interests in a business enterprise, “self-dealing” (conducting activities that benefit foundation insiders), making taxable expenditures such as outlays for lobbying, and failing to cross a required threshold in making charitable distributions from income. Out of the organizations that filed Form 990-PF in the years 2003–2005, ______',
      figureNote:
        'Bar graph “Tax Penalties Assessed on Private Foundations That Filed Form 4720, by Reason, 2003–2005” pending insertion — the source document does not include it.',
      prompt:
        'Which choice most effectively uses data from the graph to complete the assertion?',
      choices: [
        'those that were also required to file Form 4720 because they had excess holdings in a business enterprise paid, on average, a larger penalty than those organizations that filed Form 4720 because they engaged in self-dealing.',
        'those that also filed Form 4720 collectively paid larger penalties for failing to meet the minimum charitable distribution requirement than for other reasons.',
        'a smaller percentage of those that also filed Form 4720 did so because they engaged in self-dealing than the percentage of those that filed Form 4720 because they did not meet the minimum charitable distribution requirement.',
        'those that also filed Form 4720 paid a larger penalty for failing to meet a minimum charitable distribution requirement than those organizations that filed Form 990 but also filed Form 4720 for the same reason.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q11',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 2,
      passage:
        '*The Man in the Brown Suit* is a 1924 novel by Agatha Christie. In the novel, the protagonist, Anne Beddingfeld, expresses a deep desire for excitement and a frustration with the dullness of her life, saying, ______',
      prompt:
        'Which quotation from *The Man in the Brown Suit* most effectively illustrates the claim?',
      choices: [
        '“Things that one would shrink from attempting normally are easily tackled in a flush of anger.”',
        '“Now I am a tidy person, I like my things always arranged in a certain way and I keep them so.”',
        '“I yearned for adventure, for love, for romance, and I seemed condemned to an existence of drab utility.”',
        '“It occurred to me that there was an easy way of verifying whether some of my conclusions were correct.”',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q12',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 3,
      passage:
        'Blandine Courel and her colleagues analyzed pottery fragments from thirty-five sites across the Volga and Don river basins to determine whether the ways in which hunter-gatherer societies used pottery in these regions around 6,500–8,000 years ago were influenced primarily by local food availability or primarily by cultural factors. Analysis of organic residues on the pottery fragments showed different prevailing uses for pottery in these locations—cooking and storing terrestrial animal protein at Volga sites and cooking and storing aquatic animal protein at Don sites—which Courel and colleagues attribute to cultural differences.',
      prompt:
        'Assuming that the Volga and Don basins supported similarly sized hunter-gatherer populations 6,500–8,000 years ago, which finding, if true, would most directly support Courel and colleagues’ explanation?',
      choices: [
        'There were many more bodies of water in a comparably sized area in the Don basin than in the Volga basin.',
        'In both the Volga and Don basins, most of the sites from which pottery has been recovered appear to have been seasonal fishing and hunting encampments rather than year-round settlements.',
        'The people of the Volga basin acquired the techniques used to create pottery for cooking and storing food from the people of the Don basin.',
        'Across the Volga and Don basins, people had broadly similar access to the same terrestrial and aquatic animal resources.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q13',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 2,
      passage:
        'To boost the performance of oil-absorbing resins, which are used to remove oil and other organic compounds from wastewater, one team of materials researchers created a resin with a novel—albeit very expensive—monomer (a molecule that can chemically bond with analogous molecules to form polymers) synthesized from β-cyclodextrin. Other researchers have produced resins consisting of various much cheaper, commercially available methacrylate monomers, including one derived from benzyl methacrylate (BZMA). Testing all these resins’ capacity to absorb toluene and trichloromethane, two organic compounds, a scientist concluded that when practical considerations were taken into account, the BZMA-derived resin showed the greatest potential for use in wastewater cleanup.',
      prompt:
        'Which finding, if true, would most directly support the scientist’s conclusion?',
      choices: [
        'Whereas the resin synthesized from β-cyclodextrin exhibited the highest absorption capacity for toluene, the BZMA-derived resin and other resins consisting of commercially available methacrylate monomers exhibited the highest absorption capacity for trichloromethane.',
        'For both toluene and trichloromethane, the BZMA-derived resin exhibited similar absorption capacity as other resins consisting of commercially available methacrylate monomers and a slightly higher absorption capacity than the resin synthesized from β-cyclodextrin.',
        'For both toluene and trichloromethane, the BZMA-derived resin exhibited only modestly lower absorption capacity than the resin synthesized from β-cyclodextrin but higher absorption capacity than other resins consisting of commercially available methacrylate monomers.',
        'Relative to the resin synthesized from β-cyclodextrin and to other resins consisting of commercially available methacrylate monomers, the BZMA-derived resin exhibited superior absorption capacity for toluene but not trichloromethane.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q14',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 2,
      passage:
        'Southwestern Kentucky’s Livingston County is among the most rural counties in the United States: the US Census Bureau classified it as 95.4% rural in 2010. Researchers often struggle to recruit residents of counties like Livingston for inclusion in studies. Melissa Valerio and colleagues tested whether an approach called snowball sampling improves recruitment. Working in two rural counties, they recruited a few people (known as “seeds”) with the characteristics desired for a proposed study and asked them to recruit additional participants from their social networks. Though the seeds were given minimal guidance, many more people they recruited had the desired characteristics for the study than would be expected by chance alone, most likely because ______',
      prompt: 'Which choice most logically completes the text?',
      choices: [
        'most seeds’ social networks include some people who do not know one another and who share few characteristics.',
        'the seeds’ social networks tend to be somewhat smaller than the networks of people who do not live in rural areas.',
        'the seeds’ social networks include a high proportion of people who share characteristics with the seeds.',
        'the characteristics that made the seeds desirable for inclusion in the proposed study may be unknown to some members of the seeds’ social networks.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q15',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 2,
      passage:
        'In classical Greek and Roman mythology, female characters are typically cast as either villains lacking in psychological depth or passive victims who are marginal to these stories, which usually focus on the exploits of male characters. Recently, a subgenre has emerged in which writers reimagine these stories from the perspectives of their female characters, giving them agency and complex motivations. Purists argue that such efforts represent a distinctively modern tendency to impose our own values on past civilizations, obscuring those civilizations’ beliefs. Defenders of the subgenre counter that reimaginings of the myths for new cultural contexts are almost as old as the myths themselves, suggesting that ______',
      prompt: 'Which choice most logically completes the text?',
      choices: [
        'purists are overlooking a long tradition of adapting Greek and Roman myths to focus on female characters.',
        'the complex motivations given to female characters in modern retellings of Greek and Roman myths reflect a recent shift toward psychological depth in fictional representation.',
        'bringing female perspectives to the forefront is not indicative of a novel attitude regarding fidelity to Greek and Roman myths’ ideologies.',
        'modern writers’ foregrounding of female characters is chiefly motivated by a desire to counterbalance the primacy of male perspectives among earlier adaptations of Greek and Roman myths.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q16',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 3,
      passage:
        'The world’s many geothermal power plants leverage an array of ______ the Nga Awa Purua plant uses a flash steam system that transforms high-temperature geothermal fluid into steam; in Mexico, the Cerro Prieto plant’s dry steam system pumps superheated steam from a reservoir; and in the US, the Mammoth plant’s binary cycle system uses lower-temperature geothermal fluid in conjunction with a secondary fluid.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'technologies, in New Zealand,',
        'technologies in New Zealand:',
        'technologies in New Zealand;',
        'technologies: in New Zealand,',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q17',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 1,
      passage:
        'When a given term—“self-fulfilling prophecies” and “role models” are two well-known examples—is generally accepted and frequently used, ______ susceptible to obliteration by incorporation (OBI). In cases of OBI, widely used terms are rarely, if at all, attributed to the individuals who coined them.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'this often becomes',
        'it often becomes',
        'they often become',
        'these often become',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q18',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 1,
      passage:
        'In medieval Russia, squirrel pelts were used as a commodity currency. By using specific goods like squirrel pelts as common units of exchange, commodity currency economies streamline trade, which is why they often replaced barter economies. Barter economies eschew ______ that requires what economist W.S. Jevons deems a “double coincidence of wants”—in other words, each trading party must want precisely what the other has.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'currency, in favor of a direct trade system',
        'currency in favor of a direct trade system',
        'currency, in favor of a direct trade system,',
        'currency—in favor of a direct trade system',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q19',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 0,
      passage:
        'In their attempt to create a quantum random number generator, K. Muhammed Shafi et al. used a continuous-wave diode laser to fire photons at a periodically-poled potassium titanyl phosphate (PPKTP) nonlinear crystal. A plano-convex lens ______ the laser on the center of the 10-millimeter-long crystal ensured a spot size (a measure of the beam’s diameter) of 85 micrometers.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['focusing', 'focus', 'focuses', 'focused'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q20',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 1,
      passage:
        'For her installation *The Last Cruze*, photographer LaToya Ruby Frazier traveled to Lordstown, Ohio, where she documented the lives of workers at the local automobile plant. In the installation, text culled from a series of in-depth interviews with employees and their families ______ sixty-seven gelatin silver prints, highlighting the collaborative, documentary nature of Frazier’s work.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['punctuating', 'punctuates', 'punctuate', 'are punctuated by'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q21',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 2,
      passage:
        'A single specimen of *T. parkerae*, collected at a depth of 1,856 fathoms (3,394 meters) in the South Pacific, and a single specimen of *G. hirsuta*, collected at a depth of 620 fathoms (1,134 meters) in the North Atlantic, have been preserved as exemplars of their respective ______ former in a repository at Washington, DC’s Museum of Natural History and the latter in a repository at London’s Natural History Museum.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'species; the',
        'species. The',
        'species, the',
        'species, and the',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q22',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 0,
      passage:
        'In a given rock formation, Fortunian rock from 538 million years ago might directly abut Rhaetian rock from 208.5 million years ago, with millions of years of material missing in between. ______ time did not stand still during these intervening years; the unaccounted-for sedimentary material was likely removed from the stratigraphic record via erosion and weathering.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: [
        'Of course,',
        'In particular,',
        'On the contrary,',
        'As a result,',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q23',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 2,
      passage:
        'Architect Victor Gruen, the designer of Pennsylvania’s South Hills Village shopping mall, conceived of the mall as an indoor version of the European town square, a communal space that encouraged visitors to stroll and linger. ______ he designed South Hills Village with long, pedestrian-friendly promenades and ample seating areas clustered around fountains and greenery.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: ['Regardless,', 'In addition,', 'Accordingly,', 'By contrast,'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q24',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 0,
      passage:
        'Long thought to be sessile (immobile), adult *Chelonibia testudinaria*, barnacles that adhere to sea turtle shells, have been observed to shift slightly in position over time—a phenomenon that has been attributed to the barnacles’ passive displacement by water currents. ______ a research team found that adult *C. testudinaria* moved toward the heads of their sea turtle hosts and thus against the prevailing water flow, behavior consistent with self-initiated locomotion.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: [
        'Undermining this explanation,',
        'Contrary to this phenomenon,',
        'Drawing a similar conclusion,',
        'Confirming this hypothesis,',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q25',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 2,
      passage:
        'In Annie Dillard’s *Pilgrim at Tinker Creek*—where, early on, the author marvels at a single goldfish’s delicate fins but later winces when imagining a horde of goldfish laying and eating their own eggs—Dillard struggles to reconcile the complicated juxtapositions of the natural world. ______ nature’s mesmerizing intricacy and pitiless harshness prove inextricably linked for Dillard, like “two branches of the same creek.”',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: ['Moreover,', 'To that end,', 'Ultimately,', 'Hence,'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q26',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 2,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Silent films can be valuable historical documents of their time.\n• Ninety percent of silent films made before 1930 are now lost.\n• A film is considered lost when no remaining copies are known to exist.\n• Director Howard Hawks’s 1926 silent film *The Road to Glory* is lost.\n• Director Oscar Micheaux’s 1920 silent film *Within Our Gates* is archived at the UCLA Film & Television Archive in Los Angeles, California.',
      prompt:
        'Which choice most effectively uses information from the given sentences to emphasize a difference between the two movies?',
      choices: [
        'Howard Hawks’s 1926 film *The Road to Glory* is among the many lost films of the era.',
        'Howard Hawks’s *The Road to Glory* (1926) and Oscar Micheaux’s *Within Our Gates* (1920) are just two examples of silent films from the 1920s.',
        'While Howard Hawks’s *The Road to Glory* is considered lost to history, Oscar Micheaux’s film *Within Our Gates* is archived at the UCLA Film & Television Archive in Los Angeles, California.',
        'Oscar Micheaux’s film *Within Our Gates* can be found at the UCLA Film & Television Archive in Los Angeles, California.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q27',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 2,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Founded in 2016, Kernel is a neurotechnology company that develops brain-computer interfaces (BCIs).\n• BCIs interpret and execute brain signals to allow users to control external software or hardware with their thoughts.\n• Founded in 2022, Cortigent is a neurotechnology company that develops neuroprostheses.\n• Neuroprostheses act as replacement brain functions to restore the user’s lost sensory, motor, or neural functions.\n• Founded in 2012, MindMaze is a neurotechnology company that develops neuromodulation technologies.\n• Neuromodulation technologies use neural interfaces to stimulate nervous system structures and influence neural activity.\n\nThe student wants to contrast the type of neurotechnology Kernel develops with the type of neurotechnology Cortigent develops.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'Founded in 2016, Kernel develops technology for interpreting and executing brain signals, which, unlike Cortigent and MindMaze, is categorized as a neuroprosthetic.',
        'Unlike Cortigent, which develops neurotechnology, Kernel develops BCIs.',
        'BCIs allow users to control external software or hardware with their thoughts, but they don’t restore sensory, motor, or neural functions as neuroprostheses do.',
        'BCIs interpret and execute brain signals to allow users to control external software or hardware with their thoughts, whereas neuroprostheses influence neural activity.',
      ],
    },
  ],
}
