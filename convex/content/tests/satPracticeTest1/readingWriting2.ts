import type { TestModule } from '../../types'

/** Reading and Writing — Module 2. 27 questions, fixed (non-adaptive). */
export const readingWriting2: TestModule = {
  id: 'rw-2',
  title: 'Reading and Writing — Module 2',
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
        'Béláné Mocsáry, who traveled solo to four continents in the early 1900s, undoubtedly accomplished much, but to gain a lasting place in our historical memory, there is little that can ______ being the first to do something. For example, people will always remember that Adeline and Augusta Van Buren were the first women to ride solo motorcycles across the continental United States.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: [
        'constrain within',
        'fluctuate with',
        'overreach by',
        'prevail over',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q2',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 2,
      passage:
        'Despite stated claims of global relevance, much major research on income inequality performed in the 2010s suffered from a myopic focus on a few countries in North America and Western Europe, partly because of limited data availability. Researchers would later ______ this shortcoming after gaining new access to administrative records located in nations in Asia, such as India, and Eastern Europe, such as Poland.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['sanction', 'postulate', 'ameliorate', 'rationalize'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q3',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 1,
      passage:
        'In the early 2010s, the price of abstract paintings by so-called Zombie Formalist artists rose dramatically, which had the counterintuitive effect of ______ demand: buyers who had not previously wanted to purchase Zombie Formalist paintings thronged the market, believing prices would continue to rise and the paintings could be resold later at a profit.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['exploiting', 'eliciting', 'capitalizing', 'satisfying'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q4',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 0,
      passage:
        'The fact that publications by Federal Reserve Bank of Cleveland economist Loretta J. Mester, who studies central banking, are so frequently cited in other scholars’ work ______ the usefulness of her research for her peers—other economists clearly find her studies valuable for their own scholarship.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['underscores', 'overshadows', 'belies', 'forestalls'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q5',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 3,
      passage:
        'Shedding light on the thermal biology of fungi, research by Radamés Cordero et al. indicates that certain mushrooms—including *Amanita brunnescens* and species from the genus *Hortiboletus*—can achieve a hypothermic state through evaporative cooling. Effects of this thermoregulation were not limited to the fungi’s fruiting bodies and root-like hyphae: <u>temperature reductions were observed in the air immediately surrounding the mushrooms</u>. Though slight, the reductions inspired an air-cooling device; using approximately 400 grams of mushrooms, the team’s prototype lowered the air temperature in a controlled environment by 10°C in forty minutes.',
      prompt:
        'Which choice best describes the function of the underlined portion in the text as a whole?',
      choices: [
        'It provides empirical evidence to bolster the claim made earlier in the text that certain fungal species maintain a hypothermic state.',
        'It identifies an unexpected observation that motivated the study of evaporative cooling in fungi that is discussed earlier in the text.',
        'It presents a tangential finding about thermoregulation in certain fungal species that the experiment described later in the text was designed to explain.',
        'It establishes a finding central to the text’s discussion of a practical application resulting from the team’s study of fungal thermal biology.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q6',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 0,
      passage:
        'In Thailand, the use of solid fuel—for example, coal and wood—as a share of total household fuel use fell by approximately 40 percent between 2000 and 2019; such shifts are often explained by appealing to the energy ladder, a model holding that fuel choice is mediated mainly by household income. Specifically, the model proposes that high-technology fuels displace solid fuels as incomes rise. Moses Pundo and Gavin Fraser’s study of fuel use in Kenya shows this model to be reductive, however: household fuel use was heterogeneous, flexible, and influenced by several factors, including the type of dwelling a household occupies.',
      prompt:
        'Which choice best describes the function of the information about Thailand in the text as a whole?',
      choices: [
        'It illustrates the kind of phenomenon that the text goes on to suggest is frequently but inadequately accounted for by the energy ladder.',
        'It describes a trend that the text goes on to suggest has a cause similar to that of a seemingly unrelated trend observed in Kenya.',
        'It provides an example of a type of change that the text goes on to suggest is poorly suited for evaluating whether the energy ladder is a viable model.',
        'It introduces a finding that the text goes on to suggest can be explained in two different ways that are equally compelling.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q7',
      domain: 'Information and Ideas',
      skill: 'Central Ideas and Details',
      correctAnswer: 1,
      passage:
        'In a study by Mika R. Moran, Daniel A. Rodríguez, and colleagues, residents of Lima, Peru, and Buenos Aires, Argentina, were surveyed about parks in their cities. Of the 663 respondents from Lima, 72.7% indicated that they use the city’s parks, and of the 683 respondents from Buenos Aires, 69.9% indicated that they use city parks. Given that the percentage of Lima respondents who reported living within a 10-minute walk of a park was much lower than that reported by Buenos Aires respondents, greater proximity alone cannot explain the difference in park use.',
      prompt:
        'The text makes which point about the difference between the proportions of Lima residents and Buenos Aires residents using parks?',
      choices: [
        'It could be due to inaccuracies in the survey results.',
        'It is caused by something other than the parks’ proximity to city residents.',
        'It was calculated using sources that predate the survey.',
        'It was much larger than the researchers conducting the study expected.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q8',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 1,
      passage:
        'The bird species *Philydor erythrocercum* (the rufous-rumped foliage-gleaner) shares some territory in French Guiana with *Thamnomanes caesius* (the cinereous antshrike), which emits a loud alarm call when it detects predators. Biologist Ari Martinez and colleagues recorded *T. caesius* alarm calls and played them in the vicinity of wild *P. erythrocercum*. Finding that the birds often froze in place or scattered into vegetation upon hearing the calls, the researchers concluded that *P. erythrocercum* associates *T. caesius* alarm calls with danger.',
      prompt:
        'Which finding, if true, would most directly support Martinez and colleagues’ conclusion?',
      choices: [
        'In some instances, *P. erythrocercum* froze in place or scattered into vegetation when Martinez and colleagues approached but before they began playing sounds.',
        'When Martinez and colleagues played control sounds of random noise in the vicinity of *P. erythrocercum*, the birds displayed no reaction.',
        'Martinez and colleagues played alarm calls from different *T. caesius* individuals and observed no significant variation in the responses of *P. erythrocercum*.',
        'Bird species other than *P. erythrocercum* also showed a tendency to freeze in place or scatter into vegetation when Martinez and colleagues played *T. caesius* alarm calls.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q9',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 3,
      passage:
        'Apple’s introduction of the iPhone in 2007 is a quintessential instance of brand extension—the company leveraged its brand recognition as a computer manufacturer to enter a product category in which it had not previously competed. An outstanding question is whether perceived category similarity predicts consumers’ likelihood of purchasing brand extensions. To answer this question, Alicia Grasby et al. identified 30 extended-brand pairs—for example, the same brand of laundry detergent and air freshener—in 52 weeks of purchases by approximately 60,000 households and, for each pair, calculated the change in probability of a brand in one category being purchased if the same brand was purchased in the other category.',
      prompt:
        'Based on the text, which potential study design would be most likely to produce evidence that would enable Grasby et al. to answer their research question?',
      choices: [
        'Have a representative sample of the households rate the similarity of one product in each extended-brand pair to other products in the same category, then determine how, if at all, those ratings correlate with the change in probability that the team calculated for each pair.',
        'Poll a representative sample of the households to determine the degree of brand recognition of each brand in the extended-brand pairs, then determine how, if at all, the degree of brand recognition correlates with the average cost of each product in the pairs.',
        'Poll a representative sample of the households to determine the degree of brand recognition for each brand in the extended-brand pairs, then determine how, if at all, the degree of brand recognition correlates with the frequency with which a different group of households purchased at least one product of that brand.',
        'Have a representative sample of the households rate the similarity of the product categories in each extended-brand pair, then determine how, if at all, those ratings correlate with the change in probability that the team calculated for each pair.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q10',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 3,
      passage:
        'Neuroscientist Kiyohito Iigaya and colleagues developed a computational model to predict how much a person will enjoy a particular work of art on a scale from 1 (not at all) to 4 (very much). They then recruited participants to use the same scale to rate several sets of paintings in various styles and calculated the correlation between the ratings predicted by the model and those reported by the participants.',
      figureNote:
        'Graph pending insertion — the source document does not include it.',
      prompt:
        'Assuming participant P6 gave equal ratings to the abstract and cubist paintings, the data in the graph indicate that the model predicted that ______\n\nWhich choice most effectively uses data from the graph to complete the example?',
      choices: [
        'P6’s rating for abstract and cubist paintings would equal one another.',
        'P6 would derive less aesthetic pleasure from abstract paintings than from cubist paintings.',
        'P6 would derive more aesthetic pleasure from abstract paintings than from cubist paintings.',
        'P6’s ratings for abstract and cubist paintings would differ from one another.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q11',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 0,
      passage:
        'Many studies have found a positive association between levels of dissolved organic carbon and mercury in bodies of fresh water in North America. But Enelton Fagnani, José Roberto Guimarães, and Pedro Sérgio Fadini did not find this correlation in a study conducted in Brazil, leading some scientists to hypothesize that the association is particular to North America. However, several other studies conducted outside North America, such as one by Sara M. Ekström and colleagues in Sweden, showed results similar to those of the North American studies, while few have produced results similar to those of the study by Fagnani, Guimarães, and Fadini, suggesting that ______',
      prompt: 'Which choice most logically completes the text?',
      choices: [
        'dissolved organic carbon and mercury levels do typically rise and fall together in fresh water.',
        'there were circumstances unique to Ekström and colleagues’ study that impeded accurate measurements of mercury levels.',
        'the hypothesis that the positive association is particular to North America is correct.',
        'levels of dissolved organic carbon and mercury in bodies of fresh water are both much higher in Brazil than elsewhere.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q12',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 3,
      passage:
        'Chelsea Wood et al. tracked temperature-driven changes in the abundance of *Opechona* sp. (a complex life cycle parasite, or CLP, that requires three host species throughout its life cycle), *Bomolochus cuneatus* (a directly transmitted parasite, which requires only one host species), and 83 other parasite taxa found on eight fish species. CLPs are transmitted when an infected host is ingested by an individual of another species, typically shielding CLPs from the external environment, whereas directly transmitted parasites are exposed to external conditions during transmission. However, Wood et al. found that three-host CLP abundance decreased as sea temperatures rose, whereas directly transmitted parasite abundance was largely stable, suggesting that ______',
      prompt: 'Which choice most logically completes the text?',
      choices: [
        'as the number of host species involved in a parasite’s transmission increases, the parasite is better protected against rising temperatures.',
        'CLPs primarily transmitted by ingestion were less dependent on host species adversely affected by warming temperatures than were CLPs that use other transmission strategies.',
        'directly transmitted parasites identified in the study were more likely to use transmission strategies that shield them from warming temperatures than were three-host CLPs.',
        'any advantages that the transmission strategy used by three-host CLPs may have conferred did not completely offset the negative effects of other temperature-driven factors on CLP abundance.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q13',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 3,
      passage:
        'Prolonged exposure to anthropogenic noise—sounds from human sources such as traffic or mining—can affect animals, as Kirsty Elizabeth McLaughlin and Hansjoerg P. Kunc found in a 2015 study of zebra cichlids. Researchers conducted a meta-analysis of studies of how such noise affects animals and found that, for every study, relevant traits or behaviors of the animals were observably different between the exposed group and the otherwise similar but unexposed group. Although, on average, studies of fish showed larger differences than studies of birds did, for every class of animals examined, there were individual studies showing differences well above the average for fish. Therefore, the results of the meta-analysis suggest that ______',
      prompt: 'Which choice most logically completes the text?',
      choices: [
        'the differences that studies attribute to exposure to anthropogenic noise are likely to be more pronounced for birds than they are for fish.',
        'the difference found in the study conducted by Kirsty Elizabeth McLaughlin and Hansjoerg P. Kunc was likely larger than the average difference for studies of zebra cichlids included in the meta-analysis.',
        'the studies in the meta-analysis that examined fish were more likely than those that examined birds to specify whether the observed effects were detrimental.',
        'some studies of birds found larger effects of exposure to anthropogenic noise than some studies of fish did.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q14',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 1,
      passage:
        'Although the epic poem *Parzival* dates back to the thirteenth century, ______ compelling narrative still captivates readers today.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['their', 'its', 'it’s', 'they’re'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q15',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 0,
      passage:
        'Most sand is beige because of deposits of gray- and tan-hued minerals, such as quartz and feldspar. The sand at Les Sables Roses Beach in French Polynesia is a more unusual ______ deposits of crushed coral and other organic matter lend the sand a unique pink hue.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'shade, though;',
        'shade; though',
        'shade, though,',
        'shade, though',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q16',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 0,
      passage:
        'The poem “The Egg Boiler,” which was published in 1960, contains three signature elements of Gwendolyn Brooks’s poetic ______ compressed lines infused with bursts of vivid imagery; syncopated rhythms, largely inspired by the blues tradition; and a keen attention to everyday life in Brooks’s South Side Chicago neighborhood.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'style: terse,',
        'style; terse,',
        'style. Terse,',
        'style, terse,',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q17',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 3,
      passage:
        'Neoclassical economic models assume that people consistently make rational economic decisions, but Francesca Gino of Harvard Business School makes no such assumption; behavioral economists such as Gino, whose research focuses on worker productivity, ______ that economic decision-making can in fact be highly irrational.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['has contended', 'is contending', 'contends', 'contend'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q18',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 1,
      passage:
        'While the greater adjutant (*Leptoptilos dubius*) can be found in places such as Chhnuk Tru in Cambodia and Dong Khanthung in Laos, more than 80 percent of this endangered stork species is found in Assam, India. There, wildlife ______ is on the front lines of conservation efforts to bring adjutants back from near extinction.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'biologist, Dr. Purnima Devi Barman',
        'biologist Dr. Purnima Devi Barman',
        'biologist: Dr, Purnima Devi Barman',
        'biologist, Dr Purnima Devi Barman,',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q19',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 1,
      passage:
        'The Roman dramatist Quintus Cicero’s *De petitione consulatus*, a political handbook, is an extant work: it can still be read. By contrast, lost works such as Quintus Cicero’s tragedy in the Greek style, *Erigones*—no copy of which exists—______ known to antiquarians only through references in extant works.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['becomes', 'have become', 'has become', 'is becoming'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q20',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 1,
      passage:
        'Begoña Vila is a space scientist who works on the James Webb Space Telescope, or JWST. Thanks in part to Vila’s contributions, the telescope is now positioned near the Sun–Earth L2 Lagrange point, almost one million miles beyond Earth’s orbit. ______ the JWST’s predecessor, the Hubble Space Telescope, is only about 340 miles above Earth’s surface.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: ['Therefore,', 'By contrast,', 'Similarly,', 'Secondly,'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q21',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 3,
      passage:
        'Box modeling and contour modeling, methods used by digital artists to create three-dimensional elements for video games, typically require software to process geometric shapes numbering in the thousands. ______ these approaches are more economical than wire model methods, which require more powerful and expensive processors to manage polygons numbering in the millions.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: ['Specifically,', 'For example,', 'Instead,', 'As such,'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q22',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 0,
      passage:
        'The total solar eclipse of June 5, 1302 BCE, was famously interpreted as a warning to the Chinese emperor. Another memorable solar eclipse occurred on April 21, 899 BCE, but unlike the 1302 BCE eclipse, the 899 BCE eclipse was annular. ______ the Moon did not cover the Sun completely, instead creating an annulus, or “ring of fire.”',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: ['That is,', 'Nonetheless,', 'Meanwhile,', 'For example,'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q23',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 0,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Ezshwan Winding is a Hungarian American artist who specializes in encaustic painting, which follows a multistep process.\n• Step 1: Select and prepare the painting surface, often wood.\n• Step 2: Mix melted wax and resin together and add pigment for color to create the encaustic medium.\n• Step 3: Spread the medium on the surface in layers, applying heat to allow each layer to soften and fuse with the previous layers.\n• Step 4: Use various tools to carve patterns into the painting.\n\nThe student wants to describe the process of making and applying the encaustic medium.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'The artist creates the medium from wax, resin, and pigment and then spreads it onto a painting surface in layers, heating the layers so that they soften and fuse together.',
        'Using various tools, the artist mixes the wax and resin, which fuse together in layers.',
        'The artist spreads wax, resin, and pigment onto the encaustic medium, often wood, then applies heat so that they soften and fuse to the previous layers.',
        'After adding pigment for color, the artist applies a mix of wax and resin to a painting surface, at which point patterns are carved into it.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q24',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 1,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• The Tijuana Slough National Wildlife Refuge (NWR) is a protected natural area in California.\n• It encompasses 1,023 acres.\n• It was established to safeguard the habitat of the light-footed clapper rail, an endangered species.\n• The Tijuana Slough NWR is managed by the US Fish & Wildlife Service.\n• The US Fish & Wildlife Service limits human activities in the area.\n\nThe student wants to indicate the size of the Tijuana Slough NWR.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'The Tijuana Slough NWR is a natural area in California, home to the light-footed clapper rail.',
        'A protected natural area, the Tijuana Slough NWR encompasses 1,023 acres of land in California.',
        'Home to the light-footed clapper rail, California’s Tijuana Slough NWR is managed by the US Fish & Wildlife Service.',
        'The Tijuana Slough NWR is a protected natural area managed by the US Fish & Wildlife Service, which limits human activities there.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q25',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 0,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Jacob Lawrence was a US painter best known for *The Migration Series* (1940–41).\n• *The Migration Series* portrays scenes from the Great Migration of African Americans from the rural South to cities in the North and Midwest.\n• The series consists of 60 colorful semiabstract paintings, numbered 1 through 60.\n• The odd-numbered paintings are on display at the Phillips Collection in Washington, DC.\n• The even-numbered paintings are on display at the Museum of Modern Art in New York City.\n• Painting #12 depicts people buying tickets in a crowded train station.\n\nThe student wants to indicate where to go to view Painting #12 from Lawrence’s *Migration Series*.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'Depicting a crowded train station, Painting #12 from *The Migration Series* is on display at the Museum of Modern Art in New York City.',
        'In Painting #12 and the other works of *The Migration Series*, Lawrence painted African Americans going from the rural South to cities in the North and Midwest.',
        'The 60 colorful semiabstract paintings of Lawrence’s series can be viewed in two places: the Phillips Collection in Washington, DC, and the Museum of Modern Art in New York City.',
        'To view an even-numbered painting from Lawrence’s *Migration Series*, such as the one that depicts people buying train tickets, one must go to Washington, DC.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q26',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 0,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• River House is an Ancestral Puebloan dwelling site located in southeastern Utah.\n• It was built under a rock overhang and inhabited from approximately 910–1200 CE.\n• The overhanging rock ledges offered protection from heavy rain and snow.\n• Chimney Rock is an Ancestral Puebloan dwelling site located in southwestern Colorado.\n• It was built on relatively flat terrain and inhabited from approximately 925–1125 CE.\n• This level surface allowed for the construction of large terraced buildings.\n\nThe student wants to explain an advantage of the River House dwelling site.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'Since it was built under a rock overhang, River House was naturally protected from heavy rain and snow.',
        'The location of River House, an Ancestral Puebloan dwelling site in southeastern Utah, provided an advantage to its inhabitants.',
        'Located in southeastern Utah, River House is an Ancestral Puebloan dwelling site that was inhabited from approximately 910–1200 CE.',
        'The relatively flat terrain on which River House was built allowed for the construction of large terraced buildings.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q27',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 3,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Kepler’s first law of planetary motion states that the orbit of a planet around the Sun is an ellipse.\n• The law also states that, in an elliptical orbit, the object being orbited is at one of the ellipse’s foci.\n• Kepler’s laws of planetary motion also apply to natural satellites, such as moons.\n• Mimas is a moon of Saturn that orbits the planet in 0.94 Earth days on average.\n• Mimas’s orbit is elliptical.\n\nThe student wants to provide an explanation and example of Kepler’s first law of planetary motion.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'Kepler’s first law of planetary motion, which describes the orbits of Saturn and other planets in the solar system, states that the object being orbited is at one of the ellipse’s foci.',
        'Saturn’s moon Mimas completes an orbit in 0.94 Earth days on average, a clear example of Kepler’s first law of planetary motion, which describes the elliptical orbit of planets.',
        'Kepler’s first law of planetary motion states that the orbit of a planet around the Sun is an ellipse; for example, planetary satellites orbit their planets in an elliptical fashion.',
        'Mimas’s orbit around Saturn is elliptical, demonstrating Kepler’s first law of planetary motion, which describes the elliptical orbits of planets.',
      ],
    },
  ],
}
