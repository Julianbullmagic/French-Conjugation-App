// --- Topic Configs (drives both filter panel and question pool) ---

const TOPIC_CONFIGS = [
    { key: 'indicative.present',             type: 'verb', mood: 'indicative',  tense: 'present',             pronounCount: 6, label: 'Présent',               group: 'Indicatif' },
    { key: 'indicative.preterite',           type: 'verb', mood: 'indicative',  tense: 'preterite',           pronounCount: 6, label: 'Passé composé',          group: 'Indicatif' },
    { key: 'indicative.imperfect',           type: 'verb', mood: 'indicative',  tense: 'imperfect',           pronounCount: 6, label: 'Imparfait',              group: 'Indicatif' },
    { key: 'indicative.future',              type: 'verb', mood: 'indicative',  tense: 'future',              pronounCount: 6, label: 'Futur simple',           group: 'Indicatif' },
    { key: 'indicative.conditional',         type: 'verb', mood: 'indicative',  tense: 'conditional',         pronounCount: 6, label: 'Conditionnel présent',   group: 'Indicatif' },
    { key: 'indicative.present_perfect',     type: 'verb', mood: 'indicative',  tense: 'present_perfect',     pronounCount: 6, label: 'Passé récent',           group: 'Indicatif' },
    { key: 'indicative.past_perfect',        type: 'verb', mood: 'indicative',  tense: 'past_perfect',        pronounCount: 6, label: 'Plus-que-parfait',       group: 'Indicatif' },
    { key: 'indicative.future_perfect',      type: 'verb', mood: 'indicative',  tense: 'future_perfect',      pronounCount: 6, label: 'Futur antérieur',        group: 'Indicatif' },
    { key: 'indicative.conditional_perfect', type: 'verb', mood: 'indicative',  tense: 'conditional_perfect', pronounCount: 6, label: 'Conditionnel passé',     group: 'Indicatif' },
    { key: 'subjunctive.present',            type: 'verb', mood: 'subjunctive', tense: 'present',             pronounCount: 6, label: 'Subjonctif présent',     group: 'Subjonctif' },
    { key: 'subjunctive.imperfect',          type: 'verb', mood: 'subjunctive', tense: 'imperfect',           pronounCount: 6, label: 'Subjonctif imparfait',   group: 'Subjonctif' },
    { key: 'subjunctive.present_perfect',    type: 'verb', mood: 'subjunctive', tense: 'present_perfect',     pronounCount: 6, label: 'Subjonctif passé',       group: 'Subjonctif' },
    { key: 'imperative.positive',            type: 'verb', mood: 'imperative',  tense: 'positive',            pronounCount: 3, label: 'Impératif affirmatif',   group: 'Impératif' },
    { key: 'imperative.negative',            type: 'verb', mood: 'imperative',  tense: 'negative',            pronounCount: 3, label: 'Impératif négatif',      group: 'Impératif' },
    { key: 'non_finite.infinitive',          type: 'verb', mood: 'non_finite',  tense: 'infinitive',          pronounCount: 1, label: 'Infinitif',              group: 'Formes non personnelles' },
    { key: 'non_finite.gerund',              type: 'verb', mood: 'non_finite',  tense: 'gerund',              pronounCount: 1, label: 'Participe présent',       group: 'Formes non personnelles' },
    { key: 'non_finite.past_participle',     type: 'verb', mood: 'non_finite',  tense: 'past_participle',     pronounCount: 1, label: 'Participe passé',        group: 'Formes non personnelles' },
    { key: 'grammar.possessive_unstressed',  type: 'grammar', subtype: 'possessive_unstressed', label: 'Adjectifs possessifs',    group: 'Grammaire' },
    { key: 'grammar.possessive_stressed',    type: 'grammar', subtype: 'possessive_stressed',   label: 'Pronoms possessifs',      group: 'Grammaire' },
    { key: 'grammar.demonstrative',          type: 'grammar', subtype: 'demonstrative',         label: 'Adjectifs démonstratifs', group: 'Grammaire' },
    { key: 'grammar.direct_object',          type: 'grammar', subtype: 'direct_object',         label: 'Pronoms COD',             group: 'Grammaire' },
    { key: 'grammar.indirect_object',        type: 'grammar', subtype: 'indirect_object',       label: 'Pronoms COI',             group: 'Grammaire' },
    { key: 'grammar.reflexive',              type: 'grammar', subtype: 'reflexive',             label: 'Pronoms réfléchis',       group: 'Grammaire' },
];

