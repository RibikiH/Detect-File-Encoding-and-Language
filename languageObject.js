﻿const flag = "gi";

const sharedRegex = {
    czech: new RegExp(/jsem|jsi/, flag),
    hungarian: new RegExp(/\snem\s/, flag),
    slovak: new RegExp(/\sako\s|poriadku|myslím/, flag),
    slovenian: new RegExp(/kaj/, flag),
    albanian: new RegExp(/nuk/, flag),
    english: new RegExp(/ the /, flag),
    french: new RegExp(/c'est/, flag),
    portuguese: new RegExp(/ não /, flag),
    spanish: new RegExp(/bien|siempre|ahora/, flag),
    german: new RegExp(/\sdas\s/, flag),
    italian: new RegExp(/\sche\s/, flag),
    danish: new RegExp(/hvad|noget/, flag),
    norwegian: new RegExp(/deg/, flag),
    swedish: new RegExp(/ jag /, flag),
    dutch: new RegExp(/ het /, flag),
    finnish: new RegExp(/hän/, flag),
    "serbo-croatian": new RegExp(/ sam | kako /, flag),
    estonian: new RegExp(/see/, flag),
    icelandic: new RegExp(/Það/, flag),
    indonesian: new RegExp(/tidak/, flag),
    turkish: new RegExp(/ bir /, flag),
};

const sharedFrequency = {
    polish: { low: 0.004355, high: 0.005102 },
    czech: { low: 0.004433, high: 0.007324 },
    hungarian: { low: 0.004994, high: 0.005183 },
    slovak: { low: 0.003319, high: 0.004190 },
    slovenian: { low: 0.004388, high: 0.006711 },
    albanian: { low: 0.003773, high: 0.007313 },
    english: { low: 0.004679, high: 0.007580 },
    french: { low: 0.003016, high: 0.004825 },
    portuguese: { low: 0.003406, high: 0.005032 },
    spanish: { low: 0.002373, high: 0.002452 },
    german: { low: 0.004044, high: 0.004391 },
    italian: { low: 0.003889, high: 0.005175 },
    danish: { low: 0.003630, high: 0.004189 },
    norwegian: { low: 0.002410, high: 0.003918 },
    swedish: { low: 0.004916, high: 0.007221 },
    dutch: { low: 0.003501, high: 0.004150 },
    finnish: { low: 0.003308, high: 0.005135 },
    "serbo-croatian": { low: 0.002568, high: 0.005182 },
    estonian: { low: 0.003930, high: 0.005062 },
    icelandic: { low: 0.004366, high: 0.004366 },
    indonesian: { low: 0.002825, high: 0.002825 },
    turkish: { low: 0.002915, high: 0.004588 },
};

module.exports = [
    {
        name: "polish",
        count: 0,
        utfRegex: new RegExp(/się/, flag),
        isoRegex: new RegExp(/siê/, flag),
        encoding: "CP1250",
        utfFrequency: sharedFrequency.polish,
        isoFrequency: sharedFrequency.polish
    },
    {
        name: "czech",
        count: 0,
        utfRegex: sharedRegex.czech,
        isoRegex: sharedRegex.czech,
        encoding: "CP1250",
        utfFrequency: sharedFrequency.czech,
        isoFrequency: sharedFrequency.czech
    },
    {
        name: "hungarian",
        count: 0,
        utfRegex: sharedRegex.hungarian,
        isoRegex: sharedRegex.hungarian,
        encoding: "CP1250",
        utfFrequency: sharedFrequency.hungarian,
        isoFrequency: sharedFrequency.hungarian
    },
    {
        name: "romanian",
        count: 0,
        utfRegex: new RegExp(/sunt|eşti/, flag),
        isoRegex: new RegExp(/sunt|eºti/, flag),
        encoding: "CP1250",
        utfFrequency: { low: 0.003319, high: 0.004190 }
    },
    {
        name: "slovak",
        count: 0,
        utfRegex: sharedRegex.slovak,
        isoRegex: sharedRegex.slovak,
        encoding: "CP1250",
        utfFrequency: sharedFrequency.slovak,
        isoFrequency: sharedFrequency.slovak
    },
    {
        name: "slovenian",
        count: 0,
        utfRegex: sharedRegex.slovenian,
        isoRegex: sharedRegex.slovenian,
        encoding: "CP1250",
        utfFrequency: sharedFrequency.slovenian,
        isoFrequency: sharedFrequency.slovenian
    },
    {
        name: "albanian",
        count: 0,
        utfRegex: sharedRegex.albanian,
        isoRegex: sharedRegex.albanian,
        encoding: "CP1250",
        utfFrequency: sharedFrequency.albanian,
        isoFrequency: sharedFrequency.albanian
    },
    {
        name: "russian",
        count: 0,
        utfRegex: new RegExp(/что/, flag),
        isoRegex: new RegExp(/÷òî/, flag),
        encoding: "CP1251",
        utfFrequency: { low: 0.004965, high: 0.005341 }
    },
    {
        name: "ukrainian",
        count: 0,
        utfRegex: new RegExp(/він|але/, flag),
        isoRegex: new RegExp(/â³í|àëå/, flag),
        encoding: "CP1251",
        utfFrequency: { low: 0.002933, high: 0.005389 }
    },
    {
        name: "bulgarian",
        count: 0,
        utfRegex: new RegExp(/това|какво/, flag),
        isoRegex: new RegExp(/òîâà|äîáðå|êaêâo/, flag),
        encoding: "CP1251",
        utfFrequency: { low: 0.005225, high: 0.005628 }
    },
    {
        name: "english",
        count: 0,
        utfRegex: sharedRegex.english,
        isoRegex: sharedRegex.english,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.english,
        isoFrequency: sharedFrequency.english
    },
    {
        name: "french",
        count: 0,
        utfRegex: sharedRegex.french,
        isoRegex: sharedRegex.french,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.french,
        isoFrequency: sharedFrequency.french
    },
    {
        name: "portuguese",
        count: 0,
        utfRegex: sharedRegex.portuguese,
        isoRegex: sharedRegex.portuguese,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.portuguese,
        isoFrequency: sharedFrequency.portuguese
    },
    {
        name: "spanish",
        count: 0,
        utfRegex: sharedRegex.spanish,
        isoRegex: sharedRegex.spanish,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.spanish,
        isoFrequency: sharedFrequency.spanish
    },
    {
        name: "german",
        count: 0,
        utfRegex: sharedRegex.german,
        isoRegex: sharedRegex.german,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.german,
        isoFrequency: sharedFrequency.german
    },
    {
        name: "italian",
        count: 0,
        utfRegex: sharedRegex.italian,
        isoRegex: sharedRegex.italian,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.italian,
        isoFrequency: sharedFrequency.italian
    },
    {
        name: "danish",
        count: 0,
        utfRegex: sharedRegex.danish,
        isoRegex: sharedRegex.danish,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.danish,
        isoFrequency: sharedFrequency.danish
    },
    {
        name: "norwegian",
        count: 0,
        utfRegex: sharedRegex.norwegian,
        isoRegex: sharedRegex.norwegian,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.norwegian,
        isoFrequency: sharedFrequency.norwegian
    },
    {
        name: "swedish",
        count: 0,
        utfRegex: sharedRegex.swedish,
        isoRegex: sharedRegex.swedish,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.swedish,
        isoFrequency: sharedFrequency.swedish
    },
    {
        name: "dutch",
        count: 0,
        utfRegex: sharedRegex.dutch,
        isoRegex: sharedRegex.dutch,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.dutch,
        isoFrequency: sharedFrequency.dutch
    },
    {
        name: "finnish",
        count: 0,
        utfRegex: sharedRegex.finnish,
        isoRegex: sharedRegex.finnish,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.finnish,
        isoFrequency: sharedFrequency.finnish
    },
    {
        name: "serbo-croatian",
        count: 0,
        utfRegex: sharedRegex["serbo-croatian"],
        isoRegex: sharedRegex["serbo-croatian"],
        encoding: "CP1252",
        utfFrequency: sharedFrequency["serbo-croatian"],
        isoFrequency: sharedFrequency["serbo-croatian"]
    },
    {
        name: "estonian",
        count: 0,
        utfRegex: sharedRegex.estonian,
        isoRegex: sharedRegex.estonian,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.estonian,
        isoFrequency: sharedFrequency.estonian
    },
    {
        name: "icelandic",
        count: 0,
        utfRegex: sharedRegex.icelandic,
        isoRegex: sharedRegex.icelandic,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.icelandic,
        isoFrequency: sharedFrequency.icelandic
    },
    {
        name: "indonesian",
        count: 0,
        utfRegex: sharedRegex.indonesian,
        isoRegex: sharedRegex.indonesian,
        encoding: "CP1252",
        utfFrequency: sharedFrequency.indonesian,
        isoFrequency: sharedFrequency.indonesian
    },
    {
        name: "greek",
        count: 0,
        utfRegex: new RegExp(/είναι/, flag),
        isoRegex: new RegExp(/åßíáé/, flag),
        encoding: "CP1253",
        utfFrequency: { low: 0.003440, high: 0.004059 }
    },
    {
        name: "turkish",
        count: 0,
        utfRegex: sharedRegex.turkish,
        isoRegex: sharedRegex.turkish,
        encoding: "CP1254",
        utfFrequency: sharedFrequency.turkish,
        isoFrequency: sharedFrequency.turkish
    },
    {
        name: "hebrew",
        count: 0,
        utfRegex: new RegExp(/אתה/, flag),
        isoRegex: new RegExp(/àúä/, flag),
        encoding: "CP1255",
        utfFrequency: { low: 0.003663, high: 0.004631 }
    },
    {
        name: "arabic",
        count: 0,
        utfRegex: new RegExp(/هذا/, flag),
        isoRegex: new RegExp(/åðç/, flag),
        encoding: "CP1256",
        utfFrequency: { low: 0.003522, high: 0.004348 }
    },
    {
        name: "chinese-simplified",
        count: 0,
        utfRegex: new RegExp(/个|人/, flag),
        isoRegex: new RegExp(/´ó|¶¯|Å®/, flag),
        encoding: "GB18030",
        utfFrequency: { low: 0.012153, high: 0.014129 }
    },
    {
        name: "chinese-traditional",
        count: 0,
        utfRegex: new RegExp(/在/, flag),
        isoRegex: new RegExp(/¦b/, flag),
        encoding: "BIG5",
        utfFrequency: { low: 0.009762, high: 0.011494 }
    },
    {
        name: "japanese",
        count: 0,
        utfRegex: new RegExp(/ど/, flag),
        isoRegex: new RegExp(/‚»/, flag),
        encoding: "Shift-JIS",
        utfFrequency: { low: 0.004257, high: 0.006585 }
    },
    {
        name: "korean",
        count: 0,
        utfRegex: new RegExp(/도/, flag),
        isoRegex: new RegExp(/àö¾î|å¾ß|¡¼­/, flag),
        encoding: "EUC-KR",
        utfFrequency: { low: 0.010910, high: 0.013670 }
    },
    {
        name: "thai",
        count: 0,
        utfRegex: new RegExp(/แฮร์รี่|พอตเตอร์/, flag),
        isoRegex: new RegExp(/áîãìãõè|¾íµàµíãì­/, flag),
        encoding: "TIS-620",
        utfFrequency: { low: 0.003194, high: 0.003468 }
    }
];