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
      correctAnswer: 1,
      passage:
        'Writer Lydia Davis observed that while ______ literary forms, such as the short story, are recognizable as such even as they evolve, there are rarer “intergeneric” forms that might, for example, use elements of both fiction and essays to create something unclassifiable. The very short publications of Diane Williams arguably fit in this category, since they straddle the line between prose and poetry.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['equivocal', 'orthodox', 'intermediate', 'neutral'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q2',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 3,
      passage:
        'The invertebrates *Haywardozoon pacificum* and *Trophontera mangant* have recently been discovered inhabiting the Clarion-Clipperton Zone (CCZ), an area of abyssal plain between Hawaii and Mexico where mining is permitted. The number of other invertebrates that may inhabit the CCZ is currently ______, as the area’s biota is poorly sampled and the few samples that have been taken cannot be presumed to be representative.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['infinitesimal', 'verifiable', 'tenuous', 'inestimable'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q3',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 0,
      passage:
        'Given that healthy genetic diversity supports honey bee population robustness — a matter of public interest given the bees’ crucial role as pollinators of many crops, such as watermelon — a study revealing a ______ of diversity among US honey bees raised concern, though it also noted the potential to enhance the number of bees carrying several newly discovered genetic variants (e.g., A2-829-4-USA).',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['paucity', 'redundancy', 'disparity', 'repository'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q4',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 0,
      passage:
        'The subscription model in which consumers who do not deliberately cancel their subscriptions automatically pay recurring fees for access to products and services benefits retailers when consumer ______ is high. Many of the 8.5 percent of subscribers who canceled their food and beverage subscriptions in January 2022 had stopped valuing their subscriptions long before then, but sellers profited from those customers’ passivity in the interim.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['inertia', 'evasion', 'decisiveness', 'turnover'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q5',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 3,
      passage:
        'Roy McLendon’s *Moonlit St. Lucie*, a riverscape featuring the silhouette of a single palm tree against the backdrop of shimmering water and a brilliant moonlit sky, is typical of paintings by the Florida Highwaymen, loosely affiliated landscape artists mainly active in Fort Pierce, Florida, during the 1950s and ’60s. Some art historians suggest that Highwaymen paintings played a role in shaping popular perceptions of the state that persist today: the natural iconography that McLendon and colleagues constantly revisited—placid inland rivers, windswept palm trees—is now seen as classically Floridian.',
      prompt: 'Which choice best states the main purpose of the text?',
      choices: [
        'To describe the historical circumstances in which paintings by the Florida Highwaymen experienced a resurgence in popularity',
        'To explain that a particular painting by Roy McLendon has had greater influence on the broader culture of the state of Florida than is generally acknowledged',
        'To contrast the public’s reaction during the 1950s and ’60s to a particular painting by Roy McLendon with more recent reactions to it',
        'To present the argument that paintings by the Florida Highwaymen likely helped to create a particular widespread impression of Florida',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q6',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 1,
      passage:
        'Founded in Denver in 1991, the Museo de las Américas is one of the best-known US-based institutions showcasing Latino cultures. Since its founding, it has acquired more than 4,800 objects for its permanent collection. <u>Since 2000, the number of Latino cultural institutions in the US has expanded considerably.</u> LA Plaza de Cultura y Artes, which opened in Los Angeles in 2011 and focuses on Mexican American art and culture, is among the most prominent.',
      prompt:
        'Which choice best states the function of the underlined sentence in the text as a whole?',
      choices: [
        'It contrasts the focus of the Latino cultural institution discussed earlier in the text with the focus of the institution discussed later in the text.',
        'It identifies a historical trend of which the Latino cultural institution discussed later in the text is a part.',
        'It analyzes how two institutions’ approach to exhibiting artworks reflects the approach taken by most Latino cultural institutions.',
        'It describes a historical development that encouraged the founding of the two Latino cultural institutions discussed in the text.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q7',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 0,
      passage:
        'In Bhutan, use of solid fuel (e.g., coal and wood) as a share of total household fuel use fell by approximately two thirds between 2000 and 2019; such shifts are often explained by appeal to the energy ladder, a model holding that fuel choice is mediated mainly by household income (specifically, high-technology fuels displace solid fuels as incomes rise). Rasmus Heltberg’s study of fuel use in Nepal shows this model to be reductive, however: household fuel use was heterogeneous, flexible, and influenced by several factors, including the stability of the local electrical grid.',
      prompt: 'Which choice best describes the main purpose of the text?',
      choices: [
        'To challenge a common explanation for households’ fuel choices',
        'To contrast patterns in household fuel use in two countries',
        'To account for the effect of fuel use on household income',
        'To critique a frequently used model of changes in household fuel prices',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q8',
      domain: 'Information and Ideas',
      skill: 'Central Ideas and Details',
      correctAnswer: 3,
      passageIntro:
        'The following text is from George Eliot’s 1857 short story “The Sad Fortunes of the Rev. Amos Barton.” The Countess Czerlaski is a newcomer to the town of Milby.',
      passage:
        'It is true, the countess was a little vain, a little ambitious, a little selfish, a little shallow and frivolous, a little given to white lies, — But who considers such slight blemishes, such moral pimples as these, disqualifications for entering into the most respectable society! Indeed, the severest ladies in Milby would have been perfectly aware that these characteristics would have created no wide distinction between the Countess Czerlaski and themselves: and since it was clear there was a wide distinction—why it must lie in the possession of some vices from which they were undeniably free.',
      prompt: 'Which choice best states the main idea of the text?',
      choices: [
        'The residents of Milby had initially viewed the Countess Czerlaski with suspicion, but they have gradually come to see her as mostly harmless.',
        'Although the Countess Czerlaski actively cultivates a sense of mystery about her, her background is less interesting than what many residents of Milby have been led to believe.',
        'Although the residents of Milby are generally thought to be hospitable, the Countess Czerlaski has committed many social blunders that have caused her to be widely disliked',
        'Some residents of Milby are determined to disapprove of the Countess Czerlaski, even though the reasons for their dislike are largely groundless.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q9',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 2,
      passage:
        'Some researchers posit that species on the South Pacific island of Grande Terre are the surviving members of clades that inhabited other islands in the region before the complete emergence of Grande Terre 37 million years ago. In a 2012 study, however, Hervé Sauquet et al. found that the crown age (the age of the most recent common ancestor of all living and extinct species in the clade) of the clade of southern beeches on Grande Terre is 16.4 million years; Sauquet et al. further found that the crown age of the clade of southern beeches in the South Pacific generally is also approximately 16.4 million years.',
      prompt:
        'As presented in the text, the findings of Sauquet et al. best support which statement?',
      choices: [
        'The southern beeches found on Grande Terre are members of a clade that likely originated outside the South Pacific.',
        'The most recent common ancestor of the southern beeches found on Grande Terre lived at least 37 million years ago.',
        'The southern beeches found on Grande Terre are not members of a clade that existed before the island completely emerged.',
        'The ancestors of most species found on Grande Terre arrived on the island earlier than did the most recent common ancestor of the island’s southern beeches.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q10',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 2,
      passage:
        'A student is writing a research paper on the history of irrigation in the southwestern United States, situating the development of Lake Sabrina (a man-made body of water created in Inyo County, California, in 1908) in a larger historical context. The student claims that some modern-day irrigation methods used in southwestern states, such as California, Arizona, and New Mexico, have a lineage that long predates the completion of Lake Sabrina.',
      prompt:
        'Which quotation from a historian best supports the student’s claim?',
      choices: [
        '“Sprinkler irrigation systems, which were developed in the late twentieth century, are a convenient technique of irrigating that makes use of machinery in order to spray water in all directions. Many areas of the southwestern United States are currently irrigated by this method.”',
        '“In the decades following the Second World War, irrigation of arid areas for agriculture increased to such a degree that it now accounts for roughly 70% of the world’s water usage.”',
        '“The irrigation system developed by the Hohokam people in what is now central Arizona in the 7th century CE was simple but made use of hydraulic engineering design principles that are still utilized by today’s engineers.”',
        '“The importance of the development of irrigation infrastructure in the American Southwest today cannot be overstated, since it is the most common means of conveying water for food production.”',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q11',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 1,
      passage:
        'Periods of subfreezing temperatures in Alaska have been growing shorter as a result of climate changes, potentially enabling increased carbon dioxide (CO₂) absorption through greater productivity of sidebells wintergreen (*Orthilia secunda*) plants and other vegetation, but also potentially enabling increased CO₂ output through greater heterotrophic respiration (CO₂ generated by the activity of soil microorganisms). Hydrologist Yonghong Yi and her colleagues developed a model incorporating numerous inputs — years of soil moisture and snow cover data among them — to evaluate the effects of climate changes on the CO₂ balance in Alaska, concluding that net CO₂ is likely to increase if seasonal snow cover arrives earlier relative to the onset of soil surface freezing.',
      prompt:
        'Which finding, if true, would most directly support the researchers’ conclusion?',
      choices: [
        'Relatively early snow cover reduces the amount of soil moisture available for the growth of plant species such as *O. secunda* and lowers the rate of heterotrophic respiration',
        'The soil insulation provided by snow cover enables heterotrophic respiration to continue during a period in which plant species such as *O. secunda* are typically not growing.',
        'The effect of soil moisture on the growth of vegetation and on the rate of heterotrophic respiration is stronger during the period of seasonal snow cover than during the period without snow cover',
        'Seasonal snow cover tends to persist longer in areas of relatively low vegetation growth and high heterotrophic respiration than in areas of relatively high vegetation growth and low heterotrophic respiration',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q12',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 3,
      passage:
        'To understand the extent of deforestation in the Chorotega region of Costa Rica, Juan Pablo Arroyo Mora and colleagues used historical aerial photography and remote sensing data to track changes in the total number of forest patches in areas of different land use capability classes (categories that indicate possible uses of forest land). Due to the Chorotega region’s accessibility, various types of forested areas were converted to cattle pasture as rising international meat prices drove a cattle ranching boom in the 1960s and 1970s: this conversion is evident in the ______',
      figureNote:
        'Forest-patch graph pending insertion — the source document does not include it.',
      prompt:
        'Which choice most effectively uses data from the graph to complete the assertion?',
      choices: [
        'high number of patches in class VII and class VI in 1986.',
        'difference between the number of patches in class VII and in class VI in 2000.',
        'increase in the number of patches for all classes from 1979 to 2000.',
        'decrease in the number of patches for all classes from 1960 to 1979.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q13',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 1,
      passage:
        'Issuing a one-dollar coin yields positive seigniorage — profit generated when the face value of a coin exceeds the unit cost of producing it — for Singapore’s government, which can be used to fund such services as education. Issuing coins can also result in negative seigniorage, however, and this phenomenon led Australia to stop producing certain coins. A student argues that it is in the financial interest of the United States to follow the example of Australia with regard to each of the four coins shown in the table.',
      table: {
        caption:
          'Value, Cost, and Seigniorage of US Coins by Denomination, 2023',
        headers: [
          'Denomination',
          'Total value of units produced (millions of dollars)',
          'Gross cost (millions of dollars)',
          'Seigniorage (millions of dollars)',
          'Seigniorage per $1 issued (dollars)',
        ],
        rows: [
          ['One-cent', '41.4', '127.4', '−86.0', '−2.08'],
          ['Five-cent', '70.8', '163.4', '−92.6', '−1.31'],
          ['Ten-cent', '266.6', '141.1', '125.5', '0.47'],
          ['Quarter-dollar', '568.4', '264.4', '304.0', '0.53'],
        ],
      },
      prompt:
        'Which choice best describes data from the table that weaken the student’s argument?',
      choices: [
        'Seigniorage per dollar issued was slightly greater for quarter-dollar coins than for ten-cent coins, but seigniorage in millions of dollars was much greater for quarter-dollar coins than for ten-cent coins.',
        'Although issuing one-cent and five-cent coins resulted in negative seigniorage in millions of dollars, issuing ten-cent and quarter-dollar coins resulted in positive seigniorage in millions of dollars.',
        'Issuing one-cent and five-cent coins created negative seigniorage in millions of dollars, but for each of those coins, the gross cost of issuing the coin was lower than the gross cost of issuing ten-cent or quarter-dollar coins was.',
        'Although issuing five-cent coins created the greatest negative seigniorage in millions of dollars, issuing one-cent coins created the greatest negative seigniorage per dollar issued',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q14',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 0,
      passage:
        'Though longitudinal studies like the Northern Ireland Longitudinal Study (NILS), which has surveyed approximately 500,000 participants in Northern Ireland to find trends in public health, are expensive because they are conducted over many years, by spanning these time frames, they can reveal causal patterns. But studies for which cause and effect is not at issue, like a public opinion study that merely seeks to determine the proportion of a city’s population that supports a particular tax proposal, can succeed without longitudinal methods, which means that ______',
      prompt: 'Which choice most logically completes the text?',
      choices: [
        'the public opinion study could likely be completed at a considerably lower cost than NILS.',
        'longitudinal methods would likely be less suitable for studies in public opinion than for studies in public health.',
        'longitudinal methods would likely be less expensive for studies in public opinion than for studies in public health',
        'the results from NILS would likely be more reliable than those from the public opinion study.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q15',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 2,
      passage:
        'The Virgin Group’s introduction of the Virgin Atlantic airline in 1984 is an instance of brand extension — the company leveraged its brand recognition as a music retailer to enter a new product category. To investigate how market share affects consumers’ likelihood of purchasing brand extensions, Alicia Grasby et al. identified 30 extended-brand pairs (e.g., the same brand of vacuum cleaner and microwave) in household purchasing data; for each pair, Grasby et al. calculated the branded products’ market share and calculated the increase in probability of a brand in one category being purchased if the same brand was purchased in the other category. A broad inverse relationship between the two values emerged, which can most reasonably be attributed to the fact that ______',
      prompt: 'Which choice most logically completes the text?',
      choices: [
        'the purchase probability of a brand is affected by the purchase probability of the particular product category to which it belongs, and thus brands in categories that are rarely purchased tend to have low purchase probabilities regardless of market share.',
        'as a brand’s market share increases, the number of competing brands in the same product category tends to decrease, and thus the rate of increase in market share tends to accelerate as a brand’s market share grows.',
        'brands with high market share have high purchase probability regardless of whether the other product in the pair is purchased and thus have less potential to increase in purchase probability than brands with low market share do.',
        'consumers tend to be less familiar with brands with low market share than brands with high market share and thus may purchase both products in a pair with low market share without recognizing that the products are the same brand.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q16',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 3,
      passage:
        'The small celestial body known as 2060 Chiron is expected to have a relatively short lifetime in the outer solar system. Within just a few million years, 2060 Chiron is likely to migrate into the inner solar system or be destroyed, according to ______ trajectory.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'astronomers modeling of the objects',
        'astronomer’s modeling of the object’s',
        'astronomers modeling of the object’s',
        'astronomers’ modeling of the object’s',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q17',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 1,
      passage:
        'Focusing on *Mirounga angustirostris* — or ______ 2021 study by researchers Akinori Takahashi, Daniel Costa, and Patrick Robinson found that female elephant seals devote more than 80% of their time to foraging for prey in the North Pacific Ocean.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'northern elephant seals, as they’re more commonly known, a',
        'northern elephant seals, as they’re more commonly known — a',
        'northern elephant seals, as they’re more commonly known. A',
        'northern elephant seals — as they’re more commonly known, a',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q18',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 3,
      passage:
        'A 2016 study by researchers Andreas Keller and Leslie Vosshall evaluating how participants described the odors of various chemical compounds revealed some similarities between the odor of sample 15 (linoleic acid) and that of sample 18 (propionic acid). The ______ primary descriptors both included “sour”; however, the next most common word used for sample 15 was “decayed,” while that for sample 18 was “musky.”',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'sample’s odors',
        'samples’ odor’s',
        'samples odors’',
        'samples’ odors’',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q19',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 0,
      passage:
        'The Orionid meteor shower’s brightness typically surpasses that of the Daytime Arietid meteor shower due to the interplay of three main factors — namely the size and composition of the ______ velocity upon entering Earth’s mesosphere, with higher-velocity meteoroids releasing more energy; and atmospheric fluctuations, such as changes in sky conditions.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'meteoroids; their',
        'meteoroids. Their',
        'meteoroids, their',
        'meteoroids — their',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q20',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 2,
      passage:
        'Despite differences in history, language, and geography, the geopolitical entities that constitute the South Pacific regions of Micronesia, Melanesia, and Polynesia share one feature: ______ an island or a group of islands. For example, the Pitcairn Islands in Polynesia is a territory that is part of Great Britain and consists of only one inhabited island with fewer than one hundred residents.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'all of them are',
        'all of them is',
        'each of them is',
        'each of them are',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q21',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 1,
      passage:
        'The parks of Memphis, Tennessee, seem to be making people happier. In 2022, a team of researchers ______ to find connections between the physical location in which a social media post was created and the content of that post analyzed geotagged social media posts from various sites in Memphis. The team found that posts from the city’s parks contained more words associated with happiness than did the other posts.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['hoped', 'hoping', 'was hoping', 'were hoping'],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q22',
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
      id: 'rw2-q23',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 3,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Hina Hanta is an online archive curated by the Choctaw Nation of Oklahoma.\n• It features images of many cultural artifacts relevant to the history of the Choctaw people.\n• It features basketry, including a trunk basket (*tapushik pothoma* in Choctaw) made from cane.\n• The trunk basket was made in 2019.\n• The archive features household items, including a stamp (*isht inchunwa*) made from rubber.\n• The stamp was made in the 1800s.\n\nThe student wants to support the claim that the online archive features both older and newer artifacts.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'The rubber stamp (*isht inchunwa*) was made in the 1800s.',
        'Hina Hanta, an online archive, features both basketry and household items.',
        'Not all artifacts in the Hina Hanta archive are from the 1800s.',
        'The Hina Hanta online archive features cultural artifacts both old and new, including a rubber stamp from the 1800s and a cane trunk basket from 2019.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q24',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 1,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• The Peloncillo-Pan Duro Mountains are located in northwestern Mexico.\n• They cover an area of 1,360 square miles (mi²).\n• The Big Hatchet Mountains are located in the southwestern United States.\n• They cover an area of 65 mi².\n• These mountain ranges are two of the dozens of “sky islands” in the southwestern US and northwestern Mexico.\n• A sky island is an isolated mountain range whose environment differs drastically from that of the surrounding lowlands.\n\nThe student wants to compare the sizes of the two mountain ranges.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'There are dozens of isolated mountain ranges located in the southwestern US and northwestern Mexico.',
        'In terms of area, the Peloncillo-Pan Duro Mountains (which cover 1,360 mi²) are larger than the Big Hatchet Mountains (65 mi²).',
        'Sky islands in northwestern Mexico and the southwestern US can vary in size.',
        'The Peloncillo-Pan Duro Mountains and the Big Hatchet Mountains are both isolated mountain ranges whose environments differ drastically from that of the surrounding lowlands.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q25',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 0,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Bengali is a language in the Indo-Aryan language family.\n• In Bengali, a noun takes a different form when that noun functions as a location in a sentence.\n• The Bengali noun *bari* (house) is combined with the locative suffix *-te* to become the locative noun *barite* (in the house).\n• Danish is a language in the Germanic language family.\n• In Danish, nouns do not change form to indicate location.\n• In Danish, nouns used as a location must be indicated by prepositions such as *i* (in) or *på* (on).\n\nThe student wants to emphasize a difference between Bengali and Danish nouns.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'To indicate location in Bengali, a suffix is appended to a noun, but in Danish, the noun is unchanged and a preposition is used.',
        'Bengali and Danish belong to two distinct language families; the former is in the Indo-Aryan family, while the latter is a Germanic language.',
        'Though nouns in Bengali change form to indicate location, this Indo-Aryan language belongs to a different language family than Danish does.',
        'In Bengali, nouns take a different form when they function as a location, as the language belongs to the Indo-Aryan family: Danish, however, belongs to the Germanic family.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q26',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 0,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Lou Scheper-Berkenkamp was a painter and author born in Wesel, Germany.\n• She began attending the Bauhaus in 1920.\n• The Bauhaus was an influential German art and design school.\n• The school famously espoused the design principle of “form follows function.”\n• “Form follows function” means that an object’s shape should be determined primarily by its intended purpose.\n\nThe student wants to explain the principle espoused by the Bauhaus.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'According to the Bauhaus, an object’s intended purpose (function) should primarily determine its shape (form).',
        'Lou Scheper-Berkenkamp was a painter and author who attended the Bauhaus, famous for espousing the principle of “form follows function.”',
        'Famous for its principle of “form follows function,” the Bauhaus was an influential German art and design school.',
        'An object’s intended purpose and its shape are two elements of the design principle “form follows function.”',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw2-q27',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 2,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• According to researcher Muhammad Rayyan Fazal, “geothermal electric energy… [is] capable of producing more energy per megawatt per year as compared to similar capacity solar and wind power systems.”\n• Geothermal power plants typically employ dry steam systems, flash steam systems, or binary cycle systems to produce electricity from high-temperature geothermal fluid.\n• The Platanares geothermal power plant in Honduras uses a binary cycle system.\n• Fazal says that binary cycle systems “pump 100% geothermal fluid back to the injection well, hence offering the least environmental impact with little or no emissions.”\n\nThe student wants to use a quotation from Fazal to explain an advantage of the geothermal system at the Platanares plant.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'Compared with dry steam systems and flash steam systems, the binary cycle system used at the Platanares plant is “capable of producing more energy per megawatt per year,” Fazal notes.',
        'According to Fazal, because it uses high-temperature geothermal fluid to produce electricity, the system used at the Platanares plant results in “little or no emissions,” making it environmentally friendly.',
        'Since they return all geothermal fluid to the injection well, binary cycle systems — such as the one at the Platanares plant — produce “the least environmental impact,” according to Fazal.',
        'The Platanares plant uses a binary cycle system to produce electricity. In this type of geothermal system, fluid is pumped “back to the injection well,” Fazal explains.',
      ],
    },
  ],
}
