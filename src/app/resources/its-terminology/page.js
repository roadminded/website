const TERMS = [
    {
        en: "Intelligent Transport Systems",
        zh: "智慧型運輸系統",
        pinyin: "zhìhuì xíng yùnshū xìtǒng",
        audio: "Coming later",
        note: "Common official Taiwan terminology. ITS is widely used as the acronym.",
    },
    {
        en: "Variable Message Sign",
        zh: "資訊可變標誌",
        pinyin: "zīxùn kěbiàn biāozhì",
        audio: "Coming later",
        note: "CMS and VMS terminology are both used in Taiwan.",
    },
    {
        en: "Traffic Management Centre",
        zh: "交通管理中心",
        pinyin: "jiāotōng guǎnlǐ zhōngxīn",
        audio: "Coming later",
        note: "交控中心 is also used operationally in some contexts.",
    },
    {
        en: "Road authority",
        zh: "道路主管機關",
        pinyin: "dàolù zhǔguǎn jīguān",
        audio: "Coming later",
        note: "Generic term for the responsible road authority.",
    },
    {
        en: "Tunnel",
        zh: "隧道",
        pinyin: "suìdào",
        audio: "Coming later",
        note: "",
    },
    {
        en: "Tunnel operation",
        zh: "隧道營運",
        pinyin: "suìdào yíngyùn",
        audio: "Coming later",
        note: "",
    },
    {
        en: "Traffic management",
        zh: "交通管理",
        pinyin: "jiāotōng guǎnlǐ",
        audio: "Coming later",
        note: "",
    },
    {
        en: "Traffic data",
        zh: "交通資料",
        pinyin: "jiāotōng zīliào",
        audio: "Coming later",
        note: "",
    },
    {
        en: "System integration",
        zh: "系統整合",
        pinyin: "xìtǒng zhěnghé",
        audio: "Coming later",
        note: "",
    },
    {
        en: "Interoperability",
        zh: "互通性",
        pinyin: "hùtōngxìng",
        audio: "Coming later",
        note: "",
    },
    {
        en: "Open standards",
        zh: "開放標準",
        pinyin: "kāifàng biāozhǔn",
        audio: "Coming later",
        note: "",
    },
    {
        en: "Real-time data",
        zh: "即時資料",
        pinyin: "jíshí zīliào",
        audio: "Coming later",
        note: "",
    },
    {
        en: "Historical data",
        zh: "歷史資料",
        pinyin: "lìshǐ zīliào",
        audio: "Coming later",
        note: "",
    },
    {
        en: "Incident analysis",
        zh: "事件分析",
        pinyin: "shìjiàn fēnxī",
        audio: "Coming later",
        note: "",
    },
    {
        en: "Operational analysis",
        zh: "營運分析",
        pinyin: "yíngyùn fēnxī",
        audio: "Coming later",
        note: "",
    },
];

export const metadata = {
    title: "ITS Terminology",
    description:
        "A practical English–Traditional Chinese terminology reference for Intelligent Transport Systems in Taiwan, including Hanyu Pinyin and usage notes.",
};

export default function ItsTerminologyPage() {
    return (
        <div className="bg-base-100">
            <section className="bg-gradient-to-b from-base-200 to-base-100 border-b border-base-200">
                <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60">
                        Resources
                    </p>

                    <h1 className="mt-4 text-4xl md:text-5xl font-bold">
                        ITS Terminology
                    </h1>

                    <p className="mt-3 text-xl md:text-2xl font-medium opacity-80">
                        English · Traditional Chinese · Pinyin
                    </p>

                    <p className="mt-5 text-lg opacity-80 max-w-3xl">
                        A practical terminology reference for Intelligent Transport
                        Systems and transport infrastructure cooperation in Taiwan.
                        The glossary includes Traditional Chinese, Hanyu Pinyin and
                        notes on Taiwan-specific terminology where useful.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="overflow-x-auto border border-base-300 rounded-box">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>English</th>
                                    <th>繁體中文</th>
                                    <th>Pinyin</th>
                                    <th>Audio</th>
                                    <th>Usage note</th>
                                </tr>
                            </thead>

                            <tbody>
                                {TERMS.map((term) => (
                                    <tr key={term.en}>
                                        <td className="font-medium">{term.en}</td>
                                        <td className="text-lg">{term.zh}</td>
                                        <td>{term.pinyin}</td>
                                        <td className="opacity-50 whitespace-nowrap">
                                            {term.audio}
                                        </td>
                                        <td className="max-w-xs opacity-80">
                                            {term.note || "—"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-10 space-y-4 text-sm opacity-70 max-w-4xl">
                        <p>
                            Terminology is based where possible on official Taiwanese
                            transport-sector sources and common professional usage.
                            International acronyms and product or standard names are
                            retained where appropriate.
                        </p>

                        <p>
                            This glossary is intended as a practical reference and
                            language-learning aid, not as an official translation
                            standard.
                        </p>
                    </div>

                    <div className="mt-10 pt-8 border-t border-base-300 max-w-4xl">
                        <h2 className="text-xl font-semibold">
                            References
                        </h2>

                        <p className="mt-3 opacity-80">
                            Selected terminology has been cross-checked against official
                            Taiwanese transport-sector sources.
                        </p>

                        <ul className="mt-4 space-y-2 list-disc list-inside opacity-80">
                            <li>
                                <a
                                    href="https://www.iot.gov.tw/zh_tw/biling"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link link-hover"
                                >
                                    Institute of Transportation, Ministry of Transportation and Communications
                                    — Bilingual Terminology
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.freeway.gov.tw/Publish.aspx?cnid=3808&p=79"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link link-hover"
                                >
                                    Freeway Bureau — Traffic Control Systems and Information Changeable Message Signs
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-10 pt-8 border-t border-base-300 max-w-4xl">
                        <h2 className="text-xl font-semibold">
                            Corrections and comments
                        </h2>

                        <p className="mt-3 opacity-80">
                            If you find an error, have a terminology suggestion or
                            would like to comment on this resource, please contact us
                            at{" "}
                            <a
                                href="mailto:info@roadminded.com"
                                className="link link-hover"
                            >
                                info@roadminded.com
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}