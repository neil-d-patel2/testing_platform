import type { TestModule } from '../../types'

/** Reading and Writing — Module 1. 27 questions, fixed (non-adaptive). */
export const readingWriting1: TestModule = {
  id: 'rw-1',
  title: 'Reading and Writing — Module 1',
  timeLimitSeconds: 32 * 60,
  questions: [
    {
      type: 'multiple-choice',
      id: 'rw1-q1',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 3,
      passage:
        'The National Heritage Fellowship was created to honor exceptional folk and traditional artists in the United States. One artist who received the fellowship is jazz violinist and guitarist Claude “Fiddler” Williams. Williams was chosen for his lifetime ______ the arts.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: [
        'misunderstandings of',
        'imitations of',
        'doubts about',
        'contributions to',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q2',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 0,
      passageIntro:
        'The following text is from Kenneth Grahame’s 1908 novel *The Wind in the Willows*. The Mole is returning home after a visit to Mr. Badger’s house.',
      passage:
        'As he hurried along, eagerly anticipating the moment when he would be at home again among the things he knew and liked, the Mole saw clearly that he was an animal of tilled field and hedge-row, linked to the ploughed furrow, the frequented pasture, the lane of evening lingerings, the cultivated garden-plot.',
      prompt:
        'As used in the text, what does the word “anticipating” most nearly mean?',
      choices: [
        'Looking forward to',
        'Controlling',
        'Getting ahead of',
        'Demonstrating',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q3',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 1,
      passage:
        'The fossil remains of the individual known as Oase 1, discovered in Romania in 2002, can help paleoanthropologists not only ______ steps in the evolution of hominids but also illuminate the Pleistocene epoch generally, revealing important details about the time in which Oase 1 lived.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['approve', 'determine', 'influence', 'initiate'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q4',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 2,
      passage:
        'The Betsiboka River delta is a remarkably ______ landscape: it is a constantly evolving network of channels and strips of land that change in size and shape as the river deposits new sedimentary particles where the river meets the waters of the Indian Ocean.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['habitable', 'homogeneous', 'mutable', 'secluded'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q5',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 3,
      passage:
        '<u>A microgenre is a specialized genre consisting of a comparatively small number of stylistically similar artists.</u> The microgenre of electronic music known as hyperpop emerged in the 2010s, with American musician Laura Les as an early exponent. Her combination of dense synthesizer arrangements and metallic percussion with vocals electronically shifted in pitch above her natural range exemplifies the hyperpop sound. More recently, Japanese-British recording artist Rina Sawayama has contributed to the microgenre by incorporating pop melodies into hyperpop songs.',
      prompt:
        'Which choice best describes the function of the underlined sentence in the text as a whole?',
      choices: [
        'It anticipates an objection to the text’s endorsement of hyperpop.',
        'It states that the text’s intended audience mainly consists of hyperpop fans.',
        'It notes an exception to the text’s description of hyperpop.',
        'It defines a term used in the text’s discussion of hyperpop.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q6',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 0,
      passage:
        'Cuttlefish and barn owls see in three dimensions (3D) by combining two images in their brains, one from each eye. This produces a sense of depth, helping the animals judge how close or far away an object is. Researchers have investigated 3D vision in praying mantises as well. In one study, Vivek Nityananda and his team fitted the mantises’ faces with two different color filters, one covering each eye, <u>much like the filters in 3D glasses once worn at movies</u>. By observing the mantises’ reactions to projected images, the team confirmed that mantises do indeed have 3D vision, but it is unlike that of other animals.',
      prompt:
        'Which choice best states the function of the underlined portion in the text as a whole?',
      choices: [
        'It offers a comparison meant to aid understanding of the praying mantis study.',
        'It emphasizes a difference between the research on praying mantis vision and research on other animals’ vision.',
        'It describes an earlier use of a tool the researchers used in the praying mantis study.',
        'It identifies a potential problem that the researchers faced while studying the praying mantises.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q7',
      domain: 'Craft and Structure',
      skill: 'Cross-Text Connections',
      correctAnswer: 2,
      passageIntro:
        '**Text 1** is adapted from George Eliot’s 1871 novel *Middlemarch*. **Text 2** is a work of literary criticism about *Middlemarch*.',
      passage:
        'Text 1\n\n[Caleb Garth] took the paper and lowered his spectacles, measured the space at his command, reached his pen and examined it, dipped it in the ink and examined it again, then pushed the paper a little way from him, lifted up his spectacles again, showed a deepened depression in the outer angle of his bushy eyebrows, which gave his face a peculiar mildness <u>(pardon these details for once—you would have learned to love them if you had known Caleb Garth)</u>.\n\nText 2\n\nIn addition to providing detailed accounts of characters’ mannerisms, *Middlemarch*’s narrator reveals characters’ innermost thoughts with great specificity. As a result, the omniscient narrator is frequently conflated with the author herself, George Eliot. Occasionally, though, in direct addresses to the reader, the narrator is represented as reminiscing about characters as if they were personal acquaintances. Foregrounding the narrator’s own fictionality, such gestures counteract the tendency to identify the narrator with the author, a tendency of which Eliot was wary.',
      prompt:
        'Based on the texts, how would the author of Text 2 most likely characterize the underlined portion in Text 1?',
      choices: [
        'As evidence of Eliot’s talent for describing characters’ mannerisms in great detail, enabling readers to feel as if they know the character personally',
        'As an example of how Eliot’s omniscient narrator seamlessly enters into a particular character’s consciousness, revealing that character’s thoughts',
        'As a strategy that emphasizes the narrator’s distinct fictional persona, thus helping to discourage the reader’s direct association of the narrator with Eliot herself',
        'As an indication of Eliot’s affection for the character of Caleb Garth, whose mannerisms she predicts will be universally endearing',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q8',
      domain: 'Craft and Structure',
      skill: 'Cross-Text Connections',
      correctAnswer: 1,
      passage:
        'Text 1\n\nAccording to a study by a conservation group representing 11 tribal nations in the Great Lakes region, the firefly (*waawaatesi* in the Ojibwe language) will have significantly worse outcomes over the next 50 years if temperatures increase as much as some models suggest. By contrast, the American crow (*aandeg* in Ojibwe) should be able to withstand the highest predicted warming without much harm and so likely will not require the conservation efforts that the firefly will.\n\nText 2\n\nUS government agencies involved in conservation are unfortunately not able to address every possible threat to natural resources. They must use the best information available to decide which species are most threatened and therefore most in need of conservation efforts.',
      prompt:
        'Based on the texts, both authors would most likely agree with which statement?',
      choices: [
        'A collaborative approach is necessary to keep temperatures in the Great Lakes region from increasing to the highest predicted levels.',
        'Agencies involved in natural-resource management in the Great Lakes region should focus their conservation efforts more on the firefly than on the American crow.',
        'Conservation efforts focused on the firefly are more likely to be successful if they incorporate state and federal agency resources with the knowledge of tribal groups in those efforts.',
        'State, federal, and tribal groups involved in natural-resource management in the Great Lakes region should immediately begin conservation programs for both the firefly and the American crow.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q9',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 2,
      passageIntro:
        'The following text is from Julia Alvarez’s 2000 novel *In the Name of Salomé*. Salomé, a poet, is hosting guests in the front parlor of her family home, and Ramona is her sister. A salon is a social gathering for the exploration of intellectual ideas.',
      passage:
        'It was evening when the two men got up to leave. Tía Ana had already come into the room several times to see if these guests had departed yet. The front parlor had always been her special province, as she used it for her little school. Now, every evening, it turned into Salomé’s salon, as Ramona called it, and it was never in order for its transformation back to a classroom the following morning.',
      prompt:
        'Based on the text, what most likely motivates Tía Ana’s behavior during Salomé’s salon?',
      choices: [
        'She is frustrated because she needs assistance elsewhere in the house, but Salomé is unavailable while entertaining the guests.',
        'She is impatient to share her plans to start a new school with the guests and hopes they will support her.',
        'She is anxious for the gathering to disperse so that she can ready the space for her own needs.',
        'She considers the guests to be uninteresting and is trying to convince them to leave.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q10',
      domain: 'Information and Ideas',
      skill: 'Central Ideas and Details',
      correctAnswer: 1,
      passage:
        'Plant-based artifacts, such as wooden tools, are not frequently studied because their perishable nature makes them likely to break down over time. However, Miriam Cubas and her team were able to study plant-based artifacts believed to stem from the Neolithic period that had been well preserved by favorable conditions in a cave in Spain: low overall humidity and a dry wind current facilitated preservation by suppressing bacterial growth. Surprisingly, the research revealed that some of the artifacts dated even further back than previously thought, to the Mesolithic period.',
      prompt:
        'According to the text, what is one likely factor that caused the artifacts Miriam Cubas and her team studied to be well preserved?',
      choices: [
        'Climate variations during the Mesolithic period',
        'Limited bacterial growth on the artifacts',
        'The presence of multiple types of plants around the artifacts',
        'A very humid cave environment',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q11',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 3,
      passage:
        'Researchers Carolina Laura Morales and Anna Traveset gathered data about flowering plants growing alongside each other in various locations. In each case, the researchers identified one plant as a “target species” and a nearby plant as a “neighboring species.” The researchers then calculated a value to show how the neighboring species affected pollinator visits to the target species. A negative effect value indicates that the neighboring species had a harmful effect on the target species. Based on the table, two neighboring species that had a harmful effect on target species are the ______',
      table: {
        caption:
          'Effect of Neighboring Species on Pollinator Visits to Target Species',
        headers: ['Neighboring species', 'Target species', 'Effect value'],
        rows: [
          ['viper’s-bugloss', 'butterfly flower', '−0.3312'],
          ['Canadian wood betony', 'mayapple', '0.4729'],
          ['Virginia spring beauty', 'star chickweed', '0.8674'],
          ['common dandelion', 'cat’s ear', '−1.0576'],
        ],
      },
      prompt:
        'Which choice most effectively uses data from the table to complete the statement?',
      choices: [
        'Canadian wood betony and the Virginia spring beauty',
        'viper’s-bugloss and the Canadian wood betony',
        'common dandelion and the Virginia spring beauty',
        'common dandelion and the viper’s-bugloss',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q12',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 3,
      passage:
        '“A Pair of Silk Stockings” is an 1897 short story written by Kate Chopin. In the story, Mrs. Sommers attends a play, which she experiences as a temporary escape from the circumstances of her daily life: ______',
      prompt:
        'Which quotation from “A Pair of Silk Stockings” most effectively illustrates the claim?',
      choices: [
        '“But there were vacant seats here and there, and into one of them she was ushered, between brilliantly dressed women who had gone there to kill time and eat candy and display their gaudy attire.”',
        '“She did not wish to act hastily, to do anything she might afterward regret.”',
        '“There were many others who were there solely for the play and acting.”',
        '“The play was over, the music ceased, the crowd filed out. It was like a dream ended.”',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q13',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 1,
      passage:
        'Hypothesizing that lullabies, characterized by their less steady beat, are universally calming to infants, Constance M. Bainbridge and colleagues played a lullaby sung in the Western Nahuatl language and a non-lullaby sung in the Serbian language to a group of infants. The team found that the infants’ heart rates and pupil sizes both decreased more during the lullaby than during the non-lullaby. Since a decrease in heart rate is associated with relaxation, the team concluded that the lullaby relaxed the infants. However, noting that a reduced heart rate can also be associated with increased attention, one critic argues that the lullaby instead simply attracted the infants’ attention.',
      prompt:
        'Which finding, if true, would most directly weaken the critic’s claim?',
      choices: [
        'Infants in the study had never heard the Western Nahuatl lullaby before.',
        'Pupil size typically increases when a stimulus captures a person’s attention.',
        'More frequent blinking has also been found to be a reliable indication of attention.',
        'Parents of infants in the study preferred the Western Nahuatl lullaby over the Serbian non-lullaby.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q14',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 0,
      passage:
        'High-entropy alloys (HEAs) have been observed to have greater fracture toughness—greater resistance to crack propagation—than conventional alloys. It has been proposed that fracture toughness increases with the proportion of an HEA consisting of cobalt, but data on HEAs compiled by engineer Xuesong Fan show that this is not the case; for example, ______',
      table: {
        caption: 'High-Entropy Alloy Composition and Fracture Toughness',
        headers: [
          'HEA identification number',
          'Composition (%)',
          'Fracture toughness (MPa·√m)',
        ],
        rows: [
          ['15', 'chromium (33.33), cobalt (33.33), nickel (33.33)', '265.20'],
          [
            '98',
            'aluminum (20), chromium (20), cobalt (20), iron (20), nickel (20)',
            '186.47',
          ],
          [
            '1',
            'aluminum (10.55), boron (5.26), chromium (10.53), cobalt (10.53), copper (10.53), iron (10.53), molybdenum (10.53), nickel (10.53), silicon (10.53), titanium (10.53)',
            '50.90',
          ],
          [
            '53',
            'molybdenum (25), niobium (25), tantalum (25), tungsten (25)',
            '2.90',
          ],
          [
            '104',
            'cobalt (20), chromium (20), iron (20), manganese (20), titanium (20)',
            '2.44',
          ],
        ],
        note: 'Composition values may not add up to 100 due to rounding.',
      },
      prompt:
        'Which choice most effectively uses data from the table to complete the text?',
      choices: [
        'cobalt constitutes the same proportion of HEA 98 as it does of HEA 104.',
        'cobalt constitutes a substantial proportion of HEA 15 but does not constitute any of HEA 53.',
        'cobalt constitutes a different proportion of HEA 1 than it does of HEA 98.',
        'cobalt constitutes a higher proportion of HEA 15 than it does of HEA 98.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q15',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 3,
      passage:
        'The alahee tree is one of many forest plant species native to Oahu, a Hawaiian island, that are at risk of extinction. The survival of most of these species in the wild largely depends on birds eating their fruits and then dropping the seeds in different locations. Although Oahu’s native fruit-eating birds have all gone extinct, the red-vented bulbul and other fruit-eating bird species have been brought to the island and are now common there. Studies confirm that these nonnative birds are spreading plant seeds on Oahu, suggesting that the birds ______',
      prompt: 'Which choice most logically completes the text?',
      choices: [
        'show significantly more interest in eating the fruits of native forest plants than in eating the fruits of nonnative ones.',
        'are dropping higher numbers of native forest plant seeds around the island than native bird species did in the past.',
        'may also engage in other activities that affect the ability of alahee trees and other vulnerable forest plants to continue to spread to new areas.',
        'may be necessary for the continued survival of vulnerable forest plant species, such as the alahee tree.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q16',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 1,
      passage:
        '“Quirky,” a term often employed by those analyzing independent cinema from the 1990s and 2000s, has proved remarkably malleable as a formal concept. In the work of film scholar James MacDowell, quirkiness is a comedic sensibility—on full display in films like *Fantastic Mr. Fox* and *Napoleon Dynamite*—characterized by ______ “tonal combination of ‘irony’ and ‘sincerity.’”',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['it’s', 'its', 'their', 'they’re'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q17',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 0,
      passage:
        'The human body has three types of muscle ______ cardiac, and skeletal. The extensor indicis is a skeletal muscle—of which the body contains more than six hundred—and it helps with extending the index finger.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'tissue: smooth,',
        'tissue. Smooth',
        'tissue and smooth,',
        'tissue smooth.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q18',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 3,
      passage:
        'Mississippi resident Hiram Rhodes Revels, sworn in as a member of the US Senate in 1870, was one of the nearly two thousand African ______ during the decade following the Civil War.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'American’s who won elections',
        'Americans’ who won elections’',
        'Americans who won election’s',
        'Americans who won elections',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q19',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 3,
      passage:
        'Greece’s constitution, enacted in 1975, contains three of the six constitutional features that enhance judicial independence, as identified by legal scholars James Melton and Tom Ginsburg. Explicit provisions for judicial independence, their research explains, ______ more likely to be found in constitutions enacted after 1985.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['is', 'was', 'has been', 'are'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q20',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 0,
      passage:
        'The programming languages COBOL, developed by Grace Hopper in ______ developed by Chris Lattner in 2014, are all routinely translated into executable code by tools known as compilers.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        '1959; Clojure, developed by Rich Hickey in 2007; and Swift,',
        '1959, Clojure; developed by Rich Hickey in 2007: and Swift',
        '1959, Clojure developed by Rich Hickey in 2007; and Swift',
        '1959; Clojure, developed by Rich Hickey in 2007, and Swift,',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q21',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 2,
      passage:
        'Proto-Uto-Aztecan is a protolanguage, or a hypothesized ancestral language, of all the Uto-Aztecan languages—fifty-eight languages that, because ______ descendants of Proto-Uto-Aztecan, can provide information about the protolanguage’s structure.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['their', 'it’s', 'they’re', 'its'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q22',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 2,
      passage:
        'Though Middle English was widely spoken in fourteenth-century England, the English language was rarely employed in literature until poet Geoffrey Chaucer pioneered its literary use. ______ his manuscripts contain the first documented uses of over 2,000 English words—like the word “annoyance” in his 1386 poem “The Parson’s Tale”—which led a contemporary to dub him “the first finder of our fair language.”',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: ['However,', 'Besides,', 'In fact,', 'On the contrary,'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q23',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 1,
      passage:
        'In skateboarding, the 900—a trick in which the skateboarder spins two and a half times in midair—is so rare that every successful execution of it is a historic occasion. ______ ever since Jonathan Schwan and Tas Pappas performed their 900s in 2013 and 2014, respectively, fans have revered them as titans of the sport.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: [
        'Regardless,',
        'For this reason,',
        'By comparison,',
        'In conclusion,',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q24',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 3,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Elizabeth Catlett (1915–2012) was a celebrated African American artist.\n• She is best known for creating sculptures and prints that explore the Black experience.\n• *Black Unity* is a 1968 sculpture by Catlett.\n• *Links Together* is a 1996 print by Catlett.\n\nThe student wants to provide an example of one of Catlett’s sculptures.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'Artist Elizabeth Catlett is best known for creating sculptures and prints that explore the Black experience.',
        'Elizabeth Catlett, a celebrated artist, was born in 1915.',
        'The print *Links Together* was created by celebrated artist Elizabeth Catlett in 1996.',
        'The sculpture *Black Unity* was created by celebrated artist Elizabeth Catlett in 1968.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q25',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 0,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Lighthouses send out crucial light signals to help ships and other watercraft navigate at night.\n• Before automation, lighthouses were run by lighthouse keepers.\n• Catherine A. Murdock was the lighthouse keeper at Rondout Creek Light in New York.\n• She held this position from 1857 to 1907.\n• Mary J. Succow was the lighthouse keeper at Pass Manchac Light in Louisiana.\n• She held this position from 1873 to 1909.\n\nThe student wants to emphasize a similarity between Catherine A. Murdock and Mary J. Succow.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'Catherine A. Murdock and Mary J. Succow were both lighthouse keepers during the late nineteenth and early twentieth centuries.',
        'Catherine A. Murdock and Mary J. Succow spent their careers as lighthouse keepers in different lighthouses.',
        'From 1857 to 1907, the nighttime waters of New York were more navigable thanks to Catherine A. Murdock.',
        'Lighthouse keepers during the late nineteenth and early twentieth centuries were crucial to ensuring safe navigation for watercraft.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q26',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 0,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• The Museu de les Ciències Príncipe Felipe in Valencia, Spain, is home to a Foucault pendulum.\n• The pendulum consists of a weighted ball that swings at the end of a roughly 34-meter-long cable.\n• Like all Foucault pendulums, it dangles from a fixed point that ensures the swing path of the pendulum does not change.\n• To an observer, the swing path of a Foucault pendulum appears to change over time because Earth rotates beneath it.\n• Foucault pendulums are used as a simple way to provide evidence of Earth’s rotation.',
      prompt:
        'Which choice most effectively uses information from the notes to specify the length of the Foucault pendulum’s cable?',
      choices: [
        'The Foucault pendulum at the Museu de les Ciències Príncipe Felipe in Valencia, Spain, includes a cable that is roughly 34 meters long.',
        'Although the swing path of a Foucault pendulum does not actually change, it appears to change because Earth rotates beneath the pendulum.',
        'With a swing path that appears to change over time, a Foucault pendulum provides evidence of Earth’s rotation.',
        'The Foucault pendulum at the Museu de les Ciències Príncipe Felipe consists of a weighted ball and a cable.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q27',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 2,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Mali is a country in West Africa.\n• A high percentage of Mali’s population—47.3 percent—is under fifteen years old.\n• It has the second-largest under-fifteen population in the world.\n• Roughly 40 percent of Africa’s population is under fifteen years old—the highest percentage of any continent.\n• According to the United Nations (UN), Africa’s “high number of young people is an opportunity for the continent’s growth—but only if these new generations are fully empowered to realize their best potential.”\n\nThe student wants to emphasize the global rank of Mali’s youth population.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'Making up roughly 40 percent of the continent’s total population, Africa’s under-fifteen population offers “an opportunity for the continent’s growth,” according to the UN.',
        '“Only if these new generations are fully empowered to realize their best potential,” says the UN, will Africa’s high percentage of young people lead to the continent’s growth.',
        'With 47.3 percent of its population under fifteen years of age, Mali has the second-largest population for that age range in the world.',
        'Africa’s high population of young people is due in part to the high percentage of young people in Mali.',
      ],
    },
  ],
}
