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
      correctAnswer: 0,
      passage:
        'The pineapple was domesticated in South America. Its physical structure is no longer identical to the structure of the wild plant it is descended from. Summer squash also ______ its wild ancestor. That ancestor plant had a hard rind and bitter flesh. Indigenous people in eastern North America carefully bred the crop until it had a soft rind and mild-tasting flesh.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['varies from', 'helps with', 'argues with', 'reacts to'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q2',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 2,
      passage:
        'The adult emperor moth appears brown and orange with multiple eyespots as a result of pigmented scales that cover its wings and body. Although scales are widely known as the source of a moth’s color and pattern, the ______ of these scales goes beyond visual display: they also absorb the sun’s heat for moths active during the day.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['tendency', 'attractiveness', 'utility', 'frailty'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q3',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 3,
      passageIntro:
        'The following text is from Charles Chesnutt’s 1905 novel *The Colonel’s Dream*. Mr. French and Mr. Kirby work together.',
      passage:
        'Mr. French, the senior partner, who sat opposite Kirby, was an older man—a safe guess would have placed him somewhere in the debatable ground between forty and fifty; of a <u>good</u> height, as could be seen even from the seated figure, the upper part of which was held erect with the unconscious ease which one associates with military training.',
      prompt:
        'As used in the text, what does the word “good” most nearly mean?',
      choices: ['Reliable', 'Well-behaved', 'Talented', 'Considerable'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q4',
      domain: 'Craft and Structure',
      skill: 'Words in Context',
      correctAnswer: 2,
      passage:
        'Despite a growing view among young people and others in South Africa that celebrated anti-apartheid leader Nelson Mandela should have taken greater strides as president to effect more substantive structural changes in the country’s stratified society, years after his death in 2013 Mandela continues to be ______ by many worldwide.',
      prompt:
        'Which choice completes the text with the most logical and precise word or phrase?',
      choices: ['evaluated', 'criticized', 'lauded', 'reinterpreted'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q5',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 3,
      passageIntro:
        'The following text is adapted from Eugene O’Neill’s 1920 play *Beyond the Horizon*. Andrew and Robert Mayo are brothers who grew up on their family’s farm.',
      passage:
        '**ANDREW:** Farming ain’t your nature. There’s all the difference shown in just the way us two feel about the farm. You—well, you like the home part of it, I expect; but as a place to work and grow things, you hate it. Ain’t that right?\n\n**ROBERT:** Yes, I suppose it is. For you it’s different. You’re a Mayo through and through. You’re wedded to the soil. You’re as much a product of it as an ear of corn is, or a tree. Father is the same. This farm is his life-work.',
      prompt: 'Which choice best states the main purpose of the text?',
      choices: [
        'It illustrates that two characters share a goal.',
        'It shows how two characters solved a mystery.',
        'It describes a place two characters visited on vacation.',
        'It emphasizes a difference between two characters.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q6',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 1,
      passage:
        'In the past, historians who wanted to examine Frederick Douglass’s diary and other personal papers had to visit the Library of Congress in Washington, DC, to view them on microfilm (<u>film containing scaled-down reproductions of documents</u>). But traveling to the library often added time and costs to research projects. Now, by going to the library’s website, researchers can access digitized versions of Douglass’s papers without physically going anywhere.',
      prompt:
        'Which choice best describes the function of the underlined portion in the text as a whole?',
      choices: [
        'It gives information about a famous person.',
        'It explains the meaning of a word.',
        'It describes a debate among historians.',
        'It summarizes an unexpected finding.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q7',
      domain: 'Craft and Structure',
      skill: 'Text Structure and Purpose',
      correctAnswer: 1,
      passage:
        'Built in the 1970s, Raccoon Mountain is a pumped-storage hydropower facility (a “water-battery”) located in the United States along the Tennessee River. When energy demand is low, excess power from the regional electric utility’s nuclear plants is used to pump water (from a lower reservoir filled from the Tennessee River) up a shaft to the summit lake, where the water is stored as gravitational potential energy. When energy demand peaks, the water drains down from the summit lake, spinning turbines and generating upward of 1,700 megawatts of power—enough to power one million homes for twenty hours.',
      prompt: 'Which choice best states the main purpose of the text?',
      choices: [
        'To point out the differences between two methods of energy generation',
        'To explain the basics of how a specific energy technology works',
        'To discuss the benefits of a new energy technology',
        'To encourage regional electric utilities to build energy storage facilities',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q8',
      domain: 'Craft and Structure',
      skill: 'Cross-Text Connections',
      correctAnswer: 0,
      passage:
        'Text 1\n\n*Middlemarch*, *Cecilia De Noel*, and twenty-three other works of the late 1800s and early 1900s were rereleased in 2020 as publicity for a prestigious prize for women writers of fiction. Recognizing that women long had to use male pseudonyms for their works to be granted serious consideration (by publishers and readers alike), the campaign restored the authors’ given female names in place of such pseudonyms and brought visibility to identities that should not have been hidden.\n\nText 2\n\nThe belief that women historically were barred from publishing under names perceived as female is persistent. That it is also an overgeneralization becomes obvious when considering writers such as Elizabeth Barrett Browning, who published *Poems* and many other works under her own name in the 1800s, and Sara Payson Willis, who elected to use the female pseudonym Fanny Fern for her novels and newspaper columns in the mid-1800s.',
      prompt:
        'Based on the texts, how would the author of Text 2 most likely respond to the overall characterization in Text 1 of the publicity campaign?',
      choices: [
        'By suggesting that Barrett Browning and Willis are among the historical examples that challenge the assumption about the historical use of pseudonyms by female writers that is presented in Text 1',
        'By agreeing that the authors of *Middlemarch*, *Cecilia De Noel*, and the other works referred to in Text 1 were not afforded the same opportunities as Barrett Browning and Willis to shape their own representations when publishing',
        'By asserting that while it is clearly inappropriate to conclude that Barrett Browning was motivated by the same set of factors as the authors of the works discussed in Text 1 to publish under the names they did, it is appropriate to conclude that Willis was',
        'By acknowledging that the circumstances of publication for Barrett Browning and Willis differed from those for the authors whose works are the focus of Text 1, given that Barrett Browning and Willis each published multiple works',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q9',
      domain: 'Information and Ideas',
      skill: 'Central Ideas and Details',
      correctAnswer: 0,
      passage:
        'When people think of dinosaurs with feathers, they typically think of winged dinosaurs, such as the bat-like *Yi qi*. However, many dinosaurs that didn’t have wings also had feathers on their bodies. For instance, research indicates that the wingless, herbivorous *Kulindadromeus* likely had feathers.',
      prompt: 'Which choice best states the main topic of the text?',
      choices: [
        'Dinosaurs with feathers',
        'Animals without feathers',
        'The most valuable fossil',
        'Bird species',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q10',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 0,
      passageIntro:
        'The following text is from María Amparo Ruiz de Burton’s 1885 novel *The Squatter and the Don*.',
      passage:
        'Don Mariano Alamar was silently walking up and down the front piazza of his house at the rancho; his hands listlessly clasped behind and his head slightly bent forward in deep thought. He had pushed away to one side the many arm-chairs and wicker rockers with which the piazza was furnished. He wanted a long space to walk. That his meditations were far from agreeable, could easily be seen by the compressed lips, slight frown, and sad gaze of his mild and beautiful blue eyes.',
      prompt:
        'Based on the text, why does Don Mariano push aside the furniture on the piazza?',
      choices: [
        'He feels that walking an uninterrupted path will help him think through a difficult issue.',
        'He is determining which pieces of furniture to dispose of.',
        'He wishes to create the impression that he has a large extended family.',
        'He wants to make space so that he can engage in vigorous exercise.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q11',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 1,
      passage:
        'A student in an economics course is examining the decline since 1950 in average hours worked per person per year in various nations due to both increased productivity and the adoption of policies that limit working hours. The first task in this investigation is to determine how the decline in the United Kingdom compares to that in other countries. The student finds that ______',
      table: {
        caption: 'Average Hours Worked per Person per Year in 1950 and 2017',
        headers: [
          'Country',
          '1950',
          '2017',
          'Change in hours',
          'Percent change in hours',
        ],
        rows: [
          ['United Kingdom', '2184', '1670', '−514', '−24%'],
          ['Australia', '2178', '1731', '−447', '−21%'],
          ['Germany', '2427', '1354', '−1074', '−44%'],
          ['Mexico', '2432', '2255', '−177', '−7%'],
        ],
        note: 'Calculations may be inexact due to rounding.',
      },
      prompt:
        'Which choice most effectively uses data from the table to complete the statement?',
      choices: [
        'though the percent decrease in hours worked in the United Kingdom was greater than that in Germany and Mexico, it was less than that in Australia.',
        'though the percent decrease in hours worked in the United Kingdom was less than that in Germany, it was greater than that in Australia and Mexico.',
        'the decline in number of hours worked was greater in the United Kingdom than it was in Germany, Australia, or Mexico.',
        'while the number of hours worked rose in the United Kingdom from 1950 to 2017, it declined in Germany, Australia, and Mexico.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q12',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 3,
      passage:
        'The nearly forty tribes located in Oklahoma, including the Chickasaw Nation and the Quapaw Tribe, operate numerous businesses, employ tens of thousands of people, and generate billions of dollars in revenue. A student in an economics class is researching the tribes’ collective activity as a single industry. The student wants to compare that industry’s role in Oklahoma in 2017 with the roles of other industries in the state. Looking at a table with information about three industries, the student finds that compared with the other two industries, tribal economic activity ______',
      table: {
        caption: 'Impact of Three Key Industries on Oklahoma Economy in 2017',
        headers: [
          'Industry',
          'Approx. total contribution',
          'People employed',
          'Avg. contribution per employee',
        ],
        rows: [
          ['Construction', '$6,797,300,000', '77,247', '$87,994'],
          ['Professional services', '$7,694,000,000', '69,846', '$110,157'],
          ['Tribal economic activity', '$7,312,400,000', '51,674', '$141,510'],
        ],
      },
      prompt:
        'Which choice most effectively uses data from the table to complete the comparison?',
      choices: [
        'ranked highest in all three economic measures listed in the table.',
        'employed the same number of people as construction.',
        'made the lowest total contribution by industry.',
        'made the highest average economic contribution per employee.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q13',
      domain: 'Information and Ideas',
      skill: 'Command of Evidence',
      correctAnswer: 3,
      passage:
        'A creole language is an amalgam of a lexifier, or primary contributor of grammar and vocabulary, with one or more substrates, or secondary contributors. English-lexifying creoles in the Caribbean, such as Jamaican Patois, rely on West African substrates, while Hawaiian Pidgin relies on ʻŌlelo Hawaiʻi, the Polynesian language of the Native Hawaiian people, with further contributions from Cantonese and other East Asian languages, Portuguese, and Spanish. This is a heterogeneous history, even for a creole language. Moreover, numerous similarities are found among the East Asian substrates, as well as between Portuguese and Spanish. Thus, it can be challenging to credit certain words or features of grammar or pronunciation to any one substrate.',
      prompt:
        'Which statement, if true, would best illustrate the challenge described in the text?',
      choices: [
        'Stative structures in which verbs modify subjects and serve a descriptive function comparable to that of adjectives are hallmarks of Hawaiian Pidgin as well as of East Asian languages such as Cantonese, yet the syntax of Hawaiian Pidgin’s stative structures confirms their origin in ʻŌlelo Hawaiʻi.',
        'Hawaiian Pidgin’s substitution of “d” for the voiced “th” consonant (as used in “that”) and of “t” for the unvoiced “th” consonant (as used in “thick”) can be credited to the absence of “th” consonants in ʻŌlelo Hawaiʻi, though most other Polynesian languages lack “th” consonants too.',
        'As is also the case with some first-language speakers of Jamaican Patois, many first-language speakers of Hawaiian Pidgin align their pronunciation, word choice, and syntax more closely with English in certain conversational contexts than in others.',
        'The usage of the Hawaiian Pidgin verb “ste” to convey a temporary state, as in the statement “da watah ste cold” (the water is cold), most nearly resembles that of the ʻŌlelo Hawaiʻi verb *noho*, though the Portuguese verb *ficar* and the Spanish verb *estar* have similar usages and may also exert an influence on “ste.”',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q14',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 0,
      passage:
        'The great blue heron and the small dark heron are long-legged birds that live in wetlands, like the Everglades in Florida. Laura D’Acunto and colleagues wanted to know how these birds choose an area in which to live. They looked at features of the birds’ habitats, such as the geographic location of the area and how deep the water is during the birds’ breeding season. They found that great blue herons prefer areas with deep water during breeding season, but that was not true for small dark herons. The researchers concluded that water management strategies that increase the depth of water in potential wetland bird habitats during breeding season are therefore more likely to ______',
      prompt: 'Which choice most logically completes the text?',
      choices: [
        'attract great blue herons to the area than they are to attract small dark herons to the area.',
        'decrease the area’s appeal to both great blue herons and small dark herons than they are to increase the appeal to either.',
        'extend the average lifespan of great blue herons already in the area than they are to attract a greater number of those birds to the area.',
        'attract birds that don’t typically live in wetlands to the area than they are to attract great blue herons or small dark herons to the area.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q15',
      domain: 'Information and Ideas',
      skill: 'Inferences',
      correctAnswer: 1,
      passage:
        'Filtration is a widely used method for removing microplastics—plastics with a width less than 5 millimeters (mm)—from waterways. However, filtration systems are typically unable to capture very small microplastics. Menake Piyasena and Nelum Perera designed a device that applies sound waves to water as it flows through a metal tube. The sound waves cause microplastics in the water to gather in the middle and along the sides of the tube. The microplastics can then be separated out by channeling polluted and clean water through different outlets. Testing indicated that the system removes even tiny microplastics, including ones as small as 10 microns, or 0.01 mm, wide. This result suggests that ______',
      prompt: 'Which choice most logically completes the text?',
      choices: [
        'unlike sound waves, filters have the ability to remove large microplastics from polluted waterways.',
        'the sound wave treatment system may help solve a problem associated with filtration of microplastics.',
        'directing water through filtration tubes with multiple outlets reduces microplastic pollution.',
        'combining filtration with sound waves is likely the most efficient method for removing microplastics from water.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q16',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 2,
      passage:
        'A professor at the University of Oklahoma, Amy McGovern works on developing artificial intelligence technology, with a specific focus on supervised machine ______ machine learning involves teaching computer algorithms to organize large amounts of data.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'learning supervised',
        'learning, supervised',
        'learning. Supervised',
        'learning, which supervised',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q17',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 2,
      passage:
        'The Tuskegee University Archives’ collection includes an original 1957 photograph of Martin Luther King Jr. addressing a group of Tuskegee civil rights activists. Taken by P.H. Polk, the photo ______ King in profile, the glow of a stage light casting his silhouette onto the curtains behind him.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: ['to show', 'having shown', 'shows', 'showing'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q18',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 3,
      passage:
        'Sociologist Alton Okinaka sits on the review board tasked with adding new sites to the Hawaiʻi Register of Historic Places, which includes the Gulick-Rowell House and the Kukui Heiau. However, Okinaka doesn’t make such decisions ______ all historical designations must be approved by a group of nine other experts from the fields of architecture, archaeology, history, and Hawaiian culture.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'single-handedly and',
        'single-handedly,',
        'single-handedly',
        'single-handedly;',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q19',
      domain: 'Standard English Conventions',
      skill: 'Form, Structure, and Sense',
      correctAnswer: 3,
      passage:
        'Most of the ice found on Earth is ice Ih, distinguished by a crystalline structure in which molecules form a hexagonal pattern. Amorphous ice, on the other hand, constitutes most of the ice in the ultrafrigid environment of outer space. Defined by a disorganized molecular structure, ______',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'ice Ih differs from amorphous ice in that it possesses the thermal energy to form crystals.',
        'ice Ih contains crystals, whereas amorphous ice, which lacks the thermal energy to form them, does not.',
        'the lack of thermal energy in amorphous ice explains its inability to form the crystals found in ice Ih.',
        'amorphous ice lacks the thermal energy to form the crystals found in ice Ih.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q20',
      domain: 'Standard English Conventions',
      skill: 'Boundaries',
      correctAnswer: 1,
      passage:
        'When, in 2018, scientists in Germany discovered a fossilized brittle star with three thick, spine-studded arms positioned opposite three thin, undeveloped ones, they found something never before seen in the fossil ______ clonal fragmentation, a type of asexual reproduction, an animal splits itself in two, each half then regrowing its missing limbs—just what the brittle star was doing.',
      prompt:
        'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices: [
        'record. Evidence of cloning in',
        'record—evidence of cloning in',
        'record, evidence of cloning, in',
        'record: evidence of cloning. In',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q21',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 3,
      passage:
        'Typically, upon detecting the scent of another animal, a lion will open its mouth. ______ the lion allows the scent to reach sensory receptors on the roof of its mouth. These sensors help the lion interpret the source of the scent.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: ['Nowadays,', 'However,', 'On the other hand,', 'By doing so,'],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q22',
      domain: 'Expression of Ideas',
      skill: 'Transitions',
      correctAnswer: 2,
      passage:
        'A team led by Portuguese researcher Isabel C.F.R. Ferreira found that many species of mushrooms contain chemicals called phenolic compounds, such as 5-O-caffeoylquinic acid and kaempferol. ______ Ferreira detected 5-O-caffeoylquinic acid in *Pleurotus ostreatus* mushrooms and kaempferol in *Sparassis crispa* mushrooms.',
      prompt:
        'Which choice completes the text with the most logical transition?',
      choices: [
        'However,',
        'For this reason,',
        'For example,',
        'Nevertheless,',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q23',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 2,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• The human tongue contains taste receptors for a rich, savory flavor called umami.\n• Umami is triggered by the compounds in a variety of foods, including pork and soy sauce.\n• Participants in a study tasted a sample of winged kelp, a type of brown seaweed.\n• They rated its umami intensity as moderate.\n• The participants tasted a sample of arame, another type of brown seaweed.\n• They rated its umami intensity as high.\n\nThe student wants to emphasize a difference between the two seaweeds.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'Both winged kelp and arame are types of brown seaweed.',
        'Winged kelp and arame both contain umami flavor, which can also be triggered by compounds in pork and soy sauce.',
        'Participants in a research study found winged kelp, a type of brown seaweed, to have moderate umami intensity, while arame’s umami was more intense.',
        'Some types of brown seaweed, like winged kelp and arame, trigger umami flavor in human taste buds.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q24',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 3,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• J.D. Salinger was an acclaimed writer.\n• His first published work of fiction was a short story.\n• It was called “The Young Folks.”\n• It first appeared in *Story* in 1940.\n\nThe student wants to identify the title of J.D. Salinger’s first published short story.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'In 1940, a short story by J.D. Salinger appeared in *Story*.',
        'Acclaimed writer J.D. Salinger’s first published work of fiction was a short story.',
        'J.D. Salinger’s first published work of fiction appeared in 1940.',
        'J.D. Salinger’s first published short story was called “The Young Folks.”',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q25',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 0,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Ike Taiga (1723–1776) was a Japanese painter.\n• Li Bai (701–762) was a Chinese poet.\n• Taiga created the artwork titled *Landscape and Couplet of Chinese Verse*.\n• The artwork is made up of two scrolls.\n• Scroll 1 features a painting of a lone figure walking among tall, narrow mountains.\n• Scroll 2 features a poem from Li Bai that is about being in nature.\n\nThe student wants to emphasize a difference between the two scrolls.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'In *Landscape and Couplet of Chinese Verse*, one scroll features a painting, while the other scroll features a poem.',
        'Ike Taiga created *Landscape and Couplet of Chinese Verse*, which is made up of two scrolls that each depict nature.',
        'Made up of two scrolls that each depict nature, *Landscape and Couplet of Chinese Verse* was created by Li Bai.',
        'One of the two scrolls that make up *Landscape and Couplet of Chinese Verse* features mountains, and one features a portrait of poet Li Bai.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q26',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 1,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• Uku Randmaa is an Estonian sailor who completed a true circumnavigation of the globe in 2019.\n• One of the requirements of a true circumnavigation is that the journey must begin and end in the same port.\n• Randmaa’s circumnavigation began and ended in the port of Les Sables d’Olonne, France.\n• On his journey, Randmaa passed the three great capes of the Southern Ocean.\n• His journey took 254 days.\n\nThe student wants to provide evidence that Randmaa’s journey was a true circumnavigation.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'To be considered a true circumnavigation, a journey must begin and end in the same port, and Randmaa’s lasted 254 days.',
        'Randmaa began and ended his trip in the same port (Les Sables d’Olonne, France), one of the requirements for a true circumnavigation.',
        'Randmaa is an Estonian sailor who completed a true circumnavigation that ended in Les Sables d’Olonne, France.',
        'A true circumnavigation, Randmaa’s journey also passed the three great capes of the Southern Ocean.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'rw1-q27',
      domain: 'Expression of Ideas',
      skill: 'Rhetorical Synthesis',
      correctAnswer: 1,
      passage:
        'While researching a topic, a student has taken the following notes:\n\n• In the 1800s, some actors also managed theaters.\n• They were known as actor-managers.\n• William Charles Macready managed the Covent Garden Theatre (London) from 1837 to 1839.\n• He starred in a production of *Henry V* there in 1838.\n• Laura Keene managed Laura Keene’s Theatre (New York) from 1856 to 1863.\n• She starred in a production of *The Seven Sisters* there in 1860.\n\nThe student wants to emphasize a similarity between Macready and Keene.',
      prompt:
        'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices: [
        'In the 1800s, some actors (such as Keene) also managed theaters; they were thus considered actor-managers.',
        'As actor-managers, both Macready and Keene managed theaters where they also performed.',
        'Both Macready and Keene were managers of the Covent Garden Theatre in London, where they also starred in various plays.',
        'Macready managed a London theater, whereas Keene managed one in New York.',
      ],
    },
  ],
}