// Verbs with any stem change, spelling change, or highly irregular paradigm
const IRREGULAR_VERBS = new Set([
    'être', 'aller', 'faire', 'avoir', 'dire', 'pouvoir', 'vouloir', 'savoir',
    'voir', 'venir', 'prendre', 'devoir', 'écrire', 'lire', 'mettre', 'sortir',
    'croire', 'connaître', 'ouvrir', 'suivre', 'dormir', 'sentir', 'partir',
    'acheter', 'comprendre', 'manger', 'commencer',
]);

// --- Possessive Adjective Questions ---

const POSSESSIVE_ADJ_UNSTRESSED = [
    { owner: 'je',        ownerMeaning: 'my',       noun: 'livre',    nounTranslation: 'book (m)',      answer: 'mon' },
    { owner: 'je',        ownerMeaning: 'my',       noun: 'maison',   nounTranslation: 'house (f)',     answer: 'ma' },
    { owner: 'je',        ownerMeaning: 'my',       noun: 'amie',     nounTranslation: 'friend (f)',    answer: 'mon' },
    { owner: 'je',        ownerMeaning: 'my',       noun: 'livres',   nounTranslation: 'books (pl)',    answer: 'mes' },
    { owner: 'tu',        ownerMeaning: 'your',     noun: 'chien',    nounTranslation: 'dog (m)',       answer: 'ton' },
    { owner: 'tu',        ownerMeaning: 'your',     noun: 'sœur',     nounTranslation: 'sister (f)',    answer: 'ta' },
    { owner: 'tu',        ownerMeaning: 'your',     noun: 'école',    nounTranslation: 'school (f)',    answer: 'ton' },
    { owner: 'tu',        ownerMeaning: 'your',     noun: 'amis',     nounTranslation: 'friends (pl)', answer: 'tes' },
    { owner: 'il/elle',   ownerMeaning: 'his/her',  noun: 'père',     nounTranslation: 'father (m)',    answer: 'son' },
    { owner: 'il/elle',   ownerMeaning: 'his/her',  noun: 'mère',     nounTranslation: 'mother (f)',    answer: 'sa' },
    { owner: 'il/elle',   ownerMeaning: 'his/her',  noun: 'idée',     nounTranslation: 'idea (f)',      answer: 'son' },
    { owner: 'il/elle',   ownerMeaning: 'his/her',  noun: 'enfants',  nounTranslation: 'children (pl)',answer: 'ses' },
    { owner: 'nous',      ownerMeaning: 'our',      noun: 'jardin',   nounTranslation: 'garden (m)',    answer: 'notre' },
    { owner: 'nous',      ownerMeaning: 'our',      noun: 'voiture',  nounTranslation: 'car (f)',       answer: 'notre' },
    { owner: 'nous',      ownerMeaning: 'our',      noun: 'amis',     nounTranslation: 'friends (pl)', answer: 'nos' },
    { owner: 'vous',      ownerMeaning: 'your',     noun: 'bureau',   nounTranslation: 'office (m)',    answer: 'votre' },
    { owner: 'vous',      ownerMeaning: 'your',     noun: 'clé',      nounTranslation: 'key (f)',       answer: 'votre' },
    { owner: 'vous',      ownerMeaning: 'your',     noun: 'enfants',  nounTranslation: 'children (pl)',answer: 'vos' },
    { owner: 'ils/elles', ownerMeaning: 'their',    noun: 'maison',   nounTranslation: 'house',         answer: 'leur' },
    { owner: 'ils/elles', ownerMeaning: 'their',    noun: 'idées',    nounTranslation: 'ideas (pl)',    answer: 'leurs' },
];

// --- Possessive Pronoun Questions ---

