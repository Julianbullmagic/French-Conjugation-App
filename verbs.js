const VERB_DATA = [
    {
        infinitive: "parler",
        translation: "to speak",
        gerund: "parlant",
        past_participle: "parlé",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["parle", "parles", "parle", "parlons", "parlez", "parlent"],
                preterite:            ["ai parlé", "as parlé", "a parlé", "avons parlé", "avez parlé", "ont parlé"],
                imperfect:            ["parlais", "parlais", "parlait", "parlions", "parliez", "parlaient"],
                future:               ["parlerai", "parleras", "parlera", "parlerons", "parlerez", "parleront"],
                conditional:          ["parlerais", "parlerais", "parlerait", "parlerions", "parleriez", "parleraient"],
                present_perfect:      ["viens de parler", "viens de parler", "vient de parler", "venons de parler", "venez de parler", "viennent de parler"],
                past_perfect:         ["avais parlé", "avais parlé", "avait parlé", "avions parlé", "aviez parlé", "avaient parlé"],
                future_perfect:       ["aurai parlé", "auras parlé", "aura parlé", "aurons parlé", "aurez parlé", "auront parlé"],
                conditional_perfect:  ["aurais parlé", "aurais parlé", "aurait parlé", "aurions parlé", "auriez parlé", "auraient parlé"]
            },
            subjunctive: {
                present:              ["parle", "parles", "parle", "parlions", "parliez", "parlent"],
                imperfect:            ["parlasse", "parlasses", "parlât", "parlassions", "parlassiez", "parlassent"],
                present_perfect:      ["aie parlé", "aies parlé", "ait parlé", "ayons parlé", "ayez parlé", "aient parlé"]
            },
            imperative: {
                positive:             ["parle", "parlons", "parlez"],
                negative:             ["ne parle pas", "ne parlons pas", "ne parlez pas"]
            }
        }
    },
    {
        infinitive: "manger",
        translation: "to eat",
        gerund: "mangeant",
        past_participle: "mangé",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["mange", "manges", "mange", "mangeons", "mangez", "mangent"],
                preterite:            ["ai mangé", "as mangé", "a mangé", "avons mangé", "avez mangé", "ont mangé"],
                imperfect:            ["mangeais", "mangeais", "mangeait", "mangions", "mangiez", "mangeaient"],
                future:               ["mangerai", "mangeras", "mangera", "mangerons", "mangerez", "mangeront"],
                conditional:          ["mangerais", "mangerais", "mangerait", "mangerions", "mangeriez", "mangeraient"],
                present_perfect:      ["viens de manger", "viens de manger", "vient de manger", "venons de manger", "venez de manger", "viennent de manger"],
                past_perfect:         ["avais mangé", "avais mangé", "avait mangé", "avions mangé", "aviez mangé", "avaient mangé"],
                future_perfect:       ["aurai mangé", "auras mangé", "aura mangé", "aurons mangé", "aurez mangé", "auront mangé"],
                conditional_perfect:  ["aurais mangé", "aurais mangé", "aurait mangé", "aurions mangé", "auriez mangé", "auraient mangé"]
            },
            subjunctive: {
                present:              ["mange", "manges", "mange", "mangions", "mangiez", "mangent"],
                imperfect:            ["mangeasse", "mangeasses", "mangeât", "mangeassions", "mangeassiez", "mangeassent"],
                present_perfect:      ["aie mangé", "aies mangé", "ait mangé", "ayons mangé", "ayez mangé", "aient mangé"]
            },
            imperative: {
                positive:             ["mange", "mangeons", "mangez"],
                negative:             ["ne mange pas", "ne mangeons pas", "ne mangez pas"]
            }
        }
    },
    {
        infinitive: "habiter",
        translation: "to live / reside",
        gerund: "habitant",
        past_participle: "habité",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["habite", "habites", "habite", "habitons", "habitez", "habitent"],
                preterite:            ["ai habité", "as habité", "a habité", "avons habité", "avez habité", "ont habité"],
                imperfect:            ["habitais", "habitais", "habitait", "habitions", "habitiez", "habitaient"],
                future:               ["habiterai", "habiteras", "habitera", "habiterons", "habiterez", "habiteront"],
                conditional:          ["habiterais", "habiterais", "habiterait", "habiterions", "habiteriez", "habiteraient"],
                present_perfect:      ["viens d'habiter", "viens d'habiter", "vient d'habiter", "venons d'habiter", "venez d'habiter", "viennent d'habiter"],
                past_perfect:         ["avais habité", "avais habité", "avait habité", "avions habité", "aviez habité", "avaient habité"],
                future_perfect:       ["aurai habité", "auras habité", "aura habité", "aurons habité", "aurez habité", "auront habité"],
                conditional_perfect:  ["aurais habité", "aurais habité", "aurait habité", "aurions habité", "auriez habité", "auraient habité"]
            },
            subjunctive: {
                present:              ["habite", "habites", "habite", "habitions", "habitiez", "habitent"],
                imperfect:            ["habitasse", "habitasses", "habitât", "habitassions", "habitassiez", "habitassent"],
                present_perfect:      ["aie habité", "aies habité", "ait habité", "ayons habité", "ayez habité", "aient habité"]
            },
            imperative: {
                positive:             ["habite", "habitons", "habitez"],
                negative:             ["n'habite pas", "n'habitons pas", "n'habitez pas"]
            }
        }
    },
    {
        infinitive: "être",
        translation: "to be",
        gerund: "étant",
        past_participle: "été",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["suis", "es", "est", "sommes", "êtes", "sont"],
                preterite:            ["ai été", "as été", "a été", "avons été", "avez été", "ont été"],
                imperfect:            ["étais", "étais", "était", "étions", "étiez", "étaient"],
                future:               ["serai", "seras", "sera", "serons", "serez", "seront"],
                conditional:          ["serais", "serais", "serait", "serions", "seriez", "seraient"],
                present_perfect:      ["viens d'être", "viens d'être", "vient d'être", "venons d'être", "venez d'être", "viennent d'être"],
                past_perfect:         ["avais été", "avais été", "avait été", "avions été", "aviez été", "avaient été"],
                future_perfect:       ["aurai été", "auras été", "aura été", "aurons été", "aurez été", "auront été"],
                conditional_perfect:  ["aurais été", "aurais été", "aurait été", "aurions été", "auriez été", "auraient été"]
            },
            subjunctive: {
                present:              ["sois", "sois", "soit", "soyons", "soyez", "soient"],
                imperfect:            ["fusse", "fusses", "fût", "fussions", "fussiez", "fussent"],
                present_perfect:      ["aie été", "aies été", "ait été", "ayons été", "ayez été", "aient été"]
            },
            imperative: {
                positive:             ["sois", "soyons", "soyez"],
                negative:             ["ne sois pas", "ne soyons pas", "ne soyez pas"]
            }
        }
    },
    {
        infinitive: "aller",
        translation: "to go",
        gerund: "allant",
        past_participle: "allé",
        auxiliaire: "être",
        conjugations: {
            indicative: {
                present:              ["vais", "vas", "va", "allons", "allez", "vont"],
                preterite:            ["suis allé", "es allé", "est allé", "sommes allés", "êtes allés", "sont allés"],
                imperfect:            ["allais", "allais", "allait", "allions", "alliez", "allaient"],
                future:               ["irai", "iras", "ira", "irons", "irez", "iront"],
                conditional:          ["irais", "irais", "irait", "irions", "iriez", "iraient"],
                present_perfect:      ["viens d'aller", "viens d'aller", "vient d'aller", "venons d'aller", "venez d'aller", "viennent d'aller"],
                past_perfect:         ["étais allé", "étais allé", "était allé", "étions allés", "étiez allés", "étaient allés"],
                future_perfect:       ["serai allé", "seras allé", "sera allé", "serons allés", "serez allés", "seront allés"],
                conditional_perfect:  ["serais allé", "serais allé", "serait allé", "serions allés", "seriez allés", "seraient allés"]
            },
            subjunctive: {
                present:              ["aille", "ailles", "aille", "allions", "alliez", "aillent"],
                imperfect:            ["allasse", "allasses", "allât", "allassions", "allassiez", "allassent"],
                present_perfect:      ["sois allé", "sois allé", "soit allé", "soyons allés", "soyez allés", "soient allés"]
            },
            imperative: {
                positive:             ["va", "allons", "allez"],
                negative:             ["ne va pas", "n'allons pas", "n'allez pas"]
            }
        }
    },
    {
        infinitive: "faire",
        translation: "to do / make",
        gerund: "faisant",
        past_participle: "fait",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["fais", "fais", "fait", "faisons", "faites", "font"],
                preterite:            ["ai fait", "as fait", "a fait", "avons fait", "avez fait", "ont fait"],
                imperfect:            ["faisais", "faisais", "faisait", "faisions", "faisiez", "faisaient"],
                future:               ["ferai", "feras", "fera", "ferons", "ferez", "feront"],
                conditional:          ["ferais", "ferais", "ferait", "ferions", "feriez", "feraient"],
                present_perfect:      ["viens de faire", "viens de faire", "vient de faire", "venons de faire", "venez de faire", "viennent de faire"],
                past_perfect:         ["avais fait", "avais fait", "avait fait", "avions fait", "aviez fait", "avaient fait"],
                future_perfect:       ["aurai fait", "auras fait", "aura fait", "aurons fait", "aurez fait", "auront fait"],
                conditional_perfect:  ["aurais fait", "aurais fait", "aurait fait", "aurions fait", "auriez fait", "auraient fait"]
            },
            subjunctive: {
                present:              ["fasse", "fasses", "fasse", "fassions", "fassiez", "fassent"],
                imperfect:            ["fisse", "fisses", "fît", "fissions", "fissiez", "fissent"],
                present_perfect:      ["aie fait", "aies fait", "ait fait", "ayons fait", "ayez fait", "aient fait"]
            },
            imperative: {
                positive:             ["fais", "faisons", "faites"],
                negative:             ["ne fais pas", "ne faisons pas", "ne faites pas"]
            }
        }
    },
    {
        infinitive: "avoir",
        translation: "to have",
        gerund: "ayant",
        past_participle: "eu",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["ai", "as", "a", "avons", "avez", "ont"],
                preterite:            ["ai eu", "as eu", "a eu", "avons eu", "avez eu", "ont eu"],
                imperfect:            ["avais", "avais", "avait", "avions", "aviez", "avaient"],
                future:               ["aurai", "auras", "aura", "aurons", "aurez", "auront"],
                conditional:          ["aurais", "aurais", "aurait", "aurions", "auriez", "auraient"],
                present_perfect:      ["viens d'avoir", "viens d'avoir", "vient d'avoir", "venons d'avoir", "venez d'avoir", "viennent d'avoir"],
                past_perfect:         ["avais eu", "avais eu", "avait eu", "avions eu", "aviez eu", "avaient eu"],
                future_perfect:       ["aurai eu", "auras eu", "aura eu", "aurons eu", "aurez eu", "auront eu"],
                conditional_perfect:  ["aurais eu", "aurais eu", "aurait eu", "aurions eu", "auriez eu", "auraient eu"]
            },
            subjunctive: {
                present:              ["aie", "aies", "ait", "ayons", "ayez", "aient"],
                imperfect:            ["eusse", "eusses", "eût", "eussions", "eussiez", "eussent"],
                present_perfect:      ["aie eu", "aies eu", "ait eu", "ayons eu", "ayez eu", "aient eu"]
            },
            imperative: {
                positive:             ["aie", "ayons", "ayez"],
                negative:             ["n'aie pas", "n'ayons pas", "n'ayez pas"]
            }
        }
    },
    {
        infinitive: "dire",
        translation: "to say / tell",
        gerund: "disant",
        past_participle: "dit",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["dis", "dis", "dit", "disons", "dites", "disent"],
                preterite:            ["ai dit", "as dit", "a dit", "avons dit", "avez dit", "ont dit"],
                imperfect:            ["disais", "disais", "disait", "disions", "disiez", "disaient"],
                future:               ["dirai", "diras", "dira", "dirons", "direz", "diront"],
                conditional:          ["dirais", "dirais", "dirait", "dirions", "diriez", "diraient"],
                present_perfect:      ["viens de dire", "viens de dire", "vient de dire", "venons de dire", "venez de dire", "viennent de dire"],
                past_perfect:         ["avais dit", "avais dit", "avait dit", "avions dit", "aviez dit", "avaient dit"],
                future_perfect:       ["aurai dit", "auras dit", "aura dit", "aurons dit", "aurez dit", "auront dit"],
                conditional_perfect:  ["aurais dit", "aurais dit", "aurait dit", "aurions dit", "auriez dit", "auraient dit"]
            },
            subjunctive: {
                present:              ["dise", "dises", "dise", "disions", "disiez", "disent"],
                imperfect:            ["disse", "disses", "dît", "dissions", "dissiez", "dissent"],
                present_perfect:      ["aie dit", "aies dit", "ait dit", "ayons dit", "ayez dit", "aient dit"]
            },
            imperative: {
                positive:             ["dis", "disons", "dites"],
                negative:             ["ne dis pas", "ne disons pas", "ne dites pas"]
            }
        }
    },
    {
        infinitive: "pouvoir",
        translation: "to be able to / can",
        gerund: "pouvant",
        past_participle: "pu",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["peux", "peux", "peut", "pouvons", "pouvez", "peuvent"],
                preterite:            ["ai pu", "as pu", "a pu", "avons pu", "avez pu", "ont pu"],
                imperfect:            ["pouvais", "pouvais", "pouvait", "pouvions", "pouviez", "pouvaient"],
                future:               ["pourrai", "pourras", "pourra", "pourrons", "pourrez", "pourront"],
                conditional:          ["pourrais", "pourrais", "pourrait", "pourrions", "pourriez", "pourraient"],
                present_perfect:      ["viens de pouvoir", "viens de pouvoir", "vient de pouvoir", "venons de pouvoir", "venez de pouvoir", "viennent de pouvoir"],
                past_perfect:         ["avais pu", "avais pu", "avait pu", "avions pu", "aviez pu", "avaient pu"],
                future_perfect:       ["aurai pu", "auras pu", "aura pu", "aurons pu", "aurez pu", "auront pu"],
                conditional_perfect:  ["aurais pu", "aurais pu", "aurait pu", "aurions pu", "auriez pu", "auraient pu"]
            },
            subjunctive: {
                present:              ["puisse", "puisses", "puisse", "puissions", "puissiez", "puissent"],
                imperfect:            ["pusse", "pusses", "pût", "pussions", "pussiez", "pussent"],
                present_perfect:      ["aie pu", "aies pu", "ait pu", "ayons pu", "ayez pu", "aient pu"]
            },
            imperative: {
                positive:             ["peux", "pouvons", "pouvez"],
                negative:             ["ne peux pas", "ne pouvons pas", "ne pouvez pas"]
            }
        }
    },
    {
        infinitive: "vouloir",
        translation: "to want",
        gerund: "voulant",
        past_participle: "voulu",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["veux", "veux", "veut", "voulons", "voulez", "veulent"],
                preterite:            ["ai voulu", "as voulu", "a voulu", "avons voulu", "avez voulu", "ont voulu"],
                imperfect:            ["voulais", "voulais", "voulait", "voulions", "vouliez", "voulaient"],
                future:               ["voudrai", "voudras", "voudra", "voudrons", "voudrez", "voudront"],
                conditional:          ["voudrais", "voudrais", "voudrait", "voudrions", "voudriez", "voudraient"],
                present_perfect:      ["viens de vouloir", "viens de vouloir", "vient de vouloir", "venons de vouloir", "venez de vouloir", "viennent de vouloir"],
                past_perfect:         ["avais voulu", "avais voulu", "avait voulu", "avions voulu", "aviez voulu", "avaient voulu"],
                future_perfect:       ["aurai voulu", "auras voulu", "aura voulu", "aurons voulu", "aurez voulu", "auront voulu"],
                conditional_perfect:  ["aurais voulu", "aurais voulu", "aurait voulu", "aurions voulu", "auriez voulu", "auraient voulu"]
            },
            subjunctive: {
                present:              ["veuille", "veuilles", "veuille", "voulions", "vouliez", "veuillent"],
                imperfect:            ["voulusse", "voulusses", "voulût", "voulussions", "voulussiez", "voulussent"],
                present_perfect:      ["aie voulu", "aies voulu", "ait voulu", "ayons voulu", "ayez voulu", "aient voulu"]
            },
            imperative: {
                positive:             ["veuille", "veuillons", "veuillez"],
                negative:             ["ne veuille pas", "ne veuillons pas", "ne veuillez pas"]
            }
        }
    },
    {
        infinitive: "savoir",
        translation: "to know (a fact)",
        gerund: "sachant",
        past_participle: "su",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["sais", "sais", "sait", "savons", "savez", "savent"],
                preterite:            ["ai su", "as su", "a su", "avons su", "avez su", "ont su"],
                imperfect:            ["savais", "savais", "savait", "savions", "saviez", "savaient"],
                future:               ["saurai", "sauras", "saura", "saurons", "saurez", "sauront"],
                conditional:          ["saurais", "saurais", "saurait", "saurions", "sauriez", "sauraient"],
                present_perfect:      ["viens de savoir", "viens de savoir", "vient de savoir", "venons de savoir", "venez de savoir", "viennent de savoir"],
                past_perfect:         ["avais su", "avais su", "avait su", "avions su", "aviez su", "avaient su"],
                future_perfect:       ["aurai su", "auras su", "aura su", "aurons su", "aurez su", "auront su"],
                conditional_perfect:  ["aurais su", "aurais su", "aurait su", "aurions su", "auriez su", "auraient su"]
            },
            subjunctive: {
                present:              ["sache", "saches", "sache", "sachions", "sachiez", "sachent"],
                imperfect:            ["susse", "susses", "sût", "sussions", "sussiez", "sussent"],
                present_perfect:      ["aie su", "aies su", "ait su", "ayons su", "ayez su", "aient su"]
            },
            imperative: {
                positive:             ["sache", "sachons", "sachez"],
                negative:             ["ne sache pas", "ne sachons pas", "ne sachez pas"]
            }
        }
    },
    {
        infinitive: "voir",
        translation: "to see",
        gerund: "voyant",
        past_participle: "vu",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["vois", "vois", "voit", "voyons", "voyez", "voient"],
                preterite:            ["ai vu", "as vu", "a vu", "avons vu", "avez vu", "ont vu"],
                imperfect:            ["voyais", "voyais", "voyait", "voyions", "voyiez", "voyaient"],
                future:               ["verrai", "verras", "verra", "verrons", "verrez", "verront"],
                conditional:          ["verrais", "verrais", "verrait", "verrions", "verriez", "verraient"],
                present_perfect:      ["viens de voir", "viens de voir", "vient de voir", "venons de voir", "venez de voir", "viennent de voir"],
                past_perfect:         ["avais vu", "avais vu", "avait vu", "avions vu", "aviez vu", "avaient vu"],
                future_perfect:       ["aurai vu", "auras vu", "aura vu", "aurons vu", "aurez vu", "auront vu"],
                conditional_perfect:  ["aurais vu", "aurais vu", "aurait vu", "aurions vu", "auriez vu", "auraient vu"]
            },
            subjunctive: {
                present:              ["voie", "voies", "voie", "voyions", "voyiez", "voient"],
                imperfect:            ["visse", "visses", "vît", "vissions", "vissiez", "vissent"],
                present_perfect:      ["aie vu", "aies vu", "ait vu", "ayons vu", "ayez vu", "aient vu"]
            },
            imperative: {
                positive:             ["vois", "voyons", "voyez"],
                negative:             ["ne vois pas", "ne voyons pas", "ne voyez pas"]
            }
        }
    },
    {
        infinitive: "venir",
        translation: "to come",
        gerund: "venant",
        past_participle: "venu",
        auxiliaire: "être",
        conjugations: {
            indicative: {
                present:              ["viens", "viens", "vient", "venons", "venez", "viennent"],
                preterite:            ["suis venu", "es venu", "est venu", "sommes venus", "êtes venus", "sont venus"],
                imperfect:            ["venais", "venais", "venait", "venions", "veniez", "venaient"],
                future:               ["viendrai", "viendras", "viendra", "viendrons", "viendrez", "viendront"],
                conditional:          ["viendrais", "viendrais", "viendrait", "viendrions", "viendriez", "viendraient"],
                present_perfect:      ["viens de venir", "viens de venir", "vient de venir", "venons de venir", "venez de venir", "viennent de venir"],
                past_perfect:         ["étais venu", "étais venu", "était venu", "étions venus", "étiez venus", "étaient venus"],
                future_perfect:       ["serai venu", "seras venu", "sera venu", "serons venus", "serez venus", "seront venus"],
                conditional_perfect:  ["serais venu", "serais venu", "serait venu", "serions venus", "seriez venus", "seraient venus"]
            },
            subjunctive: {
                present:              ["vienne", "viennes", "vienne", "venions", "veniez", "viennent"],
                imperfect:            ["vinsse", "vinsses", "vînt", "vinssions", "vinssiez", "vinssent"],
                present_perfect:      ["sois venu", "sois venu", "soit venu", "soyons venus", "soyez venus", "soient venus"]
            },
            imperative: {
                positive:             ["viens", "venons", "venez"],
                negative:             ["ne viens pas", "ne venons pas", "ne venez pas"]
            }
        }
    },
    {
        infinitive: "prendre",
        translation: "to take",
        gerund: "prenant",
        past_participle: "pris",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["prends", "prends", "prend", "prenons", "prenez", "prennent"],
                preterite:            ["ai pris", "as pris", "a pris", "avons pris", "avez pris", "ont pris"],
                imperfect:            ["prenais", "prenais", "prenait", "prenions", "preniez", "prenaient"],
                future:               ["prendrai", "prendras", "prendra", "prendrons", "prendrez", "prendront"],
                conditional:          ["prendrais", "prendrais", "prendrait", "prendrions", "prendriez", "prendraient"],
                present_perfect:      ["viens de prendre", "viens de prendre", "vient de prendre", "venons de prendre", "venez de prendre", "viennent de prendre"],
                past_perfect:         ["avais pris", "avais pris", "avait pris", "avions pris", "aviez pris", "avaient pris"],
                future_perfect:       ["aurai pris", "auras pris", "aura pris", "aurons pris", "aurez pris", "auront pris"],
                conditional_perfect:  ["aurais pris", "aurais pris", "aurait pris", "aurions pris", "auriez pris", "auraient pris"]
            },
            subjunctive: {
                present:              ["prenne", "prennes", "prenne", "prenions", "preniez", "prennent"],
                imperfect:            ["prisse", "prisses", "prît", "prissions", "prissiez", "prissent"],
                present_perfect:      ["aie pris", "aies pris", "ait pris", "ayons pris", "ayez pris", "aient pris"]
            },
            imperative: {
                positive:             ["prends", "prenons", "prenez"],
                negative:             ["ne prends pas", "ne prenons pas", "ne prenez pas"]
            }
        }
    },
    {
        infinitive: "devoir",
        translation: "to have to / must",
        gerund: "devant",
        past_participle: "dû",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["dois", "dois", "doit", "devons", "devez", "doivent"],
                preterite:            ["ai dû", "as dû", "a dû", "avons dû", "avez dû", "ont dû"],
                imperfect:            ["devais", "devais", "devait", "devions", "deviez", "devaient"],
                future:               ["devrai", "devras", "devra", "devrons", "devrez", "devront"],
                conditional:          ["devrais", "devrais", "devrait", "devrions", "devriez", "devraient"],
                present_perfect:      ["viens de devoir", "viens de devoir", "vient de devoir", "venons de devoir", "venez de devoir", "viennent de devoir"],
                past_perfect:         ["avais dû", "avais dû", "avait dû", "avions dû", "aviez dû", "avaient dû"],
                future_perfect:       ["aurai dû", "auras dû", "aura dû", "aurons dû", "aurez dû", "auront dû"],
                conditional_perfect:  ["aurais dû", "aurais dû", "aurait dû", "aurions dû", "auriez dû", "auraient dû"]
            },
            subjunctive: {
                present:              ["doive", "doives", "doive", "devions", "deviez", "doivent"],
                imperfect:            ["dusse", "dusses", "dût", "dussions", "dussiez", "dussent"],
                present_perfect:      ["aie dû", "aies dû", "ait dû", "ayons dû", "ayez dû", "aient dû"]
            },
            imperative: {
                positive:             ["dois", "devons", "devez"],
                negative:             ["ne dois pas", "ne devons pas", "ne devez pas"]
            }
        }
    },
    {
        infinitive: "écrire",
        translation: "to write",
        gerund: "écrivant",
        past_participle: "écrit",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["écris", "écris", "écrit", "écrivons", "écrivez", "écrivent"],
                preterite:            ["ai écrit", "as écrit", "a écrit", "avons écrit", "avez écrit", "ont écrit"],
                imperfect:            ["écrivais", "écrivais", "écrivait", "écrivions", "écriviez", "écrivaient"],
                future:               ["écrirai", "écriras", "écrira", "écrirons", "écrirez", "écriront"],
                conditional:          ["écrirais", "écrirais", "écrirait", "écririons", "écririez", "écriraient"],
                present_perfect:      ["viens d'écrire", "viens d'écrire", "vient d'écrire", "venons d'écrire", "venez d'écrire", "viennent d'écrire"],
                past_perfect:         ["avais écrit", "avais écrit", "avait écrit", "avions écrit", "aviez écrit", "avaient écrit"],
                future_perfect:       ["aurai écrit", "auras écrit", "aura écrit", "aurons écrit", "aurez écrit", "auront écrit"],
                conditional_perfect:  ["aurais écrit", "aurais écrit", "aurait écrit", "aurions écrit", "auriez écrit", "auraient écrit"]
            },
            subjunctive: {
                present:              ["écrive", "écrives", "écrive", "écrivions", "écriviez", "écrivent"],
                imperfect:            ["écrivisse", "écrivisses", "écrivît", "écrivissions", "écrivissiez", "écrivissent"],
                present_perfect:      ["aie écrit", "aies écrit", "ait écrit", "ayons écrit", "ayez écrit", "aient écrit"]
            },
            imperative: {
                positive:             ["écris", "écrivons", "écrivez"],
                negative:             ["n'écris pas", "n'écrivons pas", "n'écrivez pas"]
            }
        }
    },
    {
        infinitive: "lire",
        translation: "to read",
        gerund: "lisant",
        past_participle: "lu",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["lis", "lis", "lit", "lisons", "lisez", "lisent"],
                preterite:            ["ai lu", "as lu", "a lu", "avons lu", "avez lu", "ont lu"],
                imperfect:            ["lisais", "lisais", "lisait", "lisions", "lisiez", "lisaient"],
                future:               ["lirai", "liras", "lira", "lirons", "lirez", "liront"],
                conditional:          ["lirais", "lirais", "lirait", "lirions", "liriez", "liraient"],
                present_perfect:      ["viens de lire", "viens de lire", "vient de lire", "venons de lire", "venez de lire", "viennent de lire"],
                past_perfect:         ["avais lu", "avais lu", "avait lu", "avions lu", "aviez lu", "avaient lu"],
                future_perfect:       ["aurai lu", "auras lu", "aura lu", "aurons lu", "aurez lu", "auront lu"],
                conditional_perfect:  ["aurais lu", "aurais lu", "aurait lu", "aurions lu", "auriez lu", "auraient lu"]
            },
            subjunctive: {
                present:              ["lise", "lises", "lise", "lisions", "lisiez", "lisent"],
                imperfect:            ["lusse", "lusses", "lût", "lussions", "lussiez", "lussent"],
                present_perfect:      ["aie lu", "aies lu", "ait lu", "ayons lu", "ayez lu", "aient lu"]
            },
            imperative: {
                positive:             ["lis", "lisons", "lisez"],
                negative:             ["ne lis pas", "ne lisons pas", "ne lisez pas"]
            }
        }
    },
    {
        infinitive: "mettre",
        translation: "to put / place",
        gerund: "mettant",
        past_participle: "mis",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["mets", "mets", "met", "mettons", "mettez", "mettent"],
                preterite:            ["ai mis", "as mis", "a mis", "avons mis", "avez mis", "ont mis"],
                imperfect:            ["mettais", "mettais", "mettait", "mettions", "mettiez", "mettaient"],
                future:               ["mettrai", "mettras", "mettra", "mettrons", "mettrez", "mettront"],
                conditional:          ["mettrais", "mettrais", "mettrait", "mettrions", "mettriez", "mettraient"],
                present_perfect:      ["viens de mettre", "viens de mettre", "vient de mettre", "venons de mettre", "venez de mettre", "viennent de mettre"],
                past_perfect:         ["avais mis", "avais mis", "avait mis", "avions mis", "aviez mis", "avaient mis"],
                future_perfect:       ["aurai mis", "auras mis", "aura mis", "aurons mis", "aurez mis", "auront mis"],
                conditional_perfect:  ["aurais mis", "aurais mis", "aurait mis", "aurions mis", "auriez mis", "auraient mis"]
            },
            subjunctive: {
                present:              ["mette", "mettes", "mette", "mettions", "mettiez", "mettent"],
                imperfect:            ["misse", "misses", "mît", "missions", "missiez", "missent"],
                present_perfect:      ["aie mis", "aies mis", "ait mis", "ayons mis", "ayez mis", "aient mis"]
            },
            imperative: {
                positive:             ["mets", "mettons", "mettez"],
                negative:             ["ne mets pas", "ne mettons pas", "ne mettez pas"]
            }
        }
    },
    {
        infinitive: "sortir",
        translation: "to go out / leave",
        gerund: "sortant",
        past_participle: "sorti",
        auxiliaire: "être",
        conjugations: {
            indicative: {
                present:              ["sors", "sors", "sort", "sortons", "sortez", "sortent"],
                preterite:            ["suis sorti", "es sorti", "est sorti", "sommes sortis", "êtes sortis", "sont sortis"],
                imperfect:            ["sortais", "sortais", "sortait", "sortions", "sortiez", "sortaient"],
                future:               ["sortirai", "sortiras", "sortira", "sortirons", "sortirez", "sortiront"],
                conditional:          ["sortirais", "sortirais", "sortirait", "sortirions", "sortiriez", "sortiraient"],
                present_perfect:      ["viens de sortir", "viens de sortir", "vient de sortir", "venons de sortir", "venez de sortir", "viennent de sortir"],
                past_perfect:         ["étais sorti", "étais sorti", "était sorti", "étions sortis", "étiez sortis", "étaient sortis"],
                future_perfect:       ["serai sorti", "seras sorti", "sera sorti", "serons sortis", "serez sortis", "seront sortis"],
                conditional_perfect:  ["serais sorti", "serais sorti", "serait sorti", "serions sortis", "seriez sortis", "seraient sortis"]
            },
            subjunctive: {
                present:              ["sorte", "sortes", "sorte", "sortions", "sortiez", "sortent"],
                imperfect:            ["sortisse", "sortisses", "sortît", "sortissions", "sortissiez", "sortissent"],
                present_perfect:      ["sois sorti", "sois sorti", "soit sorti", "soyons sortis", "soyez sortis", "soient sortis"]
            },
            imperative: {
                positive:             ["sors", "sortons", "sortez"],
                negative:             ["ne sors pas", "ne sortons pas", "ne sortez pas"]
            }
        }
    },
    {
        infinitive: "finir",
        translation: "to finish",
        gerund: "finissant",
        past_participle: "fini",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["finis", "finis", "finit", "finissons", "finissez", "finissent"],
                preterite:            ["ai fini", "as fini", "a fini", "avons fini", "avez fini", "ont fini"],
                imperfect:            ["finissais", "finissais", "finissait", "finissions", "finissiez", "finissaient"],
                future:               ["finirai", "finiras", "finira", "finirons", "finirez", "finiront"],
                conditional:          ["finirais", "finirais", "finirait", "finirions", "finiriez", "finiraient"],
                present_perfect:      ["viens de finir", "viens de finir", "vient de finir", "venons de finir", "venez de finir", "viennent de finir"],
                past_perfect:         ["avais fini", "avais fini", "avait fini", "avions fini", "aviez fini", "avaient fini"],
                future_perfect:       ["aurai fini", "auras fini", "aura fini", "aurons fini", "aurez fini", "auront fini"],
                conditional_perfect:  ["aurais fini", "aurais fini", "aurait fini", "aurions fini", "auriez fini", "auraient fini"]
            },
            subjunctive: {
                present:              ["finisse", "finisses", "finisse", "finissions", "finissiez", "finissent"],
                imperfect:            ["finisse", "finisses", "finît", "finissions", "finissiez", "finissent"],
                present_perfect:      ["aie fini", "aies fini", "ait fini", "ayons fini", "ayez fini", "aient fini"]
            },
            imperative: {
                positive:             ["finis", "finissons", "finissez"],
                negative:             ["ne finis pas", "ne finissons pas", "ne finissez pas"]
            }
        }
    },
    {
        infinitive: "travailler",
        translation: "to work",
        gerund: "travaillant",
        past_participle: "travaillé",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["travaille", "travailles", "travaille", "travaillons", "travaillez", "travaillent"],
                preterite:            ["ai travaillé", "as travaillé", "a travaillé", "avons travaillé", "avez travaillé", "ont travaillé"],
                imperfect:            ["travaillais", "travaillais", "travaillait", "travaillions", "travailliez", "travaillaient"],
                future:               ["travaillerai", "travailleras", "travaillera", "travaillerons", "travaillerez", "travailleront"],
                conditional:          ["travaillerais", "travaillerais", "travaillerait", "travaillerions", "travailleriez", "travailleraient"],
                present_perfect:      ["viens de travailler", "viens de travailler", "vient de travailler", "venons de travailler", "venez de travailler", "viennent de travailler"],
                past_perfect:         ["avais travaillé", "avais travaillé", "avait travaillé", "avions travaillé", "aviez travaillé", "avaient travaillé"],
                future_perfect:       ["aurai travaillé", "auras travaillé", "aura travaillé", "aurons travaillé", "aurez travaillé", "auront travaillé"],
                conditional_perfect:  ["aurais travaillé", "aurais travaillé", "aurait travaillé", "aurions travaillé", "auriez travaillé", "auraient travaillé"]
            },
            subjunctive: {
                present:              ["travaille", "travailles", "travaille", "travaillions", "travailliez", "travaillent"],
                imperfect:            ["travaillasse", "travaillasses", "travaillât", "travaillassions", "travaillassiez", "travaillassent"],
                present_perfect:      ["aie travaillé", "aies travaillé", "ait travaillé", "ayons travaillé", "ayez travaillé", "aient travaillé"]
            },
            imperative: {
                positive:             ["travaille", "travaillons", "travaillez"],
                negative:             ["ne travaille pas", "ne travaillons pas", "ne travaillez pas"]
            }
        }
    },
    {
        infinitive: "choisir",
        translation: "to choose",
        gerund: "choisissant",
        past_participle: "choisi",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["choisis", "choisis", "choisit", "choisissons", "choisissez", "choisissent"],
                preterite:            ["ai choisi", "as choisi", "a choisi", "avons choisi", "avez choisi", "ont choisi"],
                imperfect:            ["choisissais", "choisissais", "choisissait", "choisissions", "choisissiez", "choisissaient"],
                future:               ["choisirai", "choisiras", "choisira", "choisirons", "choisirez", "choisiront"],
                conditional:          ["choisirais", "choisirais", "choisirait", "choisirions", "choisiriez", "choisiraient"],
                present_perfect:      ["viens de choisir", "viens de choisir", "vient de choisir", "venons de choisir", "venez de choisir", "viennent de choisir"],
                past_perfect:         ["avais choisi", "avais choisi", "avait choisi", "avions choisi", "aviez choisi", "avaient choisi"],
                future_perfect:       ["aurai choisi", "auras choisi", "aura choisi", "aurons choisi", "aurez choisi", "auront choisi"],
                conditional_perfect:  ["aurais choisi", "aurais choisi", "aurait choisi", "aurions choisi", "auriez choisi", "auraient choisi"]
            },
            subjunctive: {
                present:              ["choisisse", "choisisses", "choisisse", "choisissions", "choisissiez", "choisissent"],
                imperfect:            ["choisisse", "choisisses", "choisît", "choisissions", "choisissiez", "choisissent"],
                present_perfect:      ["aie choisi", "aies choisi", "ait choisi", "ayons choisi", "ayez choisi", "aient choisi"]
            },
            imperative: {
                positive:             ["choisis", "choisissons", "choisissez"],
                negative:             ["ne choisis pas", "ne choisissons pas", "ne choisissez pas"]
            }
        }
    },
    {
        infinitive: "partir",
        translation: "to leave / depart",
        gerund: "partant",
        past_participle: "parti",
        auxiliaire: "être",
        conjugations: {
            indicative: {
                present:              ["pars", "pars", "part", "partons", "partez", "partent"],
                preterite:            ["suis parti", "es parti", "est parti", "sommes partis", "êtes partis", "sont partis"],
                imperfect:            ["partais", "partais", "partait", "partions", "partiez", "partaient"],
                future:               ["partirai", "partiras", "partira", "partirons", "partirez", "partiront"],
                conditional:          ["partirais", "partirais", "partirait", "partirions", "partiriez", "partiraient"],
                present_perfect:      ["viens de partir", "viens de partir", "vient de partir", "venons de partir", "venez de partir", "viennent de partir"],
                past_perfect:         ["étais parti", "étais parti", "était parti", "étions partis", "étiez partis", "étaient partis"],
                future_perfect:       ["serai parti", "seras parti", "sera parti", "serons partis", "serez partis", "seront partis"],
                conditional_perfect:  ["serais parti", "serais parti", "serait parti", "serions partis", "seriez partis", "seraient partis"]
            },
            subjunctive: {
                present:              ["parte", "partes", "parte", "partions", "partiez", "partent"],
                imperfect:            ["partisse", "partisses", "partît", "partissions", "partissiez", "partissent"],
                present_perfect:      ["sois parti", "sois parti", "soit parti", "soyons partis", "soyez partis", "soient partis"]
            },
            imperative: {
                positive:             ["pars", "partons", "partez"],
                negative:             ["ne pars pas", "ne partons pas", "ne partez pas"]
            }
        }
    },
    {
        infinitive: "donner",
        translation: "to give",
        gerund: "donnant",
        past_participle: "donné",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["donne", "donnes", "donne", "donnons", "donnez", "donnent"],
                preterite:            ["ai donné", "as donné", "a donné", "avons donné", "avez donné", "ont donné"],
                imperfect:            ["donnais", "donnais", "donnait", "donnions", "donniez", "donnaient"],
                future:               ["donnerai", "donneras", "donnera", "donnerons", "donnerez", "donneront"],
                conditional:          ["donnerais", "donnerais", "donnerait", "donnerions", "donneriez", "donneraient"],
                present_perfect:      ["viens de donner", "viens de donner", "vient de donner", "venons de donner", "venez de donner", "viennent de donner"],
                past_perfect:         ["avais donné", "avais donné", "avait donné", "avions donné", "aviez donné", "avaient donné"],
                future_perfect:       ["aurai donné", "auras donné", "aura donné", "aurons donné", "aurez donné", "auront donné"],
                conditional_perfect:  ["aurais donné", "aurais donné", "aurait donné", "aurions donné", "auriez donné", "auraient donné"]
            },
            subjunctive: {
                present:              ["donne", "donnes", "donne", "donnions", "donniez", "donnent"],
                imperfect:            ["donnasse", "donnasses", "donnât", "donnassions", "donnassiez", "donnassent"],
                present_perfect:      ["aie donné", "aies donné", "ait donné", "ayons donné", "ayez donné", "aient donné"]
            },
            imperative: {
                positive:             ["donne", "donnons", "donnez"],
                negative:             ["ne donne pas", "ne donnons pas", "ne donnez pas"]
            }
        }
    },
    {
        infinitive: "comprendre",
        translation: "to understand",
        gerund: "comprenant",
        past_participle: "compris",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["comprends", "comprends", "comprend", "comprenons", "comprenez", "comprennent"],
                preterite:            ["ai compris", "as compris", "a compris", "avons compris", "avez compris", "ont compris"],
                imperfect:            ["comprenais", "comprenais", "comprenait", "comprenions", "compreniez", "comprenaient"],
                future:               ["comprendrai", "comprendras", "comprendra", "comprendrons", "comprendrez", "comprendront"],
                conditional:          ["comprendrais", "comprendrais", "comprendrait", "comprendrions", "comprendriez", "comprendraient"],
                present_perfect:      ["viens de comprendre", "viens de comprendre", "vient de comprendre", "venons de comprendre", "venez de comprendre", "viennent de comprendre"],
                past_perfect:         ["avais compris", "avais compris", "avait compris", "avions compris", "aviez compris", "avaient compris"],
                future_perfect:       ["aurai compris", "auras compris", "aura compris", "aurons compris", "aurez compris", "auront compris"],
                conditional_perfect:  ["aurais compris", "aurais compris", "aurait compris", "aurions compris", "auriez compris", "auraient compris"]
            },
            subjunctive: {
                present:              ["comprenne", "comprennes", "comprenne", "comprenions", "compreniez", "comprennent"],
                imperfect:            ["comprisse", "comprisses", "comprît", "comprissions", "comprissiez", "comprissent"],
                present_perfect:      ["aie compris", "aies compris", "ait compris", "ayons compris", "ayez compris", "aient compris"]
            },
            imperative: {
                positive:             ["comprends", "comprenons", "comprenez"],
                negative:             ["ne comprends pas", "ne comprenons pas", "ne comprenez pas"]
            }
        }
    },
    {
        infinitive: "commencer",
        translation: "to start / begin",
        gerund: "commençant",
        past_participle: "commencé",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["commence", "commences", "commence", "commençons", "commencez", "commencent"],
                preterite:            ["ai commencé", "as commencé", "a commencé", "avons commencé", "avez commencé", "ont commencé"],
                imperfect:            ["commençais", "commençais", "commençait", "commencions", "commenciez", "commençaient"],
                future:               ["commencerai", "commenceras", "commencera", "commencerons", "commencerez", "commenceront"],
                conditional:          ["commencerais", "commencerais", "commencerait", "commencerions", "commenceriez", "commenceraient"],
                present_perfect:      ["viens de commencer", "viens de commencer", "vient de commencer", "venons de commencer", "venez de commencer", "viennent de commencer"],
                past_perfect:         ["avais commencé", "avais commencé", "avait commencé", "avions commencé", "aviez commencé", "avaient commencé"],
                future_perfect:       ["aurai commencé", "auras commencé", "aura commencé", "aurons commencé", "aurez commencé", "auront commencé"],
                conditional_perfect:  ["aurais commencé", "aurais commencé", "aurait commencé", "aurions commencé", "auriez commencé", "auraient commencé"]
            },
            subjunctive: {
                present:              ["commence", "commences", "commence", "commencions", "commenciez", "commencent"],
                imperfect:            ["commençasse", "commençasses", "commençât", "commençassions", "commençassiez", "commençassent"],
                present_perfect:      ["aie commencé", "aies commencé", "ait commencé", "ayons commencé", "ayez commencé", "aient commencé"]
            },
            imperative: {
                positive:             ["commence", "commençons", "commencez"],
                negative:             ["ne commence pas", "ne commençons pas", "ne commencez pas"]
            }
        }
    },
    {
        infinitive: "arriver",
        translation: "to arrive",
        gerund: "arrivant",
        past_participle: "arrivé",
        auxiliaire: "être",
        conjugations: {
            indicative: {
                present:              ["arrive", "arrives", "arrive", "arrivons", "arrivez", "arrivent"],
                preterite:            ["suis arrivé", "es arrivé", "est arrivé", "sommes arrivés", "êtes arrivés", "sont arrivés"],
                imperfect:            ["arrivais", "arrivais", "arrivait", "arrivions", "arriviez", "arrivaient"],
                future:               ["arriverai", "arriveras", "arrivera", "arriverons", "arriverez", "arriveront"],
                conditional:          ["arriverais", "arriverais", "arriverait", "arriverions", "arriveriez", "arriveraient"],
                present_perfect:      ["viens d'arriver", "viens d'arriver", "vient d'arriver", "venons d'arriver", "venez d'arriver", "viennent d'arriver"],
                past_perfect:         ["étais arrivé", "étais arrivé", "était arrivé", "étions arrivés", "étiez arrivés", "étaient arrivés"],
                future_perfect:       ["serai arrivé", "seras arrivé", "sera arrivé", "serons arrivés", "serez arrivés", "seront arrivés"],
                conditional_perfect:  ["serais arrivé", "serais arrivé", "serait arrivé", "serions arrivés", "seriez arrivés", "seraient arrivés"]
            },
            subjunctive: {
                present:              ["arrive", "arrives", "arrive", "arrivions", "arriviez", "arrivent"],
                imperfect:            ["arrivasse", "arrivasses", "arrivât", "arrivassions", "arrivassiez", "arrivassent"],
                present_perfect:      ["sois arrivé", "sois arrivé", "soit arrivé", "soyons arrivés", "soyez arrivés", "soient arrivés"]
            },
            imperative: {
                positive:             ["arrive", "arrivons", "arrivez"],
                negative:             ["n'arrive pas", "n'arrivons pas", "n'arrivez pas"]
            }
        }
    },
    {
        infinitive: "chercher",
        translation: "to look for / search",
        gerund: "cherchant",
        past_participle: "cherché",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["cherche", "cherches", "cherche", "cherchons", "cherchez", "cherchent"],
                preterite:            ["ai cherché", "as cherché", "a cherché", "avons cherché", "avez cherché", "ont cherché"],
                imperfect:            ["cherchais", "cherchais", "cherchait", "cherchions", "cherchiez", "cherchaient"],
                future:               ["chercherai", "chercheras", "cherchera", "chercherons", "chercherez", "chercheront"],
                conditional:          ["chercherais", "chercherais", "chercherait", "chercherions", "chercheriez", "chercheraient"],
                present_perfect:      ["viens de chercher", "viens de chercher", "vient de chercher", "venons de chercher", "venez de chercher", "viennent de chercher"],
                past_perfect:         ["avais cherché", "avais cherché", "avait cherché", "avions cherché", "aviez cherché", "avaient cherché"],
                future_perfect:       ["aurai cherché", "auras cherché", "aura cherché", "aurons cherché", "aurez cherché", "auront cherché"],
                conditional_perfect:  ["aurais cherché", "aurais cherché", "aurait cherché", "aurions cherché", "auriez cherché", "auraient cherché"]
            },
            subjunctive: {
                present:              ["cherche", "cherches", "cherche", "cherchions", "cherchiez", "cherchent"],
                imperfect:            ["cherchasse", "cherchasses", "cherchât", "cherchassions", "cherchassiez", "cherchassent"],
                present_perfect:      ["aie cherché", "aies cherché", "ait cherché", "ayons cherché", "ayez cherché", "aient cherché"]
            },
            imperative: {
                positive:             ["cherche", "cherchons", "cherchez"],
                negative:             ["ne cherche pas", "ne cherchons pas", "ne cherchez pas"]
            }
        }
    },
    {
        infinitive: "acheter",
        translation: "to buy",
        gerund: "achetant",
        past_participle: "acheté",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["achète", "achètes", "achète", "achetons", "achetez", "achètent"],
                preterite:            ["ai acheté", "as acheté", "a acheté", "avons acheté", "avez acheté", "ont acheté"],
                imperfect:            ["achetais", "achetais", "achetait", "achetions", "achetiez", "achetaient"],
                future:               ["achèterai", "achèteras", "achètera", "achèterons", "achèterez", "achèteront"],
                conditional:          ["achèterais", "achèterais", "achèterait", "achèterions", "achèteriez", "achèteraient"],
                present_perfect:      ["viens d'acheter", "viens d'acheter", "vient d'acheter", "venons d'acheter", "venez d'acheter", "viennent d'acheter"],
                past_perfect:         ["avais acheté", "avais acheté", "avait acheté", "avions acheté", "aviez acheté", "avaient acheté"],
                future_perfect:       ["aurai acheté", "auras acheté", "aura acheté", "aurons acheté", "aurez acheté", "auront acheté"],
                conditional_perfect:  ["aurais acheté", "aurais acheté", "aurait acheté", "aurions acheté", "auriez acheté", "auraient acheté"]
            },
            subjunctive: {
                present:              ["achète", "achètes", "achète", "achetions", "achetiez", "achètent"],
                imperfect:            ["achetasse", "achetasses", "achetât", "achetassions", "achetassiez", "achetassent"],
                present_perfect:      ["aie acheté", "aies acheté", "ait acheté", "ayons acheté", "ayez acheté", "aient acheté"]
            },
            imperative: {
                positive:             ["achète", "achetons", "achetez"],
                negative:             ["n'achète pas", "n'achetons pas", "n'achetez pas"]
            }
        }
    },
    {
        infinitive: "croire",
        translation: "to believe",
        gerund: "croyant",
        past_participle: "cru",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["crois", "crois", "croit", "croyons", "croyez", "croient"],
                preterite:            ["ai cru", "as cru", "a cru", "avons cru", "avez cru", "ont cru"],
                imperfect:            ["croyais", "croyais", "croyait", "croyions", "croyiez", "croyaient"],
                future:               ["croirai", "croiras", "croira", "croirons", "croirez", "croiront"],
                conditional:          ["croirais", "croirais", "croirait", "croirions", "croiriez", "croiraient"],
                present_perfect:      ["viens de croire", "viens de croire", "vient de croire", "venons de croire", "venez de croire", "viennent de croire"],
                past_perfect:         ["avais cru", "avais cru", "avait cru", "avions cru", "aviez cru", "avaient cru"],
                future_perfect:       ["aurai cru", "auras cru", "aura cru", "aurons cru", "aurez cru", "auront cru"],
                conditional_perfect:  ["aurais cru", "aurais cru", "aurait cru", "aurions cru", "auriez cru", "auraient cru"]
            },
            subjunctive: {
                present:              ["croie", "croies", "croie", "croyions", "croyiez", "croient"],
                imperfect:            ["crusse", "crusses", "crût", "crussions", "crussiez", "crussent"],
                present_perfect:      ["aie cru", "aies cru", "ait cru", "ayons cru", "ayez cru", "aient cru"]
            },
            imperative: {
                positive:             ["crois", "croyons", "croyez"],
                negative:             ["ne crois pas", "ne croyons pas", "ne croyez pas"]
            }
        }
    },
    {
        infinitive: "connaître",
        translation: "to know (a person/place)",
        gerund: "connaissant",
        past_participle: "connu",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["connais", "connais", "connaît", "connaissons", "connaissez", "connaissent"],
                preterite:            ["ai connu", "as connu", "a connu", "avons connu", "avez connu", "ont connu"],
                imperfect:            ["connaissais", "connaissais", "connaissait", "connaissions", "connaissiez", "connaissaient"],
                future:               ["connaîtrai", "connaîtras", "connaîtra", "connaîtrons", "connaîtrez", "connaîtront"],
                conditional:          ["connaîtrais", "connaîtrais", "connaîtrait", "connaîtrions", "connaîtriez", "connaîtraient"],
                present_perfect:      ["viens de connaître", "viens de connaître", "vient de connaître", "venons de connaître", "venez de connaître", "viennent de connaître"],
                past_perfect:         ["avais connu", "avais connu", "avait connu", "avions connu", "aviez connu", "avaient connu"],
                future_perfect:       ["aurai connu", "auras connu", "aura connu", "aurons connu", "aurez connu", "auront connu"],
                conditional_perfect:  ["aurais connu", "aurais connu", "aurait connu", "aurions connu", "auriez connu", "auraient connu"]
            },
            subjunctive: {
                present:              ["connaisse", "connaisses", "connaisse", "connaissions", "connaissiez", "connaissent"],
                imperfect:            ["connusse", "connusses", "connût", "connussions", "connussiez", "connussent"],
                present_perfect:      ["aie connu", "aies connu", "ait connu", "ayons connu", "ayez connu", "aient connu"]
            },
            imperative: {
                positive:             ["connais", "connaissons", "connaissez"],
                negative:             ["ne connais pas", "ne connaissons pas", "ne connaissez pas"]
            }
        }
    },
    {
        infinitive: "ouvrir",
        translation: "to open",
        gerund: "ouvrant",
        past_participle: "ouvert",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["ouvre", "ouvres", "ouvre", "ouvrons", "ouvrez", "ouvrent"],
                preterite:            ["ai ouvert", "as ouvert", "a ouvert", "avons ouvert", "avez ouvert", "ont ouvert"],
                imperfect:            ["ouvrais", "ouvrais", "ouvrait", "ouvrions", "ouvriez", "ouvraient"],
                future:               ["ouvrirai", "ouvriras", "ouvrira", "ouvrirons", "ouvrirez", "ouvriront"],
                conditional:          ["ouvrirais", "ouvrirais", "ouvrirait", "ouvririons", "ouvririez", "ouvriraient"],
                present_perfect:      ["viens d'ouvrir", "viens d'ouvrir", "vient d'ouvrir", "venons d'ouvrir", "venez d'ouvrir", "viennent d'ouvrir"],
                past_perfect:         ["avais ouvert", "avais ouvert", "avait ouvert", "avions ouvert", "aviez ouvert", "avaient ouvert"],
                future_perfect:       ["aurai ouvert", "auras ouvert", "aura ouvert", "aurons ouvert", "aurez ouvert", "auront ouvert"],
                conditional_perfect:  ["aurais ouvert", "aurais ouvert", "aurait ouvert", "aurions ouvert", "auriez ouvert", "auraient ouvert"]
            },
            subjunctive: {
                present:              ["ouvre", "ouvres", "ouvre", "ouvrions", "ouvriez", "ouvrent"],
                imperfect:            ["ouvrisse", "ouvrisses", "ouvrît", "ouvrissions", "ouvrissiez", "ouvrissent"],
                present_perfect:      ["aie ouvert", "aies ouvert", "ait ouvert", "ayons ouvert", "ayez ouvert", "aient ouvert"]
            },
            imperative: {
                positive:             ["ouvre", "ouvrons", "ouvrez"],
                negative:             ["n'ouvre pas", "n'ouvrons pas", "n'ouvrez pas"]
            }
        }
    },
    {
        infinitive: "jouer",
        translation: "to play",
        gerund: "jouant",
        past_participle: "joué",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["joue", "joues", "joue", "jouons", "jouez", "jouent"],
                preterite:            ["ai joué", "as joué", "a joué", "avons joué", "avez joué", "ont joué"],
                imperfect:            ["jouais", "jouais", "jouait", "jouions", "jouiez", "jouaient"],
                future:               ["jouerai", "joueras", "jouera", "jouerons", "jouerez", "joueront"],
                conditional:          ["jouerais", "jouerais", "jouerait", "jouerions", "joueriez", "joueraient"],
                present_perfect:      ["viens de jouer", "viens de jouer", "vient de jouer", "venons de jouer", "venez de jouer", "viennent de jouer"],
                past_perfect:         ["avais joué", "avais joué", "avait joué", "avions joué", "aviez joué", "avaient joué"],
                future_perfect:       ["aurai joué", "auras joué", "aura joué", "aurons joué", "aurez joué", "auront joué"],
                conditional_perfect:  ["aurais joué", "aurais joué", "aurait joué", "aurions joué", "auriez joué", "auraient joué"]
            },
            subjunctive: {
                present:              ["joue", "joues", "joue", "jouions", "jouiez", "jouent"],
                imperfect:            ["jouasse", "jouasses", "jouât", "jouassions", "jouassiez", "jouassent"],
                present_perfect:      ["aie joué", "aies joué", "ait joué", "ayons joué", "ayez joué", "aient joué"]
            },
            imperative: {
                positive:             ["joue", "jouons", "jouez"],
                negative:             ["ne joue pas", "ne jouons pas", "ne jouez pas"]
            }
        }
    },
    {
        infinitive: "suivre",
        translation: "to follow",
        gerund: "suivant",
        past_participle: "suivi",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["suis", "suis", "suit", "suivons", "suivez", "suivent"],
                preterite:            ["ai suivi", "as suivi", "a suivi", "avons suivi", "avez suivi", "ont suivi"],
                imperfect:            ["suivais", "suivais", "suivait", "suivions", "suiviez", "suivaient"],
                future:               ["suivrai", "suivras", "suivra", "suivrons", "suivrez", "suivront"],
                conditional:          ["suivrais", "suivrais", "suivrait", "suivrions", "suivriez", "suivraient"],
                present_perfect:      ["viens de suivre", "viens de suivre", "vient de suivre", "venons de suivre", "venez de suivre", "viennent de suivre"],
                past_perfect:         ["avais suivi", "avais suivi", "avait suivi", "avions suivi", "aviez suivi", "avaient suivi"],
                future_perfect:       ["aurai suivi", "auras suivi", "aura suivi", "aurons suivi", "aurez suivi", "auront suivi"],
                conditional_perfect:  ["aurais suivi", "aurais suivi", "aurait suivi", "aurions suivi", "auriez suivi", "auraient suivi"]
            },
            subjunctive: {
                present:              ["suive", "suives", "suive", "suivions", "suiviez", "suivent"],
                imperfect:            ["suivisse", "suivisses", "suivît", "suivissions", "suivissiez", "suivissent"],
                present_perfect:      ["aie suivi", "aies suivi", "ait suivi", "ayons suivi", "ayez suivi", "aient suivi"]
            },
            imperative: {
                positive:             ["suis", "suivons", "suivez"],
                negative:             ["ne suis pas", "ne suivons pas", "ne suivez pas"]
            }
        }
    },
    {
        infinitive: "dormir",
        translation: "to sleep",
        gerund: "dormant",
        past_participle: "dormi",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["dors", "dors", "dort", "dormons", "dormez", "dorment"],
                preterite:            ["ai dormi", "as dormi", "a dormi", "avons dormi", "avez dormi", "ont dormi"],
                imperfect:            ["dormais", "dormais", "dormait", "dormions", "dormiez", "dormaient"],
                future:               ["dormirai", "dormiras", "dormira", "dormirons", "dormirez", "dormiront"],
                conditional:          ["dormirais", "dormirais", "dormirait", "dormirions", "dormiriez", "dormiraient"],
                present_perfect:      ["viens de dormir", "viens de dormir", "vient de dormir", "venons de dormir", "venez de dormir", "viennent de dormir"],
                past_perfect:         ["avais dormi", "avais dormi", "avait dormi", "avions dormi", "aviez dormi", "avaient dormi"],
                future_perfect:       ["aurai dormi", "auras dormi", "aura dormi", "aurons dormi", "aurez dormi", "auront dormi"],
                conditional_perfect:  ["aurais dormi", "aurais dormi", "aurait dormi", "aurions dormi", "auriez dormi", "auraient dormi"]
            },
            subjunctive: {
                present:              ["dorme", "dormes", "dorme", "dormions", "dormiez", "dorment"],
                imperfect:            ["dormisse", "dormisses", "dormît", "dormissions", "dormissiez", "dormissent"],
                present_perfect:      ["aie dormi", "aies dormi", "ait dormi", "ayons dormi", "ayez dormi", "aient dormi"]
            },
            imperative: {
                positive:             ["dors", "dormons", "dormez"],
                negative:             ["ne dors pas", "ne dormons pas", "ne dormez pas"]
            }
        }
    },
    {
        infinitive: "sentir",
        translation: "to feel / smell",
        gerund: "sentant",
        past_participle: "senti",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["sens", "sens", "sent", "sentons", "sentez", "sentent"],
                preterite:            ["ai senti", "as senti", "a senti", "avons senti", "avez senti", "ont senti"],
                imperfect:            ["sentais", "sentais", "sentait", "sentions", "sentiez", "sentaient"],
                future:               ["sentirai", "sentiras", "sentira", "sentirons", "sentirez", "sentiront"],
                conditional:          ["sentirais", "sentirais", "sentirait", "sentirions", "sentiriez", "sentiraient"],
                present_perfect:      ["viens de sentir", "viens de sentir", "vient de sentir", "venons de sentir", "venez de sentir", "viennent de sentir"],
                past_perfect:         ["avais senti", "avais senti", "avait senti", "avions senti", "aviez senti", "avaient senti"],
                future_perfect:       ["aurai senti", "auras senti", "aura senti", "aurons senti", "aurez senti", "auront senti"],
                conditional_perfect:  ["aurais senti", "aurais senti", "aurait senti", "aurions senti", "auriez senti", "auraient senti"]
            },
            subjunctive: {
                present:              ["sente", "sentes", "sente", "sentions", "sentiez", "sentent"],
                imperfect:            ["sentisse", "sentisses", "sentît", "sentissions", "sentissiez", "sentissent"],
                present_perfect:      ["aie senti", "aies senti", "ait senti", "ayons senti", "ayez senti", "aient senti"]
            },
            imperative: {
                positive:             ["sens", "sentons", "sentez"],
                negative:             ["ne sens pas", "ne sentons pas", "ne sentez pas"]
            }
        }
    },
    {
        infinitive: "trouver",
        translation: "to find",
        gerund: "trouvant",
        past_participle: "trouvé",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["trouve", "trouves", "trouve", "trouvons", "trouvez", "trouvent"],
                preterite:            ["ai trouvé", "as trouvé", "a trouvé", "avons trouvé", "avez trouvé", "ont trouvé"],
                imperfect:            ["trouvais", "trouvais", "trouvait", "trouvions", "trouviez", "trouvaient"],
                future:               ["trouverai", "trouveras", "trouvera", "trouverons", "trouverez", "trouveront"],
                conditional:          ["trouverais", "trouverais", "trouverait", "trouverions", "trouveriez", "trouveraient"],
                present_perfect:      ["viens de trouver", "viens de trouver", "vient de trouver", "venons de trouver", "venez de trouver", "viennent de trouver"],
                past_perfect:         ["avais trouvé", "avais trouvé", "avait trouvé", "avions trouvé", "aviez trouvé", "avaient trouvé"],
                future_perfect:       ["aurai trouvé", "auras trouvé", "aura trouvé", "aurons trouvé", "aurez trouvé", "auront trouvé"],
                conditional_perfect:  ["aurais trouvé", "aurais trouvé", "aurait trouvé", "aurions trouvé", "auriez trouvé", "auraient trouvé"]
            },
            subjunctive: {
                present:              ["trouve", "trouves", "trouve", "trouvions", "trouviez", "trouvent"],
                imperfect:            ["trouvasse", "trouvasses", "trouvât", "trouvassions", "trouvassiez", "trouvassent"],
                present_perfect:      ["aie trouvé", "aies trouvé", "ait trouvé", "ayons trouvé", "ayez trouvé", "aient trouvé"]
            },
            imperative: {
                positive:             ["trouve", "trouvons", "trouvez"],
                negative:             ["ne trouve pas", "ne trouvons pas", "ne trouvez pas"]
            }
        }
    },
    {
        infinitive: "changer",
        translation: "to change",
        gerund: "changeant",
        past_participle: "changé",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["change", "changes", "change", "changeons", "changez", "changent"],
                preterite:            ["ai changé", "as changé", "a changé", "avons changé", "avez changé", "ont changé"],
                imperfect:            ["changeais", "changeais", "changeait", "changions", "changiez", "changeaient"],
                future:               ["changerai", "changeras", "changera", "changerons", "changerez", "changeront"],
                conditional:          ["changerais", "changerais", "changerait", "changerions", "changeriez", "changeraient"],
                present_perfect:      ["viens de changer", "viens de changer", "vient de changer", "venons de changer", "venez de changer", "viennent de changer"],
                past_perfect:         ["avais changé", "avais changé", "avait changé", "avions changé", "aviez changé", "avaient changé"],
                future_perfect:       ["aurai changé", "auras changé", "aura changé", "aurons changé", "aurez changé", "auront changé"],
                conditional_perfect:  ["aurais changé", "aurais changé", "aurait changé", "aurions changé", "auriez changé", "auraient changé"]
            },
            subjunctive: {
                present:              ["change", "changes", "change", "changions", "changiez", "changent"],
                imperfect:            ["changeasse", "changeasses", "changeât", "changeassions", "changeassiez", "changeassent"],
                present_perfect:      ["aie changé", "aies changé", "ait changé", "ayons changé", "ayez changé", "aient changé"]
            },
            imperative: {
                positive:             ["change", "changeons", "changez"],
                negative:             ["ne change pas", "ne changeons pas", "ne changez pas"]
            }
        }
    },
    {
        infinitive: "améliorer",
        translation: "to improve",
        gerund: "améliorant",
        past_participle: "amélioré",
        auxiliaire: "avoir",
        conjugations: {
            indicative: {
                present:              ["améliore", "améliores", "améliore", "améliorons", "améliorez", "améliorent"],
                preterite:            ["ai amélioré", "as amélioré", "a amélioré", "avons amélioré", "avez amélioré", "ont amélioré"],
                imperfect:            ["améliorais", "améliorais", "améliorait", "améliorions", "amélioriez", "amélioraient"],
                future:               ["améliorerai", "amélioreras", "améliorera", "améliorerons", "améliorerez", "amélioreront"],
                conditional:          ["améliorerais", "améliorerais", "améliorerait", "améliorerions", "amélioreriez", "amélioreraient"],
                present_perfect:      ["viens d'améliorer", "viens d'améliorer", "vient d'améliorer", "venons d'améliorer", "venez d'améliorer", "viennent d'améliorer"],
                past_perfect:         ["avais amélioré", "avais amélioré", "avait amélioré", "avions amélioré", "aviez amélioré", "avaient amélioré"],
                future_perfect:       ["aurai amélioré", "auras amélioré", "aura amélioré", "aurons amélioré", "aurez amélioré", "auront amélioré"],
                conditional_perfect:  ["aurais amélioré", "aurais amélioré", "aurait amélioré", "aurions amélioré", "auriez amélioré", "auraient amélioré"]
            },
            subjunctive: {
                present:              ["améliore", "améliores", "améliore", "améliorions", "amélioriez", "améliorent"],
                imperfect:            ["améliorasse", "améliorasses", "améliorât", "améliorassions", "améliorassiez", "améliorassent"],
                present_perfect:      ["aie amélioré", "aies amélioré", "ait amélioré", "ayons amélioré", "ayez amélioré", "aient amélioré"]
            },
            imperative: {
                positive:             ["améliore", "améliorons", "améliorez"],
                negative:             ["n'améliore pas", "n'améliorons pas", "n'améliorez pas"]
            }
        }
    },
    {
        infinitive: "rentrer",
        translation: "to return home / go back",
        gerund: "rentrant",
        past_participle: "rentré",
        auxiliaire: "être",
        conjugations: {
            indicative: {
                present:              ["rentre", "rentres", "rentre", "rentrons", "rentrez", "rentrent"],
                preterite:            ["suis rentré", "es rentré", "est rentré", "sommes rentrés", "êtes rentrés", "sont rentrés"],
                imperfect:            ["rentrais", "rentrais", "rentrait", "rentrions", "rentriez", "rentraient"],
                future:               ["rentrerai", "rentreras", "rentrera", "rentrerons", "rentrerez", "rentreront"],
                conditional:          ["rentrerais", "rentrerais", "rentrerait", "rentrerions", "rentreriez", "rentreraient"],
                present_perfect:      ["viens de rentrer", "viens de rentrer", "vient de rentrer", "venons de rentrer", "venez de rentrer", "viennent de rentrer"],
                past_perfect:         ["étais rentré", "étais rentré", "était rentré", "étions rentrés", "étiez rentrés", "étaient rentrés"],
                future_perfect:       ["serai rentré", "seras rentré", "sera rentré", "serons rentrés", "serez rentrés", "seront rentrés"],
                conditional_perfect:  ["serais rentré", "serais rentré", "serait rentré", "serions rentrés", "seriez rentrés", "seraient rentrés"]
            },
            subjunctive: {
                present:              ["rentre", "rentres", "rentre", "rentrions", "rentriez", "rentrent"],
                imperfect:            ["rentrasse", "rentrasses", "rentrât", "rentrassions", "rentrassiez", "rentrassent"],
                present_perfect:      ["sois rentré", "sois rentré", "soit rentré", "soyons rentrés", "soyez rentrés", "soient rentrés"]
            },
            imperative: {
                positive:             ["rentre", "rentrons", "rentrez"],
                negative:             ["ne rentre pas", "ne rentrons pas", "ne rentrez pas"]
            }
        }
    },
];

const PRONOUNS = {
    standard:   ["Je", "Tu", "Il/Elle/On", "Nous", "Vous", "Ils/Elles"],
    imperative: ["Tu", "Nous", "Vous"],
    nonFinite:  ["-"]
};
