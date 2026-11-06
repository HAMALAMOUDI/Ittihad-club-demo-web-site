/*
  Volta — site content (Arabic + English).
  Edit text here; app.js renders it into the page.
  Facts sourced from Wikipedia, Saudipedia, footballhistory.org and Guinness World Records (see README.md).
*/
window.VOLTA_CONTENT = {
  ar: {
    dir: "rtl",
    langLabel: "English",
    nav: { story: "القصة", founders: "المؤسسون", timeline: "المسيرة", homes: "الملاعب", honours: "الألقاب" },
    hero: {
      year: "١٩٢٧",
      title: "حين اتّحدت جدة",
      lead: "في السادس والعشرين من ديسمبر ١٩٢٧، اجتمع عشّاق كرة القدم في جدة واتفقوا على تأسيس فريق يجمعهم. هكذا وُلد نادي الاتحاد، أقدم نادٍ رياضي قائم في المملكة العربية السعودية.",
      cta: "اقرأ قصة التأسيس"
    },
    story: {
      title: "الاجتماع الذي صنع النادي",
      paragraphs: [
        "عُقد الاجتماع في مكاتب شركة للبث الإذاعي في جدة، وجمع نخبة من محبّي كرة القدم في المدينة. كانت الفكرة بسيطة: نادٍ يمنح أهل جدة جميعًا متعةً يتشاركونها.",
        "اختار المؤسسون اسم «الاتحاد» لأن الهدف كان أن يتّحد الجميع حول فريق واحد. وقد سبق تأسيس النادي قيامَ المملكة العربية السعودية بخمس سنوات.",
        "منذ البداية كان الأصفر والأسود لونَي النادي، ولم يتغيّرا. ويحمل شعاره الرقم واحد إشارةً إلى أنه أول الأندية السعودية تأسيسًا، ولذلك يُلقَّب بـ«العميد»."
      ],
      quoteLabel: "معنى الاسم",
      quote: "الاتحاد: الوحدة."
    },
    founders: {
      title: "من الحاضرين في الاجتماع",
      note: "من بين المؤسسين بحسب موسوعة سعوديبيديا:",
      names: [
        "حمزة فتيحي",
        "عبدالصمد نجيب السعدي",
        "إسماعيل زهران",
        "علي يماني",
        "عبدالعزيز جميل",
        "عبداللطيف جميل",
        "عبداللطيف لنجاوي"
      ]
    },
    timeline: {
      title: "المسيرة",
      items: [
        { year: "١٩٢٧", text: "تأسيس النادي في جدة يوم ٢٦ ديسمبر." },
        { year: "١٩٦٧", text: "أول لقب لكأس الملك." },
        { year: "١٩٩٧", text: "ثلاثية محلية: الدوري وكأس ولي العهد وكأس الاتحاد السعودي." },
        { year: "١٩٩٩", text: "التتويج بكأس الكؤوس الآسيوية." },
        { year: "٢٠٠٤", text: "أول لقب لدوري أبطال آسيا." },
        { year: "٢٠٠٥", text: "الاحتفاظ بلقب دوري أبطال آسيا، وهو إنجاز سجّلته موسوعة غينيس، ثم المركز الرابع في كأس العالم للأندية في اليابان." },
        { year: "٢٠١٤", text: "الانتقال إلى ملعب مدينة الملك عبدالله الرياضية في جدة." },
        { year: "٢٠٢٣", text: "لقب الدوري السعودي للمحترفين." },
        { year: "٢٠٢٥", text: "ثنائية الدوري وكأس الملك." }
      ]
    },
    homes: {
      title: "ملاعب الاتحاد",
      items: [
        { name: "مدينة الملك عبدالله الرياضية", caption: "الملعب الحالي منذ ٢٠١٤، وهو ثاني أكبر ملعب في المملكة." },
        { name: "مدينة الأمير عبدالله الفيصل الرياضية", caption: "الملعب السابق للنادي قبل ٢٠١٤." }
      ]
    },
    honours: {
      title: "في الأرقام",
      items: [
        { n: "١٤", label: "لقب دوري" },
        { n: "٦", label: "كؤوس الملك" },
        { n: "٢", label: "دوري أبطال آسيا متتاليان" },
        { n: "٠", label: "مرات الهبوط منذ التأسيس" }
      ]
    },
    footer: {
      disclaimer: "فولتا موقع معجبين غير رسمي، ولا يرتبط بنادي الاتحاد أو يمثّله.",
      creditsTitle: "الصور",
      credits: "صور الملاعب من ويكيميديا كومنز بتراخيص حرّة. اضغط على أي صورة لمعرفة صاحبها وترخيصها.",
      sourcesTitle: "المصادر"
    }
  },

  en: {
    dir: "ltr",
    langLabel: "العربية",
    nav: { story: "Story", founders: "Founders", timeline: "Timeline", homes: "Grounds", honours: "Honours" },
    hero: {
      year: "1927",
      title: "The day Jeddah united",
      lead: "On 26 December 1927, football lovers in Jeddah met and agreed to form a team that would bring them together. That team became Al-Ittihad, the oldest sports club still active in Saudi Arabia.",
      cta: "Read the founding story"
    },
    story: {
      title: "The meeting that made the club",
      paragraphs: [
        "The founders met in the offices of a radio broadcasting company in Jeddah. Their idea was simple: a club that every citizen of the city could enjoy together.",
        "They named it Al-Ittihad, “The Union”, because the point was for everyone to unite behind one team. The club was founded five years before the Kingdom of Saudi Arabia itself.",
        "Yellow and black have been its colours since the start. The crest carries the number one to mark it as the country’s first club, which is why fans call it Al-Amid, “The Dean”."
      ],
      quoteLabel: "What the name means",
      quote: "Ittihad: unity."
    },
    founders: {
      title: "Who was in the room",
      note: "Among the founders, according to Saudipedia:",
      names: [
        "Hamza Fitaihi",
        "Abdel Samad Najib Al-Saadi",
        "Ismail Zahran",
        "Ali Yamani",
        "Abdulaziz Jameel",
        "Abdullatif Jameel",
        "Abdullatif Linjawi"
      ]
    },
    timeline: {
      title: "Timeline",
      items: [
        { year: "1927", text: "The club is founded in Jeddah on 26 December." },
        { year: "1967", text: "First King’s Cup." },
        { year: "1997", text: "Domestic treble: league, Crown Prince Cup and Federation Cup." },
        { year: "1999", text: "Asian Cup Winners’ Cup." },
        { year: "2004", text: "First AFC Champions League title." },
        { year: "2005", text: "Retains the AFC Champions League, a feat recognised by Guinness World Records, then finishes fourth at the FIFA Club World Cup in Japan." },
        { year: "2014", text: "Moves to King Abdullah Sports City in Jeddah." },
        { year: "2023", text: "Saudi Pro League champions." },
        { year: "2025", text: "League and King’s Cup double." }
      ]
    },
    homes: {
      title: "Home grounds",
      items: [
        { name: "King Abdullah Sports City", caption: "Home since 2014, and the second-largest stadium in Saudi Arabia." },
        { name: "Prince Abdullah Al-Faisal Sports City", caption: "The club’s home before 2014." }
      ]
    },
    honours: {
      title: "By the numbers",
      items: [
        { n: "14", label: "League titles" },
        { n: "6", label: "King’s Cups" },
        { n: "2", label: "AFC Champions League titles in a row" },
        { n: "0", label: "Relegations since 1927" }
      ]
    },
    footer: {
      disclaimer: "Volta is an unofficial fan site. It is not affiliated with or endorsed by Al-Ittihad Club.",
      creditsTitle: "Photos",
      credits: "Stadium photos from Wikimedia Commons under free licences. Select any photo to see its author and licence.",
      sourcesTitle: "Sources"
    }
  },

  images: [
    {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/King_Abdullah_Sports_City_(Jeddah).jpg?width=1600",
      page: "https://commons.wikimedia.org/wiki/File:King_Abdullah_Sports_City_(Jeddah).jpg"
    },
    {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Prince_Abdullah_Al-Faisal_Sports_City.jpg?width=1600",
      page: "https://commons.wikimedia.org/wiki/File:Prince_Abdullah_Al-Faisal_Sports_City.jpg"
    }
  ],

  sources: [
    { title: "Wikipedia — Al-Ittihad Club (Jeddah)", url: "https://en.wikipedia.org/wiki/Al-Ittihad_Club_(Jeddah)" },
    { title: "Saudipedia — Al-Ittihad Club", url: "https://saudipedia.com/en/article/1042/society/al-ittihad-club" },
    { title: "Saudipedia — Establishment of Al-Ittihad", url: "https://saudipedia.com/en/al-ittihad-club" },
    { title: "Football History — Al-Ittihad", url: "https://footballhistory.org/club/al-ittihad.html" },
    { title: "Guinness World Records — back-to-back AFC titles", url: "https://www.guinnessworldrecords.com/news/2015/5/al-ittihad-football-club-recognised-by-guinness-world-records-for-back-to-back-af-379683" }
  ]
};