const POSSESSIVE_ADJ_STRESSED = [
    { owner: 'je',        ownerMeaning: 'mine',      noun: 'le stylo',     nounTranslation: 'the pen (m)',        answer: 'le mien' },
    { owner: 'je',        ownerMeaning: 'mine',      noun: 'la clé',       nounTranslation: 'the key (f)',        answer: 'la mienne' },
    { owner: 'je',        ownerMeaning: 'mine',      noun: 'les livres',   nounTranslation: 'the books (m.pl)',  answer: 'les miens' },
    { owner: 'je',        ownerMeaning: 'mine',      noun: 'les idées',    nounTranslation: 'the ideas (f.pl)',  answer: 'les miennes' },
    { owner: 'tu',        ownerMeaning: 'yours',     noun: 'le chien',     nounTranslation: 'the dog (m)',        answer: 'le tien' },
    { owner: 'tu',        ownerMeaning: 'yours',     noun: 'la voiture',   nounTranslation: 'the car (f)',        answer: 'la tienne' },
    { owner: 'tu',        ownerMeaning: 'yours',     noun: 'les amis',     nounTranslation: 'the friends (m.pl)',answer: 'les tiens' },
    { owner: 'tu',        ownerMeaning: 'yours',     noun: 'les photos',   nounTranslation: 'the photos (f.pl)', answer: 'les tiennes' },
    { owner: 'il/elle',   ownerMeaning: 'his/hers',  noun: 'le sac',       nounTranslation: 'the bag (m)',        answer: 'le sien' },
    { owner: 'il/elle',   ownerMeaning: 'his/hers',  noun: 'la maison',    nounTranslation: 'the house (f)',      answer: 'la sienne' },
    { owner: 'il/elle',   ownerMeaning: 'his/hers',  noun: 'les enfants',  nounTranslation: 'the children (m.pl)',answer: 'les siens' },
    { owner: 'il/elle',   ownerMeaning: 'his/hers',  noun: 'les affaires', nounTranslation: 'the things (f.pl)', answer: 'les siennes' },
    { owner: 'nous',      ownerMeaning: 'ours',      noun: 'le projet',    nounTranslation: 'the project (m)',    answer: 'le nôtre' },
    { owner: 'nous',      ownerMeaning: 'ours',      noun: 'la décision',  nounTranslation: 'the decision (f)',   answer: 'la nôtre' },
    { owner: 'nous',      ownerMeaning: 'ours',      noun: 'les résultats',nounTranslation: 'the results (m.pl)',answer: 'les nôtres' },
    { owner: 'vous',      ownerMeaning: 'yours',     noun: 'le bureau',    nounTranslation: 'the office (m)',     answer: 'le vôtre' },
    { owner: 'vous',      ownerMeaning: 'yours',     noun: 'la place',     nounTranslation: 'the seat (f)',       answer: 'la vôtre' },
    { owner: 'vous',      ownerMeaning: 'yours',     noun: 'les bagages',  nounTranslation: 'the luggage (m.pl)',answer: 'les vôtres' },
    { owner: 'ils/elles', ownerMeaning: 'theirs',    noun: 'le travail',   nounTranslation: 'the job (m)',        answer: 'le leur' },
    { owner: 'ils/elles', ownerMeaning: 'theirs',    noun: 'la solution',  nounTranslation: 'the solution (f)',   answer: 'la leur' },
    { owner: 'ils/elles', ownerMeaning: 'theirs',    noun: 'les enfants',  nounTranslation: 'the children (pl)', answer: 'les leurs' },
];

// --- Demonstrative Adjective Questions ---

const DEMONSTRATIVE_ADJ = [
    { label: 'm. sg. (consonant)', prompt: '__ livre',   hint: '(this/that book)',      answer: 'ce',    rowIndex: 0 },
    { label: 'm. sg. (vowel)',     prompt: '__ homme',   hint: '(this/that man)',        answer: 'cet',   rowIndex: 1 },
    { label: 'm. sg. (vowel)',     prompt: '__ arbre',   hint: '(this/that tree)',       answer: 'cet',   rowIndex: 1 },
    { label: 'f. sg.',             prompt: '__ maison',  hint: '(this/that house)',      answer: 'cette', rowIndex: 2 },
    { label: 'f. sg.',             prompt: '__ école',   hint: '(this/that school)',     answer: 'cette', rowIndex: 2 },
    { label: 'm. pl.',             prompt: '__ livres',  hint: '(these/those books)',    answer: 'ces',   rowIndex: 3 },
    { label: 'f. pl.',             prompt: '__ maisons', hint: '(these/those houses)',   answer: 'ces',   rowIndex: 3 },
];

// --- Direct Object Pronoun Questions ---

const DIRECT_OBJ_PRONOUNS = [
    { label: 'je → C.O.D.',       prompt: 'Elle __ appelle.',     hint: '(She calls me.)',              answer: 'me',   rowIndex: 0 },
    { label: 'tu → C.O.D.',       prompt: 'Je __ vois.',          hint: '(I see you.)',                 answer: 'te',   rowIndex: 1 },
    { label: 'il → C.O.D.',       prompt: 'Nous __ invitons.',    hint: '(We invite him.)',             answer: 'le',   rowIndex: 2 },
    { label: 'elle → C.O.D.',     prompt: 'Tu __ cherches.',      hint: '(You look for her.)',          answer: 'la',   rowIndex: 3 },
    { label: 'nous → C.O.D.',     prompt: 'Ils __ cherchent.',    hint: '(They look for us.)',          answer: 'nous', rowIndex: 4 },
    { label: 'vous → C.O.D.',     prompt: 'Je __ comprends.',     hint: '(I understand you.)',          answer: 'vous', rowIndex: 5 },
    { label: 'ils → C.O.D.',      prompt: 'Elle __ voit.',        hint: '(She sees them [m.].)',        answer: 'les',  rowIndex: 6 },
    { label: 'elles → C.O.D.',    prompt: 'Tu __ écoutes.',       hint: '(You listen to them [f.].)',  answer: 'les',  rowIndex: 6 },
];

// --- Indirect Object Pronoun Questions ---

const INDIRECT_OBJ_PRONOUNS = [
    { label: 'je → C.O.I.',          prompt: 'Elle __ donne un cadeau.',     hint: '(She gives me a gift.)',           answer: 'me',   rowIndex: 0 },
    { label: 'tu → C.O.I.',          prompt: 'Je __ dis la vérité.',         hint: '(I tell you the truth.)',          answer: 'te',   rowIndex: 1 },
    { label: 'il → C.O.I.',          prompt: 'Nous __ envoyons une lettre.', hint: '(We send him a letter.)',          answer: 'lui',  rowIndex: 2 },
    { label: 'elle → C.O.I.',        prompt: 'Tu __ écris un message.',      hint: '(You write her a message.)',       answer: 'lui',  rowIndex: 2 },
    { label: 'nous → C.O.I.',        prompt: 'Ils __ expliquent tout.',      hint: '(They explain everything to us.)',answer: 'nous', rowIndex: 3 },
    { label: 'vous → C.O.I.',        prompt: 'Elle __ prépare le dîner.',    hint: '(She prepares dinner for you.)',   answer: 'vous', rowIndex: 4 },
    { label: 'ils/elles → C.O.I.',   prompt: 'Je __ parle clairement.',      hint: '(I speak to them clearly.)',       answer: 'leur', rowIndex: 5 },
];

// --- Reflexive Pronoun Questions ---

const REFLEXIVE_PRONOUNS = [
    { label: 'je (réfléchi)',         prompt: 'Je __ lave les mains.',   hint: '(I wash my hands.)',          answer: 'me',   rowIndex: 0 },
    { label: 'tu (réfléchi)',         prompt: 'Tu __ lèves tôt.',        hint: '(You get up early.)',         answer: 'te',   rowIndex: 1 },
    { label: 'il/elle (réfléchi)',    prompt: 'Elle __ habille vite.',   hint: '(She gets dressed quickly.)',answer: 'se',   rowIndex: 2 },
    { label: 'nous (réfléchi)',       prompt: 'Nous __ parlons.',        hint: '(We talk to each other.)',    answer: 'nous', rowIndex: 3 },
    { label: 'vous (réfléchi)',       prompt: 'Vous __ asseyez ici.',    hint: '(You sit down here.)',        answer: 'vous', rowIndex: 4 },
    { label: 'ils/elles (réfléchi)', prompt: 'Ils __ réveillent.',      hint: '(They wake up.)',             answer: 'se',   rowIndex: 5 },
];

const GRAMMAR_DATA = {
    possessive_unstressed: POSSESSIVE_ADJ_UNSTRESSED,
    possessive_stressed:   POSSESSIVE_ADJ_STRESSED,
    demonstrative:         DEMONSTRATIVE_ADJ,
    direct_object:         DIRECT_OBJ_PRONOUNS,
    indirect_object:       INDIRECT_OBJ_PRONOUNS,
    reflexive:             REFLEXIVE_PRONOUNS,
};

// --- Reference tables shown when "Show All Forms" is clicked ---

const GRAMMAR_TABLES = {
    possessive_unstressed: {
        title: 'Adjectifs possessifs (Possessive Adjectives)',
        note: 'Come BEFORE the noun. Use mon/ton/son before feminine nouns beginning with a vowel or mute h (e.g. mon amie, ton école).',
        headers: ['Propriétaire', 'Masc. sg.', 'Fém. sg.', 'Pluriel'],
        rows: [
            ['je',         'mon',   'ma (mon*)', 'mes'],
            ['tu',         'ton',   'ta (ton*)', 'tes'],
            ['il/elle',    'son',   'sa (son*)', 'ses'],
            ['nous',       'notre', 'notre',     'nos'],
            ['vous',       'votre', 'votre',     'vos'],
            ['ils/elles',  'leur',  'leur',      'leurs'],
        ],
    },
    possessive_stressed: {
        title: 'Pronoms possessifs (Possessive Pronouns)',
        note: 'Replace a noun + its possessive adjective. Agree in gender and number with the noun possessed.',
        headers: ['Propriétaire', 'Masc. sg.', 'Fém. sg.', 'Masc. pl.', 'Fém. pl.'],
        rows: [
            ['je',         'le mien',  'la mienne',  'les miens',  'les miennes'],
            ['tu',         'le tien',  'la tienne',  'les tiens',  'les tiennes'],
            ['il/elle',    'le sien',  'la sienne',  'les siens',  'les siennes'],
            ['nous',       'le nôtre', 'la nôtre',   'les nôtres', 'les nôtres'],
            ['vous',       'le vôtre', 'la vôtre',   'les vôtres', 'les vôtres'],
            ['ils/elles',  'le leur',  'la leur',    'les leurs',  'les leurs'],
        ],
    },
    demonstrative: {
        title: 'Adjectifs démonstratifs (Demonstrative Adjectives)',
        note: 'Use ce before m.sg consonants, cet before m.sg vowels/mute h, cette for f.sg, ces for all plurals.',
        headers: ['', 'Masc. sg.', 'Fém. sg.', 'Pluriel'],
        rows: [
            ['(before consonant)', 'ce',  'cette', 'ces'],
            ['(before vowel/h)',   'cet', 'cette', 'ces'],
        ],
    },
    direct_object: {
        title: "Pronoms COD (Compléments d'Objet Direct)",
        note: 'Replace the noun receiving the action directly. Go BEFORE conjugated verbs.',
        headers: ['Sujet', 'Pronom COD'],
        rows: [
            ['je',         'me'],
            ['tu',         'te'],
            ['il',         'le'],
            ['elle',       'la'],
            ['nous',       'nous'],
            ['vous',       'vous'],
            ['ils/elles',  'les'],
        ],
    },
    indirect_object: {
        title: "Pronoms COI (Compléments d'Objet Indirect)",
        note: 'Show to/for whom the action is done. Go BEFORE conjugated verbs.',
        headers: ['Sujet', 'Pronom COI'],
        rows: [
            ['je',         'me'],
            ['tu',         'te'],
            ['il/elle',    'lui'],
            ['nous',       'nous'],
            ['vous',       'vous'],
            ['ils/elles',  'leur'],
        ],
    },
    reflexive: {
        title: 'Pronoms réfléchis (Reflexive Pronouns)',
        note: 'Used when the subject performs the action on itself. Go BEFORE conjugated verbs.',
        headers: ['Sujet', 'Pronom réfléchi'],
        rows: [
            ['je',         'me'],
            ['tu',         'te'],
            ['il/elle',    'se'],
            ['nous',       'nous'],
            ['vous',       'vous'],
            ['ils/elles',  'se'],
        ],
    },
};

// --- Conjugation Rules (shown in the expandable help section) ---

const CONJUGATION_RULES = {
    'indicative.present': {
        rule: `<b>Terminaisons régulières :</b><br>
               <b>Verbes en -er</b> (parler) : -e, -es, -e, -ons, -ez, -ent<br>
               <b>Verbes en -ir</b> type finir : -is, -is, -it, -issons, -issez, -issent`,
        exceptions: `<b>Être :</b> suis, es, est, sommes, êtes, sont<br>
                     <b>Avoir :</b> ai, as, a, avons, avez, ont<br>
                     <b>Aller :</b> vais, vas, va, allons, allez, vont<br>
                     <b>Faire :</b> fais, fais, fait, faisons, faites, font<br>
                     <b>Pouvoir :</b> peux, peux, peut, pouvons, pouvez, peuvent<br>
                     <b>Vouloir :</b> veux, veux, veut, voulons, voulez, veulent<br>
                     <b>Venir :</b> viens, viens, vient, venons, venez, viennent<br>
                     <b>Prendre :</b> prends, prends, prend, prenons, prenez, prennent<br>
                     <b>Savoir :</b> sais, sais, sait, savons, savez, savent<br>
                     <b>Voir :</b> vois, vois, voit, voyons, voyez, voient`
    },
    'indicative.preterite': {
        rule: `<b>Passé composé = avoir/être (présent) + participe passé</b><br>
               La plupart des verbes utilisent <b>avoir</b> : j'ai parlé, tu as fini…<br>
               Les verbes de mouvement/état utilisent <b>être</b> : je suis allé(e)…<br>
               Verbes avec être : aller, venir, partir, arriver, sortir, rentrer…`,
        exceptions: `<b>Participes passés irréguliers :</b><br>
                     être → été, avoir → eu, faire → fait, dire → dit, prendre → pris<br>
                     voir → vu, savoir → su, pouvoir → pu, vouloir → voulu<br>
                     venir → venu, devoir → dû, écrire → écrit, lire → lu<br>
                     mettre → mis, ouvrir → ouvert, suivre → suivi, croire → cru<br>
                     connaître → connu, comprendre → compris`
    },
    'indicative.imperfect': {
        rule: `<b>Imparfait</b> — radical de nous au présent + terminaisons :<br>
               -ais, -ais, -ait, -ions, -iez, -aient<br>
               Ex : parlons → parl- → je parlais, tu parlais, il parlait…`,
        exceptions: `Seul <b>être</b> est irrégulier : j'étais, tu étais, il était, nous étions, vous étiez, ils étaient<br>
                     Attention : verbes en <b>-ger</b> gardent le -e- (nous mangions) ; en <b>-cer</b> → ç (nous commencions)`
    },
    'indicative.future': {
        rule: `<b>Futur simple</b> — infinitif + terminaisons :<br>
               -ai, -as, -a, -ons, -ez, -ont<br>
               (Identique pour tous les verbes ; les verbes en -re perdent le -e final : prendre → je prendrai)`,
        exceptions: `<b>Radicaux irréguliers :</b><br>
                     être → ser-, avoir → aur-, aller → ir-, faire → fer-<br>
                     pouvoir → pourr-, vouloir → voudr-, venir → viendr-<br>
                     savoir → saur-, voir → verr-, devoir → devr-`
    },
    'indicative.conditional': {
        rule: `<b>Conditionnel présent</b> — même radical que le futur + terminaisons de l'imparfait :<br>
               -ais, -ais, -ait, -ions, -iez, -aient<br>
               Ex : parler → je parlerais, tu parlerais, il parlerait…`,
        exceptions: `<b>Mêmes radicaux irréguliers que le futur :</b><br>
                     être → ser-, avoir → aur-, aller → ir-, faire → fer-<br>
                     pouvoir → pourr-, vouloir → voudr-, venir → viendr-<br>
                     savoir → saur-, voir → verr-, devoir → devr-`
    },
    'indicative.present_perfect': {
        rule: `<b>Passé récent = venir de + infinitif</b><br>
               Venir conjugué au présent + "de/d'" + infinitif :<br>
               je viens de, tu viens de, il vient de, nous venons de, vous venez de, ils viennent de`,
        exceptions: `<b>Élision</b> devant une voyelle : "je viens d'arriver" (pas "de arriver")<br>
                     Exprime une action qui vient juste de se terminer.<br>
                     Ce n'est pas un temps composé — venir est conjugué au présent.`
    },
    'indicative.past_perfect': {
        rule: `<b>Plus-que-parfait = avoir/être (imparfait) + participe passé</b><br>
               j'avais parlé, tu avais parlé…<br>
               j'étais allé, tu étais allé…`,
        exceptions: `<b>Mêmes participes passés irréguliers</b> qu'au passé composé : fait, été, eu, pris, vu…<br>
                     Accord du participe avec être : elle était arrivée, ils étaient partis`
    },
    'indicative.future_perfect': {
        rule: `<b>Futur antérieur = avoir/être (futur) + participe passé</b><br>
               j'aurai parlé, tu auras parlé…<br>
               je serai allé, tu seras allé…`,
        exceptions: `<b>Mêmes participes passés irréguliers</b> qu'au passé composé<br>
                     Exprime une action qui sera terminée avant un moment futur : "Quand tu arriveras, j'aurai fini."`
    },
    'indicative.conditional_perfect': {
        rule: `<b>Conditionnel passé = avoir/être (conditionnel) + participe passé</b><br>
               j'aurais parlé, tu aurais parlé…<br>
               je serais allé, tu serais allé…`,
        exceptions: `<b>Mêmes participes passés irréguliers</b> qu'au passé composé<br>
                     Exprime un regret ou une hypothèse irréelle : "J'aurais voulu te voir." / "Si j'avais su, je serais venu."`
    },
    'subjunctive.present': {
        rule: `<b>Subjonctif présent</b> — radical de ils/elles au présent + terminaisons :<br>
               -e, -es, -e, -ions, -iez, -ent<br>
               Ex : ils parlent → parl- → que je parle, que tu parles…<br>
               Nous/vous : identique à l'imparfait (parlions, parliez)`,
        exceptions: `<b>Irréguliers :</b><br>
                     être → sois, sois, soit, soyons, soyez, soient<br>
                     avoir → aie, aies, ait, ayons, ayez, aient<br>
                     aller → aille, ailles, aille, allions, alliez, aillent<br>
                     faire → fasse, pouvoir → puisse, savoir → sache<br>
                     vouloir → veuille, prendre → prenne, venir → vienne`
    },
    'subjunctive.imperfect': {
        rule: `<b>Subjonctif imparfait</b> — radical du passé simple 3sg + terminaisons :<br>
               -sse, -sses, -^t, -ssions, -ssiez, -ssent<br>
               Ex : parla → que je parlasse, que tu parlasses, qu'il parlât…`,
        exceptions: `<b>Radicaux irréguliers</b> (identiques au passé simple) :<br>
                     être → fusse, avoir → eusse, faire → fisse<br>
                     prendre → prisse, voir → visse, venir → vinsse<br>
                     Note : Le subjonctif imparfait est rare aujourd'hui — surtout à l'écrit littéraire`
    },
    'subjunctive.present_perfect': {
        rule: `<b>Subjonctif passé = avoir/être (subjonctif présent) + participe passé</b><br>
               que j'aie parlé, que tu aies parlé…<br>
               que je sois allé, que tu sois allé…`,
        exceptions: `<b>Mêmes participes passés irréguliers</b> qu'au passé composé<br>
                     Exprime une action passée dans un contexte subjonctif : "Je doute qu'il ait fini."`
    },
    'imperative.positive': {
        rule: `<b>Impératif affirmatif — 3 formes seulement :</b><br>
               <b>tu :</b> présent de l'indicatif sans sujet (verbes en -er : supprimer le -s final : parle !)<br>
               <b>nous :</b> présent de l'indicatif sans sujet (parlons !)<br>
               <b>vous :</b> présent de l'indicatif sans sujet (parlez !)`,
        exceptions: `<b>Irréguliers :</b><br>
                     être → sois / soyons / soyez<br>
                     avoir → aie / ayons / ayez<br>
                     savoir → sache / sachons / sachez<br>
                     vouloir → veuille / voulons / veuillez<br>
                     <b>Verbes pronominaux :</b> lève-toi, levons-nous, levez-vous`
    },
    'imperative.negative': {
        rule: `<b>Impératif négatif = ne + verbe + pas</b><br>
               ne parle pas ! / ne parlons pas ! / ne parlez pas !<br>
               Toutes les formes sont identiques au <b>subjonctif présent</b> (pour les verbes en -er, même résultat)`,
        exceptions: `<b>Irréguliers :</b><br>
                     être → ne sois pas / ne soyons pas / ne soyez pas<br>
                     avoir → n'aie pas / n'ayons pas / n'ayez pas<br>
                     <b>Pronoms réfléchis :</b> ne te lève pas, ne nous levons pas, ne vous levez pas`
    },
    'non_finite.infinitive': {
        rule: `La <b>forme de base</b> du verbe. Se termine en :<br>
               <b>-er</b> (parler) — groupe le plus nombreux<br>
               <b>-ir</b> (finir, sortir, partir…)<br>
               <b>-re</b> (prendre, écrire, lire…)<br>
               <b>-oir</b> (voir, savoir, pouvoir…)`,
        exceptions: `Utilisé après des verbes conjugués : "Je veux parler", "Elle peut venir"<br>
                     Après des prépositions : "avant de partir", "pour comprendre"<br>
                     Comme sujet : "Partir, c'est mourir un peu"`
    },
    'non_finite.gerund': {
        rule: `<b>Participe présent = radical de nous au présent + -ant</b><br>
               parlons → parlant, finissons → finissant, prenons → prenant<br>
               Utilisé avec "en" pour le gérondif : "en parlant" (while speaking / by speaking)`,
        exceptions: `<b>3 irréguliers :</b> être → étant, avoir → ayant, savoir → sachant<br>
                     Le gérondif (en + participe présent) exprime la simultanéité ou la manière.<br>
                     Le participe présent est invariable en tant qu'adjectif verbal.`
    },
    'non_finite.past_participle': {
        rule: `<b>Participe passé régulier :</b><br>
               <b>-er</b> verbs → -é (parlé, aimé, trouvé)<br>
               <b>-ir</b> type finir → -i (fini, choisi)<br>
               <b>-ir</b> type partir → -i (parti, sorti, dormi)<br>
               <b>-re</b> verbs → -u (vendu, attendu)`,
        exceptions: `<b>Participes passés irréguliers courants :</b><br>
                     être → été, avoir → eu, faire → fait, dire → dit<br>
                     prendre → pris, voir → vu, savoir → su, pouvoir → pu<br>
                     vouloir → voulu, venir → venu, devoir → dû<br>
                     écrire → écrit, lire → lu, mettre → mis<br>
                     ouvrir → ouvert, suivre → suivi, croire → cru<br>
                     connaître → connu, comprendre → compris`
    },
    'grammar.possessive_unstressed': {
        rule: `<b>Les adjectifs possessifs précèdent le nom.</b><br>
               mon/ma/mes, ton/ta/tes, son/sa/ses — s'accordent en genre et en nombre<br>
               notre/nos, votre/vos, leur/leurs — s'accordent en nombre seulement`,
        exceptions: `<b>Règle euphonique :</b> mon/ton/son devant un nom féminin commençant par une voyelle ou un h muet :<br>
                     mon amie (not ma amie), ton école (not ta école), son idée (not sa idée)<br>
                     <b>Son/sa/ses</b> peut signifier his, her, its — le contexte précise`
    },
    'grammar.possessive_stressed': {
        rule: `<b>Les pronoms possessifs remplacent le nom + son adjectif possessif.</b><br>
               Ils s'accordent en genre et en nombre avec le nom possédé :<br>
               le mien/la mienne/les miens/les miennes (mine)<br>
               le tien/la tienne… (yours), le sien/la sienne… (his/hers/its)`,
        exceptions: `<b>Nous/vous :</b> le nôtre/la nôtre/les nôtres — le vôtre/la vôtre/les vôtres (accent circonflexe !)<br>
                     <b>Ils/elles :</b> le leur/la leur/les leurs (invariable en genre)<br>
                     <b>Emploi :</b> "C'est le mien." (It's mine.) / "Les tiens sont là." (Yours are there.)`
    },
    'grammar.demonstrative': {
        rule: `<b>Les adjectifs démonstratifs s'accordent avec le nom.</b><br>
               <b>ce</b> (m. sg. devant consonne) : ce livre<br>
               <b>cet</b> (m. sg. devant voyelle/h muet) : cet homme, cet arbre<br>
               <b>cette</b> (f. sg.) : cette maison<br>
               <b>ces</b> (pl.) : ces livres, ces maisons`,
        exceptions: `<b>Ce/cet/cette/ces</b> signifient this AND that — ajouter -ci (proche) ou -là (loin) pour distinguer :<br>
                     ce livre-ci (this book) / ce livre-là (that book)<br>
                     <b>Pronom démonstratif :</b> celui / celle / ceux / celles (the one / those)`
    },
    'grammar.direct_object': {
        rule: `<b>Les pronoms COD remplacent le nom qui reçoit l'action directement :</b><br>
               me, te, le/la, nous, vous, les<br>
               Placés <b>avant le verbe conjugué</b> : "Je le vois." (I see him.)`,
        exceptions: `<b>Avec l'infinitif :</b> placé avant l'infinitif : "Je veux le voir"<br>
                     <b>Avec l'impératif affirmatif :</b> s'attache après : "Regarde-le !" (Look at him!)<br>
                     <b>Élision :</b> me/te/le/la → m'/t'/l'/l' devant voyelle : "Je l'aime"`
    },
    'grammar.indirect_object': {
        rule: `<b>Les pronoms COI indiquent à qui / pour qui l'action est faite :</b><br>
               me, te, lui, nous, vous, leur<br>
               Placés <b>avant le verbe conjugué</b> : "Je lui parle." (I speak to him/her.)`,
        exceptions: `<b>Ordre COD + COI ensemble :</b> me/te/nous/vous avant le/la/les ; lui/leur après<br>
                     "Je le lui donne." (I give it to him.)<br>
                     <b>Avec l'impératif affirmatif :</b> "Donne-lui le livre !" (Give him the book!)<br>
                     <b>lui/leur</b> — pas de distinction de genre (unlike English him/her/them)`
    },
    'grammar.reflexive': {
        rule: `<b>Les pronoms réfléchis indiquent que le sujet agit sur lui-même :</b><br>
               me, te, se, nous, vous, se<br>
               Placés <b>avant le verbe</b> : "Je me lève." (I get up.)`,
        exceptions: `<b>Emploi réciproque :</b> nous/vous/se = "each other" : "Nous nous aimons" (We love each other)<br>
                     <b>Avec l'impératif affirmatif :</b> "Lève-toi !" / "Levez-vous !" (moi/toi après le verbe)<br>
                     <b>Passé composé avec être :</b> "Elle s'est levée." — accord du participe passé`
    },
};
