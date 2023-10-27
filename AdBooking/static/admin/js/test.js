/* eslint-disable */
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).mobiscroll = {})
}(this, (function (e) {
    "use strict";
    var t = {apiKey: "883e4cb7", apiUrl: "https://trial.mobiscroll.com/"},
        n = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg>',
        a = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"/></svg>',
        s = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/></svg>',
        i = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"/></svg>',
        r = '<svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 17 17" width="17"><path d="M8.5 0a8.5 8.5 0 110 17 8.5 8.5 0 010-17zm3.364 5.005a.7.7 0 00-.99 0l-2.44 2.44-2.439-2.44-.087-.074a.7.7 0 00-.903 1.064l2.44 2.439-2.44 2.44-.074.087a.7.7 0 001.064.903l2.439-2.441 2.44 2.441.087.074a.7.7 0 00.903-1.064l-2.441-2.44 2.441-2.439.074-.087a.7.7 0 00-.074-.903z" fill="currentColor" fill-rule="evenodd"/></svg>',
        o = function (e, t) {
            return o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }, o(e, t)
        };

    function l(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }

    var c = function () {
        return c = Object.assign || function (e) {
            for (var t, n = 1, a = arguments.length; n < a; n++) for (var s in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            return e
        }, c.apply(this, arguments)
    };

    function d(e, t) {
        var n = {};
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var s = 0;
            for (a = Object.getOwnPropertySymbols(e); s < a.length; s++) t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[s]) && (n[a[s]] = e[a[s]])
        }
        return n
    }

    var h, u, m = function () {
            function e() {
                this.nr = 0, this.keys = 1, this.subscribers = {}
            }

            return e.prototype.subscribe = function (e) {
                var t = this.keys++;
                return this.subscribers[t] = e, this.nr++, t
            }, e.prototype.unsubscribe = function (e) {
                this.nr--, delete this.subscribers[e]
            }, e.prototype.next = function (e) {
                for (var t = this.subscribers, n = 0, a = Object.keys(t); n < a.length; n++) {
                    var s = a[n];
                    t[s] && t[s](e)
                }
            }, e
        }(), _ = [], p = !1, v = "undefined" != typeof window,
        f = v && window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)"),
        g = v ? navigator.userAgent : "", y = v ? navigator.platform : "", b = v ? navigator.maxTouchPoints : 0,
        x = g && g.match(/Android|iPhone|iPad|iPod|Windows Phone|Windows|MSIE/i), D = g && /Safari/.test(g);
    /Android/i.test(x) ? (h = "android", u = g.match(/Android\s+([\d.]+)/i), p = !0, u && (_ = u[0].replace("Android ", "").split("."))) : /iPhone|iPad|iPod/i.test(x) || /iPhone|iPad|iPod/i.test(y) || "MacIntel" === y && b > 1 ? (h = "ios", u = g.match(/OS\s+([\d_]+)/i), p = !0, u && (_ = u[0].replace(/_/g, ".").replace("OS ", "").split("."))) : /Windows Phone/i.test(x) ? (h = "wp", p = !0) : /Windows|MSIE/i.test(x) && (h = "windows");
    var T = +_[0], S = +_[1], C = {}, w = {}, k = {}, M = {}, E = new m;

    function N() {
        var e = "", t = "", n = "";
        for (var a in t = "android" === h ? "material" : "wp" === h || "windows" === h ? "windows" : "ios", k) {
            if (k[a].baseTheme === t && !1 !== k[a].auto && a !== t + "-dark") {
                e = a;
                break
            }
            a === t ? e = a : n || (n = a)
        }
        return e || n
    }

    function I(e, t, n) {
        var a = k[t];
        k[e] = c({}, a, {auto: n, baseTheme: t}), M.theme = N()
    }

    var L = {majorVersion: T, minorVersion: S, name: h}, H = {clearIcon: r, labelStyle: "inline"};
    k.ios = {
        Calendar: {nextIconH: s, nextIconV: a, prevIconH: n, prevIconV: i},
        Checkbox: {position: "end"},
        Datepicker: {clearIcon: r, display: "bottom"},
        Dropdown: H,
        Eventcalendar: {chevronIconDown: a, nextIconH: s, nextIconV: a, prevIconH: n, prevIconV: i},
        Input: H,
        Radio: {position: "end"},
        Scroller: {display: "bottom", itemHeight: 34, minWheelWidth: 55, rows: 5, scroll3d: !0},
        SegmentedGroup: {drag: !0},
        Select: {clearIcon: r},
        Textarea: H
    }, I("ios-dark", "ios");
    var O = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        Y = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        P = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path d="M23.12 11.12L21 9l-9 9 9 9 2.12-2.12L16.24 18z"/></svg>',
        F = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path d="M15 9l-2.12 2.12L19.76 18l-6.88 6.88L15 27l9-9z"/></svg>',
        V = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>',
        z = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>',
        R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        A = {clearIcon: V, dropdownIcon: O, inputStyle: "box", labelStyle: "floating", notch: !0, ripple: !0},
        W = "material";
    k.material = {
        Button: {ripple: !0},
        Calendar: {downIcon: O, nextIconH: F, nextIconV: z, prevIconH: P, prevIconV: R, upIcon: Y},
        Datepicker: {clearIcon: V, display: "center"},
        Dropdown: A,
        Eventcalendar: {
            chevronIconDown: z,
            colorEventList: !0,
            downIcon: O,
            nextIconH: F,
            nextIconV: z,
            prevIconH: P,
            prevIconV: R,
            upIcon: Y
        },
        Input: A,
        ListItem: {ripple: !0},
        Scroller: {display: "center", rows: 3},
        Select: {clearIcon: V, rows: 3},
        Textarea: A
    }, I("material-dark", W);
    var U = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M4.22 10.78l-1.44 1.44 12.5 12.5.72.686.72-.687 12.5-12.5-1.44-1.44L16 22.564 4.22 10.78z"/></svg>',
        B = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19.03 4.28l-11 11-.686.72.687.72 11 11 1.44-1.44L10.187 16l10.28-10.28-1.437-1.44z"/></svg>',
        j = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M12.97 4.28l-1.44 1.44L21.814 16 11.53 26.28l1.44 1.44 11-11 .686-.72-.687-.72-11-11z"/></svg>',
        K = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 6.594l-.72.687-12.5 12.5 1.44 1.44L16 9.437l11.78 11.78 1.44-1.437-12.5-12.5-.72-.686z"/></svg>',
        X = "mobiscroll";
    k.mobiscroll = {
        Calendar: {nextIconH: j, nextIconV: U, prevIconH: B, prevIconV: K},
        Eventcalendar: {nextIconH: j, nextIconV: U, prevIconH: B, prevIconV: K},
        Input: {notch: !0, ripple: !0}
    }, I("mobiscroll-dark", X);
    var J = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M15 4v20.063L8.22 17.28l-1.44 1.44 8.5 8.5.72.686.72-.687 8.5-8.5-1.44-1.44L17 24.063V4h-2z"/></svg>',
        q = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 4.094l-.72.687-8.5 8.5 1.44 1.44L15 7.936V28h2V7.937l6.78 6.782 1.44-1.44-8.5-8.5-.72-.686z"/></svg>',
        G = '<svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"/></svg>',
        Z = {clearIcon: G, inputStyle: "box", labelStyle: "stacked"}, Q = "windows";
    k.windows = {
        Calendar: {nextIconH: j, nextIconV: J, prevIconH: B, prevIconV: q},
        Checkbox: {position: "start"},
        Datepicker: {clearIcon: G, display: "center"},
        Dropdown: Z,
        Eventcalendar: {chevronIconDown: U, nextIconH: j, nextIconV: J, prevIconH: B, prevIconV: q},
        Input: Z,
        Scroller: {display: "center", itemHeight: 44, minWheelWidth: 88, rows: 6},
        Select: {clearIcon: G, rows: 6},
        Textarea: Z
    }, I("windows-dark", Q), M.theme = N();
    var $ = {
        rtl: !0,
        setText: "تعيين",
        cancelText: "إلغاء",
        clearText: "مسح",
        closeText: "إغلاق",
        selectedText: "{count} المحدد",
        dateFormat: "DD/MM/YYYY",
        dateFormatLong: "DDD. D MMM YYYY",
        dateWheelFormat: "|DDD D MMM|",
        dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
        dayNamesShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
        dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
        fromText: "يبدا",
        monthNames: ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
        monthNamesShort: ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
        amText: "ص",
        pmText: "م",
        timeFormat: "hh:mm A",
        timeWheels: "Ammhh",
        toText: "ينتهي",
        nowText: "الآن",
        firstDay: 0,
        dateText: "تاريخ",
        timeText: "وقت",
        todayText: "اليوم",
        allDayText: "اليوم كله",
        noEventsText: "لا توجد احداث",
        eventText: "الحدث",
        eventsText: "أحداث",
        moreEventsText: "واحد آخر",
        moreEventsPluralText: "اثنان آخران {count}",
        weekText: "أسبوع {count}",
        rangeEndHelp: "أختر",
        rangeEndLabel: "ينتهي",
        rangeStartHelp: "أختر",
        rangeStartLabel: "يبدا",
        filterEmptyText: "لا نتيجة",
        filterPlaceholderText: "بحث"
    }, ee = {
        setText: "Задаване",
        cancelText: "Отмяна",
        clearText: "Изчистване",
        closeText: "затвори",
        selectedText: "{count} подбран",
        dateFormat: "DD.MM.YYYY",
        dateFormatLong: "DDD, D MMMM YYYY",
        dateWheelFormat: "|DDD MM.DD|",
        dayNames: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
        dayNamesShort: ["Нед", "Пон", "Вто", "Сря", "Чет", "Пет", "Съб"],
        dayNamesMin: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Съ"],
        fromText: "ОТ",
        monthNames: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
        monthNamesShort: ["Яну", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Нов", "Дек"],
        timeFormat: "H:mm",
        toText: "ДО",
        nowText: "Сега",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Дата",
        timeText: "път",
        todayText: "днес",
        eventText: "Събитие",
        eventsText: "Събития",
        allDayText: "Цял ден",
        noEventsText: "Няма събития",
        moreEventsText: "Още {count}",
        weekText: "Седмица {count}",
        rangeStartLabel: "ОТ",
        rangeEndLabel: "ДО",
        rangeStartHelp: "Избирам",
        rangeEndHelp: "Избирам",
        filterEmptyText: "Без резултат",
        filterPlaceholderText: "Търсене"
    }, te = {
        setText: "Acceptar",
        cancelText: "Cancel·lar",
        clearText: "Esborrar",
        closeText: "Tancar",
        selectedText: "{count} seleccionat",
        selectedPluralText: "{count} seleccionats",
        dateFormat: "DD/MM/YYYY",
        dateFormatLong: "DDD, D MMM YYYY",
        dateWheelFormat: "|DDD D MMM|",
        dayNames: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
        dayNamesShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
        dayNamesMin: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
        fromText: "Iniciar",
        monthNames: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
        monthNamesShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
        timeFormat: "H:mm",
        toText: "Final",
        nowText: "Ara",
        pmText: "pm",
        amText: "am",
        todayText: "Avui",
        firstDay: 1,
        dateText: "Data",
        timeText: "Temps",
        allDayText: "Tot el dia",
        noEventsText: "Cap esdeveniment",
        eventText: "Esdeveniments",
        eventsText: "Esdeveniments",
        moreEventsText: "{count} més",
        weekText: "Setmana {count}",
        rangeStartLabel: "Iniciar",
        rangeEndLabel: "Final",
        rangeStartHelp: "Seleccionar",
        rangeEndHelp: "Seleccionar",
        filterEmptyText: "Cap resultat",
        filterPlaceholderText: "Buscar"
    }, ne = {
        setText: "Zadej",
        cancelText: "Storno",
        clearText: "Vymazat",
        closeText: "Zavřít",
        selectedText: "Označený: {count}",
        dateFormat: "DD.MM.YYYY",
        dateFormatLong: "DDD, D.M.YYYY",
        dateWheelFormat: "|DDD D. M.|",
        dayNames: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
        dayNamesShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
        dayNamesMin: ["N", "P", "Ú", "S", "Č", "P", "S"],
        fromText: "Začátek",
        monthNames: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
        monthNamesShort: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čer", "Čvc", "Spr", "Zář", "Říj", "Lis", "Pro"],
        timeFormat: "H:mm",
        toText: "Konec",
        nowText: "Teď",
        amText: "am",
        pmText: "pm",
        todayText: "Dnes",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Čas",
        allDayText: "Celý den",
        noEventsText: "Žádné události",
        eventText: "Událostí",
        eventsText: "Události",
        moreEventsText: "{count} další",
        weekText: "{count}. týden",
        rangeStartLabel: "Začátek",
        rangeEndLabel: "Konec",
        rangeStartHelp: "Vybrat",
        rangeEndHelp: "Vybrat",
        filterEmptyText: "Žádné výsledky",
        filterPlaceholderText: "Hledat"
    }, ae = {
        setText: "Sæt",
        cancelText: "Annuller",
        clearText: "Ryd",
        closeText: "Luk",
        selectedText: "{count} valgt",
        selectedPluralText: "{count} valgt",
        dateFormat: "DD/MM/YYY",
        dateFormatLong: "DDD. D. MMM. YYYY.",
        dateWheelFormat: "|DDD. D. MMM.|",
        dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
        dayNamesShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
        dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
        fromText: "Start",
        monthNames: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        amText: "am",
        pmText: "pm",
        timeFormat: "HH.mm",
        toText: "Slut",
        nowText: "Nu",
        todayText: "I dag",
        firstDay: 1,
        dateText: "Dato",
        timeText: "Tid",
        allDayText: "Hele dagen",
        noEventsText: "Ingen begivenheder",
        eventText: "Begivenheder",
        eventsText: "Begivenheder",
        moreEventsText: "{count} mere",
        weekText: "Uge {count}",
        rangeStartLabel: "Start",
        rangeEndLabel: "Slut",
        rangeStartHelp: "Vælg",
        rangeEndHelp: "Vælg",
        filterEmptyText: "Ingen resultater",
        filterPlaceholderText: "Søg"
    }, se = {
        setText: "OK",
        cancelText: "Abbrechen",
        clearText: "Löschen",
        closeText: "Schließen",
        selectedText: "{count} ausgewählt",
        dateFormat: "DD.MM.YYYY",
        dateFormatLong: "DDD. D. MMM. YYYY.",
        dateWheelFormat: "|DDD. D. MMM.|",
        dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        dayNamesMin: ["S", "M", "D", "M", "D", "F", "S"],
        fromText: "Von",
        monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
        monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
        timeFormat: "HH:mm",
        nowText: "Jetzt",
        pmText: "pm",
        amText: "am",
        todayText: "Heute",
        toText: "Bis",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Zeit",
        allDayText: "Ganztägig",
        noEventsText: "Keine Ereignisse",
        eventText: "Ereignis",
        eventsText: "Ereignisse",
        moreEventsText: "{count} weiteres Element",
        moreEventsPluralText: "{count} weitere Elemente",
        weekText: "Woche {count}",
        rangeStartLabel: "Von",
        rangeEndLabel: "Bis",
        rangeStartHelp: "Auswählen",
        rangeEndHelp: "Auswählen",
        filterEmptyText: "Keine Treffer",
        filterPlaceholderText: "Suchen"
    }, ie = {
        setText: "Ορισμος",
        cancelText: "Ακυρωση",
        clearText: "Διαγραφη",
        closeText: "Κλείσιμο",
        selectedText: "{count} επιλεγμένα",
        dateFormat: "DD/MM/YYYY",
        dateFormatLong: "DDD, D MMM YYYY",
        dateWheelFormat: "|DDD D MMM|",
        dayNames: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
        dayNamesShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
        dayNamesMin: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"],
        fromText: "Αρχή",
        monthNames: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
        monthNamesShort: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
        timeFormat: "H:mm",
        toText: "Τέλος",
        nowText: "τώρα",
        pmText: "μμ",
        amText: "πμ",
        firstDay: 1,
        dateText: "Ημερομηνία",
        timeText: "φορά",
        todayText: "Σήμερα",
        eventText: "Γεγονότα",
        eventsText: "Γεγονότα",
        allDayText: "Ολοήμερο",
        noEventsText: "Δεν υπάρχουν γεγονότα",
        moreEventsText: "{count} ακόμη",
        weekText: "Εβδομάδα {count}",
        rangeStartLabel: "Αρχή",
        rangeEndLabel: "Τέλος",
        rangeStartHelp: "Επιλογή",
        rangeEndHelp: "Επιλογή",
        filterEmptyText: "Κανένα αποτέλεσμα",
        filterPlaceholderText: "Αναζήτηση"
    }, re = {dateFormat: "DD/MM/YYYY", dateWheelFormat: "|DDD D MMM|", timeFormat: "H:mm"}, oe = {
        setText: "Aceptar",
        cancelText: "Cancelar",
        clearText: "Borrar",
        closeText: "Cerrar",
        selectedText: "{count} seleccionado",
        selectedPluralText: "{count} seleccionados",
        dateFormat: "DD/MM/YYYY",
        dateFormatLong: "DDD, MMM. D. YYYY",
        dateWheelFormat: "|DDD D MMM|",
        dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        dayNamesShort: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
        dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
        fromText: "Iniciar",
        monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        timeFormat: "H:mm",
        toText: "Final",
        nowText: "Ahora",
        pmText: "pm",
        amText: "am",
        todayText: "Hoy",
        firstDay: 1,
        dateText: "Fecha",
        timeText: "Tiempo",
        allDayText: "Todo el día",
        noEventsText: "No hay eventos",
        eventText: "Evento",
        eventsText: "Eventos",
        moreEventsText: "{count} más",
        weekText: "Semana {count}",
        rangeStartLabel: "Iniciar",
        rangeEndLabel: "Final",
        rangeStartHelp: "Seleccionar",
        rangeEndHelp: "Seleccionar",
        filterEmptyText: "Sin resultados",
        filterPlaceholderText: "Buscar"
    }, le = void 0, ce = xe(3), de = xe(4), he = xe(7);

    function ue(e, t, n) {
        return Math.max(t, Math.min(e, n))
    }

    function me(e) {
        return Array.isArray(e)
    }

    function _e(e) {
        return e - parseFloat(e) >= 0
    }

    function pe(e) {
        return "number" == typeof e
    }

    function ve(e) {
        return "string" == typeof e
    }

    function fe(e) {
        return e === le || null === e || "" === e
    }

    function ge(e) {
        return void 0 === e
    }

    function ye(e) {
        return "object" == typeof e
    }

    function be(e) {
        return null !== e && e !== le && "" + e != "false"
    }

    function xe(e) {
        return Array.apply(0, Array(Math.max(0, e)))
    }

    function De(e) {
        return e !== le ? e + (_e(e) ? "px" : "") : ""
    }

    function Te() {
    }

    function Se(e, t) {
        void 0 === t && (t = 2);
        for (var n = e + ""; n.length < t;) n = "0" + n;
        return n
    }

    function Ce(e) {
        return Math.round(e)
    }

    function we(e, t) {
        return ke(e / t) * t
    }

    function ke(e) {
        return Math.floor(e)
    }

    function Me(e, t) {
        var n, a;
        return void 0 === t && (t = 100), function () {
            for (var s = [], i = 0; i < arguments.length; i++) s[i] = arguments[i];
            var r = +new Date;
            n && r < n + t ? (clearTimeout(a), a = setTimeout((function () {
                n = r, e.apply(void 0, s)
            }), t)) : (n = r, e.apply(void 0, s))
        }
    }

    function Ee(e, t) {
        var n;
        return void 0 === t && (t = 100), function () {
            for (var a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
            clearTimeout(n), n = setTimeout((function () {
                e.apply(void 0, a)
            }), t)
        }
    }

    function Ne(e, t) {
        if (e === t) return !0;
        if (e && !t || t && !e) return !1;
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0
    }

    function Ie(e, t) {
        e._cdr ? setTimeout(t) : t()
    }

    function Le(e, t) {
        return Oe(e, t)
    }

    function He(e, t) {
        return Oe(e, t, !0)
    }

    function Oe(e, t, n) {
        for (var a = e.length, s = 0; s < a; s++) {
            var i = e[s];
            if (t(i, s)) return n ? s : i
        }
        return n ? -1 : le
    }

    function Ye(e, t) {
        return me(e) ? e.map(t) : t(e, 0, [e])
    }

    function Pe(e) {
        var t = [];
        if (e) for (var n = 0, a = Object.keys(e); n < a.length; n++) {
            var s = a[n];
            t.push(e[s])
        }
        return t
    }

    xe(24);
    var Fe = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Ve = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];

    function ze(e, t, n) {
        var a, s = e - 1600, i = t - 1, r = n - 1,
            o = 365 * s + ke((s + 3) / 4) - ke((s + 99) / 100) + ke((s + 399) / 400);
        for (a = 0; a < i; ++a) o += Fe[a];
        i > 1 && (s % 4 == 0 && s % 100 != 0 || s % 400 == 0) && ++o;
        var l = (o += r) - 79, c = 979 + 33 * ke(l / 12053) + 4 * ke((l %= 12053) / 1461);
        for ((l %= 1461) >= 366 && (c += ke((l - 1) / 365), l = (l - 1) % 365), a = 0; a < 11 && l >= Ve[a]; ++a) l -= Ve[a];
        return [c, a + 1, l + 1]
    }

    var Re = {
        getYear: function (e) {
            return ze(e.getFullYear(), e.getMonth() + 1, e.getDate())[0]
        }, getMonth: function (e) {
            return --ze(e.getFullYear(), e.getMonth() + 1, e.getDate())[1]
        }, getDay: function (e) {
            return ze(e.getFullYear(), e.getMonth() + 1, e.getDate())[2]
        }, getDate: function (e, t, n, a, s, i, r) {
            t < 0 && (e += ke(t / 12), t = t % 12 ? 12 + t % 12 : 0), t > 11 && (e += ke(t / 12), t %= 12);
            var o = function (e, t, n) {
                var a, s = e - 979, i = t - 1, r = n - 1, o = 365 * s + 8 * ke(s / 33) + ke((s % 33 + 3) / 4);
                for (a = 0; a < i; ++a) o += Ve[a];
                var l = (o += r) + 79, c = 1600 + 400 * ke(l / 146097), d = !0;
                for ((l %= 146097) >= 36525 && (c += 100 * ke(--l / 36524), (l %= 36524) >= 365 ? l++ : d = !1), c += 4 * ke(l / 1461), (l %= 1461) >= 366 && (d = !1, c += ke(--l / 365), l %= 365), a = 0; l >= Fe[a] + (1 === a && d ? 1 : 0); a++) l -= Fe[a] + (1 === a && d ? 1 : 0);
                return [c, a + 1, l + 1]
            }(e, +t + 1, n);
            return new Date(o[0], o[1] - 1, o[2], a || 0, s || 0, i || 0, r || 0)
        }, getMaxDayOfMonth: function (e, t) {
            var n, a, s, i = 31;
            for (t < 0 && (e += ke(t / 12), t = t % 12 ? 12 + t % 12 : 0), t > 11 && (e += ke(t / 12), t %= 12); a = t + 1, s = i, ((n = e) < 0 || n > 32767 || a < 1 || a > 12 || s < 1 || s > Ve[a - 1] + (12 === a && (n - 979) % 33 % 4 == 0 ? 1 : 0)) && i > 29;) i--;
            return i
        }
    }, Ae = {
        setText: "تاييد",
        cancelText: "انصراف",
        clearText: "واضح ",
        closeText: "نزدیک",
        selectedText: "{count} منتخب",
        rtl: !0,
        calendarSystem: Re,
        dateFormat: "YYYY/MM/DD",
        dateFormatLong: "DDD D MMM YYYY",
        dateWheelFormat: "|DDDD MMM D|",
        dayNames: ["يکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"],
        dayNamesShort: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
        dayNamesMin: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
        fromText: "شروع ",
        monthNames: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        monthNamesShort: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        timeFormat: "HH:mm",
        timeWheels: "mmHH",
        toText: "پایان",
        nowText: "اکنون",
        amText: "ب",
        pmText: "ص",
        todayText: "امروز",
        firstDay: 6,
        dateText: "تاریخ ",
        timeText: "زمان ",
        allDayText: "تمام روز",
        noEventsText: "هیچ رویداد",
        eventText: "رویداد",
        eventsText: "رویدادها",
        moreEventsText: "{count} مورد دیگر",
        weekText: "{count} هفته",
        rangeStartLabel: "شروع ",
        rangeEndLabel: "پایان",
        rangeStartHelp: "انتخاب کنید",
        rangeEndHelp: "انتخاب کنید",
        filterEmptyText: "نتیجه ای ندارد",
        filterPlaceholderText: "جستجو کردن"
    }, We = {
        setText: "Aseta",
        cancelText: "Peruuta",
        clearText: "Tyhjennä",
        closeText: "Sulje",
        selectedText: "{count} valita",
        dateFormat: "D. MMMM YYYY",
        dateFormatLong: "DDD, D. MMMM, YYYY",
        dateWheelFormat: "|DDD D. M.|",
        dayNames: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviiko", "Torstai", "Perjantai", "Lauantai"],
        dayNamesShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
        dayNamesMin: ["S", "M", "T", "K", "T", "P", "L"],
        fromText: "Alkaa",
        monthNames: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
        monthNamesShort: ["Tam", "Hel", "Maa", "Huh", "Tou", "Kes", "Hei", "Elo", "Syy", "Lok", "Mar", "Jou"],
        timeFormat: "H:mm",
        toText: "Päättyy",
        nowText: "Nyt",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Päiväys",
        timeText: "Aika",
        todayText: "Tänään",
        eventText: "Tapahtumia",
        eventsText: "Tapahtumia",
        allDayText: "Koko päivä",
        noEventsText: "Ei tapahtumia",
        moreEventsText: "{count} muu",
        moreEventsPluralText: "{count} muuta",
        weekText: "Viikko {count}",
        rangeStartLabel: "Alkaa",
        rangeEndLabel: "Päättyy",
        rangeStartHelp: "Valitse",
        rangeEndHelp: "Valitse",
        filterEmptyText: "Ei tuloksia",
        filterPlaceholderText: "Haku"
    }, Ue = {
        setText: "Terminer",
        cancelText: "Annuler",
        clearText: "Effacer",
        closeText: "Fermer",
        selectedText: "{count} sélectionné",
        selectedPluralText: "{count} sélectionnés",
        dateFormat: "DD/MM/YYYY",
        dateFormatLong: "DDD D MMM YYYY",
        dateWheelFormat: "|DDD D MMM|",
        dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
        dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
        dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
        fromText: "Démarrer",
        monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        monthNamesShort: ["Janv.", "Févr.", "Mars", "Avril", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."],
        timeFormat: "HH:mm",
        toText: "Fin",
        nowText: "Maintenant",
        pmText: "pm",
        amText: "am",
        todayText: "Aujourd'hui",
        firstDay: 1,
        dateText: "Date",
        timeText: "Heure",
        allDayText: "Toute la journée",
        noEventsText: "Aucun événement",
        eventText: "Événement",
        eventsText: "Événements",
        moreEventsText: "{count} autre",
        moreEventsPluralText: "{count} autres",
        weekText: "Semaine {count}",
        rangeStartLabel: "Démarrer",
        rangeEndLabel: "Fin",
        rangeStartHelp: "Choisir",
        rangeEndHelp: "Choisir",
        filterEmptyText: "Aucun résultat",
        filterPlaceholderText: "Rechercher"
    }, Be = {
        rtl: !0,
        setText: "שמירה",
        cancelText: "ביטול",
        clearText: "נקה",
        closeText: "סגירה",
        selectedText: "{count} נבחר",
        selectedPluralText: "{count} נבחרו",
        dateFormat: "DD/MM/YYYY",
        dateFormatLong: "DDD, D בMMM YYYY",
        dateWheelFormat: "|DDD D MMM|",
        dayNames: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
        dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"],
        dayNamesMin: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
        fromText: "התחלה",
        monthNames: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
        monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
        amText: "am",
        pmText: "pm",
        timeFormat: "H:mm",
        timeWheels: "mmH",
        toText: "סיום",
        nowText: "עכשיו",
        firstDay: 0,
        dateText: "תאריך",
        timeText: "זמן",
        todayText: "היום",
        allDayText: "כל היום",
        noEventsText: "אין אירועים",
        eventText: "מִקרֶה",
        eventsText: "מִקרֶה",
        moreEventsText: "אירוע אחד נוסף",
        moreEventsPluralText: "{count} אירועים נוספים",
        weekText: "{count} שבוע",
        rangeStartLabel: "התחלה",
        rangeEndLabel: "סיום",
        rangeStartHelp: "בחר",
        rangeEndHelp: "בחר",
        filterEmptyText: "אין תוצאוה",
        filterPlaceholderText: "לחפש"
    }, je = {
        setText: "सैट करें",
        cancelText: "रद्द करें",
        clearText: "साफ़ को",
        closeText: "बंद",
        selectedText: "{count} चयनित",
        dateFormat: "DD/MM/YYYY",
        dateFormatLong: "DDD, D MMM YYYY",
        dateWheelFormat: "|DDD D MMM|",
        dayNames: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
        dayNamesShort: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
        dayNamesMin: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
        fromText: "से",
        monthNames: ["जनवरी ", "फरवरी", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अगस्त ", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"],
        monthNamesShort: ["जन", "फर", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अग", "सित", "अक्ट", "नव", "दि"],
        timeFormat: "H:mm",
        toText: "तक",
        nowText: "अब",
        pmText: "अपराह्न",
        amText: "पूर्वाह्न",
        firstDay: 1,
        dateText: "तिथि",
        timeText: "समय",
        todayText: "आज",
        eventText: "इवेट३",
        eventsText: "इवेट३",
        allDayText: "पूरे दिन",
        noEventsText: "Ei tapahtumia",
        moreEventsText: "{count} और",
        weekText: "सप्ताह {count}",
        rangeStartLabel: "से",
        rangeEndLabel: "तक",
        rangeStartHelp: "चुनें",
        rangeEndHelp: "चुनें",
        filterEmptyText: "कोई परिणाम नही",
        filterPlaceholderText: "खोज"
    }, Ke = {
        setText: "Postavi",
        cancelText: "Izlaz",
        clearText: "Izbriši",
        closeText: "Zatvori",
        selectedText: "{count} odabran",
        dateFormat: "DD.MM.YYYY",
        dateFormatLong: "DDD, D. MMM. YYYY.",
        dateWheelFormat: "|DDD D MMM|",
        dayNames: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
        dayNamesShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
        dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
        fromText: "Počinje",
        monthNames: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
        monthNamesShort: ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
        timeFormat: "H:mm",
        toText: "Završava",
        nowText: "Sada",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Vrijeme",
        todayText: "Danas",
        eventText: "Događaj",
        eventsText: "događaja",
        allDayText: "Cijeli dan",
        noEventsText: "Bez događaja",
        moreEventsText: "Još {count}",
        weekText: "{count}. tjedan",
        rangeStartLabel: "Počinje",
        rangeEndLabel: "Završava",
        rangeStartHelp: "Odaberite",
        rangeEndHelp: "Odaberite",
        filterEmptyText: "Bez rezultata",
        filterPlaceholderText: "Traži"
    }, Xe = {
        setText: "OK",
        cancelText: "Mégse",
        clearText: "Törlés",
        closeText: "Bezár",
        selectedText: "{count} kiválasztva",
        dateFormat: "YYYY.MM.DD.",
        dateFormatLong: "YYYY. MMM. D., DDD",
        dateWheelFormat: "|MMM. D. DDD|",
        dayNames: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
        dayNamesShort: ["Va", "Hé", "Ke", "Sze", "Csü", "Pé", "Szo"],
        dayNamesMin: ["V", "H", "K", "Sz", "Cs", "P", "Sz"],
        fromText: "Eleje",
        monthNames: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
        timeFormat: "H:mm",
        toText: "Vége",
        nowText: "Most",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Dátum",
        timeText: "Idő",
        todayText: "Ma",
        eventText: "esemény",
        eventsText: "esemény",
        allDayText: "Egész nap",
        noEventsText: "Nincs esemény",
        moreEventsText: "{count} további",
        weekText: "{count}. hét",
        rangeStartLabel: "Eleje",
        rangeEndLabel: "Vége",
        rangeStartHelp: "Válasszon",
        rangeEndHelp: "Válasszon",
        filterEmptyText: "Nincs találat",
        filterPlaceholderText: "Keresés"
    }, Je = {
        setText: "OK",
        cancelText: "Annulla",
        clearText: "Chiarire",
        closeText: "Chiudere",
        selectedText: "{count} selezionato",
        selectedPluralText: "{count} selezionati",
        dateFormat: "DD/MM/YYYY",
        dateFormatLong: "DDD D MMM YYYY",
        dateWheelFormat: "|DDD D MMM|",
        dayNames: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
        dayNamesShort: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
        dayNamesMin: ["D", "L", "M", "M", "G", "V", "S"],
        fromText: "Inizio",
        monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
        timeFormat: "HH:mm",
        toText: "Fine",
        nowText: "Ora",
        pmText: "pm",
        amText: "am",
        todayText: "Oggi",
        firstDay: 1,
        dateText: "Data",
        timeText: "Volta",
        allDayText: "Tutto il giorno",
        noEventsText: "Nessun evento",
        eventText: "Evento",
        eventsText: "Eventi",
        moreEventsText: "{count} altro",
        moreEventsPluralText: "altri {count}",
        weekText: "Settimana {count}",
        rangeStartLabel: "Inizio",
        rangeEndLabel: "Fine",
        rangeStartHelp: "Scegli",
        rangeEndHelp: "Scegli",
        filterEmptyText: "Nessun risultato",
        filterPlaceholderText: "Cerca"
    }, qe = {
        setText: "セット",
        cancelText: "キャンセル",
        clearText: "クリア",
        closeText: "クローズ",
        selectedText: "{count} 選択",
        dateFormat: "YYYY年MM月DD日",
        dateFormatLong: "YYYY年MM月DD日",
        dateWheelFormat: "|M月D日 DDD|",
        dayNames: ["日", "月", "火", "水", "木", "金", "土"],
        dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
        dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
        fromText: "開始",
        monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        timeFormat: "H:mm",
        toText: "終わり",
        nowText: "今",
        pmText: "午後",
        amText: "午前",
        yearSuffix: "年",
        monthSuffix: "月",
        daySuffix: "日",
        todayText: "今日",
        dateText: "日付",
        timeText: "時間",
        allDayText: "終日",
        noEventsText: "イベントはありません",
        eventText: "イベント",
        eventsText: "イベント",
        moreEventsText: "他 {count} 件",
        weekText: "{count}週目",
        rangeStartLabel: "開始",
        rangeEndLabel: "終わり",
        rangeStartHelp: "選択",
        rangeEndHelp: "選択",
        filterEmptyText: "検索結果はありません",
        filterPlaceholderText: "探す"
    }, Ge = {
        setText: "설정",
        cancelText: "취소",
        clearText: "삭제",
        closeText: "닫기",
        selectedText: "{count} 선택된",
        dateFormat: "YYYY년MM월DD일",
        dateFormatLong: "YYYY년MM월DD일",
        dateWheelFormat: "|M월 D일 DDD|",
        dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
        dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
        dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
        fromText: "시작",
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        timeFormat: "H:mm",
        toText: "종료",
        nowText: "지금",
        pmText: "오후",
        amText: "오전",
        yearSuffix: "년",
        monthSuffix: "월",
        daySuffix: "일",
        firstDay: 0,
        dateText: "날짜",
        timeText: "시간",
        todayText: "오늘",
        eventText: "이벤트",
        eventsText: "이벤트",
        allDayText: "종일",
        noEventsText: "이벤트 없음",
        moreEventsText: "{count}개 더보기",
        weekText: "{count}주차",
        rangeStartLabel: "시작",
        rangeEndLabel: "종료",
        rangeStartHelp: "선택",
        rangeEndHelp: "선택",
        filterEmptyText: "결과가 없다",
        filterPlaceholderText: "찾다"
    }, Ze = {
        setText: "OK",
        cancelText: "Atšaukti",
        clearText: "Išvalyti",
        closeText: "Uždaryti",
        selectedText: "Pasirinktas {count}",
        selectedPluralText: "Pasirinkti {count}",
        dateFormat: "YYYY-MM-DD",
        dateFormatLong: "YYYY-MM-DD",
        dateWheelFormat: "|MM-DD DDD|",
        dayNames: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"],
        dayNamesShort: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
        dayNamesMin: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
        fromText: "Nuo",
        monthNames: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"],
        monthNamesShort: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gruo"],
        amText: "am",
        pmText: "pm",
        timeFormat: "HH:mm",
        toText: "Iki",
        nowText: "Dabar",
        todayText: "Šiandien",
        firstDay: 1,
        dateText: "Data",
        timeText: "Laikas",
        allDayText: "Visą dieną",
        noEventsText: "Nėra įvykių",
        eventText: "Įvykių",
        eventsText: "Įvykiai",
        moreEventsText: "Dar {count}",
        weekText: "{count} savaitė",
        rangeStartLabel: "Nuo",
        rangeEndLabel: "Iki",
        rangeStartHelp: "Pasirinkti",
        rangeEndHelp: "Pasirinkti",
        filterEmptyText: "Nėra rezultatų",
        filterPlaceholderText: "Paieška"
    }, Qe = {
        setText: "Instellen",
        cancelText: "Annuleren",
        clearText: "Leegmaken",
        closeText: "Sluiten",
        selectedText: "{count} gekozen",
        dateFormat: "DD-MM-YYYY",
        dateFormatLong: "DD-MM-YYYY",
        dateWheelFormat: "|DDD D MMM|",
        dayNames: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
        dayNamesShort: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
        dayNamesMin: ["Z", "M", "D", "W", "D", "V", "Z"],
        fromText: "Start",
        monthNames: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        timeFormat: "HH:mm",
        toText: "Einde",
        nowText: "Nu",
        pmText: "pm",
        amText: "am",
        todayText: "Vandaag",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Tijd",
        allDayText: "Hele dag",
        noEventsText: "Geen activiteiten",
        eventText: "Activiteit",
        eventsText: "Activiteiten",
        moreEventsText: "nog {count}",
        weekText: "Week {count}",
        rangeStartLabel: "Start",
        rangeEndLabel: "Einde",
        rangeStartHelp: "Kies",
        rangeEndHelp: "Kies",
        filterEmptyText: "Niets gevonden",
        filterPlaceholderText: "Zoek"
    }, $e = {
        setText: "OK",
        cancelText: "Avbryt",
        clearText: "Tømme",
        closeText: "Lukk",
        selectedText: "{count} valgt",
        dateFormat: "DD.MM.YYY",
        dateFormatLong: "DDD. D. MMM. YYYY",
        dateWheelFormat: "|DDD. D. MMM.|",
        dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
        dayNamesShort: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
        dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
        fromText: "Start",
        monthNames: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
        timeFormat: "HH:mm",
        toText: "End",
        nowText: "Nå",
        pmText: "pm",
        amText: "am",
        todayText: "I dag",
        firstDay: 1,
        dateText: "Dato",
        timeText: "Tid",
        allDayText: "Hele dagen",
        noEventsText: "Ingen hendelser",
        eventText: "Hendelse",
        eventsText: "Hendelser",
        moreEventsText: "{count} mere",
        weekText: "Uke {count}",
        rangeStartLabel: "Start",
        rangeEndLabel: "End",
        rangeStartHelp: "Velg",
        rangeEndHelp: "Velg",
        filterEmptyText: "Ingen treff",
        filterPlaceholderText: "Søk"
    }, et = {
        setText: "Zestaw",
        cancelText: "Anuluj",
        clearText: "Oczyścić",
        closeText: "Zakończenie",
        selectedText: "Wybór: {count}",
        dateFormat: "YYYY-MM-DD",
        dateFormatLong: "DDD, D MMM YYYY",
        dateWheelFormat: "|DDD D.MM|",
        dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
        dayNamesShort: ["Nie.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
        dayNamesMin: ["N", "P", "W", "Ś", "C", "P", "S"],
        fromText: "Rozpoczęcie",
        monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
        monthNamesShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
        timeFormat: "HH:mm",
        toText: "Koniec",
        nowText: "Teraz",
        amText: "am",
        pmText: "pm",
        todayText: "Dzisiaj",
        firstDay: 1,
        dateText: "Data",
        timeText: "Czas",
        allDayText: "Cały dzień",
        noEventsText: "Brak wydarzeń",
        eventText: "Wydarzeń",
        eventsText: "Wydarzenia",
        moreEventsText: "Jeszcze {count}",
        weekText: "Tydzień {count}",
        rangeStartLabel: "Rozpoczęcie",
        rangeEndLabel: "Koniec",
        rangeStartHelp: "Wybierz",
        rangeEndHelp: "Wybierz",
        filterEmptyText: "Brak wyników",
        filterPlaceholderText: "Szukaj"
    }, tt = {
        setText: "Seleccionar",
        cancelText: "Cancelar",
        clearText: "Claro",
        closeText: "Fechar",
        selectedText: "{count} selecionado",
        selectedPluralText: "{count} selecionados",
        dateFormat: "DD-MM-YYYY",
        dateFormatLong: "DDD, D MMM, YYYY",
        dateWheelFormat: "|DDD D de MMM|",
        dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
        fromText: "Início",
        monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        timeFormat: "HH:mm",
        toText: "Fim",
        nowText: "Actualizar",
        pmText: "pm",
        amText: "am",
        todayText: "Hoje",
        firstDay: 1,
        dateText: "Data",
        timeText: "Tempo",
        allDayText: "Todo o dia",
        noEventsText: "Nenhum evento",
        eventText: "Evento",
        eventsText: "Eventos",
        moreEventsText: "Mais {count}",
        weekText: "Semana {count}",
        rangeStartLabel: "Início",
        rangeEndLabel: "Fim",
        rangeStartHelp: "Escolha",
        rangeEndHelp: "Escolha",
        filterEmptyText: "Nenhum resultado",
        filterPlaceholderText: "Pesquisa"
    }, nt = c({}, tt, {
        setText: "Selecionar",
        dateFormat: "DD/MM/YYYY",
        nowText: "Agora",
        allDayText: "Dia inteiro",
        filterPlaceholderText: "Buscar"
    }), at = {
        setText: "Setare",
        cancelText: "Anulare",
        clearText: "Ştergere",
        closeText: "Închidere",
        selectedText: "{count} selectat",
        selectedPluralText: "{count} selectate",
        dateFormat: "DD.MM.YYYY",
        dateFormatLong: "DDD., D MMM YYYY",
        dateWheelFormat: "|DDD. D MMM|",
        dayNames: ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
        dayNamesShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
        dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
        fromText: "Start",
        monthNames: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
        monthNamesShort: ["Ian.", "Feb.", "Mar.", "Apr.", "Mai", "Iun.", "Iul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
        timeFormat: "HH:mm",
        toText: "Final",
        nowText: "Acum",
        amText: "am",
        pmText: "pm",
        todayText: "Astăzi",
        eventText: "Eveniment",
        eventsText: "Evenimente",
        allDayText: "Toată ziua",
        noEventsText: "Niciun eveniment",
        moreEventsText: "Încă unul",
        moreEventsPluralText: "Încă {count}",
        firstDay: 1,
        dateText: "Data",
        timeText: "Ora",
        weekText: "Săptămâna {count}",
        rangeStartLabel: "Start",
        rangeEndLabel: "Final",
        rangeStartHelp: "Selectare",
        rangeEndHelp: "Selectare",
        filterEmptyText: "Niciun rezultat",
        filterPlaceholderText: "Căutare"
    }, st = {
        setText: "Установить",
        cancelText: "Отмена",
        clearText: "Очистить",
        closeText: "Закрыть",
        selectedText: "{count} Выбрать",
        dateFormat: "DD.MM.YYYY",
        dateFormatLong: "DDD, D MMM YYYY",
        dateWheelFormat: "|DDD D MMM|",
        dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        dayNamesShort: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
        dayNamesMin: ["в", "п", "в", "с", "ч", "п", "с"],
        fromText: "Начало",
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        timeFormat: "HH:mm",
        toText: "Конец",
        nowText: "Сейчас",
        amText: "am",
        pmText: "pm",
        todayText: "Cегодня",
        firstDay: 1,
        dateText: "Дата",
        timeText: "Время",
        allDayText: "Весь день",
        noEventsText: "Нет событий",
        eventText: "Мероприятия",
        eventsText: "Мероприятия",
        moreEventsText: "Ещё {count}",
        weekText: "Неделя {count}",
        rangeStartLabel: "Начало",
        rangeEndLabel: "Конец",
        rangeStartHelp: "выбирать",
        rangeEndHelp: "выбирать",
        filterEmptyText: "Нет результатов",
        filterPlaceholderText: "Поиск"
    }, it = c({}, st, {
        cancelText: "Отменить",
        clearText: "Очиститьr",
        selectedText: "{count} Вібрать",
        monthNamesShort: ["Янв.", "Февр.", "Март", "Апр.", "Май", "Июнь", "Июль", "Авг.", "Сент.", "Окт.", "Нояб.", "Дек."],
        filterEmptyText: "Ніякага выніку",
        filterPlaceholderText: "Пошук"
    }), rt = {
        setText: "Zadaj",
        cancelText: "Zrušiť",
        clearText: "Vymazať",
        closeText: "Zavrieť",
        selectedText: "Označený: {count}",
        dateFormat: "D.M.YYYY",
        dateFormatLong: "DDD D. MMM YYYY",
        dateWheelFormat: "|DDD D. MMM|",
        dayNames: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
        dayNamesShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
        dayNamesMin: ["N", "P", "U", "S", "Š", "P", "S"],
        fromText: "Začiatok",
        monthNames: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
        timeFormat: "H:mm",
        toText: "Koniec",
        nowText: "Teraz",
        amText: "am",
        pmText: "pm",
        todayText: "Dnes",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Čas",
        allDayText: "Celý deň",
        noEventsText: "Žiadne udalosti",
        eventText: "Udalostí",
        eventsText: "Udalosti",
        moreEventsText: "{count} ďalšia",
        moreEventsPluralText: "{count} ďalšie",
        weekText: "{count}. týždeň",
        rangeStartLabel: "Začiatok",
        rangeEndLabel: "Koniec",
        rangeStartHelp: "Vybrať",
        rangeEndHelp: "Vybrať",
        filterEmptyText: "Žiadne výsledky",
        filterPlaceholderText: "Vyhľadávanie"
    }, ot = {
        setText: "Постави",
        cancelText: "Откажи",
        clearText: "Обриши",
        selectedText: "{count} изабрана",
        dateFormat: "DD.MM.YYYY",
        dateFormatLong: "DDD, D. MMM YYYY.",
        dateWheelFormat: "|DDD D. MMM|",
        dayNames: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
        dayNamesShort: ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"],
        dayNamesMin: ["Не", "По", "Ут", "Ср", "Че", "Пе", "Су"],
        fromText: "Од",
        monthNames: ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"],
        monthNamesShort: ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"],
        timeFormat: "HH:mm",
        toText: "До",
        nowText: "сада",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Датум",
        timeText: "време",
        todayText: "Данас",
        closeText: "Затвори",
        eventText: "Догађај",
        eventsText: "Догађаји",
        allDayText: "Цео дан",
        noEventsText: "Нема догађаја",
        moreEventsText: "Још {count}",
        weekText: "{count}. недеља",
        rangeStartLabel: "Од",
        rangeEndLabel: "До",
        rangeStartHelp: "Изаберите",
        rangeEndHelp: "Изаберите",
        filterEmptyText: "Без резултата",
        filterPlaceholderText: "Претрага"
    }, lt = {
        setText: "OK",
        cancelText: "Avbryt",
        clearText: "Klara",
        closeText: "Stäng",
        selectedText: "{count} vald",
        dateFormat: "YYYY-MM-DD",
        dateFormatLong: "DDD D MMM. YYYY",
        dateWheelFormat: "|DDD D MMM|",
        dayNames: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
        dayNamesShort: ["Sö", "Må", "Ti", "On", "To", "Fr", "Lö"],
        dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
        fromText: "Start",
        monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        timeFormat: "HH:mm",
        toText: "Slut",
        nowText: "Nu",
        pmText: "pm",
        amText: "am",
        todayText: "I dag",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Tid",
        allDayText: "Heldag",
        noEventsText: "Inga aktiviteter",
        eventText: "Händelse",
        eventsText: "Händelser",
        moreEventsText: "{count} till",
        weekText: "Vecka {count}",
        rangeStartLabel: "Start",
        rangeEndLabel: "Slut",
        rangeStartHelp: "Välj",
        rangeEndHelp: "Välj",
        filterEmptyText: "Inga träffar",
        filterPlaceholderText: "Sök"
    }, ct = {
        setText: "ตั้งค่า",
        cancelText: "ยกเลิก",
        clearText: "ล้าง",
        closeText: "ปิด",
        selectedText: "{count} เลือก",
        dateFormat: "DD/MM/YYYY",
        dateFormatLong: "วันDDDที่ D MMM YYYY",
        dateWheelFormat: "|DDD D MMM|",
        dayNames: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
        dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
        dayNamesMin: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
        fromText: "จาก",
        monthNames: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
        monthNamesShort: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
        timeFormat: "HH:mm",
        toText: "ถึง",
        nowText: "ตอนนี้",
        pmText: "pm",
        amText: "am",
        firstDay: 0,
        dateText: "วัน",
        timeText: "เวลา",
        todayText: "วันนี้",
        eventText: "เหตุการณ์",
        eventsText: "เหตุการณ์",
        allDayText: "ตลอดวัน",
        noEventsText: "ไม่มีกิจกรรม",
        moreEventsText: "อีก {count} กิจกรรม",
        weekText: "สัปดาห์ที่ {count}",
        rangeStartLabel: "จาก",
        rangeEndLabel: "ถึง",
        rangeStartHelp: "เลือก",
        rangeEndHelp: "เลือก",
        filterEmptyText: "ไม่มีผลลัพธ์",
        filterPlaceholderText: "ค้นหา"
    }, dt = {
        setText: "Seç",
        cancelText: "İptal",
        clearText: "Temizleyin",
        closeText: "Kapatmak",
        selectedText: "{count} seçilmiş",
        dateFormat: "DD.MM.YYYY",
        dateFormatLong: "D MMMM DDD, YYYY",
        dateWheelFormat: "|D MMM DDD|",
        dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
        dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
        dayNamesMin: ["P", "P", "S", "Ç", "P", "C", "C"],
        fromText: "Başla",
        monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
        timeFormat: "HH:mm",
        toText: "Son",
        nowText: "Şimdi",
        pmText: "pm",
        amText: "am",
        todayText: "Bugün",
        firstDay: 1,
        dateText: "Tarih",
        timeText: "Zaman",
        allDayText: "Tüm gün",
        noEventsText: "Etkinlik Yok",
        eventText: "Etkinlik",
        eventsText: "Etkinlikler",
        moreEventsText: "{count} tane daha",
        weekText: "{count}. Hafta",
        rangeStartLabel: "Başla",
        rangeEndLabel: "Son",
        rangeStartHelp: "Seç",
        rangeEndHelp: "Seç",
        filterEmptyText: "Sonuç Yok",
        filterPlaceholderText: "Arayın"
    }, ht = {
        setText: "встановити",
        cancelText: "відміна",
        clearText: "очистити",
        closeText: "Закрити",
        selectedText: "{count} вибрані",
        dateFormat: "DD.MM.YYYY",
        dateFormatLong: "DDD, D MMM. YYYY",
        dateWheelFormat: "|DDD D MMM.|",
        dayNames: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"],
        dayNamesShort: ["нед", "пнд", "вів", "срд", "чтв", "птн", "сбт"],
        dayNamesMin: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        fromText: "від",
        monthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
        monthNamesShort: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
        timeFormat: "H:mm",
        toText: "кінець",
        nowText: "Зараз",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "дата",
        timeText: "Час",
        todayText: "Сьогодні",
        eventText: "подія",
        eventsText: "події",
        allDayText: "Увесь день",
        noEventsText: "Жодної події",
        moreEventsText: "та ще {count}",
        weekText: "{count} тиждень",
        rangeStartLabel: "від",
        rangeEndLabel: "кінець",
        rangeEndHelp: "Обрати",
        rangeStartHelp: "Обрати",
        filterEmptyText: "Ніякого результату",
        filterPlaceholderText: "Пошук"
    }, ut = {
        setText: "Đặt",
        cancelText: "Hủy bò",
        clearText: "Xóa",
        closeText: "Đóng",
        selectedText: "{count} chọn",
        dateFormat: "DD/MM/YYYY",
        dateFormatLong: "DDD D, MMM YYYY",
        dateWheelFormat: "|DDD D MMM|",
        dayNames: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
        dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        fromText: "Từ",
        monthNames: ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"],
        monthNamesShort: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
        timeFormat: "H:mm",
        toText: "Tới",
        nowText: "Bây giờ",
        pmText: "pm",
        amText: "am",
        firstDay: 0,
        dateText: "Ngày",
        timeText: "Hồi",
        todayText: "Hôm nay",
        eventText: "Sự kiện",
        eventsText: "Sự kiện",
        allDayText: "Cả ngày",
        noEventsText: "Không có sự kiện",
        moreEventsText: "{count} thẻ khác",
        weekText: "Tuần {count}",
        rangeStartLabel: "Từ",
        rangeEndLabel: "Tới",
        rangeStartHelp: "Chọn",
        rangeEndHelp: "Chọn",
        filterEmptyText: "Không kết quả",
        filterPlaceholderText: "Tìm kiếm"
    }, mt = {
        setText: "确定",
        cancelText: "取消",
        clearText: "明确",
        closeText: "关闭",
        selectedText: "{count} 选",
        dateFormat: "YYYY年M月D日",
        dateFormatLong: "YYYY年M月D日",
        dateWheelFormat: "|M月D日 DDD|",
        dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
        dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
        fromText: "开始时间",
        monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        monthNamesShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
        timeFormat: "H:mm",
        toText: "结束时间",
        nowText: "当前",
        pmText: "下午",
        amText: "上午",
        yearSuffix: "年",
        monthSuffix: "月",
        daySuffix: "日",
        todayText: "今天",
        dateText: "日",
        timeText: "时间",
        allDayText: "全天",
        noEventsText: "无事件",
        eventText: "活动",
        eventsText: "活动",
        moreEventsText: "他 {count} 件",
        weekText: "第 {count} 週",
        rangeStartLabel: "开始时间",
        rangeEndLabel: "结束时间",
        rangeStartHelp: "选取",
        rangeEndHelp: "选取",
        filterEmptyText: "没有结果",
        filterPlaceholderText: "搜索"
    };

    function _t(e) {
        return e < -1e-7 ? Math.ceil(e - 1e-7) : Math.floor(e + 1e-7)
    }

    function pt(e, t, n) {
        var a, s, i = [0, 0, 0];
        a = e > 1582 || 1582 === e && t > 10 || 1582 === e && 10 === t && n > 14 ? _t(1461 * (e + 4800 + _t((t - 14) / 12)) / 4) + _t(367 * (t - 2 - 12 * _t((t - 14) / 12)) / 12) - _t(3 * _t((e + 4900 + _t((t - 14) / 12)) / 100) / 4) + n - 32075 : 367 * e - _t(7 * (e + 5001 + _t((t - 9) / 7)) / 4) + _t(275 * t / 9) + n + 1729777;
        var r = _t(((s = a - 1948440 + 10632) - 1) / 10631),
            o = _t((10985 - (s = s - 10631 * r + 354)) / 5316) * _t(50 * s / 17719) + _t(s / 5670) * _t(43 * s / 15238);
        return s = s - _t((30 - o) / 15) * _t(17719 * o / 50) - _t(o / 16) * _t(15238 * o / 43) + 29, t = _t(24 * s / 709), n = s - _t(709 * t / 24), e = 30 * r + o - 30, i[2] = n, i[1] = t, i[0] = e, i
    }

    var vt = {
        getYear: function (e) {
            return pt(e.getFullYear(), e.getMonth() + 1, e.getDate())[0]
        }, getMonth: function (e) {
            return --pt(e.getFullYear(), e.getMonth() + 1, e.getDate())[1]
        }, getDay: function (e) {
            return pt(e.getFullYear(), e.getMonth() + 1, e.getDate())[2]
        }, getDate: function (e, t, n, a, s, i, r) {
            t < 0 && (e += Math.floor(t / 12), t = t % 12 ? 12 + t % 12 : 0), t > 11 && (e += Math.floor(t / 12), t %= 12);
            var o = function (e, t, n) {
                var a, s, i, r, o, l = new Array(3),
                    c = _t((11 * e + 3) / 30) + 354 * e + 30 * t - _t((t - 1) / 2) + n + 1948440 - 385;
                return c > 2299160 ? (i = _t(4 * (a = c + 68569) / 146097), a -= _t((146097 * i + 3) / 4), r = _t(4e3 * (a + 1) / 1461001), a = a - _t(1461 * r / 4) + 31, s = _t(80 * a / 2447), n = a - _t(2447 * s / 80), t = s + 2 - 12 * (a = _t(s / 11)), e = 100 * (i - 49) + r + a) : (o = _t(((s = c + 1402) - 1) / 1461), i = _t(((a = s - 1461 * o) - 1) / 365) - _t(a / 1461), s = _t(80 * (r = a - 365 * i + 30) / 2447), n = r - _t(2447 * s / 80), t = s + 2 - 12 * (r = _t(s / 11)), e = 4 * o + i + r - 4716), l[2] = n, l[1] = t, l[0] = e, l
            }(e, +t + 1, n);
            return new Date(o[0], o[1] - 1, o[2], a || 0, s || 0, i || 0, r || 0)
        }, getMaxDayOfMonth: function (e, t) {
            t < 0 && (e += Math.floor(t / 12), t = t % 12 ? 12 + t % 12 : 0), t > 11 && (e += Math.floor(t / 12), t %= 12);
            return [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29][t] + (11 === t && (11 * e + 14) % 30 < 11 ? 1 : 0)
        }
    }, ft = {}, gt = {
        ar: $,
        bg: ee,
        ca: te,
        cs: ne,
        da: ae,
        de: se,
        el: ie,
        en: ft,
        "en-GB": re,
        es: oe,
        fa: Ae,
        fi: We,
        fr: Ue,
        he: Be,
        hi: je,
        hr: Ke,
        hu: Xe,
        it: Je,
        ja: qe,
        ko: Ge,
        lt: Ze,
        nl: Qe,
        no: $e,
        pl: et,
        "pt-BR": nt,
        "pt-PT": tt,
        ro: at,
        ru: st,
        "ru-UA": it,
        sk: rt,
        sr: ot,
        sv: lt,
        th: ct,
        tr: dt,
        ua: ht,
        vi: ut,
        zh: mt
    }, yt = {}, bt = [], xt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

    function Dt(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function Tt(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    var St = {
        _catchError: function (e, t) {
            for (var n, a, s; t = t._parent;) if ((n = t._component) && !n._processingException) try {
                if ((a = n.constructor) && null != a.getDerivedStateFromError && (n.setState(a.getDerivedStateFromError(e)), s = n._dirty), null != n.componentDidCatch && (n.componentDidCatch(e), s = n._dirty), s) return n._pendingError = n
            } catch (t) {
                e = t
            }
            throw e
        }, _vnodeId: 0
    };

    function Ct(e, t, n) {
        var a, s, i, r = {};
        for (i in t) "key" == i ? a = t[i] : "ref" == i ? s = t[i] : r[i] = t[i];
        if (arguments.length > 3) for (n = [n], i = 3; i < arguments.length; i++) n.push(arguments[i]);
        if (null != n && (r.children = n), "function" == typeof e && null != e.defaultProps) for (i in e.defaultProps) void 0 === r[i] && (r[i] = e.defaultProps[i]);
        return wt(e, r, a, s, null)
    }

    function wt(e, t, n, a, s) {
        var i = {
            type: e,
            props: t,
            key: n,
            ref: a,
            _children: null,
            _parent: null,
            _depth: 0,
            _dom: null,
            _nextDom: void 0,
            _component: null,
            _hydrating: null,
            constructor: void 0,
            _original: null == s ? ++St._vnodeId : s
        };
        return null != St.vnode && St.vnode(i), i
    }

    function kt(e) {
        return e.children
    }

    function Mt(e, t) {
        this.props = e, this.context = t
    }

    function Et(e, t) {
        if (null == t) return e._parent ? Et(e._parent, e._parent._children.indexOf(e) + 1) : null;
        for (var n; t < e._children.length; t++) if (null != (n = e._children[t]) && null != n._dom) return n._dom;
        return "function" == typeof e.type ? Et(e) : null
    }

    function Nt(e) {
        var t = e._vnode, n = t._dom, a = e._parentDom;
        if (a) {
            var s = [], i = Dt({}, t);
            i._original = t._original + 1, Bt(a, t, i, e._globalContext, void 0 !== a.ownerSVGElement, null != t._hydrating ? [n] : null, s, null == n ? Et(t) : n, t._hydrating), jt(s, t), t._dom != n && It(t)
        }
    }

    function It(e) {
        if (null != (e = e._parent) && null != e._component) {
            e._dom = e._component.base = null;
            for (var t = 0; t < e._children.length; t++) {
                var n = e._children[t];
                if (null != n && null != n._dom) {
                    e._dom = e._component.base = n._dom;
                    break
                }
            }
            return It(e)
        }
    }

    Mt.prototype.setState = function (e, t) {
        var n;
        n = null != this._nextState && this._nextState !== this.state ? this._nextState : this._nextState = Dt({}, this.state), "function" == typeof e && (e = e(Dt({}, n), this.props)), e && Dt(n, e), null != e && this._vnode && (t && this._renderCallbacks.push(t), Yt(this))
    }, Mt.prototype.forceUpdate = function (e) {
        this._vnode && (this._force = !0, e && this._renderCallbacks.push(e), Yt(this))
    }, Mt.prototype.render = kt;
    var Lt, Ht = [], Ot = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;

    function Yt(e) {
        (!e._dirty && (e._dirty = !0) && Ht.push(e) && !Pt._rerenderCount++ || Lt !== St.debounceRendering) && ((Lt = St.debounceRendering) || Ot)(Pt)
    }

    function Pt() {
        for (var e; Pt._rerenderCount = Ht.length;) e = Ht.sort((function (e, t) {
            return e._vnode._depth - t._vnode._depth
        })), Ht = [], e.some((function (e) {
            e._dirty && Nt(e)
        }))
    }

    function Ft(e, t, n, a, s, i, r, o, l, c) {
        var d, h, u, m, _, p, v, f = a && a._children || bt, g = f.length;
        for (n._children = [], d = 0; d < t.length; d++) if (null != (m = null == (m = t[d]) || "boolean" == typeof m ? n._children[d] = null : "string" == typeof m || "number" == typeof m || "bigint" == typeof m ? n._children[d] = wt(null, m, null, null, m) : Array.isArray(m) ? n._children[d] = wt(kt, {children: m}, null, null, null) : m._depth > 0 ? n._children[d] = wt(m.type, m.props, m.key, null, m._original) : n._children[d] = m)) {
            if (m._parent = n, m._depth = n._depth + 1, null === (u = f[d]) || u && m.key == u.key && m.type === u.type) f[d] = void 0; else for (h = 0; h < g; h++) {
                if ((u = f[h]) && m.key == u.key && m.type === u.type) {
                    f[h] = void 0;
                    break
                }
                u = null
            }
            Bt(e, m, u = u || yt, s, i, r, o, l, c), _ = m._dom, (h = m.ref) && u.ref != h && (v || (v = []), u.ref && v.push(u.ref, null, m), v.push(h, m._component || _, m)), null != _ ? (null == p && (p = _), "function" == typeof m.type && null != m._children && m._children === u._children ? m._nextDom = l = Vt(m, l, e) : l = zt(e, m, u, f, _, l), c || "option" !== n.type ? "function" == typeof n.type && (n._nextDom = l) : e.value = "") : l && u._dom == l && l.parentNode != e && (l = Et(u))
        }
        for (n._dom = p, d = g; d--;) null != f[d] && ("function" == typeof n.type && null != f[d]._dom && f[d]._dom == n._nextDom && (n._nextDom = Et(a, d + 1)), Xt(f[d], f[d]));
        if (v) for (d = 0; d < v.length; d++) Kt(v[d], v[++d], v[++d])
    }

    function Vt(e, t, n) {
        for (var a = 0; a < e._children.length; a++) {
            var s = e._children[a];
            s && (s._parent = e, t = "function" == typeof s.type ? Vt(s, t, n) : zt(n, s, s, e._children, s._dom, t))
        }
        return t
    }

    function zt(e, t, n, a, s, i) {
        var r;
        if (void 0 !== t._nextDom) r = t._nextDom, t._nextDom = void 0; else if (null == n || s != i || null == s.parentNode) e:if (null == i || i.parentNode !== e) e.appendChild(s), r = null; else {
            for (var o = i, l = 0; (o = o.nextSibling) && l < a.length; l += 2) if (o == s) break e;
            e.insertBefore(s, i), r = i
        }
        return i = void 0 !== r ? r : s.nextSibling
    }

    function Rt(e, t, n) {
        "-" === t[0] ? e.setProperty(t, n) : null == n ? e[t] = "" : "number" != typeof n || xt.test(t) ? e[t] = n : e[t] = n + "px"
    }

    function At(e, t, n, a, s) {
        var i;
        e:if ("style" === t) if ("string" == typeof n) e.style.cssText = n; else {
            if ("string" == typeof a && (e.style.cssText = a = ""), a) for (t in a) n && t in n || Rt(e.style, t, "");
            if (n) for (t in n) a && n[t] === a[t] || Rt(e.style, t, n[t])
        } else if ("o" === t[0] && "n" === t[1]) if (i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e._listeners || (e._listeners = {}), e._listeners[t + i] = n, n) {
            if (!a) {
                var r = i ? Ut : Wt;
                e.addEventListener(t, r, i)
            }
        } else {
            var o = i ? Ut : Wt;
            e.removeEventListener(t, o, i)
        } else if ("dangerouslySetInnerHTML" !== t) {
            if (s) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s"); else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
                e[t] = null == n ? "" : n;
                break e
            } catch (e) {
            }
            "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
        }
    }

    function Wt(e) {
        this._listeners[e.type + !1](St.event ? St.event(e) : e)
    }

    function Ut(e) {
        this._listeners[e.type + !0](St.event ? St.event(e) : e)
    }

    function Bt(e, t, n, a, s, i, r, o, l) {
        var c, d = t.type;
        if (void 0 !== t.constructor) return null;
        null != n._hydrating && (l = n._hydrating, o = t._dom = n._dom, t._hydrating = null, i = [o]), (c = St._diff) && c(t);
        try {
            e:if ("function" == typeof d) {
                var h, u, m, _, p, v, f = t.props, g = (c = d.contextType) && a[c._id],
                    y = c ? g ? g.props.value : c._defaultValue : a;
                if (n._component ? v = (h = t._component = n._component)._processingException = h._pendingError : ("prototype" in d && d.prototype.render ? t._component = h = new d(f, y) : (t._component = h = new Mt(f, y), h.constructor = d, h.render = Jt), g && g.sub(h), h.props = f, h.state || (h.state = {}), h.context = y, h._globalContext = a, u = h._dirty = !0, h._renderCallbacks = []), null == h._nextState && (h._nextState = h.state), null != d.getDerivedStateFromProps && (h._nextState == h.state && (h._nextState = Dt({}, h._nextState)), Dt(h._nextState, d.getDerivedStateFromProps(f, h._nextState))), m = h.props, _ = h.state, u) null == d.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h._renderCallbacks.push(h.componentDidMount); else {
                    if (null == d.getDerivedStateFromProps && f !== m && null != h.componentWillReceiveProps && h.componentWillReceiveProps(f, y), !h._force && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(f, h._nextState, y) || t._original === n._original) {
                        h.props = f, h.state = h._nextState, t._original !== n._original && (h._dirty = !1), h._vnode = t, t._dom = n._dom, t._children = n._children, t._children.forEach((function (e) {
                            e && (e._parent = t)
                        })), h._renderCallbacks.length && r.push(h);
                        break e
                    }
                    null != h.componentWillUpdate && h.componentWillUpdate(f, h._nextState, y), null != h.componentDidUpdate && h._renderCallbacks.push((function () {
                        h.componentDidUpdate(m, _, p)
                    }))
                }
                h.context = y, h.props = f, h.state = h._nextState, (c = St._render) && c(t), h._dirty = !1, h._vnode = t, h._parentDom = e, c = h.render(h.props, h.state, h.context), h.state = h._nextState, null != h.getChildContext && (a = Dt(Dt({}, a), h.getChildContext())), u || null == h.getSnapshotBeforeUpdate || (p = h.getSnapshotBeforeUpdate(m, _));
                var b = null != c && c.type === kt && null == c.key ? c.props.children : c;
                Ft(e, Array.isArray(b) ? b : [b], t, n, a, s, i, r, o, l), h.base = t._dom, t._hydrating = null, h._renderCallbacks.length && r.push(h), v && (h._pendingError = h._processingException = null), h._force = !1
            } else null == i && t._original === n._original ? (t._children = n._children, t._dom = n._dom) : t._dom = function (e, t, n, a, s, i, r, o) {
                var l = n.props, c = t.props, d = t.type, h = 0;
                "svg" === d && (s = !0);
                if (null != i) for (; h < i.length; h++) {
                    var u = i[h];
                    if (u && (u === e || (d ? u.localName == d : 3 == u.nodeType))) {
                        e = u, i[h] = null;
                        break
                    }
                }
                if (null == e) {
                    if (null === d) return document.createTextNode(c);
                    e = s ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, c.is && c), i = null, o = !1
                }
                if (null === d) l === c || o && e.data === c || (e.data = c); else {
                    i = i && bt.slice.call(e.childNodes);
                    var m = (l = n.props || yt).dangerouslySetInnerHTML, _ = c.dangerouslySetInnerHTML;
                    if (o || (null != i && (l = {}), (_ || m) && (_ && (m && _.__html == m.__html || _.__html === e.innerHTML) || (e.innerHTML = _ && _.__html || ""))), function (e, t, n, a, s) {
                        var i;
                        for (i in n) "children" === i || "key" === i || i in t || At(e, i, null, n[i], a);
                        for (i in t) s && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || At(e, i, t[i], n[i], a)
                    }(e, c, l, s, o), _) t._children = []; else if (h = t.props.children, Ft(e, Array.isArray(h) ? h : [h], t, n, a, s && "foreignObject" !== d, i, r, e.firstChild, o), null != i) for (h = i.length; h--;) null != i[h] && Tt(i[h]);
                    o || ("value" in c && void 0 !== (h = c.value) && (h !== e.value || "progress" === d && !h) && At(e, "value", h, l.value, !1), "checked" in c && void 0 !== (h = c.checked) && h !== e.checked && At(e, "checked", h, l.checked, !1))
                }
                return e
            }(n._dom, t, n, a, s, i, r, l);
            (c = St.diffed) && c(t)
        } catch (e) {
            t._original = null, (l || null != i) && (t._dom = o, t._hydrating = !!l, i[i.indexOf(o)] = null), St._catchError(e, t, n)
        }
    }

    function jt(e, t) {
        St._commit && St._commit(t, e), e.some((function (t) {
            try {
                e = t._renderCallbacks, t._renderCallbacks = [], e.some((function (e) {
                    e.call(t)
                }))
            } catch (e) {
                St._catchError(e, t._vnode)
            }
        }))
    }

    function Kt(e, t, n) {
        try {
            "function" == typeof e ? e(t) : e.current = t
        } catch (e) {
            St._catchError(e, n)
        }
    }

    function Xt(e, t, n) {
        var a, s;
        if (St.unmount && St.unmount(e), (a = e.ref) && (a.current && a.current !== e._dom || Kt(a, null, t)), n || "function" == typeof e.type || (n = null != (s = e._dom)), e._dom = e._nextDom = void 0, null != (a = e._component)) {
            if (a.componentWillUnmount) try {
                a.componentWillUnmount()
            } catch (e) {
                St._catchError(e, t)
            }
            a.base = a._parentDom = null
        }
        if (a = e._children) for (var i = 0; i < a.length; i++) a[i] && Xt(a[i], t, n);
        null != s && Tt(s)
    }

    function Jt(e, t, n) {
        return this.constructor(e, n)
    }

    function qt(e, t, n) {
        St._root && St._root(e, t);
        var a = "function" == typeof n, s = a ? null : n && n._children || t._children, i = [];
        Bt(t, e = (!a && n || t)._children = Ct(kt, null, [e]), s || yt, yt, void 0 !== t.ownerSVGElement, !a && n ? [n] : s ? null : t.firstChild ? bt.slice.call(t.childNodes) : null, i, !a && n ? n : s ? s._dom : t.firstChild, a), jt(i, e)
    }

    Pt._rerenderCount = 0;
    var Gt = 0;

    function Zt(e, t) {
        var n = {
            _id: t = "__cC" + Gt++, _defaultValue: e, Consumer: function (e, t) {
                return e.children(t)
            }, Provider: function (e) {
                if (!this.getChildContext) {
                    var n = [], a = {};
                    a[t] = this, this.getChildContext = function () {
                        return a
                    }, this.shouldComponentUpdate = function (e) {
                        this.props.value !== e.value && n.some(Yt)
                    }, this.sub = function (e) {
                        n.push(e);
                        var t = e.componentWillUnmount;
                        e.componentWillUnmount = function () {
                            n.splice(n.indexOf(e), 1), t && t.call(e)
                        }
                    }
                }
                return e.children
            }
        };
        return n.Provider._contextRef = n.Consumer.contextType = n
    }

    var Qt = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype.render = function () {
        }, t.prototype.shouldComponentUpdate = function (e, t) {
            return $t(e, this.props) || $t(t, this.state)
        }, t
    }(Mt);

    function $t(e, t) {
        for (var n in e) if (e[n] !== t[n]) return !0;
        for (var n in t) if (!(n in e)) return !0;
        return !1
    }

    var en = v ? document : le, tn = v ? window : le, nn = ["Webkit", "Moz"], an = en && en.createElement("div").style,
        sn = en && en.createElement("canvas"),
        rn = sn && sn.getContext && sn.getContext("2d", {willReadFrequently: !0}), on = tn && tn.CSS,
        ln = on && on.supports, cn = {}, dn = tn && tn.requestAnimationFrame || function (e) {
            return setTimeout(e, 20)
        }, hn = tn && tn.cancelAnimationFrame || function (e) {
            clearTimeout(e)
        }, un = an && an.animationName !== le, mn = "ios" === h && !D,
        _n = mn && tn && tn.webkit && tn.webkit.messageHandlers, pn = an && an.touchAction === le || mn && !_n,
        vn = function () {
            if (!an || an.transform !== le) return "";
            for (var e = 0, t = nn; e < t.length; e++) {
                var n = t[e];
                if (an[n + "Transform"] !== le) return n
            }
            return ""
        }(), fn = vn ? "-" + vn.toLowerCase() + "-" : "", gn = ln && ln("(transform-style: preserve-3d)"),
        yn = ln && (ln("position", "sticky") || ln("position", "-webkit-sticky"));

    function bn(e, t, n, a) {
        e && e.addEventListener(t, n, a)
    }

    function xn(e, t, n, a) {
        e && e.removeEventListener(t, n, a)
    }

    function Dn(e) {
        return v ? e && e.ownerDocument ? e.ownerDocument : en : le
    }

    function Tn(e, t) {
        return parseFloat(getComputedStyle(e)[t] || "0")
    }

    function Sn(e) {
        return e.scrollLeft !== le ? e.scrollLeft : e.pageXOffset
    }

    function Cn(e) {
        return e.scrollTop !== le ? e.scrollTop : e.pageYOffset
    }

    function wn(e) {
        return v ? e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : tn : le
    }

    function kn(e, t) {
        var n = getComputedStyle(e), a = (vn ? n[vn + "Transform"] : n.transform).split(")")[0].split(", ");
        return +(t ? a[13] || a[5] : a[12] || a[4]) || 0
    }

    function Mn(e) {
        if (!rn || !e) return "#000";
        if (cn[e]) return cn[e];
        rn.fillStyle = e, rn.fillRect(0, 0, 1, 1);
        var t = rn.getImageData(0, 0, 1, 1), n = t ? t.data : [0, 0, 0],
            a = .299 * +n[0] + .587 * +n[1] + .114 * +n[2] < 130 ? "#fff" : "#000";
        return cn[e] = a, a
    }

    function En(e, t, n, a, s, i, r) {
        var o, l, c = Math.min(1, (+new Date - t) / 468), d = .5 * (1 - Math.cos(Math.PI * c));
        s !== le && (o = Ce(n + (s - n) * d), e.scrollLeft = o), i !== le && (l = Ce(a + (i - a) * d), e.scrollTop = l), o !== s || l !== i ? dn((function () {
            En(e, t, n, a, s, i, r)
        })) : r && r()
    }

    function Nn(e, t, n, a, s, i) {
        t !== le && (t = Math.max(0, Ce(t))), n !== le && (n = Math.max(0, Ce(n))), s && t !== le && (t = -t), a ? En(e, +new Date, e.scrollLeft, e.scrollTop, t, n, i) : (t !== le && (e.scrollLeft = t), n !== le && (e.scrollTop = n), i && i())
    }

    function In(e) {
        var t = e.getBoundingClientRect(), n = {left: t.left, top: t.top}, a = wn(e);
        return a !== le && (n.top += Cn(a), n.left += Sn(a)), n
    }

    function Ln(e, t) {
        var n = e && (e.matches || e.msMatchesSelector);
        return n && n.call(e, t)
    }

    function Hn(e, t, n) {
        for (; e && !Ln(e, t);) {
            if (e === n || e.nodeType === e.DOCUMENT_NODE) return null;
            e = e.parentNode
        }
        return e
    }

    function On(e, t, n) {
        var a;
        try {
            a = new CustomEvent(t, {bubbles: !0, cancelable: !0, detail: n})
        } catch (e) {
            (a = document.createEvent("Event")).initEvent(t, !0, !0), a.detail = n
        }
        e.dispatchEvent(a)
    }

    function Yn(e, t) {
        for (var n = 0; n < e.length; n++) t(e[n], n)
    }

    St.vnode = function (e) {
        var t = e.props, n = {};
        if (ve(e.type)) {
            for (var a in t) {
                var s = t[a];
                /^onAni/.test(a) ? a = a.toLowerCase() : /ondoubleclick/i.test(a) && (a = "ondblclick"), n[a] = s
            }
            e.props = n
        }
    };
    var Pn = {}, Fn = 0;

    function Vn(e, t, n, a, s) {
        Ln(e, t) ? e.__mbscFormInst || zn(n, e, s, a, !0) : Yn(e.querySelectorAll(t), (function (e) {
            e.__mbscFormInst || zn(n, e, s, a, !0)
        }))
    }

    function zn(e, t, n, a, s) {
        var i, r, o = [], l = [], d = {}, h = a || {}, u = h.renderToParent ? t.parentNode : t, m = u.parentNode,
            _ = h.useOwnChildren ? t : u, p = t.getAttribute("class"), v = t.value,
            f = c({className: u.getAttribute("class")}, t.dataset, n, {
                ref: function (e) {
                    r = e
                }
            });
        h.readProps && h.readProps.forEach((function (e) {
            var n = t[e];
            n !== le && (f[e] = n)
        })), h.readAttrs && h.readAttrs.forEach((function (e) {
            var n = t.getAttribute(e);
            null !== n && (f[e] = n)
        }));
        var g = h.slots;
        if (g) for (var y = 0, b = Object.keys(g); y < b.length; y++) {
            var x = b[y], D = g[x], T = u.querySelector("[mbsc-" + D + "]");
            T && (d[x] = T, T.parentNode.removeChild(T), f[x] = Ct("span", {className: "mbsc-slot-" + D}))
        }
        if (h.hasChildren && (Yn(_.childNodes, (function (e) {
            e !== t && 8 !== e.nodeType && (3 !== e.nodeType || 3 === e.nodeType && /\S/.test(e.nodeValue)) && o.push(e), l.push(e)
        })), Yn(o, (function (e) {
            _.removeChild(e)
        })), o.length && (f.hasChildren = !0)), t.id || (t.id = "mbsc-control-" + Fn++), h.before && h.before(t, f, o), qt(Ct(e, f), m, u), p && h.renderToParent && (i = t.classList).add.apply(i, p.replace(/^\s+|\s+$/g, "").replace(/\s+|^\s|\s$/g, " ").split(" ")), h.hasChildren) {
            var S = "." + h.parentClass, C = Ln(u, S) ? u : u.querySelector(S);
            C && Yn(o, (function (e) {
                C.appendChild(e)
            }))
        }
        if (h.hasValue && (t.value = v), g) for (var w = function (e) {
            var t = g[e], n = d[e];
            Yn(u.querySelectorAll(".mbsc-slot-" + t), (function (e, t) {
                var a = t > 0 ? n.cloneNode(!0) : n;
                e.appendChild(a)
            }))
        }, k = 0, M = Object.keys(d); k < M.length; k++) {
            w(x = M[k])
        }
        return r.destroy = function () {
            var e = u.parentNode, n = en.createComment("");
            e.insertBefore(n, u), qt(null, u), delete t.__mbscInst, delete t.__mbscFormInst, delete u._listeners, u.innerHTML = "", u.setAttribute("class", f.className), e.replaceChild(u, n), h.hasChildren && Yn(l, (function (e) {
                _.appendChild(e)
            })), h.renderToParent && t.setAttribute("class", p || "")
        }, s ? (t.__mbscInst || (t.__mbscInst = r), t.__mbscFormInst = r) : t.__mbscInst = r, r
    }

    function Rn(e) {
        Pn[e._name] = e
    }

    function An(e, t) {
        if (e) for (var n = 0, a = Object.keys(Pn); n < a.length; n++) {
            var s = a[n], i = Pn[s];
            Vn(e, i._selector, i, i._renderOpt, t)
        }
    }

    var Wn = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._newProps = {}, t._setEl = function (e) {
                t._el = e ? e._el || e : null
            }, t
        }

        return l(t, e), Object.defineProperty(t.prototype, "value", {
            get: function () {
                return this.__value
            }, set: function (e) {
                this.__value = e
            }, enumerable: !0, configurable: !0
        }), t.prototype.componentDidMount = function () {
            this.__init(), this._init(), this._mounted(), this._updated(), this._enhance()
        }, t.prototype.componentDidUpdate = function () {
            this._updated(), this._enhance()
        }, t.prototype.componentWillUnmount = function () {
            this._destroy(), this.__destroy()
        }, t.prototype.render = function () {
            return this._willUpdate(), this._template(this.s, this.state)
        }, t.prototype.getInst = function () {
            return this
        }, t.prototype.setOptions = function (e) {
            for (var t in e) this.props[t] = e[t];
            this.forceUpdate()
        }, t.prototype._safeHtml = function (e) {
            return {__html: e}
        }, t.prototype._init = function () {
        }, t.prototype.__init = function () {
        }, t.prototype._emit = function (e, t) {
        }, t.prototype._template = function (e, t) {
        }, t.prototype._mounted = function () {
        }, t.prototype._updated = function () {
        }, t.prototype._destroy = function () {
        }, t.prototype.__destroy = function () {
        }, t.prototype._willUpdate = function () {
        }, t.prototype._enhance = function () {
            var e = this._shouldEnhance;
            e && (An(!0 === e ? this._el : e), this._shouldEnhance = !1)
        }, t
    }(Qt), Un = new Date(1970, 0, 1), Bn = 6e4, jn = 36e5, Kn = 864e5;

    function Xn(e) {
        return !!e._mbsc
    }

    function Jn(e, t, n) {
        var a = n || t.dataTimezone || t.displayTimezone, s = t.timezonePlugin;
        if (a && s && Xn(e)) {
            var i = e.clone();
            return i.setTimezone(a), i.toISOString()
        }
        return e
    }

    var qn = {
            amText: "am",
            dateFormat: "MM/DD/YYYY",
            dateFormatLong: "D DDD MMM YYYY",
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daySuffix: "",
            firstDay: 0,
            fromText: "Start",
            getDate: ua,
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            monthSuffix: "",
            pmText: "pm",
            quarterText: "Q{count}",
            separator: " ",
            shortYearCutoff: "+10",
            timeFormat: "h:mm A",
            toText: "End",
            todayText: "Today",
            weekText: "Week {count}",
            yearSuffix: "",
            getMonth: function (e) {
                return e.getMonth()
            },
            getDay: function (e) {
                return e.getDate()
            },
            getYear: function (e) {
                return e.getFullYear()
            },
            getMaxDayOfMonth: function (e, t) {
                return 32 - new Date(e, t, 32, 12).getDate()
            },
            getWeekNumber: function (e) {
                var t = new Date(+e);
                t.setHours(0, 0, 0), t.setDate(t.getDate() + 4 - (t.getDay() || 7));
                var n = new Date(t.getFullYear(), 0, 1);
                return Math.ceil(((t - n) / 864e5 + 1) / 7)
            }
        },
        Gn = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[T\s](\d{2}):?(\d{2})(?::?(\d{2})(?:\.(\d{3}))?)?((Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/,
        Zn = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;

    function Qn(e, t, n) {
        var a, s, i = {y: 1, m: 2, d: 3, h: 4, i: 5, s: 6, u: 7, tz: 8};
        if (n) for (var r = 0, o = Object.keys(i); r < o.length; r++) (s = e[i[a = o[r]] - t]) && (n[a] = "tz" === a ? s : 1)
    }

    function $n(e) {
        return +new Date(1970, 0, 1, e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()) - +Un
    }

    function ea(e, t, n, a, s) {
        var i = +e, r = +n;
        return i < (s && r === +a ? +a + 1 : +a) && (s && i === +t ? +t + 1 : +t) > r
    }

    function ta(e, t) {
        var n = fa(e, t);
        return n.setHours(0, 0, 0, 0), n
    }

    function na(e, t) {
        var n = fa(e, t);
        return n.setHours(23, 59, 59, 999), n
    }

    function aa(e, t, n, a, s) {
        return (!t && !s || e.exclusiveEndDates) && n && a && n < a ? fa(t ? le : e, +a - 1) : a
    }

    function sa(e) {
        return e.getFullYear() + "-" + Se(e.getMonth() + 1) + "-" + Se(e.getDate())
    }

    function ia(e, t) {
        return Xn(e) && !t ? e.createDate(e.getFullYear(), e.getMonth(), e.getDate()) : ua(e.getFullYear(), e.getMonth(), e.getDate())
    }

    function ra(e) {
        return Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())
    }

    function oa(e, t) {
        return Ce((ra(t) - ra(e)) / Kn)
    }

    function la(e, t, n, a) {
        for (var s = -1, i = ia(e); i <= ia(t); i.setDate(i.getDate() + 1)) ka(i.getDay(), n, a) && s++;
        return s
    }

    function ca(e, t, n) {
        var a = e.getFullYear(), s = e.getMonth(), i = e.getDay(), r = n === le ? t.firstDay : n;
        return new Date(a, s, r - (r - i > 0 ? 7 : 0) - i + e.getDate())
    }

    function da(e, t) {
        return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()
    }

    function ha(e, t, n) {
        return n.getYear(e) === n.getYear(t) && n.getMonth(e) === n.getMonth(t)
    }

    function ua(e, t, n, a, s, i, r) {
        var o = new Date(e, t, n, a || 0, s || 0, i || 0, r || 0);
        return 23 === o.getHours() && 0 === (a || 0) && o.setHours(o.getHours() + 2), o
    }

    function ma(e) {
        return e.getTime
    }

    function _a(e) {
        return ve(e) && Zn.test(e)
    }

    function pa(e, t) {
        return fa(e, t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds())
    }

    function va(e) {
        return e ? new Date(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()) : e
    }

    function fa(e, t, n, a, s, i, r, o) {
        return null === t ? null : t && (pe(t) || ve(t)) && ge(n) ? ga(t, e) : e && e.timezonePlugin ? e.timezonePlugin.createDate(e, t, n, a, s, i, r, o) : ye(t) ? new Date(t) : ge(t) ? new Date : new Date(t, n || 0, a || 1, s || 0, i || 0, r || 0, o || 0)
    }

    function ga(e, t, n, a, s) {
        var i;
        if (ve(e) && (e = e.trim()), !e) return null;
        var r = t && t.timezonePlugin;
        if (r && !s) {
            var o = Xn(e) ? e : r.parse(e, t);
            return o.setTimezone(t.displayTimezone), o
        }
        if (ma(e)) return e;
        if (e._isAMomentObject) return e.toDate();
        if (pe(e)) return new Date(e);
        i = Zn.exec(e);
        var l = t && t.defaultValue, c = ga((me(l) ? l[0] : l) || new Date), d = c.getFullYear(), h = c.getMonth(),
            u = c.getDate();
        return i ? (Qn(i, 2, a), new Date(d, h, u, i[2] ? +i[2] : 0, i[3] ? +i[3] : 0, i[4] ? +i[4] : 0, i[5] ? +i[5] : 0)) : (i = Gn.exec(e)) ? (Qn(i, 0, a), new Date(i[1] ? +i[1] : d, i[2] ? i[2] - 1 : h, i[3] ? +i[3] : u, i[4] ? +i[4] : 0, i[5] ? +i[5] : 0, i[6] ? +i[6] : 0, i[7] ? +i[7] : 0)) : Da(n, e, t)
    }

    function ya(e, t, n, a, s) {
        var i = v && window.moment || t.moment, r = t.timezonePlugin && (t.dataTimezone || t.displayTimezone),
            o = r ? "iso8601" : t.returnFormat;
        if (r && s) return Jn(e, t);
        if (e) {
            if ("moment" === o && i) return i(e);
            if ("locale" === o) return xa(n, e, t);
            if ("iso8601" === o) return function (e, t) {
                var n = "", a = "";
                return e && (t.h && (a += Se(e.getHours()) + ":" + Se(e.getMinutes()), t.s && (a += ":" + Se(e.getSeconds())), t.u && (a += "." + Se(e.getMilliseconds(), 3)), t.tz && (a += t.tz)), t.y ? (n += e.getFullYear(), t.m && (n += "-" + Se(e.getMonth() + 1), t.d && (n += "-" + Se(e.getDate())), t.h && (n += "T" + a))) : t.h && (n = a)), n
            }(e, a)
        }
        return e
    }

    function ba(e, t, n) {
        return xa(e, t, c({}, qn, C.locale, n))
    }

    function xa(e, t, n) {
        var a, s, i = "", r = !1, o = function (t) {
            for (var n = 0, s = a; s + 1 < e.length && e.charAt(s + 1) === t;) n++, s++;
            return n
        }, l = function (e) {
            var t = o(e);
            return a += t, t
        }, c = function (e, t, n) {
            var a = "" + t;
            if (l(e)) for (; a.length < n;) a = "0" + a;
            return a
        }, d = function (e, t, n, a) {
            return 3 === l(e) ? a[t] : n[t]
        };
        for (a = 0; a < e.length; a++) if (r) "'" !== e.charAt(a) || l("'") ? i += e.charAt(a) : r = !1; else switch (e.charAt(a)) {
            case"D":
                i += o("D") > 1 ? d("D", t.getDay(), n.dayNamesShort, n.dayNames) : c("D", n.getDay(t), 2);
                break;
            case"M":
                i += o("M") > 1 ? d("M", n.getMonth(t), n.monthNamesShort, n.monthNames) : c("M", n.getMonth(t) + 1, 2);
                break;
            case"Y":
                s = n.getYear(t), i += 3 === l("Y") ? s : (s % 100 < 10 ? "0" : "") + s % 100;
                break;
            case"h":
                var h = t.getHours();
                i += c("h", h > 12 ? h - 12 : 0 === h ? 12 : h, 2);
                break;
            case"H":
                i += c("H", t.getHours(), 2);
                break;
            case"m":
                i += c("m", t.getMinutes(), 2);
                break;
            case"s":
                i += c("s", t.getSeconds(), 2);
                break;
            case"a":
                i += t.getHours() > 11 ? n.pmText : n.amText;
                break;
            case"A":
                i += t.getHours() > 11 ? n.pmText.toUpperCase() : n.amText.toUpperCase();
                break;
            case"'":
                l("'") ? i += "'" : r = !0;
                break;
            default:
                i += e.charAt(a)
        }
        return i
    }

    function Da(e, t, n) {
        var a = c({}, qn, n), s = ga(a.defaultValue || new Date);
        if (!t) return s;
        e || (e = a.dateFormat + a.separator + a.timeFormat);
        var i, r = a.shortYearCutoff, o = a.getYear(s), l = a.getMonth(s) + 1, d = a.getDay(s), h = s.getHours(),
            u = s.getMinutes(), m = 0, _ = -1, p = !1, v = 0, f = function (t) {
                for (var n = 0, a = i; a + 1 < e.length && e.charAt(a + 1) === t;) n++, a++;
                return n
            }, g = function (e) {
                var t = f(e);
                return i += t, t
            }, y = function (e) {
                var n = g(e), a = new RegExp("^\\d{1," + (n >= 2 ? 4 : 2) + "}"), s = t.substr(v).match(a);
                return s ? (v += s[0].length, parseInt(s[0], 10)) : 0
            }, b = function (e, n, a) {
                for (var s = 3 === g(e) ? a : n, i = 0; i < s.length; i++) if (t.substr(v, s[i].length).toLowerCase() === s[i].toLowerCase()) return v += s[i].length, i + 1;
                return 0
            }, x = function () {
                v++
            };
        for (i = 0; i < e.length; i++) if (p) "'" !== e.charAt(i) || g("'") ? x() : p = !1; else switch (e.charAt(i)) {
            case"Y":
                o = y("Y");
                break;
            case"M":
                l = f("M") < 2 ? y("M") : b("M", a.monthNamesShort, a.monthNames);
                break;
            case"D":
                f("D") < 2 ? d = y("D") : b("D", a.dayNamesShort, a.dayNames);
                break;
            case"H":
                h = y("H");
                break;
            case"h":
                h = y("h");
                break;
            case"m":
                u = y("m");
                break;
            case"s":
                m = y("s");
                break;
            case"a":
                _ = b("a", [a.amText, a.pmText], [a.amText, a.pmText]) - 1;
                break;
            case"A":
                _ = b("A", [a.amText, a.pmText], [a.amText, a.pmText]) - 1;
                break;
            case"'":
                g("'") ? x() : p = !0;
                break;
            default:
                x()
        }
        if (o < 100) {
            var D = void 0;
            D = o <= (ve(r) ? (new Date).getFullYear() % 100 + parseInt(r, 10) : +r) ? 0 : -100, o += (new Date).getFullYear() - (new Date).getFullYear() % 100 + D
        }
        h = -1 === _ ? h : _ && h < 12 ? h + 12 : _ || 12 !== h ? h : 0;
        var T = a.getDate(o, l - 1, d, h, u, m);
        return a.getYear(T) !== o || a.getMonth(T) + 1 !== l || a.getDay(T) !== d ? s : T
    }

    function Ta(e, t, n) {
        if (e === t) return !0;
        if (me(e) && !e.length && null === t || me(t) && !t.length && null === e) return !0;
        if (null === e || null === t || e === le || t === le) return !1;
        if (ve(e) && ve(t)) return e === t;
        var a = n && n.dateFormat;
        if (me(e) || me(t)) {
            if (e.length !== t.length) return !1;
            for (var s = 0; s < e.length; s++) {
                var i = e[s], r = t[s];
                if (!(ve(i) && ve(r) ? i === r : +ga(i, n, a) == +ga(r, n, a))) return !1
            }
            return !0
        }
        return +ga(e, n, a) == +ga(t, n, a)
    }

    function Sa(e) {
        return Xn(e) ? e.clone() : new Date(e)
    }

    function Ca(e, t) {
        var n = Sa(e);
        return n.setDate(n.getDate() + t), n
    }

    function wa(e, t, n) {
        var a = n.getYear(e), s = n.getMonth(e) + t, i = n.getMaxDayOfMonth(a, s);
        return pa(n, n.getDate(a, s, Math.min(n.getDay(e), i), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()))
    }

    function ka(e, t, n) {
        return t > n ? e <= n || e >= t : e >= t && e <= n
    }

    function Ma(e, t) {
        var n = Bn * t, a = Sa(e).setHours(0, 0, 0, 0), s = a + Math.round((+e - +a) / n) * n;
        return Xn(e) ? e.createDate(s) : new Date(s)
    }

    function Ea(e, t, n) {
        return t && e < t ? new Date(t) : n && e > n ? new Date(n) : e
    }

    v && "undefined" == typeof Symbol && (window.Symbol = {toPrimitive: "toPrimitive"}), w.datetime = {
        formatDate: ba,
        parseDate: Da
    };
    var Na, Ia, La = tn, Ha = +new Date, Oa = {}, Ya = {};

    function Pa(e) {
        !e._logged && "mbscdemo" !== t.apiKey && en && (e._logged = !0, Oa.components = Oa.components || [], Oa.components.push(e.constructor._name.toLowerCase()), clearTimeout(Ia), Ia = setTimeout((function () {
            if (!t.fwv) {
                var n = void 0;
                switch (t.fw) {
                    case"angular":
                        var a = en.querySelector("[ng-version]");
                        n = a ? a.getAttribute("ng-version") : "N/A";
                        break;
                    case"jquery":
                        n = La.$.fn && La.$.fn.jquery
                }
                t.fwv = n || "N/A"
            }
            Oa.demo = !!La.isMbscDemo, Oa.fw = t.fw, Oa.fwv = t.fwv, Oa.theme = e.s.theme, Oa.trialCode = t.apiKey, Oa.v = e._v.version, Va("log", null, Oa, (function () {
                Oa = {}
            }))
        }), 5e3))
    }

    function Fa(e) {
        if (e && en && !en.getElementById("trial-message")) {
            var t = en.createElement("div");
            t.setAttribute("id", "trial-message"), t.setAttribute("style", "position: absolute;width: 100%; bottom: 0;left: 0; padding: 10px;box-sizing: border-box;"), t.setAttribute("class", "mbsc-font");
            var n = en.createElement("div");
            n.setAttribute("style", "padding: 15px 25px; max-width: 400px; margin: 0 auto 10px auto; border-radius: 16px; line-height: 25px; background: #cacaca59; font-size: 15px; color: #151515;"), n.innerHTML = e.message + " ";
            var a = en.createElement("a");
            a.innerHTML = e.button.text, a.setAttribute("style", "color: #FF4080;font-weight: 600;"), a.setAttribute("href", "https://mobiscroll.com/pricing?ref=trialapp"), n.appendChild(a), t.appendChild(n), en.body.appendChild(t), setTimeout((function () {
                en.body.removeChild(t)
            }), 6e3)
        }
    }

    function Va(e, n, a, s, i, r) {
        if (tn && en) {
            var o = en.createElement("script"), l = "mbsc_jsonp_" + (i || ++Ha);
            l = tn[l] ? "mbsc_jsonp_" + ++Ha : l;
            var c = r || 1;
            tn[l] = function (t, a) {
                clearTimeout(d), o.parentNode.removeChild(o), delete tn[l], t = t ? JSON.parse(t, (function (e, t) {
                    return "string" != typeof t ? t : "function_" === t.substring(0, 9) && n ? n[t.replace("function_", "")] : t.match(Gn) ? ga(t) : t
                })) : {}, "remote" === e && (Ya.txt = t.__e, delete t.__e), a || s(t)
            };
            var d = setTimeout(h, 6e3);
            o.onerror = h, o.src = t.apiUrl + t.apiKey + "/" + e + "?callback=" + l + "&data=" + encodeURIComponent(JSON.stringify(a)), en.body.appendChild(o)
        } else s({});

        function h() {
            tn && tn[l] && tn[l](null, !0), "remote" === e && (c < 4 ? Va(e, n, a, s, i, c + 1) : Na || (Na = !0, za()))
        }
    }

    function za() {
        var e = en.cookie.replace(/(?:(?:^|.*;\s*)ASP.NET_SessionId\s*=\s*([^;]*).*$)|^.*$/, "$1");
        en.cookie = "mobiscrollClientError=1; expires=" + new Date((new Date).getTime() + 864e5).toUTCString() + "; path=/; SameSite=Strict";
        try {
            tn.name = (tn.name || "") + ";mobiscrollClientError"
        } catch (e) {
        }
        Va("error", null, {sessionID: e, trialCode: t.apiKey}, (function () {
            en.cookie = "mobiscrollClientError=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            try {
                tn.name = (tn.name || "").replace(/;mobiscrollClientError/g, "")
            } catch (e) {
            }
        }))
    }

    en && (en.cookie.replace(/(?:(?:^|.*;\s*)mobiscrollClientError\s*=\s*([^;]*).*$)|^.*$/, "$1") || /mobiscrollClientError/.test(tn.name || "")) && en.addEventListener("DOMContentLoaded", (function () {
        za()
    }));
    var Ra, Aa = new Function("textParam,p", function () {
        for (var e = function (e, t) {
            for (var n = function (e) {
                for (var t = e[0], n = 0; n < 16; ++n) if (t * n % 16 == 1) return [n, e[1]]
            }(t), a = function (e, t, n, a) {
                for (var s = "0123456789abcdef", i = t.length, r = "", o = 0; o < i; ++o) r += e ? s[(n * s.indexOf(t[o]) + a) % 16] : s[((n * s.indexOf(t[o]) - n * a) % 16 + 16) % 16];
                return r
            }(0, e, n[0], n[1]), s = a.length, i = [], r = 0; r < s; r += 2) i.push(a[r] + a[r + 1]);
            return i
        }("7c7a797b7ce5707c58e17ae1eda67ee1e43d313b7ae57c757ae6a0cde17ce0a67ae1e6ecefeda0a934cde17ce0a6ede170a038a6383ea478a9aeaea17ce5707c58e17ae1eda67c707c3fa734ece97ea8737c79e4e53daaa7abee75e6e37ce9efe6a0e5a97b7ee17aa87c3de5a6e4e5e6e77ce0a4e6a47a3b77e0e9e4e5a038a13d3d7ca97b7a3dcde17ce0a6eee4efef7aa0cde17ce0a67ae1e6ecefeda0a9a27ca93b7cad3d313be63de55b7c5d3be55b7c5d3de55b7a5d3be55b7a5d3de67d7ae57c757ae6a8e57da05ba778efe9e67ce57aade57ee5e67c7332e6efe6e5a7a4a7ece97378e4e17932eae4efe3eba1e9ed78ef7a7ce1e67ca7a4a778ef73e97ce9efe632e1ea73efe4757ce5a1e9ed78ef7a7ce1e67ca7a4a77cef783238a1e9ed78ef7a7ce1e67ca7a4a7e4e5ee7c3238a1e9ed78ef7a7ce1e67ca7a4a7eaef7c7cefed3238a1e9ed78ef7a7ce1e67ca7a4a77ae9e7e07c3238a1e9ed78ef7a7ce1e67ca7a4a7ede17ae7e9e63238a1e9ed78ef7a7ce1e67ca7a4a778e1ecece9e6e73238a1e9ed78ef7a7ce1e67ca7a4a7eeefe67cad73e972e532307870a1e9ed78ef7a7ce1e67ca7a4a7e4e9e6e5ade0e5e9e7e07c32313a7870a7a4a77ce5707cade1e4e9e7e632e3e5e67ce57aa7a4a7ef78e1e3e97c7932a7aba0cde17ce0a6eee4efef7aa0cde17ce0a67ae1e6ecefeda0a9a23a38a9af313838ab38a630a9aba7a1e9ed78ef7a7ce1e67ca75da9a6e2efe9e6a0a73ba7a9aba7aa3654753838353c54753838353a547538383c39547538383c31547538383ce334afece97e36a732a7a7a97de3e17ce3e0a0e5a97b7ae57c757ae6a8a7a77d2", [9, 8]), t = e.length, n = "", a = 0; a < t; a++) n += String.fromCharCode(parseInt(e[a], 16));
        return n
    }()), Wa = "5.27.2", Ua = 0, Ba = {large: 992, medium: 768, small: 576, xlarge: 1200, xsmall: 0};
    f && (Ra = f.matches, f.addListener((function (e) {
        Ra = e.matches, E.next()
    })));
    var ja = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.s = {}, t.state = {}, t._mbsc = !0, t._v = {version: "5.27.2"}, t._uid = ++Ua, t._textParamMulti = {}, t.__getText = Aa, t
            }

            return l(t, e), Object.defineProperty(t.prototype, "nativeElement", {
                get: function () {
                    return this._el
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "__getTextParam", {
                get: function () {
                    return Ya.val
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "textParam", {
                get: function () {
                    return void 0 === this._textParam && (this._textParam = this.__getText(Ya, .15)), this._safeHtml(this._textParam)
                }, enumerable: !0, configurable: !0
            }), t.prototype.textParamMulti = function (e) {
                return void 0 === this._textParamMulti[e] && (this._textParamMulti[e] = this.__getText(Ya, .15)), this._safeHtml(this._textParamMulti[e])
            }, t.prototype.destroy = function () {
            }, t.prototype._hook = function (e, t) {
                var n = this.s;
                if (t.inst = this, t.type = e, n[e]) return n[e](t, this);
                this._emit(e, t)
            }, t.prototype.__init = function () {
                var e = this;
                if (this.constructor.defaults) {
                    this._optChange = E.subscribe((function () {
                        e.forceUpdate()
                    }));
                    var t = this.props.modules;
                    if (t) for (var n = 0, a = t; n < a.length; n++) {
                        var s = a[n];
                        s.init && s.init(this)
                    }
                }
                this._hook("onInit", {})
            }, t.prototype.__destroy = function () {
                this._optChange !== le && E.unsubscribe(this._optChange), this._hook("onDestroy", {})
            }, t.prototype._render = function (e, t) {
            }, t.prototype._willUpdate = function () {
                this._merge(), this._render(this.s, this.state)
            }, t.prototype._resp = function (e) {
                var t, n = e.responsive, a = -1, s = this.state.width;
                if (s === le && (s = 375), n && s) for (var i = 0, r = Object.keys(n); i < r.length; i++) {
                    var o = r[i], l = n[o], c = l.breakpoint || Ba[o];
                    s >= c && c > a && (t = l, a = c)
                }
                return t
            }, t.prototype._merge = function () {
                var e, t, n = this.constructor, a = n.defaults, s = this._opt || {}, i = {};
                if (this._prevS = this.s || {}, a) {
                    for (var r in this.props) this.props[r] !== le && (i[r] = this.props[r]);
                    var o = i.locale || s.locale || C.locale || {},
                        l = i.calendarSystem || o.calendarSystem || s.calendarSystem || C.calendarSystem,
                        d = i.theme || s.theme || C.theme, u = i.themeVariant || s.themeVariant || C.themeVariant;
                    "auto" !== d && d || (d = M.theme || ""), "dark" !== u && (!Ra || "auto" !== u && u) || !k[d + "-dark"] || (d += "-dark"), i.theme = d;
                    var m = (t = k[d]) && t[n._name];
                    e = c({}, a, m, o, C, s, l, i);
                    var _ = this._resp(e);
                    this._respProps = _, _ && (e = c({}, e, _))
                } else e = c({}, this.props), t = k[e.theme];
                var v = t && t.baseTheme;
                e.baseTheme = v, this.s = e, this._className = e.cssClass || e.class || e.className || "", this._rtl = " mbsc-" + (e.rtl ? "rtl" : "ltr"), this._theme = " mbsc-" + e.theme + (v ? " mbsc-" + v : ""), this._touchUi = "auto" === e.touchUi || e.touchUi === le ? p : e.touchUi, this._hb = "ios" !== h || "ios" !== e.theme && "ios" !== v ? "" : " mbsc-hb"
            }, t.defaults = le, t._name = "", t
        }(Wn), Ka = {0: "SU", 1: "MO", 2: "TU", 3: "WE", 4: "TH", 5: "FR", 6: "SA"},
        Xa = {SU: 0, MO: 1, TU: 2, WE: 3, TH: 4, FR: 5, SA: 6}, Ja = {
            byday: "weekDays",
            bymonth: "month",
            bymonthday: "day",
            bysetpos: "pos",
            dtstart: "from",
            freq: "repeat",
            wkst: "weekStart"
        };

    function qa(e, t, n, a) {
        var s = ga(t.start, t.allDay ? le : n), i = ga(t.end, t.allDay ? le : n), r = i - s;
        for (a && (t.start = s, t.end = i), s = ia(s), i = n.exclusiveEndDates ? i : ia(Ca(i, 1)); s < i || !r;) Ga(e, s, t), s = Ca(s, 1), r = 1
    }

    function Ga(e, t, n) {
        var a = sa(t);
        e[a] || (e[a] = [], e[a].date = ia(t, !0)), e[a].push(n)
    }

    function Za(e, t, n, a, s, i) {
        var r = {};
        if (s) for (var o = 0, l = is(s); o < l.length; o++) {
            r[sa(ga(l[o]))] = !0
        }
        if (i) for (var c = 0, d = rs(i, e, e, t, n, a); c < d.length; c++) {
            r[sa(d[c].d)] = !0
        }
        return r
    }

    function Qa(e) {
        return ve(e) || e.getTime || e.toDate ? e : e.start || e.date
    }

    function $a(e, t, n) {
        var a = t.original ? t.original.start : t.start, s = t.allDay || !a, i = e.timezonePlugin,
            r = t.timezone || e.dataTimezone || e.displayTimezone;
        return i && !s ? {dataTimezone: r, displayTimezone: n ? r : e.displayTimezone, timezonePlugin: i} : le
    }

    function es(e) {
        for (var t = {}, n = 0, a = e.split(";"); n < a.length; n++) {
            var s = a[n].split("="), i = s[0].trim().toLowerCase(), r = s[1].trim();
            t[Ja[i] || i] = r
        }
        return t
    }

    function ts(e) {
        return ve(e) ? es(e) : c({}, e)
    }

    function ns(e, t, n) {
        var a = ts(e), s = ga(t), i = ga(n), r = oa(i, s), o = (a.repeat || "").toLowerCase(), l = function (e, t, n) {
            var a = e.filter((function (e) {
                return e !== t
            }));
            return -1 === a.indexOf(n) && a.push(n), a
        }, c = function (e, t, n) {
            var a = me(e) ? e : ((e || "") + "").split(",").map((function (e) {
                return +e
            })), s = l(a, t, n);
            return s.length > 1 ? s : s[0]
        }, d = function () {
            if (a.weekDays) {
                var e = a.weekDays.split(","), t = Ka[i.getDay()], n = Ka[s.getDay()], r = l(e, t, n);
                a.weekDays = r.join()
            }
        };
        return "weekly" === o ? d() : "monthly" === o ? a.pos === le ? a.day = c(a.day, i.getDate(), s.getDate()) : d() : "yearly" === o && (a.pos === le ? (a.month = c(a.month, i.getMonth() + 1, s.getMonth() + 1), a.day = c(a.day, i.getDate(), s.getDate())) : d()), a.from && (a.from = Ca(ga(a.from), r)), a.until && (a.until = Ca(ga(a.until), r)), a
    }

    function as(e, t, n, a) {
        for (var s = null, i = 0, r = e; i < r.length; i++) {
            var o = r[i];
            if (o.recurring) {
                var l = ga(o.start || o.date),
                    c = rs(o.recurring, l, l, t, le, n, o.reccurringException, o.recurringExceptionRule, "first");
                (!s || c < s) && (s = c)
            } else if (o.start && o.end) {
                var d = ga(o.start, n, a);
                ga(o.end, n, a) > t && (s = d <= t ? t : s && s < d ? s : d)
            } else {
                var h = ga(Qa(o), n, a);
                h > t && (!s || h < s) && (s = h)
            }
        }
        return s
    }

    function ss(e, t, n, a) {
        var s = t;
        e.sort((function (e, t) {
            return ga(Qa(e), n, a) - ga(Qa(t), n, a)
        }));
        for (var i = 0, r = e; i < r.length; i++) {
            var o = r[i];
            if (o.recurring) {
                var l = ga(o.start || o.date),
                    c = rs(o.recurring, l, l, t, le, n, o.reccurringException, o.recurringExceptionRule, "last");
                c > s && (s = c)
            } else if (o.start && o.end) {
                var d = ga(o.start, n, a), h = ga(o.end, n, a);
                h > s && oa(s, d) <= 1 && (s = h)
            } else {
                var u = ga(Qa(o), n, a);
                u > s && oa(s, u) <= 1 && (s = u)
            }
        }
        return s
    }

    function is(e) {
        return e ? me(e) ? e : ve(e) ? e.split(",") : [e] : []
    }

    function rs(e, t, n, a, s, i, r, o, l) {
        ve(e) && (e = es(e));
        for (var c, d, h = i.getYear, u = i.getMonth, m = i.getDay, _ = i.getDate, p = i.getMaxDayOfMonth, v = (e.repeat || "").toLowerCase(), f = e.interval || 1, g = e.count, y = e.from ? ga(e.from) : t || (1 !== f || g !== le ? new Date : a), b = ia(y), x = h(y), D = u(y), T = m(y), S = n ? n.getHours() : 0, C = n ? n.getMinutes() : 0, w = n ? n.getSeconds() : 0, k = e.until ? ga(e.until) : 1 / 0, M = y < a, E = M ? a : ia(y), N = "first" === l, I = "last" === l, L = N || I || !s || k < s ? k : s, H = g === le ? 1 / 0 : g, O = (e.weekDays || Ka[y.getDay()]).split(","), Y = Xa[(e.weekStart || "MO").trim().toUpperCase()], P = me(e.day) ? e.day : ((e.day || T) + "").split(","), F = me(e.month) ? e.month : ((e.month || D + 1) + "").split(","), V = [], z = e.pos !== le, R = z ? +e.pos : 1, A = [], W = s ? Za(t, a, s, i, r, o) : {}, U = !0, B = 0, j = 0, K = null, X = a, J = 0, q = O; J < q.length; J++) {
            var G = q[J];
            A.push(Xa[G.trim().toUpperCase()])
        }
        var Z = function () {
            if (s || (W = Za(d, d, Ca(d, 1), i, r, o)), !W[sa(d)] && d >= E) if (N) K = !K || d < K ? d : K, U = !1; else if (I) {
                var e = oa(X, d);
                X = d > X && e <= 1 ? d : X, U = e <= 1
            } else V.push({d: d, i: j});
            j++
        }, Q = function (e, t) {
            for (var n = [], a = 0, s = A; a < s.length; a++) for (var i = ca(e, {firstDay: s[a]}); i < t; i.setDate(i.getDate() + 7)) i.getMonth() === e.getMonth() && n.push(+i);
            n.sort();
            var r = n[R < 0 ? n.length + R : R - 1];
            d = r ? new Date(r) : t, (d = _(h(d), u(d), m(d), S, C, w)) <= L ? r && Z() : U = !1
        };
        switch (v) {
            case"daily":
                for (j = g && M ? ke(oa(y, a) / f) : 0; U;) (d = _(x, D, T + j * f, S, C, w)) <= L && j < H ? Z() : U = !1;
                break;
            case"weekly":
                var $ = A, ee = ca(y, {firstDay: Y}), te = ee.getDay();
                for ($.sort((function (e, t) {
                    return (e = (e -= te) < 0 ? e + 7 : e) - (t = (t -= te) < 0 ? t + 7 : t)
                })); U;) {
                    for (var ne = 0, ae = $; ne < ae.length; ne++) {
                        c = Ca(ee, (G = ae[ne]) < Y ? G - Y + 7 : G - Y), (d = _(h(c), u(c), m(c) + 7 * B * f, S, C, w)) <= L && j < H ? d >= b && Z() : U = !1
                    }
                    B++
                }
                break;
            case"monthly":
                for (; U;) {
                    var se = p(x, D + B * f);
                    if (z) Q(_(x, D + B * f, 1), _(x, D + B * f + 1, 1)); else for (var ie = 0, re = P; ie < re.length; ie++) {
                        var oe = re[ie];
                        (d = _(x, D + B * f, (pe = +oe) < 0 ? se + pe + 1 : pe, S, C, w)) <= L && j < H ? se >= pe && d >= b && Z() : U = !1
                    }
                    B++
                }
                break;
            case"yearly":
                for (; U;) {
                    for (var ce = 0, de = F; ce < de.length; ce++) {
                        var he = +de[ce];
                        se = p(x + B * f, he - 1);
                        if (z) Q(_(x + B * f, he - 1, 1), _(x + B * f, he, 1)); else for (var ue = 0, _e = P; ue < _e.length; ue++) {
                            var pe;
                            oe = _e[ue];
                            (d = _(x + B * f, he - 1, (pe = +oe) < 0 ? se + pe + 1 : pe, S, C, w)) <= L && j < H ? se >= pe && d >= b && Z() : U = !1
                        }
                    }
                    B++
                }
        }
        return N ? K : I ? X : V
    }

    function os(e, t, n, a, s) {
        var i = {};
        if (!e) return le;
        for (var r = 0, o = e; r < o.length; r++) {
            var l = o[r], d = $a(a, l, !0), h = $a(a, l), u = Qa(l), m = ga(u, h);
            if (l.recurring) for (var _ = Zn.test(u) ? null : ga(u), p = fa(d, m), v = l.end ? ga(l.end, d) : p, f = "00:00" === l.end ? Ca(v, 1) : v, g = +f - +p, y = Ca(t, -1), b = Ca(n, 1), x = 0, D = rs(l.recurring, _, p, y, b, a, l.recurringException, l.recurringExceptionRule); x < D.length; x++) {
                var T = D[x], S = T.d, C = c({}, l);
                if (l.start ? C.start = fa(d, S.getFullYear(), S.getMonth(), S.getDate(), p.getHours(), p.getMinutes(), p.getSeconds()) : (C.allDay = !0, C.start = fa(le, S.getFullYear(), S.getMonth(), S.getDate())), l.end) if (l.allDay) {
                    var w = Ca(S, oa(p, f));
                    C.end = new Date(w.getFullYear(), w.getMonth(), w.getDate(), f.getHours(), f.getMinutes(), f.getSeconds())
                } else C.end = fa(d, +C.start + g);
                C.nr = T.i, C.occurrenceId = C.id + "_" + sa(C.start), C.original = l, C.start && C.end ? qa(i, C, a, s) : Ga(i, S, C)
            } else l.start && l.end ? qa(i, l, a, s) : m && Ga(i, m, l)
        }
        return i
    }

    var ls = 1, cs = "month", ds = "year", hs = "multi-year", us = 296, ms = c({}, qn, {
        dateText: "Date",
        eventText: "event",
        eventsText: "events",
        moreEventsText: "{count} more",
        nextPageText: "Next page",
        prevPageText: "Previous page",
        showEventTooltip: !0,
        showToday: !0,
        timeText: "Time"
    });

    function _s(e, t) {
        var n = t.refDate ? ga(t.refDate) : Un, a = t.showCalendar ? t.calendarType : t.eventRange,
            s = (t.showCalendar ? "year" === a ? 1 : "week" === a ? t.weeks : t.size : t.eventRangeSize) || 1,
            i = t.getDate, r = "week" === a ? ca(n, t) : n, o = t.getYear(r), l = t.getMonth(r), c = t.getDay(r);
        switch (a) {
            case"year":
                return i(o + e * s, 0, 1);
            case"week":
                return i(o, l, c + 7 * s * e);
            case"day":
                return i(o, l, c + s * e);
            default:
                return i(o, l + e * s, 1)
        }
    }

    function ps(e, t) {
        var n, a = t.refDate ? ga(t.refDate) : Un, s = t.getYear, i = t.getMonth,
            r = t.showCalendar ? t.calendarType : t.eventRange,
            o = (t.showCalendar ? "year" === r ? 1 : "week" === r ? t.weeks : t.size : t.eventRangeSize) || 1;
        switch (r) {
            case"year":
                n = s(e) - s(a);
                break;
            case"week":
                n = oa(ca(a, t), ca(e, t)) / 7;
                break;
            case"day":
                n = oa(a, e);
                break;
            case"month":
                n = i(e) - i(a) + 12 * (s(e) - s(a));
                break;
            default:
                return le
        }
        return ke(n / o)
    }

    function vs(e, t) {
        var n = t.refDate ? ga(t.refDate) : Un;
        return ke((t.getYear(e) - t.getYear(n)) / 12)
    }

    function fs(e, t) {
        var n = t.refDate ? ga(t.refDate) : Un;
        return t.getYear(e) - t.getYear(n)
    }

    function gs(e, t) {
        var n = ga(e.start || e.date), a = ga(t.start || e.date), s = e.title || e.text, i = t.title || t.text,
            r = n ? +n * (e.allDay ? 1 : 10) : 0, o = a ? +a * (t.allDay ? 1 : 10) : 0;
        return r === o ? s > i ? 1 : -1 : r - o
    }

    function ys(e, t) {
        return "auto" === e ? Math.max(1, Math.min(3, Math.floor(t ? t / us : 1))) : e ? +e : 1
    }

    function bs(e, t, n, a, s, i, r, o, l, c, d, h, u, m) {
        t = t || {};
        for (var _ = {}, p = new Map, v = {}, f = n, g = 0, y = s, b = a; f < a;) {
            var x = sa(f), D = f.getDay(), T = e.getDay(f), S = d && e.getDate(e.getYear(f), e.getMonth(f) + 1, 0),
                C = l && (D === o || 1 === T && d) || +f == +n, w = ca(f, e), k = xs(t[x] || [], c), M = void 0,
                E = void 0, N = void 0, I = 0, L = 0, H = 0;
            C && (v = {}, b = l ? Ca(w, i) : a), r && (k = k.filter((function (e) {
                return e.allDay
            }))), -1 === s && (y = k.length + 1);
            var O = k.length, Y = [];
            for (h && (Y.push({id: "count_" + +f, count: O, placeholder: 0 === O}), I = y); O && I < y;) {
                M = null;
                for (var P = 0; P < k.length; P++) v[I] === k[P] && (M = k[P], N = P);
                if (E = M && p.get(M) || [], I === y - 1 && (L < O - 1 || H === O && !M) && -1 !== s) {
                    var F = O - L, V = u || "", z = (F > 1 && m || V).replace(/{count}/, F);
                    if (F && Y.push({id: "more_" + ++g, more: z, label: z}), M) {
                        v[I] = null;
                        for (var R = 0, A = E; R < A.length; R++) {
                            var W = A[R], U = V.replace(/{count}/, "1");
                            _[sa(W)].data[I] = {id: "more_" + ++g, more: U, label: U}
                        }
                    }
                    L++, I++
                } else if (M) N === H && H++, da(f, ga(M.end, $a(e, M))) && (v[I] = null), Y.push({
                    id: M.occurrenceId || M.id,
                    event: M
                }), I++, L++, E.push(f); else if (H < O) {
                    var B = k[H], j = B.allDay, K = $a(e, B), X = B.start && ga(B.start, K);
                    if (!X || da(f, X) || C) {
                        var J = aa(e, j, X, B.end && ga(B.end, K), !0), q = J && !da(X, J), G = S && S < J ? S : J,
                            Z = X ? ", " + e.fromText + ": " + xa("DDDD, MMMM D, YYYY", X, e) : "",
                            Q = J ? ", " + e.toText + ": " + xa("DDDD, MMMM D, YYYY", J, e) : "";
                        B.id === le && (B.id = "mbsc_" + ls++), q && (v[I] = B), p.set(B, [f]), Y.push({
                            event: B,
                            id: B.occurrenceId || B.id,
                            label: (B.title || B.text || "") + Z + Q,
                            lastDay: S ? Ca(S, 1) : le,
                            multiDay: q,
                            showText: !0,
                            width: q ? 100 * Math.min(oa(f, G) + 1, oa(f, b)) : 100
                        }), I++, L++
                    }
                    H++
                } else L < O && Y.push({id: "ph_" + ++g, placeholder: !0}), I++
            }
            _[x] = {data: Y, events: k}, f = ia(Ca(f, 1))
        }
        return _
    }

    function xs(e, t) {
        return e && e.slice(0).sort(t || gs)
    }

    function Ds(e, t, n) {
        return !(!1 === e || !1 === n || !t)
    }

    function Ts(e, t, n) {
        return !1 !== e && !1 !== t && !1 !== n
    }

    function Ss(e, t, n) {
        return !1 !== e && !1 !== t && !1 !== n
    }

    function Cs(e, t, n, a) {
        return !1 !== e && !1 !== t && !1 !== n && !1 !== a
    }

    var ws, ks, Ms = "animationstart", Es = "blur", Ns = "change", Is = "click", Ls = "contextmenu", Hs = "dblclick",
        Os = "focus", Ys = "focusin", Ps = "input", Fs = "keydown", Vs = "mousedown", zs = "mousemove", Rs = "mouseup",
        As = "mouseenter", Ws = "mouseleave", Us = "mousewheel", Bs = "resize", js = "scroll", Ks = "touchstart",
        Xs = "touchmove", Js = "touchend", qs = "touchcancel", Gs = "wheel", Zs = 13, Qs = 32, $s = 33, ei = 34,
        ti = 35, ni = 36, ai = 37, si = 38, ii = 39, ri = 40, oi = 0;

    function li(e, t, n) {
        var a, s, i, r, o, l, c, d = 0;

        function h() {
            s.style.width = "100000px", s.style.height = "100000px", a.scrollLeft = 1e5, a.scrollTop = 1e5, l.scrollLeft = 1e5, l.scrollTop = 1e5
        }

        function u() {
            var e = +new Date;
            r = 0, c || (e - d > 200 && !a.scrollTop && !a.scrollLeft && (d = e, h()), r || (r = dn(u)))
        }

        function m() {
            o || (o = dn(_))
        }

        function _() {
            o = 0, h(), t()
        }

        return tn && tn.ResizeObserver ? (ws || (ws = new tn.ResizeObserver((function (e) {
            o || (o = dn((function () {
                for (var t = 0, n = e; t < n.length; t++) {
                    var a = n[t];
                    a.target.__mbscResize && a.target.__mbscResize()
                }
                o = 0
            })))
        }))), oi++, e.__mbscResize = function () {
            n ? n.run(t) : t()
        }, ws.observe(e)) : i = en && en.createElement("div"), i && (i.innerHTML = '<div class="mbsc-resize"><div class="mbsc-resize-i mbsc-resize-x"></div></div><div class="mbsc-resize"><div class="mbsc-resize-i mbsc-resize-y"></div></div>', i.dir = "ltr", l = i.childNodes[1], a = i.childNodes[0], s = a.childNodes[0], e.appendChild(i), bn(a, "scroll", m), bn(l, "scroll", m), n ? n.runOutsideAngular((function () {
            dn(u)
        })) : dn(u)), {
            detach: function () {
                ws ? (oi--, delete e.__mbscResize, ws.unobserve(e), oi || (ws = le)) : (i && (xn(a, "scroll", m), xn(l, "scroll", m), e.removeChild(i), hn(o), i = le), c = !0)
            }
        }
    }

    var ci = "input,select,textarea,button", di = 'textarea,button,input[type="button"],input[type="submit"]',
        hi = ci + ',[tabindex="0"]', ui = {enter: Zs, esc: 27, space: Qs},
        mi = v && /(iphone|ipod)/i.test(g) && T >= 7 && T < 15;

    function _i(e, t) {
        var n = e.s, a = [], s = {
            cancel: {cssClass: "mbsc-popup-button-close", name: "cancel", text: n.cancelText},
            close: {cssClass: "mbsc-popup-button-close", name: "close", text: n.closeText},
            ok: {cssClass: "mbsc-popup-button-primary", keyCode: Zs, name: "ok", text: n.okText},
            set: {cssClass: "mbsc-popup-button-primary", keyCode: Zs, name: "set", text: n.setText}
        };
        return t && t.length ? (t.forEach((function (t) {
            var n = ve(t) ? s[t] || {text: t} : t;
            n.handler && !ve(n.handler) || (ve(n.handler) && (n.name = n.handler), n.handler = function (t) {
                e._onButtonClick({domEvent: t, button: n})
            }), a.push(n)
        })), a) : le
    }

    function pi(e, t) {
        void 0 === t && (t = 0);
        var n = e._prevModal;
        return n && n !== e && t < 10 ? n.isVisible() ? n : pi(n, t + 1) : le
    }

    var vi = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._lastFocus = +new Date, t._setActive = function (e) {
                t._active = e
            }, t._setContent = function (e) {
                t._content = e
            }, t._setLimitator = function (e) {
                t._limitator = e
            }, t._setPopup = function (e) {
                t._popup = e
            }, t._setWrapper = function (e) {
                t._wrapper = e
            }, t._onOverlayClick = function () {
                t._isOpen && t.s.closeOnOverlayClick && !t._preventClose && t._close("overlay"), t._preventClose = !1
            }, t._onDocClick = function (e) {
                t.s.showOverlay || e.target === t.s.focusElm || ks !== t || t._onOverlayClick()
            }, t._onMouseDown = function (e) {
                t.s.showOverlay || (t._target = e.target)
            }, t._onMouseUp = function (e) {
                t._target && t._popup && t._popup.contains(t._target) && !t._popup.contains(e.target) && (t._preventClose = !0), t._target = !1
            }, t._onPopupClick = function () {
                t.s.showOverlay || (t._preventClose = !0)
            }, t._onAnimationEnd = function (e) {
                e.target === t._popup && (t._isClosing && (t._onClosed(), t._isClosing = !1, t.state.isReady ? t.setState({isReady: !1}) : t.forceUpdate()), t._isOpening && (t._onOpened(), t._isOpening = !1, t.forceUpdate()))
            }, t._onButtonClick = function (e) {
                var n = e.domEvent, a = e.button;
                t._hook("onButtonClick", {
                    domEvent: n,
                    button: a
                }), /cancel|close|ok|set/.test(a.name) && t._close(a.name)
            }, t._onFocus = function (e) {
                var n = +new Date;
                ks === t && e.target.nodeType && t._ctx.contains(e.target) && t._popup && !t._popup.contains(e.target) && n - t._lastFocus > 100 && e.target !== t.s.focusElm && (t._lastFocus = n, t._active.focus())
            }, t._onKeyDown = function (e) {
                var n = t.s, a = e.keyCode, s = n.focusElm && !n.focusOnOpen ? n.focusElm : le;
                if ((a === Qs && !Ln(e.target, ci) || t._lock && (a === si || a === ri)) && e.preventDefault(), n.focusTrap && 9 === a) {
                    var i = t._popup.querySelectorAll(hi), r = [], o = -1, l = 0, c = -1, d = le;
                    Yn(i, (function (e) {
                        e.disabled || !e.offsetHeight && !e.offsetWidth || (r.push(e), o++, e === t._doc.activeElement && (c = o))
                    })), e.shiftKey && (l = o, o = 0), c === o ? d = s || r[l] : e.target === s && (d = r[l]), d && (d.focus(), e.preventDefault())
                }
            }, t._onContentScroll = function (e) {
                !t._lock || e.type === Xs && "stylus" === e.touches[0].touchType || e.preventDefault()
            }, t._onScroll = function (e) {
                var n = t.s;
                n.closeOnScroll ? t._close("scroll") : (t._hasContext || "anchored" === n.display) && t.position()
            }, t._onWndKeyDown = function (e) {
                var n = t.s, a = e.keyCode;
                if (ks === t && a !== le) {
                    if (t._hook("onKeyDown", {keyCode: a}), n.closeOnEsc && 27 === a && t._close("esc"), a === Zs && Ln(e.target, di) && !e.shiftKey) return;
                    if (t._buttons) for (var s = 0, i = t._buttons; s < i.length; s++) for (var r = i[s], o = 0, l = me(r.keyCode) ? r.keyCode : [r.keyCode]; o < l.length; o++) {
                        var c = l[o];
                        if (!r.disabled && c !== le && (c === a || ui[c] === a)) return void r.handler(e)
                    }
                }
            }, t._onResize = function () {
                var e = t._wrapper, n = t._hasContext;
                if (e) {
                    t._vpWidth = Math.min(e.clientWidth, n ? 1 / 0 : t._win.innerWidth), t._vpHeight = Math.min(e.clientHeight, n ? 1 / 0 : t._win.innerHeight), t._maxWidth = t._limitator.offsetWidth, t._maxHeight = t.s.maxHeight !== le || t._vpWidth < 768 || t._vpHeight < 650 ? t._limitator.offsetHeight : 600, t._round = !1 === t.s.touchUi || t._popup.offsetWidth < t._vpWidth && t._vpWidth > t._maxWidth;
                    var a = {
                        isLarge: t._round,
                        maxPopupHeight: t._maxHeight,
                        maxPopupWidth: t._maxWidth,
                        target: e,
                        windowHeight: t._vpHeight,
                        windowWidth: t._vpWidth
                    };
                    !1 === t._hook("onResize", a) || a.cancel || t.position()
                }
            }, t
        }

        return l(t, e), t.prototype.open = function () {
            this._isOpen || this.setState({isOpen: !0})
        }, t.prototype.close = function () {
            this._close()
        }, t.prototype.isVisible = function () {
            return !!this._isOpen
        }, t.prototype.position = function () {
            if (this._isOpen) {
                var e = this.s, t = this.state, n = this._wrapper, a = this._popup, s = this._hasContext, i = e.anchor,
                    r = e.anchorAlign, o = e.rtl, l = Cn(this._scrollCont), c = Sn(this._scrollCont), d = this._vpWidth,
                    h = this._vpHeight, u = this._maxWidth, m = this._maxHeight, _ = Math.min(a.offsetWidth, u),
                    p = Math.min(a.offsetHeight, m), v = e.showArrow;
                this._lock = e.scrollLock && this._content.scrollHeight <= this._content.clientHeight, s && (n.style.top = l + "px", n.style.left = c + "px");
                var f = !1 === this._hook("onPosition", {
                    isLarge: this._round,
                    maxPopupHeight: m,
                    maxPopupWidth: u,
                    target: this._wrapper,
                    windowHeight: h,
                    windowWidth: d
                });
                if ("anchored" !== e.display || f) this.setState({
                    height: h,
                    isReady: !0,
                    showArrow: v,
                    width: d
                }); else {
                    var g = 0, y = 0, b = ue(t.modalLeft || 0, 8, d - _ - 8), x = t.modalTop || 8, D = "bottom", T = {},
                        S = v ? 16 : 4, C = (n.offsetWidth - d) / 2, w = (n.offsetHeight - h) / 2;
                    if (s) {
                        var k = this._ctx.getBoundingClientRect();
                        y = k.top, g = k.left
                    }
                    if (i && this._ctx.contains(i)) {
                        var M = i.getBoundingClientRect(), E = M.top - y, N = M.left - g, I = i.offsetWidth,
                            L = i.offsetHeight;
                        if (b = ue(b = "start" === r && !o || "end" === r && o ? N : "end" === r && !o || "start" === r && o ? N + I - _ : N - (_ - I) / 2, 8, d - _ - 8), x = E + L + S, T = {left: ue(N + I / 2 - b - C, 30, _ - 30) + "px"}, x + p + S > h) if (E - p - S > 0) D = "top", x = E - p - S; else if (!e.disableLeftRight) {
                            var H = N - _ - 8 > 0;
                            (H || N + I + _ + 8 <= d) && ((x = ue(E - (p - L) / 2, 8, h - p - 8)) + p + 8 > h && (x = Math.max(h - p - 8, 0)), T = {top: ue(E + L / 2 - x - w, 30, p - 30) + "px"}, D = H ? "left" : "right", b = H ? N - _ : N + I)
                        }
                    }
                    "top" !== D && "bottom" !== D || x + p + S > h && (x = Math.max(h - p - S, 0), v = !1), this.setState({
                        arrowPos: T,
                        bubblePos: D,
                        height: h,
                        isReady: !0,
                        modalLeft: b,
                        modalTop: x,
                        showArrow: v,
                        width: d
                    })
                }
            }
        }, t.prototype._render = function (e, t) {
            "bubble" === e.display && (e.display = "anchored");
            var n = e.animation, a = e.display, s = this._prevS, i = "anchored" === a, r = "inline" !== a,
                o = e.fullScreen && r, l = !!r && (e.isOpen === le ? t.isOpen : e.isOpen);
            if (l && (e.windowWidth !== s.windowWidth || e.display !== s.display || e.showArrow !== s.showArrow || e.anchor !== s.anchor && "anchored" === e.display) && (this._shouldPosition = !0), this._limits = {
                maxHeight: De(e.maxHeight),
                maxWidth: De(e.maxWidth)
            }, this._style = {
                height: o ? "100%" : De(e.height),
                left: i && t.modalLeft ? t.modalLeft + "px" : "",
                maxHeight: De(this._maxHeight || e.maxHeight),
                maxWidth: De(this._maxWidth || e.maxWidth),
                top: i && t.modalTop ? t.modalTop + "px" : "",
                width: o ? "100%" : De(e.width)
            }, this._hasContext = "body" !== e.context && e.context !== le, this._needsLock = mi && !this._hasContext && "anchored" !== a && e.scrollLock, this._isModal = r, this._flexButtons = "center" === a || !this._touchUi && !o && ("top" === a || "bottom" === a), n !== le && !0 !== n) this._animation = ve(n) ? n : ""; else switch (a) {
                case"bottom":
                    this._animation = "slide-up";
                    break;
                case"top":
                    this._animation = "slide-down";
                    break;
                default:
                    this._animation = "pop"
            }
            e.buttons ? e.buttons !== s.buttons && (this._buttons = _i(this, e.buttons)) : this._buttons = le, e.headerText !== s.headerText && (this._headerText = e.headerText ? this._safeHtml(e.headerText) : le), l && !this._isOpen && this._onOpen(), !l && this._isOpen && this._onClose(), this._isOpen = l, this._isVisible = l || this._isClosing
        }, t.prototype._updated = function () {
            var e = this, t = this.s, n = this._wrapper;
            if (en && (t.context !== this._prevS.context || !this._ctx) && ((a = ve(t.context) ? en.querySelector(t.context) : t.context) || (a = en.body), a.__mbscLock = a.__mbscLock || 0, a.__mbscIOSLock = a.__mbscIOSLock || 0, a.__mbscModals = a.__mbscModals || 0, this._ctx = a, this._justOpened)) return void Ie(this, (function () {
                e.forceUpdate()
            }));
            if (n) {
                if (this._justOpened) {
                    var a = this._ctx, s = this._hasContext, i = this._doc = Dn(n), r = this._win = wn(n),
                        o = i.activeElement;
                    if (!this._hasWidth && t.responsive) {
                        var l = Math.min(n.clientWidth, s ? 1 / 0 : r.innerWidth),
                            c = Math.min(n.clientHeight, s ? 1 / 0 : r.innerHeight);
                        if (this._hasWidth = !0, l !== this.state.width || c !== this.state.height) return void Ie(this, (function () {
                            e.setState({height: c, width: l})
                        }))
                    }
                    if (this._scrollCont = s ? a : r, this._observer = li(n, this._onResize, this._zone), this._prevFocus = t.focusElm || o, a.__mbscModals++, this._needsLock) {
                        if (!a.__mbscIOSLock) {
                            var d = Cn(this._scrollCont), h = Sn(this._scrollCont);
                            a.style.left = -h + "px", a.style.top = -d + "px", a.__mbscScrollLeft = h, a.__mbscScrollTop = d, a.classList.add("mbsc-popup-open-ios"), a.parentNode.classList.add("mbsc-popup-open-ios")
                        }
                        a.__mbscIOSLock++
                    }
                    s && a.classList.add("mbsc-popup-ctx"), t.focusTrap && bn(r, Ys, this._onFocus), t.focusElm && !t.focusOnOpen && bn(t.focusElm, Fs, this._onKeyDown), bn(this._scrollCont, Xs, this._onContentScroll, {passive: !1}), bn(this._scrollCont, Gs, this._onContentScroll, {passive: !1}), bn(this._scrollCont, Us, this._onContentScroll, {passive: !1}), setTimeout((function () {
                        t.focusOnOpen && o && o.blur(), un && e._animation || e._onOpened(), bn(i, Vs, e._onMouseDown), bn(i, Rs, e._onMouseUp), bn(i, Is, e._onDocClick)
                    })), this._hook("onOpen", {target: this._wrapper})
                }
                this._shouldPosition && Ie(this, (function () {
                    e._onResize()
                })), this._justOpened = !1, this._justClosed = !1, this._shouldPosition = !1
            }
        }, t.prototype._destroy = function () {
            this._isOpen && (this._onClosed(), this._unlisten(), ks === this && (ks = pi(this)))
        }, t.prototype._onOpen = function () {
            var e = this;
            un && this._animation && (this._isOpening = !0, this._isClosing = !1), this._justOpened = !0, this._preventClose = !1, this.s.setActive && ks !== this && setTimeout((function () {
                e._prevModal = ks, ks = e
            }))
        }, t.prototype._onClose = function () {
            var e = this;
            un && this._animation ? (this._isClosing = !0, this._isOpening = !1) : setTimeout((function () {
                e._onClosed(), e.setState({isReady: !1})
            })), this._hasWidth = !1, this._unlisten()
        }, t.prototype._onOpened = function () {
            var e = this.s;
            if (e.focusOnOpen) {
                var t = e.activeElm, n = t ? ve(t) ? this._popup.querySelector(t) || this._active : t : this._active;
                n && n.focus && n.focus()
            }
            bn(this._win, Fs, this._onWndKeyDown), bn(this._scrollCont, js, this._onScroll)
        }, t.prototype._onClosed = function () {
            var e = this, t = this._ctx, n = this._prevFocus,
                a = this.s.focusOnClose && n && n.focus && n !== this._doc.activeElement;
            t.__mbscModals--, this._justClosed = !0, this._needsLock && (t.__mbscIOSLock--, t.__mbscIOSLock || (t.classList.remove("mbsc-popup-open-ios"), t.parentNode.classList.remove("mbsc-popup-open-ios"), t.style.left = "", t.style.top = "", function (e, t) {
                e.scrollTo ? e.scrollTo(t, e.scrollY) : e.scrollLeft = t
            }(this._scrollCont, t.__mbscScrollLeft), function (e, t) {
                e.scrollTo ? e.scrollTo(e.scrollX, t) : e.scrollTop = t
            }(this._scrollCont, t.__mbscScrollTop))), this._hasContext && !t.__mbscModals && t.classList.remove("mbsc-popup-ctx"), this._hook("onClosed", {focus: a}), a && n.focus(), setTimeout((function () {
                ks === e && (ks = pi(e))
            }))
        }, t.prototype._unlisten = function () {
            xn(this._win, Fs, this._onWndKeyDown), xn(this._scrollCont, js, this._onScroll), xn(this._scrollCont, Xs, this._onContentScroll, {passive: !1}), xn(this._scrollCont, Gs, this._onContentScroll, {passive: !1}), xn(this._scrollCont, Us, this._onContentScroll, {passive: !1}), xn(this._doc, Vs, this._onMouseDown), xn(this._doc, Rs, this._onMouseUp), xn(this._doc, Is, this._onDocClick), this.s.focusTrap && xn(this._win, Ys, this._onFocus), this.s.focusElm && xn(this.s.focusElm, Fs, this._onKeyDown), this._observer && (this._observer.detach(), this._observer = null)
        }, t.prototype._close = function (e) {
            this._isOpen && (this.s.isOpen === le && this.setState({isOpen: !1}), this._hook("onClose", {source: e}))
        }, t.defaults = {
            buttonVariant: "flat",
            cancelText: "Cancel",
            closeOnEsc: !0,
            closeOnOverlayClick: !0,
            closeText: "Close",
            contentPadding: !0,
            display: "center",
            focusOnClose: !0,
            focusOnOpen: !0,
            focusTrap: !0,
            maxWidth: 600,
            okText: "Ok",
            scrollLock: !0,
            setActive: !0,
            setText: "Set",
            showArrow: !0,
            showOverlay: !0
        }, t
    }(ja);

    function fi(e, t, n) {
        void 0 === n && (n = 0), n > 10 ? (delete e.__mbscTimer, t(e)) : (clearTimeout(e.__mbscTimer), e.__mbscTimer = setTimeout((function () {
            e.getInputElement ? e.getInputElement().then((function (a) {
                a ? (delete e.__mbscTimer, t(a)) : fi(e, t, n + 1)
            })) : fi(e, t, n + 1)
        }), 10))
    }

    function gi(e, t) {
        if (e) if (function (e) {
            return e.getInputElement || e.tagName && "ion-input" === e.tagName.toLowerCase()
        }(e)) fi(e, t); else if (e.vInput) t(e.vInput.nativeElement); else if (e._el) t(e._el); else if (e.instance && e.instance._el) t(e.instance._el); else if (1 === e.nodeType) t(e); else if (ve(e)) {
            var n = en.querySelector(e);
            n && t(n)
        }
    }

    function yi(e, t, n, a) {
        if (!e || 1 !== e.nodeType) return Te;
        var s, i = function () {
            (t.s.showOnClick || t.s.showOnFocus) && _ && !t._allowTyping && (p.readOnly = !0)
        }, r = function (n) {
            var s = t.s;
            i(), a && a(n), !s.showOnClick || s.disabled || t._popup._isVisible && e === t._popup._prevFocus || setTimeout((function () {
                t._focusElm = e, t._anchor = s.anchor || e, t.open()
            }))
        }, o = function (e) {
            t.s.showOnClick && (t.s.showOnFocus && (t._preventShow = !0), t._allowTyping || e.preventDefault())
        }, l = function (e) {
            t.s.showOnClick && (t._isOpen ? e.keyCode === Zs && t._allowTyping && e.stopPropagation() : (e.keyCode === Qs && e.preventDefault(), e.keyCode !== Zs && e.keyCode !== Qs || r(e)))
        }, c = function (e) {
            i(), t.s.showOnFocus && (t._preventShow ? t._preventShow = !1 : r(e))
        }, d = function () {
            _ && (p.readOnly = s)
        }, h = function (e) {
            n && n(e)
        }, u = function () {
            m.document.activeElement === e && (i(), t._preventShow = !0)
        }, m = wn(e), _ = Ln(e, "input,select"), p = e;
        return _ && (p.autocomplete = "off", s = p.readOnly), bn(e, Is, r), bn(e, Vs, o), bn(e, Fs, l), bn(e, Os, c), bn(e, Es, d), bn(e, Ns, h), bn(m, Os, u), function () {
            _ && (p.readOnly = s), xn(e, Is, r), xn(e, Vs, o), xn(e, Fs, l), xn(e, Os, c), xn(e, Es, d), xn(e, Ns, h), xn(m, Os, u)
        }
    }

    var bi = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._nullSupport = !0, t._onInputChange = function (e, n) {
                var a = e.detail || (n !== le ? n : e.target.value);
                if (a !== t._tempValueText && !t._preventChange) {
                    t._readValue(a, !0), t._valueTextChange = a !== t._tempValueText;
                    var s = fe(a) ? null : t._get(t._tempValueRep);
                    t.value = s, t._valueChange(s)
                }
                t._preventChange = !1
            }, t._onResize = function (e) {
                t._hook("onResize", e)
            }, t._onWrapperResize = function () {
                t._wrapper && t._onResize({windowWidth: t._wrapper.offsetWidth})
            }, t._onPopupClose = function (e) {
                /cancel|esc|overlay|scroll/.test(e.source) && t._hook("onCancel", {
                    value: t.value,
                    valueText: t._valueText
                }), t.close()
            }, t._onPopupClosed = function (e) {
                e.focus && (t._preventShow = !0), t._hook("onClosed", e), t._onClosed()
            }, t._onPopupKey = function (e) {
                13 === e.keyCode && t._onEnterKey(e)
            }, t._onPopupOpen = function (e) {
                e.value = t.value, e.valueText = t._valueText, t._hook("onOpen", e)
            }, t._onButtonClick = function (e) {
                var n = e.domEvent, a = e.button;
                "set" === a.name && t.set(), t._popup && t._popup._onButtonClick({domEvent: n, button: a})
            }, t._setInput = function (e) {
                t._el = e && e.nativeElement ? e.nativeElement : e
            }, t._setPopup = function (e) {
                t._popup = e
            }, t._setWrapper = function (e) {
                t._wrapper = e
            }, t
        }

        return l(t, e), t.prototype.open = function () {
            this._inst ? this._inst.open() : this.s.isOpen === le && this.setState({isOpen: !0})
        }, t.prototype.close = function () {
            if ("inline" !== this.s.display) if (this._inst) this._inst.close(); else {
                var e = {value: this.value, valueText: this._valueText};
                this.s.isOpen === le && this.setState({isOpen: !1}), this._hook("onClose", e)
            }
        }, t.prototype.set = function () {
            this._valueRep = this._copy(this._tempValueRep), this._valueText = this._tempValueText, this._value = this.value = this._get(this._valueRep), this._valueChange(this.value)
        }, t.prototype.position = function () {
            this._inst ? this._inst.position() : this._popup && this._popup.position()
        }, t.prototype.isVisible = function () {
            return this._inst ? this._inst.isVisible() : !!this._popup && this._popup.isVisible()
        }, t.prototype.getVal = function () {
            return this._nullSupport && fe(this._value) ? null : this._get(this._valueRep)
        }, t.prototype.setVal = function (e) {
            this.value = e, this.setState({value: e})
        }, t.prototype.getTempVal = function () {
            return this._get(this._tempValueRep)
        }, t.prototype.setTempVal = function (e) {
            this._tempValueSet = !0, this._tempValueRep = this._parse(e), this._setOrUpdate(!0)
        }, t.prototype._shouldValidate = function (e, t) {
            return !1
        }, t.prototype._valueEquals = function (e, t) {
            return e === t
        }, t.prototype._change = function (e) {
        }, t.prototype._render = function (e, t) {
            var n = this, a = this.props || {}, s = this._respProps || {}, i = this._prevS;
            this._touchUi || (e.display = s.display || a.display || C.display || "anchored", e.showArrow = s.showArrow || a.showArrow || !1), "bubble" === e.display && (e.display = "anchored"), this._scrollLock = e.scrollLock;
            var r = e.isOpen !== le ? e.isOpen : t.isOpen, o = e.modelValue !== le ? e.modelValue : e.value,
                l = o !== le ? o : t.value === le ? e.defaultValue : t.value;
            if (this._showInput = e.showInput !== le ? e.showInput : "inline" !== e.display && e.element === le, (!this._buttons || e.buttons !== i.buttons || e.display !== i.display || e.setText !== i.setText || e.cancelText !== i.cancelText || e.closeText !== i.closeText || e.touchUi !== i.touchUi) && (this._buttons = _i(this, e.buttons || ("inline" === e.display || "anchored" === e.display && !this._touchUi ? [] : ["cancel", "set"])), this._live = !0, this._buttons && this._buttons.length)) for (var c = 0, d = this._buttons; c < d.length; c++) {
                var h = d[c];
                "ok" !== h.name && "set" !== h.name || (this._live = !1)
            }
            if (!this._valueEquals(l, this._value) || this._tempValueRep === le || this._shouldValidate(e, i) || e.defaultSelection !== i.defaultSelection || e.invalid !== i.invalid || e.valid !== i.valid) {
                this._readValue(l);
                var u = this._get(this._tempValueRep), m = !(this._valueEquals(l, u) || this._nullSupport && fe(l));
                this._setHeader(), clearTimeout(this._handler), this._handler = setTimeout((function () {
                    n.value = l, m && n._valueChange(u), n._valueEquals(n._tempValue, u) || n._inst !== le || n._hook("onTempChange", {value: u})
                }))
            }
            if (e.headerText !== i.headerText && this._setHeader(), r && !this._isOpen) {
                if (!this._tempValueSet || this._live) {
                    var _ = this._get(this._tempValueRep), v = this._get(this._valueRep);
                    this._tempValueRep = this._copy(this._valueRep), this._tempValueText = this._format(this._tempValueRep), this._tempValue = _, this._setHeader(), this._valueEquals(_, v) || setTimeout((function () {
                        n._hook("onTempChange", {value: v})
                    }))
                }
                this._onOpen()
            }
            this._allowTyping = e.inputTyping && !p && !this._touchUi, this._anchorAlign = e.anchorAlign || (this._touchUi ? "center" : "start"), this._cssClass = "mbsc-picker " + (e.cssClass || ""), this._isOpen = r, this._maxWidth = e.maxWidth, this._valueTextChange = this._valueTextChange || this._oldValueText !== this._valueText, this._oldValueText = this._valueText, this._value = l, this._shouldInitInput = this._shouldInitInput || i.display === le || "inline" === e.display && "inline" !== i.display || "inline" !== e.display && "inline" === i.display || e.element !== i.element
        }, t.prototype._updated = function () {
            var e = this, t = this.s, n = this._input;
            this._shouldInitInput && !this._inst && (this._unlisten(), this._wrapper && "inline" === t.display && (this._observer = li(this._wrapper, this._onWrapperResize, this._zone)), gi(t.element || this._el, (function (n) {
                e._el = n, "inline" !== t.display && (e._resetEl = yi(n, e, e._onInputChange)), Ln(n, "input,select") && (e._input = n, e._write(n))
            }))), this._valueTextChange && n && this._write(n), this._shouldInitInput = !1, this._valueTextChange = !1, this._anchor = t.anchor || this._focusElm || t.element || this._el
        }, t.prototype._writeValue = function (e, t, n) {
            var a = e.value;
            return e.value = t, a !== t
        }, t.prototype._destroy = function () {
            this._unlisten(), this._shouldInitInput = !0
        }, t.prototype._setHeader = function () {
            var e = this.s.headerText;
            this._headerText = e ? e.replace(/\{value\}/i, this._tempValueText || "&nbsp;") : le
        }, t.prototype._setOrUpdate = function (e) {
            var t = this._get(this._tempValueRep);
            this._tempValue = t, this._tempValueText = this._format(this._tempValueRep), this._setHeader(), e || this._hook("onTempChange", {value: t}), this._live ? this.set() : this.forceUpdate()
        }, t.prototype._copy = function (e) {
            return e
        }, t.prototype._format = function (e) {
            return e
        }, t.prototype._get = function (e) {
            return e
        }, t.prototype._parse = function (e, t) {
            return e
        }, t.prototype._validate = function () {
        }, t.prototype._onClosed = function () {
        }, t.prototype._onOpen = function () {
        }, t.prototype._onParse = function () {
        }, t.prototype._onEnterKey = function (e) {
            this.set(), this.close()
        }, t.prototype._valueChange = function (e) {
            this.s.value === le && this.setState({value: e}), this._change(e), this._hook("onChange", {
                value: e,
                valueText: this._tempValueText
            })
        }, t.prototype._readValue = function (e, t) {
            this._tempValueRep = this._parse(e, t), this._onParse(), this._validate(), this._tempValueText = this._format(this._tempValueRep), this._valueRep = this._copy(this._tempValueRep), this._valueText = fe(e) ? "" : this._tempValueText
        }, t.prototype._unlisten = function () {
            this._resetEl && (this._resetEl(), this._resetEl = le), this._observer && (this._observer.detach(), this._observer = le)
        }, t.prototype._write = function (e) {
            var t = this, n = this._value;
            this._writeValue(e, this._valueText || "", n) && setTimeout((function () {
                t._preventChange = !0, On(e, Ps), On(e, Ns)
            }));
            var a = e.__mbscFormInst;
            a && a.setOptions({pickerMap: this.s.valueMap, pickerValue: n})
        }, t.defaults = {
            cancelText: "Cancel",
            closeText: "Close",
            focusOnClose: "android" !== h,
            okText: "Ok",
            setText: "Set",
            showOnFocus: p
        }, t
    }(ja);

    function xi(e, t, n, a, s, i) {
        var r = sa(t);
        if (s && +t < s || i && +t > i) return !0;
        if (a && a[r]) return !1;
        var o = n && n[r];
        if (o) for (var l = 0, c = o; l < c.length; l++) {
            var d = c[l], h = d.start, u = d.end, m = d.allDay;
            if (!h || !u || m) return d;
            var _ = aa(e, m, h, u), p = ta(e, t), v = na(e, _);
            if (!da(h, u) && (+h == +p || +_ == +v || !da(t, h) && !da(t, u) && t > h && t < u)) return d
        }
        return !1
    }

    function Di(e, t, n, a, s, i, r) {
        var o, l, c = !0, d = !0, h = 0, u = 0;
        +e < n && (e = fa(t, n)), +e > a && (e = fa(t, a));
        var m = t.getYear(e), _ = t.getMonth(e), p = t.getDate(m, _ - 1, 1), v = t.getDate(m, _ + 2, 1),
            f = +p > n ? +p : n, g = +v < a ? +v : a;
        if (s || (i = os(t.valid, p, v, t, !0), s = os(t.invalid, p, v, t, !0)), !xi(t, e, s, i, n, a)) return e;
        for (o = e, l = e; c && +o < g && h < 100;) c = xi(t, o = Ca(o, 1), s, i, n, a), h++;
        for (; d && +l > f && u < 100;) d = xi(t, l = Ca(l, -1), s, i, n, a), u++;
        return c && d ? e : 1 !== r || c ? -1 !== r || d ? ha(e, o, t) && !c ? o : ha(e, l, t) && !d ? l : d || u >= h && !c ? o : l : l : o
    }

    var Ti = {}, Si = " - ", Ci = ["calendar"], wi = [{recurring: {repeat: "daily"}}];

    function ki(e) {
        return "start" === e ? "end" : "start"
    }

    function Mi(e, t) {
        var n = ca(new Date(e), t, t.firstSelectDay !== le ? t.firstSelectDay : t.firstDay),
            a = new Date(n.getFullYear(), n.getMonth(), n.getDate() + t.selectSize - 1);
        return {start: n, end: a}
    }

    var Ei = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._iso = {}, t._remote = 0, t._onActiveChange = function (e) {
                t._active = e.date, t.forceUpdate()
            }, t._onResize = function (e) {
                var n = e.windowWidth;
                e.cancel = t.state.width !== n, t.setState({
                    isLarge: e.isLarge,
                    maxPopupWidth: e.maxPopupWidth,
                    width: n,
                    widthType: n > 600 ? "md" : "sm"
                })
            }, t._onDayHoverIn = function (e) {
                var n = e.date, a = e.hidden;
                t.setState({hoverDate: a ? le : +n})
            }, t._onDayHoverOut = function (e) {
                var n = e.date;
                t.state.hoverDate === +n && t.setState({hoverDate: le})
            }, t._onCellClick = function (e) {
                t._lastSelected = pa(t.s, e.date), e.active = t._activeSelect, t._hook("onCellClick", e)
            }, t._onCalendarChange = function (e) {
                t._tempValueSet = !1;
                var n = t.s, a = t._copy(t._tempValueRep), s = Ye(e.value, (function (e) {
                        return pa(n, e)
                    })), i = "preset-range" === n.select, r = "range" === n.select, o = r && t._newSelection,
                    l = (r || i) && n.exclusiveEndDates && !t._hasTime;
                if (l && a.end && (a.end = +ta(n, fa(n, a.end - 1))), t._hasTime && t._selectedTime && !r) if (t.s.selectMultiple) {
                    var c = s[s.length - 1];
                    c && c.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes())
                } else s.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes());
                if (r || i) {
                    var d = t._getDate(a), h = d.filter((function (e) {
                        return null !== e
                    })), u = h.map((function (e) {
                        return +e
                    })), m = h.map((function (e) {
                        return +ia(e)
                    })), _ = s.filter((function (e) {
                        return m.indexOf(+e) < 0
                    }))[0];
                    if (i) {
                        if (_) {
                            var p = Mi(+_, n), v = p.start, f = p.end;
                            a.start = +v, a.end = +f
                        }
                    } else {
                        var g = !t._hasTime, y = t._renderControls, b = t._activeSelect, x = ki(b);
                        if (_) {
                            switch (t._hasTime && t._selectedTime && _.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds()), u.length) {
                                case 0:
                                    (a = {})[b] = +_;
                                    break;
                                case 1:
                                    if (y) {
                                        a[b] = +_;
                                        break
                                    }
                                    u[0] > +_ || "start" === t._activeSelect ? t._hasTime ? a[b] = +_ : (a = {start: +_}, g = !1) : a.end = +_;
                                    break;
                                case 2:
                                    if (y) {
                                        a[b] = +_;
                                        break
                                    }
                                    u[0] > +_ || "start" === t._activeSelect ? t._hasTime ? a[b] = +_ : (a = {start: +_}, "end" === t._activeSelect && (g = !1)) : "end" === t._activeSelect && (a.end = +_)
                            }
                            y && a.start && a.end && a.start > a.end && (a = {start: +_}, t._setActiveSelect("end"))
                        } else {
                            var D = void 0;
                            D = 1 === u.length ? fa(n, u[0]) : t._lastSelected, t._hasTime && t._selectedTime ? D.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds()) : !n.exclusiveEndDates && !t._hasTime && "end" === t._activeSelect && d[0] && da(D, d[0]) && D.setHours(23, 59, 59, 999), y || t._hasTime ? a[b] = +D : "start" === t._activeSelect ? a = {start: +D} : a.end = +D
                        }
                        if (a.start && a.end) {
                            if (a.start > a.end) {
                                var T = fa(n, a.start), S = fa(n, a.end);
                                da(T, S) ? (S.setHours(T.getHours(), T.getMinutes(), T.getSeconds(), T.getMilliseconds()), a.end = +S) : a.end = le
                            }
                            if (n.minRange && a.end) {
                                var C = t._hasTime ? a.start + n.minRange : +Ca(fa(n, a.start), n.minRange - 1);
                                a.end < C && (!t._hasTime || "start" === b) && (a.end = le)
                            }
                            if (n.maxRange && a.end) {
                                C = t._hasTime ? a.start + n.maxRange : +Ca(fa(n, a.start), n.maxRange) - 1;
                                a.end > C && (!t._hasTime || "start" === b) && (a.end = le)
                            }
                            if (a.end && "start" === b && !n.inRangeInvalid) {
                                var w = n.valid ? Ca(ss(n.valid, fa(n, a.start), n), 1) : as(n.invalid || [], fa(n, a.start), n);
                                null !== w && +w < a.end && (a.end = le)
                            }
                        }
                        g && (t._newSelection || !t._renderControls || t._newSelection === le && "inline" === t.s.display) && (t._setActiveSelect(x), t._newSelection = !1)
                    }
                } else if (a = {date: {}}, t.s.selectMultiple) for (var k = 0, M = s; k < M.length; k++) {
                    var E = M[k];
                    a.date[+E] = E
                } else {
                    if (t._hasTime) {
                        var N = t._selectedTime || new Date;
                        s.setHours(N.getHours(), N.getMinutes(), N.getSeconds(), N.getMilliseconds())
                    }
                    a.date[+s] = s
                }
                t._tempValueRep = a, l && a.end && (a.end = +ta(n, Ca(fa(n, a.end), 1))), t._setOrUpdate(), !t._live || t.s.selectMultiple && !r || t._hasTime || r && (!a.start || !a.end || o) || t.close()
            }, t._onDatetimeChange = function (e) {
                var n = t.s, a = "range" === n.select, s = pa(n, e.value), i = t._hasTime ? s : ia(s), r = +i;
                t._tempValueSet = !1;
                var o = t._copy(t._tempValueRep), l = a && n.exclusiveEndDates && !t._hasTime;
                if (l && o.end && (o.end = +ta(n, fa(n, o.end - 1))), a) if ("start" === t._activeSelect) {
                    if (t._hasTime && t._selectedTime && i.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds()), o.start = r, o.end) {
                        var c = n.minRange && !t._hasTime ? 24 * (n.minRange - 1) * 60 * 60 * 1e3 - 1 : n.minRange || 0;
                        o.end - o.start < c && (o.end = le)
                    }
                } else t._hasTime ? t._selectedTime && i.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds()) : o.start !== +ia(i) || n.exclusiveEndDates || i.setHours(23, 59, 59, 999), o.end = +i; else {
                    if (t._hasTime && t._hasDate && n.controls.indexOf("datetime") < 0) {
                        var d = t._selectedTime || new Date;
                        i.setHours(d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds())
                    } else t._selectedTime = fa(n, i);
                    (o = {date: {}}).date[+i] = i
                }
                t._tempValueRep = o, l && o.end && (o.end = +ta(n, Ca(fa(n, o.end), 1))), t._setOrUpdate()
            }, t._onTimePartChange = function (e) {
                t._tempValueSet = !1;
                var n = t.s, a = "range" === n.select, s = pa(n, e.value);
                if (t._selectedTime = s, a) {
                    var i = t._getDate(t._tempValueRep), r = "start" === t._activeSelect ? 0 : 1;
                    if (i[r]) (o = fa(n, i[r])).setHours(s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds()), i[r] = o, "start" === t._activeSelect && +o > +i[1] && (i.length = 1), t._tempValueRep = t._parse(i); else t._selectedTime.setHours(s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds())
                } else if (!n.selectMultiple) {
                    var o;
                    (o = t._getDate(t._tempValueRep)) ? (o.setHours(s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds()), t._tempValueRep = {date: {}}, t._tempValueRep.date[+o] = o) : (t._selectedTime.setHours(s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds()), t._live && t.forceUpdate())
                }
                t._setOrUpdate()
            }, t._changeActiveTab = function (e) {
                t.setState({activeTab: e.target.value})
            }, t._changeActiveSelect = function (e) {
                var n = e.target.value;
                t._setActiveSelect(n), t.setActiveDate(n)
            }, t._clearEnd = function () {
                t._tempValueRep.end = le, t._hasTimegrid && (t._selectedTime = le), t._setOrUpdate()
            }, t._clearStart = function () {
                t._tempValueRep = {}, t._newSelection = !0, t._hasTimegrid && (t._selectedTime = le), t._setOrUpdate()
            }, t._proxy = function (e) {
                t._hook(e.type, e)
            }, t._onInputClickRange = function (e) {
                var n = e.target === t._startInput || t._renderControls ? "start" : "end";
                t._setActiveSelect(n)
            }, t._onInputChangeRange = function (e) {
                var n = t._startInput, a = t._endInput, s = (n ? n.value : "") + (a && a.value ? Si + a.value : "");
                t._onInputChange(e, s)
            }, t
        }

        return l(t, e), t.prototype.setActiveDate = function (e) {
            var t = ki(e);
            this._activeSelect = e;
            var n = this._tempValueRep[e], a = this._tempValueRep[t];
            this._tempValueRep.start && this._tempValueRep.end || !n && a ? this._newSelection = !1 : n && !a && (this._newSelection = !0), n && (this._active = n), !n && this._hasTimegrid && (this._selectedTime = le), this.forceUpdate()
        }, t.prototype.getTempVal = function () {
            return e.prototype.getTempVal.call(this)
        }, t.prototype.setTempVal = function (t) {
            e.prototype.setTempVal.call(this, t)
        }, t.prototype.navigate = function (e) {
            this._active = +ga(e), this.forceUpdate()
        }, t.prototype._shouldValidate = function (e, t) {
            return e.controls !== t.controls || e.dataTimezone !== t.dataTimezone || e.displayTimezone !== t.displayTimezone || e.dateFormat !== t.dateFormat || e.timeFormat !== t.timeFormat || e.locale !== t.locale || e.min !== t.min || e.max !== t.max
        }, t.prototype._valueEquals = function (e, t) {
            var n = me(e) && 0 === e.length || e === le || null === e,
                a = me(t) && 0 === t.length || t === le || null === t;
            return n && n === a || Ta(e, t, this.s)
        }, t.prototype.setVal = function (t) {
            if ("range" === this.s.select && t) {
                var n = t[0], a = t[1];
                this._savedStartValue = +ga(n, this.s, this._valueFormat), this._savedEndValue = +ga(a, this.s, this._valueFormat)
            }
            e.prototype.setVal.call(this, t)
        }, t.prototype._init = function () {
            this.props.modules && this.props.modules.forEach((function (e) {
                Ti[e._name] = e
            }))
        }, t.prototype._render = function (t, n) {
            var a = this;
            t.inRangeInvalid && (t.rangeEndInvalid = !1), "preset-range" === t.select && (t.controls = Ci), t.exclusiveEndDates === le && (t.exclusiveEndDates = !!t.displayTimezone);
            var s = this._hasTime, i = this._hasDate = !!Le(t.controls, (function (e) {
                return /date|calendar/.test(e)
            })), r = this._hasTime = !!Le(t.controls, (function (e) {
                return /time/.test(e)
            }));
            r || (t.timezonePlugin = t.dataTimezone = t.displayTimezone = le), !t.valid || t.invalid && !r || (t.invalid = wi);
            var o = this._prevS;
            t.buttons;
            var l = t.calendarSize;
            t.children, t.className;
            var h = t.controls;
            t.cssClass, t.element, t.modelValue, t.onDestroy, t.onInit, t.onTempChange, t.responsive;
            var u = t.select, m = t.selectMultiple, _ = t.tabs,
                p = d(t, ["buttons", "calendarSize", "children", "className", "controls", "cssClass", "element", "modelValue", "onDestroy", "onInit", "onTempChange", "responsive", "select", "selectMultiple", "tabs"]),
                v = n.widthType || "sm", f = "date" !== u;
            if (this._renderTabs = h.length > 1 && ("auto" === _ ? "sm" === v : _), u !== o.select && this._tempValueRep) if (f && this._tempValueRep.date) {
                var g = Object.keys(this._tempValueRep.date).map((function (e) {
                    return +e
                })).sort(), y = g[0], b = g[1];
                this._tempValueRep.start = y, this._tempValueRep.end = b, this._tempValueRep.date = le, this._tempValueText = this._format(this._tempValueRep), setTimeout((function () {
                    a.set()
                }))
            } else if (!f && (this._tempValueRep.start || this._tempValueRep.end)) {
                this._tempValueRep.date || (this._tempValueRep.date = {});
                var x = this._tempValueRep.start || this._tempValueRep.end;
                this._tempValueRep.date[x] = new Date(x);
                var D = this._tempValueRep.end || this._tempValueRep.start;
                D !== x && t.selectMultiple && (this._tempValueRep.date[D] = new Date(D)), this._tempValueRep.start = le, this._tempValueRep.end = le, this._tempValueText = this._format(this._tempValueRep), setTimeout((function () {
                    a.set()
                }))
            }
            t.min !== o.min && (this._min = fe(t.min) ? le : ga(t.min, t, t.dateFormat)), t.max !== o.max && (this._max = fe(t.max) ? le : ga(t.max, t, t.dateFormat)), t.minTime !== o.minTime && (this._minTime = fe(t.minTime) ? le : ga(t.minTime, t, t.timeFormat)), t.maxTime !== o.maxTime && (this._maxTime = fe(t.maxTime) ? le : ga(t.maxTime, t, t.timeFormat));
            var T = this._tempValueRep && this._tempValueRep.end, S = this._tempValueRep && this._tempValueRep.start,
                C = (i ? t.dateFormat : "") + (r ? (i ? t.separator : "") + t.timeFormat : ""),
                w = JSON.stringify(h) !== JSON.stringify(o.controls);
            if (w) {
                this._controls = [], this._controlsClass = "";
                var k = {
                    c: "datepicker",
                    controls: h,
                    dateFormat: t.dateFormat,
                    dateText: t.dateText,
                    separator: t.separator,
                    timeFormat: t.timeFormat,
                    timeText: t.timeText,
                    v: Wa
                };
                this._remote++, Pa(this), Va("remote", this, k, (function (e) {
                    if (a._remote--, !a._remote) {
                        for (var n = 0, i = Object.keys(e); n < i.length; n++) {
                            var o = i[n];
                            a[o] = e[o]
                        }
                        for (var l = 0, d = a._controls; l < d.length; l++) {
                            var h = d[l];
                            h.Component = Ti["calendar" === h.name ? "Calendar" : "timegrid" === h.name ? "Timegrid" : "Datetime"], a._controlsClass += " mbsc-datepicker-control-" + h.name
                        }
                        if (Fa(e.notification), r || (a._selectedTime = le), w && f && t.exclusiveEndDates && r !== s && (T || S)) {
                            var u = a._savedStartValue, m = a._savedEndValue;
                            setTimeout((function () {
                                if (r) a._tempValueRep.start = u || S, a._tempValueRep.end = m || T; else {
                                    a._savedStartValue = S, a._savedEndValue = T, a._clearSaved = !1;
                                    var e = c({}, t, {
                                        dataTimezone: a.props.dataTimezone,
                                        displayTimezone: a.props.displayTimezone,
                                        timezonePlugin: a.props.timezonePlugin
                                    });
                                    if (S && (a._tempValueRep.start = +va(ta(e, fa(e, S)))), T) {
                                        var n = fa(e, T - 1);
                                        a._tempValueRep.end = +va(fa(e, +na(e, n) + 1))
                                    }
                                }
                                a._valueText = a._tempValueText = a._format(a._tempValueRep), a._valueTextChange = !0, a.set()
                            })), a._valueTextChange = !1
                        }
                        a.forceUpdate()
                    }
                }), "comp_" + this._uid), this._hasCalendar = -1 !== h.indexOf("calendar")
            }
            this._renderControls = f && "preset-range" !== u && (t.showRangeLabels === le || t.showRangeLabels), this._nullSupport = "inline" !== t.display || "date" !== u || !0 === t.selectMultiple, this._valueFormat = C, this._activeTab = n.activeTab || h[0], e.prototype._render.call(this, t, n);
            var M, E = t.value !== le ? t.value !== o.value : n.value !== this._prevStateValue;
            if (f && this._clearSaved && E && (this._savedEndValue = this._savedStartValue = le), this._clearSaved = !0, t.headerText === o.headerText && t.selectCounter === o.selectCounter && t.selectMultiple === o.selectMultiple || this._setHeader(), this._scrollLock = t.scrollLock !== le ? t.scrollLock : !this._hasTimegrid, this._showInput = t.showInput !== le ? t.showInput : this._showInput && (!f || !t.startInput && !t.endInput), this._shouldInitInputs = this._shouldInitInputs || u !== o.select || t.startInput !== o.startInput || t.endInput !== o.endInput, this._shouldInitInput = this._shouldInitInput || this._shouldInitInputs, w || t.dateWheels !== o.dateWheels || t.timeWheels !== o.timeWheels || t.dateFormat !== o.dateFormat || t.timeFormat !== o.timeFormat) {
                var N = t.dateWheels || t.dateFormat, I = t.timeWheels || t.timeFormat, L = this._iso = {};
                i && (/y/i.test(N) && (L.y = 1), /M/.test(N) && (L.y = 1, L.m = 1), /d/i.test(N) && (L.y = 1, L.m = 1, L.d = 1)), r && (/h/i.test(I) && (L.h = 1), /m/.test(I) && (L.i = 1), /s/i.test(I) && (L.s = 1))
            }
            if (f ? (this._activeSelect === le && this._setActiveSelect("start", !0), M = this._selectionNotReady()) : (this._activeSelect = le, M = !1), this._buttons) {
                var H = Le(this._buttons, (function (e) {
                    return "set" === e.name
                }));
                H && H.disabled !== M && (H.disabled = M, this._buttons = this._buttons.slice())
            }
            var O = this._activeSelect;
            this._needsWidth = ("anchored" === t.display || "center" === t.display || "inline" !== t.display && n.isLarge || h.length > 1 && !_) && t.width === le;
            var Y = t.max !== le ? ga(t.max, t, C) : le, P = t.min !== le ? ga(t.min, t, C) : le;
            this._maxLimited = Y, this._minLimited = P;
            var F = this._tempValueRep.start;
            if (F && (this._prevStart !== F || o.valid !== t.valid || o.invalid !== t.invalid)) {
                var V = fa(t, F);
                this._nextInvalid = t.valid ? Ca(ss(t.valid, V, t), 1) : as(t.invalid || [], V, t)
            }
            var z = "end" === O && F;
            if (z) {
                if (!t.inRangeInvalid) {
                    var R = this._nextInvalid;
                    R && (t.rangeEndInvalid ? this._maxLimited = fa(t, +Ca(R, 1) - 1) : this._maxLimited = fa(t, +R - 1))
                }
                this._hasCalendar && !r || (!this._minLimited || ga(this._minLimited, t, C) < fa(t, F)) && (this._minLimited = fa(t, this._tempValueRep.start))
            }
            if (this._minTimeLimited = this._minLimited, z) {
                if (t.minRange) {
                    var A = r ? this._tempValueRep.start + t.minRange : +Ca(fa(t, this._tempValueRep.start), t.minRange) - 1;
                    (!this._minLimited || +ga(this._minLimited, t, C) < A) && (this._minLimited = fa(t, A), this._minTimeLimited = this._minLimited)
                }
                if (this._minTimeLimited === le && this._tempValueRep.start && this._tempValueRep.end && (this._minTimeLimited = fa(t, +this._tempValueRep.start)), t.maxRange !== le) {
                    var W = r ? this._tempValueRep.start + t.maxRange : +Ca(fa(t, this._tempValueRep.start), t.maxRange) - 1;
                    (!this._maxLimited || +ga(this._maxLimited, t, C) > W) && (this._maxLimited = fa(t, W))
                }
            }
            for (var U = 0, B = this._controls; U < B.length; U++) {
                var j = B[U], K = c({}, p, {
                    display: "inline",
                    isOpen: t.isOpen || n.isOpen,
                    max: this._maxLimited,
                    min: this._minLimited
                });
                if (t.rangeEndInvalid && z && this._nextInvalid && (K.valid = (K.valid || []).concat([this._nextInvalid])), "calendar" === j.name) {
                    K.min = this._minLimited ? ia(this._minLimited) : le, K.max = this._maxLimited ? ia(this._maxLimited) : le, K.selectRange = f, K.width = this._needsWidth ? us * ys(t.pages, n.maxPopupWidth) : le, "week" === t.calendarType && l ? K.weeks = l : K.size = l;
                    var X = "auto" === t.pages ? 3 : t.pages || 1;
                    if (this._maxWidth = t.maxWidth || (X > 2 ? us * X : le), f) {
                        var J = this._getDate(this._tempValueRep), q = J[1];
                        q && t.exclusiveEndDates && !r && (J[1] = fa(t, +q - 1));
                        var G = J.filter((function (e) {
                            return null !== e
                        })).map((function (e) {
                            return +ia(e)
                        })).filter((function (e, t, n) {
                            return n.indexOf(e) === t
                        })).map((function (e) {
                            return new Date(e)
                        }));
                        if (K.value = G, t.rangeHighlight) if (K.rangeStart = J[0] && +ia(va(J[0])), K.rangeEnd = J[1] && +ia(va(J[1])), K.onDayHoverIn = this._onDayHoverIn, K.onDayHoverOut = this._onDayHoverOut, "preset-range" === u) {
                            if (n.hoverDate) {
                                var Z = Mi(n.hoverDate, t);
                                y = Z.start, b = Z.end;
                                K.hoverStart = +y, K.hoverEnd = +b
                            }
                        } else "end" === O && J[0] && (K.hoverStart = K.rangeEnd || K.rangeStart, K.hoverEnd = n.hoverDate), "start" === O && J[1] && this._renderControls && (K.hoverStart = n.hoverDate, K.hoverEnd = K.rangeStart || K.rangeEnd)
                    } else K.selectMultiple = m, K.value = this._getDate(this._tempValueRep);
                    for (var Q = me(K.value) ? K.value : [K.value], $ = K.min ? +K.min : -1 / 0, ee = K.max ? +K.max : 1 / 0, te = void 0, ne = 0, ae = Q; ne < ae.length; ne++) {
                        var se = ae[ne];
                        !te && se >= $ && se <= ee && (te = +se)
                    }
                    !te && f && Q.length && (te = +Q[0]), te === this._selectedDate && this._active !== le && t.min === o.min && t.max === o.max || (this._selectedDate = te, this._active = te ? +ia(new Date(te)) : ue(this._active || +ia(new Date), $, ee));
                    var ie = t.dateWheels || t.dateFormat,
                        re = /d/i.test(ie) ? cs : /m/i.test(ie) ? ds : /y/i.test(ie) ? hs : cs;
                    K.active = this._active, K.onActiveChange = this._onActiveChange, K.onChange = this._onCalendarChange, K.onCellClick = this._onCellClick, K.onCellHoverIn = this._proxy, K.onCellHoverOut = this._proxy, K.onLabelClick = this._proxy, K.onPageChange = this._proxy, K.onPageLoaded = this._proxy, K.onPageLoading = this._proxy, K.selectView = re
                } else {
                    var oe = Object.keys(this._tempValueRep.date || {});
                    if (K.displayStyle = "bottom" !== t.display && "top" !== t.display || !this._hasCalendar && !this._renderTabs ? t.display : "center", K.mode = j.name, "time" !== j.name && "timegrid" !== j.name || !i) if (K.onChange = this._onDatetimeChange, f) {
                        var ce = this._tempValueRep[O], de = this._tempValueRep[ki(O)];
                        K.value = ce ? fa(t, ce) : de ? fa(t, de) : null, "end" === O && t.exclusiveEndDates && !r && (K.value = fa(t, +K.value - 1))
                    } else {
                        var he = this._tempValueRep.date && this._tempValueRep.date[oe[0]], _e = he;
                        he && (r || (_e = ia(he))), K.value = _e || null
                    } else {
                        if (K.onChange = this._onTimePartChange, f) {
                            var pe = this._tempValueRep[O], ve = void 0;
                            this._selectedTime && (!this._minTimeLimited || this._selectedTime > this._minTimeLimited ? ve = this._selectedTime : (ve = fa(t, this._minTimeLimited)).setHours(this._selectedTime.getHours(), this._selectedTime.getMinutes(), this._selectedTime.getSeconds(), this._selectedTime.getMilliseconds()));
                            var ge = fa(t);
                            ge.setSeconds(0, 0), this._selectedTime = pe ? fa(t, pe) : ve || ("time" === j.name ? ge : le), K.value = this._selectedTime
                        } else if (!t.selectMultiple) {
                            var ye = this._tempValueRep.date && this._tempValueRep.date[oe[0]] || this._selectedTime;
                            this._selectedTime = K.value = ye
                        }
                        K.min = this._minTimeLimited, K.max = this._maxLimited
                    }
                    if ("time" === j.name || "timegrid" === j.name) {
                        var be = K.value || Ea(new Date, K.min, K.max);
                        if (this._minTime) {
                            var xe = this._minTime;
                            $ = new Date(be.getFullYear(), be.getMonth(), be.getDate(), xe.getHours(), xe.getMinutes(), xe.getSeconds(), xe.getMilliseconds());
                            (!K.min || $ > K.min) && (K.min = $)
                        }
                        if (this._maxTime) {
                            var De = this._maxTime;
                            ee = new Date(be.getFullYear(), be.getMonth(), be.getDate(), De.getHours(), De.getMinutes(), De.getSeconds(), De.getMilliseconds());
                            (!K.max || ee < K.max) && (K.max = ee)
                        }
                    }
                }
                j.options = K
            }
            this._prevStart = this._tempValueRep.start, this._prevStateValue = n.value
        }, t.prototype._updated = function () {
            var t = this, n = this.s;
            if (this._shouldInitInputs) {
                if (this._resetInputs(), "range" === n.select) {
                    var a = n.startInput;
                    a && this._setupInput("start", a);
                    var s = n.endInput;
                    s && this._setupInput("end", s), !n.element || this._startInput !== n.element && this._endInput !== n.element || (this._shouldInitInput = !1, clearTimeout(n.element.__mbscTimer))
                }
                this._shouldInitInputs = !1
            }
            var i = this._valueTextChange;
            if (e.prototype._updated.call(this), "range" === n.select && i) {
                var r = function (e, n) {
                    e.value = n, setTimeout((function () {
                        t._preventChange = !0, On(e, Ps), On(e, Ns)
                    }))
                };
                this._startInput && r(this._startInput, this._getValueText("start")), this._endInput && r(this._endInput, this._getValueText("end"))
            }
        }, t.prototype._onEnterKey = function (t) {
            this._selectionNotReady() || e.prototype._onEnterKey.call(this, t)
        }, t.prototype._setupInput = function (e, t) {
            var n = this;
            gi(t, (function (t) {
                var a = yi(t, n, n._onInputChangeRange, n._onInputClickRange);
                "start" === e ? (n._startInput = t, n._resetStartInput = a) : (n._endInput = t, n._resetEndInput = a);
                var s = n._getValueText(e), i = s !== t.value;
                t.value = s, i && setTimeout((function () {
                    n._preventChange = !0, On(t, Ps), On(t, Ns)
                }))
            }))
        }, t.prototype._destroy = function () {
            this._resetInputs(), e.prototype._destroy.call(this)
        }, t.prototype._setHeader = function () {
            var t = this.s;
            if (t.selectCounter && t.selectMultiple) {
                var n = Object.keys(this._tempValueRep && this._tempValueRep.date || {}).length;
                this._headerText = (n > 1 && t.selectedPluralText || t.selectedText).replace(/{count}/, "" + n)
            } else e.prototype._setHeader.call(this)
        }, t.prototype._validate = function () {
            if (!(this._max <= this._min)) {
                var e = this.s, t = this._min ? +this._min : -1 / 0, n = this._max ? +this._max : 1 / 0;
                if ("date" === e.select) {
                    var a = this._tempValueRep.date;
                    if (!e.selectMultiple) for (var s = 0, i = Object.keys(a); s < i.length; s++) {
                        var r = i[s], o = a[r], l = Di(o, e, t, n);
                        +l != +o && (delete a[r], a[+ia(l)] = l)
                    }
                } else {
                    var c = this._getDate(this._tempValueRep), d = c[0], h = c[1];
                    d && (d = Di(d, e, t, n), e.inRangeInvalid || this._prevStart && this._prevStart === +d || (this._nextInvalid = e.valid ? Ca(ss(e.valid, d, e), 1) : as(e.invalid || [], d, e))), h && (h = !e.inRangeInvalid && this._nextInvalid && this._nextInvalid <= h ? e.rangeEndInvalid ? this._nextInvalid : Ca(this._nextInvalid, -1) : Di(h, e, t, n)), d && h && d > h && ("end" === this._activeSelect ? d = h : h = d), d && (this._prevStart = this._tempValueRep.start = +d), h && (this._tempValueRep.end = +h)
                }
            }
        }, t.prototype._copy = function (e) {
            var t = e.date ? c({}, e.date) : e.date;
            return c({}, e, {date: t})
        }, t.prototype._format = function (e) {
            var t = this.s, n = [];
            if (!t) return "";
            if ("date" === t.select) {
                var a = e.date;
                for (var s in a) a[s] !== le && null !== a[s] && n.push(xa(this._valueFormat, a[s], t));
                return t.selectMultiple ? n.join(", ") : n[0]
            }
            if (e.start && n.push(xa(this._valueFormat, fa(t, e.start), t)), e.end) {
                n.length || n.push("");
                var i = fa(t, e.end - (t.exclusiveEndDates && !this._hasTime ? 1 : 0));
                n.push(xa(this._valueFormat, i, t))
            }
            return this._tempStartText = n[0] || "", this._tempEndText = n[1] || "", n.join(Si)
        }, t.prototype._parse = function (e, t) {
            var n = this.s, a = {}, s = "date" !== n.select, i = n.selectMultiple, r = [];
            if (fe(e)) {
                var o = n.defaultSelection;
                e = i || s ? o : null === o || this._live && "inline" !== n.display ? null : o || new Date
            }
            if (ve(e) && (s || i) ? r = e.split(s ? Si : ",") : me(e) ? r = e : e && !me(e) && (r = [e]), s) {
                var l = r[0], c = r[1], d = ga(l, n, this._valueFormat, this._iso),
                    h = ga(c, n, this._valueFormat, this._iso);
                a.start = d ? +d : le, a.end = h ? +h : le
            } else {
                a.date = {};
                for (var u = 0, m = r; u < m.length; u++) {
                    var _ = m[u];
                    if (!fe(_)) {
                        var p = ga(_, n, this._valueFormat, this._iso, t);
                        if (p) {
                            t && (p = pa(n, p));
                            var v = +ia(p);
                            a.date[v] = p, this._hasTime && (this._selectedTime = new Date(p))
                        }
                    }
                }
            }
            return a
        }, t.prototype._getDate = function (e) {
            var t = this.s;
            if ("date" !== t.select) {
                var n = e.start ? fa(t, e.start) : null, a = e.end ? fa(t, e.end) : null;
                return n || a ? [n, a] : []
            }
            if (t.selectMultiple) {
                var s = [], i = e.date;
                if (i) for (var r = 0, o = Object.keys(i); r < o.length; r++) {
                    var l = o[r];
                    s.push(fa(t, +l))
                }
                return s
            }
            var c = Object.keys(e.date || {});
            return c.length ? fa(t, e.date[c[0]]) : null
        }, t.prototype._get = function (e) {
            var t = this, n = this.s, a = this._valueFormat, s = this._iso, i = this._getDate(e);
            return me(i) ? i.map((function (e) {
                return e ? ya(e, n, a, s, t._hasTime) : null
            })) : null === i ? null : ya(i, n, a, s, this._hasTime)
        }, t.prototype._onClosed = function () {
            this._active = this._activeSelect = le, this._hasTimegrid && (this._selectedTime = le)
        }, t.prototype._onOpen = function () {
            this._newSelection = !0
        }, t.prototype._resetInputs = function () {
            this._resetStartInput && (this._resetStartInput(), this._resetStartInput = le), this._resetEndInput && (this._resetEndInput(), this._resetEndInput = le)
        }, t.prototype._getValueText = function (e) {
            return this._valueText.split(Si)["start" === e ? 0 : 1] || ""
        }, t.prototype._selectionNotReady = function () {
            var e = !1;
            if ("range" === this.s.select) {
                var t = (this._get(this._tempValueRep || {}) || []).filter((function (e) {
                    return e
                }));
                (e = !t.length) || (e = this._hasCalendar && !this._hasTime || this._renderControls ? t.length < 2 : !this._tempValueRep[this._activeSelect])
            }
            return e
        }, t.prototype._setActiveSelect = function (e, t) {
            var n = this;
            this._activeSelect !== e && (t ? setTimeout((function () {
                return n._hook("onActiveDateChange", {active: e})
            })) : this._hook("onActiveDateChange", {active: e})), this._activeSelect = e
        }, t.defaults = c({}, qn, bi.defaults, {
            activeElm: '.mbsc-calendar-cell[tabindex="0"]',
            controls: Ci,
            dateText: "Date",
            inRangeInvalid: !1,
            inputTyping: !0,
            rangeEndHelp: "Please select",
            rangeEndLabel: "End",
            rangeHighlight: !0,
            rangeStartHelp: "Please select",
            rangeStartLabel: "Start",
            select: "date",
            selectSize: 7,
            selectedText: "{count} selected",
            showOnClick: !0,
            timeText: "Time"
        }), t._name = "Datepicker", t
    }(bi), Ni = function () {
        function e() {
            this.pageSize = 0, this._prevS = {}, this._s = {}
        }

        return e.prototype.options = function (e, t) {
            var n = this._s = c({}, this._s, e), a = this._prevS, s = n.getDate, i = n.getYear, r = n.getMonth,
                o = n.showCalendar, l = n.calendarType, d = n.startDay, h = n.endDay, u = n.firstDay, m = "week" === l,
                _ = o ? m ? n.weeks : 6 : 0,
                p = n.min === a.min && this.minDate ? this.minDate : fe(n.min) ? -1 / 0 : ga(n.min),
                v = n.max === a.max && this.maxDate ? this.maxDate : fe(n.max) ? 1 / 0 : ga(n.max),
                f = n.activeDate || +new Date, g = ue(f, +p, +v), y = this.forcePageChange || g !== f, b = new Date(g),
                x = g !== a.activeDate,
                D = n.calendarType !== a.calendarType || n.eventRange !== a.eventRange || n.firstDay !== a.firstDay || n.eventRangeSize !== a.eventRangeSize || n.refDate !== a.refDate || o !== a.showCalendar || n.size !== a.size || n.weeks !== a.weeks,
                T = y || this.pageIndex === le || D || !this.preventPageChange && x && (g < +this.firstDay || g >= +this.lastDay) ? ps(b, n) : this.pageIndex,
                S = "year" === l ? 12 : n.size || 1, C = S > 1 && !m, w = C ? 1 : ys(n.pages, this.pageSize),
                k = "vertical" === n.calendarScroll && "auto" !== n.pages && (n.pages === le || 1 === n.pages),
                M = n.showOuterDays !== le ? n.showOuterDays : !k && w < 2 && (m || !S || S < 2), E = C ? 0 : 1,
                N = _s(T, n), I = _s(T + w, n);
            o || "week" !== n.eventRange || d === le || h === le || (N = Ca(N, d - u + (d < u ? 7 : 0)), I = Ca(N, 7 * n.eventRangeSize + h - d + 1 - (h < d ? 0 : 7)));
            var L = o && M ? ca(N, n) : N, H = C ? s(i(I), r(I) - 1, 1) : _s(T + w - 1, n),
                O = o && M ? Ca(ca(H, n), 7 * _) : I, Y = o ? ca(_s(T - E, n), n) : N,
                P = o ? ca(_s(T + w + E - 1, n), n) : I, F = o ? Ca(C ? ca(H, n) : P, 7 * _) : I,
                V = this.pageIndex === le, z = Y, R = F;
            if (!o && "week" === n.resolution && ("year" === n.eventRange || "month" === n.eventRange)) {
                var A = h - d + 1 + (h < d ? 7 : 0);
                if (N.getDay() !== d) z = (U = Ca(W = ca(N, n, d), A)) <= N ? Ca(W, 7) : W;
                if (I.getDay() !== d) {
                    var W, U = Ca(W = ca(I, n, d), A);
                    R = W > I ? Ca(U, -7) : U
                }
            }
            var B = !1;
            T !== le && (B = +z != +this.viewStart || +R != +this.viewEnd, this.pageIndex = T), this.firstDay = N, this.lastDay = I, this.firstPageDay = L, this.lastPageDay = O, this.viewStart = z, this.viewEnd = R, this.forcePageChange = !1, this.preventPageChange = !1, this.minDate = p, this.maxDate = v, this._prevS = n, T !== le && (B || t) && (B && !V && this.pageChange(), this.pageLoading(B))
        }, e.prototype.pageChange = function () {
            this._s.onPageChange && this._s.onPageChange({
                firstDay: this.firstPageDay,
                lastDay: this.lastPageDay,
                month: "month" === this._s.calendarType ? this.firstDay : le,
                type: "onPageChange",
                viewEnd: this.viewEnd,
                viewStart: this.viewStart
            }, null)
        }, e.prototype.pageLoading = function (e) {
            this._s.onPageLoading && this._s.onPageLoading({
                firstDay: this.firstPageDay,
                lastDay: this.lastPageDay,
                month: "month" === this._s.calendarType ? this.firstDay : le,
                type: "onPageLoading",
                viewChanged: e,
                viewEnd: this.viewEnd,
                viewStart: this.viewStart
            }, null)
        }, e
    }(), Ii = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._navService = new Ni, t._update = 0, t._onDayClick = function (e) {
                var n = t.s, a = pa(n, e.date), s = +a;
                if (!e.disabled) {
                    if (n.selectMultiple) {
                        var i = t._tempValueRep;
                        i[s] ? delete i[s] : (n.selectMax === le || Object.keys(i).length < n.selectMax) && (i[s] = a), t._tempValueRep = c({}, i)
                    } else n.selectRange || (t._tempValueRep = {}), t._tempValueRep[s] = a;
                    t._navService.preventPageChange = n.selectRange, t._hook("onCellClick", e), t._setOrUpdate()
                }
            }, t._onTodayClick = function () {
                var e = new Date, n = +ia(e);
                t.s.selectRange || t.s.selectMultiple || (t._tempValueRep = {}, t._tempValueRep[n] = e, t._setOrUpdate())
            }, t._onActiveChange = function (e) {
                t._navService.forcePageChange = e.pageChange, t._update++, t._hook("onActiveChange", e)
            }, t._setCal = function (e) {
                t._calendarView = e
            }, t
        }

        return l(t, e), t.prototype._valueEquals = function (e, t) {
            return Ta(e, t, this.s)
        }, t.prototype._shouldValidate = function (e, t) {
            return e.dataTimezone !== t.dataTimezone || e.displayTimezone !== t.displayTimezone
        }, t.prototype._render = function (t, n) {
            e.prototype._render.call(this, t, n), this._navService.options({
                activeDate: t.active,
                calendarType: t.calendarType,
                firstDay: t.firstDay,
                getDate: t.getDate,
                getDay: t.getDay,
                getMonth: t.getMonth,
                getYear: t.getYear,
                max: t.max,
                min: t.min,
                onPageChange: t.onPageChange,
                onPageLoading: t.onPageLoading,
                pages: t.pages,
                refDate: t.refDate,
                showCalendar: !0,
                showOuterDays: t.showOuterDays,
                size: t.size,
                weeks: t.weeks
            })
        }, t.prototype._copy = function (e) {
            return c({}, e)
        }, t.prototype._format = function (e) {
            var t = this.s, n = [];
            for (var a in e) e[a] !== le && null !== e[a] && n.push(xa(t.dateFormat, new Date(+e[a]), t));
            return t.selectMultiple || t.selectRange ? n.join(", ") : n[0]
        }, t.prototype._parse = function (e) {
            var t = this.s, n = t.selectRange, a = {}, s = [];
            ve(e) ? s = e.split(",") : me(e) ? s = e : e && !me(e) && (s = [e]);
            for (var i = 0, r = s; i < r.length; i++) {
                var o = r[i];
                if (null !== o) {
                    var l = ga(o, t, t.dateFormat);
                    a[n ? +l : +ia(l)] = l
                }
            }
            return a
        }, t.prototype._get = function (e) {
            var t = this.s, n = t.selectRange;
            if (this.s.selectMultiple || n) {
                for (var a = [], s = 0, i = Object.keys(e); s < i.length; s++) {
                    var r = i[s];
                    a.push(fa(t, +e[r]))
                }
                return a
            }
            var o = Object.keys(e || {});
            return o.length ? fa(t, e[o[0]]) : null
        }, t.defaults = c({}, ms, {
            calendarScroll: "horizontal",
            calendarType: "month",
            selectedText: "{count} selected",
            showControls: !0,
            showOnClick: !0,
            weeks: 1
        }), t._name = "Calendar", t
    }(bi), Li = function () {
        function e() {
            this.onInstanceReady = new m, this.onComponentChange = new m
        }

        return Object.defineProperty(e.prototype, "instance", {
            get: function () {
                return this.inst
            }, set: function (e) {
                this.inst = e, this.onInstanceReady.next(e)
            }, enumerable: !0, configurable: !0
        }), e
    }(), Hi = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._render = function (e) {
            this._hasChildren = !ve(e.name), this._cssClass = this._className + " mbsc-icon" + this._theme + (e.name && !this._hasChildren ? -1 !== e.name.indexOf(" ") ? " " + e.name : " mbsc-font-icon mbsc-icon-" + e.name : ""), this._svg = e.svg ? this._safeHtml(e.svg) : le
        }, t
    }(ja);
    var Oi, Yi, Pi = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e) {
            return function (e, t) {
                return Ct("span", {
                    onClick: e.onClick,
                    className: t._cssClass,
                    dangerouslySetInnerHTML: t._svg,
                    "v-html": le
                }, t._hasChildren && e.name)
            }(e, this)
        }, t
    }(Hi), Fi = 0;

    function Vi(e, t, n) {
        var a = (n ? "page" : "client") + t;
        return e.targetTouches && e.targetTouches[0] ? e.targetTouches[0][a] : e.changedTouches && e.changedTouches[0] ? e.changedTouches[0][a] : e[a]
    }

    function zi(e, t) {
        if (!t.mbscClick) {
            var n = (e.originalEvent || e).changedTouches[0], a = document.createEvent("MouseEvents");
            a.initMouseEvent("click", !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), a.isMbscTap = !0, a.isIonicTap = !0, Oi = !0, t.mbscChange = !0, t.mbscClick = !0, t.dispatchEvent(a), Oi = !1, Fi++, setTimeout((function () {
                Fi--
            }), 500), setTimeout((function () {
                delete t.mbscClick
            }))
        }
    }

    function Ri(e) {
        !Fi || Oi || e.isMbscTap || "TEXTAREA" === e.target.nodeName && e.type === Vs || (e.stopPropagation(), e.preventDefault())
    }

    function Ai(e) {
        wn(e.target).__mbscFocusVisible = !1
    }

    function Wi(e) {
        wn(e.target).__mbscFocusVisible = !0
    }

    function Ui(e) {
        e && setTimeout((function () {
            e.style.opacity = "0", e.style.transition = "opacity linear .4s", setTimeout((function () {
                e && e.parentNode && e.parentNode.removeChild(e)
            }), 400)
        }), 200)
    }

    function Bi(e, t) {
        var n, a, s, i, r, o, l, c, d, h, u, m, _, p, v, f = {}, g = wn(e), y = Dn(e);

        function b(e) {
            if (e.type === Ks) Yi = !0; else if (Yi) return e.type === Vs && (Yi = !1), !0;
            return !1
        }

        function x() {
            l && (Ui(i), i = function (e, t, n) {
                var a = e.getBoundingClientRect(), s = t - a.left, i = n - a.top, r = Math.max(s, e.offsetWidth - s),
                    o = Math.max(i, e.offsetHeight - i), l = 2 * Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2)),
                    c = en.createElement("span");
                c.classList.add("mbsc-ripple");
                var d = c.style;
                return d.backgroundColor = getComputedStyle(e).color, d.width = l + "px", d.height = l + "px", d.top = n - a.top - l / 2 + "px", d.left = t - a.left - l / 2 + "px", e.appendChild(c), setTimeout((function () {
                    d.opacity = ".2", d.transform = "scale(1)", d.transition = "opacity linear .1s, transform cubic-bezier(0, 0, 0.2, 1) .4s"
                }), 30), c
            }(e, u, m)), t.onPress(), n = !0
        }

        function D(e, i) {
            a = !1, Ui(e), clearTimeout(s), s = setTimeout((function () {
                n && (t.onRelease(), n = !1)
            }), i)
        }

        function T(e) {
            if (!b(e) && (e.type !== Vs || 0 === e.button && !e.ctrlKey)) {
                if (d = Vi(e, "X"), h = Vi(e, "Y"), u = d, m = h, n = !1, a = !1, c = !1, v = !0, f.moved = c, f.startX = d, f.startY = h, f.endX = u, f.endY = m, f.deltaX = 0, f.deltaY = 0, f.domEvent = e, f.isTouch = Yi, Ui(i), t.onStart) {
                    var r = t.onStart(f);
                    l = r && r.ripple
                }
                t.onPress && (a = !0, clearTimeout(s), s = setTimeout(x, 50)), e.type === Vs && (bn(y, zs, S), bn(y, Rs, C)), bn(y, Ls, O)
            }
        }

        function S(e) {
            v && (u = Vi(e, "X"), m = Vi(e, "Y"), _ = u - d, p = m - h, !c && (Math.abs(_) > 9 || Math.abs(p) > 9) && (c = !0, D(i)), f.moved = c, f.endX = u, f.endY = m, f.deltaX = _, f.deltaY = p, f.domEvent = e, f.isTouch = e.type === Xs, t.onMove && t.onMove(f))
        }

        function C(e) {
            v && (a && !n && (clearTimeout(s), x()), f.domEvent = e, f.isTouch = e.type === Js, t.onEnd && t.onEnd(f), D(i, 75), v = !1, e.type === Js && t.click && pn && !c && zi(e, e.target), e.type === Rs && (xn(y, zs, S), xn(y, Rs, C)), xn(y, Ls, O))
        }

        function w(e) {
            b(e) || (o = !0, t.onHoverIn(e))
        }

        function k(e) {
            o && t.onHoverOut(e), o = !1
        }

        function M(e) {
            t.onKeyDown(e)
        }

        function E(e) {
            (t.keepFocus || g.__mbscFocusVisible) && (r = !0, t.onFocus(e))
        }

        function N(e) {
            r && t.onBlur(e), r = !1
        }

        function I(e) {
            t.onChange(e)
        }

        function L(e) {
            t.onInput(e)
        }

        function H(e) {
            f.domEvent = e, Yi || t.onDoubleClick(f)
        }

        function O(e) {
            Yi && e.preventDefault()
        }

        if (bn(e, Vs, T), bn(e, Ks, T, {passive: !0}), bn(e, Xs, S, {passive: !1}), bn(e, Js, C), bn(e, qs, C), t.onChange && bn(e, Ns, I), t.onInput && bn(e, Ps, L), t.onHoverIn && bn(e, As, w), t.onHoverOut && bn(e, Ws, k), t.onKeyDown && bn(e, Fs, M), t.onFocus && g && (bn(e, Os, E), !t.keepFocus)) {
            var Y = g.__mbscFocusCount || 0;
            0 === Y && (bn(g, Vs, Ai, !0), bn(g, Fs, Wi, !0)), g.__mbscFocusCount = ++Y
        }
        return t.onBlur && bn(e, Es, N), t.onDoubleClick && bn(e, Hs, H), function () {
            if (clearTimeout(s), t.onFocus && g && !t.keepFocus) {
                var n = g.__mbscFocusCount || 0;
                g.__mbscFocusCount = --n, n <= 0 && (xn(g, Vs, Ai), xn(g, Fs, Wi))
            }
            xn(e, Ps, L), xn(e, Vs, T), xn(e, Ks, T, {passive: !0}), xn(e, Xs, S, {passive: !1}), xn(e, Js, C), xn(e, qs, C), xn(y, zs, S), xn(y, Rs, C), xn(y, Ls, O), xn(e, Ns, I), xn(e, As, w), xn(e, Ws, k), xn(e, Fs, M), xn(e, Os, E), xn(e, Es, N), xn(e, Hs, H)
        }
    }

    v && (["mousedown", As, Vs, Rs, Is].forEach((function (e) {
        en.addEventListener(e, Ri, !0)
    })), "android" === h && T < 5 && en.addEventListener(Ns, (function (e) {
        var t = e.target;
        Fi && "checkbox" === t.type && !t.mbscChange && (e.stopPropagation(), e.preventDefault()), delete t.mbscChange
    }), !0));
    var ji = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._mounted = function () {
            var e = this;
            this._unlisten = Bi(this._el, {
                click: !0, onBlur: function () {
                    e.setState({hasFocus: !1})
                }, onFocus: function () {
                    e.setState({hasFocus: !0})
                }, onHoverIn: function () {
                    e.s.disabled || e.setState({hasHover: !0})
                }, onHoverOut: function () {
                    e.setState({hasHover: !1})
                }, onKeyDown: function (t) {
                    switch (t.keyCode) {
                        case Zs:
                        case Qs:
                            e._el.click(), t.preventDefault()
                    }
                }, onPress: function () {
                    e.setState({isActive: !0})
                }, onRelease: function () {
                    e.setState({isActive: !1})
                }, onStart: function () {
                    return {ripple: e.s.ripple && !e.s.disabled}
                }
            })
        }, t.prototype._render = function (e, t) {
            var n = this, a = e.disabled;
            this._isIconOnly = !(!e.icon && !e.iconSvg), this._hasStartIcon = !(!e.startIcon && !e.startIconSvg), this._hasEndIcon = !(!e.endIcon && !e.endIconSvg), this._tabIndex = a ? le : e.tabIndex || 0, this._cssClass = this._className + " mbsc-reset mbsc-font mbsc-button" + this._theme + this._rtl + " mbsc-button-" + e.variant + (this._isIconOnly ? " mbsc-icon-button" : "") + (a ? " mbsc-disabled" : "") + (e.color ? " mbsc-button-" + e.color : "") + (t.hasFocus && !a ? " mbsc-focus" : "") + (t.isActive && !a ? " mbsc-active" : "") + (t.hasHover && !a ? " mbsc-hover" : ""), this._iconClass = "mbsc-button-icon" + this._rtl, this._startIconClass = this._iconClass + " mbsc-button-icon-start", this._endIconClass = this._iconClass + " mbsc-button-icon-end", e.disabled && t.hasHover && setTimeout((function () {
                n.setState({hasHover: !1})
            }))
        }, t.prototype._destroy = function () {
            this._unlisten && this._unlisten()
        }, t.defaults = {ripple: !1, role: "button", tag: "button", variant: "standard"}, t._name = "Button", t
    }(ja);
    var Ki = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e) {
            return function (e, t, n) {
                var a = t.props, s = a.ariaLabel;
                a.children, a.className, a.color;
                var i = a.endIcon;
                a.endIconSrc;
                var r = a.endIconSvg;
                a.hasChildren;
                var o = a.icon;
                a.iconSrc;
                var l = a.iconSvg;
                a.ripple, a.rtl;
                var h = a.role, u = a.startIcon;
                a.startIconSrc;
                var m = a.startIconSvg;
                a.tag, a.tabIndex, a.theme, a.themeVariant, a.variant;
                var _ = d(a, ["ariaLabel", "children", "className", "color", "endIcon", "endIconSrc", "endIconSvg", "hasChildren", "icon", "iconSrc", "iconSvg", "ripple", "rtl", "role", "startIcon", "startIconSrc", "startIconSvg", "tag", "tabIndex", "theme", "themeVariant", "variant"]),
                    p = c({"aria-label": s, className: t._cssClass, ref: t._setEl}, _),
                    v = Ct(kt, null, t._isIconOnly && Ct(Pi, {
                        className: t._iconClass,
                        name: o,
                        svg: l,
                        theme: e.theme
                    }), t._hasStartIcon && Ct(Pi, {
                        className: t._startIconClass,
                        name: u,
                        svg: m,
                        theme: e.theme
                    }), n, t._hasEndIcon && Ct(Pi, {className: t._endIconClass, name: i, svg: r, theme: e.theme}));
                return "span" === e.tag ? Ct("span", c({
                    role: h,
                    "aria-disabled": e.disabled,
                    tabIndex: t._tabIndex
                }, p), v) : "a" === e.tag ? Ct("a", c({
                    "aria-disabled": e.disabled,
                    tabIndex: t._tabIndex
                }, p), v) : Ct("button", c({role: h, tabIndex: t._tabIndex}, p), v)
            }(e, this, e.children)
        }, t
    }(ji), Xi = {
        before: function (e, t) {
            t.tag = e.nodeName.toLowerCase()
        },
        hasChildren: !0,
        parentClass: "mbsc-button",
        readProps: ["disabled"],
        slots: {endIcon: "end-icon", icon: "icon", startIcon: "start-icon"}
    }, Ji = Zt({}), qi = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype.componentWillUnmount = function () {
            this._changes && this._changes.unsubscribe(this._handler)
        }, t.prototype.render = function () {
            var e = this, t = this.props, n = t.host, a = t.component, s = t.view,
                i = d(t, ["host", "component", "view"]), r = s || n && n._calendarView;
            return r && !this._changes && (this._changes = r.s.instanceService.onComponentChange, this._handler = this._changes.subscribe((function () {
                e.forceUpdate()
            }))), Ct(Ji.Consumer, null, (function (e) {
                var t = e.instance || s || n && n._calendarView;
                return t && Ct(a, c({inst: t}, i))
            }))
        }, t
    }(Qt), Gi = function (e) {
        var t = e.inst, n = e.className;
        return Ct(Ki, {
            ariaLabel: t.s.prevPageText,
            className: "mbsc-calendar-button " + (n || ""),
            disabled: t._isPrevDisabled(),
            iconSvg: t._prevIcon,
            onClick: t.prevPage,
            theme: t.s.theme,
            themeVariant: t.s.themeVariant,
            type: "button",
            variant: "flat"
        })
    }, Zi = function (e) {
        var t = e.inst, n = e.className;
        return Ct(Ki, {
            ariaLabel: t.s.nextPageText,
            disabled: t._isNextDisabled(),
            className: "mbsc-calendar-button " + (n || ""),
            iconSvg: t._nextIcon,
            onClick: t.nextPage,
            theme: t.s.theme,
            themeVariant: t.s.themeVariant,
            type: "button",
            variant: "flat"
        })
    }, Qi = function (e) {
        var t = e.inst, n = e.className;
        return Ct(Ki, {
            className: "mbsc-calendar-button mbsc-calendar-button-today " + (n || ""),
            onClick: t._onTodayClick,
            theme: t.s.theme,
            themeVariant: t.s.themeVariant,
            type: "button",
            variant: "flat"
        }, t.s.todayText)
    }, $i = function (e) {
        var t = e.inst, n = e.className, a = t.s, s = t._theme, i = t._view;
        return Ct("div", {"aria-live": "polite", className: (n || "") + s}, t._title.map((function (e, n) {
            return (1 === t._pageNr || 0 === n || t._hasPicker || i === cs) && Ct(Ki, {
                className: "mbsc-calendar-button" + (t._pageNr > 1 ? " mbsc-flex-1-1" : ""),
                "data-index": n,
                onClick: t._onPickerBtnClick,
                key: n,
                theme: a.theme,
                themeVariant: a.themeVariant,
                type: "button",
                variant: "flat"
            }, (t._hasPicker || i === cs) && (e.title ? Ct("span", {className: "mbsc-calendar-title" + s}, e.title) : Ct(kt, null, t._yearFirst && Ct("span", {className: "mbsc-calendar-title mbsc-calendar-year" + s}, e.yearTitle), Ct("span", {className: "mbsc-calendar-title mbsc-calendar-month" + s}, e.monthTitle), !t._yearFirst && Ct("span", {className: "mbsc-calendar-title mbsc-calendar-year" + s}, e.yearTitle))), !t._hasPicker && i !== cs && Ct("span", {className: "mbsc-calendar-title" + s}, t._viewTitle), a.downIcon && 1 === t._pageNr ? Ct(Pi, {
                svg: i === cs ? a.downIcon : a.upIcon,
                theme: a.theme
            }) : null)
        })))
    }, er = function (e) {
        var t = e.calendar, n = e.view, a = d(e, ["calendar", "view"]);
        return Ct(qi, c({component: Gi, host: t, view: n}, a))
    };
    er._name = "CalendarPrev";
    var tr = function (e) {
        var t = e.calendar, n = e.view, a = d(e, ["calendar", "view"]);
        return Ct(qi, c({component: Zi, host: t, view: n}, a))
    };
    tr._name = "CalendarNext";
    var nr = function (e) {
        var t = e.calendar, n = e.view, a = d(e, ["calendar", "view"]);
        return Ct(qi, c({component: Qi, host: t, view: n}, a))
    };
    nr._name = "CalendarToday";
    var ar = function (e) {
        var t = e.calendar, n = e.view, a = d(e, ["calendar", "view"]);
        return Ct(qi, c({component: $i, host: t, view: n}, a))
    };
    ar._name = "CalendarNav";
    var sr = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {
                height: "sm",
                pageSize: 0,
                pickerSize: 0,
                width: "sm"
            }, t._dim = {}, t._months = [1, 2, 3], t._title = [], t.MONTH_VIEW = cs, t.YEAR_VIEW = ds, t.MULTI_YEAR_VIEW = hs, t.nextPage = function () {
                switch (t._prevDocClick(), t._view) {
                    case hs:
                        t._activeYearsChange(1);
                        break;
                    case ds:
                        t._activeYearChange(1);
                        break;
                    default:
                        t._activeChange(1)
                }
            }, t.prevPage = function () {
                switch (t._prevDocClick(), t._view) {
                    case hs:
                        t._activeYearsChange(-1);
                        break;
                    case ds:
                        t._activeYearChange(-1);
                        break;
                    default:
                        t._activeChange(-1)
                }
            }, t._changeView = function (e) {
                var n = t.s, a = t._view, s = t._hasPicker, i = n.selectView,
                    r = "year" === (n.showCalendar ? n.calendarType : n.eventRange);
                if (!e) {
                    switch (a) {
                        case cs:
                            e = hs;
                            break;
                        case hs:
                            e = ds;
                            break;
                        default:
                            e = s || i === ds ? hs : cs
                    }
                    a === hs && r && (e = cs)
                }
                var o = s && e === i;
                t.setState({view: e, viewClosing: o ? le : a, viewOpening: o ? le : e})
            }, t._onDayHoverIn = function (e) {
                t._disableHover || (t._hook("onDayHoverIn", e), t._hoverTimer = setTimeout((function () {
                    var n = sa(e.date);
                    t._labels && (e.labels = t._labels[n]), t._marked && (e.marked = t._marked[n]), t._isHover = !0, t._hook("onCellHoverIn", e)
                }), 150))
            }, t._onDayHoverOut = function (e) {
                if (!t._disableHover && (t._hook("onDayHoverOut", e), clearTimeout(t._hoverTimer), t._isHover)) {
                    var n = sa(e.date);
                    t._labels && (e.labels = t._labels[n]), t._marked && (e.marked = t._marked[n]), t._isHover = !1, t._hook("onCellHoverOut", e)
                }
            }, t._onLabelClick = function (e) {
                t._isLabelClick = !0, t._hook("onLabelClick", e)
            }, t._onDayClick = function (e) {
                t._shouldFocus = !t._isLabelClick, t._prevAnim = !1, t._isLabelClick = !1, t._hook("onDayClick", e)
            }, t._onTodayClick = function (e) {
                t._prevAnim = !1, t._hook("onActiveChange", {
                    date: +va(fa(t.s)),
                    today: !0
                }), t._hook("onTodayClick", {})
            }, t._onMonthClick = function (e) {
                if (!e.disabled) {
                    var n = e.date, a = t.s;
                    if (a.selectView === ds) t._hook("onDayClick", e); else {
                        var s = ps(n, a);
                        t._prevDocClick(), t._changeView(cs), t._shouldFocus = !0, t._prevAnim = !t._hasPicker, t._hook("onActiveChange", {
                            date: +n,
                            nav: !0,
                            pageChange: s !== t._pageIndex
                        })
                    }
                }
            }, t._onYearClick = function (e) {
                if (!e.disabled) {
                    var n = e.date, a = t.s, s = a.selectView;
                    if (s === hs) t._hook("onDayClick", e); else if (t._shouldFocus = !0, t._prevAnim = s === ds, t._activeMonth = +n, t._prevDocClick(), t._changeView(), "year" === (a.showCalendar ? a.calendarType : a.eventRange)) {
                        var i = ps(n, a);
                        t._hook("onActiveChange", {date: +n, pageChange: i !== t._pageIndex})
                    }
                }
            }, t._onPageChange = function (e) {
                t._isSwipeChange = !0, t._activeChange(e.diff)
            }, t._onYearPageChange = function (e) {
                t._activeYearChange(e.diff)
            }, t._onYearsPageChange = function (e) {
                t._activeYearsChange(e.diff)
            }, t._onAnimationEnd = function (e) {
                t._disableHover = !1, t._isIndexChange && (t._pageLoaded(), t._isIndexChange = !1)
            }, t._onStart = function () {
                clearTimeout(t._hoverTimer)
            }, t._onGestureStart = function (e) {
                t._disableHover = !0, t._hook("onGestureStart", e)
            }, t._onGestureEnd = function (e) {
                t._prevDocClick()
            }, t._onPickerClose = function () {
                t.setState({view: cs})
            }, t._onPickerOpen = function () {
                var e = t._pickerCont.clientHeight, n = t._pickerCont.clientWidth;
                t.setState({pickerSize: t._isVertical ? e : n})
            }, t._onPickerBtnClick = function (e) {
                t._view === cs && (t._pickerBtn = e.currentTarget), t._prevDocClick(), t._changeView()
            }, t._onDocClick = function () {
                var e = t.s.selectView;
                t._prevClick || t._hasPicker || t._view === e || t._changeView(e)
            }, t._onViewAnimationEnd = function () {
                t.state.viewClosing && t.setState({viewClosing: le}), t.state.viewOpening && t.setState({viewOpening: le})
            }, t._onResize = function () {
                if (t._body && v) {
                    var e = t.s, n = t.state, a = e.showCalendar,
                        s = a && t.__getTextParam ? t._body.querySelector(".mbsc-calendar-body-inner") : t._body,
                        i = t._el.offsetWidth, r = t._el.offsetHeight, o = s.clientHeight, l = s.clientWidth,
                        c = t._isVertical ? o : l, d = t._hasPicker ? n.pickerSize : c, h = a !== le, u = "sm",
                        m = "sm", _ = le, p = !1, f = 0, g = 0;
                    if (e.responsiveStyle && !t._isGrid && (o > 300 && (m = "md"), l > 767 && (u = "md")), u !== n.width || m !== n.height) t._shouldCheckSize = !0, t.setState({
                        width: u,
                        height: m
                    }); else {
                        if (t._labels && a && t.__getTextParam) {
                            var y = s.querySelector(".mbsc-calendar-text"),
                                b = s.querySelector(".mbsc-calendar-day-inner"),
                                x = b.querySelector(".mbsc-calendar-labels"), D = y ? Tn(y, "marginBottom") : 2,
                                T = y ? y.offsetHeight : 18;
                            f = x.offsetTop, p = s.scrollHeight > s.clientHeight, g = T + D, _ = Math.max(1, ke((b.clientHeight - f) / g))
                        }
                        t._hook("onResize", {height: r, target: t._el, width: i}), e.navigationService.pageSize = c;
                        var S = t._shouldPageLoad ? (n.update || 0) + 1 : n.update;
                        t.setState({
                            cellTextHeight: f,
                            hasScrollY: p,
                            labelHeight: g,
                            maxLabels: _,
                            pageSize: c,
                            pickerSize: d,
                            ready: h,
                            update: S
                        })
                    }
                }
            }, t._onKeyDown = function (e) {
                var n, a = t.s, s = t._view, i = s === cs ? t._active : t._activeMonth, r = new Date(i),
                    o = a.getYear(r), l = a.getMonth(r), c = a.getDay(r), d = a.getDate, h = a.weeks,
                    u = "month" === a.calendarType;
                if (s === hs) {
                    var m = void 0;
                    switch (e.keyCode) {
                        case ai:
                            m = o - 1 * t._rtlNr;
                            break;
                        case ii:
                            m = o + 1 * t._rtlNr;
                            break;
                        case si:
                            m = o - 3;
                            break;
                        case ri:
                            m = o + 3;
                            break;
                        case ni:
                            m = t._getPageYears(t._yearsIndex);
                            break;
                        case ti:
                            m = t._getPageYears(t._yearsIndex) + 11;
                            break;
                        case $s:
                            m = o - 12;
                            break;
                        case ei:
                            m = o + 12
                    }
                    m && t._minYears <= m && t._maxYears >= m && (e.preventDefault(), t._shouldFocus = !0, t._prevAnim = !1, t._activeMonth = +d(m, 0, 1), t.forceUpdate())
                } else if (s === ds) {
                    switch (e.keyCode) {
                        case ai:
                            n = d(o, l - 1 * t._rtlNr, 1);
                            break;
                        case ii:
                            n = d(o, l + 1 * t._rtlNr, 1);
                            break;
                        case si:
                            n = d(o, l - 3, 1);
                            break;
                        case ri:
                            n = d(o, l + 3, 1);
                            break;
                        case ni:
                            n = d(o, 0, 1);
                            break;
                        case ti:
                            n = d(o, 11, 1);
                            break;
                        case $s:
                            n = d(o - 1, l, 1);
                            break;
                        case ei:
                            n = d(o + 1, l, 1)
                    }
                    n && t._minYear <= n && t._maxYear >= n && (e.preventDefault(), t._shouldFocus = !0, t._prevAnim = !1, t._activeMonth = +n, t.forceUpdate())
                } else if (s === cs) {
                    switch (e.keyCode) {
                        case ai:
                            n = d(o, l, c - 1 * t._rtlNr);
                            break;
                        case ii:
                            n = d(o, l, c + 1 * t._rtlNr);
                            break;
                        case si:
                            n = d(o, l, c - 7);
                            break;
                        case ri:
                            n = d(o, l, c + 7);
                            break;
                        case ni:
                            n = d(o, l, 1);
                            break;
                        case ti:
                            n = d(o, l + 1, 0);
                            break;
                        case $s:
                            n = e.altKey ? d(o - 1, l, c) : u ? d(o, l - 1, c) : d(o, l, c - 7 * h);
                            break;
                        case ei:
                            n = e.altKey ? d(o + 1, l, c) : u ? d(o, l + 1, c) : d(o, l, c + 7 * h)
                    }
                    if (n && t._minDate <= n && t._maxDate >= n) {
                        e.preventDefault();
                        var _ = ps(n, a);
                        t._shouldFocus = !0, t._prevAnim = !1, t._pageChange = a.noOuterChange && _ !== t._pageIndex, t._hook("onActiveChange", {
                            date: +n,
                            pageChange: t._pageChange
                        })
                    }
                }
            }, t._setHeader = function (e) {
                t._headerElement = e
            }, t._setBody = function (e) {
                t._body = e
            }, t._setPickerCont = function (e) {
                t._pickerCont = e
            }, t
        }

        return l(t, e), t.prototype._getPageDay = function (e) {
            return +_s(e, this.s)
        }, t.prototype._getPageStyle = function (e, t, n) {
            var a;
            return (a = {})[(vn ? vn + "T" : "t") + "ransform"] = "translate" + this._axis + "(" + 100 * (e - t) * this._rtlNr + "%)", a.position = e === this._pageIndex ? "relative" : "", a.width = 100 / (n || 1) + "%", a
        }, t.prototype._getPageYear = function (e) {
            var t = this.s, n = t.refDate ? ga(t.refDate) : Un;
            return t.getYear(n) + e
        }, t.prototype._getPageYears = function (e) {
            var t = this.s, n = t.refDate ? ga(t.refDate) : Un;
            return t.getYear(n) + 12 * e
        }, t.prototype._getPickerClass = function (e) {
            var t, n = e === this.s.selectView ? " mbsc-calendar-picker-main" : "", a = "mbsc-calendar-picker",
                s = this._hasPicker, i = this.state, r = i.viewClosing, o = i.viewOpening;
            switch (e) {
                case cs:
                    t = s ? "" : (o === cs ? "in-down" : "") + (r === cs ? "out-down" : "");
                    break;
                case hs:
                    t = s && r === cs ? "" : (o === hs ? "in-up" : "") + (r === hs ? "out-up" : "");
                    break;
                default:
                    t = s && o === cs ? "" : (o === ds ? r === hs ? "in-down" : "in-up" : "") + (r === ds ? o === hs ? "out-down" : "out-up" : "")
            }
            return a + n + (un && t ? " " + a + "-" + t : "")
        }, t.prototype._isNextDisabled = function (e) {
            if (!this._hasPicker || e) {
                var t = this._view;
                if (t === hs) return this._yearsIndex + 1 > this._maxYearsIndex;
                if (t === ds) return this._yearIndex + 1 > this._maxYearIndex
            }
            return this._pageIndex + 1 > this._maxIndex
        }, t.prototype._isPrevDisabled = function (e) {
            if (!this._hasPicker || e) {
                var t = this._view;
                if (t === hs) return this._yearsIndex - 1 < this._minYearsIndex;
                if (t === ds) return this._yearIndex - 1 < this._minYearIndex
            }
            return this._pageIndex - 1 < this._minIndex
        }, t.prototype._render = function (e, t) {
            var n = e.getDate, a = e.getYear, s = e.getMonth, i = e.showCalendar, r = e.calendarType, o = e.eventRange,
                l = e.eventRangeSize || 1, c = e.firstDay, d = "week" === r, h = "month" === r,
                u = "year" === r ? 12 : +(e.size || 1), m = u > 1 && !d, _ = i ? d ? e.weeks : 6 : 0,
                p = e.activeDate || this._active || +new Date, v = p !== this._active, f = new Date(p), g = this._prevS,
                y = e.dateFormat, b = e.monthNames, x = e.yearSuffix,
                D = _e(e.labelList) ? +e.labelList + 1 : "all" === e.labelList ? -1 : 0,
                T = e.labelList !== g.labelList, S = e.navigationService, C = S.pageIndex, w = S.firstDay,
                k = S.lastDay, M = S.viewStart, E = S.viewEnd;
            if (this._minDate = S.minDate, this._maxDate = S.maxDate, fe(e.min)) this._minIndex = -1 / 0, this._minYears = -1 / 0, this._minYearsIndex = -1 / 0, this._minYear = -1 / 0, this._minYearIndex = -1 / 0; else {
                var N = ia(this._minDate);
                this._minDate = ia(N), this._minYear = n(a(N), s(N), 1), this._minYears = a(N), this._minIndex = ps(N, e), this._minYearIndex = fs(N, e), this._minYearsIndex = vs(N, e)
            }
            if (fe(e.max)) this._maxIndex = 1 / 0, this._maxYears = 1 / 0, this._maxYearsIndex = 1 / 0, this._maxYear = 1 / 0, this._maxYearIndex = 1 / 0; else {
                var I = this._maxDate;
                this._maxYear = n(a(I), s(I) + 1, 1), this._maxYears = a(I), this._maxIndex = ps(I, e), this._maxYearIndex = fs(I, e), this._maxYearsIndex = vs(I, e)
            }
            var L = r !== g.calendarType || o !== g.eventRange || c !== g.firstDay || e.eventRangeSize !== g.eventRangeSize || e.refDate !== g.refDate || e.showCalendar !== g.showCalendar || e.weeks !== g.weeks;
            if (L && this._pageIndex !== le && (this._prevAnim = !0), v && (this._activeMonth = p), this._view = t.view || e.selectView, this._yearsIndex = vs(new Date(this._activeMonth), e), this._yearIndex = fs(new Date(this._activeMonth), e), this._view === ds) this._viewTitle = this._getPageYear(this._yearIndex) + ""; else if (this._view === hs) {
                var H = this._getPageYears(this._yearsIndex);
                this._viewTitle = H + " - " + (H + 11)
            }
            var O = m ? 1 : ys(e.pages, t.pageSize),
                Y = "vertical" === e.calendarScroll && "auto" !== e.pages && (e.pages === le || 1 === e.pages),
                P = e.showOuterDays !== le ? e.showOuterDays : !Y && O < 2 && (d || !u || u < 2), F = y.search(/m/i),
                V = y.search(/y/i);
            if (m && (this._monthsMulti = [], C !== le)) {
                for (var z = ke(.96 * t.pageSize / 325.6) || 1; u % z;) z--;
                for (var R = 0; R < u / z; ++R) {
                    for (var A = [], W = 0; W < z; ++W) A.push(+n(a(w), s(w) + R * z + W, 1));
                    this._monthsMulti.push(A)
                }
            }
            (r !== g.calendarType || e.theme !== g.theme || e.calendarScroll !== g.calendarScroll || e.hasContent !== g.hasContent || e.showCalendar !== g.showCalendar || e.showSchedule !== g.showSchedule || e.showWeekNumbers !== g.showWeekNumbers || e.weeks !== g.weeks || T) && (this._shouldCheckSize = !0), g.width === e.width && g.height === e.height || (this._dim = {
                height: De(e.height),
                width: De(e.width)
            }), this._cssClass = "mbsc-calendar mbsc-font mbsc-flex-col" + this._theme + this._rtl + (t.ready ? "" : " mbsc-hidden") + (m ? " mbsc-calendar-grid-view" : " mbsc-calendar-height-" + t.height + " mbsc-calendar-width-" + t.width) + " " + e.cssClass, this._dayNames = "sm" === t.width || m ? e.dayNamesMin : e.dayNamesShort, this._isSwipeChange = !1, this._yearFirst = V < F, this._pageNr = O, this._variableRow = D;
            var U = e.pageLoad !== g.pageLoad, B = +M != +this._viewStart || +E != +this._viewEnd;
            if (this._pageIndex !== le && B && (this._isIndexChange = !this._isSwipeChange && !L), C !== le && (this._pageIndex = C), C !== le && (e.marked !== g.marked || e.colors !== g.colors || e.labels !== g.labels || e.invalid !== g.invalid || e.valid !== g.valid || t.maxLabels !== this._maxLabels || B || T || U)) {
                this._maxLabels = t.maxLabels, this._viewStart = M, this._viewEnd = E;
                var j = e.labelsMap || os(e.labels, M, E, e),
                    K = j && bs(e, j, M, E, this._variableRow || this._maxLabels || 1, 7, !1, c, !0, e.eventOrder, !P, e.showLabelCount, e.moreEventsText, e.moreEventsPluralText);
                K && !this._labels && (this._shouldCheckSize = !0), (K && t.maxLabels || !K) && (this._shouldPageLoad = !this._isIndexChange || this._prevAnim || !i || U), this._labelsLayout = K, this._labels = j, this._marked = j ? le : e.marksMap || os(e.marked, M, E, e), this._colors = os(e.colors, M, E, e), this._valid = os(e.valid, M, E, e, !0), this._invalid = os(e.invalid, M, E, e, !0)
            }
            if (B || v || o !== g.eventRange || l !== g.eventRangeSize || e.monthNames !== g.monthNames) {
                this._title = [];
                var X = Ca(k, -1), J = C === le ? f : w;
                if (d) {
                    J = f;
                    for (var q = 0, G = Object.keys(e.selectedDates); q < G.length; q++) {
                        var Z = G[q];
                        if (+Z >= +w && +Z < +k) {
                            J = new Date(+Z);
                            break
                        }
                    }
                }
                if (this._pageNr > 1) for (R = 0; R < O; R++) {
                    var Q = n(a(w), s(w) + R, 1), $ = a(Q) + x, ee = b[s(Q)];
                    this._title.push({yearTitle: $, monthTitle: ee})
                } else {
                    var te = {yearTitle: a(J) + x, monthTitle: b[s(J)]}, ne = e.showSchedule && 1 === l ? o : i ? r : o,
                        ae = o && !i && (!e.showSchedule || l > 1);
                    switch (ne) {
                        case"year":
                            te.title = a(w) + x, l > 1 && (te.title += " - " + (a(X) + x));
                            break;
                        case"month":
                            if (l > 1 && !i) {
                                var se = b[s(w)], ie = a(w) + x, re = this._yearFirst ? ie + " " + se : se + " " + ie,
                                    oe = b[s(X)], ce = a(X) + x, de = this._yearFirst ? ce + " " + oe : oe + " " + ce;
                                te.title = re + " - " + de
                            } else m && (te.title = a(w) + x);
                            break;
                        case"day":
                        case"week":
                            if (ae) {
                                var he = y.search(/d/i) < F ? "D MMM, YYYY" : "MMM D, YYYY";
                                te.title = xa(he, w, e), ("week" === ne || l > 1) && (te.title += " - " + xa(he, X, e))
                            }
                    }
                    this._title.push(te)
                }
            }
            this._active = p, this._hasPicker = e.hasPicker || m || !h || !i || "md" === t.width && !1 !== e.hasPicker, this._axis = Y ? "Y" : "X", this._rtlNr = !Y && e.rtl ? -1 : 1, this._weeks = _, this._nextIcon = Y ? e.nextIconV : e.rtl ? e.prevIconH : e.nextIconH, this._prevIcon = Y ? e.prevIconV : e.rtl ? e.nextIconH : e.prevIconH, this._mousewheel = e.mousewheel === le ? Y : e.mousewheel, this._isGrid = m, this._isVertical = Y, this._showOuter = P, this._showDaysTop = Y || !!D && 1 === u
        }, t.prototype._mounted = function () {
            this._observer = li(this._el, this._onResize, this._zone), this._doc = Dn(this._el), bn(this._doc, Is, this._onDocClick)
        }, t.prototype._updated = function () {
            var e = this;
            if (this._shouldCheckSize ? (setTimeout((function () {
                e._onResize()
            })), this._shouldCheckSize = !1) : this._shouldPageLoad && (this._pageLoaded(), this._shouldPageLoad = !1), this._shouldFocus && setTimeout((function () {
                e._focusActive(), e._shouldFocus = !1
            })), this.s.instanceService && this.s.instanceService.onComponentChange.next({}), this._pageChange = !1, this._variableRow && this.s.showCalendar) {
                var t = this._body.querySelector(".mbsc-calendar-body-inner"), n = t.scrollHeight > t.clientHeight;
                n !== this.state.hasScrollY && (this._shouldCheckSize = !0, this.setState({hasScrollY: n}))
            }
        }, t.prototype._destroy = function () {
            this._observer && this._observer.detach(), xn(this._doc, Is, this._onDocClick), clearTimeout(this._hoverTimer)
        }, t.prototype._getActiveCell = function () {
            var e = this._view, t = e === cs ? this._body : this._pickerCont,
                n = e === hs ? "year" : e === ds ? "month" : "cell";
            return t && t.querySelector(".mbsc-calendar-" + n + '[tabindex="0"]')
        }, t.prototype._focusActive = function () {
            var e = this._getActiveCell();
            e && e.focus()
        }, t.prototype._pageLoaded = function () {
            var e = this.s.navigationService;
            this._hook("onPageLoaded", {
                activeElm: this._getActiveCell(),
                firstDay: e.firstPageDay,
                lastDay: e.lastPageDay,
                month: "month" === this.s.calendarType ? e.firstDay : le,
                viewEnd: e.viewEnd,
                viewStart: e.viewStart
            })
        }, t.prototype._activeChange = function (e) {
            var t = this._pageIndex + e;
            this._minIndex <= t && this._maxIndex >= t && this.__getTextParam && (this._prevAnim = !1, this._pageChange = !0, this._hook("onActiveChange", {
                date: this._getPageDay(t),
                dir: e,
                pageChange: !0
            }))
        }, t.prototype._activeYearsChange = function (e) {
            var t = this._yearsIndex + e;
            if (this._minYearsIndex <= t && this._maxYearsIndex >= t) {
                var n = this._getPageYears(t);
                this._prevAnim = !1, this._activeMonth = +this.s.getDate(n, 0, 1), this.forceUpdate()
            }
        }, t.prototype._activeYearChange = function (e) {
            var t = this._yearIndex + e;
            if (this._minYearIndex <= t && this._maxYearIndex >= t) {
                var n = this._getPageYear(t);
                this._prevAnim = !1, this._activeMonth = +this.s.getDate(n, 0, 1), this.forceUpdate()
            }
        }, t.prototype._prevDocClick = function () {
            var e = this;
            this._prevClick = !0, setTimeout((function () {
                e._prevClick = !1
            }))
        }, t
    }(ja);

    function ir(e) {
        return this.getChildContext = function () {
            return e.context
        }, e.children
    }

    function rr(e) {
        var t = this, n = e._container;
        t.componentWillUnmount = function () {
            qt(null, t._temp), t._temp = null, t._container = null
        }, t._container && t._container !== n && t.componentWillUnmount(), e._vnode ? (t._temp || (t._container = n, t._temp = {
            nodeType: 1,
            parentNode: n,
            childNodes: [],
            appendChild: function (e) {
                this.childNodes.push(e), t._container.appendChild(e)
            },
            insertBefore: function (e, n) {
                this.childNodes.push(e), t._container.appendChild(e)
            },
            removeChild: function (e) {
                this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t._container.removeChild(e)
            }
        }), qt(Ct(ir, {context: t.context}, e._vnode), t._temp)) : t._temp && t.componentWillUnmount()
    }

    function or(e, t) {
        return Ct(rr, {_vnode: e, _container: t})
    }

    var lr = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype.render = function () {
            var e = this.props.context;
            return e ? or(this.props.children, e) : null
        }, t
    }(Mt), cr = lr;
    var dr = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e, t) {
            return function (e, t, n, a) {
                var s, i, r = n._hb, o = n._rtl, l = n._theme, d = e.display,
                    h = ((s = {}).onKeyDown = n._onKeyDown, s), u = ((i = {}).onAnimationEnd = n._onAnimationEnd, i);
                return n._isModal ? n._isVisible ? Ct(cr, {context: n._ctx}, Ct("div", c({
                    className: "mbsc-font mbsc-flex mbsc-popup-wrapper mbsc-popup-wrapper-" + d + l + o + " " + n._className + (e.fullScreen ? " mbsc-popup-wrapper-" + d + "-full" : "") + (n._touchUi ? "" : " mbsc-popup-pointer") + (n._round ? " mbsc-popup-round" : "") + (n._hasContext ? " mbsc-popup-wrapper-ctx" : "") + (t.isReady ? "" : " mbsc-popup-hidden"),
                    ref: n._setWrapper
                }, h), e.showOverlay && Ct("div", {
                    className: "mbsc-popup-overlay mbsc-popup-overlay-" + d + l + (n._isClosing ? " mbsc-popup-overlay-out" : "") + (n._isOpening && t.isReady ? " mbsc-popup-overlay-in" : ""),
                    onClick: n._onOverlayClick
                }), Ct("div", {
                    className: "mbsc-popup-limits mbsc-popup-limits-" + d,
                    ref: n._setLimitator,
                    style: n._limits
                }), Ct("div", c({
                    className: "mbsc-flex-col mbsc-popup mbsc-popup-" + d + l + r + (e.fullScreen ? "-full" : "") + (t.bubblePos && t.showArrow && "anchored" === d ? " mbsc-popup-anchored-" + t.bubblePos : "") + (n._isClosing ? " mbsc-popup-" + n._animation + "-out" : "") + (n._isOpening && t.isReady ? " mbsc-popup-" + n._animation + "-in" : ""),
                    role: "dialog",
                    "aria-modal": "true",
                    ref: n._setPopup,
                    style: n._style,
                    onClick: n._onPopupClick
                }, u), "anchored" === d && t.showArrow && Ct("div", {className: "mbsc-popup-arrow-wrapper mbsc-popup-arrow-wrapper-" + t.bubblePos + l}, Ct("div", {
                    className: "mbsc-popup-arrow mbsc-popup-arrow-" + t.bubblePos + l,
                    style: t.arrowPos
                })), Ct("div", {
                    className: "mbsc-popup-focus",
                    tabIndex: -1,
                    ref: n._setActive
                }), Ct("div", {className: "mbsc-flex-col mbsc-flex-1-1 mbsc-popup-body mbsc-popup-body-" + d + l + r + (e.fullScreen ? " mbsc-popup-body-" + d + "-full" : "") + (n._round ? " mbsc-popup-body-round" : "")}, n._headerText && Ct("div", {
                    className: "mbsc-flex-none mbsc-popup-header mbsc-popup-header-" + d + l + r + (n._buttons ? "" : " mbsc-popup-header-no-buttons"),
                    dangerouslySetInnerHTML: n._headerText,
                    "v-html": le
                }), Ct("div", {
                    className: "mbsc-flex-1-1 mbsc-popup-content" + (e.contentPadding ? " mbsc-popup-padding" : ""),
                    ref: n._setContent
                }, a), n._buttons && Ct("div", {className: "mbsc-flex-none mbsc-popup-buttons mbsc-popup-buttons-" + d + l + o + r + (n._flexButtons ? " mbsc-flex" : "") + (e.fullScreen ? " mbsc-popup-buttons-" + d + "-full" : "")}, n._buttons.map((function (t, a) {
                    return Ct(Ki, {
                        color: t.color,
                        className: "mbsc-popup-button mbsc-popup-button-" + d + o + r + (n._flexButtons ? " mbsc-popup-button-flex" : "") + " " + (t.cssClass || ""),
                        icon: t.icon,
                        disabled: t.disabled,
                        key: a,
                        theme: e.theme,
                        themeVariant: e.themeVariant,
                        variant: t.variant || e.buttonVariant,
                        onClick: t.handler
                    }, t.text)
                }))))))) : null : Ct(kt, null, a)
            }(e, t, this, e.children)
        }, t
    }(vi), hr = {
        before: function (e, t) {
            var n, a, s = this;
            t.onOpen && (n = t.onOpen), t.onClosed && (a = t.onClosed);
            var i = Dn(e), r = i && i.createComment("popup");
            r && e.parentNode && e.parentNode.insertBefore(r, e), e.style.display = "none", t.onOpen = function (t, a) {
                e.style.display = "", t.target.querySelector(".mbsc-popup-content").appendChild(e), n && n.call(s, t, a)
            }, t.onClosed = function (t, n) {
                e.style.display = "none", r && r.parentNode && r.parentNode.insertBefore(e, r), a && a.call(s, t, n)
            }
        }
    }, ur = {}, mr = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._onClick = function (e) {
                if (t._isDrag) e.stopPropagation(); else {
                    t._triggerEvent("onClick", e);
                    var n = t.s, a = ur[n.id];
                    a && n.selected && a.next({hasFocus: !1})
                }
            }, t._onRightClick = function (e) {
                t._triggerEvent("onRightClick", e)
            }, t._onDocTouch = function (e) {
                xn(t._doc, Ks, t._onDocTouch), xn(t._doc, Vs, t._onDocTouch), t._isDrag = !1, t._hook("onDragModeOff", {
                    data: t.s.event,
                    domEvent: e
                })
            }, t._updateState = function (e) {
                t.s.showText && t.setState(e)
            }, t._triggerEvent = function (e, n) {
                t._hook(e, {domEvent: n, label: t.s.event, target: t._el})
            }, t
        }

        return l(t, e), t.prototype._mounted = function () {
            var e, t = this, n = this.s, a = n.id, s = n.isPicker, i = ur[a];
            i || (i = new m, ur[a] = i), this._unsubscribe = i.subscribe(this._updateState), this._doc = Dn(this._el), this._unlisten = Bi(this._el, {
                keepFocus: !0, onBlur: function () {
                    s || i.next({hasFocus: !1})
                }, onDoubleClick: function (e) {
                    e.domEvent.stopPropagation(), t._hook("onDoubleClick", {
                        domEvent: e.domEvent,
                        label: t.s.event,
                        target: t._el
                    })
                }, onEnd: function (n) {
                    if (t._isDrag) {
                        var a = t.s, s = c({}, n);
                        s.domEvent.preventDefault(), s.data = a.event, a.resize && e ? (s.resize = !0, s.direction = e) : a.drag && (s.drag = !0), t._hook("onDragEnd", s), a.isUpdate || (t._isDrag = !1)
                    }
                    clearTimeout(t._touchTimer), e = le
                }, onFocus: function () {
                    s || i.next({hasFocus: !0})
                }, onHoverIn: function (e) {
                    t._isDrag || s || (i.next({hasHover: !0}), t._triggerEvent("onHoverIn", e))
                }, onHoverOut: function (e) {
                    i.next({hasHover: !1}), t._triggerEvent("onHoverOut", e)
                }, onKeyDown: function (e) {
                    var n = t.s.event;
                    switch (e.keyCode) {
                        case Zs:
                        case Qs:
                            t._el.click(), e.preventDefault();
                            break;
                        case 8:
                        case 46:
                            n && !1 !== n.editable && t._hook("onDelete", {domEvent: e, event: n, source: "calendar"})
                    }
                }, onMove: function (n) {
                    var a = t.s, s = c({}, n);
                    if (s.data = a.event, e) s.resize = !0, s.direction = e; else {
                        if (!a.drag) return;
                        s.drag = !0
                    }
                    a.event && !1 !== a.event.editable && (t._isDrag ? (s.domEvent.preventDefault(), t._hook("onDragMove", s)) : (Math.abs(s.deltaX) > 7 || Math.abs(s.deltaY) > 7) && (clearTimeout(t._touchTimer), s.isTouch || (t._isDrag = !0, t._hook("onDragStart", s))))
                }, onStart: function (n) {
                    var a = t.s, s = c({}, n), i = s.domEvent.target;
                    if (s.data = a.event, a.resize && i.classList.contains("mbsc-calendar-label-resize")) e = i.classList.contains("mbsc-calendar-label-resize-start") ? "start" : "end", s.resize = !0, s.direction = e; else {
                        if (!a.drag) return;
                        s.drag = !0
                    }
                    a.event && !1 !== a.event.editable && (!t._isDrag && s.isTouch || s.domEvent.stopPropagation(), t._isDrag ? t._hook("onDragStart", s) : s.isTouch && (t._touchTimer = setTimeout((function () {
                        t._hook("onDragModeOn", s), t._hook("onDragStart", s), t._isDrag = !0
                    }), 350)))
                }
            }), this._isDrag && (bn(this._doc, Ks, this._onDocTouch), bn(this._doc, Vs, this._onDocTouch))
        }, t.prototype._destroy = function () {
            if (this._unsubscribe) {
                var e = this.s.id, t = ur[e];
                t && (t.unsubscribe(this._unsubscribe), t.nr || delete ur[e])
            }
            this._unlisten && this._unlisten(), xn(this._doc, Ks, this._onDocTouch), xn(this._doc, Vs, this._onDocTouch)
        }, t.prototype._render = function (e, t) {
            var n, a, s, i, r, o, l = e.event, c = new Date(e.date), d = e.render || e.renderContent, h = !1;
            if (this._isDrag = this._isDrag || e.isUpdate, this._content = le, this._title = e.more || e.count || !e.showEventTooltip ? le : function (e) {
                if (en && e) {
                    var t = en.createElement("div");
                    return t.innerHTML = e, t.textContent.trim()
                }
                return e || ""
            }(l.tooltip || l.title || l.text), this._tabIndex = e.isActiveMonth && e.showText && !e.count && !e.isPicker ? 0 : -1, l) {
                var u = l.allDay, m = u ? le : e;
                n = l.start ? ga(l.start, m) : null, a = l.end ? ga(l.end, m) : null;
                var _ = n && a && aa(e, u, n, a, !0), p = Ca(ca(c, e), 7),
                    v = e.lastDay && e.lastDay < p ? e.lastDay : p;
                s = !(h = n && _ && !da(n, _)) || n && da(n, c), i = !h || _ && da(_, c), r = !h || (e.showText ? _ < v : i), this._hasResizeStart = e.resize && s, this._hasResizeEnd = e.resize && r;
                var f = l.color;
                if (!f && l.resource && e.resourcesMap) {
                    var g = e.resourcesMap[me(l.resource) ? l.resource[0] : l.resource];
                    f = g && g.color
                }
                e.showText && (this._textColor = f ? Mn(f) : le), this._color = e.render || e.template ? le : l.textColor && !f ? "transparent" : f
            }
            if (l && e.showText && (d || e.contentTemplate || e.template)) {
                var y = l.allDay || !n || h && !s && !i;
                if (this._data = {
                    end: !y && i && a ? xa(e.timeFormat, a, e) : "",
                    id: l.id,
                    isMultiDay: h,
                    original: l,
                    start: !y && s && n ? xa(e.timeFormat, n, e) : "",
                    title: this._title
                }, d) {
                    var b = d(this._data);
                    ve(b) ? o = b : this._content = b
                }
            } else o = e.more || e.count || e.showText && (l.title || l.text) || "";
            o !== this._text && (this._text = o, this._html = o ? this._safeHtml(o) : le, this._shouldEnhance = o && l && e.showText && !!d), this._cssClass = "mbsc-calendar-text" + this._theme + this._rtl + (t.hasFocus && !e.inactive && !e.selected || e.selected && e.showText ? " mbsc-calendar-label-active " : "") + (!t.hasHover || e.inactive || this._isDrag ? "" : " mbsc-calendar-label-hover") + (e.more ? " mbsc-calendar-text-more" : e.render || e.template ? " mbsc-calendar-custom-label" : " mbsc-calendar-label") + (e.inactive ? " mbsc-calendar-label-inactive" : "") + (e.isUpdate ? " mbsc-calendar-label-dragging" : "") + (e.hidden ? " mbsc-calendar-label-hidden" : "") + (s ? " mbsc-calendar-label-start" : "") + (r ? " mbsc-calendar-label-end" : "") + (l && !1 === l.editable ? " mbsc-readonly-event" : "") + (l && l.cssClass ? " " + l.cssClass : "")
        }, t
    }(ja);
    var _r = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e) {
            return function (e, t) {
                var n, a = e.event && !1 !== e.event.editable, s = ((n = {}).onContextMenu = t._onRightClick, n);
                return Ct("div", c({
                    "aria-hidden": e.showText ? le : "true",
                    className: t._cssClass,
                    "data-id": e.showText && e.event ? e.event.id : null,
                    onClick: t._onClick,
                    ref: t._setEl,
                    role: e.showText ? "button" : le,
                    style: {color: t._color},
                    tabIndex: t._tabIndex,
                    title: t._title
                }, s), t._hasResizeStart && a && Ct("div", {className: "mbsc-calendar-label-resize mbsc-calendar-label-resize-start" + t._rtl + (e.isUpdate ? " mbsc-calendar-label-resize-start-touch" : "")}), t._hasResizeEnd && a && Ct("div", {className: "mbsc-calendar-label-resize mbsc-calendar-label-resize-end" + t._rtl + (e.isUpdate ? " mbsc-calendar-label-resize-end-touch" : "")}), e.showText && !e.more && !e.render && Ct("div", {className: "mbsc-calendar-label-background" + t._theme}), e.showText && !e.more && e.render ? t._html ? Ct("div", {dangerouslySetInnerHTML: t._html}, le) : t._content : Ct("div", {
                    className: "mbsc-calendar-label-inner" + t._theme,
                    style: {color: t._textColor}
                }, Ct("div", {
                    "aria-hidden": "true",
                    className: "mbsc-calendar-label-text" + t._theme,
                    dangerouslySetInnerHTML: t._html,
                    style: {color: e.event && e.event.textColor}
                }, t._content), e.label && Ct("div", {className: "mbsc-hidden-content"}, e.label)))
            }(e, this)
        }, t
    }(mr), pr = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._onClick = function (e) {
                t._cellClick("onDayClick", e)
            }, t._onRightClick = function (e) {
                t._cellClick("onDayRightClick", e)
            }, t._onLabelClick = function (e) {
                t._labelClick("onLabelClick", e)
            }, t._onLabelDoubleClick = function (e) {
                t._labelClick("onLabelDoubleClick", e)
            }, t._onLabelRightClick = function (e) {
                t._labelClick("onLabelRightClick", e)
            }, t._onLabelHoverIn = function (e) {
                t._labelClick("onLabelHoverIn", e)
            }, t._onLabelHoverOut = function (e) {
                t._labelClick("onLabelHoverOut", e)
            }, t
        }

        return l(t, e), t.prototype._mounted = function () {
            var e, t, n, a = this;
            this._unlisten = Bi(this._el, {
                click: !0, onBlur: function () {
                    a.setState({hasFocus: !1})
                }, onDoubleClick: function (e) {
                    var t = a.s;
                    t.clickToCreate && "single" !== t.clickToCreate && t.labels && !t.disabled && t.display && (a._hook("onLabelUpdateStart", e), a._hook("onLabelUpdateEnd", e)), a._cellClick("onDayDoubleClick", e.domEvent)
                }, onEnd: function (s) {
                    e && (s.domEvent.preventDefault(), a._hook("onLabelUpdateEnd", s), e = !1), clearTimeout(n), e = !1, t = !1
                }, onFocus: function () {
                    a.setState({hasFocus: !0})
                }, onHoverIn: function (e) {
                    var t = a.s;
                    t.disabled || a.setState({hasHover: !0}), a._hook("onHoverIn", {
                        date: new Date(t.date),
                        domEvent: e,
                        hidden: !t.display,
                        outer: t.outer,
                        target: a._el
                    })
                }, onHoverOut: function (e) {
                    var t = a.s;
                    a.setState({hasHover: !1}), a._hook("onHoverOut", {
                        date: new Date(t.date),
                        domEvent: e,
                        hidden: !t.display,
                        outer: t.outer,
                        target: a._el
                    })
                }, onKeyDown: function (e) {
                    switch (e.keyCode) {
                        case Zs:
                        case Qs:
                            e.preventDefault(), a._onClick(e)
                    }
                }, onMove: function (s) {
                    e && a.s.dragToCreate ? (s.domEvent.preventDefault(), a._hook("onLabelUpdateMove", s)) : t && a.s.dragToCreate && (Math.abs(s.deltaX) > 7 || Math.abs(s.deltaY) > 7) ? (e = !s.isTouch, a._hook("onLabelUpdateStart", s)) : clearTimeout(n)
                }, onStart: function (s) {
                    var i = a.s;
                    (s.create = !0, i.disabled || !i.dragToCreate && !i.clickToCreate || !i.labels || e) || (Hn(s.domEvent.target, ".mbsc-calendar-text", a._el) || (s.isTouch && i.dragToCreate ? n = setTimeout((function () {
                        a._hook("onLabelUpdateStart", s), a._hook("onLabelUpdateModeOn", s), e = !0
                    }), 350) : "single" === i.clickToCreate ? (a._hook("onLabelUpdateStart", s), e = !0) : t = !s.isTouch))
                }
            })
        }, t.prototype._render = function (e, t) {
            var n = fa(e), a = e.date, s = e.colors, i = e.display, r = e.dragData, o = e.hoverEnd, l = e.hoverStart,
                c = e.labels, d = e.rangeEnd, h = e.rangeStart, u = new Date(a), m = sa(u), _ = da(n, u),
                p = c && c.events, v = s && s[0], f = v && v.background, g = v && v.highlight, y = "", b = "";
            this._draggedLabel = r && r.draggedDates && r.draggedDates[m], this._draggedLabelOrig = r && r.originDates && r.originDates[m], this._todayClass = _ ? " mbsc-calendar-today" : "", this._cellStyles = f && i ? {
                backgroundColor: f,
                color: Mn(f)
            } : le, this._circleStyles = g ? {
                backgroundColor: g,
                color: Mn(v.highlight)
            } : le, this._ariaLabel = "day" === e.type ? (_ ? e.todayText + ", " : "") + e.day + ", " + e.month + " " + e.text + ", " + e.year : "month" === e.type ? e.month : "", i && ((h && a >= h && a <= (d || h) || d && a <= d && a >= (h || d)) && (b = " mbsc-range-day" + (a === (h || d) ? " mbsc-range-day-start" : "") + (a === (d || h) ? " mbsc-range-day-end" : "")), l && o && a >= l && a <= o && (b += " mbsc-range-hover" + (a === l ? " mbsc-range-hover-start mbsc-hover" : "") + (a === o ? " mbsc-range-hover-end mbsc-hover" : ""))), e.marks && e.marks.forEach((function (e) {
                y += e.cellCssClass ? " " + e.cellCssClass : ""
            })), s && s.forEach((function (e) {
                y += e.cellCssClass ? " " + e.cellCssClass : ""
            })), p && p.forEach((function (e) {
                y += e.cellCssClass ? " " + e.cellCssClass : ""
            })), this._cssClass = "mbsc-calendar-cell mbsc-flex-1-0-0 mbsc-calendar-" + e.type + this._theme + this._rtl + this._hb + y + (c ? " mbsc-calendar-day-labels" : "") + (s ? " mbsc-calendar-day-colors" : "") + (e.outer ? " mbsc-calendar-day-outer" : "") + (e.hasMarks ? " mbsc-calendar-day-marked" : "") + (e.disabled ? " mbsc-disabled" : "") + (i ? "" : " mbsc-calendar-day-empty") + (e.selected ? " mbsc-selected" : "") + (t.hasFocus ? " mbsc-focus" : "") + (!t.hasHover || a !== l && a !== o && (l || o) ? "" : " mbsc-hover") + (this._draggedLabel ? " mbsc-calendar-day-highlight" : "") + b, this._data = {
                date: u,
                events: e.events || [],
                selected: e.selected
            }
        }, t.prototype._destroy = function () {
            this._unlisten && this._unlisten()
        }, t.prototype._cellClick = function (e, t) {
            var n = this.s;
            n.display && this._hook(e, {
                date: new Date(n.date),
                disabled: n.disabled,
                domEvent: t,
                outer: n.outer,
                selected: n.selected,
                source: "calendar",
                target: this._el
            })
        }, t.prototype._labelClick = function (e, t) {
            var n = this.s;
            t.date = new Date(n.date), t.labels = n.labels.events, this._hook(e, t)
        }, t
    }(ja);

    function vr(e, t, n, a, s, i, r) {
        return Ct(_r, {
            key: r,
            amText: t.amText,
            count: n.count ? n.count + " " + (n.count > 1 ? t.eventsText : t.eventText) : le,
            date: t.date,
            dataTimezone: t.dataTimezone,
            displayTimezone: t.displayTimezone,
            drag: t.dragToMove,
            resize: Ds(n.event && n.event.resize, t.dragToResize),
            event: n.event,
            exclusiveEndDates: t.exclusiveEndDates,
            firstDay: t.firstDay,
            hidden: s,
            id: n.id,
            inactive: !i && n.event && t.dragData && t.dragData.draggedEvent && n.event.id === t.dragData.draggedEvent.id,
            isActiveMonth: t.isActiveMonth,
            isPicker: t.isPicker,
            isUpdate: i,
            label: n.label,
            lastDay: n.lastDay,
            more: n.more,
            pmText: t.pmText,
            resourcesMap: t.resourcesMap,
            rtl: t.rtl,
            selected: n.event && t.selectedEventsMap && !(!t.selectedEventsMap[n.id] && !t.selectedEventsMap[n.event.id]),
            showEventTooltip: t.showEventTooltip,
            showText: a,
            theme: t.theme,
            timeFormat: t.timeFormat,
            timezonePlugin: t.timezonePlugin,
            render: t.renderLabel,
            renderContent: t.renderLabelContent,
            onClick: e._onLabelClick,
            onDoubleClick: e._onLabelDoubleClick,
            onRightClick: e._onLabelRightClick,
            onHoverIn: e._onLabelHoverIn,
            onHoverOut: e._onLabelHoverOut,
            onDelete: t.onLabelDelete,
            onDragStart: t.onLabelUpdateStart,
            onDragMove: t.onLabelUpdateMove,
            onDragEnd: t.onLabelUpdateEnd,
            onDragModeOn: t.onLabelUpdateModeOn,
            onDragModeOff: t.onLabelUpdateModeOff
        })
    }

    function fr(e, t) {
        var n, a, s = t._draggedLabel, i = t._draggedLabelOrig, r = t._theme,
            o = ((n = {}).onContextMenu = t._onRightClick, n);
        return e.renderDay && (a = e.renderDay(t._data)), e.renderDayContent && (a = e.renderDayContent(t._data)), ve(a) && (a = Ct("div", {dangerouslySetInnerHTML: t._safeHtml(a)}), t._shouldEnhance = !0), Ct("div", c({
            ref: t._setEl,
            className: t._cssClass,
            onClick: t._onClick,
            style: t._cellStyles,
            tabIndex: e.disabled ? le : e.active ? 0 : -1
        }, o), Ct("div", {dangerouslySetInnerHTML: t.textParam}), Ct("div", {className: "mbsc-calendar-cell-inner mbsc-calendar-" + e.type + "-inner" + r + ("day" === e.type ? "" : t._hb) + (e.display ? "" : " mbsc-calendar-day-hidden")}, e.renderDay ? a : Ct(kt, null, 1 === e.text && Ct("div", {
            "aria-hidden": "true",
            className: "mbsc-calendar-month-name" + r + t._rtl
        }, e.monthShort), Ct("div", {
            "aria-label": t._ariaLabel,
            role: "button",
            "aria-pressed": e.selected,
            className: "mbsc-calendar-cell-text mbsc-calendar-" + e.type + "-text" + r + t._todayClass,
            style: t._circleStyles
        }, e.text), e.marks && Ct("div", null, Ct("div", {className: "mbsc-calendar-marks" + r + t._rtl}, e.marks.map((function (e, t) {
            return Ct("div", {
                className: "mbsc-calendar-mark " + (e.markCssClass || "") + r,
                key: t,
                style: {background: e.color}
            })
        })))), e.renderDayContent && a), e.labels && Ct("div", null, i && i.event && Ct("div", {className: "mbsc-calendar-labels mbsc-calendar-labels-dragging"}, Ct("div", {style: {width: i.width + "%" || "100%"}}, vr(t, e, {
            id: 0,
            event: i.event
        }, !0, !!e.dragData.draggedDates, !0))), s && s.event && Ct("div", {className: "mbsc-calendar-labels mbsc-calendar-labels-dragging"}, Ct("div", {
            className: "mbsc-calendar-label-wrapper",
            style: {width: s.width + "%" || "100%"}
        }, vr(t, e, {
            id: 0,
            event: s.event
        }, !0, !1, !0))), Ct("div", {className: "mbsc-calendar-labels"}, e.labels.data.map((function (n) {
            return function (e, t, n) {
                var a = n.id;
                return n.placeholder ? Ct("div", {
                    className: "mbsc-calendar-text mbsc-calendar-text-placeholder",
                    key: a
                }) : n.more || n.count ? vr(e, t, n, !0, !1, !1, a) : n.multiDay ? [Ct("div", {
                    className: "mbsc-calendar-label-wrapper",
                    style: {width: n.width + "%"},
                    key: a
                }, vr(e, t, n, !0)), vr(e, t, n, !1, !1, !1, "-" + a)] : vr(e, t, n, n.showText, !1, !1, a)
            }(t, e, n)
        }))), Ct("div", {className: "mbsc-calendar-text mbsc-calendar-text-placeholder"}))))
    }

    var gr = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e) {
            return fr(e, this)
        }, t
    }(pr), yr = function (e) {
        var t = e.firstDay, n = e.hidden, a = e.rtl, s = e.theme, i = e.dayNamesShort, r = e.showWeekNumbers,
            o = e.hasScroll;
        return Ct("div", {
            "aria-hidden": "true",
            className: "mbsc-calendar-week-days mbsc-flex" + (n ? " mbsc-hidden" : "")
        }, r && Ct("div", {className: "mbsc-calendar-week-day mbsc-flex-none mbsc-calendar-week-nr" + s + a}), he.map((function (e, n) {
            return Ct("div", {className: "mbsc-calendar-week-day mbsc-flex-1-0-0" + s + a, key: n}, i[(n + t) % 7])
        })), o && Ct("div", {className: "mbsc-schedule-fake-scroll-y"}))
    }, br = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._isActive = function (e) {
            return this.s.isActive && e === this.s.activeDate
        }, t.prototype._isInvalid = function (e) {
            var t = this.s;
            return xi(t, pa(t, new Date(e)), t.invalid, t.valid, +t.min, +t.max)
        }, t.prototype._isSelected = function (e) {
            var t = new Date(e), n = pa(this.s, t);
            return !!this.s.selectedDates[+n]
        }, t.prototype._getWeekNr = function (e, t) {
            var n = new Date(t);
            return "" + e.getWeekNumber(e.getDate(n.getFullYear(), n.getMonth(), n.getDate() + (7 - e.firstDay + 1) % 7))
        }, t.prototype._render = function (e) {
            var t = e.weeks, n = e.firstDay, a = new Date(e.firstPageDay), s = e.getYear(a), i = e.getMonth(a),
                r = e.getDay(a), o = e.getDate(s, i, r).getDay(), l = n - o > 0 ? 7 : 0, c = [], d = 0;
            this._rowHeights = [], this._rows = [], this._days = he;
            for (var h = 0; h < 7 * t; h++) {
                var u = e.getDate(s, i, h + n - l - o + r), m = sa(u), _ = e.getMonth(u),
                    p = _ !== i && "week" !== e.calendarType, v = e.marked && e.marked[m],
                    f = v ? e.showSingleMark ? [{}] : v : null, g = e.labels && e.labels[m], y = g ? g.data.length : 0,
                    b = h % 7 == 0;
                if (e.variableRow) {
                    if (b && p && h) break;
                    y > d && (d = y), h % 7 == 6 && (this._rowHeights.push(d * (e.labelHeight || 20) + (e.cellTextHeight || 0) + 3), d = 0)
                }
                b && (c = [], this._rows.push(c)), c.push({
                    colors: e.colors && e.colors[m],
                    date: +u,
                    day: e.dayNames[u.getDay()],
                    display: !p || e.showOuter,
                    events: e.events && e.events[m],
                    labels: g,
                    marks: f,
                    month: e.monthNames[_],
                    monthShort: e.monthNamesShort[_],
                    outer: p,
                    text: e.getDay(u),
                    year: e.getYear(u)
                })
            }
        }, t
    }(ja);
    var xr = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e) {
            return function (e, t) {
                var n = e.showWeekNumbers, a = e.showWeekDays ? Ct(yr, {
                    dayNamesShort: e.dayNamesShort,
                    firstDay: e.firstDay,
                    rtl: t._rtl,
                    showWeekNumbers: n,
                    theme: t._theme
                }) : null;
                return Ct("div", {
                    "aria-hidden": e.isActive ? le : "true",
                    className: "mbsc-calendar-table mbsc-flex-col mbsc-flex-1-1" + (e.isActive ? " mbsc-calendar-table-active" : "")
                }, a, t._rows.map((function (a, s) {
                    var i = n ? t._getWeekNr(e, a[0].date) : "";
                    return Ct("div", {
                        className: "mbsc-calendar-row mbsc-flex mbsc-flex-1-0",
                        key: s,
                        style: {minHeight: t._rowHeights[s]}
                    }, n && Ct("div", {className: "mbsc-calendar-cell mbsc-flex-none mbsc-calendar-day mbsc-calendar-week-nr" + t._theme}, Ct("div", {"aria-hidden": "true"}, i), Ct("div", {className: "mbsc-hidden-content"}, e.weekText.replace("{count}", i))), a.map((function (n, a) {
                        return Ct(gr, {
                            active: n.display && t._isActive(n.date),
                            amText: e.amText,
                            clickToCreate: e.clickToCreate,
                            colors: n.colors,
                            date: n.date,
                            day: n.day,
                            disabled: t._isInvalid(n.date),
                            display: n.display,
                            dataTimezone: e.dataTimezone,
                            displayTimezone: e.displayTimezone,
                            dragData: e.dragData,
                            dragToCreate: e.dragToCreate,
                            dragToResize: e.dragToResize,
                            dragToMove: e.dragToMove,
                            eventText: e.eventText,
                            events: n.events,
                            eventsText: e.eventsText,
                            exclusiveEndDates: e.exclusiveEndDates,
                            firstDay: e.firstDay,
                            hasMarks: e.hasMarks,
                            hoverEnd: e.hoverEnd,
                            hoverStart: e.hoverStart,
                            isActiveMonth: e.isActive,
                            isPicker: e.isPicker,
                            key: n.date,
                            labels: n.labels,
                            pmText: e.pmText,
                            marks: n.marks,
                            month: n.month,
                            monthShort: n.monthShort,
                            onDayClick: e.onDayClick,
                            onDayDoubleClick: e.onDayDoubleClick,
                            onDayRightClick: e.onDayRightClick,
                            onLabelClick: e.onLabelClick,
                            onLabelDoubleClick: e.onLabelDoubleClick,
                            onLabelRightClick: e.onLabelRightClick,
                            onLabelHoverIn: e.onLabelHoverIn,
                            onLabelHoverOut: e.onLabelHoverOut,
                            onLabelDelete: e.onLabelDelete,
                            onLabelUpdateStart: e.onLabelUpdateStart,
                            onLabelUpdateMove: e.onLabelUpdateMove,
                            onLabelUpdateEnd: e.onLabelUpdateEnd,
                            onLabelUpdateModeOn: e.onLabelUpdateModeOn,
                            onLabelUpdateModeOff: e.onLabelUpdateModeOff,
                            outer: n.outer,
                            renderDay: e.renderDay,
                            renderDayContent: e.renderDayContent,
                            renderLabel: e.renderLabel,
                            renderLabelContent: e.renderLabelContent,
                            rangeEnd: e.rangeEnd,
                            rangeStart: e.rangeStart,
                            resourcesMap: e.resourcesMap,
                            selectedEventsMap: e.selectedEventsMap,
                            rtl: e.rtl,
                            showEventTooltip: e.showEventTooltip,
                            selected: t._isSelected(n.date),
                            text: n.text,
                            theme: e.theme,
                            timeFormat: e.timeFormat,
                            timezonePlugin: e.timezonePlugin,
                            todayText: e.todayText,
                            type: "day",
                            year: n.year,
                            onHoverIn: e.onDayHoverIn,
                            onHoverOut: e.onDayHoverOut
                        })
                    })))
                })))
            }(e, this)
        }, t
    }(br);

    function Dr(e, t, n, a) {
        var s;
        if (!(t < n || t > a)) {
            if (me(e)) {
                var i = e.length, r = t % i;
                s = e[r >= 0 ? r : r + i]
            } else s = e(t);
            return s
        }
    }

    var Tr = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._currPos = 0, t._delta = 0, t._endPos = 0, t._lastRaf = 0, t._maxSnapScroll = 0, t._margin = 0, t._scrollEnd = Ee((function () {
                hn(t._raf), t._raf = !1, t._onEnd(), t._hasScrolled = !1
            }), 200), t._setInnerEl = function (e) {
                t._innerEl = e
            }, t._setScrollEl = function (e) {
                t._scrollEl = e
            }, t._setScrollEl3d = function (e) {
                t._scrollEl3d = e
            }, t._setScrollbarEl = function (e) {
                t._scrollbarEl = e
            }, t._setScrollbarContEl = function (e) {
                t._scrollbarContEl = e
            }, t._onStart = function (e) {
                var n = t.s;
                t._hook("onStart", {}), n.changeOnEnd && t._isScrolling || !n.mouseSwipe && !e.isTouch || !n.swipe || (t._started = !0, t._hasScrolled = t._isScrolling, t._currX = e.startX, t._currY = e.startY, t._delta = 0, t._velocityX = 0, t._velocityY = 0, t._startPos = kn(t._scrollEl, t._isVertical), t._timestamp = +new Date, t._isScrolling && (hn(t._raf), t._raf = !1, t._scroll(t._startPos)))
            }, t._onMove = function (e) {
                var n = e.domEvent, a = t.s;
                t._isVertical || a.scrollLock || t._hasScrolled ? n.cancelable && n.preventDefault() : n.type === Xs && (Math.abs(e.deltaY) > 7 || !a.swipe) && (t._started = !1), t._started && (t._delta = t._isVertical ? e.deltaY : e.deltaX, (t._hasScrolled || Math.abs(t._delta) > t._threshold) && (t._hasScrolled || t._hook("onGestureStart", {}), t._hasScrolled = !0, t._isScrolling = !0, t._raf || (t._raf = dn((function () {
                    return t._move(e)
                })))))
            }, t._onEnd = function () {
                if (t._started = !1, t._hasScrolled) {
                    var e, n = t.s, a = 17 * (t._isVertical ? t._velocityY : t._velocityX), s = t._maxSnapScroll,
                        i = t._delta;
                    i += a * a * .5 * (a < 0 ? -1 : 1), s && (i = ue(i, -t._round * s, t._round * s));
                    var r = ue(Ce((t._startPos + i) / t._round) * t._round, t._min, t._max),
                        o = Ce(-r * t._rtlNr / n.itemSize) + t._offset,
                        l = i > 0 ? t._isVertical ? 270 : 360 : t._isVertical ? 90 : 180, c = o - n.selectedIndex;
                    e = n.time || Math.max(1e3, 3 * Math.abs(r - t._currPos)), t._hook("onGestureEnd", {
                        direction: l,
                        index: o
                    }), t._delta = 0, t._scroll(r, e), c && !n.changeOnEnd && (t._hook("onIndexChange", {
                        index: o,
                        diff: c
                    }), n.selectedIndex === t._prevIndex && n.selectedIndex !== o && t.forceUpdate())
                }
            }, t._onClick = function (e) {
                t._hasScrolled && (t._hasScrolled = !1, e.stopPropagation(), e.preventDefault())
            }, t._onScroll = function (e) {
                e.target.scrollTop = 0, e.target.scrollLeft = 0
            }, t._onMouseWheel = function (e) {
                var n = t._isVertical ? e.deltaY === le ? e.wheelDelta || e.detail : e.deltaY : e.deltaX;
                if (n && t.s.mousewheel) {
                    if (e.preventDefault(), t._hook("onStart", {}), t._started || (t._delta = 0, t._velocityX = 0, t._velocityY = 0, t._startPos = t._currPos, t._hook("onGestureStart", {})), e.deltaMode && 1 === e.deltaMode && (n *= 15), n = ue(-n, -t._scrollSnap, t._scrollSnap), t._delta += n, t._maxSnapScroll && Math.abs(t._delta) > t._round * t._maxSnapScroll && (n = 0), t._startPos + t._delta < t._min && (t._startPos = t._min, t._delta = 0, n = 0), t._startPos + t._delta > t._max && (t._startPos = t._max, t._delta = 0, n = 0), t._raf || (t._raf = dn((function () {
                        return t._move()
                    }))), !n && t._started) return;
                    t._hasScrolled = !0, t._isScrolling = !0, t._started = !0, t._scrollEnd()
                }
            }, t._onTrackStart = function (e) {
                e.stopPropagation();
                var n = {domEvent: e, startX: Vi(e, "X", !0), startY: Vi(e, "Y", !0)};
                if (t._onStart(n), t._trackStartX = n.startX, t._trackStartY = n.startY, e.target === t._scrollbarEl) bn(t._doc, Rs, t._onTrackEnd), bn(t._doc, zs, t._onTrackMove); else {
                    var a = In(t._scrollbarContEl).top, s = (n.startY - a) / t._barContSize;
                    t._startPos = t._currPos = t._max + (t._min - t._max) * s, t._hasScrolled = !0, t._onEnd()
                }
            }, t._onTrackMove = function (e) {
                var n = t._barContSize, a = Vi(e, "X", !0), s = Vi(e, "Y", !0),
                    i = (t._isVertical ? s - t._trackStartY : a - t._trackStartX) / n;
                t._isInfinite ? t._delta = -(t._maxSnapScroll * t._round * 2 + n) * i : t._delta = (t._min - t._max - n) * i, (t._hasScrolled || Math.abs(t._delta) > t._threshold) && (t._hasScrolled || t._hook("onGestureStart", {}), t._hasScrolled = !0, t._isScrolling = !0, t._raf || (t._raf = dn((function () {
                    return t._move({endX: a, endY: s}, !t._isInfinite)
                }))))
            }, t._onTrackEnd = function () {
                t._delta = 0, t._startPos = t._currPos, t._onEnd(), xn(t._doc, Rs, t._onTrackEnd), xn(t._doc, zs, t._onTrackMove)
            }, t._onTrackClick = function (e) {
                e.stopPropagation()
            }, t
        }

        return l(t, e), t.prototype._render = function (e, t) {
            var n = this._prevS, a = e.batchSize, s = e.batchSize3d, i = e.itemNr || 1, r = e.itemSize,
                o = e.selectedIndex, l = n.selectedIndex, c = t.index === le ? o : t.index, d = [], h = [], u = o - l,
                m = c - this._currIndex, _ = e.minIndex, p = e.maxIndex, v = e.items, f = e.offset;
            this._currIndex = c, this._isVertical = "Y" === e.axis, this._threshold = this._isVertical ? e.thresholdY : e.thresholdX, this._rtlNr = !this._isVertical && e.rtl ? -1 : 1, this._round = e.snap ? r : 1;
            for (var g = this._round; g > 44;) g /= 2;
            if (this._scrollSnap = Ce(44 / g) * g, v) {
                for (var y = c - a; y < c + i + a; y++) d.push({key: y, data: Dr(v, y, _, p)});
                if (e.scroll3d) for (y = c - s; y < c + i + s; y++) h.push({key: y, data: Dr(v, y, _, p)});
                this.visibleItems = d, this.visible3dItems = h, this._maxSnapScroll = a, this._isInfinite = "function" == typeof v
            }
            this._offset === le && (this._offset = o);
            var b = -(o - this._offset) * r * this._rtlNr;
            if (Math.abs(u) > a && b !== this._endPos) {
                var x = u + a * (u > 0 ? -1 : 1);
                this._offset += x, this._margin -= x
            }
            if (f && f !== n.offset && (this._offset += f, this._margin -= f), m && (this._margin += m), this._max = _ !== le ? -(_ - this._offset) * r * this._rtlNr : 1 / 0, this._min = p !== le ? -(p - this._offset - (e.spaceAround ? 0 : i - 1)) * r * this._rtlNr : -1 / 0, -1 === this._rtlNr) {
                var D = this._min;
                this._min = this._max, this._max = D
            }
            this._min > this._max && (this._min = this._max);
            var T = e.visibleSize * r;
            this._barContSize = T, this._barSize = Math.max(20, T * T / (this._max - this._min + T)), this._cssClass = this._className + " mbsc-ltr"
        }, t.prototype._mounted = function () {
            this._doc = Dn(this._el), bn(this.s.scroll3d ? this._innerEl : this._el, js, this._onScroll), bn(this._el, Is, this._onClick, !0), bn(this._el, Us, this._onMouseWheel, {passive: !1}), bn(this._el, Gs, this._onMouseWheel, {passive: !1}), bn(this._scrollbarContEl, Vs, this._onTrackStart), bn(this._scrollbarContEl, Is, this._onTrackClick), this._unlisten = Bi(this._el, {
                onEnd: this._onEnd,
                onMove: this._onMove,
                onStart: this._onStart,
                prevDef: !0
            })
        }, t.prototype._updated = function () {
            var e = this.s, t = e.batchSize, n = e.itemSize, a = e.selectedIndex, s = this._prevIndex,
                i = !e.prevAnim && (s !== le && s !== a || this._isAnimating),
                r = -(a - this._offset) * n * this._rtlNr;
            e.margin && (this._scrollEl.style.marginTop = this._isVertical ? (this._margin - t) * n + "px" : ""), this._started || this._scroll(r, i ? this._isAnimating || e.time || 1e3 : 0), this._prevIndex = a
        }, t.prototype._destroy = function () {
            xn(this.s.scroll3d ? this._innerEl : this._el, js, this._onScroll), xn(this._el, Is, this._onClick, !0), xn(this._el, Us, this._onMouseWheel, {passive: !1}), xn(this._el, Gs, this._onMouseWheel, {passive: !1}), xn(this._scrollbarContEl, Vs, this._onTrackStart), xn(this._scrollbarContEl, Is, this._onTrackClick), hn(this._raf), this._raf = !1, this._scroll(0), this._unlisten()
        }, t.prototype._anim = function (e) {
            var t = this;
            return this._raf = dn((function () {
                var n = t.s, a = +new Date;
                if (t._raf) {
                    if ((t._currPos - t._endPos) * -e < 4) return t._currPos = t._endPos, t._raf = !1, t._isAnimating = 0, t._isScrolling = !1, t._infinite(t._currPos), t._hook("onAnimationEnd", {}), void t._scrollbarContEl.classList.remove("mbsc-scroller-bar-started");
                    a - t._lastRaf > 100 && (t._lastRaf = a, t._currPos = kn(t._scrollEl, t._isVertical), n.changeOnEnd || t._infinite(t._currPos)), t._raf = t._anim(e)
                }
            }))
        }, t.prototype._infinite = function (e) {
            var t = this.s;
            if (t.itemSize) {
                var n = Ce(-e * this._rtlNr / t.itemSize) + this._offset, a = n - this._currIndex;
                a && (t.changeOnEnd ? this._hook("onIndexChange", {index: n, diff: a}) : this.setState({index: n}))
            }
        }, t.prototype._scroll = function (e, t) {
            var n = this.s, a = n.itemSize, s = this._isVertical, i = this._scrollEl.style, r = vn ? vn + "T" : "t",
                o = t ? fn + "transform " + Ce(t) + "ms " + n.easing : "";
            if (i[r + "ransform"] = "translate3d(" + (s ? "0," + e + "px," : e + "px,0,") + "0)", i[r + "ransition"] = o, this._endPos = e, n.scroll3d) {
                var l = this._scrollEl3d.style, c = 360 / (2 * n.batchSize3d);
                l[r + "ransform"] = "translateY(-50%) rotateX(" + -e / a * c + "deg)", l[r + "ransition"] = o
            }
            if (this._scrollbarEl) {
                var d = this._scrollbarEl.style,
                    h = this._isInfinite ? (this._maxSnapScroll * this._round - this._delta) / (this._maxSnapScroll * this._round * 2) : (e - this._max) / (this._min - this._max),
                    u = ue((this._barContSize - this._barSize) * h, 0, this._barContSize - this._barSize);
                d[r + "ransform"] = "translate3d(" + (s ? "0," + u + "px," : u + "px,0,") + "0)", d[r + "ransition"] = o
            }
            t ? (hn(this._raf), this._isAnimating = t, this._scrollbarContEl.classList.add("mbsc-scroller-bar-started"), this._raf = this._anim(e > this._currPos ? 1 : -1)) : (this._currPos = e, n.changeOnEnd || this._infinite(e))
        }, t.prototype._move = function (e, t) {
            var n = this._currX, a = this._currY, s = this._timestamp, i = this._maxSnapScroll;
            if (e) {
                this._currX = e.endX, this._currY = e.endY, this._timestamp = +new Date;
                var r = this._timestamp - s;
                if (r > 0 && r < 100) {
                    var o = (this._currX - n) / r, l = (this._currY - a) / r;
                    this._velocityX = .7 * o + .3 * this._velocityX, this._velocityY = .7 * l + .3 * this._velocityY
                }
            }
            i && !t && (this._delta = ue(this._delta, -this._round * i, this._round * i)), this._scroll(ue(this._startPos + this._delta, this._min - this.s.itemSize, this._max + this.s.itemSize)), this._raf = !1
        }, t.defaults = {
            axis: "Y",
            batchSize: 40,
            easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
            mouseSwipe: !0,
            mousewheel: !0,
            prevDef: !0,
            selectedIndex: 0,
            spaceAround: !0,
            stopProp: !0,
            swipe: !0,
            thresholdX: 10,
            thresholdY: 5
        }, t
    }(ja);
    var Sr = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e) {
            return function (e, t, n) {
                var a;
                return e.itemRenderer && (n = t.visibleItems.map((function (n) {
                    return e.itemRenderer(n, t._offset)
                })), e.scroll3d && (a = t.visible3dItems.map((function (n) {
                    return e.itemRenderer(n, t._offset, !0)
                })))), Ct("div", {
                    ref: t._setEl,
                    className: t._cssClass,
                    style: e.styles
                }, Ct("div", {
                    ref: t._setInnerEl,
                    className: e.innerClass,
                    style: e.innerStyles
                }, Ct("div", {
                    ref: t._setScrollEl,
                    className: "mbsc-scrollview-scroll" + t._rtl
                }, n)), e.scroll3d && Ct("div", {
                    ref: t._setScrollEl3d,
                    style: {height: e.itemSize + "px"},
                    className: "mbsc-scroller-items-3d"
                }, a), Ct("div", {
                    ref: t._setScrollbarContEl,
                    className: "mbsc-scroller-bar-cont " + t._rtl + (e.scrollBar && t._barSize !== t._barContSize ? "" : " mbsc-scroller-bar-hidden") + (t._started ? " mbsc-scroller-bar-started" : "")
                }, Ct("div", {
                    className: "mbsc-scroller-bar" + t._theme,
                    ref: t._setScrollbarEl,
                    style: {height: t._barSize + "px"}
                })))
            }(e, this, e.children)
        }, t
    }(Tr), Cr = 0;
    var wr = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e, t) {
            return function (e, t, n, a) {
                var s, i;
                Cr++;
                var r = n._variableRow, o = n._view !== cs, l = ((s = {}).onAnimationEnd = n._onViewAnimationEnd, s),
                    d = ((i = {}).onKeyDown = n._onKeyDown, i), h = function (a, s) {
                        return Ct(xr, c({}, s, {
                            activeDate: n._active,
                            amText: e.amText,
                            calendarType: e.calendarType,
                            cellTextHeight: t.cellTextHeight,
                            clickToCreate: e.clickToCreate,
                            colors: n._colors,
                            dayNames: e.dayNames,
                            dayNamesShort: n._dayNames,
                            dataTimezone: e.dataTimezone,
                            displayTimezone: e.displayTimezone,
                            eventText: e.eventText,
                            events: e.eventMap,
                            eventsText: e.eventsText,
                            exclusiveEndDates: e.exclusiveEndDates,
                            firstDay: e.firstDay,
                            firstPageDay: a,
                            getDate: e.getDate,
                            getDay: e.getDay,
                            getMonth: e.getMonth,
                            getWeekNumber: e.getWeekNumber,
                            getYear: e.getYear,
                            hasMarks: !!n._marked,
                            hoverEnd: e.hoverEnd,
                            hoverStart: e.hoverStart,
                            isPicker: e.isPicker,
                            invalid: n._invalid,
                            labels: n._labelsLayout,
                            labelHeight: t.labelHeight,
                            marked: n._marked,
                            max: n._maxDate,
                            min: n._minDate,
                            monthNames: e.monthNames,
                            monthNamesShort: e.monthNamesShort,
                            onDayClick: n._onDayClick,
                            onDayDoubleClick: e.onDayDoubleClick,
                            onDayRightClick: e.onDayRightClick,
                            onDayHoverIn: n._onDayHoverIn,
                            onDayHoverOut: n._onDayHoverOut,
                            onLabelClick: n._onLabelClick,
                            onLabelDoubleClick: e.onLabelDoubleClick,
                            onLabelRightClick: e.onLabelRightClick,
                            onLabelHoverIn: e.onLabelHoverIn,
                            onLabelHoverOut: e.onLabelHoverOut,
                            onLabelDelete: e.onLabelDelete,
                            pmText: e.pmText,
                            rangeEnd: e.rangeEnd,
                            rangeStart: e.rangeStart,
                            resourcesMap: e.resourcesMap,
                            rtl: e.rtl,
                            selectedDates: e.selectedDates,
                            selectedEventsMap: e.selectedEventsMap,
                            showEventTooltip: e.showEventTooltip,
                            showOuter: n._showOuter,
                            showWeekDays: !n._showDaysTop,
                            showWeekNumbers: e.showWeekNumbers,
                            showSingleMark: !!e.marksMap,
                            todayText: e.todayText,
                            theme: e.theme,
                            timeFormat: e.timeFormat,
                            timezonePlugin: e.timezonePlugin,
                            valid: n._valid,
                            weeks: n._weeks,
                            weekText: e.weekText,
                            renderDay: e.renderDay,
                            renderDayContent: e.renderDayContent,
                            renderLabel: e.renderLabel,
                            renderLabelContent: e.renderLabelContent,
                            variableRow: n._variableRow
                        }))
                    }, u = n._showDaysTop && e.showCalendar ? Ct(yr, {
                        dayNamesShort: n._dayNames,
                        rtl: n._rtl,
                        theme: n._theme,
                        firstDay: e.firstDay,
                        hasScroll: t.hasScrollY,
                        hidden: n._view !== cs && !n._hasPicker,
                        showWeekNumbers: e.showWeekNumbers
                    }) : null, m = {
                        axis: n._axis,
                        batchSize: 1,
                        changeOnEnd: !0,
                        className: "mbsc-calendar-scroll-wrapper" + n._theme,
                        data: Cr,
                        easing: "ease-out",
                        itemSize: t.pickerSize,
                        items: n._months,
                        mousewheel: n._mousewheel,
                        prevAnim: n._prevAnim,
                        rtl: e.rtl,
                        snap: !0,
                        time: 200
                    }, _ = Ct("div", {
                        ref: n._setPickerCont,
                        className: n._hasPicker ? "mbsc-calendar-picker-wrapper" : ""
                    }, (t.view === hs || t.viewClosing === hs || e.selectView === hs) && Ct("div", c({className: n._getPickerClass(hs)}, l), Ct(Sr, c({
                        key: "years",
                        itemRenderer: function (t, a) {
                            var s = t.key, i = n._getPageYears(s), r = e.getYear(new Date(n._active)),
                                o = e.getYear(new Date(n._activeMonth));
                            return Ct("div", {
                                "aria-hidden": n._yearsIndex === s ? le : "true",
                                className: "mbsc-calendar-picker-slide mbsc-calendar-slide" + n._theme + n._rtl,
                                key: s,
                                style: n._getPageStyle(s, a)
                            }, Ct("div", {className: "mbsc-calendar-table mbsc-flex-col"}, de.map((function (t, a) {
                                return Ct("div", {
                                    className: "mbsc-calendar-row mbsc-flex mbsc-flex-1-0",
                                    key: a
                                }, ce.map((function (t, s) {
                                    var l = i + 3 * a + s, c = +e.getDate(l, 0, 1);
                                    return Ct(gr, {
                                        active: l === o,
                                        date: c,
                                        display: !0,
                                        selected: l === r,
                                        disabled: l < n._minYears || l > n._maxYears,
                                        rtl: e.rtl,
                                        text: l + e.yearSuffix,
                                        theme: e.theme,
                                        type: "year",
                                        onDayClick: n._onYearClick,
                                        key: l
                                    })
                                })))
                            }))))
                        },
                        maxIndex: n._maxYearsIndex,
                        minIndex: n._minYearsIndex,
                        onGestureEnd: n._onGestureEnd,
                        onIndexChange: n._onYearsPageChange,
                        selectedIndex: n._yearsIndex
                    }, m))), (t.view === ds || t.viewClosing === ds || e.selectView === ds) && Ct("div", c({className: n._getPickerClass(ds)}, l), Ct(Sr, c({
                        key: "year",
                        itemRenderer: function (t, a) {
                            var s = t.key, i = n._getPageYear(s), r = new Date(n._activeMonth), o = e.getYear(r),
                                l = e.getMonth(r), c = new Date(n._active), d = e.getYear(c), h = e.getMonth(c);
                            return Ct("div", {
                                "aria-hidden": n._yearIndex === s ? le : "true",
                                className: "mbsc-calendar-picker-slide mbsc-calendar-slide" + n._theme + n._rtl,
                                key: s,
                                style: n._getPageStyle(s, a)
                            }, Ct("div", {className: "mbsc-calendar-table mbsc-flex-col"}, de.map((function (t, a) {
                                return Ct("div", {
                                    className: "mbsc-calendar-row mbsc-flex mbsc-flex-1-0",
                                    key: a
                                }, ce.map((function (t, s) {
                                    var r = e.getDate(i, 3 * a + s, 1), c = e.getYear(r), u = e.getMonth(r);
                                    return Ct(gr, {
                                        active: c === o && u === l,
                                        date: +r,
                                        display: !0,
                                        selected: c === d && u === h,
                                        disabled: r < n._minYear || r >= n._maxYear,
                                        month: e.monthNames[u],
                                        rtl: e.rtl,
                                        text: e.monthNamesShort[u],
                                        theme: e.theme,
                                        type: "month",
                                        onDayClick: n._onMonthClick,
                                        key: +r
                                    })
                                })))
                            }))))
                        },
                        maxIndex: n._maxYearIndex,
                        minIndex: n._minYearIndex,
                        onGestureEnd: n._onGestureEnd,
                        onIndexChange: n._onYearPageChange,
                        selectedIndex: n._yearIndex
                    }, m))));
                return Ct("div", {
                    className: n._cssClass,
                    ref: n._setEl,
                    style: n._dim,
                    onClick: Te
                }, Ct("div", {className: "mbsc-calendar-wrapper mbsc-flex-col" + n._theme + n._hb + (e.hasContent || !e.showCalendar ? " mbsc-calendar-wrapper-fixed mbsc-flex-none" : " mbsc-flex-1-1")}, Ct("div", {
                    className: "mbsc-calendar-header" + n._theme + n._hb + (n._showDaysTop ? " mbsc-calendar-header-vertical" : ""),
                    ref: n._setHeader
                }, e.showControls && function () {
                    var t, a;
                    if (e.renderHeader) ve(t = e.renderHeader()) && (t !== n._headerHTML && (n._headerHTML = t, n._shouldEnhanceHeader = !0), a = n._safeHtml(t)); else {
                        var s = n._pageNr > 1;
                        t = Ct(kt, null, Ct(ar, {className: "mbsc-flex mbsc-flex-1-1 mbsc-calendar-title-wrapper"}), Ct(er, {className: "mbsc-calendar-button-prev" + (s ? " mbsc-calendar-button-prev-multi" : "")}), e.showToday && Ct(nr, {className: "mbsc-calendar-header-today"}), Ct(tr, {className: "mbsc-calendar-button-next" + (s ? " mbsc-calendar-button-next-multi" : "")}))
                    }
                    var i = Ct("div", {
                        className: "mbsc-calendar-controls mbsc-flex" + n._theme,
                        dangerouslySetInnerHTML: a
                    }, t);
                    return Ct(Ji.Provider, {children: i, value: {instance: n}})
                }(), u), Ct("div", c({
                    className: "mbsc-calendar-body mbsc-flex-col mbsc-flex-1-1" + n._theme,
                    ref: n._setBody
                }, d), e.showCalendar && Ct("div", {className: "mbsc-calendar-body-inner mbsc-flex-col mbsc-flex-1-1" + (r ? " mbsc-calendar-body-inner-variable" : "")}, n._isGrid ? Ct("div", {
                    "aria-hidden": o ? "true" : le,
                    className: "mbsc-calendar-grid mbsc-flex-1-1 mbsc-flex-col" + n._theme + n._hb
                }, n._monthsMulti.map((function (t, a) {
                    return Ct("div", {
                        key: a,
                        className: "mbsc-calendar-grid-row mbsc-flex mbsc-flex-1-1"
                    }, t.map((function (t, a) {
                        return Ct("div", {
                            key: a,
                            className: "mbsc-calendar-grid-item mbsc-flex-col mbsc-flex-1-1" + n._theme
                        }, Ct("div", {className: "mbsc-calendar-month-title" + n._theme}, e.monthNames[new Date(t).getMonth()]), h(t, {isActive: !0}))
                    })))
                }))) : r ? Ct("div", {
                    "aria-hidden": o ? "true" : le,
                    className: "mbsc-calendar-slide mbsc-calendar-slide-active " + n._getPickerClass(cs)
                }, h(+e.navigationService.firstDay, {
                    dragData: e.dragData,
                    dragToCreate: e.dragToCreate,
                    dragToMove: e.dragToMove,
                    dragToResize: e.dragToResize,
                    isActive: !0,
                    onLabelUpdateEnd: e.onLabelUpdateEnd,
                    onLabelUpdateModeOff: e.onLabelUpdateModeOff,
                    onLabelUpdateModeOn: e.onLabelUpdateModeOn,
                    onLabelUpdateMove: e.onLabelUpdateMove,
                    onLabelUpdateStart: e.onLabelUpdateStart
                })) : e.selectView === cs && Ct("div", c({
                    "aria-hidden": o ? "true" : le,
                    className: n._getPickerClass(cs)
                }, l), Ct(Sr, c({}, m, {
                    itemNr: n._pageNr,
                    itemSize: t.pageSize / n._pageNr,
                    itemRenderer: function (t, a) {
                        var s = t.key, i = s >= n._pageIndex && s < n._pageIndex + n._pageNr && n._view === cs, r = {
                            dragData: e.dragData,
                            dragToCreate: e.dragToCreate,
                            dragToMove: e.dragToMove,
                            dragToResize: e.dragToResize,
                            isActive: i,
                            onLabelUpdateEnd: e.onLabelUpdateEnd,
                            onLabelUpdateModeOff: e.onLabelUpdateModeOff,
                            onLabelUpdateModeOn: e.onLabelUpdateModeOn,
                            onLabelUpdateMove: e.onLabelUpdateMove,
                            onLabelUpdateStart: e.onLabelUpdateStart
                        };
                        return Ct("div", {
                            className: "mbsc-calendar-slide" + (i ? " mbsc-calendar-slide-active" : "") + n._theme + n._rtl,
                            key: s,
                            style: n._getPageStyle(s, a, n._pageNr)
                        }, h(n._getPageDay(s), r))
                    },
                    maxIndex: n._maxIndex,
                    minIndex: n._minIndex,
                    mouseSwipe: e.mouseSwipe,
                    onAnimationEnd: n._onAnimationEnd,
                    onGestureStart: n._onGestureStart,
                    onIndexChange: n._onPageChange,
                    onStart: n._onStart,
                    selectedIndex: n._pageIndex,
                    swipe: e.swipe
                }))), !n._hasPicker && _))), a, n._hasPicker && Ct(dr, {
                    anchor: n._pickerBtn,
                    closeOnScroll: !0,
                    contentPadding: !1,
                    context: e.context,
                    cssClass: "mbsc-calendar-popup",
                    display: "anchored",
                    isOpen: n._view !== cs,
                    locale: e.locale,
                    onClose: n._onPickerClose,
                    onOpen: n._onPickerOpen,
                    rtl: e.rtl,
                    scrollLock: !1,
                    showOverlay: !1,
                    theme: e.theme,
                    themeVariant: e.themeVariant
                }, Ct("div", c({}, d), Ct("div", {className: "mbsc-calendar-controls mbsc-flex" + n._theme}, Ct("div", {
                    "aria-live": "polite",
                    className: "mbsc-calendar-picker-button-wrapper mbsc-calendar-title-wrapper mbsc-flex mbsc-flex-1-1" + n._theme
                }, Ct(Ki, {
                    className: "mbsc-calendar-button",
                    onClick: n._onPickerBtnClick,
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                    type: "button",
                    variant: "flat"
                }, n._viewTitle, e.downIcon && Ct(Pi, {
                    svg: t.view === hs ? e.downIcon : e.upIcon,
                    theme: e.theme
                }))), Ct(Ki, {
                    className: "mbsc-calendar-button",
                    ariaLabel: e.prevPageText,
                    disabled: n._isPrevDisabled(!0),
                    iconSvg: n._prevIcon,
                    onClick: n.prevPage,
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                    type: "button",
                    variant: "flat"
                }), Ct(Ki, {
                    className: "mbsc-calendar-button",
                    ariaLabel: e.nextPageText,
                    disabled: n._isNextDisabled(!0),
                    iconSvg: n._nextIcon,
                    onClick: n.nextPage,
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                    type: "button",
                    variant: "flat"
                })), _)))
            }(e, t, this, e.children)
        }, t.prototype._updated = function () {
            e.prototype._updated.call(this), this._shouldEnhanceHeader && (An(this._headerElement, {view: this}), this._shouldEnhanceHeader = !1)
        }, t
    }(sr);
    var kr = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._instanceService = new Li, t
        }

        return l(t, e), t.prototype._template = function (e) {
            return function (e, t) {
                return Ct(wr, {
                    ref: t._setCal,
                    refDate: e.refDate,
                    activeDate: e.active,
                    amText: e.amText,
                    cssClass: t._className + " mbsc-flex-1-1 mbsc-calendar-" + e.display,
                    calendarScroll: e.calendarScroll,
                    calendarType: e.calendarType,
                    colors: e.colors,
                    context: e.context,
                    dataTimezone: e.dataTimezone,
                    displayTimezone: e.displayTimezone,
                    timezonePlugin: e.timezonePlugin,
                    downIcon: e.downIcon,
                    exclusiveEndDates: e.exclusiveEndDates,
                    hoverEnd: e.hoverEnd,
                    hoverStart: e.hoverStart,
                    invalid: e.invalid,
                    instanceService: t._instanceService,
                    isPicker: !0,
                    labels: e.labels,
                    marked: e.marked,
                    max: e.max,
                    min: e.min,
                    mousewheel: e.mousewheel,
                    navigationService: t._navService,
                    nextIconH: e.nextIconH,
                    nextIconV: e.nextIconV,
                    nextPageText: e.nextPageText,
                    noOuterChange: e.selectRange,
                    onActiveChange: t._onActiveChange,
                    onCellHoverIn: e.onCellHoverIn,
                    onCellHoverOut: e.onCellHoverOut,
                    onDayClick: t._onDayClick,
                    onDayHoverIn: e.onDayHoverIn,
                    onDayHoverOut: e.onDayHoverOut,
                    onLabelClick: e.onLabelClick,
                    onPageChange: e.onPageChange,
                    onPageLoaded: e.onPageLoaded,
                    onPageLoading: e.onPageLoading,
                    onTodayClick: t._onTodayClick,
                    pages: e.pages,
                    pmText: e.pmText,
                    prevIconH: e.prevIconH,
                    prevIconV: e.prevIconV,
                    prevPageText: e.prevPageText,
                    renderDay: e.renderDay,
                    renderDayContent: e.renderDayContent,
                    renderHeader: e.renderCalendarHeader,
                    rangeEnd: e.rangeEnd,
                    rangeStart: e.rangeStart,
                    rtl: e.rtl,
                    selectedDates: t._tempValueRep,
                    selectView: e.selectView,
                    showCalendar: !0,
                    showControls: e.showControls,
                    showOuterDays: e.showOuterDays,
                    showToday: !1,
                    showWeekNumbers: e.showWeekNumbers,
                    size: e.size,
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                    update: t._update,
                    upIcon: e.upIcon,
                    valid: e.valid,
                    weeks: e.weeks,
                    width: e.width,
                    getDate: e.getDate,
                    getDay: e.getDay,
                    getMaxDayOfMonth: e.getMaxDayOfMonth,
                    getMonth: e.getMonth,
                    getWeekNumber: e.getWeekNumber,
                    getYear: e.getYear,
                    dateFormat: e.dateFormat,
                    dayNames: e.dayNames,
                    dayNamesMin: e.dayNamesMin,
                    dayNamesShort: e.dayNamesShort,
                    eventText: e.eventText,
                    eventsText: e.eventsText,
                    firstDay: e.firstDay,
                    fromText: e.fromText,
                    monthNames: e.monthNames,
                    monthNamesShort: e.monthNamesShort,
                    moreEventsPluralText: e.moreEventsPluralText,
                    moreEventsText: e.moreEventsText,
                    todayText: e.todayText,
                    toText: e.toText,
                    weekText: e.weekText,
                    yearSuffix: e.yearSuffix
                })
            }(e, this)
        }, t
    }(Ii);

    function Mr(e, t, n, a) {
        var s = e.min === le ? -1 / 0 : e.min, i = e.max === le ? 1 / 0 : e.max, r = Ir(e, t), o = Lr(e, r), l = o,
            c = o, d = 0, h = 0;
        if (n && n.get(o)) {
            for (; r - d >= s && n.get(l) && d < 100;) l = Lr(e, r - ++d);
            for (; r + h < i && n.get(c) && h < 100;) c = Lr(e, r + ++h);
            if (n.get(l) && n.get(c)) return o;
            o = (h < d && h && -1 !== a || !d || r - d < 0 || 1 === a) && !n.get(c) ? c : l
        }
        return o
    }

    function Er(e) {
        return e !== le ? e.value !== le ? e.value : e.display !== le ? e.display : e : e
    }

    function Nr(e, t) {
        if (e.getItem) return e.getItem(t);
        var n = e.data || [], a = n.length, s = t % a;
        return e._circular ? n[s >= 0 ? s : s + a] : n[ue(t, 0, a - 1)]
    }

    function Ir(e, t) {
        var n = e.multiple ? t && t.length && t[0] || le : t;
        return (e.getIndex ? +e.getIndex(t) : e._map.get(n)) || 0
    }

    function Lr(e, t) {
        return Er(Nr(e, t))
    }

    var Hr = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._indexes = [], t._activeIndexes = [], t._wheels = [], t._batches = [], t._lastIndexes = [], t._onSet = function () {
                t._setOrUpdate()
            }, t._onActiveChange = function (e) {
                var n = e.wheel, a = e.index, s = n._key;
                t._activeIndexes[s] = a;
                var i = t._indexes, r = i[s];
                t._scroll3d ? r = a : a - r >= t._rows ? r++ : a < r && r--, i[s] = r, t.forceUpdate()
            }, t._onWheelIndexChange = function (e) {
                var n = t.s, a = e.wheel, s = a._key, i = a.multiple, r = Lr(a, e.index),
                    o = t._disabled && t._disabled[s] && t._disabled[s].get(r), l = [], c = n.selectOnScroll;
                (c || !e.click) && (t._lastIndexes[s] = t._indexes[s] = e.index, t._indexes.forEach((function (e, n) {
                    var a = t._wheelMap[n], s = a.data ? a.data.length : 0;
                    t._batches[n] = s ? ke(e / s) : 0, l[n] = s
                }))), t._activeIndexes[s] = e.index;
                var d = t._get(t._tempValueRep), h = !!e.click && !o, u = c || h;
                if (i) {
                    if (h) {
                        var m = (t._tempValueRep[s] || []).slice();
                        !1 === e.selected ? m.push(r) : !0 === e.selected && m.splice(m.indexOf(r), 1), t._tempValueRep[s] = m
                    }
                } else u && (t._tempValueRep[s] = r);
                if (n.onWheelMove && e.index !== le) {
                    var _ = n.onWheelMove({dataItem: Nr(a, e.index), selection: u, wheelIndex: s});
                    _ && _.forEach((function (e, n) {
                        if (e !== le && (t._tempValueRep[n] = e), !u) {
                            var a = t._wheelMap[n], s = Ir(a, e);
                            t._constrainIndex(s, a)
                        }
                    }))
                }
                u && t._validate(s, e.diff > 0 ? 1 : -1), c && t._tempValueRep.forEach((function (e, n) {
                    var a = t._wheelMap[n], s = a.data ? a.data.length : 0, i = t._indexes[n],
                        r = Ir(a, e) + t._batches[n] * s;
                    t._activeIndexes[n] = t._lastIndexes[n] = t._indexes[n] = r, a._offset = s !== l[n] ? r - i : 0
                }));
                var p = t._get(t._tempValueRep), v = !t._valueEquals(d, p);
                v || e.click && t._live && !t._valueEquals(t.value, p) ? t._setOrUpdate(!v) : t.forceUpdate(), t._live && h && a.closeOnTap && t.close()
            }, t
        }

        return l(t, e), t.prototype._initWheels = function () {
            var e = this, t = 0, n = this.s.wheels || [];
            this._wheelMap = [], n.forEach((function (n) {
                n.forEach((function (n) {
                    e._initWheel(n, t), e._wheelMap[t] = n, t++
                }))
            })), this._wheels = n
        }, t.prototype._shouldValidate = function (e, t) {
            return !!e.shouldValidate && e.shouldValidate(e, t)
        }, t.prototype._valueEquals = function (e, t) {
            return this.s.valueEquality ? this.s.valueEquality(e, t) : e === t
        }, t.prototype._render = function (t, n) {
            var a = this, s = this.props || {}, i = this._respProps || {}, r = this._prevS,
                o = !!this._touchUi && t.circular, l = this._touchUi ? t.rows : i.rows || s.rows || 7;
            if (this._displayStyle = t.displayStyle || t.display, this._scroll3d = t.scroll3d && this._touchUi && gn, (t.itemHeight !== r.itemHeight || l !== this._rows) && (this._rows = l, this._lineStyle = {height: t.itemHeight + "px"}, this._scroll3d)) {
                var c = "translateZ(" + (t.itemHeight * l / 2 + 3) + "px";
                this._overlayStyle = {}, this._overlayStyle[fn + "transform"] = c, this._lineStyle[fn + "transform"] = "translateY(-50%) " + c
            }
            t.wheels === r.wheels && o === this._circular || (this._batches = [], this._shouldSetIndex = !0, this._circular = o, this._initWheels()), e.prototype._render.call(this, t, n), this._shouldSetIndex && (this._setIndexes(), this._shouldSetIndex = this._indexFromValue = !1), t.wheels !== r.wheels && r.wheels !== le && setTimeout((function () {
                for (var e = 0, t = a._wheelMap; e < t.length; e++) {
                    var n = t[e];
                    a._onWheelIndexChange({diff: 0, index: a._indexes[n._key], wheel: n})
                }
            }))
        }, t.prototype._writeValue = function (t, n, a) {
            return this.s.writeValue ? this.s.writeValue(t, n, a) : e.prototype._writeValue.call(this, t, n, a)
        }, t.prototype._copy = function (e) {
            return e.slice(0)
        }, t.prototype._format = function (e) {
            return this.s.formatValue ? this.s.formatValue(e) : e.join(" ")
        }, t.prototype._get = function (e) {
            return this.s.getValue ? this.s.getValue(e) : e
        }, t.prototype._parse = function (e) {
            if (this.s.parseValue) return this.s.parseValue(e);
            var t = [], n = [], a = 0;
            return null !== e && e !== le && (n = (e + "").split(" ")), this._wheels.forEach((function (e) {
                e.forEach((function (e) {
                    for (var s = e.data || [], i = s.length, r = Er(s[0]), o = 0; r != n[a] && o < i;) r = Er(s[o]), o++;
                    t.push(r), a++
                }))
            })), t
        }, t.prototype._validate = function (e, t) {
            var n = this;
            if (this.s.validate) {
                var a = this.s.validate.call(this._el, {
                    direction: t,
                    index: e,
                    values: this._tempValueRep.slice(0),
                    wheels: this._wheelMap
                });
                this._disabled = a.disabled, a.init && this._initWheels(), a.indexes && a.indexes.forEach((function (e, t) {
                    if (e !== le) {
                        var a = n._wheelMap[t], s = Ir(a, e);
                        n._constrainIndex(s, a)
                    }
                })), a.valid ? this._tempValueRep = a.valid.slice(0) : this._wheelMap.forEach((function (e, a) {
                    n._tempValueRep[a] = Mr(e, n._tempValueRep[a], n._disabled && n._disabled[a], t)
                }))
            }
        }, t.prototype._onOpen = function () {
            this._batches = [], this._shouldSetIndex = !0, this._indexFromValue = !0
        }, t.prototype._onParse = function () {
            this._shouldSetIndex = !0
        }, t.prototype._initWheel = function (e, t) {
            var n = this._circular;
            e._key = t, e._map = new Map, e._circular = n === le ? e.circular === le ? e.data && e.data.length > this._rows : e.circular : me(n) ? n[t] : n, e.data && (e.min = e._circular ? le : 0, e.max = e._circular ? le : e.data.length - 1, e.data.forEach((function (t, n) {
                e._map.set(Er(t), n)
            })))
        }, t.prototype._setIndexes = function () {
            var e = this, t = this._indexes || [];
            this._indexes = [], this._activeIndexes = [], this._tempValueRep.forEach((function (n, a) {
                var s = e._wheelMap[a], i = s.data ? s.data.length : 0, r = Ir(s, n);
                if (e.s.selectOnScroll) e._activeIndexes[a] = e._indexes[a] = r + (e._batches[a] || 0) * i; else {
                    var o = r;
                    e._indexFromValue || (o = e._prevS.wheels !== e.s.wheels ? 0 : t[a]) !== le && (o = function (e, t) {
                        if (e.getItem && e.getIndex) return e.getIndex(Er(e.getItem(t)));
                        var n = (e.data || []).length, a = t % n;
                        return n ? a >= 0 ? a : a + n : 0
                    }(s, o) + (e._batches[a] || 0) * i), e._constrainIndex(o, s)
                }
            }))
        }, t.prototype._constrainIndex = function (e, t) {
            var n = t._key;
            e !== le && t.data ? (t.spaceAround || (e = ue(e, 0, Math.max(t.data.length - this._rows, 0))), this._activeIndexes[n] = this._indexes[n] = e) : this._activeIndexes[n] = this._indexes[n] = this._lastIndexes[n] || 0
        }, t.defaults = {itemHeight: 40, rows: 5, selectOnScroll: !0, showOnClick: !0}, t._name = "Scroller", t
    }(bi), Or = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._onClick = function () {
                var e = t.s;
                e.text === le || e.isGroup || t._hook("onClick", {
                    index: e.index,
                    selected: e.selected,
                    disabled: e.disabled
                })
            }, t
        }

        return l(t, e), t.prototype._mounted = function () {
            var e = this;
            this._unlisten = Bi(this._el, {
                click: !0, keepFocus: !1, onBlur: function () {
                    e.setState({hasFocus: !1})
                }, onFocus: function () {
                    e.setState({hasFocus: !0})
                }, onHoverIn: function () {
                    e.s.text !== le && e.setState({hasHover: !0})
                }, onHoverOut: function () {
                    e.s.text !== le && e.setState({hasHover: !1})
                }, onKeyDown: function (t) {
                    (t.keyCode === Qs || !e.s.multiple && t.keyCode === Zs) && e._onClick()
                }, onPress: function () {
                    e.s.text !== le && e.setState({isActive: !0})
                }, onRelease: function () {
                    e.s.text !== le && e.setState({isActive: !1})
                }
            })
        }, t.prototype._destroy = function () {
            this._unlisten()
        }, t.prototype._render = function (e, t) {
            var n = e.height;
            this._cssClass = "mbsc-scroller-wheel-" + (e.isGroup ? "header" : "item") + this._theme + this._rtl + (e.checkmark && !e.isGroup ? " mbsc-wheel-item-checkmark" : "") + (e.is3d ? " mbsc-scroller-wheel-item-3d" : "") + (e.scroll3d && !e.is3d ? " mbsc-scroller-wheel-item-2d" : "") + (e.selected && !e.is3d ? " mbsc-selected" : "") + (e.selected && e.is3d ? " mbsc-selected-3d" : "") + (e.disabled ? " mbsc-disabled" : "") + (e.multiple && !e.isGroup ? " mbsc-wheel-item-multi" : "") + (t.hasHover ? " mbsc-hover" : "") + (t.hasFocus ? " mbsc-focus" : "") + (t.isActive ? " mbsc-active" : ""), this._style = {
                height: n + "px",
                lineHeight: n + "px"
            }, this._checkmarkClass = this._theme + this._rtl + " mbsc-wheel-checkmark" + (e.selected ? " mbsc-selected" : ""), e.is3d && (this._transform = "rotateX(" + (e.offset - e.index) * e.angle3d % 360 + "deg) translateZ(" + n * e.rows / 2 + "px)", this._style[fn + "transform"] = this._transform)
        }, t
    }(ja);
    var Yr = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e) {
            return function (e, t) {
                var n;
                if (e.renderItem && e.data !== le) {
                    var a = e.renderItem(e.data), s = ve(a) ? {__html: a} : le;
                    n = s ? Ct("div", {dangerouslySetInnerHTML: s}) : Ct("div", null, a)
                } else n = e.text;
                return Ct("div", {
                    "aria-disabled": e.disabled ? "true" : le,
                    "aria-hidden": n === le || e.is3d ? "true" : le,
                    "aria-selected": e.selected ? "true" : le,
                    ref: t._setEl,
                    tabIndex: e.active ? 0 : le,
                    className: t._cssClass,
                    role: "option",
                    style: t._style,
                    onClick: t._onClick
                }, Ct("div", {dangerouslySetInnerHTML: t.textParam}), e.checkmark && Ct("span", {className: t._checkmarkClass}), n)
            }(e, this)
        }, t
    }(Or), Pr = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._onIndexChange = function (e) {
                e.wheel = t.s.wheel, t._hook("onIndexChange", e)
            }, t._onItemClick = function (e) {
                t._hook("onIndexChange", {click: !0, index: e.index, wheel: t.s.wheel, selected: e.selected})
            }, t._onKeyDown = function (e) {
                var n = 0;
                e.keyCode === si ? n = -1 : e.keyCode === ri && (n = 1);
                var a = t.s, s = a.activeIndex + n, i = !(s < a.minIndex || s > a.maxIndex);
                if (n && e.preventDefault(), n && i) {
                    var r = a.selectOnScroll ? "onIndexChange" : "onActiveChange";
                    t._shouldFocus = !0, t._hook(r, {diff: n, index: s, wheel: a.wheel})
                } else e.keyCode === Zs && a.multiple && t._hook("onSet", {})
            }, t
        }

        return l(t, e), t.prototype._getText = function (e) {
            return e !== le ? e.display !== le ? e.display : e : le
        }, t.prototype._getValue = function (e) {
            return e ? e.value !== le ? e.value : e.display !== le ? e.display : e : e
        }, t.prototype._isActive = function (e, t, n) {
            var a = this.s, s = a.scroll3d && a.multiple ? n : !n;
            return a.activeIndex === e.key && t && s
        }, t.prototype._isSelected = function (e) {
            var t = this.s, n = t.selectedValues, a = this._getValue(e.data);
            return t.multiple ? !(!n || !n.indexOf) && n.indexOf(a) >= 0 : t.selectOnScroll ? e.key === t.selectedIndex : a !== le && a === n
        }, t.prototype._isDisabled = function (e) {
            var t = this.s.disabled, n = e && e.disabled, a = this._getValue(e);
            return !!(n || t && t.get(a))
        }, t.prototype._render = function (e) {
            var t = e.rows, n = e.itemHeight, a = e.wheel._key, s = 2 * Ce((n - .03 * (n * t / 2 + 3)) / 2);
            this._items = e.wheel.getItem || e.wheel.data || [], this._batchSize3d = Ce(1.8 * t), this._angle3d = 360 / (2 * this._batchSize3d), this._style = {height: 2 * Ce(t * n * (e.scroll3d ? 1.1 : 1) / 2) + "px"}, this._itemNr = e.wheel.spaceAround ? 1 : t, this._innerStyle = {height: (e.scroll3d ? s : e.wheel.spaceAround ? n : n * t) + "px"}, this._wheelStyle = e.wheelWidth ? {width: (me(e.wheelWidth) ? e.wheelWidth[a] : e.wheelWidth) + "px"} : {
                maxWidth: (me(e.maxWheelWidth) ? e.maxWheelWidth[a] : e.maxWheelWidth) + "px",
                minWidth: (me(e.minWheelWidth) ? e.minWheelWidth[a] : e.minWheelWidth) + "px"
            }, e.scroll3d && (this._innerStyle[fn + "transform"] = "translateY(-50%) translateZ(" + (n * t / 2 + 3) + "px")
        }, t.prototype._updated = function () {
            if (this._shouldFocus) {
                var e = this._el.querySelector('[tabindex="0"]');
                e && setTimeout((function () {
                    e.focus()
                })), this._shouldFocus = !1
            }
        }, t
    }(ja);
    var Fr, Vr = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e) {
            return function (e, t) {
                var n, a = ((n = {}).onKeyDown = t._onKeyDown, n);
                return Ct("div", c({
                    "aria-multiselectable": e.multiple ? "true" : le,
                    className: "mbsc-scroller-wheel-wrapper mbsc-scroller-wheel-wrapper-" + e.wheel._key + " " + (e.wheel.cssClass || "") + (e.scroll3d ? " mbsc-scroller-wheel-wrapper-3d" : "") + t._theme + t._rtl,
                    ref: t._setEl,
                    role: "listbox",
                    style: t._wheelStyle
                }, a), Ct(Sr, {
                    batchSize3d: t._batchSize3d,
                    className: "mbsc-scroller-wheel" + (e.scroll3d ? " mbsc-scroller-wheel-3d" : "") + t._theme,
                    innerClass: "mbsc-scroller-wheel-cont mbsc-scroller-wheel-cont-" + e.display + (e.scroll3d ? " mbsc-scroller-wheel-cont-3d" : "") + (e.multiple ? " mbsc-scroller-wheel-multi" : "") + t._theme,
                    innerStyles: t._innerStyle,
                    items: t._items,
                    itemSize: e.itemHeight,
                    itemRenderer: function (n, a, s) {
                        if (n !== le) {
                            var i = t._getText(n.data);
                            return Ct(Yr, {
                                active: t._isActive(n, i, s),
                                angle3d: t._angle3d,
                                data: n.data,
                                disabled: t._isDisabled(n.data),
                                height: e.itemHeight,
                                index: n.key,
                                is3d: s,
                                isGroup: n.data && n.data.isGroup,
                                key: n.key,
                                multiple: e.multiple,
                                onClick: t._onItemClick,
                                offset: a,
                                checkmark: e.wheel.checkmark,
                                renderItem: e.renderItem,
                                rows: e.rows,
                                rtl: e.rtl,
                                scroll3d: e.scroll3d,
                                selected: t._isSelected(n),
                                text: i,
                                theme: e.theme
                            })
                        }
                        return null
                    },
                    itemNr: t._itemNr,
                    margin: !0,
                    maxIndex: e.maxIndex,
                    minIndex: e.minIndex,
                    onIndexChange: t._onIndexChange,
                    offset: e.wheel._offset,
                    rtl: e.rtl,
                    scroll3d: e.scroll3d,
                    scrollBar: !t._touchUi,
                    selectedIndex: e.selectedIndex,
                    snap: !0,
                    spaceAround: e.wheel.spaceAround,
                    styles: t._style,
                    visibleSize: e.rows
                }))
            }(e, this)
        }, t
    }(Pr), zr = new m, Rr = 0;

    function Ar() {
        clearTimeout(Fr), Fr = setTimeout((function () {
            zr.next()
        }), 100)
    }

    function Wr(e) {
        try {
            return Ln(e, "*:-webkit-autofill")
        } catch (e) {
            return !1
        }
    }

    var Ur = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._tag = "input", t._onClick = function () {
                t._hidePass = !t._hidePass
            }, t._onMouseDown = function (e) {
                t.s.tags && (t._preventFocus = !0)
            }, t._onTagClear = function (e, n) {
                if (e.stopPropagation(), e.preventDefault(), !t.s.disabled) {
                    var a = t.s.pickerValue.slice();
                    a.splice(n, 1), On(t._el, Ns, a)
                }
            }, t._sizeTextArea = function () {
                var e, n, a, s = t._el, i = t.s.rows;
                s.offsetHeight && (s.style.height = "", a = s.scrollHeight - s.offsetHeight, e = s.offsetHeight + (a > 0 ? a : 0), (n = Math.round(e / 24)) > i ? (e = 24 * i + (e - 24 * n), s.style.overflow = "auto") : s.style.overflow = "", e && (s.style.height = e + "px"))
            }, t._onAutoFill = function () {
                "floating" === t.s.labelStyle && Wr(t._el) && t.setState({isFloatingActive: !0})
            }, t
        }

        return l(t, e), t.prototype._change = function (e) {
        }, t.prototype._checkFloating = function () {
            var e = this, t = this._el, n = this.s, a = Wr(t), s = this.state.hasFocus || a || !fe(this.value);
            if (t && "floating" === n.labelStyle) {
                if ("select" === this._tag) {
                    var i = t, r = i.options[0];
                    s = !!(s || i.multiple || i.value || i.selectedIndex > -1 && r && r.label)
                } else if (this.value === le) {
                    s = !(!s && !t.value)
                }
                this._valueChecked = !0, Ie(this, (function () {
                    e.setState({isFloatingActive: s})
                }))
            }
        }, t.prototype._mounted = function () {
            var e, t = this, n = this.s, a = this._el;
            bn(a, Ms, this._onAutoFill), "textarea" === this._tag && (bn(a, Ps, this._sizeTextArea), this._unsubscribe = (e = this._sizeTextArea, Rr || bn(tn, Bs, Ar), Rr++, zr.subscribe(e))), this._unlisten = Bi(a, {
                keepFocus: !0,
                onBlur: function () {
                    t.setState({hasFocus: !1, isFloatingActive: !!a.value})
                },
                onChange: function (e) {
                    if ("file" === n.type) {
                        for (var a = [], s = 0, i = e.target.files; s < i.length; s++) {
                            var r = i[s];
                            a.push(r.name)
                        }
                        t.setState({files: a.join(", ")})
                    }
                    n.tags && n.value === le && n.defaultValue === le && t.setState({value: e.target.value}), t._checkFloating(), t._change(e.target.value), t._emit("onChange", e)
                },
                onFocus: function () {
                    t._preventFocus || t.setState({hasFocus: !0, isFloatingActive: !0}), t._preventFocus = !1
                },
                onHoverIn: function () {
                    t._disabled || t.setState({hasHover: !0})
                },
                onHoverOut: function () {
                    t.setState({hasHover: !1})
                },
                onInput: function (e) {
                    t._change(e.target.value)
                }
            })
        }, t.prototype._render = function (e, t) {
            var n = !(!e.endIconSvg && !e.endIcon), a = e.pickerValue, s = !(!e.startIconSvg && !e.startIcon),
                i = e.label !== le || e.hasChildren, r = e.error, o = e.rtl ? "right" : "left",
                l = e.rtl ? "left" : "right", c = e.inputStyle, d = e.labelStyle, h = "floating" === d,
                u = !(!h || !i || !t.isFloatingActive && fe(e.value)), m = e.disabled === le ? t.disabled : e.disabled,
                _ = this._prevS, p = e.modelValue !== le ? e.modelValue : e.value,
                v = p !== le ? p : t.value !== le ? t.value : e.defaultValue,
                f = this._theme + this._rtl + (r ? " mbsc-error" : "") + (m ? " mbsc-disabled" : "") + (t.hasHover ? " mbsc-hover" : "") + (t.hasFocus && !m ? " mbsc-focus" : "");
            "file" !== e.type || n || (e.endIconSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>', n = !0), e.tags && (fe(a) && (a = []), me(a) || (a = [a]), this._tagsArray = e.pickerMap ? a.map((function (t) {
                return e.pickerMap.get(t)
            })) : fe(v) ? [] : v.split(", ")), e.passwordToggle && (n = !0, this._passIconClass = f + " mbsc-toggle-icon mbsc-textfield-icon mbsc-textfield-icon-" + c + " mbsc-textfield-icon-" + l + " mbsc-textfield-icon-" + c + "-" + l + (i ? " mbsc-textfield-icon-" + d : ""), this._hidePass = this._hidePass === le ? "password" === e.type : this._hidePass), this._hasStartIcon = s, this._hasEndIcon = n, this._hasError = r, this._disabled = m, this._value = v, this._cssClass = this._className + this._hb + f + " mbsc-form-control-wrapper mbsc-textfield-wrapper mbsc-font mbsc-textfield-wrapper-" + c + (m ? " mbsc-disabled" : "") + (i ? " mbsc-textfield-wrapper-" + d : "") + (s ? " mbsc-textfield-wrapper-has-icon-" + o + " " : "") + (n ? " mbsc-textfield-wrapper-has-icon-" + l + " " : ""), i && (this._labelClass = f + " mbsc-label mbsc-label-" + d + " mbsc-label-" + c + "-" + d + (s ? " mbsc-label-" + c + "-" + d + "-has-icon-" + o + " " : "") + (n ? " mbsc-label-" + c + "-" + d + "-has-icon-" + l + " " : "") + (h && this._animateFloating ? " mbsc-label-floating-animate" : "") + (u ? " mbsc-label-floating-active" : "")), this._innerClass = f + " mbsc-textfield-inner mbsc-textfield-inner-" + c + (i ? " mbsc-textfield-inner-" + d : ""), s && (this._startIconClass = f + " mbsc-textfield-icon mbsc-textfield-icon-" + c + " mbsc-textfield-icon-" + o + " mbsc-textfield-icon-" + c + "-" + o + (i ? " mbsc-textfield-icon-" + d : "")), n && (this._endIconClass = f + " mbsc-textfield-icon mbsc-textfield-icon-" + c + " mbsc-textfield-icon-" + l + " mbsc-textfield-icon-" + c + "-" + l + (i ? " mbsc-textfield-icon-" + d : "")), this._nativeElmClass = f + " " + (e.inputClass || "") + " mbsc-textfield mbsc-textfield-" + c + (e.dropdown ? " mbsc-select" : "") + (i ? " mbsc-textfield-" + d + " mbsc-textfield-" + c + "-" + d : "") + (u ? " mbsc-textfield-floating-active" : "") + (s ? " mbsc-textfield-has-icon-" + o + " mbsc-textfield-" + c + "-has-icon-" + o + (i ? " mbsc-textfield-" + c + "-" + d + "-has-icon-" + o : "") : "") + (n ? " mbsc-textfield-has-icon-" + l + " mbsc-textfield-" + c + "-has-icon-" + l + (i ? " mbsc-textfield-" + c + "-" + d + "-has-icon-" + l : "") : ""), ("select" === this._tag || e.dropdown) && (this._selectIconClass = "mbsc-select-icon mbsc-select-icon-" + c + this._rtl + this._theme + (i ? " mbsc-select-icon-" + d : "") + (s ? " mbsc-select-icon-" + o : "") + (n ? " mbsc-select-icon-" + l : "")), ("textarea" === this._tag || e.tags) && (this._cssClass += " mbsc-textarea-wrapper", this._innerClass += " mbsc-textarea-inner", this._nativeElmClass += " mbsc-textarea", "textarea" !== this._tag || v === this._prevValue && e.inputStyle === _.inputStyle && e.labelStyle === _.labelStyle && e.rows === _.rows && e.theme === _.theme || (this._shouldSize = !0), this._prevValue = v), e.tags && (this._innerClass += " mbsc-textfield-tags-inner"), "file" === e.type && (this._dummyElmClass = this._nativeElmClass, this._nativeElmClass += " mbsc-textfield-file"), this._errorClass = this._theme + this._rtl + " mbsc-error-message mbsc-error-message-" + c + (i ? " mbsc-error-message-" + d : "") + (s ? " mbsc-error-message-has-icon-" + o : "") + (n ? " mbsc-error-message-has-icon-" + l : ""), e.notch && "outline" === c && (this._fieldSetClass = "mbsc-textfield-fieldset" + f + (s ? " mbsc-textfield-fieldset-has-icon-" + o : "") + (n ? " mbsc-textfield-fieldset-has-icon-" + l : ""), this._legendClass = "mbsc-textfield-legend" + this._theme + (u || i && "stacked" === d ? " mbsc-textfield-legend-active" : "")), e.ripple && "outline" !== e.inputStyle && (this._rippleClass = "mbsc-textfield-ripple" + this._theme + (r ? " mbsc-error" : "") + (t.hasFocus ? " mbsc-textfield-ripple-active" : "")), this._valueChecked && (this._animateFloating = !0)
        }, t.prototype._updated = function () {
            var e = this;
            this._shouldSize && (this._shouldSize = !1, Ie(this, (function () {
                e._sizeTextArea()
            }))), this._checkFloating()
        }, t.prototype._destroy = function () {
            xn(this._el, Ms, this._onAutoFill), xn(this._el, Ps, this._sizeTextArea), this._unsubscribe && function (e) {
                Rr--, zr.unsubscribe(e), Rr || xn(tn, Bs, Ar)
            }(this._unsubscribe), this._unlisten && this._unlisten()
        }, t.defaults = {
            dropdown: !1,
            dropdownIcon: a,
            hideIcon: "eye-blocked",
            inputStyle: "underline",
            labelStyle: "stacked",
            placeholder: "",
            ripple: !1,
            rows: 6,
            showIcon: "eye",
            type: "text"
        }, t._name = "Input", t
    }(ja);
    var Br = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), Object.defineProperty(t.prototype, "value", {
            get: function () {
                return this._el && this._el.value
            }, set: function (e) {
                this._el.value = e, this._checkFloating(), "textarea" === this._tag && this._sizeTextArea()
            }, enumerable: !0, configurable: !0
        }), t.prototype._template = function (e, t) {
            return function (e, t, n, a, s) {
                var i, r = n.props;
                r.children;
                var o = r.dropdown;
                r.dropdownIcon, r.endIcon, r.endIconSrc, r.endIconSvg, r.error;
                var l = r.errorMessage, h = r.hasChildren;
                r.hideIcon, r.hideIconSvg, r.inputClass, r.inputStyle, r.label, r.labelStyle, r.modelValue, r.notch, r.passwordToggle, r.pickerMap, r.pickerValue, r.ripple, r.rows, r.rtl, r.showIcon, r.showIconSvg, r.startIcon, r.startIconSrc, r.startIconSvg;
                var u = r.tags;
                r.theme, r.themeVariant;
                var m = r.type,
                    _ = d(r, ["children", "dropdown", "dropdownIcon", "endIcon", "endIconSrc", "endIconSvg", "error", "errorMessage", "hasChildren", "hideIcon", "hideIconSvg", "inputClass", "inputStyle", "label", "labelStyle", "modelValue", "notch", "passwordToggle", "pickerMap", "pickerValue", "ripple", "rows", "rtl", "showIcon", "showIconSvg", "startIcon", "startIconSrc", "startIconSvg", "tags", "theme", "themeVariant", "type"]),
                    p = e.label, v = ((i = {}).onMouseDown = n._onMouseDown, i), f = _;
                return Ct("label", c({className: n._cssClass}, v), (p || h) && Ct("span", {className: n._labelClass}, h ? "" : p), Ct("span", {className: n._innerClass}, "input" === n._tag && Ct("input", c({}, f, {
                    ref: n._setEl,
                    className: n._nativeElmClass + (e.tags ? " mbsc-textfield-hidden" : ""),
                    disabled: n._disabled,
                    type: e.passwordToggle ? n._hidePass ? "password" : "text" : m
                })), "file" === m && Ct("input", {
                    className: n._dummyElmClass,
                    disabled: n._disabled,
                    placeholder: e.placeholder,
                    readOnly: !0,
                    type: "text",
                    value: t.files || ""
                }), "select" === n._tag && Ct("select", c({}, f, {
                    ref: n._setEl,
                    className: "mbsc-select" + n._nativeElmClass,
                    disabled: n._disabled
                }), a), "textarea" === n._tag && Ct("textarea", c({}, f, {
                    ref: n._setEl,
                    className: n._nativeElmClass,
                    disabled: n._disabled
                })), u && Ct("span", {className: "mbsc-textfield-tags" + n._nativeElmClass}, n._tagsArray.length ? n._tagsArray.map((function (t, a) {
                    return t && Ct("span", {
                        key: a,
                        className: "mbsc-textfield-tag" + n._theme + n._rtl
                    }, Ct("span", {className: "mbsc-textfield-tag-text" + n._theme}, t), Ct(Pi, {
                        className: "mbsc-textfield-tag-clear",
                        onClick: function (e) {
                            return n._onTagClear(e, a)
                        },
                        svg: e.clearIcon,
                        theme: e.theme
                    }))
                })) : Ct("span", {className: "mbsc-textfield-tags-placeholder" + n._theme}, e.placeholder)), ("select" === n._tag || o) && Ct(Pi, {
                    className: n._selectIconClass,
                    svg: e.dropdownIcon,
                    theme: e.theme
                }), n._hasStartIcon && Ct(Pi, {
                    className: n._startIconClass,
                    name: e.startIcon,
                    svg: e.startIconSvg,
                    theme: e.theme
                }), n._hasEndIcon && !e.passwordToggle && Ct(Pi, {
                    className: n._endIconClass,
                    name: e.endIcon,
                    svg: e.endIconSvg,
                    theme: e.theme
                }), e.passwordToggle && Ct(Pi, {
                    onClick: n._onClick,
                    className: n._passIconClass,
                    name: n._hidePass ? e.showIcon : e.hideIcon,
                    svg: n._hidePass ? e.showIconSvg : e.hideIconSvg,
                    theme: e.theme
                }), n._hasError && Ct("span", {className: n._errorClass}, l), e.notch && "outline" === e.inputStyle && Ct("fieldset", {
                    "aria-hidden": "true",
                    className: n._fieldSetClass
                }, Ct("legend", {className: n._legendClass}, p && "inline" !== e.labelStyle ? p : "&nbsp;")), e.ripple && "outline" !== e.inputStyle && Ct("span", {className: n._rippleClass})))
            }(e, t, this, e.children)
        }, t
    }(Ur), jr = {
        hasChildren: !0,
        parentClass: "mbsc-label",
        readAttrs: ["placeholder", "rows"],
        readProps: ["disabled", "type"],
        renderToParent: !0,
        slots: {endIcon: "end-icon", label: "label", startIcon: "start-icon"},
        before: function (e, t, n) {
            var a = e.parentNode, s = en.createElement("span");
            if (a.insertBefore(s, e), s.appendChild(e), t.inputClass = e.getAttribute("class") || "", "SELECT" === e.nodeName && delete t.hasChildren, !t.label && t.hasChildren && (t.label = n[0].textContent), t.label) {
                var i = en.createElement("span");
                a.insertBefore(i, s)
            }
        }
    }, Kr = c({}, jr, {hasValue: !0, parentClass: "mbsc-select", useOwnChildren: !0}), Xr = c({}, jr, {hasValue: !0});

    function Jr(e, t, n) {
        var a = t.inputComponent, s = c({
            defaultValue: e._value && e._valueText || "",
            placeholder: t.placeholder,
            ref: e._setInput
        }, t.inputProps);
        t.inputComponent || (a = Br, s = c({
            "aria-expanded": !!e._isOpen,
            "aria-haspopup": "dialog",
            "aria-label": t.ariaLabel,
            disabled: t.disabled,
            dropdown: t.dropdown,
            endIcon: t.endIcon,
            endIconSrc: t.endIconSrc,
            endIconSvg: t.endIconSvg,
            error: t.error,
            errorMessage: t.errorMessage,
            inputStyle: t.inputStyle,
            label: t.label,
            labelStyle: t.labelStyle,
            name: t.name,
            pickerMap: t.valueMap,
            pickerValue: e._value,
            placeholder: t.placeholder,
            role: "combobox",
            rtl: t.rtl,
            startIcon: t.startIcon,
            startIconSrc: t.startIconSrc,
            startIconSvg: t.startIconSvg,
            tags: t.tagInput === le ? t.selectMultiple : t.tagInput,
            theme: t.theme,
            themeVariant: t.themeVariant
        }, s));
        var i = Ct(a, s);
        return Ct(kt, null, e._showInput && i, Ct(dr, {
            activeElm: t.activeElm,
            anchor: e._anchor,
            anchorAlign: e._anchorAlign,
            animation: t.animation,
            buttons: e._buttons,
            cancelText: t.cancelText,
            closeOnEsc: t.closeOnEsc,
            closeOnOverlayClick: t.closeOnOverlayClick,
            closeOnScroll: t.closeOnScroll,
            closeText: t.closeText,
            contentPadding: !1,
            context: t.context,
            cssClass: e._cssClass,
            disableLeftRight: !0,
            display: t.display,
            focusElm: e._focusElm,
            focusOnClose: t.focusOnClose,
            focusOnOpen: !e._allowTyping,
            focusTrap: t.focusTrap,
            fullScreen: t.fullScreen,
            headerText: e._headerText,
            height: t.height,
            isOpen: e._isOpen,
            maxHeight: t.maxHeight,
            maxWidth: e._maxWidth,
            onClose: e._onPopupClose,
            onClosed: e._onPopupClosed,
            onKeyDown: e._onPopupKey,
            onOpen: e._onPopupOpen,
            onResize: e._onResize,
            setText: t.setText,
            showArrow: t.showArrow,
            showOverlay: !e._allowTyping && t.showOverlay,
            ref: e._setPopup,
            rtl: t.rtl,
            scrollLock: e._scrollLock,
            theme: t.theme,
            themeVariant: t.themeVariant,
            touchUi: e._touchUi,
            windowWidth: e.state.width,
            width: t.width
        }, n))
    }

    var qr = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e) {
            return Jr(this, e, function (e, t) {
                var n = e.renderPreContent ? e.renderPreContent(e.preContentData) : "",
                    a = e.renderInContent ? e.renderInContent(e.preContentData) : "";
                return Ct(kt, null, n, Ct("div", {className: "mbsc-scroller mbsc-scroller-" + t._displayStyle + t._theme + t._rtl + (t._touchUi ? " mbsc-scroller-touch" : " mbsc-scroller-pointer") + ("inline" === e.display ? " mbsc-font " : " ") + t._className}, a, t._wheels.map((function (n, a) {
                    return Ct("div", {
                        key: a,
                        className: "mbsc-scroller-wheel-group-cont" + (e.scroll3d ? " mbsc-scroller-wheel-group-cont-3d" : "") + t._theme
                    }, e.selectOnScroll && Ct("div", {
                        className: "mbsc-scroller-wheel-line" + t._theme,
                        style: t._lineStyle
                    }), Ct("div", {className: "mbsc-flex mbsc-scroller-wheel-group" + (e.scroll3d ? " mbsc-scroller-wheel-group-3d" : "") + t._theme}, Ct("div", {
                        className: "mbsc-scroller-wheel-overlay mbsc-scroller-wheel-overlay-" + t._displayStyle + t._theme,
                        style: t._overlayStyle
                    }), n.map((function (n, a) {
                        return Ct(Vr, {
                            activeIndex: t._activeIndexes[n._key],
                            disabled: t._disabled && t._disabled[n._key],
                            display: t._displayStyle,
                            key: a,
                            itemHeight: e.itemHeight,
                            onActiveChange: t._onActiveChange,
                            onIndexChange: t._onWheelIndexChange,
                            onSet: t._onSet,
                            maxIndex: n.max,
                            maxWheelWidth: e.maxWheelWidth,
                            minIndex: n.min,
                            minWheelWidth: e.minWheelWidth,
                            multiple: n.multiple,
                            renderItem: e.renderItem,
                            rows: t._rows,
                            scroll3d: t._scroll3d,
                            selectedIndex: t._indexes[n._key],
                            selectedValues: t._tempValueRep[n._key],
                            selectOnScroll: e.selectOnScroll,
                            theme: e.theme,
                            touchUi: e.touchUi,
                            rtl: e.rtl,
                            wheel: n,
                            wheelWidth: e.wheelWidth
                        })
                    }))))
                }))))
            }(e, this))
        }, t
    }(Hr), Gr = {ios: 50, material: 46, windows: 50}, Zr = ["a", "h", "i", "s", "tt"];

    function Qr(e, t, n, a, s, i, r, o, l, c, d, h, u, m, _, p) {
        for (var v = da(u, m), f = v || !da(h, m) ? u : ta(e, u), g = v || !da(h, u) ? m : na(e, m), y = i.a(f), b = i.a(g), x = !0, D = !0, T = !1, S = 0, C = 0, w = 0; w < n; w++) {
            var k = a[s[N = Zr[w]]];
            if (k !== le) {
                var M = x ? i[N](f) : 0, E = D ? i[N](g) : r[N];
                t && 1 === w && (M += y ? 12 : 0, E += b ? 12 : 0, k += a[s.a] ? 12 : 0), (x || D) && M < k && k < E && (T = !0), k !== M && (x = !1), k !== E && (D = !1)
            }
        }
        if (!_) {
            for (w = n + 1; w < 4; w++) {
                var N;
                s[N = Zr[w]] !== le && (i[N](f) > 0 && x && (S = o[l]), i[N](g) < r[N] && D && (C = o[l]))
            }
            D && p && !C && (C = 999 !== g.getMilliseconds() ? o[l] : 0)
        }
        if (x || D || T) for (M = x && !T ? i[l](f) + S : 0, E = D && !T ? i[l](g) - C : r[l], w = M; w <= E; w += o[l]) c[d].set(w, !_)
    }

    function $r(e, t) {
        var n = new Date(e);
        return t ? ke(+n / 864e5) : n.getMonth() + 12 * (n.getFullYear() - 1970)
    }

    function eo(e) {
        return e.getFullYear() + "-" + Se(e.getMonth() + 1) + "-" + Se(e.getDate())
    }

    function to(e) {
        return e.getMilliseconds()
    }

    function no(e) {
        return e.getHours() > 11 ? 1 : 0
    }

    var ao = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._preset = "date", t._innerValues = {}, t._onChange = function (e) {
                t.s.value === le && t.setState({value: e.value}), t._hook("onChange", e)
            }, t._parseDate = function (e) {
                var n = t.s;
                return e || (t._innerValues = {}), t._getArray(ga(e || n.defaultSelection || new Date, n, t._format), !!e)
            }, t._formatDate = function (e) {
                var n = t._getDate(e);
                return n ? xa(t._format, n, t.s) : ""
            }, t._getDate = function (e) {
                var n, a, s = t.s, i = t._getArrayPart, r = t._wheelOrder,
                    o = new Date((new Date).setHours(0, 0, 0, 0));
                if (null === e || e === le) return null;
                if (r.dd !== le) {
                    var l = e[r.dd].split("-");
                    n = new Date(l[0], l[1] - 1, l[2])
                }
                r.tt !== le && (a = n || o, a = new Date(a.getTime() + e[r.tt] % 86400 * 1e3));
                var c = i(e, "y", n, o), d = i(e, "m", n, o), h = Math.min(i(e, "d", n, o), s.getMaxDayOfMonth(c, d)),
                    u = i(e, "h", a, o);
                return s.getDate(c, d, h, t._hasAmPm && i(e, "a", a, o) ? u + 12 : u, i(e, "i", a, o), i(e, "s", a, o), i(e, "u", a, o))
            }, t._validate = function (e) {
                var n = e.direction, a = e.index, s = e.values, i = e.wheels, r = [], o = t.s, l = o.stepHour,
                    c = o.stepMinute, d = o.stepSecond, h = o.mode || t._preset, u = t._wheelOrder, m = t._getDatePart,
                    _ = t._max, p = t._min, v = pa(o, t._getDate(s)), f = o.getYear(v), g = o.getMonth(v),
                    y = o.getDate(f, g - 1, 1), b = o.getDate(f, g + 2, 1);
                a !== u.y && a !== u.m && a !== u.d && a !== u.dd && a !== le || (t._valids = os(o.valid, y, b, o, !0), t._invalids = os(o.invalid, y, b, o, !0));
                var x = t._valids, D = t._invalids, T = Di(v, o, p ? +p : -1 / 0, _ ? +_ : 1 / 0, D, x, n),
                    S = t._getArray(T), C = t._wheels && t._wheels[0][u.d], w = m.y(T), k = m.m(T),
                    M = o.getMaxDayOfMonth(w, k),
                    E = {y: p ? p.getFullYear() : -1 / 0, m: 0, d: 1, h: 0, i: 0, s: 0, a: 0, tt: 0}, N = {
                        y: _ ? _.getFullYear() : 1 / 0,
                        m: 11,
                        d: 31,
                        h: we(t._hasAmPm ? 11 : 23, l),
                        i: we(59, c),
                        s: we(59, d),
                        a: 1,
                        tt: 86400
                    }, I = {y: 1, m: 1, d: 1, h: l, i: c, s: d, a: 1, tt: t._timeStep}, L = !1, H = !0, O = !0;
                if (["dd", "y", "m", "d", "tt", "a", "h", "i", "s"].forEach((function (e) {
                    var t = E[e], n = N[e], a = m[e](T), s = u[e];
                    if (H && p && (t = m[e](p)), O && _ && (n = m[e](_)), a < t && (a = t), a > n && (a = n), "dd" === e || "tt" === e || "a" === e && s === le || (H && (H = a === t), O && (O = a === n)), s !== le) {
                        if (r[s] = new Map, "y" !== e && "dd" !== e) for (var i = E[e]; i <= N[e]; i += I[e]) (i < t || i > n) && r[s].set(i, !0);
                        if ("d" === e && D) for (var l in D) if (!x || !x[l]) {
                            var c = ga(l, o), d = o.getYear(c), h = o.getMonth(c);
                            d === w && h === k && xi(o, c, D, x) && r[s].set(o.getDay(c), !0)
                        }
                    }
                })), /time/i.test(h)) {
                    var Y = D && D[sa(T)], P = x && x[sa(T)];
                    Zr.forEach((function (e, a) {
                        var s = u[e];
                        if (s !== le) {
                            var l = o.valid ? P : Y;
                            if (l) {
                                if (o.valid) for (var c = 0; c <= N[e]; c++) r[s].set(c, !0);
                                for (var d = 0, h = l; d < h.length; d++) {
                                    var _ = h[d], p = _.start, v = _.end;
                                    p && v && Qr(o, t._hasAmPm, a, S, u, m, N, I, e, r, s, T, p, v, !!o.valid, o.exclusiveEndDates)
                                }
                            }
                            S[s] = Mr(i[s], m[e](T), r[s], n)
                        }
                    }))
                }
                var F = t._dateDisplay;
                if (C && (C.data.length !== M || /DDD/.test(F))) {
                    for (var V = [], z = F.replace(/[my|]/gi, "").replace(/DDDD/, "{dddd}").replace(/DDD/, "{ddd}").replace(/DD/, "{dd}").replace(/D/, "{d}"), R = 1; R <= M; R++) {
                        var A = o.getDate(w, k, R).getDay(),
                            W = z.replace(/{dddd}/, o.dayNames[A]).replace(/{ddd}/, o.dayNamesShort[A]).replace(/{dd}/, Se(R) + o.daySuffix).replace(/{d}/, R + o.daySuffix);
                        V.push({display: W, value: R})
                    }
                    C.data = V, L = !0
                }
                return {disabled: r, init: L, valid: S}
            }, t._shouldValidate = function (e, t) {
                return !!(e.min && +e.min != +t.min || e.max && +e.max != +t.max) || e.wheels !== t.wheels || e.dataTimezone !== t.dataTimezone || e.displayTimezone !== t.displayTimezone
            }, t._setScroller = function (e) {
                t._scroller = e
            }, t._getYearValue = function (e) {
                return {display: (/yy/i.test(t._dateDisplay) ? e : (e + "").substr(2, 2)) + t.s.yearSuffix, value: e}
            }, t._getYearIndex = function (e) {
                return +e
            }, t._getDateIndex = function (e) {
                return $r(e, t._hasDay)
            }, t._getDateItem = function (e) {
                var n = t.s, a = t._hasDay, s = new Date((new Date).setHours(0, 0, 0, 0)),
                    i = a ? new Date(864e5 * e) : new Date(1970, e, 1);
                return a && (i = new Date(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate())), {
                    disabled: a && xi(n, i, t._invalids, t._valids),
                    display: s.getTime() === i.getTime() ? n.todayText : xa(t._dateTemplate, i, n),
                    value: eo(i)
                }
            }, t._getArrayPart = function (e, n, a, s) {
                var i;
                return t._wheelOrder[n] === le || (i = +e[t._wheelOrder[n]], isNaN(i)) ? a ? t._getDatePart[n](a) : t._innerValues[n] !== le ? t._innerValues[n] : t._getDatePart[n](s) : i
            }, t._getHours = function (e) {
                var n = e.getHours();
                return we(n = t._hasAmPm && n >= 12 ? n - 12 : n, t.s.stepHour)
            }, t._getMinutes = function (e) {
                return we(e.getMinutes(), t.s.stepMinute)
            }, t._getSeconds = function (e) {
                return we(e.getSeconds(), t.s.stepSecond)
            }, t._getFullTime = function (e) {
                return we(Ce((e.getTime() - new Date(e).setHours(0, 0, 0, 0)) / 1e3), t._timeStep || 1)
            }, t
        }

        return l(t, e), t.prototype.getVal = function () {
            return this._value
        }, t.prototype.setVal = function (e) {
            this._value = e, this.setState({value: e})
        }, t.prototype.position = function () {
            this._scroller && this._scroller.position()
        }, t.prototype.isVisible = function () {
            return this._scroller && this._scroller.isVisible()
        }, t.prototype._valueEquals = function (e, t) {
            return Ta(e, t, this.s)
        }, t.prototype._render = function (e, t) {
            var n = !1, a = this._prevS, s = e.dateFormat, i = e.timeFormat, r = e.mode || this._preset,
                o = "datetime" === r ? s + e.separator + i : "time" === r ? i : s;
            this._value = e.value === le ? t.value : e.value, this._minWheelWidth = e.minWheelWidth || ("datetime" === r ? Gr[e.baseTheme || e.theme] : le), this._dateWheels = e.dateWheels || ("datetime" === r ? e.dateWheelFormat : s), this._dateDisplay = e.dateWheels || e.dateDisplay, this._timeWheels = e.timeWheels || i, this._timeDisplay = this._timeWheels, this._format = o, this._hasAmPm = /h/.test(this._timeDisplay), this._getDatePart = {
                y: e.getYear,
                m: e.getMonth,
                d: e.getDay,
                h: this._getHours,
                i: this._getMinutes,
                s: this._getSeconds,
                u: to,
                a: no,
                dd: eo,
                tt: this._getFullTime
            }, +ga(a.min) != +ga(e.min) && (n = !0, this._min = fe(e.min) ? le : ga(e.min, e, o)), +ga(a.max) != +ga(e.max) && (n = !0, this._max = fe(e.max) ? le : ga(e.max, e, o)), (e.theme !== a.theme || e.mode !== a.mode || e.locale !== a.locale || e.dateWheels !== a.dateWheels || e.timeWheels !== a.timeWheels || n) && (this._wheels = this._getWheels())
        }, t.prototype._getWheels = function () {
            this._wheelOrder = {};
            var e, t = this.s, n = t.mode || this._preset, a = this._hasAmPm, s = this._dateDisplay,
                i = this._timeDisplay, r = this._wheelOrder, o = [], l = [], c = [], d = 0;
            if (/date/i.test(n)) {
                for (var h = 0, u = this._dateWheels.split(/\|/.test(this._dateWheels) ? "|" : ""); h < u.length; h++) {
                    var m = 0;
                    if ((y = u[h]).length) if (/y/i.test(y) && m++, /m/i.test(y) && m++, /d/i.test(y) && m++, m > 1 && r.dd === le) r.dd = d, d++, l.push(this._getDateWheel(y)), c = l; else if (/y/i.test(y) && r.y === le) r.y = d, d++, l.push({
                        cssClass: "mbsc-datetime-year-wheel",
                        getIndex: this._getYearIndex,
                        getItem: this._getYearValue,
                        max: this._max ? t.getYear(this._max) : le,
                        min: this._min ? t.getYear(this._min) : le,
                        spaceAround: !0
                    }); else if (/m/i.test(y) && r.m === le) {
                        r.m = d, e = [], d++;
                        for (var _ = s.replace(/[dy|]/gi, "").replace(/MMMM/, "{mmmm}").replace(/MMM/, "{mmm}").replace(/MM/, "{mm}").replace(/M/, "{m}"), p = 0; p < 12; p++) {
                            var v = _.replace(/{mmmm}/, t.monthNames[p]).replace(/{mmm}/, t.monthNamesShort[p]).replace(/{mm}/, Se(p + 1) + (t.monthSuffix || "")).replace(/{m}/, p + 1 + (t.monthSuffix || ""));
                            e.push({display: v, value: p})
                        }
                        l.push({cssClass: "mbsc-datetime-month-wheel", data: e, spaceAround: !0})
                    } else if (/d/i.test(y) && r.d === le) {
                        r.d = d, e = [], d++;
                        for (p = 1; p < 32; p++) e.push({display: (/dd/i.test(s) ? Se(p) : p) + t.daySuffix, value: p});
                        l.push({cssClass: "mbsc-datetime-day-wheel", data: e, spaceAround: !0})
                    }
                }
                o.push(l)
            }
            if (/time/i.test(n)) {
                for (var f = 0, g = this._timeWheels.split(/\|/.test(this._timeWheels) ? "|" : ""); f < g.length; f++) {
                    var y;
                    m = 0;
                    if ((y = g[f]).length && (/h/i.test(y) && m++, /m/i.test(y) && m++, /s/i.test(y) && m++, /a/i.test(y) && m++), m > 1 && r.tt === le) r.tt = d, d++, c.push(this._getTimeWheel(y)); else if (/h/i.test(y) && r.h === le) {
                        e = [], r.h = d, d++;
                        for (p = 0; p < (a ? 12 : 24); p += t.stepHour) e.push({
                            display: a && 0 === p ? 12 : /hh/i.test(i) ? Se(p) : p,
                            value: p
                        });
                        c.push({cssClass: "mbsc-datetime-hour-wheel", data: e, spaceAround: !0})
                    } else if (/m/i.test(y) && r.i === le) {
                        e = [], r.i = d, d++;
                        for (p = 0; p < 60; p += t.stepMinute) e.push({display: /mm/i.test(i) ? Se(p) : p, value: p});
                        c.push({cssClass: "mbsc-datetime-minute-wheel", data: e, spaceAround: !0})
                    } else if (/s/i.test(y) && r.s === le) {
                        e = [], r.s = d, d++;
                        for (p = 0; p < 60; p += t.stepSecond) e.push({display: /ss/i.test(i) ? Se(p) : p, value: p});
                        c.push({cssClass: "mbsc-datetime-second-wheel", data: e, spaceAround: !0})
                    } else /a/i.test(y) && r.a === le && (r.a = d, d++, c.push({
                        cssClass: "mbsc-dt-whl-a",
                        data: /A/.test(y) ? [{
                            display: t.amText.toUpperCase(),
                            value: 0
                        }, {display: t.pmText.toUpperCase(), value: 1}] : [{
                            display: t.amText,
                            value: 0
                        }, {display: t.pmText, value: 1}],
                        spaceAround: !0
                    }))
                }
                c !== l && o.push(c)
            }
            return o
        }, t.prototype._getDateWheel = function (e) {
            var t = /d/i.test(e);
            return this._hasDay = t, this._dateTemplate = e, {
                cssClass: "mbsc-datetime-date-wheel",
                getIndex: this._getDateIndex,
                getItem: this._getDateItem,
                label: "",
                max: this._max ? $r(eo(this._max), t) : le,
                min: this._min ? $r(eo(this._min), t) : le,
                spaceAround: !0
            }
        }, t.prototype._getTimeWheel = function (e) {
            var t = this.s, n = [], a = 1;
            /s/i.test(e) ? a = t.stepSecond : /m/i.test(e) ? a = 60 * t.stepMinute : /h/i.test(e) && (a = 3600 * t.stepHour), this._timeStep = a;
            for (var s = 0; s < 86400; s += a) {
                var i = new Date((new Date).setHours(0, 0, 0, 0) + 1e3 * s);
                n.push({display: xa(e, i, t), value: s})
            }
            return {data: n, label: "", spaceAround: !0}
        }, t.prototype._getArray = function (e, t) {
            var n = [], a = this._wheelOrder;
            if (null === e || e === le) return n;
            for (var s = 0, i = ["y", "m", "d", "a", "h", "i", "s", "u", "dd", "tt"]; s < i.length; s++) {
                var r = i[s], o = this._getDatePart[r](e);
                a[r] !== le && (n[a[r]] = o), t && (this._innerValues[r] = o)
            }
            return n
        }, t.defaults = c({}, qn, {
            dateDisplay: "MMMMDDYYYY",
            dateWheelFormat: "|DDD MMM D|",
            stepHour: 1,
            stepMinute: 1,
            stepSecond: 1
        }), t._name = "Datetime", t
    }(ja);
    var so = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e) {
            return function (e, t) {
                return Ct(qr, {
                    disabled: e.disabled,
                    endIcon: e.endIcon,
                    endIconSrc: e.endIconSrc,
                    endIconSvg: e.endIconSvg,
                    error: e.error,
                    errorMessage: e.errorMessage,
                    inputStyle: e.inputStyle,
                    label: e.label,
                    labelStyle: e.labelStyle,
                    placeholder: e.placeholder,
                    name: e.name,
                    startIcon: e.startIcon,
                    startIconSrc: e.startIconSrc,
                    startIconSvg: e.startIconSvg,
                    anchor: e.anchor,
                    animation: e.animation,
                    buttons: e.buttons,
                    cancelText: e.cancelText,
                    clearText: e.clearText,
                    closeOnOverlayClick: e.closeOnOverlayClick,
                    context: e.context,
                    display: e.display,
                    focusOnClose: e.focusOnClose,
                    focusTrap: e.focusTrap,
                    headerText: e.headerText,
                    height: e.height,
                    setText: e.setText,
                    showArrow: e.showArrow,
                    showOverlay: e.showOverlay,
                    width: e.width,
                    circular: e.circular,
                    displayStyle: e.displayStyle,
                    formatValue: t._formatDate,
                    getValue: t._getDate,
                    itemHeight: e.itemHeight,
                    maxWheelWidth: e.maxWheelWidth,
                    minWheelWidth: t._minWheelWidth,
                    parseValue: t._parseDate,
                    ref: t._setScroller,
                    rows: e.rows,
                    rtl: e.rtl,
                    shouldValidate: t._shouldValidate,
                    showOnClick: e.showOnClick,
                    showOnFocus: e.showOnFocus,
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                    touchUi: t._touchUi,
                    validate: t._validate,
                    value: t._value,
                    valueEquality: t._valueEquals,
                    wheels: t._wheels,
                    wheelWidth: e.wheelWidth,
                    onChange: t._onChange
                }, e.children)
            }(e, this)
        }, t
    }(ao), io = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._preset = "datetime", t
        }

        return l(t, e), t
    }(so), ro = Zt({}), oo = {};

    function lo(e, t) {
        return oo[e] || (oo[e] = {change: new m, selectedIndex: -1}), oo[e].change.subscribe(t)
    }

    function co(e, t) {
        var n = oo[e];
        n && (n.change.unsubscribe(t), n.change.nr || delete oo[e])
    }

    function ho(e, t, n) {
        var a = oo[e];
        a && (n !== le && (a.selectedIndex = n), t !== le && (a.value = t), a.change.next(a.value))
    }

    function uo(e) {
        return oo[e] && oo[e].selectedIndex
    }

    var mo = 1, _o = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._id = "mbsc-segmented-group" + mo++, t._onChange = function (e, n) {
                var a = t.s, s = a.modelValue !== le ? a.modelValue : t.value;
                if ("multiple" === a.select) {
                    if (s !== le) {
                        var i = (s = s || []).indexOf(n);
                        -1 !== i ? s.splice(i, 1) : s.push(n), t.value = s.slice()
                    }
                } else t.value = n;
                t._change(t.value), a.onChange && a.onChange(e)
            }, t
        }

        return l(t, e), t.prototype._change = function (e) {
        }, t.prototype._setupDrag = function () {
            var e, t, n, a, s, i, r = this, o = [], l = [];
            this._unlisten = Bi(this._el, {
                onEnd: function () {
                    n && a !== s && !o[a] && r._el.querySelectorAll(".mbsc-segmented-input")[a].click();
                    n = !1, r.setState({dragging: !1})
                }, onMove: function (s) {
                    if (n) {
                        for (var c = Math.min(Math.max(s.endX - t, 0), e), d = 0, h = l[0]; c > h && l.length > d + 1;) d++, h += l[d];
                        (d = r.s.rtl ? l.length - 1 - d : d) === a || o[d] || ho(i, le, a = d)
                    }
                }, onStart: function (c) {
                    var d = Hn(c.domEvent.target, ".mbsc-segmented-item", r._el);
                    if (d) {
                        var h = d.querySelector(".mbsc-segmented-input");
                        if (h.classList.contains("mbsc-selected")) {
                            o = [], Yn(r._el.querySelectorAll(".mbsc-segmented-button"), (function (e) {
                                o.push(e.classList.contains("mbsc-disabled"))
                            })), l = [], Yn(r._el.querySelectorAll(".mbsc-segmented-item"), (function (e) {
                                l.push(e.clientWidth)
                            }));
                            e = r._el.clientWidth - 30, t = In(r._el).left + 15, i = h.name, a = uo(i), s = a, l.length && "radio" === h.type && (n = !0, r.setState({dragging: !0}))
                        }
                    }
                }
            })
        }, t.prototype._cleanupDrag = function () {
            this._unlisten && (this._unlisten(), this._unlisten = null)
        }, t.prototype._render = function (e) {
            this._name = e.name === le ? this._id : e.name, this._groupClass = "mbsc-segmented mbsc-flex " + this._className + this._theme + this._rtl + (e.color ? " mbsc-segmented-" + e.color : "") + (this.state.dragging ? " mbsc-segmented-dragging" : ""), this._groupOpt = {
                color: e.color,
                disabled: e.disabled,
                name: this._name,
                onChange: this._onChange,
                select: e.select,
                value: e.modelValue !== le ? e.modelValue : e.value
            }
        }, t.prototype._updated = function () {
            this.s.drag && "multiple" !== this.s.select ? this._unlisten || this._setupDrag() : this._cleanupDrag()
        }, t.prototype._destroy = function () {
            this._cleanupDrag()
        }, t.defaults = {select: "single"}, t._name = "SegmentedGroup", t
    }(ja);
    var po = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e) {
            return Ct(ro.Provider, {
                children: (t = this, n = e.children, Ct("div", {
                    className: t._groupClass,
                    ref: t._setEl
                }, n)), value: this._groupOpt
            });
            var t, n
        }, t
    }(_o), vo = 1, fo = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._onChange = function (e) {
                var n = t.s, a = e.target.checked;
                a !== t._checked && (t._change(a), t._onGroupChange && t._onGroupChange(e, t._value), t._toggle(a), n.onChange && n.onChange(e))
            }, t._onValueChange = function (e) {
                var n = t.s, a = t._isMultiple ? e && -1 !== e.indexOf(t._value) : e === t._value;
                n.checked === le && a !== t.state.selected ? t.setState({selected: a}) : t.forceUpdate(), t._change(a)
            }, t._setBox = function (e) {
                t._box = e
            }, t
        }

        return l(t, e), t.prototype._change = function (e) {
        }, t.prototype._groupOptions = function (e) {
            var t = this, n = e.color, a = e.disabled, s = e.name, i = e.onChange, r = e.select, o = e.value,
                l = this.s, c = this.state, d = this._checked,
                h = l.modelValue !== le ? l.modelValue === l.value : l.checked,
                u = h !== le ? be(h) : c.selected === le ? be(l.defaultChecked) : c.selected;
            this._id = l.id === le ? this._id || "mbsc-segmented-" + vo++ : l.id, this._value = l.value === le ? this._id : l.value, this._onGroupChange = i, this._isMultiple = "multiple" === (r || l.select), this._name = s === le ? l.name : s, this._disabled = a === le ? l.disabled === le ? c.disabled : be(l.disabled) : be(a), this._color = n === le ? l.color : n, this._checked = o === le ? u : this._isMultiple ? o && -1 !== o.indexOf(this._value) : o === this._value, this._name && !this._unsubscribe && (this._unsubscribe = lo(this._name, this._onValueChange)), this._isMultiple || d || !this._checked || setTimeout((function () {
                t._checked && ho(t._name, t._value, t._index)
            })), this._selectedIndex = uo(this._name), this._cssClass = "mbsc-segmented-item " + this._className + this._theme + this._rtl + (this._checked ? " mbsc-segmented-item-checked" : "") + (c.hasFocus ? " mbsc-focus" : "") + (this._index === this._selectedIndex || this._index === le && this._checked || this._isMultiple && this._checked ? " mbsc-segmented-item-selected" : "")
        }, t.prototype._toggle = function (e) {
            this.s.checked === le && this.setState({selected: e})
        }, t.prototype._mounted = function () {
            var e = this;
            bn(this._el, Is, this._onChange), this._unlisten = Bi(this._el, {
                onBlur: function () {
                    e.setState({hasFocus: !1})
                }, onFocus: function () {
                    e.setState({hasFocus: !0})
                }
            })
        }, t.prototype._updated = function () {
            if (!this._isMultiple) {
                var e = Hn(this._el, ".mbsc-segmented"), t = -1, n = -1;
                if (e) for (var a = e.querySelectorAll('.mbsc-segmented-input[name="' + this._name + '"]'), s = 0; s < a.length; s++) a[s] === this._el && (t = s), a[s].checked && (n = s);
                this._index !== t && -1 !== n && function (e, t) {
                    oo[e] && (oo[e].selectedIndex = t)
                }(this._name, n), -1 !== this._selectedIndex && (this._box.style.transform = "translateX(" + (this.s.rtl ? -1 : 1) * (this._selectedIndex - t) * 100 + "%)", this._animate = !0), -1 !== t && (this._index = t)
            }
        }, t.prototype._destroy = function () {
            xn(this._el, Is, this._onChange), this._unsubscribe && co(this._name, this._unsubscribe), this._unlisten && this._unlisten()
        }, t.defaults = {select: "single"}, t._name = "Segmented", t
    }(ja);
    var go = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), Object.defineProperty(t.prototype, "checked", {
            get: function () {
                return this._checked
            }, set: function (e) {
                this._toggle(e)
            }, enumerable: !0, configurable: !0
        }), t.prototype._template = function (e, t) {
            var n = this;
            return Ct(ro.Consumer, null, (function (a) {
                return function (e, t, n, a, s) {
                    return n._groupOptions(s), Ct("label", {className: n._cssClass}, Ct("input", {
                        ref: n._setEl,
                        "aria-labelledby": n._id,
                        checked: n._checked,
                        className: "mbsc-segmented-input mbsc-reset " + (e.inputClass || "") + n._theme + (n._checked ? " mbsc-selected" : ""),
                        disabled: n._disabled,
                        name: n._isMultiple ? e.name : n._name,
                        onChange: Te,
                        type: n._isMultiple ? "checkbox" : "radio",
                        value: n._value
                    }), Ct("div", {
                        ref: n._setBox,
                        className: "mbsc-segmented-selectbox" + n._theme + (n._animate ? " mbsc-segmented-selectbox-animate" : "") + (n._checked ? " mbsc-selected" : "")
                    }, Ct("div", {className: "mbsc-segmented-selectbox-inner" + n._theme + (n._index === n._selectedIndex || n._checked ? " mbsc-segmented-selectbox-inner-visible" : "") + (n._checked ? " mbsc-selected" : "")})), Ct(Ki, {
                        "aria-hidden": !0,
                        ariaLabel: e.ariaLabel,
                        className: "mbsc-segmented-button" + (n._checked ? " mbsc-selected" : "") + (t.hasFocus ? " mbsc-focus" : ""),
                        color: n._color,
                        disabled: n._disabled,
                        endIcon: e.endIcon,
                        endIconSrc: e.endIconSrc,
                        endIconSvg: e.endIconSvg,
                        icon: e.icon,
                        iconSrc: e.iconSrc,
                        iconSvg: e.iconSvg,
                        id: n._id,
                        ripple: e.ripple,
                        rtl: e.rtl,
                        startIcon: e.startIcon,
                        startIconSrc: e.startIconSrc,
                        startIconSvg: e.startIconSvg,
                        tag: "span",
                        tabIndex: -1,
                        theme: e.theme,
                        themeVariant: e.themeVariant
                    }, a))
                }(e, t, n, e.children, a)
            }))
        }, t
    }(fo), yo = {
        hasChildren: !0,
        parentClass: "mbsc-segmented-button",
        readAttrs: ["value"],
        readProps: ["disabled", "name"],
        renderToParent: !0,
        before: function (e, t) {
            t.select = "checkbox" === e.type ? "multiple" : "single", t.defaultChecked = e.checked, t.inputClass = e.getAttribute("class") || "";
            var n = e.parentNode, a = n.parentNode;
            if (null === a.getAttribute("mbsc-segmented-group")) {
                var s = en.createElement("div");
                s.setAttribute("mbsc-segmented-group", ""), a.insertBefore(s, n), s.appendChild(n), Yn(a.querySelectorAll('input[name="' + e.name + '"]'), (function (e) {
                    s.appendChild(e.parentNode)
                }))
            }
        }
    }, bo = {hasChildren: !0, parentClass: "mbsc-segmented"};

    function xo(e) {
        var t, n = e.disabled, a = e.selected, s = e.theme, i = e.timeSlot, r = e.onClick, o = e.onKeyDown,
            l = ((t = {}).onKeyDown = o, t);
        return Ct("div", c({
            className: "mbsc-timegrid-item" + (a ? " mbsc-selected" : "") + (n ? " mbsc-disabled" : "") + s,
            onClick: function () {
                return r(i)
            },
            tabIndex: n ? le : 0,
            "data-timeslot": i.value
        }, l), i.formattedValue)
    }

    var Do = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._setTime = function (e) {
                t._hook("onChange", {value: fa(t.s, e.value)})
            }, t._isDisabled = function (e) {
                if (e) {
                    var n = sa(fa(t.s, e)), a = t._invalids && t._invalids[n], s = t._valids && t._valids[n],
                        i = t.s.exclusiveEndDates;
                    if (s) {
                        for (var r = 0, o = s; r < o.length; r++) {
                            var l = o[r], c = l.end && (i ? e < +l.end : e <= +l.end);
                            if (l.start && e >= +l.start && c || l.allDay) return !1
                        }
                        return !0
                    }
                    if (a) {
                        for (var d = 0, h = a; d < h.length; d++) {
                            var u = h[d];
                            c = u.end && (i ? e < +u.end : e <= +u.end);
                            if (u.start && e >= +u.start && c || u.allDay) return !0
                        }
                        return !1
                    }
                }
                return !1
            }, t._onKeyDown = function (e) {
                if (e.keyCode === Qs) e.target.click(), e.preventDefault()
            }, t._setCont = function (e) {
                t._gridContEl = e && e.parentElement
            }, t
        }

        return l(t, e), t.prototype._render = function (e, t) {
            var n = this, a = this._prevS;
            this._cssClass = "mbsc-timegrid-container mbsc-font" + this._theme + this._rtl;
            var s = e.min !== a.min, i = e.max !== a.max, r = e.timeFormat,
                o = a.value && !e.value || e.value && +e.value !== this._value;
            s && (this._min = fe(e.min) ? le : ga(e.min, e, r)), i && (this._max = fe(e.max) ? le : ga(e.max, e, r));
            var l = ia(e.value || fa(e)), c = Ca(l, 1), d = this._selectedDate !== +l, h = e.invalid !== a.invalid,
                u = e.valid !== a.valid;
            (h || d) && (this._invalids = os(e.invalid, l, c, e, !0)), (u || d) && (this._valids = os(e.valid, l, c, e, !0)), o && (this._value = e.value && +e.value);
            var m = d || h || s || i || r !== a.timeFormat;
            if (m) {
                this._selectedDate = +l;
                var _ = Math.max(+l, +(this._min || -1 / 0)), p = Math.min(+c, +(this._max || 1 / 0) + 1),
                    v = 36e5 * e.stepHour + 6e4 * e.stepMinute;
                this._timeSlots = [], this._validTimes = [];
                for (var f = [], g = 0, y = +l; y < +c; y += v) if (p >= _ ? y >= _ && y < p : y >= _ || y < p) {
                    var b = {formattedValue: xa(r, fa(e, y), e), value: y};
                    f.push(b), 2 === g && (this._timeSlots.push(f), f = [], g = -1), this._isDisabled(y) || this._validTimes.push(b), g++
                }
                f.length && this._timeSlots.push(f)
            }
            if (this._isDisabled(this._value) || (o || m) && -1 === He(this._validTimes, (function (e) {
                return e.value === n._value
            }))) {
                var x = function (e, t) {
                    if (null == t || !e.length) return null;
                    for (var n = 0; n < e.length && t >= e[n];) n++;
                    if (n === e.length) return e[n - 1];
                    if (0 === n) return e[0];
                    var a = e[n - 1], s = e[n];
                    return t - a < s - t ? a : s
                }(this._validTimes.map((function (e) {
                    return e.value
                })), this._value);
                x && (clearTimeout(this._validationHandle), this._validationHandle = setTimeout((function () {
                    var e = Le(n._validTimes, (function (e) {
                        return e.value === x
                    }));
                    n._setTime(e)
                })))
            } else m && clearTimeout(this._validationHandle);
            this._valueChanged = this._valueChanged || o
        }, t.prototype._updated = function () {
            if (this._value !== le && (this._valueChanged || this._isOpen !== this.s.isOpen && this.s.isOpen)) {
                var e = this._lastValue !== le, t = this._gridContEl,
                    n = t.querySelector('[data-timeslot="' + this._value + '"]');
                n && setTimeout((function () {
                    var a = n.getBoundingClientRect(), s = a.top, i = a.height, r = t.getBoundingClientRect(),
                        o = r.top, l = r.height, c = Cn(t);
                    (s + i > o + l || s < o) && Nn(t, le, s - o + c - 5, e)
                })), this._valueChanged = !1, this._lastValue = this._value
            }
            this._isOpen = this.s.isOpen
        }, t.defaults = c({}, qn, {stepHour: 0, stepMinute: 30}), t._name = "Timegrid", t
    }(ja);
    var To = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e) {
            return Ct("div", {className: (t = this)._cssClass, ref: t._setCont}, t._timeSlots.map((function (e, n) {
                return Ct("div", {className: "mbsc-timegrid-row", key: n}, e.map((function (e, a) {
                    var s = t._isDisabled(e.value);
                    return Ct("div", {
                        className: "mbsc-timegrid-cell" + (s ? " mbsc-disabled" : ""),
                        key: a
                    }, Ct("div", {dangerouslySetInnerHTML: t.textParamMulti(3 * n + a)}), Ct(xo, {
                        disabled: s,
                        onKeyDown: t._onKeyDown,
                        selected: t._value === e.value,
                        timeSlot: e,
                        onClick: t._setTime,
                        theme: t._theme
                    }))
                })))
            })));
            var t
        }, t
    }(Do);
    Ti[io._name] = io, Ti[kr._name] = kr, Ti[To._name] = To;
    var So = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e) {
            return Jr(this, e, function (e, t, n, a) {
                var s = t._renderTabs, i = t._controls, r = t._activeSelect, o = t._rtl, l = t._theme;
                return Ct(kt, null, Ct("div", {className: "mbsc-datepicker mbsc-flex-col mbsc-datepicker-" + e.display + l + ("inline" === e.display ? " " + t._className + t._hb : "") + t._controlsClass}, t._headerText && "inline" === e.display && Ct("div", {className: "mbsc-picker-header" + l + t._hb}, t._headerText), s && Ct(po, {
                    rtl: e.rtl,
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                    value: t._activeTab,
                    onChange: t._changeActiveTab
                }, i.map((function (t, n) {
                    return Ct(go, {
                        key: n,
                        rtl: e.rtl,
                        theme: e.theme,
                        themeVariant: e.themeVariant,
                        value: t.name
                    }, t.title)
                }))), t._renderControls && Ct("div", {className: "mbsc-range-control-wrapper" + l}, Ct(po, {
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                    rtl: e.rtl,
                    value: r,
                    onChange: t._changeActiveSelect
                }, Ct(go, {
                    rtl: e.rtl,
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                    value: "start",
                    className: "mbsc-range-start" + (t._tempStartText ? " mbsc-range-value-nonempty" : "")
                }, Ct("div", {className: "mbsc-range-control-label" + l + o + ("start" === r ? " active" : "")}, e.rangeStartLabel), Ct("div", {className: "mbsc-range-control-value" + l + o + ("start" === r ? " active" : "") + (t._tempStartText ? "" : " mbsc-range-control-text-empty")}, t._tempStartText || e.rangeStartHelp), "start" === r && t._tempStartText && Ct(Pi, {
                    className: "mbsc-range-label-clear" + o,
                    onClick: t._clearStart,
                    svg: e.clearIcon,
                    theme: e.theme
                })), Ct(go, {
                    rtl: e.rtl,
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                    value: "end",
                    className: "mbsc-range-end" + (t._tempEndText ? " mbsc-range-value-nonempty" : "")
                }, Ct("div", {className: "mbsc-range-control-label" + l + o + ("end" === r ? " active" : "")}, e.rangeEndLabel), Ct("div", {className: "mbsc-range-control-value" + l + o + ("end" === r ? " active" : "") + (t._tempEndText ? "" : " mbsc-range-control-text-empty")}, t._tempEndText || e.rangeEndHelp), "end" === r && t._tempEndText && Ct(Pi, {
                    className: "mbsc-range-label-clear" + o,
                    onClick: t._clearEnd,
                    svg: e.clearIcon,
                    theme: e.theme
                })))), Ct("div", {
                    className: "mbsc-datepicker-tab-wrapper mbsc-flex mbsc-flex-1-1" + l,
                    ref: t._setWrapper
                }, i.map((function (e, n) {
                    var r = e.options;
                    return a && (r.renderCalendarHeader = a.header, r.renderDay = a.day, r.renderDayContent = a.dayContent), Ct("div", {
                        key: n,
                        className: "mbsc-flex mbsc-datepicker-tab mbsc-datepicker-tab-" + e.name + l + (s && e.name === t._activeTab || !s ? " mbsc-datepicker-tab-active" : "") + (s && "time" === e.name ? " mbsc-datepicker-time-modal" : "") + (s || 1 === i.length ? " mbsc-datepicker-tab-expand mbsc-flex-1-1" : "")
                    }, Ct(e.Component, c({}, r)))
                })))), n)
            }(e, this, e.children))
        }, t
    }(Ei);

    function Co(e) {
        return ve(e) ? en.querySelector(e) : e
    }

    var wo = {
        before: function (e, t) {
            var n = t.select, a = t.startInput, s = t.endInput;
            if ("range" === n && a && s) {
                var i = Co(a), r = Co(s), o = i && i.value, l = r && r.value;
                o && l && (t.defaultValue = o + Si + l)
            } else t.defaultValue = e.value;
            t.element = e
        }
    };

    function ko(e, t) {
        return function (n, a) {
            var s = {};
            if (ve(n)) {
                var i, r = en.querySelectorAll(n);
                return Yn(r, (function (n) {
                    var r = zn(e, n, a, t);
                    s[n.id] = r, i || (i = r)
                })), 1 === r.length ? i : s
            }
            return zn(e, n, a, t)
        }
    }

    v && (en.addEventListener("DOMContentLoaded", (function () {
        An(en)
    })), en.addEventListener("mbsc-enhance", (function (e) {
        An(e.target)
    })));
    var Mo = 0;

    function Eo(e, t, n) {
        "jsonp" === n ? function (e, t) {
            if (tn) {
                var n = en.createElement("script"), a = "mbscjsonp" + ++Mo;
                tn[a] = function (e) {
                    n.parentNode.removeChild(n), delete tn[a], e && t(e)
                }, n.src = e + (e.indexOf("?") >= 0 ? "&" : "?") + "callback=" + a, en.body.appendChild(n)
            }
        }(e, t) : function (e, t) {
            var n = new XMLHttpRequest;
            n.open("GET", e, !0), n.onload = function () {
                n.status >= 200 && n.status < 400 && t(JSON.parse(n.response))
            }, n.onerror = function () {
            }, n.send()
        }(e, t)
    }

    var No, Io = {getJson: Eo};

    function Lo(e) {
        return No || (No = Oo.luxon.DateTime.local().zoneName), e && "local" !== e ? e : No
    }

    w.http = Io;
    var Ho = function () {
        function e(e, t) {
            void 0 === t && (t = "utc"), this._mbsc = !0, t = Lo(t);
            var n = Oo.luxon.DateTime, a = {zone: t};
            if (this.zone = t, ge(e)) this.dt = n.utc().setZone(t); else if (ma(e) || pe(e)) this.dt = n.fromMillis(+e, a); else if (ve(e)) this.dt = n.fromISO(e, a); else if (me(e)) {
                for (var s = ["year", "month", "day", "hour", "minute", "second", "millisecond"], i = {}, r = 0; r < e.length && r < 7; r++) i[s[r]] = e[r] + (1 === r ? 1 : 0);
                Oo.version = Oo.version || function (e) {
                    var t = e.fromObject.toString().trim();
                    return /^(function )?\w*\(\w+\)/.test(t) ? 1 : 2
                }(n), 1 === Oo.version ? this.dt = n.fromObject(c({}, i, a)) : this.dt = n.fromObject(i, a)
            }
        }

        return e.prototype.clone = function () {
            return new e(this, this.zone)
        }, e.prototype.createDate = function (e, t, n, a, s, i, r) {
            return Oo.createDate({displayTimezone: this.zone}, e, t, n, a, s, i, r)
        }, e.prototype[Symbol.toPrimitive] = function (e) {
            return this.dt.toJSDate()[Symbol.toPrimitive](e)
        }, e.prototype.toDateString = function () {
            return this.dt.toFormat("ccc MMM dd yyyy")
        }, e.prototype.toISOString = function () {
            return this.dt.toISO()
        }, e.prototype.toJSON = function () {
            return this.dt.toISO()
        }, e.prototype.valueOf = function () {
            return this.dt.valueOf()
        }, e.prototype.getDate = function () {
            return this.dt.day
        }, e.prototype.getDay = function () {
            return this.dt.weekday % 7
        }, e.prototype.getFullYear = function () {
            return this.dt.year
        }, e.prototype.getHours = function () {
            return this.dt.hour
        }, e.prototype.getMilliseconds = function () {
            return this.dt.millisecond
        }, e.prototype.getMinutes = function () {
            return this.dt.minute
        }, e.prototype.getMonth = function () {
            return this.dt.month - 1
        }, e.prototype.getSeconds = function () {
            return this.dt.second
        }, e.prototype.getTime = function () {
            return this.valueOf()
        }, e.prototype.getTimezoneOffset = function () {
            return -this.dt.offset
        }, e.prototype.getUTCDate = function () {
            return this.dt.toUTC().day
        }, e.prototype.getUTCDay = function () {
            return this.dt.toUTC().weekday % 7
        }, e.prototype.getUTCFullYear = function () {
            return this.dt.toUTC().year
        }, e.prototype.getUTCHours = function () {
            return this.dt.toUTC().hour
        }, e.prototype.getUTCMilliseconds = function () {
            return this.dt.toUTC().millisecond
        }, e.prototype.getUTCMinutes = function () {
            return this.dt.toUTC().minute
        }, e.prototype.getUTCMonth = function () {
            return this.dt.toUTC().month - 1
        }, e.prototype.getUTCSeconds = function () {
            return this.dt.toUTC().second
        }, e.prototype.setMilliseconds = function (e) {
            return this.setter({millisecond: e})
        }, e.prototype.setSeconds = function (e, t) {
            return this.setter({second: e, millisecond: t})
        }, e.prototype.setMinutes = function (e, t, n) {
            return this.setter({minute: e, second: t, millisecond: n})
        }, e.prototype.setHours = function (e, t, n, a) {
            return this.setter({hour: e, minute: t, second: n, millisecond: a})
        }, e.prototype.setDate = function (e) {
            return this.setter({day: e})
        }, e.prototype.setMonth = function (e, t) {
            return e++, this.setter({month: e, day: t})
        }, e.prototype.setFullYear = function (e, t, n) {
            return this.setter({year: e, month: t, day: n})
        }, e.prototype.setTime = function (e) {
            return this.dt = Oo.luxon.DateTime.fromMillis(e), this.dt.valueOf()
        }, e.prototype.setTimezone = function (e) {
            e = Lo(e), this.zone = e, this.dt = this.dt.setZone(e)
        }, e.prototype.setUTCMilliseconds = function (e) {
            return 0
        }, e.prototype.setUTCSeconds = function (e, t) {
            return 0
        }, e.prototype.setUTCMinutes = function (e, t, n) {
            return 0
        }, e.prototype.setUTCHours = function (e, t, n, a) {
            return 0
        }, e.prototype.setUTCDate = function (e) {
            return 0
        }, e.prototype.setUTCMonth = function (e, t) {
            return 0
        }, e.prototype.setUTCFullYear = function (e, t, n) {
            return 0
        }, e.prototype.toUTCString = function () {
            return ""
        }, e.prototype.toTimeString = function () {
            return ""
        }, e.prototype.toLocaleDateString = function () {
            return ""
        }, e.prototype.toLocaleTimeString = function () {
            return ""
        }, e.prototype.setter = function (e) {
            return this.dt = this.dt.set(e), this.dt.valueOf()
        }, e
    }(), Oo = {
        luxon: le, version: le, parse: function (e, t) {
            return new Ho(e, t.dataTimezone || t.displayTimezone)
        }, createDate: function (e, t, n, a, s, i, r, o) {
            var l = e.displayTimezone;
            return ye(t) || ve(t) || ge(n) ? new Ho(t, l) : new Ho([t || 1970, n || 0, a || 1, s || 0, i || 0, r || 0, o || 0], l)
        }
    };

    function Yo(e) {
        return e && "local" !== e ? e : Fo.moment.tz.guess()
    }

    var Po = function () {
            function e(e, t) {
                this._mbsc = !0, this.timezone = Yo(t), this.init(e)
            }

            return e.prototype.clone = function () {
                return new e(this, this.timezone)
            }, e.prototype.createDate = function (e, t, n, a, s, i, r) {
                return Fo.createDate({displayTimezone: this.timezone}, e, t, n, a, s, i, r)
            }, e.prototype[Symbol.toPrimitive] = function (e) {
                return this.m.toDate()[Symbol.toPrimitive](e)
            }, e.prototype.toDateString = function () {
                return this.m.format("ddd MMM DD YYYY")
            }, e.prototype.toISOString = function () {
                return this.m.toISOString(!0)
            }, e.prototype.toJSON = function () {
                return this.m.toISOString()
            }, e.prototype.valueOf = function () {
                return this.m.valueOf()
            }, e.prototype.getDate = function () {
                return this.m.date()
            }, e.prototype.getDay = function () {
                return this.m.day()
            }, e.prototype.getFullYear = function () {
                return this.m.year()
            }, e.prototype.getHours = function () {
                return this.m.hours()
            }, e.prototype.getMilliseconds = function () {
                return this.m.milliseconds()
            }, e.prototype.getMinutes = function () {
                return this.m.minutes()
            }, e.prototype.getMonth = function () {
                return this.m.month()
            }, e.prototype.getSeconds = function () {
                return this.m.seconds()
            }, e.prototype.getTime = function () {
                return this.m.valueOf()
            }, e.prototype.getTimezoneOffset = function () {
                return -this.m.utcOffset()
            }, e.prototype.getUTCDate = function () {
                return this.utc().date()
            }, e.prototype.getUTCDay = function () {
                return this.utc().day()
            }, e.prototype.getUTCFullYear = function () {
                return this.utc().year()
            }, e.prototype.getUTCHours = function () {
                return this.utc().hours()
            }, e.prototype.getUTCMilliseconds = function () {
                return this.utc().milliseconds()
            }, e.prototype.getUTCMinutes = function () {
                return this.utc().minutes()
            }, e.prototype.getUTCMonth = function () {
                return this.utc().month()
            }, e.prototype.getUTCSeconds = function () {
                return this.utc().seconds()
            }, e.prototype.setMilliseconds = function (e) {
                return +this.m.set({millisecond: e})
            }, e.prototype.setSeconds = function (e, t) {
                return +this.m.set({seconds: e, milliseconds: t})
            }, e.prototype.setMinutes = function (e, t, n) {
                return +this.m.set({minutes: e, seconds: t, milliseconds: n})
            }, e.prototype.setHours = function (e, t, n, a) {
                return +this.m.set({hours: e, minutes: t, seconds: n, milliseconds: a})
            }, e.prototype.setDate = function (e) {
                return +this.m.set({date: e})
            }, e.prototype.setMonth = function (e, t) {
                return +this.m.set({month: e, date: t})
            }, e.prototype.setFullYear = function (e, t, n) {
                return +this.m.set({year: e, month: t, date: n})
            }, e.prototype.setTime = function (e) {
                return this.init(e), this.m.valueOf()
            }, e.prototype.setTimezone = function (e) {
                this.timezone = Yo(e), this.m.tz(this.timezone)
            }, e.prototype.setUTCMilliseconds = function (e) {
                return 0
            }, e.prototype.setUTCSeconds = function (e, t) {
                return 0
            }, e.prototype.setUTCMinutes = function (e, t, n) {
                return 0
            }, e.prototype.setUTCHours = function (e, t, n, a) {
                return 0
            }, e.prototype.setUTCDate = function (e) {
                return 0
            }, e.prototype.setUTCMonth = function (e, t) {
                return 0
            }, e.prototype.setUTCFullYear = function (e, t, n) {
                return 0
            }, e.prototype.toUTCString = function () {
                return ""
            }, e.prototype.toTimeString = function () {
                return ""
            }, e.prototype.toLocaleDateString = function () {
                return ""
            }, e.prototype.toLocaleTimeString = function () {
                return ""
            }, e.prototype.init = function (e) {
                var t = Fo.moment.tz, n = ge(e) || ve(e) || pe(e) || me(e) ? e : +e, a = ve(e) && Zn.test(e);
                this.m = a ? t(n, "HH:mm:ss", this.timezone) : t(n, this.timezone)
            }, e.prototype.utc = function () {
                return this.m.clone().utc()
            }, e
        }(), Fo = {
            moment: le, parse: function (e, t) {
                return new Po(e, t.dataTimezone || t.displayTimezone)
            }, createDate: function (e, t, n, a, s, i, r, o) {
                var l = e.displayTimezone;
                return ye(t) || ve(t) || ge(n) ? new Po(t, l) : new Po([t || 1970, n || 0, a || 1, s || 0, i || 0, r || 0, o || 0], l)
            }
        }, Vo = (tr._selector = "[mbsc-calendar-next]", ar), zo = (er._selector = "[mbsc-calendar-prev]", tr),
        Ro = (nr._selector = "[mbsc-calendar-today]", er), Ao = (ar._selector = "[mbsc-calendar-nav]", nr), Wo = ko(zo),
        Uo = ko(Ro), Bo = ko(Ao), jo = ko(Vo), Ko = ko(So, wo), Xo = ", ", Jo = "group_0";
    var qo = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._options = [], t._selectMap = new Map, t._onFilterChange = function (e) {
                var n = e.target.value;
                clearTimeout(t._debounce), t._filterInput.value = n, t._debounce = setTimeout((function () {
                    t._filter(n)
                }), 300)
            }, t._onFilterClear = function () {
                var e = t._filterInput;
                e && (e.value = ""), t._filter("")
            }, t._onResize = function (e) {
                t.setState({width: e.windowWidth})
            }, t._onChange = function (e) {
                var n = e.value;
                t._parsedValue = n, t._saveSelected(n), t._change(n), t._hook("onChange", e)
            }, t._onClose = function (e) {
                t._hook("onClose", e), t._filterText && setTimeout((function () {
                    return t._onFilterClear()
                }), 100)
            }, t._onWheelMove = function (e) {
                var n = e.wheelIndex, a = e.selection, s = e.dataItem;
                if (!t._selectOnScroll && !a && 1 === n) {
                    var i = Le(t._options, (function (e) {
                        return e.value === s.value
                    }));
                    return [s.isGroup ? s.value : i.group]
                }
                return le
            }, t._shouldValidate = function (e, n) {
                var a = e.selectMultiple !== n.selectMultiple || !e.filter && e.data !== n.data || t._groupChanged;
                return t._groupChanged = !1, a
            }, t._writeValue = function (e, n, a) {
                var s = e.value;
                if (e.value = n, t._isSelect) {
                    me(a) || (a = [a]);
                    for (var i = t.s.selectElement, r = i.options, o = !1, l = 0; l < r.length; l++) {
                        var c = r[l], d = c.selected;
                        c.selected = a.indexOf(c.value) > -1, d !== c.selected && (o = !0)
                    }
                    return o && On(i, Ns), o
                }
                return s !== n
            }, t._format = function (e) {
                var n = e[t.s.showGroupWheel ? 1 : 0], a = t.s.selectMultiple ? n : [n];
                return (a.map && a.map((function (e) {
                    return t._map ? t._map.get(e) : le
                })) || []).join(Xo)
            }, t._parse = function (e) {
                var n, a = t._map, s = t._reMap, i = t.s.selectMultiple, r = t.s.defaultSelection,
                    o = i ? r ? r.length !== le ? r : r.slice() : [] : r !== le ? r : null;
                if (t._parsedValue = e, a) if (i && !fe(e)) {
                    var l = [];
                    if (e.length === le) l.push(e); else if (ve(e)) for (var c = 0, d = e.split(Xo); c < d.length; c++) {
                        var h = d[c], u = s.get(h);
                        u !== le && l.push(u)
                    } else for (var m = 0, _ = e; m < _.length; m++) {
                        var p = _[m];
                        a.has(p) && l.push(p)
                    }
                    n = l
                } else a.has(e) ? n = e : ve(e) && s.has(e) && (n = s.get(e));
                if (n === le && (n = o), t.s.showGroupWheel) {
                    var v = i ? n[0] : n, f = Le(t._options, (function (e) {
                        return e.value === v
                    }));
                    return [f && f.group, n]
                }
                return [n]
            }, t._get = function (e) {
                var n = e[t.s.showGroupWheel ? 1 : 0];
                return t.s.selectMultiple ? n || [] : n
            }, t._valueEquals = function (e, n) {
                return t.s.selectMultiple ? Ne(e || [], n || []) : e === n
            }, t._validate = function (e) {
                var n = e.values, a = e.direction, s = e.wheels, i = e.index, r = t._disabled, o = t._selectOnScroll,
                    l = t.s.selectMultiple, c = t.s.showGroupWheel, d = c ? [t._disabledGroups, r] : [r], h = c ? 1 : 0,
                    u = t._get(n), m = {disabled: d};
                if (i === h || i === le) if (l) {
                    var _ = [];
                    u.forEach((function (e) {
                        r.get(e) || _.push(e)
                    })), m.valid = t._parse(_), i !== le && (m.valid[0] = n[0])
                } else {
                    if (fe(u) && !o) return m.valid = c ? [null, null] : [null], m;
                    var p = Mr(s[h], n[h], r, a);
                    if (c) {
                        var v = Le(t._options, (function (e) {
                            return e.value === p
                        }));
                        m.valid = [v.group, p]
                    } else m.valid = [p]
                } else {
                    var f = Mr(s[0], n[0], d[0], a), g = Le(t._options, (function (e) {
                        return !(e.group !== f || o && r.get(e.value))
                    })), y = t._touchUi || g.group === le ? g.value : g.group;
                    if (o) m.valid = [f, y]; else {
                        m.valid = [f, n[1]];
                        var b = l ? [y] : y, x = t._touchUi ? f : le;
                        m.indexes = [x, b]
                    }
                }
                return m
            }, t._setScroller = function (e) {
                t._scroller = e
            }, t._setInput = function (e) {
                t._filterInput = e && e.nativeElement
            }, t._saveSelected = function (e) {
                if (t.s.selectMultiple) {
                    var n = new Map;
                    Yn(e, (function (e) {
                        var a = t._map.get(e);
                        n.set(e, a)
                    })), t._selectMap = n
                }
            }, t
        }

        return l(t, e), t.prototype._change = function (e) {
        }, t.prototype.reloadOptionElements = function () {
            var e = this;
            this._optionsReloaded = !0, this._setOptionsFromElm(), setTimeout((function () {
                e.forceUpdate()
            }))
        }, t.prototype.setVal = function (e) {
            this._proxy("setVal", [e])
        }, t.prototype.getVal = function () {
            return fe(this._parsedValue) ? this._parsedValue : this._proxy("getVal")
        }, t.prototype.setTempVal = function (e) {
            this._proxy("setTempVal", [e])
        }, t.prototype.getTempVal = function () {
            return this._proxy("getTempVal")
        }, t.prototype.open = function () {
            this._proxy("open")
        }, t.prototype.close = function () {
            this._proxy("close")
        }, t.prototype._render = function (e) {
            var t = this._prevS, n = this._touchUi && (!e.selectMultiple || "ios" === (e.baseTheme || e.theme)),
                a = this._touchUi && !e.selectMultiple,
                s = e.element !== t.element || e.selectElement !== t.selectElement, i = e.data !== t.data,
                r = i || this._optionsReloaded, o = e.placeholder,
                l = e.display !== t.display || o !== t.placeholder || a !== this._selectOnScroll,
                c = r || s || e.invalid !== t.invalid || this._selectOnScroll !== a;
            if (this._selectOnScroll = a, e.showGroupWheel !== t.showGroupWheel && (this._groupChanged = !0), (s || l) && (this._isSelect = e.selectElement !== le, this._isSelect ? this._setOptionsFromElm() : e.element || (this._options = [])), (i || l) && e.data && this._createOptionList(e.data), c && (this._disabled = function (e, t) {
                var n = new Map;
                return e && e.forEach((function (e) {
                    e.disabled && n.set(e.value, !0)
                })), t && t.forEach((function (e) {
                    n.set(e, !0)
                })), n
            }(this._options, e.invalid), this._disabledGroups = function (e, t) {
                var n = new Map;
                return t && t.forEach((function (t) {
                    var a = t.group, s = t.value;
                    a && (n.has(a) || n.set(a, !0), e.get(s) || n.set(a, !1))
                })), n
            }(this._disabled, a ? this._options : le)), (c || n !== this._spaceAround || this._groupChanged || e.filter !== t.filter || e.selectMultiple !== t.selectMultiple) && this._createWheels(this._filterText, n), r || e.filter !== t.filter || e.touchUi !== t.touchUi || e.rows !== t.rows) {
                var d = e.filter ? 1 / 0 : this._wheels[0][e.showGroupWheel ? 1 : 0].data.length,
                    h = (this._respProps || {}).rows, u = this.props.rows,
                    m = this._touchUi ? e.rows : Math.min(h || u || 7, d);
                this._rows = u || m
            }
            (this._groupChanged || e.wheelWidth !== t.wheelWidth || e.filter !== t.filter) && (this._wheelWidth = e.wheelWidth || (e.filter ? e.showGroupWheel ? [150, 250] : 400 : le)), this._spaceAround = n, this._optionsReloaded = !1
        }, t.prototype._createOptionList = function (e) {
            var t = this.s, n = t.placeholder, a = [], s = new Map, i = new Map;
            this._selectMap.forEach((function (e, t) {
                s.set(t, e)
            }));
            var r = !1, o = function (e, n) {
                e && e.value !== le || (e = {
                    text: e,
                    value: e
                }), fe(e.value) && (r = !0), t.showGroupWheel && e.group === le && (e.group = Jo), s.set(e.value, e.text), i.set(e.text, e.value), a.splice(n, 0, e)
            };
            e.forEach(o), "inline" === t.display && this._selectOnScroll && n && !r && o({
                value: "",
                text: n
            }, 0), this._map = s, this._reMap = i, this._options = a
        }, t.prototype._proxy = function (e, t) {
            var n = this._inst || this._scroller;
            if (n) return n[e].apply(n, t)
        }, t.prototype._createWheels = function (e, t) {
            var n = this, a = this.s, s = a.selectMultiple, i = a.filter && e ? function (e, t) {
                if (!t) return e;
                var n = t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), a = new RegExp(n, "i");
                return e.filter((function (e) {
                    return a.test(e.text)
                }))
            }(this._options, e) : this._options, r = [], o = [], l = new Map;
            i.forEach((function (e) {
                var t = e.group, a = t && t !== Jo ? t : "", s = l.get(a),
                    i = {display: e.text, value: e.value, data: e, disabled: n._disabled.get(e.value)};
                s ? s.push(i) : l.set(a, [i])
            }));
            var c = l.get("");
            c && (r.push.apply(r, c), this._selectOnScroll && o.push({
                display: "",
                value: Jo
            })), l.forEach((function (e, t) {
                t && (r.push({display: t, isGroup: !0, value: t}), r.push.apply(r, e), o.push({
                    display: t,
                    value: t
                }), n._disabled.set(t, !0))
            }));
            var d = {checkmark: !0, circular: !1, closeOnTap: !s, data: r, multiple: s, spaceAround: t}, h = {
                checkmark: !1,
                circular: !1,
                cssClass: "mbsc-select-group-wheel" + (s ? " mbsc-select-group-wheel-multi" : ""),
                data: o,
                multiple: !1,
                spaceAround: t
            };
            this._noResults = a.filter && !i.length, this._wheels = a.showGroupWheel ? [[h, d]] : [[d]]
        }, t.prototype._setOptionsFromElm = function () {
            for (var e = this.s.selectElement, t = e.options, n = [], a = !1, s = !1, i = 0; i < t.length; i++) {
                var r = t[i], o = r.parentElement, l = "optgroup" === o.nodeName.toLowerCase() ? o.label : le;
                "" !== r.value ? n.push({
                    disabled: r.disabled,
                    group: l,
                    text: r.text,
                    value: r.value
                }) : a = !0, r.defaultSelected && (s = !0)
            }
            a || (e.insertBefore(new Option(""), e.childNodes[0] || null), s || (e.value = "")), this._createOptionList(n)
        }, t.prototype._filter = function (e) {
            !1 !== this._hook("onFilter", {filterText: e}) && (this._filterText = e, this._createWheels(e, this._spaceAround)), this.forceUpdate()
        }, t.defaults = c({}, bi.defaults, {
            dropdown: !0,
            filterEmptyText: "No results",
            filterPlaceholderText: "Search",
            rows: 5
        }), t._name = "Select", t
    }(ja);

    function Go(e) {
        var t = e.s;
        return Ct("div", {className: "mbsc-select-filter-cont" + e._theme + e._rtl}, Ct(Br, {
            ref: e._setInput,
            autoComplete: "off",
            className: "mbsc-select-filter",
            inputClass: "mbsc-select-filter-input",
            placeholder: t.filterPlaceholderText,
            onInput: e._onFilterChange,
            theme: t.theme,
            themeVariant: t.themeVariant,
            rtl: t.rtl,
            inputStyle: "box"
        }), e._filterText ? Ct(Pi, {
            className: "mbsc-select-filter-clear" + e._rtl,
            onClick: e._onFilterClear,
            svg: t.clearIcon,
            theme: t.theme
        }) : null)
    }

    function Zo(e) {
        return e._noResults ? Ct("div", {className: "mbsc-select-empty-text mbsc-flex" + e._theme}, e.s.filterEmptyText) : null
    }

    var Qo = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._filterRenderer = function () {
                return Go(t)
            }, t._filterEmptyRenderer = function () {
                return Zo(t)
            }, t
        }

        return l(t, e), t.prototype._template = function (e) {
            return function (e, t, n, a) {
                return Ct(qr, {
                    ariaLabel: e.ariaLabel,
                    activeElm: e.filter ? ".mbsc-select-filter-input" : le,
                    anchor: e.anchor,
                    animation: e.animation,
                    buttons: e.buttons,
                    cancelText: e.cancelText,
                    circular: e.circular,
                    className: (e.cssClass || "") + (t._noResults ? " mbsc-select-empty" : "") + " mbsc-select-scroller mbsc-select-scroller-" + e.display,
                    clearText: e.clearText,
                    closeOnEsc: e.closeOnEsc,
                    closeOnOverlayClick: e.closeOnOverlayClick,
                    closeText: e.closeText,
                    context: e.context,
                    defaultValue: e.defaultValue,
                    disabled: e.disabled,
                    display: e.display,
                    dropdown: e.dropdown,
                    element: e.element,
                    endIcon: e.endIcon,
                    endIconSrc: e.endIconSrc,
                    endIconSvg: e.endIconSvg,
                    error: e.error,
                    errorMessage: e.errorMessage,
                    focusOnClose: e.focusOnClose,
                    focusOnOpen: e.focusOnOpen,
                    focusTrap: e.focusTrap,
                    formatValue: t._format,
                    getValue: t._get,
                    headerText: e.headerText,
                    height: e.height,
                    inputComponent: e.inputComponent,
                    inputProps: e.inputProps,
                    inputStyle: e.inputStyle,
                    invalid: e.invalid,
                    itemHeight: e.itemHeight,
                    isOpen: e.isOpen,
                    label: e.label,
                    labelStyle: e.labelStyle,
                    maxHeight: e.maxHeight,
                    maxWheelWidth: e.maxWheelWidth,
                    maxWidth: e.maxWidth,
                    minWheelWidth: e.minWheelWidth,
                    modelValue: e.modelValue,
                    name: e.name,
                    onCancel: e.onCancel,
                    onChange: t._onChange,
                    onClose: t._onClose,
                    onOpen: e.onOpen,
                    onResize: t._onResize,
                    onTempChange: e.onTempChange,
                    onWheelMove: t._onWheelMove,
                    parseValue: t._parse,
                    placeholder: e.placeholder,
                    ref: t._setScroller,
                    renderInContent: t._filterEmptyRenderer,
                    renderItem: a ? a.item : e.renderItem,
                    renderPreContent: e.filter ? t._filterRenderer : le,
                    rows: t._rows,
                    rtl: e.rtl,
                    selectMultiple: e.selectMultiple,
                    selectOnScroll: t._selectOnScroll,
                    setText: e.setText,
                    shouldValidate: t._shouldValidate,
                    showArrow: e.showArrow,
                    showInput: e.showInput,
                    showOnClick: e.showOnClick,
                    showOnFocus: e.showOnFocus,
                    showOverlay: e.showOverlay,
                    startIcon: e.startIcon,
                    startIconSrc: e.startIconSrc,
                    startIconSvg: e.startIconSvg,
                    tagInput: e.tagInput,
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                    touchUi: t._touchUi,
                    validate: t._validate,
                    value: e.value,
                    valueEquality: t._valueEquals,
                    valueMap: t._map,
                    wheelWidth: t._wheelWidth,
                    wheels: t._wheels,
                    width: e.width,
                    writeValue: t._writeValue
                }, n)
            }(e, this, e.children)
        }, t
    }(qo), $o = {
        before: function (e, t) {
            if ("select" === e.nodeName.toLowerCase()) {
                var n = e;
                e.style.display = "none", t.inputElement || "inline" === t.display ? t.element = t.inputElement || e : (t.inputComponent = "input", t.showInput = !0), t.selectElement = n, t.selectMultiple !== le ? n.multiple = t.selectMultiple : t.selectMultiple = n.multiple;
                for (var a = [], s = n.options, i = 0; i < s.length; i++) {
                    var r = s[i];
                    r.defaultSelected && a.push(r.value)
                }
                a.length && (t.defaultValue = t.selectMultiple ? a : a[0])
            } else t.element = e, t.defaultValue = e.value
        }
    }, el = ko(Qo, $o), tl = new m;

    function nl(e) {
        return tl.subscribe(e)
    }

    function al(e) {
        tl.unsubscribe(e)
    }

    function sl(e, t) {
        t.style.left = e.endX + "px", t.style.top = e.endY + "px"
    }

    var il = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._render = function (e) {
            e.dragData !== this._prevS.dragData && (this._dragData = ve(e.dragData) ? JSON.parse(e.dragData.toString()) : e.dragData)
        }, t.prototype._updated = function () {
            var e = this, t = this.s.element || this._el;
            if (this._unlisten === le && t) {
                var n, a, s;
                t.classList.add("mbsc-draggable");
                var i = Dn(t).body;
                this._unlisten = Bi(t, {
                    onEnd: function (t) {
                        if (a) {
                            var r = c({}, t);
                            r.domEvent.preventDefault(), r.action = "externalDrop", r.event = e._dragData, r.create = !0, r.external = !0, r.eventName = "onDragEnd", tl.next(r), a = !1, i.removeChild(n)
                        }
                        clearTimeout(s)
                    }, onMove: function (t) {
                        var r = c({}, t);
                        r.event = e._dragData, r.clone = n, r.create = !0, r.external = !0, !a && r.isTouch || r.domEvent.preventDefault(), a ? (sl(t, n), r.eventName = "onDragMove", tl.next(r)) : (Math.abs(r.deltaX) > 7 || Math.abs(r.deltaY) > 7) && (clearTimeout(s), r.isTouch || (sl(t, n), i.appendChild(n), r.eventName = "onDragStart", tl.next(r), a = !0))
                    }, onStart: function (r) {
                        var o = c({}, r);
                        a || ((n = t.cloneNode(!0)).classList.add("mbsc-drag-clone"), o.event = e._dragData, o.create = !0, o.external = !0, o.isTouch && (s = setTimeout((function () {
                            sl(r, n), i.appendChild(n), o.clone = n, o.eventName = "onDragModeOn", tl.next(o), o.eventName = "onDragStart", tl.next(o), a = !0
                        }), 350)))
                    }
                })
            }
        }, t.prototype._destroy = function () {
            this._unlisten && (this._unlisten(), this._unlisten = le)
        }, t._name = "Draggable", t
    }(ja), rl = 1;

    function ol(e, t, n, a, s, i) {
        var r = n, o = a, l = new Map, d = [];
        s && (r = ga(s, t)), i ? o = ga(i, t) : s && (o = Ca(r, 1));
        var h = os(e, r, o, t);
        for (var u in h) if (u) for (var m = 0, _ = h[u]; m < _.length; m++) {
            var p = _[m];
            if (p.start) {
                if (!l.has(p)) {
                    var v = ga(p.start, t), f = ga(p.end, t) || v;
                    if (p.allDay && (v = fa(t, v.getFullYear(), v.getMonth(), v.getDate()), f = fa(t, (f = aa(t, !0, v, f)).getFullYear(), f.getMonth(), f.getDate(), 23, 59, 59, 999)), ea(r, o, v, f)) {
                        var g = c({}, p);
                        (t.dataTimezone || t.displayTimezone) && (g.start = v.toISOString(), g.end = f.toISOString()), l.set(p, !0), d.push(g)
                    }
                }
            } else d.push(p)
        }
        return d
    }

    function ll() {
        return "mbsc_" + rl++
    }

    function cl(e, t, n, a, s, i, r, o, l) {
        var c = t.color || s && s.color, d = t.start || t.date, h = t.recurring ? t.original.start : t.start,
            u = t.allDay || !h, m = $a(e, t), _ = d ? ga(d, m) : null, p = t.end ? ga(t.end, m) : null,
            v = aa(e, t.allDay, _, p, i), f = _ && v && !da(_, v), g = !f || da(_, n), y = !f || da(v, n),
            b = u || r && f && !g && !y, x = "", D = "";
        l || (r || o ? u || (x = _ ? xa(e.timeFormat, _, e) : "", D = p ? xa(e.timeFormat, p, e) : "") : (x = _ ? xa(e.dateFormat, _, e) : "", D = p ? xa(e.dateFormat, v, e) : ""));
        var T = b || !g && r ? "" : x, S = b || !y && r ? "" : D, C = t.title || t.text || "", w = C,
            k = w + (b ? "" : ", " + T + " - " + S), M = "DDDD, MMMM D, YYYY",
            E = !l && _ ? ", " + e.fromText + ": " + xa(M, _, e) + (u ? "" : ", " + x) : "",
            N = !l && p ? ", " + e.toText + ": " + xa(M, p, e) + (u ? "" : ", " + D) : "",
            I = s && s.name ? ", " + s.name : "";
        return {
            allDay: u,
            allDayText: b ? e.allDayText : "",
            ariaLabel: w + I + E + N,
            color: c,
            currentResource: s,
            date: +n,
            end: S,
            endDate: p || (_ ? new Date(_) : null),
            html: C,
            id: t.id,
            isMultiDay: f,
            lastDay: !b && f && y ? e.toText : "",
            original: t,
            position: {},
            resource: t.resource,
            slot: t.slot,
            start: T,
            startDate: _,
            style: {background: c, color: a && c ? Mn(c) : ""},
            title: w,
            tooltip: e.showEventTooltip ? t.tooltip || k : le,
            uid: t.occurrenceId ? t.occurrenceId : t.id
        }
    }

    function dl(e) {
        var t = [];
        if (e) for (var n = 0, a = e; n < a.length; n++) {
            var s = a[n];
            s.id === le && (s.id = ll()), t.push(s)
        }
        return t
    }

    function hl(e, t, n, a, s, i, r, o, l) {
        if ("start-end" === o) {
            var c = xi(e, a, t, n, i, r), d = xi(e, s, t, n, i, r);
            if (c) return c;
            if (d) return d
        } else for (var h = l ? s : ia(Ca(s, 1)), u = ia(a); u < h; u.setDate(u.getDate() + 1)) {
            var m = xi(e, u, t, n, i, r);
            if (m) return m
        }
        return !1
    }

    function ul(e, t, n, a, s) {
        for (var i = s.exclusiveEndDates ? n : ia(Ca(n, 1)), r = ia(t); r < i; r.setDate(r.getDate() + 1)) {
            var o = a[sa(r)];
            if (o) {
                if (!1 === s.eventOverlap || !1 === e.overlap) return o[0];
                for (var l = 0, c = o; l < c.length; l++) {
                    var d = c[l];
                    if (!1 === d.overlap) return d
                }
            }
        }
        return !1
    }

    var ml = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.print = Te, t._checkSize = 0, t._navService = new Ni, t._pageLoad = 0, t._selectedDates = {}, t._shouldScrollSchedule = 0, t._update = 0, t._onScroll = Me((function () {
                if (!t._isListScrolling && !t._viewChanged) for (var e in t._listDays) if (t._listDays[e]) {
                    var n = t._listDays[e];
                    if (n.offsetTop + n.offsetHeight - t._list.scrollTop > 0) {
                        +e !== t._selected && (t._shouldSkipScroll = !0, t._selectedChange(+e));
                        break
                    }
                }
            })), t._isListScrolling = 0, t._remote = 0, t._tempViewChanged = !1, t._onWeekDayClick = function (e) {
                e !== t._selected && (t._skipScheduleScroll = !0, t._selectedChange(e))
            }, t._onDayClick = function (e) {
                var n = e.date, a = +n, s = sa(n), i = t.state, r = xs(t._eventMap[s], t.s.eventOrder),
                    o = t._showEventPopover,
                    l = o === le ? !t._showEventLabels && !t._showEventList && !t._showSchedule : o,
                    c = !1 !== o && t._moreLabelClicked,
                    d = (l || c) && (!i.showPopover || i.showPopover && a !== i.popoverDate) && r && r.length > 0;
                e.events = r, t._isEventClick || t._resetSelection(), t._hook("onCellClick", e), t._moreLabelClicked = !1, e.disabled || a === t._selected || (t._navService.preventPageChange = !t._showEventList, t._skipScheduleScroll = !0, t._selectedChange(a)), d && setTimeout((function () {
                    t._anchor = e.target, t._popoverClass = t._popoverClass.replace(" mbsc-popover-hidden", ""), t.setState({
                        popoverDate: a,
                        popoverList: r.map((function (e) {
                            return t._getEventData(e, n)
                        })),
                        showPopover: !0
                    })
                })), t._isEventClick = !1
            }, t._onActiveChange = function (e) {
                if (e.scroll) t._viewDate = +e.date; else {
                    var n = t._getValidDay(e.date, e.dir), a = {activeDate: n};
                    t._active = n, t._viewDate = n, t._update++, t._skipScheduleScroll = e.pageChange && !e.nav, (e.pageChange || e.today) && (a.selectedDate = n, t._selectedChange(n, !0), t._navService.forcePageChange = !0), t.setState(a)
                }
            }, t._onGestureStart = function (e) {
                t._hidePopover()
            }, t._onDayDoubleClick = function (e) {
                t._dayClick("onCellDoubleClick", e)
            }, t._onDayRightClick = function (e) {
                t._dayClick("onCellRightClick", e)
            }, t._onCellHoverIn = function (e) {
                e.events = t._eventMap[sa(e.date)], t._hook("onCellHoverIn", e)
            }, t._onCellHoverOut = function (e) {
                e.events = t._eventMap[sa(e.date)], t._hook("onCellHoverOut", e)
            }, t._onEventHoverIn = function (e) {
                t._hoverTimer = setTimeout((function () {
                    t._isHover = !0, t._eventClick("onEventHoverIn", e)
                }), 150)
            }, t._onEventHoverOut = function (e) {
                clearTimeout(t._hoverTimer), t._isHover && (t._isHover = !1, t._eventClick("onEventHoverOut", e))
            }, t._onEventClick = function (e) {
                var n = t.s;
                t._handleMultipleSelect(e), !1 === t._eventClick("onEventClick", e) || n.selectMultipleEvents || n.eventDelete || (n.dragToCreate || n.clickToCreate) && !1 !== n.eventDelete || t._hidePopover()
            }, t._onEventDoubleClick = function (e) {
                t._eventClick("onEventDoubleClick", e)
            }, t._onEventRightClick = function (e) {
                t._eventClick("onEventRightClick", e)
            }, t._onEventDragEnd = function (e) {
                t._hook("onEventDragEnd", e)
            }, t._onEventDragStart = function (e) {
                t._hook("onEventDragStart", e)
            }, t._onEventDragEnter = function (e) {
                t._hook("onEventDragEnter", e)
            }, t._onEventDragLeave = function (e) {
                t._hook("onEventDragLeave", e)
            }, t._onLabelHoverIn = function (e) {
                t._hoverTimer = setTimeout((function () {
                    t._isHover = !0, t._labelClick("onEventHoverIn", e)
                }), 150)
            }, t._onLabelHoverOut = function (e) {
                clearTimeout(t._hoverTimer), t._isHover && (t._isHover = !1, t._labelClick("onEventHoverOut", e))
            }, t._onLabelClick = function (e) {
                t._handleMultipleSelect(e), t._hook("onLabelClick", e), t._labelClick("onEventClick", e), t._isEventClick = !0, e.label || (t._moreLabelClicked = !0)
            }, t._onLabelDoubleClick = function (e) {
                t._labelClick("onEventDoubleClick", e)
            }, t._onLabelRightClick = function (e) {
                t._labelClick("onEventRightClick", e)
            }, t._onCellClick = function (e) {
                t._resetSelection(), t._cellClick("onCellClick", e)
            }, t._onCellDoubleClick = function (e) {
                t._cellClick("onCellDoubleClick", e)
            }, t._onCellRightClick = function (e) {
                t._cellClick("onCellRightClick", e)
            }, t._proxy = function (e) {
                t._hook(e.type, e)
            }, t._onPageChange = function (e) {
                setTimeout((function () {
                    t._hidePopover()
                })), t._isPageChange = !0, t._hook("onPageChange", e)
            }, t._onPageLoading = function (e) {
                var n = t.s, a = os(t._events, e.viewStart, e.viewEnd, n);
                t._colorsMap = os(n.colors, e.viewStart, e.viewEnd, n), t._invalidsMap = os(n.invalid, e.viewStart, e.viewEnd, n, !0), t._validsMap = os(n.valid, e.viewStart, e.viewEnd, n, !0), t._eventMap = a, t._firstDay = ca(e.firstDay, n, t._firstWeekDay), t._lastDay = e.lastDay, t._labelsMap = t._marksMap = le, n.labels || !t._showEventLabels && !t._showEventCount ? n.marked || (t._marksMap = a) : t._labelsMap = a, e.viewChanged && t._hook("onPageLoading", e)
            }, t._onPageLoaded = function (e) {
                t._shouldAnimateScroll = t._isPageChange, t._isPageChange = !1;
                var n = t._eventListType;
                if (t._showEventList && (!t._showCalendar || "day" !== n)) {
                    var a = t.s, s = e.month, i = t._showEventList && s && "month" === n, r = i ? s : e.firstDay,
                        o = i ? a.getDate(a.getYear(s), a.getMonth(s) + t._eventListSize, 1) : e.lastDay;
                    t._setEventList(r, o)
                }
                t._hook("onPageLoaded", e)
            }, t._onPopoverClose = function () {
                t._hidePopover()
            }, t._onResize = function (e) {
                var n;
                if (t._showEventList && v) {
                    var a = e.target, s = a.offsetHeight, i = a.getBoundingClientRect().top;
                    n = s - t._list.getBoundingClientRect().top + i > 170
                }
                t.setState({height: e.height, isListScrollable: n, width: e.width})
            }, t._onSelectedEventsChange = function (e) {
                t._emit("selectedEventsChange", e), t._hook("onSelectedEventsChange", {events: e})
            }, t._getDragDates = function (e, n, a) {
                for (var s = {}, i = t._firstWeekDay, r = aa(t.s, a.allDay, e, n, !0), o = ia(Ca(r, 1)), l = ia(e); l < o; l.setDate(l.getDate() + 1)) {
                    var c = l.getDay(), d = i - c > 0 ? 7 : 0;
                    da(e, l) || c === i ? s[sa(l)] = {
                        event: a,
                        width: 100 * Math.min(oa(l, r) + 1, 7 + i - c - d)
                    } : s[sa(l)] = {}
                }
                return s
            }, t._onLabelUpdateModeOn = function (e) {
                var n = e.create ? t._tempEvent : e.data;
                if (n) {
                    var a = ga(n.start), s = ga(n.end || a);
                    t.setState({
                        isTouchDrag: !0,
                        labelDragData: {draggedEvent: n, originDates: e.external ? le : t._getDragDates(a, s, n)}
                    })
                }
            }, t._onLabelUpdateModeOff = function (e) {
                var n = e.create ? t._tempEvent : e.data;
                t._hook("onEventDragEnd", {
                    domEvent: e.domEvent,
                    event: n,
                    source: "calendar"
                }), t.setState({isTouchDrag: !1, labelDragData: le})
            }, t._onLabelUpdateStart = function (e) {
                var n = t.s, a = t._el;
                if (n.externalDrag && e.drag && !e.create) {
                    var s = a.querySelector(".mbsc-calendar-label[data-id='" + e.data.id + "']") || Hn(e.domEvent.target, ".mbsc-list-item");
                    if (s) {
                        var i = s.cloneNode(!0), r = i.classList;
                        i.style.display = "none", r.add("mbsc-drag-clone", "mbsc-schedule-drag-clone", "mbsc-font"), r.remove("mbsc-calendar-label-hover", "mbsc-hover", "mbsc-focus", "mbsc-active"), t._clone = i, t._body = Dn(a).body, t._body.appendChild(i), t._eventDropped = !1, tl.next(c({}, e, {
                            create: !0,
                            event: e.data,
                            eventName: "onDragStart",
                            external: !0,
                            from: t
                        }))
                    }
                }
                var o = t._showWeekNumbers ? a.querySelector(".mbsc-calendar-week-nr").getBoundingClientRect().width : 0,
                    l = a.querySelectorAll(".mbsc-calendar-slide-active")[0], d = l.getBoundingClientRect(),
                    h = a.querySelector(".mbsc-calendar-week-days"), u = l.querySelectorAll(".mbsc-calendar-row"),
                    m = /click/.test(e.domEvent.type);
                if (t._areaTop = 0, h) {
                    var _ = h.getBoundingClientRect();
                    t._areaTop = _.top + _.height
                }
                t._areaLeft = d.left + (n.rtl ? 0 : o), t._areaBottom = d.top + d.height, t._areaRight = t._areaLeft + d.width - (n.rtl ? o : 0), t._calCellWidth = (t._areaRight - t._areaLeft) / 7;
                var p = 0;
                if (t._rowTops = [], u.forEach((function (n, a) {
                    var s = n.getBoundingClientRect().top - t._areaTop;
                    t._rowTops.push(s), e.endY - t._areaTop > s && (p = a)
                })), e.create) {
                    var v = ke((n.rtl ? t._areaRight - e.endX : e.endX - t._areaLeft) / t._calCellWidth),
                        f = Ca(t._firstDay, 7 * p + v), g = new Date(f.getFullYear(), f.getMonth(), f.getDate()),
                        y = Ca(g, 1), b = n.exclusiveEndDates ? y : new Date(+y - 1),
                        x = n.extendDefaultEvent ? n.extendDefaultEvent({start: g}) : le;
                    t._tempEvent = c({allDay: !0, end: b, id: ll(), start: g, title: n.newEventText}, e.event, x)
                }
                m || t._hook("onEventDragStart", {
                    action: e.create ? "create" : e.resize ? "resize" : "move",
                    domEvent: e.domEvent,
                    event: e.create ? t._tempEvent : e.data,
                    source: "calendar"
                })
            }, t._onLabelUpdateMove = function (e) {
                var n = t.s, a = e.create ? t._tempEvent : e.data, s = c({}, a), i = t.state.labelDragData,
                    r = a.allDay ? le : n;
                if (n.externalDrag && e.drag && !e.create && t._clone && (tl.next(c({}, e, {
                    clone: t._clone,
                    create: !0,
                    event: e.data,
                    eventName: "onDragMove",
                    external: !0,
                    from: t
                })), !t._onCalendar)) return sl(e, t._clone), void (i && i.draggedEvent || t.setState({labelDragData: {draggedEvent: s}}));
                if (e.endY > t._areaTop && e.endY < t._areaBottom && e.endX > t._areaLeft && e.endX < t._areaRight) {
                    var o = ke((n.rtl ? t._areaRight - e.endX : e.endX - t._areaLeft) / t._calCellWidth),
                        l = ke((n.rtl ? t._areaRight - e.startX : e.startX - t._areaLeft) / t._calCellWidth), d = 0,
                        h = 0;
                    t._rowTops.forEach((function (n, a) {
                        e.startY - t._areaTop > n && (h = a), e.endY - t._areaTop > n && (d = a)
                    }));
                    var u = 7 * (d - h) + (o - l);
                    if (o !== t._tempDay || d !== t._tempWeek) {
                        var m = ga(a.start, r), _ = ga(a.end, r) || m, p = Ts(a.dragInTime, le, n.dragInTime), v = m,
                            f = _;
                        if (e.external) {
                            var g = $n(m), y = +_ - +m;
                            p && (v = fa(n, +Ca(t._firstDay, 7 * d + o) + g), f = fa(n, +v + y))
                        } else if (e.drag) {
                            if (!p) return;
                            v = Ca(m, u), f = Ca(_, u)
                        } else {
                            var b = n.rtl ? -1 : 1,
                                x = e.create ? d === h ? e.deltaX * b > 0 : u > 0 : "end" === e.direction, D = oa(m, _);
                            x ? f = Ca(_, Math.max(-D, u)) : v = Ca(m, Math.min(D, u)), f < v && (x ? f = fa(r, v) : v = fa(r, f))
                        }
                        s.start = v, s.end = f, /mbsc-popover-hidden/.test(t._popoverClass) || (t._popoverClass = t._popoverClass + " mbsc-popover-hidden"), t.setState({
                            labelDragData: {
                                draggedDates: t._getDragDates(v, f, s),
                                draggedEvent: s,
                                originDates: i && i.originDates
                            }
                        }), t._tempDay = o, t._tempWeek = d
                    }
                }
            }, t._onLabelUpdateEnd = function (e) {
                var n = t.s, a = t.state, s = e.create, i = a.labelDragData || {}, r = s ? t._tempEvent : e.data,
                    o = i.draggedEvent || r, l = ga(r.start), d = ga(r.end), h = ga(o.start), u = ga(o.end),
                    m = s || +l != +h || +d != +u, _ = {allDay: r.allDay, endDate: u, original: r, startDate: h},
                    p = !1;
                n.externalDrag && e.drag && !e.create && t._clone && (tl.next(c({}, e, {
                    action: "externalDrop",
                    create: !0,
                    event: e.data,
                    eventName: "onDragEnd",
                    external: !0,
                    from: t
                })), t._body.removeChild(t._clone), t._clone = le, t._onCalendar || (p = !0, t._eventDropped && (e.event = r, t._onEventDelete(e))));
                var v = e.action || (i.draggedEvent ? "drag" : "click"), f = !p && (!m || t._onEventDragStop({
                    action: v,
                    collision: hl(n, t._invalidsMap, t._validsMap, h, u, t._minDate, t._maxDate, n.invalidateEvent, n.exclusiveEndDates),
                    create: s,
                    domEvent: e.domEvent,
                    event: _,
                    from: e.from,
                    overlap: ul(r, h, u, t._eventMap, n),
                    source: "calendar"
                })), g = a.isTouchDrag && !p && (!s || f);
                g || "click" === v || t._hook("onEventDragEnd", {
                    domEvent: e.domEvent,
                    event: r,
                    source: "calendar"
                }), t.setState({
                    isTouchDrag: g,
                    labelDragData: g ? {
                        draggedEvent: f ? o : c({}, r),
                        originDates: f ? t._getDragDates(h, u, _.original) : i.originDates
                    } : {}
                }), e.drag && t._hidePopover(), t._tempWeek = -1, t._tempDay = -1
            }, t._onEventDragStop = function (e) {
                var n = t.s, a = e.action, s = e.resource, i = e.slot, r = e.collision, o = e.overlap, l = e.create,
                    d = e.source, h = e.event, u = h.original, m = u.recurring ? u.original : u, _ = c({}, m),
                    p = c({}, m), v = u.timezone, f = Jn(u.start, n, v), g = Jn(h.startDate, n, v),
                    y = Jn(h.endDate, n, v), b = h.allDay, x = p.recurring;
                x ? p.recurringException = is(p.recurringException).concat([f]) : (p.allDay = b, p.start = g, p.end = y, s !== le && (p.resource = s), i !== le && (p.slot = i));
                var D = !1, T = x ? c({}, m) : m;
                return (l || x) && (x && delete T.recurring, (x || T.id === le) && (T.id = ll()), s !== le && (T.resource = s), i !== le && (T.slot = i), T.start = g, T.end = y, T.allDay = b, D = !1 !== t._hook("onEventCreate", c({
                    action: a,
                    domEvent: e.domEvent,
                    event: T,
                    source: d
                }, x && {originEvent: u})), !1 === r && !1 === o || (D = !1, t._hook("onEventCreateFailed", c({
                    action: a,
                    event: T,
                    invalid: r,
                    overlap: o,
                    source: d
                }, x && {originEvent: u})))), l && !x || (D = !1 !== t._hook("onEventUpdate", c({
                    domEvent: e.domEvent,
                    event: p,
                    oldEvent: _,
                    source: d
                }, x && {
                    newEvent: T,
                    oldEventOccurrence: u
                })), !1 === r && !1 === o || (D = !1, t._hook("onEventUpdateFailed", c({
                    event: p,
                    invalid: r,
                    oldEvent: _,
                    overlap: o,
                    source: d
                }, x && {
                    newEvent: T,
                    oldEventOccurrence: u
                })))), D && (e.from && (e.from._eventDropped = !0), (l || x) && (t._events.push(T), t._triggerCreated = {
                    action: a,
                    event: T,
                    source: d
                }), l && !x || (x ? (h.id = T.id, h.original = T, m.recurringException = p.recurringException) : (m.start = g, m.end = y, m.allDay = b, s !== le && (m.resource = s), i !== le && (m.slot = i)), t._triggerUpdated = {
                    event: m,
                    oldEvent: _,
                    source: d
                }), t._refresh = !0, "calendar" !== d && t.forceUpdate()), D
            }, t._onExternalDrag = function (e) {
                var n = t.s, a = e.clone, s = e.from === t, i = !s && n.externalDrop,
                    r = s && n.externalDrag && !n.dragToMove, o = t.state.labelDragData;
                if (t._showCalendar && (i || n.externalDrag)) {
                    var l = !r && e.endY > t._areaTop && e.endY < t._areaBottom && e.endX > t._areaLeft && e.endX < t._areaRight;
                    switch (e.eventName) {
                        case"onDragModeOff":
                            i && t._onLabelUpdateModeOff(e);
                            break;
                        case"onDragModeOn":
                            i && t._onLabelUpdateModeOn(e);
                            break;
                        case"onDragStart":
                            i ? t._onLabelUpdateStart(e) : s && (t._onCalendar = !0);
                            break;
                        case"onDragMove":
                            if (!s && !i) return;
                            l ? (t._onCalendar || t._hook("onEventDragEnter", {
                                domEvent: e.domEvent,
                                event: e.event,
                                source: "calendar"
                            }), (s || i) && (a.style.display = "none"), i && t._onLabelUpdateMove(e), t._onCalendar = !0) : t._onCalendar && (t._hook("onEventDragLeave", {
                                domEvent: e.domEvent,
                                event: e.event,
                                source: "calendar"
                            }), a.style.display = "table", (!s || o && o.draggedEvent) && t.setState({
                                labelDragData: {
                                    draggedDates: {},
                                    draggedEvent: s ? o && o.draggedEvent : le,
                                    originDates: s ? o && o.originDates : le
                                }
                            }), t._tempWeek = -1, t._tempDay = -1, t._onCalendar = !1);
                            break;
                        case"onDragEnd":
                            i && (l ? t._onLabelUpdateEnd(e) : (t.setState({labelDragData: le}), t._hook("onEventDragEnd", {
                                domEvent: e.domEvent,
                                event: e.event,
                                source: "calendar"
                            })))
                    }
                }
            }, t._onEventDelete = function (e) {
                var n, a = t.s;
                if ((a.eventDelete !== le || a.dragToCreate || a.clickToCreate) && !1 !== a.eventDelete) {
                    for (var s, i, r, o = !1, l = !1, d = !1, h = e.event, u = h, m = a.selectMultipleEvents, _ = m ? t._selectedEventsMap : ((n = {})[h.id] = h, n), p = [], v = [], f = [], g = {}, y = [], b = 0, x = Pe(_); b < x.length; b++) {
                        var D = x[b];
                        if (D.recurring) {
                            u = D, l = !0;
                            var T = (s = D.original).id;
                            g[T] ? r = g[T] : (i = c({}, s), r = c({}, s), v.push(s), p.push(i), f.push(r), g[T] = r);
                            var S = Jn(D.start, a);
                            r.recurringException = is(r.recurringException).concat([S])
                        } else d = !0, h = D, y.push(D)
                    }
                    if (l) if (!1 !== t._hook("onEventUpdate", {
                        domEvent: e.domEvent,
                        event: r,
                        events: m ? f : le,
                        isDelete: !0,
                        oldEvent: m ? le : i,
                        oldEventOccurrence: u,
                        oldEvents: m ? p : le
                    })) {
                        o = !0;
                        for (var C = 0, w = v; C < w.length; C++) {
                            var k = w[C], M = g[k.id];
                            k.recurringException = M.recurringException
                        }
                        t._triggerUpdated = {
                            event: s,
                            events: m ? v : le,
                            oldEvent: m ? le : i,
                            oldEvents: m ? p : le,
                            source: e.source
                        }
                    }
                    if (d) !1 !== t._hook("onEventDelete", {
                        domEvent: e.domEvent,
                        event: h,
                        events: m ? y : le
                    }) && (o = !0, t._events = t._events.filter((function (e) {
                        return !_[e.id]
                    })), t._selectedEventsMap = {}, t._triggerDeleted = {
                        event: h,
                        events: m ? y : le,
                        source: e.source
                    });
                    o && (t._hidePopover(), t.refresh())
                }
            }, t._setEl = function (e) {
                t._el = e ? e._el || e : null, t._calendarView = e
            }, t._setList = function (e) {
                t._list = e
            }, t._setPopoverList = function (e) {
                t._popoverList = e && e._el
            }, t._onKeyDown = function (e) {
                9 === e.keyCode && t._resetSelection()
            }, t
        }

        return l(t, e), t.prototype.addEvent = function (e) {
            for (var t = [], n = 0, a = dl(me(e) ? e : [e]); n < a.length; n++) {
                var s = a[n];
                t.push("" + s.id), this._events.push(s)
            }
            return this.refresh(), t
        }, t.prototype.getEvents = function (e, t) {
            return ol(this._events, this.s, this._firstDay, this._lastDay, e, t)
        }, t.prototype.getInvalids = function (e, t) {
            return ol(this.s.invalid, this.s, this._firstDay, this._lastDay, e, t)
        }, t.prototype.getSelectedEvents = function () {
            return Pe(this._selectedEventsMap)
        }, t.prototype.setEvents = function (e) {
            for (var t = [], n = dl(e), a = 0, s = n; a < s.length; a++) {
                var i = s[a];
                t.push("" + i.id)
            }
            return this._events = n, this.refresh(), t
        }, t.prototype.setSelectedEvents = function (e) {
            this._selectedEventsMap = (e || []).reduce((function (e, t) {
                return t.occurrenceId ? e[t.occurrenceId] = t : e[t.id] = t, e
            }), {}), this.forceUpdate()
        }, t.prototype.removeEvent = function (e) {
            for (var t = me(e) ? e : [e], n = this._events, a = n.length, s = 0, i = t; s < i.length; s++) for (var r = i[s], o = !1, l = 0; !o && l < a;) {
                var c = n[l];
                c.id !== r && c.id !== r.id || (o = !0, n.splice(l, 1)), l++
            }
            this.refresh()
        }, t.prototype.navigateToEvent = function (e) {
            this._navigateToEvent = e, this._shouldScrollSchedule++, this.navigate(e.start, !0)
        }, t.prototype.navigate = function (e, t) {
            var n = +ga(e), a = this._navigateToEvent !== le, s = n !== this._selectedDateTime;
            (s || a) && (this._shouldAnimateScroll = !!t), this.s.selectedDate === le ? !this._showSchedule && !this._showTimeline || s ? this.setState({selectedDate: n}) : (this._shouldScrollSchedule++, this.forceUpdate()) : (s || a) && this._selectedChange(n)
        }, t.prototype.updateEvent = function (e) {
            for (var t = me(e) ? e : [e], n = this._events, a = n.length, s = 0, i = t; s < i.length; s++) for (var r = i[s], o = !1, l = 0; !o && l < a;) {
                n[l].id === r.id && (o = !0, n.splice(l, 1, c({}, r))), l++
            }
            this.refresh()
        }, t.prototype.refresh = function () {
            this._refresh = !0, this.forceUpdate()
        }, t.prototype._render = function (e, t) {
            var n, a = this, s = this._prevS, i = this._showDate,
                r = e.displayTimezone !== s.displayTimezone || e.dataTimezone !== s.dataTimezone, o = !1, l = !1,
                c = this._tempViewChanged;
            if (this._tempViewChanged = !1, this._colorEventList = e.eventTemplate === le && e.renderEvent === le && e.colorEventList, e.exclusiveEndDates === le && (e.exclusiveEndDates = !!e.displayTimezone), fe(e.min) ? this._minDate = -1 / 0 : s.min !== e.min && (this._minDate = +ga(e.min)), fe(e.max) ? this._maxDate = 1 / 0 : s.max !== e.max && (this._maxDate = +ga(e.max)), e.selectedDate !== le ? n = +ga(e.selectedDate) : (this._defaultDate || (this._defaultDate = +(e.defaultSelectedDate !== le ? ga(e.defaultSelectedDate) : va(fa(e)))), n = t.selectedDate || this._selectedDateTime || this._defaultDate), this.eventList = t.eventList || [], e.data !== s.data && (this._events = dl(e.data), this._refresh = !0), (e.invalid !== s.invalid || e.colors !== s.colors || r) && (this._refresh = !0), JSON.stringify(e.view) !== JSON.stringify(s.view) || e.firstDay !== s.firstDay || e.dragTimeStep !== s.dragTimeStep) {
                var d = {
                    c: "eventcalendar",
                    dragTimeStep: e.dragTimeStep,
                    eventListSize: this._eventListSize,
                    eventListType: this._eventListType,
                    firstDay: e.firstDay,
                    resourcesLength: e.resources ? e.resources.length : 0,
                    scheduleEndDay: this._scheduleEndDay,
                    scheduleEndTime: this._scheduleEndTime,
                    scheduleStartDay: this._scheduleStartDay,
                    scheduleStartTime: this._scheduleStartTime,
                    scheduleTimeCellStep: this._scheduleTimeCellStep,
                    scheduleTimeLabelStep: this._scheduleTimeLabelStep,
                    scheduleTimezones: this._scheduleTimezones,
                    scheduleType: this._scheduleType,
                    showCalendar: this._showCalendar,
                    showEventCount: this._showEventCount,
                    showEventLabels: this._showEventLabels,
                    showEventList: this._showEventList,
                    showMarked: !!e.marked,
                    showSchedule: this._showSchedule,
                    showScheduleDays: this._showScheduleDays,
                    slotsLength: e.slots ? e.slots.length : 0,
                    timelineEndDay: this._timelineEndDay,
                    timelineEndTime: this._timelineEndTime,
                    timelineListing: this._timelineListing,
                    timelineResolution: this._timelineResolution,
                    timelineResolutionVertical: this._timelineResolutionVertical,
                    timelineStartTime: this._timelineStartTime,
                    timelineTimeCellStep: this._timelineTimeCellStep,
                    timelineTimeLabelStep: this._timelineTimeLabelStep,
                    timelineType: this._timelineType,
                    v: Wa,
                    view: e.view
                };
                this._remote++, Pa(this), Va("remote", this, d, (function (e) {
                    if (a._remote--, !a._remote) {
                        for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                            var s = n[t];
                            a[s] = e[s]
                        }
                        Fa(e.notification), a._tempViewChanged = e._viewChanged, a.forceUpdate()
                    }
                }), "comp_" + this._uid)
            }
            this._showDate = !this._showScheduleDays && (this._showSchedule && "day" === this._scheduleType || this._showEventList && "day" === this._eventListType && this._eventListSize < 2);
            var h = this._pageLoad;
            if ((this._refresh || e.locale !== s.locale || e.theme !== s.theme) && (o = !0, this._pageLoad++), e.resources !== s.resources && (this._resourcesMap = (e.resources || []).reduce((function (e, t) {
                return e[t.id] = t, e
            }), {})), e.selectMultipleEvents && e.selectedEvents !== s.selectedEvents && (this._selectedEventsMap = (e.selectedEvents || []).reduce((function (e, t) {
                return t.occurrenceId ? e[t.occurrenceId] = t : e[t.id] = t, e
            }), {})), this._selectedEventsMap === le && (this._selectedEventsMap = {}), e.refDate !== s.refDate && (this._refDate = ga(e.refDate)), this._refDate || this._showCalendar || !this._showSchedule && !this._showTimeline || (this._refDate = ia(new Date)), n !== this._selectedDateTime && (this._viewDate = n), e.cssClass === s.cssClass && e.className === s.className && e.class === s.class || (this._checkSize++, this._viewChanged = c = !0), c && this._viewDate && n !== this._viewDate && (l = !0, n = this._viewDate), n !== this._selectedDateTime || c) {
                var u = this._showCalendar && (this._showSchedule || this._showTimeline || this._showEventList) ? +Di(new Date(n), e, this._minDate, this._maxDate, le, le, 1) : ue(n, this._minDate, this._maxDate);
                u = this._getValidDay(u), (n !== u || l) && (n = u, setTimeout((function () {
                    a._selectedChange(n)
                }))), this._skipScheduleScroll || this._shouldScrollSchedule++, this._selectedDateTime = n
            }
            var m = ia(new Date(n)), _ = +m;
            _ === this._selected && i === this._showDate && e.locale === s.locale && s.dateFormatLong === e.dateFormatLong || (this._selectedDateHeader = this._showDate ? xa(e.dateFormatLong, m, e) : ""), _ === this._selected && e.dataTimezone === s.dataTimezone && e.displayTimezone === s.displayTimezone || (this._shouldAnimateScroll = this._shouldAnimateScroll !== le ? this._shouldAnimateScroll : this._selected !== le, this._selected = _, this._selectedDates = {}, this._selectedDates[+pa(e, new Date(_))] = !0, this._active = _, o = !0, l = !0), o && this._showCalendar && ("day" === this._eventListType || "day" === this._scheduleType || "day" === this._timelineType) && this._setEventList(m, Ca(m, 1)), this._refresh && t.showPopover && setTimeout((function () {
                a._hidePopover()
            })), this._refresh = !1, this._cssClass = this._className + " mbsc-eventcalendar" + (this._showEventList ? " mbsc-eventcalendar-agenda" : "") + (this._showSchedule ? " mbsc-eventcalendar-schedule" : "") + (this._showTimeline ? " mbsc-eventcalendar-timeline" : ""), this._navService.options({
                activeDate: this._active,
                calendarType: this._calendarType,
                endDay: this._showSchedule ? this._scheduleEndDay : this._showTimeline ? this._timelineEndDay : this._rangeEndDay,
                eventRange: this._rangeType,
                eventRangeSize: this._showSchedule ? this._scheduleSize : this._showTimeline ? this._timelineSize : this._eventListSize,
                firstDay: e.firstDay,
                getDate: e.getDate,
                getDay: e.getDay,
                getMonth: e.getMonth,
                getYear: e.getYear,
                max: e.max,
                min: e.min,
                onPageChange: this._onPageChange,
                onPageLoading: this._onPageLoading,
                refDate: this._refDate,
                resolution: this._timelineResolution,
                showCalendar: this._showCalendar,
                showOuterDays: this._showOuterDays,
                size: this._calendarSize,
                startDay: this._rangeStartDay,
                weeks: this._calendarSize
            }, this._pageLoad !== h), l && (this._shouldScroll = !this._isPageChange && !this._shouldSkipScroll)
        }, t.prototype._mounted = function () {
            this._unsubscribe = nl(this._onExternalDrag), bn(this._el, Fs, this._onKeyDown)
        }, t.prototype._updated = function () {
            var e = this;
            if (this._shouldScroll && this.state.eventList && this.state.isListScrollable && (Ie(this, (function () {
                e._scrollToDay(), e._shouldAnimateScroll = le
            })), this._shouldScroll = !1), this._shouldLoadDays && (this._shouldLoadDays = !1, Yn(this._list.querySelectorAll("[mbsc-timestamp]"), (function (t) {
                e._listDays[t.getAttribute("mbsc-timestamp")] = t
            }))), this._shouldEnhance && (this._shouldEnhance = "popover" === this._shouldEnhance ? this._popoverList : this._list), this._triggerCreated) {
                var t = this._triggerCreated,
                    n = "calendar" === t.source ? this._calendarView._body.querySelector('.mbsc-calendar-table-active .mbsc-calendar-text[data-id="' + t.event.id + '"]') : this._el.querySelector('.mbsc-schedule-event[data-id="' + t.event.id + '"]');
                this._hook("onEventCreated", c({}, this._triggerCreated, {target: n})), this._triggerCreated = null
            }
            if (this._triggerUpdated) {
                var a = this._triggerUpdated;
                n = "calendar" === a.source ? this._calendarView._body.querySelector('.mbsc-calendar-table-active .mbsc-calendar-text[data-id="' + a.event.id + '"]') : this._el.querySelector('.mbsc-schedule-event[data-id="' + a.event.id + '"]');
                this._hook("onEventUpdated", c({}, this._triggerUpdated, {target: n})), this._triggerUpdated = null
            }
            this._triggerDeleted && (this._hook("onEventDeleted", c({}, this._triggerDeleted)), this._triggerDeleted = null), this._viewChanged && setTimeout((function () {
                e._viewChanged = !1
            }), 10), this._shouldSkipScroll && setTimeout((function () {
                e._shouldSkipScroll = !1
            })), this._skipScheduleScroll = !1, this._navigateToEvent = le
        }, t.prototype._destroy = function () {
            this._unsubscribe && al(this._unsubscribe), xn(this._el, Fs, this._onKeyDown)
        }, t.prototype._resetSelection = function () {
            this.s.selectMultipleEvents && Object.keys(this._selectedEventsMap).length > 0 && (this._selectedEventsMap = {}, this._onSelectedEventsChange([]), this.forceUpdate())
        }, t.prototype._getAgendaEvents = function (e, t, n) {
            var a = this, s = [], i = this.s;
            if (n && this._showEventList) for (var r = function (e) {
                var t = n[sa(e)];
                if (t && t.length) {
                    var r = xs(t, i.eventOrder);
                    s.push({
                        date: xa(i.dateFormatLong, e, i), events: r.map((function (t) {
                            return a._getEventData(t, e)
                        })), timestamp: +e
                    })
                }
            }, o = ia(e); o < t; o.setDate(o.getDate() + 1)) r(o);
            return s
        }, t.prototype._getEventData = function (e, t) {
            var n, a = this.s;
            if (!e.color && e.resource) {
                var s = me(e.resource) ? e.resource : [e.resource];
                n = (this._resourcesMap || {})[s[0]]
            }
            var i = cl(a, e, t, this._colorEventList, n, !0, !0);
            return i.html = this._safeHtml(i.html), i
        }, t.prototype._getValidDay = function (e, t) {
            void 0 === t && (t = 1);
            var n = this._rangeStartDay, a = this._rangeEndDay;
            if (!this._showCalendar && "day" === this._rangeType && n !== le && a !== le) {
                var s = new Date(e), i = s.getDay(), r = 0;
                if ((a < n ? i > a && i < n : i > a || i < n) && (r = t < 0 ? a - i : n - i), r) return +Ca(s, r += t < 0 ? r > 0 ? -7 : 0 : r < 0 ? 7 : 0)
            }
            return e
        }, t.prototype._setEventList = function (e, t) {
            var n = this;
            setTimeout((function () {
                n._eventListHTML = le, n._shouldScroll = !0, n._listDays = null, n._scrollToDay(0), n.setState({eventList: n._getAgendaEvents(e, t, n._eventMap)})
            }))
        }, t.prototype._hidePopover = function () {
            this.state.showPopover && this.setState({showPopover: !1})
        }, t.prototype._scrollToDay = function (e) {
            var t = this;
            if (this._list) {
                var n = e, a = void 0;
                if (e === le && this._listDays) {
                    var s = this._listDays[this._selected], i = this._navigateToEvent && this._navigateToEvent.id;
                    if (s) if (i !== le) {
                        var r = s.querySelector('.mbsc-event[data-id="' + i + '"]'),
                            o = s.querySelector(".mbsc-event-day");
                        r && (n = r.offsetTop - (o ? o.offsetHeight : 0) + 1)
                    } else n = s.offsetTop;
                    n !== le && (a = this._shouldAnimateScroll)
                }
                n !== le && (this._isListScrolling++, Nn(this._list, le, n, a, !1, (function () {
                    setTimeout((function () {
                        t._isListScrolling--
                    }), 150)
                })))
            }
        }, t.prototype._selectedChange = function (e, t) {
            var n = new Date(e);
            this.s.selectedDate !== le || t || this.setState({selectedDate: +e}), this._emit("selectedDateChange", n), this._hook("onSelectedDateChange", {date: n})
        }, t.prototype._cellClick = function (e, t) {
            this._hook(e, c({target: t.domEvent.currentTarget}, t))
        }, t.prototype._dayClick = function (e, t) {
            var n = sa(t.date), a = xs(this._eventMap[n], this.s.eventOrder);
            t.events = a, this._hook(e, t)
        }, t.prototype._labelClick = function (e, t) {
            t.label && this._hook(e, {date: t.date, domEvent: t.domEvent, event: t.label, source: "calendar"})
        }, t.prototype._eventClick = function (e, t) {
            return t.date = new Date(t.date), this._hook(e, t)
        }, t.prototype._handleMultipleSelect = function (e) {
            var t = e.label || e.event;
            if (t && this.s.selectMultipleEvents) {
                var n = e.domEvent, a = n.shiftKey || n.ctrlKey || n.metaKey ? this._selectedEventsMap : {},
                    s = t.occurrenceId || t.id;
                a[s] ? delete a[s] : a[s] = t, this._selectedEventsMap = c({}, a), this._onSelectedEventsChange(Pe(a)), this.s.selectedEvents === le && this.forceUpdate()
            }
        }, t.defaults = c({}, ms, {
            actionableEvents: !0,
            allDayText: "All-day",
            data: [],
            newEventText: "New event",
            noEventsText: "No events",
            showControls: !0,
            showEventTooltip: !0,
            view: {calendar: {type: "month"}}
        }), t._name = "Eventcalendar", t
    }(ja), _l = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._render = function (e) {
            this._cssClass = this._className + this._rtl + " mbsc-font mbsc-list" + this._theme
        }, t
    }(ja);
    var pl = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e) {
            return t = this, n = e.children, Ct("div", {ref: t._setEl, className: t._cssClass}, n);
            var t, n
        }, t
    }(_l), vl = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._render = function (e) {
            this._cssClass = this._className + " mbsc-list-header" + this._theme + this._hb
        }, t
    }(ja);
    var fl = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e) {
            return t = this, n = e.children, Ct("div", {ref: t._setEl, className: t._cssClass}, n);
            var t, n
        }, t
    }(vl), gl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._onClick = function (e) {
                t._hook("onClick", {domEvent: e}), t.s.selected && t.setState({hasFocus: !1})
            }, t
        }

        return l(t, e), t.prototype._mounted = function () {
            var e, t, n = this;
            this._unlisten = Bi(this._el, {
                click: !0, keepFocus: !0, onBlur: function () {
                    n.setState({hasFocus: !1})
                }, onEnd: function (a) {
                    if (e) {
                        var s = c({}, a);
                        s.domEvent.preventDefault(), s.data = n.s.data, s.drag = !0, n._hook("onDragEnd", s), e = !1
                    }
                    clearTimeout(t)
                }, onFocus: function () {
                    n.setState({hasFocus: !0})
                }, onHoverIn: function (e) {
                    n.s.actionable && n.setState({hasHover: !0}), n._hook("onHoverIn", {domEvent: e})
                }, onHoverOut: function (e) {
                    n.setState({hasHover: !1}), n._hook("onHoverOut", {domEvent: e})
                }, onKeyDown: function (e) {
                    var t = n.s.data;
                    switch (e.keyCode) {
                        case Zs:
                        case Qs:
                            n._el.click(), e.preventDefault();
                            break;
                        case 8:
                        case 46:
                            t && !1 !== t.editable && n._hook("onDelete", {domEvent: e, event: t, source: "agenda"})
                    }
                }, onMove: function (a) {
                    var s = n.s, i = c({}, a);
                    i.data = s.data, i.drag = !0, i.external = !0, !e && i.isTouch || i.domEvent.preventDefault(), e ? n._hook("onDragMove", i) : (Math.abs(i.deltaX) > 7 || Math.abs(i.deltaY) > 7) && (clearTimeout(t), !i.isTouch && s.drag && !1 !== s.data.editable && (e = !0, n._hook("onDragStart", i)))
                }, onPress: function () {
                    n.s.actionable && n.setState({isActive: !0})
                }, onRelease: function () {
                    n.setState({isActive: !1})
                }, onStart: function (a) {
                    var s = n.s;
                    return a.isTouch && s.drag && !1 !== s.data.editable && !e && (t = setTimeout((function () {
                        var t = c({}, a);
                        t.data = s.data, t.drag = !0, n._hook("onDragModeOn", t), n._hook("onDragStart", t), e = !0
                    }), 350)), {ripple: s.actionable && s.ripple}
                }
            })
        }, t.prototype._render = function (e, t) {
            this._cssClass = this._className + " mbsc-list-item" + this._theme + this._hb + this._rtl + (e.actionable ? " mbsc-list-item-actionable" : "") + (t.hasFocus ? " mbsc-focus" : "") + (t.hasHover ? " mbsc-hover" : "") + (t.isActive ? " mbsc-active" : "") + (e.selected ? " mbsc-selected" : "")
        }, t.prototype._destroy = function () {
            this._unlisten && this._unlisten()
        }, t.defaults = {actionable: !0, ripple: !1}, t._name = "ListItem", t
    }(ja);
    var yl = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e) {
            return function (e, t, n) {
                var a = t.props;
                a.actionable, a.children, a.className, a.data, a.drag, a.ripple, a.rtl;
                var s = a.theme;
                a.themeVariant, a.onHoverIn, a.onHoverOut, a.onDragEnd, a.onDragMove, a.onDragStart, a.onDragModeOn, a.onDragModeOff, a.onDelete, a.onClick;
                var i = d(a, ["actionable", "children", "className", "data", "drag", "ripple", "rtl", "theme", "themeVariant", "onHoverIn", "onHoverOut", "onDragEnd", "onDragMove", "onDragStart", "onDragModeOn", "onDragModeOff", "onDelete", "onClick"]);
                return Ct("div", c({
                    tabIndex: 0,
                    ref: t._setEl,
                    onClick: t._onClick,
                    className: t._cssClass
                }, i), Ct("div", {dangerouslySetInnerHTML: t.textParam}), n, Ct("div", {className: "mbsc-list-item-background mbsc-" + s}))
            }(0, this, e.children)
        }, t
    }(gl), bl = "mbsc-def";

    function xl(e, t, n, a, s, i, r) {
        for (var o = "start-end" === i, l = r ? n : ia(Ca(n, 1)), c = 0, d = Object.keys(e); c < d.length; c++) for (var h = e[d[c]], u = ia(t); u < l; u.setDate(u.getDate() + 1)) {
            var m = h[sa(u)];
            if (m) {
                if ((a || s) && m.allDay[0] && (!o || da(u, t) || da(u, n))) return m.allDay[0].original;
                if (!a) for (var _ = 0, p = m.data; _ < p.length; _++) {
                    var v = p[_];
                    if (o) {
                        if (ea(v.startDate, v.endDate, t, t, !0)) return v.original;
                        if (ea(v.startDate, v.endDate, n, n)) return v.original
                    } else if (ea(v.startDate, v.endDate, t, n)) return v.original
                }
            }
        }
        return !1
    }

    function Dl(e, t, n, a, s, i, r, o) {
        var l = e.allDay || n, c = e.startDate;
        if (a && n && !s) {
            var d = o[sa(c)];
            return c < i ? i : r[d + (ka(c.getDay(), t.startDay, t.endDay) ? 0 : 1)].date
        }
        return l ? fa(t, c.getFullYear(), c.getMonth(), c.getDate()) : c
    }

    function Tl(e, t, n, a, s, i, r, o) {
        var l = e.allDay || n, c = e.endDate;
        if (a && n && !s) {
            var d = o[sa(aa(t, e.allDay, e.startDate, c))], h = c >= i || d >= r.length - 1 ? i : r[d + 1].date;
            return aa(t, !1, e.startDate, h)
        }
        var u = l ? aa(t, e.allDay, e.startDate, c) : c;
        return l ? fa(t, u.getFullYear(), u.getMonth(), u.getDate(), 23, 59, 59, 999) : u
    }

    function Sl(e, t, n, a, s, i, r, o, l, c, d, h, u) {
        for (var m = n.allDay ? o : l, _ = n.allDay ? c : d, p = Dl(n, e, s, i, r, m, h, u), v = Tl(n, e, s, i, r, _, h, u), f = !1, g = 0, y = t; g < y.length; g++) {
            for (var b = y[g], x = 0, D = !1, T = void 0, S = 0, C = b; S < C.length; S++) {
                for (var w = C[S], k = !1, M = 0, E = w; M < E.length; M++) {
                    var N = E[M], I = N.allDay ? o : l, L = N.allDay ? c : d;
                    ea(Dl(N, e, s, i, r, I, h, u), Tl(N, e, s, i, r, L, h, u), p, v, !0) && (k = !0, D = !0, T ? a[n.uid] = a[n.uid] || x : a[N.uid] = x + 1)
                }
                k || T || (T = w), x++
            }
            D && (T ? T.push(n) : b.push([n]), f = !0)
        }
        f || (a[n.uid] = 0, t.push([[n]]))
    }

    function Cl(e) {
        return (e = Math.abs(Ce(e))) > 60 ? 60 * Ce(e / 60) : 60 % e == 0 ? e : [6, 10, 12, 15, 20, 30].reduce((function (t, n) {
            return Math.abs(n - e) < Math.abs(t - e) ? n : t
        }))
    }

    function wl(e, t, n, a, s, i) {
        a && a > e && (e = a);
        var r = $n(e);
        return (t > r || s !== le && i !== le && !ka(e.getDay(), s, i)) && (r = t), 100 * (r - t) / n
    }

    function kl(e, t, n, a, s) {
        e = e || {};
        var i = Object.keys(e), r = {}, o = t.map((function (e) {
            return e.id
        })), l = n.map((function (e) {
            return e.id
        }));
        o.forEach((function (e) {
            r[e] = {}, l.forEach((function (t) {
                r[e][t] = {}
            }))
        }));
        for (var c = function (t) {
            for (var n = function (e) {
                var n = e.resource, i = e.slot, c = n !== le && a ? me(n) ? n : [n] : o, d = i !== le && s ? [i] : l;
                c.forEach((function (n) {
                    var a = r[n];
                    a && d.forEach((function (n) {
                        var s = a[n];
                        s && (s[t] || (s[t] = []), s[t].push(e))
                    }))
                }))
            }, i = 0, c = e[t]; i < c.length; i++) {
                n(c[i])
            }
        }, d = 0, h = i; d < h.length; d++) {
            c(h[d])
        }
        return r
    }

    function Ml(e, t) {
        var n = new Date(e), a = new Date(+Un + t);
        return new Date(n.getFullYear(), n.getMonth(), n.getDate(), a.getHours(), a.getMinutes())
    }

    var El = {}, Nl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._onClick = function (e) {
                t._triggerClick("onClick", e);
                var n = t.s, a = El[n.event.uid];
                a && n.selected && a.next({hasFocus: !1})
            }, t._onRightClick = function (e) {
                t._triggerClick("onRightClick", e)
            }, t._onDocTouch = function (e) {
                xn(t._doc, Ks, t._onDocTouch), xn(t._doc, Vs, t._onDocTouch), t._isDrag = !1, t._hook("onDragModeOff", {
                    domEvent: e,
                    event: t.s.event.original
                })
            }, t._updateState = function (e) {
                t.setState(e)
            }, t
        }

        return l(t, e), t.prototype._render = function (e, t) {
            var n = e.event, a = new Date(n.date), s = n.position, i = n.startDate, r = aa(e, n.allDay, i, n.endDate),
                o = e.isTimeline, l = e.isListing, d = l || n.allDay, h = !da(i, r), u = h && da(i, a),
                m = h && da(r, a), _ = d && (!o || l), p = o ? "timeline" : "schedule", v = e.gridStartTime,
                f = e.gridEndTime, g = $n(i), y = $n(r), b = o && e.slot !== bl,
                x = ka(r.getDay(), e.startDay, e.endDay), D = e.singleDay ? Ca(a, 1) : new Date(e.lastDay);
            n.allDay || (D = pa(e, D)), this._isStart = b || !h || u, this._isEnd = b || !h || (d || o && !e.hasResY ? r < D && x : m), b || d || !(v > g || f < g) || (this._isStart = !1), b || d || !(f < y || v > y) || (this._isEnd = !1), this._isDrag = this._isDrag || e.isDrag, this._content = le, this._rangeText = n.start + " - " + n.end, this._isAllDay = _, this._host = p, !n.allDay && (o && !e.hasResY || !h || u || m) || (this._rangeText = n.allDayText || " "), this._cssClass = "mbsc-schedule-event" + this._theme + this._rtl + (e.render || e.template ? " mbsc-schedule-event-custom" : "") + (o ? " mbsc-timeline-event" : "") + (l ? " mbsc-timeline-event-listing" : "") + (this._isStart ? " mbsc-" + p + "-event-start" : "") + (this._isEnd ? " mbsc-" + p + "-event-end" : "") + (_ ? " mbsc-schedule-event-all-day" : "") + (b ? " mbsc-timeline-event-slot" : "") + (t.hasFocus && !e.inactive && !e.selected || e.selected ? " mbsc-schedule-event-active" : "") + (!t.hasHover || e.inactive || this._isDrag ? "" : " mbsc-schedule-event-hover") + (e.isDrag ? " mbsc-schedule-event-dragging" + (o ? " mbsc-timeline-event-dragging" : "") : "") + (e.hidden ? " mbsc-schedule-event-hidden" : "") + (e.inactive ? " mbsc-schedule-event-inactive" : "") + (!1 === n.original.editable ? " mbsc-readonly-event" : "") + (n.original.cssClass ? " " + n.original.cssClass : ""), this._style = c({}, s, {
                color: n.color,
                top: e.eventHeight && s.top !== le ? s.top * e.eventHeight + "px" : s.top
            });
            var T, S = e.render || e.renderContent;
            if (S) {
                var C = S(n);
                ve(C) ? T = C : this._content = C
            } else e.contentTemplate || (T = n.html);
            T !== this._text && (this._text = T, this._html = T ? this._safeHtml(T) : le, this._shouldEnhance = T && !!S)
        }, t.prototype._mounted = function () {
            var e, t, n, a = this, s = this.s.event.uid, i = El[s];
            i || (i = new m, El[s] = i), this._unsubscribe = i.subscribe(this._updateState), this._doc = Dn(this._el), this._unlisten = Bi(this._el, {
                keepFocus: !0, onBlur: function () {
                    i.next({hasFocus: !1})
                }, onDoubleClick: function (e) {
                    e.domEvent.stopPropagation(), a._triggerClick("onDoubleClick", e.domEvent)
                }, onEnd: function (t) {
                    if (a._isDrag) {
                        var s = a.s, i = c({}, t);
                        i.domEvent.preventDefault(), i.event = s.event, i.resource = s.resource, i.slot = s.slot, s.resize && e ? (i.resize = !0, i.direction = e) : s.drag && (i.drag = !0), a._hook("onDragEnd", i), s.isDrag || (a._isDrag = !1), a._el && i.moved && a._el.blur()
                    }
                    clearTimeout(n), e = le
                }, onFocus: function () {
                    i.next({hasFocus: !0})
                }, onHoverIn: function (e) {
                    i.next({hasHover: !0}), a._triggerClick("onHoverIn", e)
                }, onHoverOut: function (e) {
                    i.next({hasHover: !1}), a._triggerClick("onHoverOut", e)
                }, onKeyDown: function (e) {
                    var t = a.s.event.original;
                    switch (e.keyCode) {
                        case Zs:
                        case Qs:
                            a._el.click(), e.preventDefault();
                            break;
                        case 8:
                        case 46:
                            !1 !== t.editable && a._hook("onDelete", {domEvent: e, event: t, source: a._host})
                    }
                }, onMove: function (s) {
                    var i = a.s, r = c({}, s);
                    if (r.event = i.event, r.resource = i.resource, r.slot = i.slot, e) r.resize = !0, r.direction = e; else {
                        if (!i.drag) return;
                        r.drag = !0
                    }
                    !1 !== i.event.original.editable && (!a._isDrag && r.isTouch || r.domEvent.preventDefault(), a._isDrag ? a._hook("onDragMove", r) : (Math.abs(r.deltaX) > 7 || Math.abs(r.deltaY) > 7) && (clearTimeout(n), r.isTouch || (r.domEvent = t, a._isDrag = !0, a._hook("onDragStart", r))))
                }, onStart: function (s) {
                    t = s.domEvent;
                    var i = a.s, r = c({}, s), o = t.target;
                    if (r.event = i.event, r.resource = i.resource, r.slot = i.slot, i.resize && o.classList.contains("mbsc-schedule-event-resize")) e = o.classList.contains("mbsc-schedule-event-resize-start") ? "start" : "end", r.resize = !0, r.direction = e; else {
                        if (!i.drag) return;
                        r.drag = !0
                    }
                    !1 !== i.event.original.editable && (a._isDrag ? (t.stopPropagation(), a._hook("onDragStart", r)) : r.isTouch && (n = setTimeout((function () {
                        a._hook("onDragModeOn", r), a._hook("onDragStart", r), a._isDrag = !0
                    }), 350)))
                }
            }), this._isDrag && (bn(this._doc, Ks, this._onDocTouch), bn(this._doc, Vs, this._onDocTouch))
        }, t.prototype._destroy = function () {
            if (this._el && this._el.blur(), this._unsubscribe) {
                var e = this.s.event.uid, t = El[e];
                t && (t.unsubscribe(this._unsubscribe), t.nr || delete El[e])
            }
            this._unlisten && this._unlisten(), xn(this._doc, Ks, this._onDocTouch), xn(this._doc, Vs, this._onDocTouch)
        }, t.prototype._triggerClick = function (e, t) {
            var n = this.s;
            this._hook(e, {
                date: n.event.date,
                domEvent: t,
                event: n.event.original,
                resource: n.resource,
                slot: n.slot,
                source: this._host
            })
        }, t
    }(ja);
    var Il = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e) {
            return function (e, t) {
                var n, a = e.event, s = t._isAllDay, i = e.isTimeline, r = t._theme,
                    o = e.resize && !1 !== a.original.editable, l = ((n = {}).onContextMenu = t._onRightClick, n);
                return Ct("div", c({
                    tabIndex: 0,
                    className: t._cssClass,
                    "data-id": a.id,
                    style: t._style,
                    ref: t._setEl,
                    title: a.tooltip,
                    onClick: t._onClick
                }, l), t._isStart && o && Ct("div", {className: "mbsc-schedule-event-resize mbsc-schedule-event-resize-start" + (i ? " mbsc-timeline-event-resize" : "") + t._rtl + (e.isDrag ? " mbsc-schedule-event-resize-start-touch" : "")}), t._isEnd && o && Ct("div", {className: "mbsc-schedule-event-resize mbsc-schedule-event-resize-end" + (i ? " mbsc-timeline-event-resize" : "") + t._rtl + (e.isDrag ? " mbsc-schedule-event-resize-end-touch" : "")}), e.render ? t._html ? Ct("div", {
                    style: {height: "100%"},
                    dangerouslySetInnerHTML: t._html
                }) : t._content : Ct(kt, null, !s && !i && Ct("div", {className: "mbsc-schedule-event-bar" + r + t._rtl}), Ct("div", {
                    className: "mbsc-schedule-event-background" + (i ? " mbsc-timeline-event-background" : "") + (s ? " mbsc-schedule-event-all-day-background" : "") + r,
                    style: {background: a.style.background}
                }), Ct("div", {
                    "aria-hidden": "true",
                    className: "mbsc-schedule-event-inner" + r + (s ? " mbsc-schedule-event-all-day-inner" : "") + (a.cssClass || ""),
                    style: {color: a.style.color}
                }, Ct("div", {
                    className: "mbsc-schedule-event-title" + (s ? " mbsc-schedule-event-all-day-title" : "") + r,
                    dangerouslySetInnerHTML: t._html
                }, t._content), !s && Ct("div", {className: "mbsc-schedule-event-range" + r}, t._rangeText)), a.ariaLabel && Ct("div", {className: "mbsc-hidden-content"}, a.ariaLabel)), Ct("div", {dangerouslySetInnerHTML: t.textParam}))
            }(e, this)
        }, t
    }(Nl), Ll = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._mounted = function () {
            var e = this;
            clearInterval(this._timer), this._timer = setInterval((function () {
                e._zone ? e._zone.runOutsideAngular((function () {
                    e.forceUpdate()
                })) : e.forceUpdate()
            }), 1e4)
        }, t.prototype._destroy = function () {
            clearInterval(this._timer)
        }, t.prototype._render = function (e) {
            var t = fa(e), n = e.rtl, a = e.displayedDays, s = e.displayedTime, i = e.startTime,
                r = ke($n(t) / Bn) * Bn, o = e.timezones, l = {amText: e.amText, pmText: e.pmText};
            if (o && Xn(t)) {
                this._times = [];
                for (var c = 0, d = o; c < d.length; c++) {
                    var h = d[c], u = t.clone();
                    u.setTimezone(h.timezone), this._times.push(xa(e.timeFormat, u, l))
                }
            } else this._time = xa(e.timeFormat, t, l);
            this._cssClass = "mbsc-schedule-time-indicator mbsc-schedule-time-indicator-" + e.orientation + this._theme + this._rtl + " " + (r < i || r > i + s || !ka(t.getDay(), e.startDay, e.endDay) ? " mbsc-hidden" : "");
            var m = e.hasResY ? 0 : la(e.firstDay, t, e.startDay, e.endDay);
            if ("x" === e.orientation) {
                var _ = 100 * m / a + "%", p = o && 4.25 * o.length + "em";
                this._pos = {
                    left: o && !n ? p : le,
                    right: o && n ? p : le,
                    top: 100 * (r - i) / s + "%"
                }, this._dayPos = {left: n ? "" : _, right: n ? _ : "", width: 100 / a + "%"}
            } else {
                var v = 100 * (m * s + r - i) / (a * s) + "%";
                this._pos = {left: n ? "" : v, right: n ? v : ""}
            }
        }, t
    }(ja);
    var Hl = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e) {
            return function (e, t) {
                var n = e.timezones;
                return Ct("div", {
                    "aria-hidden": "true",
                    className: t._cssClass,
                    style: t._pos
                }, Ct("div", {className: (n ? "mbsc-flex " : "") + "mbsc-schedule-time-indicator-time mbsc-schedule-time-indicator-time-" + e.orientation + t._theme + t._rtl}, n ? n.map((function (e, n) {
                    return Ct("div", {
                        key: n,
                        className: "mbsc-schedule-time-indicator-tz" + t._theme + t._rtl
                    }, t._times[n])
                })) : t._time), e.showDayIndicator && Ct("div", {
                    className: "mbsc-schedule-time-indicator-day" + t._theme + t._rtl,
                    style: t._dayPos
                }))
            }(e, this)
        }, t
    }(Ll), Ol = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._onClick = function () {
                var e = t.s;
                e.selectable && e.onClick(e.timestamp)
            }, t
        }

        return l(t, e), t.prototype._render = function (e, t) {
            var n = new Date(e.timestamp);
            this._cssClass = "mbsc-schedule-header-item " + this._className + this._theme + this._rtl + this._hb + (e.largeNames ? " mbsc-schedule-header-item-large" : "") + (e.selected ? " mbsc-selected" : "") + (t.hasHover ? " mbsc-hover" : ""), this._data = {
                date: n,
                events: e.events || [],
                resource: e.resource,
                selected: e.selected
            }, this._day = n.getDay()
        }, t.prototype._mounted = function () {
            var e = this;
            this._unlisten = Bi(this._el, {
                onHoverIn: function () {
                    e.s.selectable && e.setState({hasHover: !0})
                }, onHoverOut: function () {
                    e.s.selectable && e.setState({hasHover: !1})
                }
            })
        }, t.prototype._destroy = function () {
            this._unlisten && this._unlisten()
        }, t
    }(ja);
    var Yl = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e, t) {
            return function (e, t, n) {
                var a;
                return e.renderDay && (a = e.renderDay(n._data)), e.renderDayContent && (a = e.renderDayContent(n._data)), ve(a) && (a = Ct("div", {dangerouslySetInnerHTML: n._safeHtml(a)}), n._shouldEnhance = !0), Ct("div", {
                    ref: n._setEl,
                    className: n._cssClass,
                    onClick: n._onClick
                }, e.renderDay ? a : Ct(kt, null, Ct("div", {
                    "aria-hidden": "true",
                    className: "mbsc-schedule-header-dayname" + n._theme + (e.selected ? " mbsc-selected" : "") + (e.isToday ? " mbsc-schedule-header-dayname-curr" : "")
                }, e.dayNames[n._day]), Ct("div", {
                    "aria-hidden": "true",
                    className: "mbsc-schedule-header-day" + n._theme + n._rtl + (e.selected ? " mbsc-selected" : "") + (e.isToday ? " mbsc-schedule-header-day-today" : "") + (t.hasHover ? " mbsc-hover" : "")
                }, e.day), e.label && Ct("div", {
                    className: "mbsc-hidden-content",
                    "aria-pressed": e.selectable ? e.selected ? "true" : "false" : le,
                    role: e.selectable ? "button" : le
                }, e.label), e.renderDayContent && a))
            }(e, t, this)
        }, t
    }(Ol), Pl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._isScrolling = 0, t._onScroll = function () {
            }, t._onMouseLeave = function (e, n) {
                !t._cursorTimeCont || t.state.dragData && !n || (t._cursorTimeCont.style.visibility = "hidden", t._isCursorTimeVisible = !1)
            }, t._onMouseMove = function (e) {
                if (t._showCursorTime) {
                    var n = t.s, a = n.rtl, s = t._isTimeline, i = t._cursorTimeCont;
                    if (!t._isTouch || t._tempStart ? !t._isCursorTimeVisible && e && (i.style.visibility = "visible", t._isCursorTimeVisible = !0) : (i.style.visibility = "hidden", t._isCursorTimeVisible = !1), t._isCursorTimeVisible && t._colWidth) {
                        var r = t._gridCont.getBoundingClientRect(), o = e ? e.clientX : t._cursorX || 0,
                            l = e ? e.clientY : t._cursorY || 0, c = a ? r.right - o : o - r.left,
                            d = ue(l - r.top, 8, t._colHeight), h = void 0, u = void 0, m = void 0;
                        if (t._dragDelta !== le) u = fa(n, t._dragDelta < 0 ? t._tempStart : t._tempEnd), h = s && !t._hasResY ? t._dayIndexMap[sa(u)] : 0, m = 0 === (m = $n(u)) ? t._dragDelta < 0 ? m : Kn : m; else {
                            h = s && !t._hasResY ? ue(ke(c / t._colWidth), 0, t._daysNr - 1) : 0, m = t._startTime + we(ke(s ? t._time * (c - h * t._colWidth) / t._colWidth : t._time * (d - 8) / (t._colHeight - 16)), n.dragTimeStep * Bn);
                            var _ = t._days[h].date, p = new Date(+Un + m);
                            u = fa(n, _.getFullYear(), _.getMonth(), _.getDate(), p.getHours(), p.getMinutes())
                        }
                        var v = t._time * (s ? t._daysNr : 1), f = s ? a ? "right" : "left" : "top", g = i.style;
                        g[f] = 100 * (h * t._time + m - t._startTime) / v + "%", g[a ? "left" : "right"] = "", i.textContent = xa(n.timeFormat, u, n), t._cursorX = o, t._cursorY = l
                    }
                }
            }, t._onEventDragModeOn = function (e) {
                t.s.externalDrag && e.drag && !e.create && tl.next(c({}, e, {
                    create: !0,
                    eventName: "onDragModeOn",
                    external: !0,
                    from: t
                }));
                var n = e.create ? t._tempEvent : e.event, a = e.create ? t._tempResource : e.resource,
                    s = e.create ? t._tempSlot : e.slot;
                t.setState({
                    dragData: {
                        draggedEvent: n,
                        originDates: e.external ? le : t._getDragDates(n, a, s),
                        resource: a
                    }, isTouchDrag: !0
                })
            }, t._onEventDragModeOff = function (e) {
                t._hook("onEventDragEnd", {
                    domEvent: e.domEvent,
                    event: e.event,
                    resource: t._tempResource !== bl ? t._tempResource : le,
                    slot: t._tempSlot !== bl ? t._tempSlot : le,
                    source: t._isTimeline ? "timeline" : "schedule"
                }), t.setState({dragData: le, isTouchDrag: !1})
            }, t._onEventDragStart = function (e) {
                var n = t.s, a = e.click, s = n.eventList, i = t._isTimeline, r = t._visibleResources, o = t._slots,
                    l = n.dragTimeStep, d = e.startX, h = e.startY;
                t._isTouch = e.isTouch, t._scrollY = 0, t._scrollX = 0, t._calcGridSizes();
                var u = n.rtl ? t._gridRight - d : d - t._gridLeft, m = ue(h - t._gridTop, 8, t._colHeight - 9),
                    _ = s ? t._cols : t._days, p = _.length, v = t._colWidth, f = v ? ke(u / v) : 1,
                    g = t._resourceTops, y = 0, b = f, x = 0;
                if (n.externalDrag && e.drag && !e.create) {
                    var D = Hn(e.domEvent.target, ".mbsc-schedule-event", t._el).cloneNode(!0), T = D.classList;
                    D.style.display = "none", T.add("mbsc-drag-clone", "mbsc-schedule-drag-clone", "mbsc-font"), T.remove("mbsc-schedule-event-hover"), t._clone = D, t._body = Dn(t._el).body, t._body.appendChild(D), t._eventDropped = !1, tl.next(c({}, e, {
                        create: !0,
                        event: e.event.original,
                        eventName: "onDragStart",
                        external: !0,
                        from: t
                    }))
                }
                if (i) x = v ? ke(u / (v / o.length)) % o.length : 0, t._hasResY ? _.forEach((function (e, t) {
                    r.forEach((function (n, a) {
                        m > g[e.dateKey + "-" + n.id] && (b = t, y = a)
                    }))
                })) : r.forEach((function (e, t) {
                    m > g[e.id] && (y = t)
                })), t._startSlotIndex = x; else {
                    var S = t._groupByResource, C = S ? p : t._hasSlots ? t._slots.length : r.length;
                    y = S ? ke(f / C) : f % C, b = S ? f % C : ke(f / C)
                }
                var w = e.external ? le : r[y], k = w ? w.id : le, M = e.external ? le : o[x], E = M ? M.id : le;
                if (w && !1 === w.eventCreation) return !1;
                if (e.create) {
                    b = ue(b, 0, p - 1);
                    var N = !i && n.showAllDay && e.endY < t._gridContTop,
                        I = "day" === n.type && 1 === n.size ? t._firstDay : _[b].date,
                        L = s || !e.external && !a ? l * Bn : t._stepCell,
                        H = t._getGridTime(I, u, m, b, a ? t._stepCell / Bn : l),
                        O = !t._isDailyResolution || N || s ? N ? I : pa(n, I) : H,
                        Y = "year" === n.resolution ? wa(O, 12, n) : "quarter" === n.resolution ? wa(O, 3, n) : "month" === n.resolution ? wa(O, 1, n) : "week" === n.resolution ? Ca(O, n.endDay - n.startDay + 1 + (n.endDay < n.startDay ? 7 : 0)) : Ca(O, 1),
                        P = n.exclusiveEndDates ? Y : new Date(+Y - 1), F = N || s ? P : Ma(fa(n, +O + L), a ? 1 : l),
                        V = n.extendDefaultEvent ? n.extendDefaultEvent({resource: k, slot: E, start: O}) : le, z = c({
                            allDay: N,
                            end: F,
                            id: ll(),
                            resource: w && k !== bl ? k : le,
                            slot: M && E !== bl ? E : le,
                            start: O,
                            title: n.newEventText
                        }, V, e.event), R = t._getEventData(z, I, w);
                    if (i && k !== le && t._setRowHeight && (R.position.top = ue(ke((m - g[k]) / t._eventHeight), 0, t._eventRows[k] - 1)), e.event) {
                        var A = +R.endDate - +R.startDate;
                        Ts(e.event.dragInTime, le, n.dragInTime) && (R.startDate = I, R.endDate = new Date(+I + A))
                    }
                    t._tempEvent = R, t._tempResource = k, t._tempSlot = E
                }
                return a || t._hook("onEventDragStart", {
                    action: e.create ? "create" : e.resize ? "resize" : "move",
                    domEvent: e.domEvent,
                    event: (e.create ? t._tempEvent : e.event).original,
                    resource: k !== bl ? k : le,
                    slot: E !== bl ? E : le,
                    source: i ? "timeline" : "schedule"
                }), !0
            }, t._onEventDragMove = function (e) {
                clearTimeout(t._scrollTimer);
                var n = t.s, a = n.rtl, s = a ? -1 : 1, i = t._isTimeline, r = n.eventList,
                    o = "month" === n.resolution || "year" === n.resolution, l = r ? t._cols : t._days, d = t._colWidth,
                    h = l.length, u = t._slots, m = t._groupByResource, _ = t._visibleResources, p = t.state.dragData,
                    v = n.dragTimeStep, f = n.timeFormat, g = e.startX,
                    y = ue(e.endX, t._gridContLeft, t._gridContRight - 1),
                    b = ue(e.endY, t._gridContTop, t._gridContBottom - 1), x = b - e.startY + t._scrollY,
                    D = a ? g - y + t._scrollX : y - g + t._scrollX, T = i ? D : x, S = i ? d : t._colHeight - 16,
                    C = t._gridRight - t._gridLeft - 1, w = ue(e.startY - t._gridTop, 8, t._colHeight - 9),
                    k = ue(a ? t._gridRight + t._scrollX - y : y - t._gridLeft + t._scrollX, 0, C),
                    M = ue(b - t._gridTop + t._scrollY, 8, t._colHeight - 9),
                    E = ke((a ? t._gridRight - g : g - t._gridLeft) / d), N = ke(k / d),
                    I = n.showAllDay && e.endY < t._gridContTop, L = t._scrollCont, H = t._hasResY,
                    O = e.create ? t._tempEvent : e.event, Y = c({}, O), P = E, F = N, V = 0, z = 0, R = !1,
                    A = t._gridContBottom - e.endY, W = e.endY - t._gridContTop, U = e.endX - t._gridContLeft,
                    B = t._gridContRight - e.endX, j = (L.scrollWidth - L.clientWidth) * s, K = a ? 0 : j,
                    X = a ? j : 0;
                if (n.externalDrag && e.drag && !e.create && (tl.next(c({}, e, {
                    clone: t._clone,
                    create: !0,
                    event: e.event.original,
                    eventName: "onDragMove",
                    external: !0,
                    from: t
                })), !t._onCalendar)) return sl(e, t._clone), void (p || t.setState({dragData: {draggedEvent: Y}}));
                if (A < 30 && L.scrollTop < L.scrollHeight - L.clientHeight && (L.scrollTop += 5, t._scrollY += 5, R = !0), W < 30 && !I && L.scrollTop > 0 && (L.scrollTop -= 5, t._scrollY -= 5, R = !0), U < 30 && L.scrollLeft > X && (L.scrollLeft -= 5, t._scrollX -= 5 * s, R = !0), B < 30 && L.scrollLeft < K && (L.scrollLeft += 5, t._scrollX += 5 * s, R = !0), R && (t._scrollTimer = setTimeout((function () {
                    t._onEventDragMove(e)
                }), 20)), i) z = ke(k / (d / u.length)) % u.length, H ? l.forEach((function (e, n) {
                    _.forEach((function (a, s) {
                        w > t._resourceTops[e.dateKey + "-" + a.id] && (P = n), M > t._resourceTops[e.dateKey + "-" + a.id] && (F = n, V = s)
                    }))
                })) : _.forEach((function (e, n) {
                    M > t._resourceTops[e.id] && (V = n)
                })); else {
                    var J = m ? h : t._resources.length;
                    P = m ? E % J : ke(E / J), F = m ? N % J : ke(N / J), V = m ? ke(N / J) : N % J
                }
                P = ue(P, 0, h - 1), F = ue(F, 0, h - 1);
                var q = O.startDate, G = O.endDate, Z = +G - +q, Q = t._time, $ = ke(Q * T / S), ee = _[V],
                    te = e.create ? t._tempResource : e.resource, ne = e.create ? t._tempSlot : e.slot;
                if (!1 === ee.eventCreation && t._tempResource === le) return !1;
                var ae, se = u[z].id, ie = !1 !== ee.eventCreation ? ee.id : t._tempResource, re = O.allDay,
                    oe = re ? le : n, ce = re || r, de = q, he = G, me = !0, _e = !0, pe = !0, ve = l[P].date,
                    fe = l[F].date, ge = "day" === n.type && 1 === n.size ? 0 : oa(ve, fe), ye = F - P,
                    be = "year" === n.resolution ? 12 : 1, xe = ge - ye;
                if ((e.drag && !e.create || e.external) && (e.external || (me = Ss(O.original.dragBetweenResources, t._resourcesMap[te].eventDragBetweenResources, n.dragBetweenResources), _e = Cs(O.original.dragBetweenSlots, t._resourcesMap[te].eventDragBetweenSlots, u[t._startSlotIndex || 0].eventDragBetweenSlots, n.dragBetweenSlots)), pe = Ts(O.original.dragInTime, e.external || t._resourcesMap[te].eventDragInTime, n.dragInTime)), e.drag || e.external) if (i || me || te === ie || (ge = t._dragDayDelta), i && r && o) de = wa(q, ye * be, n), he = wa(G, ye * be, n); else {
                    if (ce = (re = I || i && O.allDay) || r, oe = re ? le : n, !i && !I && (O.allDay || e.external) || i && e.external && !O.allDay && !r) {
                        var De = ia(Ca(q, ge));
                        de = t._getGridTime(De, k, M, F, v)
                    } else !i || ce || H ? (ae = Ca(q, ge), de = ce ? ae : Ma(fa(oe, +ae + $), v)) : de = Ma(fa(n, +q + $ + (Kn - Q) * ge + Q * xe), v);
                    !1 !== ee.eventCreation || i || (de = fa(n, t._tempStart)), he = fa(oe, +de + Z)
                } else {
                    var Te = i ? ye : N - E, Se = e.create ? Te ? Te > 0 : T > 0 : "end" === e.direction, Ce = oa(q, G);
                    !i && m && te !== ie && (ge = t._dragDayDelta), Se ? i && r && o ? he = wa(G, ye * be, n) : !i || ce || H ? (ae = Ca(G, Math.max(-Ce, ge)), he = ce ? ae : Ma(fa(oe, +ae + $), v), !ce && ($n(he) > t._endTime + 1 || he >= Ca(ia(ae), 1)) && (he = fa(n, +ia(ae) + t._endTime + 1))) : he = Ma(fa(n, +G + $ + ge * (Kn - Q) + Q * xe), v) : i && r && o ? de = wa(q, ye * be, n) : !i || ce || H ? (ae = Ca(q, Math.min(Ce, ge)), de = ce ? ae : Ma(fa(oe, +ae + $), v), !ce && ($n(de) < t._startTime || de < ia(ae)) && (de = fa(n, +ia(ae) + t._startTime))) : de = Ma(fa(n, +q + $ + ge * (Kn - Q) + Q * xe), v), ie = te, ce && he < de && (Se ? he = fa(n, de) : de = fa(n, he)), !ce && (he < de || Math.abs(+he - +de) < v * Bn) && (Se ? he = fa(n, +de + v * Bn) : de = fa(n, +he - v * Bn))
                }
                if ((e.drag || e.external) && (pe || (de = q, he = G, re = t._tempAllDay), me || (ie = te), _e || (se = ne)), t._tempStart !== +de || t._tempEnd !== +he || t._tempAllDay !== re || t._tempResource !== ie || t._tempSlot !== se) {
                    var we = void 0, Me = void 0;
                    t._isDailyResolution ? (we = xa(f, de, n), Me = xa(f, he, n)) : (we = xa(n.dateFormat, de, n), Me = xa(n.dateFormat, aa(n, re, de, he), n)), Y.startDate = de, Y.endDate = he, Y.start = we, Y.end = Me, Y.allDay = re, Y.date = +fe, t._tempStart = +de, t._tempEnd = +he, t._tempAllDay = re, t._tempResource = ie, t._tempSlot = se, t._dragDelta = e.drag || e.external ? -1 : e.direction ? "end" === e.direction ? 1 : -1 : T, t._dragDayDelta = ge, re || t._onMouseMove(e.domEvent), t.setState({
                        dragData: {
                            draggedDates: t._getDragDates(Y, ie, se),
                            draggedEvent: Y,
                            originDate: O.date,
                            originDates: p && p.originDates,
                            originResource: e.external ? le : te,
                            resource: ie,
                            slot: se
                        }
                    })
                }
                return !0
            }, t._onEventDragEnd = function (e) {
                clearTimeout(t._scrollTimer);
                var n = t.s, a = e.create, s = t.state, i = s.dragData, r = !1;
                if (n.externalDrag && e.drag && !e.create && (tl.next(c({}, e, {
                    action: "externalDrop",
                    create: !0,
                    event: e.event.original,
                    eventName: "onDragEnd",
                    external: !0,
                    from: t
                })), t._body.removeChild(t._clone), t._onCalendar || (r = !0, t._eventDropped && n.onEventDelete(e))), a && !i && ((i = {}).draggedEvent = t._tempEvent), i && i.draggedEvent) {
                    var o = e.event, l = i.draggedEvent, d = l.startDate, h = l.endDate, u = l.allDay, m = l.original,
                        _ = a && !e.external ? t._tempResource : e.resource, p = i.resource === le ? _ : i.resource,
                        v = m.resource === le ? p : m.resource, f = a ? t._tempSlot : e.slot,
                        g = i.slot === le ? f : i.slot, y = {}, b = {}, x = t._isTimeline,
                        D = x ? "timeline" : "schedule",
                        T = a || +d != +o.startDate || +h != +o.endDate || u !== o.allDay || _ !== p || f !== g, S = v,
                        C = void 0;
                    if (_ !== p && (!a || e.external) && !t._isSingleResource) if (me(v) && v.length && p) {
                        var w = v.indexOf(_);
                        -1 === v.indexOf(p) && (S = v.slice()).splice(w, 1, p)
                    } else S = p;
                    C = S && n.resources ? me(S) ? S : [S] : t._resources.map((function (e) {
                        return e.id
                    }));
                    for (var k = !1 !== m.overlap && !1 !== t._resourcesMap[p].eventOverlap && !1 !== n.eventOverlap, M = 0, E = C; M < E.length; M++) {
                        var N = E[M];
                        if (t._invalids[N] && (y[N] = t._invalids[N][g]), t._events[N]) {
                            for (var I = {}, L = t._events[N][g], H = 0, O = Object.keys(L); H < O.length; H++) {
                                var Y = O[H], P = L[Y];
                                I[Y] = {
                                    allDay: P.allDay.filter((function (e) {
                                        return e.id !== l.id && (!k || !1 === e.original.overlap)
                                    })), data: P.data.filter((function (e) {
                                        return e.id !== l.id && (!k || !1 === e.original.overlap)
                                    }))
                                }
                            }
                            b[N] = I
                        }
                    }
                    var F = e.action || (s.dragData ? "drag" : "click"), V = !r && (!T || n.eventDragEnd({
                        action: F,
                        collision: xl(y, d, h, u, x, n.invalidateEvent, n.exclusiveEndDates),
                        create: a,
                        domEvent: e.domEvent,
                        event: l,
                        from: e.from,
                        overlap: xl(b, d, h, u, x, "strict", n.exclusiveEndDates),
                        resource: S !== bl ? S : le,
                        slot: g !== bl ? g : le,
                        source: D
                    })), z = s.isTouchDrag && !r && (!a || V);
                    if (V && z && _ !== p && !m.color) {
                        var R = Le(t._resources, (function (e) {
                            return e.id === p
                        })), A = R && R.color;
                        A ? (l.color = A, l.style.background = A, l.style.color = Mn(A)) : (l.color = le, l.style = {})
                    }
                    z || "click" === F || t._hook("onEventDragEnd", {
                        domEvent: e.domEvent,
                        event: (a ? t._tempEvent : e.event).original,
                        resource: p !== bl ? p : le,
                        slot: g !== bl ? g : le,
                        source: D
                    }), t.setState({
                        dragData: z ? {
                            draggedEvent: V ? l : c({}, o),
                            originDate: V ? l.date : o.date,
                            originDates: V ? t._getDragDates(l, p, g) : i.originDates,
                            originResource: V ? p : i.originResource
                        } : le, isTouchDrag: z
                    }), t._tempStart = 0, t._tempEnd = 0, t._tempAllDay = le, t._dragDelta = le, t._onMouseMove(e.domEvent), t._isTouch = !1
                }
            }, t._onExternalDrag = function (e) {
                var n = t.s, a = e.clone, s = e.from === t, i = !s && n.externalDrop,
                    r = s && n.externalDrag && !n.dragToMove, o = t.state.dragData;
                if (i || n.externalDrag) {
                    var l = !r && e.endY < t._gridContBottom && e.endY > t._allDayTop && e.endX > t._gridContLeft && e.endX < t._gridContRight;
                    switch (e.eventName) {
                        case"onDragModeOff":
                            i && t._onEventDragModeOff(e);
                            break;
                        case"onDragModeOn":
                            i && t._onEventDragModeOn(e);
                            break;
                        case"onDragStart":
                            i ? t._onEventDragStart(e) : s && (t._onCalendar = !0);
                            break;
                        case"onDragMove":
                            if (!s && !i) return;
                            l ? (t._onCalendar || t._hook("onEventDragEnter", {
                                domEvent: e.domEvent,
                                event: e.event,
                                source: t._isTimeline ? "timeline" : "schedule"
                            }), (s || i && !1 !== t._onEventDragMove(e)) && (a.style.display = "none"), t._onCalendar = !0) : t._onCalendar && (t._hook("onEventDragLeave", {
                                domEvent: e.domEvent,
                                event: e.event,
                                source: t._isTimeline ? "timeline" : "schedule"
                            }), clearTimeout(t._scrollTimer), a.style.display = "table", s && !o || t.setState({
                                dragData: {
                                    draggedDates: {},
                                    draggedEvent: s ? o && o.draggedEvent : le,
                                    originDates: s ? o && o.originDates : le
                                }
                            }), t._tempStart = 0, t._tempEnd = 0, t._tempAllDay = le, t._tempResource = le, t._dragDelta = le, t._onCalendar = !1, t._onMouseLeave(le, !0));
                            break;
                        case"onDragEnd":
                            i && (l && t._tempResource !== le ? t._onEventDragEnd(e) : (t.setState({
                                dragData: le,
                                isTouchDrag: !1
                            }), t._hook("onEventDragEnd", {
                                domEvent: e.domEvent,
                                event: e.event,
                                resource: e.resource,
                                slot: e.slot,
                                source: e.source
                            })))
                    }
                }
            }, t
        }

        return l(t, e), t.prototype._isToday = function (e) {
            return da(new Date(e), fa(this.s))
        }, t.prototype._formatTime = function (e, t) {
            var n = this.s, a = n.timeFormat,
                s = /a/i.test(a) && this._stepLabel === jn && e % jn == 0 ? a.replace(/.[m]+/i, "") : a,
                i = new Date(+Un + e),
                r = fa(n, i.getFullYear(), i.getMonth(), i.getDate(), i.getHours(), i.getMinutes());
            return Xn(r) && t && r.setTimezone(t), xa(s, r, n)
        }, t.prototype._getEventPos = function (e, t, n, a) {
            var s = this.s, i = e.allDay ? le : s, r = fa(i, t.getFullYear(), t.getMonth(), t.getDate()),
                o = ia(Ca(r, 1)), l = i ? this._firstDayTz : this._firstDay, c = i ? this._lastDayTz : this._lastDay,
                d = this._isTimeline, h = !d && !this._groupByResource, u = e.allDay, m = this._startTime,
                _ = this._endTime + 1, p = this._time, v = this._hasSlots, f = this._hasResY,
                g = this._isDailyResolution, y = s.eventList, b = f ? 0 : this._dayIndexMap[n], x = e.start, D = e.end,
                T = Dl(e, s, y, d, g, l, this._cols, this._colIndexMap),
                S = Tl(e, s, y, d, g, c, this._cols, this._colIndexMap), C = +T == +S ? 1 : 0;
            if ((!u && !d || f && !v) && (T < r && (x = "", T = fa(s, r)), S >= o && (D = "", S = fa(s, +o - 1)), S >= o && (S = fa(s, +o - 1))), u || d) {
                if (!a.get(e.original) || v || f || h) {
                    var w = s.startDay, k = s.endDay, M = u || y, E = !da(T, S), N = this._daysNr;
                    d && E && $n(T) >= _ && (T = fa(s, +ia(T) + _));
                    var I = wl(T, m, p, l, w, k), L = function (e, t, n, a, s, i, r, o, l, c) {
                        var d = e, h = t, u = Ca(ia(h), 1);
                        d < a && (d = a), h > s && (h = u = s);
                        var m = $n(d), _ = $n(h);
                        i > m && (m = i), r < _ && (_ = r), da(d, h) || (m > r && (m = r), _ < i && (_ = i));
                        var p = 0;
                        if (da(d, h)) p = c ? n : _ - m; else for (var v = ia(d); v < u; v.setDate(v.getDate() + 1)) ka(v.getDay(), o, l) && (!c && da(v, d) ? p += n - m + i : !c && da(v, h) ? p += _ - i : p += n);
                        return 100 * p / n
                    }(T, S, p, l, c, m, _, w, k, M);
                    if (d) {
                        var H = 0;
                        if (y && !g && (b = this._dayIndexMap[sa(T)]), "month" === s.resolution || "quarter" === s.resolution) {
                            var O = this._days[b].dayDiff, Y = sa(S >= c ? Ca(c, -1) : S), P = this._dayIndexMap[Y];
                            H = this._days[P].dayDiff - O
                        }
                        L = (L + 100 * H) / N, I = (I + 100 * b) / N
                    }
                    var F = d ? M ? {
                        left: s.rtl ? "" : (v ? "" : 100 * b / N) + "%",
                        right: s.rtl ? (v ? "" : 100 * b / N) + "%" : "",
                        width: (v ? "" : L) + "%"
                    } : {
                        height: this._setRowHeight ? "" : "100%",
                        left: s.rtl ? "" : I + "%",
                        right: s.rtl ? I + "%" : "",
                        top: "0",
                        width: L + "%"
                    } : {width: (E && !h ? L : 100) + "%"}, V = $n(T) < _ && S > l, z = $n(S) + C > m;
                    if (M || E && L > 0 || V && z) return a.set(e.original, !0), {
                        end: D,
                        endDate: S,
                        position: F,
                        start: x,
                        startDate: T
                    }
                }
            } else if ($n(T) < _ && $n(S) + C > m && S >= T) {
                var R = function (e, t, n, a, s) {
                    var i = $n(e), r = $n(t);
                    return a > i && (i = a), s < r && (r = s), 100 * (r - i) / n
                }(T, S, p, m, _);
                return {
                    cssClass: R < 2 ? " mbsc-schedule-event-small-height" : "",
                    end: D,
                    endDate: S,
                    position: {height: R + "%", top: wl(T, m, p) + "%", width: "100%"},
                    start: x,
                    startDate: T
                }
            }
            return le
        }, t.prototype._getEventData = function (e, t, n, a) {
            var s = this.s, i = cl(s, e, t, !0, n, !1, !this._isTimeline || this._hasResY, this._isDailyResolution, a);
            return e.allDay && s.exclusiveEndDates && +i.endDate == +i.startDate && (i.endDate = ia(Ca(i.startDate, 1))), i
        }, t.prototype._getEvents = function (e) {
            var t = this, n = this.s, a = this._resources, s = this._slots, i = this._hasSlots, r = this._hasResY,
                o = this._isTimeline, l = !o, c = {}, d = kl(e, a, s, !!n.resources, !!n.slots), h = {},
                u = this._firstDay, m = this._lastDay, _ = this._setRowHeight, p = {}, v = this._cols,
                f = this._createEventMaps || n.renderHour || n.renderHourFooter || n.renderDay || n.renderDayFooter || n.renderWeek || n.renderWeekFooter || n.renderMonth || n.renderMonthFooter || n.renderQuarter || n.renderQuarterFooter || n.renderYear || n.renderYearFooter;
            if (f && v.forEach((function (e) {
                return e.eventMap = {}
            })), n.connections) for (var g = 0, y = n.connections; g < y.length; g++) {
                var b = y[g];
                p[b.from] = !0, p[b.to] = !0
            }
            for (var x = function (a) {
                var g = a.id, y = new Map, b = [], x = 0;
                c[g] = {};
                for (var T = function (s) {
                    var T = s.id, S = d[g][T], C = Object.keys(S).sort();
                    c[g][T] = {
                        all: {
                            allDay: [],
                            data: []
                        }
                    }, l && (h[T] = bs(n, S, u, m, -1, D._daysNr, !0, n.startDay, !1, n.eventOrder));
                    for (var w = function (s) {
                        var d = e[s].date;
                        if (D._dayIndexMap[s] !== le && ka(d.getDay(), n.startDay, n.endDay)) {
                            var C = xs(S[s]) || [], w = [], k = {}, M = 0;
                            c[g][T][s] = {allDay: [], data: []}, r && (x = D._eventRows[s + "-" + g] || 0);
                            for (var E = 0, N = C; E < N.length; E++) {
                                var I = N[E];
                                if (!I.allDay || o) {
                                    var L = D._getEventData(I, d, a), H = D._getEventPos(L, d, s, y);
                                    if (L.position = le, H && (L.cssClass = H.cssClass, L.position = H.position, (l || r) && (L.showText = !0, Sl(n, w, L, k, n.eventList)), c[g][T].all.data.push(L), b.push(L), M++, D._eventMap[L.id] = L, f)) for (var O = D._stepCell, Y = D._isDailyResolution && O < 864e5, P = I.allDay ? u : pa(n, u), F = L.startDate > P ? L.startDate : P, V = D._colIndexMap[sa(F)], z = !0; z && V < v.length;) {
                                        for (var R = v[V], A = R.date, W = V < v.length - 1 ? v[V + 1].date : m, U = A; U < W;) {
                                            var B = +U, j = Y ? new Date(B + O) : W, K = I.allDay ? A : pa(n, U),
                                                X = I.allDay ? W : pa(n, j);
                                            ea(L.startDate, L.endDate, K, X, !0) ? (R.eventMap[B] || (R.eventMap[B] = []), R.eventMap[B].push(L.original), z = !0) : z = !1, U = j
                                        }
                                        V++
                                    }
                                    c[g][T][s].data.push(L), o && I.allDay && c[g][T][s].allDay.push(L)
                                }
                            }
                            if (i && M > x && (x = M), l || r && !i) {
                                l && h[T][s] && h[T][s].data.forEach((function (e) {
                                    var n = e.event, i = e.width;
                                    if (n) {
                                        var r = t._getEventData(n, d, a), o = t._getEventPos(r, d, s, y);
                                        r.position = {width: o ? o.position.width : i}, r.showText = !!o, c[g][T][s].allDay.push(r)
                                    }
                                }));
                                for (var J = 0, q = w; J < q.length; J++) {
                                    var G = q[J], Z = G.length;
                                    _ && Z > x && (x = Z);
                                    for (var Q = 0; Q < Z; Q++) for (var $ = 0, ee = G[Q]; $ < ee.length; $++) {
                                        var te = ee[$], ne = ((k[te.uid] || Z) - Q) / Z * 100;
                                        l ? (te.position.width = ne + "%", te.position[n.rtl ? "right" : "left"] = 100 * Q / Z + "%", te.position[n.rtl ? "left" : "right"] = "auto") : (te.position.height = _ ? "" : ne + "%", te.position.top = _ ? Q : 100 * Q / Z + "%")
                                    }
                                }
                            }
                            r && (D._eventRows[s + "-" + g] = x || 1)
                        } else if (n.connections) for (var ae = 0, se = C = S[s] || []; ae < se.length; ae++) {
                            var ie = se[ae], re = ie.id;
                            !D._eventMap[re] && p[re] && (D._eventMap[re] = D._getEventData(ie, d, a))
                        }
                    }, k = 0, M = C; k < M.length; k++) {
                        w(M[k])
                    }
                }, S = 0, C = s; S < C.length; S++) {
                    T(C[S])
                }
                if (o && !i && !r) {
                    for (var w = [], k = {}, M = 0, E = b; M < E.length; M++) {
                        var N = E[M];
                        Sl(n, w, N, k, n.eventList, o, D._isDailyResolution, u, D._firstDayTz, m, D._lastDayTz, D._cols, D._colIndexMap)
                    }
                    for (var I = function (e) {
                        var t = e.length;
                        _ && t > x && (x = t), e.forEach((function (e, n) {
                            for (var a = 0, s = e; a < s.length; a++) {
                                var i = s[a], r = ((k[i.uid] || t) - n) / t * 100;
                                i.position.height = _ ? "" : r + "%", i.position.top = _ ? n : 100 * n / t + "%"
                            }
                        }))
                    }, L = 0, H = w; L < H.length; L++) {
                        I(H[L])
                    }
                }
                r || (D._eventRows[g] = x || 1)
            }, D = this, T = 0, S = a; T < S.length; T++) {
                x(S[T])
            }
            return c
        }, t.prototype._getInvalids = function (e) {
            var t, n = this.s, a = n.eventList, s = e || {}, i = {},
                r = a ? ia(new Date(n.minDate)) : new Date(n.minDate),
                o = a ? ia(Ca(new Date(n.maxDate), 1)) : new Date(n.maxDate), l = this._isTimeline;
            if (n.minDate) for (var c = ia(this._firstDay); c < r; c.setDate(c.getDate() + 1)) {
                (S = s[T = sa(c)] || []).push({end: r, start: new Date(c)}), s[T] = S
            }
            if (n.maxDate) for (c = ia(o); c < this._lastDay; c.setDate(c.getDate() + 1)) {
                (S = s[T = sa(c)] || []).push({end: new Date(this._lastDay), start: o}), s[T] = S
            }
            for (var d = kl(s, this._resources, this._slots, !!n.resources, !!n.slots), h = Object.keys(s).sort(), u = 0, m = this._resources; u < m.length; u++) {
                var _ = m[u], p = _.id, v = new Map;
                i[p] = {};
                for (var f = 0, g = this._slots; f < g.length; f++) {
                    var y = g[f].id, b = {allDay: [], data: []};
                    i[p][y] = {all: b};
                    for (var x = 0, D = h; x < D.length; x++) {
                        var T;
                        c = ga(T = D[x]);
                        if (this._dayIndexMap[T] !== le && ka(c.getDay(), n.startDay, n.endDay)) {
                            var S = d[p][y][T] || [], C = {allDay: [], data: []}, w = [];
                            i[p][y][T] = C;
                            for (var k = 0, M = S; k < M.length; k++) {
                                var E = M[k];
                                if (ve(E) || ma(E)) {
                                    var N = ga(E);
                                    E = {allDay: !0, end: new Date(N), start: N}
                                }
                                var I = this._getEventData(E, c, _, !0);
                                I.cssClass = E.cssClass ? " " + E.cssClass : "", I.position = le;
                                var L = this._getEventPos(I, c, T, v);
                                if (L && (!l && 0 === $n(L.startDate) && new Date(+L.endDate + 1) >= Ca(c, 1) ? I.allDay = !0 : (I.position = L.position, $n(L.startDate) <= this._startTime && (I.cssClass += " mbsc-schedule-invalid-start"), $n(L.endDate) >= this._endTime && (I.cssClass += " mbsc-schedule-invalid-end")), w.push(I)), C.data.push(I), I.allDay) {
                                    l || (I.position = {}), C.allDay = [I], C.data = [I], w = [I];
                                    break
                                }
                            }
                            (t = b.data).push.apply(t, w)
                        }
                    }
                }
            }
            return i
        }, t.prototype._getColors = function (e) {
            for (var t = this.s, n = {}, a = kl(e, this._resources, this._slots, !!t.resources, !!t.slots), s = Object.keys(e || {}).sort(), i = this._hasSlots, r = this._isTimeline, o = this._hasResY, l = 0, c = this._resources; l < c.length; l++) {
                var d = c[l], h = d.id, u = new Map;
                n[h] = {};
                for (var m = 0, _ = this._slots; m < _.length; m++) {
                    var p = _[m].id;
                    n[h][p] = {all: {allDay: [], data: []}};
                    for (var v = 0, f = s; v < f.length; v++) {
                        var g = f[v], y = ga(g);
                        if (this._dayIndexMap[g] !== le && ka(y.getDay(), t.startDay, t.endDay)) {
                            var b = a[h][p][g] || [], x = o || i || !r ? g : "all";
                            (!r || i || o) && (n[h][p][x] = {allDay: [], data: []});
                            for (var D = n[h][p][x], T = 0, S = b; T < S.length; T++) {
                                var C = S[T], w = this._getEventData(C, y, d, !0);
                                if (w.cssClass = C.cssClass ? " " + C.cssClass : "", w.allDay && !r) D.allDay = [w]; else {
                                    var k = this._getEventPos(w, y, g, u);
                                    k && (w.position = k.position, $n(k.startDate) <= this._startTime && (w.cssClass += " mbsc-schedule-color-start"), $n(k.endDate) >= this._endTime && (w.cssClass += " mbsc-schedule-color-end"), D.data.push(w))
                                }
                                w.position.background = C.background, w.position.color = C.textColor ? C.textColor : Mn(C.background)
                            }
                        }
                    }
                }
            }
            return n
        }, t.prototype._flattenResources = function (e, t, n, a) {
            for (var s = 0, i = e && e.length ? e : [{id: bl}]; s < i.length; s++) {
                var r = i[s];
                r.depth = n, r.isParent = !(!r.children || !r.children.length), t.push(r), this._resourcesMap[r.id] = r, r.isParent && (this._hasHierarchy = !0, r.collapsed && !a || this._flattenResources(r.children, t, n + 1, a))
            }
            return t
        }, t.prototype._render = function (e, t) {
            var n = this, a = this._prevS, s = this._isTimeline, i = new Date(e.selected), r = +e.size,
                o = Cl(e.timeLabelStep), l = Cl(e.timeCellStep), c = e.firstDay, d = e.startDay, h = e.endDay,
                u = e.resources, m = e.slots, _ = !1 === e.virtualScroll, p = e.resolution,
                f = "day" === p || "hour" === p || !s, g = "day" === e.resolutionVertical, y = !1, b = !1,
                x = this._startTime, D = this._endTime;
            if (d === a.startDay && h === a.endDay && e.checkSize === a.checkSize && e.eventList === a.eventList && e.refDate === a.refDate && e.size === a.size && e.type === a.type && e.resolution === a.resolution && e.resolutionVertical === a.resolutionVertical && e.displayTimezone === a.displayTimezone && e.weekNumbers === a.weekNumbers || (y = !0, this._viewChanged = !0), (y || e.rtl !== a.rtl || e.dateFormat !== a.dateFormat || e.getDay !== a.getDay || e.rowHeight !== a.rowHeight) && (b = !0), e.startTime !== a.startTime || e.endTime !== a.endTime || e.timeLabelStep !== a.timeLabelStep || e.timeCellStep !== a.timeCellStep || e.timeFormat !== a.timeFormat || this._startTime === le || this._endTime === le) {
                var T = ga(e.startTime || "00:00"), S = new Date(+ga(e.endTime || "00:00") - 1);
                this._startTime = x = $n(T), this._endTime = D = $n(S), this._time = D - x + 1, this._timesBetween = xe(ke(l / o) - 1), this._times = [], this._timeLabels = {}, this._viewChanged = !0;
                for (var C = l * Bn, w = ke(x / C) * C, k = function (e) {
                    if (M._times.push(e), s) {
                        var t = e === w;
                        M._timeLabels[e] = t || e % (o * Bn) == 0 ? M._formatTime(t ? x : e) : "", M._timesBetween.forEach((function (t, a) {
                            var s = e + (a + 1) * o * Bn;
                            n._timeLabels[s] = n._formatTime(s)
                        }))
                    }
                }, M = this, E = w; E <= D; E += C) k(E);
                b = !0
            }
            if (e.slots === a.slots && this._slots !== le || (this._hasSlots = s && !!m && m.length > 0, this._slots = m && m.length ? m : [{id: bl}], b = !0), u === a.resources && this._resources !== le || (this._hasResources = !!u && u.length > 0, this._hasHierarchy = !1, this._resourcesMap = {}, this._resources = this._flattenResources(u, [], 0, !0), this._visibleResources = this._flattenResources(u, [], 0), this._isSingleResource = 1 === this._resources.length, b = !0), y || e.selected !== a.selected || e.getDay !== a.getDay || e.monthNames !== a.monthNames || e.dateFormat !== a.dateFormat || e.currentTimeIndicator !== a.currentTimeIndicator) {
                var N = va(fa(e)), I = "day" === e.type, L = "month" === e.type, H = "year" === e.type, O = I && r < 2,
                    Y = e.navigationService, P = e.dateFormat.search(/m/i), F = e.dateFormat.search(/y/i) < P,
                    V = e.dateFormat.search(/d/i) < P, z = void 0, R = void 0, A = void 0, W = void 0;
                if (r > 1 || H || L) A = z = Y.firstDay, W = R = Y.lastDay; else A = Ca(ca(i, e), d - c + (d < c ? 7 : 0)), I && (i < A && (A = Ca(A, -7)), i >= Ca(A, 7) && (A = Ca(A, 7))), W = Ca(A, h - d + 1 + (h < d ? 7 : 0)), z = I ? ia(i) : A, R = I ? Ca(z, 1) : W;
                s && "week" === p && (H || L) && (z = Y.viewStart, R = Y.viewEnd), e.selected !== a.selected && I && r < 2 && (b = !0), this._isMulti = r > 1 || H, this._isDailyResolution = f, this._hasResY = g, this._firstDay = z, this._lastDay = R, this._firstDayTz = fa(e, z.getFullYear(), z.getMonth(), z.getDate()), this._lastDayTz = fa(e, R.getFullYear(), R.getMonth(), R.getDate()), this._selectedDay = +ia(i), this._setRowHeight = e.eventList || "equal" !== e.rowHeight, this._shouldAnimateScroll = a.selected !== le && e.selected !== a.selected && !this._viewChanged, this._showTimeIndicator = !e.eventList && (e.currentTimeIndicator === le ? !s || f && l < 1440 : e.currentTimeIndicator) && (I && r < 2 ? da(N, i) : z <= N && R >= N), this._colIndexMap = {}, this._cols = [], this._dayIndexMap = {}, this._days = [], this._headerDays = [];
                var U = 0, B = -1, j = 0, K = 0, X = -1, J = "", q = -1, G = -1, Z = "", Q = -1, $ = -1, ee = "",
                    te = z, ne = R, ae = 0, se = le, ie = 0;
                !s && O && (te = A, ne = W);
                for (E = ia(te); E < ia(ne); E.setDate(E.getDate() + 1)) {
                    var re = sa(E), oe = E.getDay();
                    if (this._dayIndexMap[re] = U, ka(oe, d, h)) {
                        var ce = void 0, de = "", he = "", me = f;
                        if (s && !g) {
                            ie = e.getWeekNumber(Ca(E, (7 - c + 1) % 7));
                            var _e = e.getDay(E), pe = e.getMonth(E), ve = e.getYear(E), fe = e.monthNames[pe];
                            if (X !== ve && (X = ve, "year" === p && (me = !0, J = "" + X)), q !== pe) {
                                if ("month" === p) J = H && r < 2 ? fe : F ? ve + " " + fe : fe + " " + ve, me = !0; else if ("quarter" === p && pe % 3 == 0) {
                                    var ge = pe / 3 + 1;
                                    J = e.quarterText.replace("{count}", "" + ge), me = !0
                                } else f && (de = Z = F ? ve + " " + fe : fe + " " + ve);
                                G = U, q = pe, K = e.getMaxDayOfMonth(X, q)
                            }
                            if (Q !== ie && ($ = U, Q = ie, he = ee = e.weekText.replace(/{count}/, Q), U > 0 && (this._days[U - 1].lastOfWeek = !0)), (oe === d || !U) && "week" === p) {
                                var ye = V ? "D MMM" : "MMM D";
                                se = Ca(E, h - d + (h < d ? 7 : 0)), J = xa(ye, E, e) + " - " + xa(ye, se, e), me = !0
                            }
                            !(ce = _e === K || oe === h && (d - h - 1 + 7) % 7 >= K - _e) || "month" !== p && "quarter" !== p || (j += 31 - K)
                        }
                        var be = {
                            columnTitle: J,
                            date: new Date(E),
                            dateIndex: U,
                            dateKey: re,
                            dateText: xa(g ? L && !this._isMulti ? "D DDD" : u ? e.dateFormatLong : e.dateFormat : L || this._isMulti ? "D DDD" : e.dateFormatLong, E, e),
                            day: e.getDay(E),
                            dayDiff: j,
                            endDate: se,
                            eventMap: {},
                            label: xa("DDDD, MMMM D, YYYY", E, e),
                            lastOfMonth: ce,
                            monthIndex: G,
                            monthText: Z,
                            monthTitle: de,
                            timestamp: +ia(E),
                            weekIndex: $,
                            weekNr: ie,
                            weekText: ee,
                            weekTitle: he
                        };
                        if (me && (be.isActive = E <= N && N < ne, ae && (this._cols[B].isActive = ae <= +N && N < E), ae = +E, this._cols.push(be), B++), O && this._headerDays.push(be), O && this._selectedDay !== +E || this._days.push(be), ce && ("month" === p || "quarter" === p)) for (var De = K; De < 31; De++) this._days.push(be), U++;
                        U++
                    }
                    this._colIndexMap[re] = B < 0 ? 0 : B
                }
                this._colsNr = g ? 1 : B + 1, this._daysNr = g || O ? 1 : U
            }
            this._groupByResource = "date" !== e.groupBy && !("day" === e.type && r < 2) || this._isSingleResource, this._stepCell = l * Bn, this._stepLabel = o * Bn, this._dayNames = t.dayNameWidth > 49 ? e.dayNamesShort : e.dayNamesMin, this._displayTime = o < 1440 && f, this._eventHeight = t.eventHeight || (e.eventList ? 24 : 46), this._showCursorTime = this._displayTime && !!(e.dragToCreate || e.dragToMove || e.dragToResize), (e.colorsMap !== a.colorsMap || b) && (this._colors = this._getColors(e.colorsMap)), e.eventMap === a.eventMap && !b && this._events || (this._eventMap = {}, this._eventRows = {}, this._events = this._getEvents(e.eventMap)), (e.invalidsMap !== a.invalidsMap || b) && (this._invalids = this._getInvalids(e.invalidsMap));
            var Te = s && e.eventMap !== a.eventMap;
            if ((e.height !== a.height || e.width !== a.width || Te || b) && (this._shouldCheckSize = v && !!e.height && !!e.width), e.scroll !== a.scroll && (this._shouldScroll = !0), e.height !== le && (this._hasSideSticky = yn && !e.rtl, this._hasSticky = yn), s) {
                var Se = this._cols, we = this._colsNr, Me = [],
                    Ee = this._daysBatchNr === le ? ue(ke(this._stepCell / (this._time / 30)), 1, 30) : this._daysBatchNr,
                    Ne = this._dayIndexMap[sa(i)] || 0, Ie = t.batchIndexX !== le ? t.batchIndexX : Ce(Ne / Ee),
                    Le = Math.min(Ie * Ee, we - 1), He = _ ? 0 : Math.max(0, Le - ke(3 * Ee / 2)),
                    Oe = _ ? we : Math.min(He + 3 * Ee, we), Ye = Se[He].date,
                    Pe = Oe < we ? Se[Oe].date : this._lastDay, Fe = {};
                for (U = He; U < Oe; U++) Fe[Se[U].dateKey] = !0, Me.push(Se[U]);
                this._batchStart = fa(e, Ye.getFullYear(), Ye.getMonth(), Ye.getDate()), this._batchEnd = fa(e, Pe.getFullYear(), Pe.getMonth(), Pe.getDate()), this._daysBatch = Me, this._daysBatchNr = Ee, this._placeholderSizeX = _ ? 0 : t.dayWidth * Ce(Math.max(0, Le - 3 * Ee / 2)) || 0, this._rowHeights = {}, this._dragCol = "", this._dragRow = "";
                var Ve = (t.scrollContHeight || 0) - (t.headerHeight || 0) - (t.footerHeight || 0),
                    ze = t.rowHeight || 52, Re = t.parentRowHeight || 52,
                    Ae = t.gutterHeight !== le ? t.gutterHeight : 16, We = t.batchIndexY || 0,
                    Ue = this._visibleResources, Be = g ? this._days : [{}], je = Ue.length * Be.length, Ke = [],
                    Xe = [], Je = {}, qe = {}, Ge = {}, Ze = [], Qe = 0, $e = 0;
                t.hasScrollY && (this._resourceTops = {}), Be.forEach((function (e, a) {
                    Ue.forEach((function (s, i) {
                        var r = (g ? e.dateKey + "-" : "") + s.id;
                        if (Ge[r] = s, Ve) {
                            var o = s.children ? Re : ze,
                                l = n._setRowHeight ? !1 === s.eventCreation ? o : Math.max((n._eventRows[r] || 1) * n._eventHeight + Ae, o) : o;
                            n._rowHeights[r] = n._setRowHeight ? l + "px" : le, t.hasScrollY && (n._resourceTops[r] = Qe), $e || Ze.push({
                                startIndex: a * Ue.length + i,
                                top: Qe
                            }), Qe += l, ($e += l) > Ve && ($e = 0)
                        }
                        Ke.push({dayIndex: a, key: r, resource: s})
                    }))
                }));
                var et = Ze[We - 1], tt = Ze[We + 2], nt = et ? et.startIndex : 0,
                    at = tt ? tt.startIndex : Qe ? je : 30;
                (_ || Qe && Qe <= Ve) && (nt = 0, at = je);
                var st = [], it = -1;
                for (U = nt; U < at; U++) {
                    var rt = Ke[U];
                    if (rt) {
                        var ot = rt.dayIndex;
                        it !== ot && (st = [], Xe.push({
                            day: g ? this._days[ot] : le,
                            rows: st
                        }), it = ot, Je[ot] = Xe[Xe.length - 1]), qe[rt.key] = !0, st.push(rt.resource)
                    }
                }
                if (t.dragData && t.dragData.originResource !== le) {
                    var lt = t.dragData.originResource,
                        ct = (re = sa(new Date(t.dragData.originDate)), (g ? re + "-" : "") + lt),
                        dt = g ? this._dayIndexMap[re] : 0;
                    if (!qe[ct]) {
                        var ht = Je[dt];
                        ht || (ht = {
                            day: g ? this._days[dt] : le,
                            hidden: !0,
                            rows: []
                        }, Xe.push(ht)), ht.rows.push(Ge[ct]), this._dragRow = ct
                    }
                    Fe[re] || (this._dragCol = re, Me.push(Se[this._colIndexMap[re]]))
                }
                this._gridHeight = Qe, this._virtualPagesY = Ze, this._colClass = u || !g ? "mbsc-timeline-resource-col" : "mbsc-timeline-date-col", this._hasRows = this._hasResources || g, this._rows = Ke, this._rowBatch = Xe, this._placeholderSizeY = et && !_ ? et.top : 0
            }
        }, t.prototype._mounted = function () {
            var e, t, n, a = this;
            this._unlisten = Bi(this._el, {
                onDoubleClick: function (e) {
                    var t = a.s;
                    n && t.clickToCreate && "single" !== t.clickToCreate && (e.click = !0, a._onEventDragStart(e) && a._onEventDragEnd(e))
                }, onEnd: function (n) {
                    !e && t && "single" === a.s.clickToCreate && (n.click = !0, a._onEventDragStart(n) && (e = !0)), e && (n.domEvent.preventDefault(), a._onEventDragEnd(n)), clearTimeout(a._touchTimer), e = !1, t = !1
                }, onMove: function (n) {
                    var s = a.s;
                    e && s.dragToCreate ? (n.domEvent.preventDefault(), a._onEventDragMove(n)) : t && s.dragToCreate && (Math.abs(n.deltaX) > 7 || Math.abs(n.deltaY) > 7) ? a._onEventDragStart(n) ? e = !0 : t = !1 : clearTimeout(a._touchTimer)
                }, onStart: function (s) {
                    var i = a.s;
                    if (s.create = !0, s.click = !1, a._isTouch = s.isTouch, !e && (i.dragToCreate || i.clickToCreate)) {
                        var r = s.domEvent.target && s.domEvent.target.classList || [];
                        (n = r.contains("mbsc-schedule-item") || r.contains("mbsc-schedule-all-day-item") || r.contains("mbsc-timeline-column")) && (s.isTouch && i.dragToCreate ? a._touchTimer = setTimeout((function () {
                            a._onEventDragStart(s) && (a._onEventDragModeOn(s), e = !0)
                        }), 350) : t = !s.isTouch)
                    }
                }
            }), this._unsubscribe = nl(this._onExternalDrag)
        }, t.prototype._updated = function () {
            var e = this, t = this.s, n = this.state;
            this._shouldCheckSize && Ie(this, (function () {
                var a, s, i, r, o, l, c, d, h = e._resCont, u = e._headerCont, m = e._footerCont, _ = e._sidebarCont,
                    p = e._stickyFooter, v = u.offsetHeight, f = h ? h.offsetWidth : 0, g = _ ? _.offsetWidth : 0,
                    y = m ? m.offsetHeight : 0, b = e._scrollCont, x = b.offsetWidth, D = b.offsetHeight,
                    T = b.clientWidth, S = b.clientHeight, C = T - f - g, w = S - v - y, k = x - T, M = D - S,
                    E = b.scrollHeight > S, N = b.scrollWidth > T, I = n.eventHeight;
                if (e._calcGridSizes(), e._isTimeline) {
                    var L = b.querySelector(".mbsc-timeline-day"), H = b.querySelector(".mbsc-timeline-empty-row"),
                        O = b.querySelector(".mbsc-timeline-empty-parent"),
                        Y = b.querySelector(".mbsc-timeline-row-gutter"), P = e._colsNr;
                    if (i = L ? L.offsetWidth : 64, l = H ? H.offsetHeight : 52, c = O ? O.offsetHeight : 52, d = Y ? Y.offsetHeight : 16, i * P < C && (N = !1, M = 0), e._gridHeight && e._gridHeight < w && (E = !1, k = 0), i = N ? i : Ce(C / P), o = N ? i * P : C, s = e._stepCell * i / e._time, e._gridWidth = o, e._daysBatchNr = Math.max(1, Math.ceil(C / (i || 1))), e._hasSticky || (u.style[t.rtl ? "left" : "right"] = k + "px", m && (m.style[t.rtl ? "left" : "right"] = k + "px", m.style.bottom = M + "px")), e._hasSideSticky || (h && (h.style.bottom = M + "px"), _ && (_.style[t.rtl ? "left" : "right"] = k + "px")), p && (p.style.bottom = M + "px"), e._setRowHeight) {
                        var F = b.querySelector(".mbsc-schedule-event");
                        I = F ? F.clientHeight : I || (t.eventList ? 24 : 46)
                    }
                    if (!E && n.rowHeight) {
                        e._resourceTops = {};
                        var V = e._gridCont, z = V.getBoundingClientRect();
                        V.querySelectorAll(".mbsc-timeline-row").forEach((function (t, n) {
                            e._resourceTops[e._rows[n].key] = t.getBoundingClientRect().top - z.top
                        }))
                    }
                } else {
                    var R = e._el.querySelector(".mbsc-schedule-column-inner"),
                        A = e._el.querySelector(".mbsc-schedule-header-item");
                    a = R ? e._stepCell * R.offsetHeight / e._time : 0, r = A ? A.offsetWidth : 0
                }
                e._onScroll(), e._calcConnections = !!t.connections && (e._isParentClick || e._calcConnections || !E), e._shouldCheckSize = l !== n.rowHeight || I !== n.eventHeight, e._isCursorTimeVisible = !1, e.setState({
                    cellHeight: a,
                    cellWidth: s,
                    dayNameWidth: r,
                    dayWidth: i,
                    eventHeight: I,
                    footerHeight: y,
                    gridContWidth: C,
                    gridWidth: o,
                    gutterHeight: d,
                    hasScrollX: N,
                    hasScrollY: E,
                    headerHeight: v,
                    parentRowHeight: c,
                    rowHeight: l,
                    scrollContHeight: N ? S : D,
                    update: e._calcConnections ? (n.update || 0) + 1 : n.update
                })
            })), !this._shouldScroll || !n.dayWidth && this._isTimeline || (setTimeout((function () {
                e._scrollToTime(e._shouldAnimateScroll), e._shouldAnimateScroll = !1
            })), this._shouldScroll = !1), this._viewChanged && setTimeout((function () {
                e._viewChanged = !1
            }), 10)
        }, t.prototype._destroy = function () {
            this._unlisten && this._unlisten(), this._unsubscribe && al(this._unsubscribe)
        }, t.prototype._calcGridSizes = function () {
            var e = this.s, t = this._resources, n = this._isTimeline, a = this._daysNr * (n ? 1 : t.length),
                s = this._gridCont, i = this._scrollCont,
                r = !n && this._el.querySelector(".mbsc-schedule-all-day-wrapper"), o = r && r.getBoundingClientRect(),
                l = s.getBoundingClientRect(), c = i.getBoundingClientRect(), d = n ? l.width : s.scrollWidth,
                h = this._resCont ? this._resCont.offsetWidth : 0;
            this._gridLeft = e.rtl ? l.right - d : l.left, this._gridRight = e.rtl ? l.right : l.left + d, this._gridTop = l.top, this._gridContTop = c.top, this._gridContBottom = c.bottom, this._gridContLeft = c.left + (e.rtl ? 0 : h), this._gridContRight = c.right - (e.rtl ? h : 0), this._allDayTop = o ? o.top : this._gridContTop, this._colWidth = d / (e.eventList ? this._colsNr : a), this._colHeight = l.height
        }, t.prototype._getDragDates = function (e, t, n) {
            var a = this.s, s = {}, i = new Map, r = e.allDay ? this._firstDay : this._firstDayTz, o = e.startDate,
                l = e.endDate;
            for (o = (o = ia(o)) < r ? r : o, l = aa(a, e.allDay || a.eventList, o, l); o <= l;) {
                var d = c({}, e), h = sa(o), u = ka(o.getDay(), a.startDay, a.endDay) && this._getEventPos(e, o, h, i);
                if (u) {
                    var m = d.resource;
                    this._isTimeline && this._setRowHeight && -1 !== (me(m) ? m : [m]).indexOf(this._tempResource) && (u.position.top = d.position.top);
                    var _ = !this._isTimeline || this._hasSlots || this._hasResY ? h : "all";
                    d.date = +ia(o, !0), d.cssClass = u.cssClass, d.start = u.start, d.end = u.end, d.position = u.position, s[t + "__" + (this._isTimeline ? n + "__" : "") + _] = d
                }
                o = Ca(o, 1)
            }
            return s
        }, t.prototype._getGridTime = function (e, t, n, a, s) {
            var i = this._hasResY ? 0 : a,
                r = we(this._isTimeline ? ke(this._time * (t - i * this._colWidth) / this._colWidth) : ke(this._time * (n - 8) / (this._colHeight - 16)), s * Bn),
                o = new Date(+Un + this._startTime + r);
            return fa(this.s, e.getFullYear(), e.getMonth(), e.getDate(), o.getHours(), o.getMinutes())
        }, t.prototype._scrollToTime = function (e) {
            var t = this, n = this._scrollCont, a = this._gridCont, s = this._isTimeline;
            if (n) {
                var i = this.s, r = this._hasResY, o = i.navigateToEvent,
                    l = o && o.start ? Ma(new Date(+ga(o.start, i) - this._stepCell), this._stepCell / Bn) : new Date(i.selected),
                    c = this._colIndexMap[sa(l)];
                c === le || !s || r || "hour" === i.resolution && this._stepCell !== Kn && !i.eventList ? l.setHours(i.eventList ? 0 : l.getHours(), 0) : l = this._cols[c].date;
                var d = wl(l, this._startTime, this._time * (s ? this._daysNr : 1)),
                    h = r ? 0 : la(this._firstDay, l, i.startDay, i.endDay),
                    u = (s ? a.offsetWidth : a.scrollWidth) * (100 * h / this._daysNr + (s ? d : 0)) / 100 + 1,
                    m = void 0;
                if (o || r) {
                    var _ = this._visibleResources, p = o ? o.resource : _[0].id, v = me(p) ? p[0] : p;
                    if (v) if (s) {
                        var f = (r ? sa(l) + "-" : "") + v;
                        m = this._resourceTops && this._resourceTops[f]
                    } else {
                        var g = this._colWidth, y = He(_, (function (e) {
                            return e.id === v
                        })) || 0;
                        u = this._groupByResource && !this._isSingleResource ? this._daysNr * g * y + g * h : _.length * h * g + y * g
                    }
                }
                if (!s) {
                    var b = n.querySelector(".mbsc-schedule-column-inner");
                    m = b ? b.offsetHeight * d / 100 : 0, !this._groupByResource || this._isSingleResource || o || (u = le)
                }
                this._isScrolling++, Nn(n, u, m, e, i.rtl, (function () {
                    setTimeout((function () {
                        t._isScrolling--
                    }), 150)
                }))
            }
        }, t
    }(ja), Fl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._onScroll = function () {
                var e = t._scrollCont;
                if (e) {
                    var n = e.scrollTop, a = "translateX(" + -e.scrollLeft + "px)", s = t._timeCont, i = t._allDayCont,
                        r = t._headerCont, o = (vn ? vn + "T" : "t") + "ransform";
                    i && (i.style[o] = a), s && (s.style.marginTop = -n + "px"), r && (r.style[o] = a), 0 === n ? t.setState({showShadow: !1}) : t.state.showShadow || t.setState({showShadow: !0}), t._onMouseMove()
                }
            }, t._setCont = function (e) {
                t._scrollCont = e
            }, t._setTimeCont = function (e) {
                t._timeCont = e
            }, t._setAllDayCont = function (e) {
                t._allDayCont = e
            }, t._setGridCont = function (e) {
                t._gridCont = e
            }, t._setHeaderCont = function (e) {
                t._headerCont = e
            }, t._setCursorTimeCont = function (e) {
                t._cursorTimeCont = e
            }, t
        }

        return l(t, e), t.prototype._render = function (t, n) {
            e.prototype._render.call(this, t, n);
            var a = this._prevS, s = t.timezones, i = this._stepCell / Bn, r = ke(this._startTime / Bn) % i,
                o = ke(this._endTime / Bn) % i + 1;
            if (s !== a.timezones && (this._timeWidth = s ? {width: 4.25 * s.length + "em"} : le, this._timezones = le, s)) {
                for (var l = [], c = 0, d = s; c < d.length; c++) {
                    var h = d[c], u = void 0;
                    if (ve(h)) {
                        var m = fa(t, 1970, 0, 1);
                        Xn(m) && m.setTimezone(h);
                        var _ = m.getTimezoneOffset() / 60 * -1;
                        u = {label: "UTC" + (_ > 0 ? "+" : "") + _, timezone: h}
                    } else u = h;
                    l.push(u)
                }
                this._timezones = l
            }
            this._largeDayNames = n.dayNameWidth > 99, this._startCellStyle = r % i != 0 ? {height: (n.cellHeight || 50) * ((i - r) % i / i) + "px"} : le, this._endCellStyle = o % i != 0 ? {height: (n.cellHeight || 50) * (o % i) / i + "px"} : le
        }, t
    }(Pl);
    var Vl = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e, t) {
            return function (e, t, n) {
                var a, s = n._colors, i = t.dragData, r = i && i.draggedEvent && i.draggedEvent.id, o = n._events,
                    l = n._invalids, d = n._hb, h = n._rtl, u = n._times, m = n._startTime, _ = n._endTime,
                    p = n._startCellStyle, v = n._endCellStyle, f = n._stepLabel, g = n._theme, y = n._isSingleResource,
                    b = e.eventMap || {}, x = "schedule", D = " mbsc-flex-1-0 mbsc-schedule-resource-group" + g + h,
                    T = n._timezones, S = n._groupByResource, C = n._days, w = n._resources,
                    k = ((a = {}).onMouseMove = n._onMouseMove, a.onMouseLeave = n._onMouseLeave, a), M = {
                        dayNames: n._dayNames,
                        largeNames: n._largeDayNames,
                        onClick: e.onWeekDayClick,
                        renderDay: e.renderDay,
                        renderDayContent: e.renderDayContent,
                        rtl: e.rtl,
                        theme: e.theme
                    }, E = function (t) {
                        var a, s = t.name;
                        return e.renderResource && ve(s = e.renderResource(t)) && (a = n._safeHtml(s), n._shouldEnhance = !0), s && Ct("div", {
                            key: t.id,
                            className: "mbsc-schedule-resource" + g + h + d + (!S || "day" === e.type && 1 === e.size ? " mbsc-flex-1-0 mbsc-schedule-col-width" : "")
                        }, Ct("div", {dangerouslySetInnerHTML: a, className: "mbsc-schedule-resource-title"}, s))
                    }, N = function (t, a, s, o) {
                        var l = n._resourcesMap[s].eventResize, d = s + "__" + a,
                            h = Ds(i && i.draggedEvent && i.draggedEvent.original.resize, e.dragToResize, l), u = {
                                displayTimezone: e.displayTimezone,
                                drag: e.dragToMove || e.externalDrag,
                                endDay: e.endDay,
                                exclusiveEndDates: e.exclusiveEndDates,
                                gridEndTime: _,
                                gridStartTime: m,
                                lastDay: +n._lastDay,
                                render: e.renderEvent,
                                renderContent: e.renderEventContent,
                                resource: s,
                                rtl: e.rtl,
                                singleDay: !S,
                                slot: bl,
                                startDay: e.startDay,
                                theme: e.theme,
                                timezonePlugin: e.timezonePlugin
                            };
                        return Ct(kt, null, t.map((function (t) {
                            return t.showText ? t.position && Ct(Il, c({}, u, {
                                event: t,
                                key: t.uid,
                                inactive: r === t.id,
                                resize: Ds(t.original.resize, e.dragToResize, l),
                                selected: !(!e.selectedEventsMap[t.uid] && !e.selectedEventsMap[t.id]),
                                onClick: e.onEventClick,
                                onDoubleClick: e.onEventDoubleClick,
                                onRightClick: e.onEventRightClick,
                                onDelete: e.onEventDelete,
                                onHoverIn: e.onEventHoverIn,
                                onHoverOut: e.onEventHoverOut,
                                onDragStart: n._onEventDragStart,
                                onDragMove: n._onEventDragMove,
                                onDragEnd: n._onEventDragEnd,
                                onDragModeOn: n._onEventDragModeOn,
                                onDragModeOff: n._onEventDragModeOff
                            })) : Ct("div", {
                                key: t.uid,
                                className: "mbsc-schedule-event mbsc-schedule-event-all-day mbsc-schedule-event-all-day-placeholder"
                            }, Ct("div", {className: "mbsc-schedule-event-all-day-inner" + g}))
                        })), i && i.originDates && i.originDates[d] && !!i.originDates[d].allDay == !!o && Ct(Il, c({}, u, {
                            event: i.originDates[d],
                            hidden: i && !!i.draggedDates,
                            isDrag: !0,
                            resize: h,
                            onDragStart: n._onEventDragStart,
                            onDragMove: n._onEventDragMove,
                            onDragEnd: n._onEventDragEnd,
                            onDragModeOff: n._onEventDragModeOff
                        })), i && i.draggedDates && i.draggedDates[d] && !!i.draggedDates[d].allDay == !!o && Ct(Il, c({}, u, {
                            event: i.draggedDates[d],
                            isDrag: !0,
                            resize: h
                        })))
                    }, I = function (e) {
                        return u.map((function (t, a) {
                            var s = !a, i = a === u.length - 1;
                            return Ct("div", {
                                key: a,
                                className: "mbsc-flex-col mbsc-flex-1-0 mbsc-schedule-time-wrapper" + g + h + (i ? " mbsc-schedule-time-wrapper-end" : "") + (s && !i && p || i && !s && v ? " mbsc-flex-none" : ""),
                                style: s && !i ? p : i && !s ? v : le
                            }, Ct("div", {className: "mbsc-flex-1-1 mbsc-schedule-time" + g + h}, s || t % f == 0 ? n._formatTime(s ? m : t, e) : ""), n._timesBetween.map((function (a, s) {
                                var i = t + (s + 1) * f;
                                return i > m && i < _ && Ct("div", {
                                    key: s,
                                    className: "mbsc-flex-1-1 mbsc-schedule-time" + g + h
                                }, n._formatTime(i, e))
                            })), i && Ct("div", {className: "mbsc-schedule-time mbsc-schedule-time-end" + g + h}, n._formatTime(_ + 1, e)))
                        }))
                    }, L = function (e, t, n, a) {
                        var i = l[e][bl][t] && l[e][bl][t].allDay[0], r = s[e][bl][t] && s[e][bl][t].allDay[0],
                            c = o[e][bl][t] && o[e][bl][t].allDay;
                        return Ct("div", {
                            key: n + "-" + a,
                            className: "mbsc-schedule-all-day-item mbsc-schedule-col-width mbsc-flex-1-0" + g + h + d
                        }, N(c || [], t, e, !0), i && Ct("div", {className: "mbsc-schedule-invalid mbsc-schedule-invalid-all-day" + i.cssClass + g}, Ct("div", {className: "mbsc-schedule-invalid-text"}, i.title)), r && Ct("div", {
                            className: "mbsc-schedule-color mbsc-schedule-color-all-day" + r.cssClass + g,
                            style: r.position
                        }, Ct("div", {className: "mbsc-schedule-color-text"}, r.title)))
                    }, H = function (t, n, a, i) {
                        var r = l[t][bl][n] && l[t][bl][n].data, m = s[t][bl][n] && s[t][bl][n].data,
                            _ = o[t][bl][n] && o[t][bl][n].data;
                        return Ct("div", {
                            key: a + "-" + i,
                            className: "mbsc-flex-col mbsc-flex-1-0 mbsc-schedule-column mbsc-schedule-col-width" + g + h + d
                        }, Ct("div", {className: "mbsc-flex-col mbsc-flex-1-1 mbsc-schedule-column-inner" + g + h + d}, Ct("div", {className: "mbsc-schedule-events" + h}, N(_ || [], n, t)), r && r.map((function (e, t) {
                            return e.position && Ct("div", {
                                key: t,
                                className: "mbsc-schedule-invalid" + e.cssClass + g,
                                style: e.position
                            }, Ct("div", {className: "mbsc-schedule-invalid-text"}, e.allDay ? "" : e.title || ""))
                        })), m && m.map((function (e, t) {
                            return Ct("div", {
                                key: t,
                                className: "mbsc-schedule-color" + e.cssClass + g,
                                style: e.position
                            }, Ct("div", {className: "mbsc-schedule-color-text"}, e.title))
                        })), u.map((function (n, a) {
                            var s, r = Ml(i, n), o = !a, l = a === u.length - 1,
                                h = ((s = {}).onDoubleClick = function (n) {
                                    return e.onCellDoubleClick({date: r, domEvent: n, resource: t, source: x})
                                }, s.onContextMenu = function (n) {
                                    return e.onCellRightClick({date: r, domEvent: n, resource: t, source: x})
                                }, s);
                            return Ct("div", c({
                                key: a,
                                className: "mbsc-schedule-item mbsc-flex-1-0" + g + d + (l ? " mbsc-schedule-item-last" : "") + (o && !l && p || l && !o && v ? " mbsc-flex-none" : ""),
                                onClick: function (n) {
                                    return e.onCellClick({date: r, domEvent: n, resource: t, source: x})
                                },
                                style: o && !l ? p : l && !o ? v : le
                            }, h))
                        }))))
                    };
                return Ct("div", {
                    ref: n._setEl,
                    className: "mbsc-flex-col mbsc-flex-1-1 mbsc-schedule-wrapper" + g + (n._daysNr > 7 ? " mbsc-schedule-wrapper-multi" : "")
                }, Ct("div", {className: "mbsc-schedule-header mbsc-flex mbsc-flex-none" + g + d}, Ct("div", {
                    className: "mbsc-schedule-time-col mbsc-schedule-time-col-empty" + g + h + d,
                    style: n._timeWidth
                }), Ct("div", {className: "mbsc-flex-1-1 mbsc-schedule-header-wrapper"}, Ct("div", {
                    ref: n._setHeaderCont,
                    className: "mbsc-flex"
                }, "day" === e.type && 1 === e.size ? Ct("div", {className: D}, Ct("div", {className: "mbsc-flex"}, e.showDays && n._headerDays.map((function (e) {
                    var t = e.timestamp;
                    return Ct(Yl, c({}, M, {
                        key: t,
                        cssClass: "mbsc-flex-1-1",
                        day: e.day,
                        events: b[e.dateKey],
                        isToday: n._isToday(t),
                        label: e.label,
                        selectable: !0,
                        selected: n._selectedDay === t,
                        timestamp: t
                    }))
                }))), e.resources && Ct("div", {className: "mbsc-flex"}, w.map(E))) : S ? w.map((function (t, a) {
                    return Ct("div", {
                        key: a,
                        className: D
                    }, E(t), Ct("div", {className: "mbsc-flex"}, e.showDays && C.map((function (e) {
                        var a = e.timestamp;
                        return Ct(Yl, c({}, M, {
                            key: a,
                            cssClass: "mbsc-flex-1-0 mbsc-schedule-col-width",
                            day: e.day,
                            events: b[e.dateKey],
                            isToday: y && n._isToday(a),
                            label: e.label,
                            resource: t.id,
                            selectable: !1,
                            selected: y && n._isToday(a),
                            timestamp: a
                        }))
                    }))))
                })) : C.map((function (t, a) {
                    var s = t.timestamp;
                    return Ct("div", {key: a, className: D}, e.showDays && Ct(Yl, c({}, M, {
                        key: s,
                        day: t.day,
                        events: b[t.dateKey],
                        isToday: y && n._isToday(s),
                        label: t.label,
                        selectable: !1,
                        selected: n._isToday(s),
                        timestamp: s
                    })), e.resources && Ct("div", {className: "mbsc-flex"}, w.map(E)))
                })))), Ct("div", {className: "mbsc-schedule-fake-scroll-y"})), Ct("div", {className: "mbsc-schedule-all-day-cont" + (t.showShadow ? " mbsc-schedule-all-day-wrapper-shadow" : "") + g}, T && Ct("div", {
                    className: "mbsc-flex mbsc-schedule-timezone-labels",
                    style: n._timeWidth
                }, T.map((function (e, t) {
                    return Ct("div", {
                        key: t,
                        className: "mbsc-flex-1-0-0 mbsc-schedule-timezone-label" + g + h
                    }, e.label)
                }))), e.showAllDay && Ct("div", {className: "mbsc-schedule-all-day-wrapper mbsc-flex-none" + g + d}, Ct("div", {className: "mbsc-flex mbsc-schedule-all-day" + g}, Ct("div", {
                    className: "mbsc-schedule-time-col" + g + h,
                    style: n._timeWidth
                }, !T && Ct("div", {className: "mbsc-schedule-all-day-text" + g + h}, e.allDayText)), Ct("div", {className: "mbsc-flex-col mbsc-flex-1-1 mbsc-schedule-all-day-group-wrapper"}, Ct("div", {
                    ref: n._setAllDayCont,
                    className: "mbsc-flex mbsc-flex-1-1"
                }, S ? w.map((function (e, t) {
                    return Ct("div", {key: t, className: "mbsc-flex" + D}, C.map((function (t, n) {
                        return L(e.id, t.dateKey, n, t.timestamp)
                    })))
                })) : C.map((function (e, t) {
                    return Ct("div", {key: t, className: "mbsc-flex" + D}, w.map((function (t, n) {
                        return L(t.id, e.dateKey, n, e.timestamp)
                    })))
                }))))))), Ct("div", {className: "mbsc-flex mbsc-flex-1-1 mbsc-schedule-grid-wrapper" + g}, Ct("div", {dangerouslySetInnerHTML: n.textParam}), Ct("div", {
                    "aria-hidden": "true",
                    className: "mbsc-flex-col mbsc-schedule-time-col mbsc-schedule-time-cont" + g + h,
                    style: n._timeWidth,
                    ref: n._setTimeCont
                }, Ct("div", {className: "mbsc-flex mbsc-schedule-time-cont-inner"}, Ct("div", {className: "mbsc-flex-col mbsc-flex-1-1"}, Ct("div", {className: "mbsc-flex-1-1 mbsc-schedule-time-cont-pos" + g + (T ? " mbsc-flex" : " mbsc-flex-col mbsc-schedule-time-col-last")}, T ? T.map((function (e, t) {
                    return Ct("div", {
                        key: t,
                        className: "mbsc-flex-col" + g + (t === T.length - 1 ? " mbsc-schedule-time-col-last" : "")
                    }, I(e.timezone))
                })) : I(), n._showTimeIndicator && Ct(Hl, {
                    amText: e.amText,
                    displayedTime: n._time,
                    displayedDays: n._daysNr,
                    displayTimezone: e.displayTimezone,
                    endDay: e.endDay,
                    firstDay: n._firstDayTz,
                    orientation: "x",
                    pmText: e.pmText,
                    rtl: e.rtl,
                    showDayIndicator: y && !n._isMulti && "week" === e.type,
                    startDay: e.startDay,
                    startTime: m,
                    theme: e.theme,
                    timeFormat: e.timeFormat,
                    timezones: T,
                    timezonePlugin: e.timezonePlugin
                }), n._showCursorTime && Ct("div", {
                    ref: n._setCursorTimeCont,
                    className: "mbsc-schedule-cursor-time mbsc-schedule-cursor-time-x" + g + h
                })), t.hasScrollX && Ct("div", {className: "mbsc-schedule-fake-scroll-x"})), Ct("div", {className: "mbsc-schedule-fake-scroll-y"}))), Ct("div", {
                    ref: n._setCont,
                    className: "mbsc-flex-col mbsc-flex-1-1 mbsc-schedule-grid-scroll" + g,
                    onScroll: n._onScroll
                }, Ct("div", {className: "mbsc-flex mbsc-flex-1-1"}, Ct("div", c({
                    className: "mbsc-flex mbsc-flex-1-0 mbsc-schedule-grid",
                    ref: n._setGridCont
                }, k), S ? w.map((function (e, t) {
                    return Ct("div", {key: t, className: "mbsc-flex" + D}, C.map((function (t, n) {
                        return H(e.id, t.dateKey, n, t.timestamp)
                    })))
                })) : C.map((function (e, t) {
                    return Ct("div", {key: t, className: "mbsc-flex" + D}, w.map((function (t, n) {
                        return H(t.id, e.dateKey, n, e.timestamp)
                    })))
                })))))), i && !t.isTouchDrag && Ct("div", {className: "mbsc-calendar-dragging"}))
            }(e, t, this)
        }, t
    }(Fl), zl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._isTimeline = !0, t._onScroll = function () {
                for (var e = t.s.rtl, n = t.state, a = t._gridWidth, s = t._scrollCont, i = s.scrollTop, r = s.scrollLeft, o = t._resCont, l = t._sidebarCont, c = t._footerCont, d = t._headerCont, h = t._stickyHeader, u = t._stickyFooter, m = t._cols.length, _ = e ? -1 : 1, p = e ? "marginRight" : "marginLeft", v = Ce(r * _ * (m / t._daysBatchNr) / a), f = 0, g = t._virtualPagesY || [], y = 0, b = 0; b < g.length && g[b].top - n.scrollContHeight / 2 <= i;) y = b, b++;
                if (yn && !e || (o && (o.scrollTop = i), l && (l.scrollTop = i)), h && yn) {
                    var x = h.style;
                    x.marginTop = i < 0 ? -i + "px" : "", x[p] = r * _ < 0 ? -r * _ + "px" : ""
                }
                if (u && yn) {
                    var D = u.style;
                    D.marginTop = i < 0 ? -i + "px" : "", D[p] = r * _ < 0 ? -r * _ + "px" : ""
                }
                if (a) {
                    if ((d || c) && t._isDailyResolution) {
                        var T = t._days, S = a / m;
                        f = ue(ke(r * _ / S), 0, m - 1);
                        var C = function (e, t) {
                            if (e && S) {
                                var n = e.offsetWidth, a = e.style, s = ue(ke((r * _ + n) / S), 0, m - 1);
                                T[f][t + "Index"] !== T[s][t + "Index"] ? a[p] = -(r * _ + n - T[s][t + "Index"] * S + 1) + "px" : a[p] = ""
                            }
                        };
                        C(t._stickyDate, "date"), C(t._stickyMonth, "month"), C(t._stickyWeek, "week"), yn || (c && (c.scrollLeft = r), d && (d.scrollLeft = r))
                    }
                    (v !== n.batchIndexX || y !== n.batchIndexY || (t._stickyDate || t._stickyMonth || t._stickyWeek) && f !== n.dayIndex) && t.setState({
                        batchIndexX: v,
                        batchIndexY: y,
                        dayIndex: f
                    }), clearTimeout(t._scrollDebounce), t._scrollDebounce = setTimeout((function () {
                        if (!t._isScrolling && !t._viewChanged && !t._hasResY) {
                            var e = r * t._time * t._daysNr / a;
                            t._hook("onActiveChange", {date: new Date(+t._firstDay + e), scroll: !0})
                        }
                    }), 100), t._onMouseMove()
                }
            }, t._setStickyHeader = function (e) {
                t._stickyHeader = e
            }, t._setStickyFooter = function (e) {
                t._stickyFooter = e
            }, t._setStickyDay = function (e) {
                t._stickyDate = e
            }, t._setStickyMonth = function (e) {
                t._stickyMonth = e
            }, t._setStickyWeek = function (e) {
                t._stickyWeek = e
            }, t._setCont = function (e) {
                t._scrollCont = e
            }, t._setResCont = function (e) {
                t._resCont = e
            }, t._setSidebarCont = function (e) {
                t._sidebarCont = e
            }, t._setGridCont = function (e) {
                t._gridCont = e
            }, t._setHeaderCont = function (e) {
                t._headerCont = e
            }, t._setFooterCont = function (e) {
                t._footerCont = e
            }, t._setCursorTimeCont = function (e) {
                t._cursorTimeCont = e
            }, t
        }

        return l(t, e), t.prototype._onParentClick = function (e, t) {
            t.collapsed = !t.collapsed, this._hook(t.collapsed ? "onResourceCollapse" : "onResourceExpand", {
                domEvent: e,
                resource: t.id
            }), this._visibleResources = this._flattenResources(this.s.resources, [], 0), this._shouldCheckSize = !0, this._isParentClick = !0, this.forceUpdate()
        }, t.prototype._render = function (t, n) {
            e.prototype._render.call(this, t, n), clearTimeout(this._scrollDebounce);
            var a = this._prevS, s = this._eventMap, i = this._resourceTops, r = this._stepCell / Bn,
                o = ke(this._startTime / Bn) % r, l = ke(this._endTime / Bn) % r + 1;
            if (this._stickyDay = this._days[n.dayIndex || 0] || this._days[0], this._startCellStyle = o % r != 0 ? {width: (n.cellWidth || 64) * ((r - o) % r / r) + "px"} : le, this._endCellStyle = l % r != 0 ? {width: (n.cellWidth || 64) * (l % r) / r + "px"} : le, t.connections === a.connections && t.eventMap === a.eventMap && t.theme === a.theme && t.rtl === a.rtl || (this._calcConnections = !0), this._hasSlots && (this._connections = le), this._calcConnections && !this._hasSlots && !this._shouldCheckSize && i) {
                for (var c = [], d = this._eventHeight, h = this._gridWidth, u = n.hasScrollY ? this._gridHeight : n.scrollContHeight - n.headerHeight, m = 1500 / h, _ = !0 === t.rtl, p = _ ? -1 : 1, v = 750 / h * p, f = 400 / u * p, g = 100 * d / u, y = 0, b = t.connections || []; y < b.length; y++) {
                    var x = b[y], D = s[x.from], T = s[x.to], S = x.arrow, C = x.color, w = x.cssClass || "",
                        k = x.from + "__" + x.to, M = x.type || "fs";
                    if (D && T) {
                        var E = D.position, N = T.position, I = E.width !== le, L = N.width !== le, H = D.resource,
                            O = T.resource;
                        if ((I || L) && i[H] >= 0 && i[O] >= 0) {
                            var Y = "fs" === M || "ff" === M, P = "fs" === M || "ss" === M,
                                F = Y ? D.endDate : D.startDate, V = P ? T.startDate : T.endDate, z = V < F,
                                R = z ? V : F, A = z ? F : V, W = E.top || 0, U = N.top || 0, B = _ ? "right" : "left",
                                j = I ? +E[B].replace("%", "") : z ? 100 : 0,
                                K = L ? +N[B].replace("%", "") : z ? 0 : 100, X = I ? +E.width.replace("%", "") : 0,
                                J = I ? +N.width.replace("%", "") : 0, q = i[O] - i[H],
                                G = !q && ("fs" === M && z || "sf" === M && !z || "ff" === M || "ss" === M) && U === W,
                                Z = Y && P ? K - j - X - 2 * m : Y && !P ? K - j + (J - X) : !Y && P ? K - j : K - j + J + 2 * m,
                                Q = q < 0 || !q && U < W ? -1 : 1, $ = 100 * (q - W * d + U * d + (G ? d : 0)) / u,
                                ee = "fs" === M && Z < 0 || ("ff" === M || "ss" === M) && G || "sf" === M,
                                te = "ss" === M && z && !ee || "ff" === M && !z && !ee || "sf" === M && Z < 0,
                                ne = (_ ? 100 - j : j) + (Y ? X * p : 0), ae = 100 * (i[H] + W * d + 3 + d / 2) / u;
                            if (I && ("from" === S || "bidirectional" === S)) {
                                var se = Y ? v : -1 * v;
                                c.push({
                                    color: C,
                                    cssClass: "mbsc-connection-arrow " + w,
                                    endDate: A,
                                    fill: C,
                                    id: k + "__start",
                                    pathD: "M " + ne + ", " + ae + " L " + (ne + se) + " " + (ae - f) + " L " + (ne + se) + " " + (ae + f) + " Z",
                                    startDate: R
                                })
                            }
                            var ie = "M " + ne + ", " + ae;
                            if (ne += Y ? m * p : -m * p, te && (ne += Z * p), $ && (ie += " H " + ne, te || (ie += " V " + (ae += $ - (ee ? g / 2 : 0) * Q))), te || (ne += Z * p), $ && (ie += " H " + ne, te && (ie += " V " + (ae += $ - (ee ? g / 2 : 0) * Q))), $ && ee && (ie += " V " + (ae += g / 2 * Q * (G ? -1 : 1))), ie += " H " + (ne += P ? m * p : -m * p), c.push({
                                color: C,
                                cssClass: w,
                                id: k,
                                pathD: ie,
                                startDate: R,
                                endDate: A
                            }), L && ("to" === S || "bidirectional" === S || !0 === S)) {
                                se = P ? -1 * v : v;
                                c.push({
                                    color: C,
                                    cssClass: "mbsc-connection-arrow " + w,
                                    endDate: A,
                                    fill: C,
                                    id: k + "__end",
                                    pathD: "M " + ne + ", " + ae + " L " + (ne + se) + " " + (ae - f) + " L " + (ne + se) + " " + (ae + f) + " Z",
                                    startDate: R
                                })
                            }
                        }
                    }
                }
                this._connections = c, this._calcConnections = !1
            }
        }, t
    }(Pl);

    function Rl(e, t, n) {
        var a, s, i, r, o = t.dragData, l = o && o.draggedEvent && o.draggedEvent.id, d = n._hasSlots, h = n._hb,
            u = n._rtl, m = n._times, _ = n._theme, p = n._startTime, v = n._endTime, f = n._stepLabel, g = n._slots,
            y = "timeline", b = e.eventList, x = "month" === e.type, D = n._stepCell < Kn, T = n._startCellStyle,
            S = n._endCellStyle, C = n._daysBatch, w = {height: t.headerHeight + "px"},
            k = {height: t.footerHeight + "px"}, M = n._days, E = n._daysNr, N = t.dayIndex || 0,
            I = n._isDailyResolution, L = n._hasResY, H = n._hasResources,
            O = e.renderHourFooter || e.renderDayFooter || e.renderQuarterFooter || e.renderWeekFooter || e.renderMonthFooter || e.renderYearFooter,
            Y = n._hasRows, P = n._colClass, F = n._dragCol, V = ((a = {}).className = "mbsc-connections" + _, a),
            z = ((s = {}).onMouseMove = n._onMouseMove, s.onMouseLeave = n._onMouseLeave, s), R = function (t, a) {
                var s, i;
                if (n._displayTime && n._timeLabels[a]) if (e.renderHour) {
                    var r = +t.date + a;
                    ve(s = e.renderHour({
                        date: new Date(r),
                        events: t.eventMap[r] || [],
                        isActive: t.isActive
                    })) && (i = n._safeHtml(s), n._shouldEnhance = !0)
                } else s = n._timeLabels[a];
                return Ct("div", {
                    key: a,
                    "aria-hidden": "true",
                    className: "mbsc-timeline-header-time mbsc-flex-1-1" + _,
                    dangerouslySetInnerHTML: i
                }, s)
            }, A = function (t, a) {
                var s, i;
                if (e.renderHourFooter && n._displayTime && n._timeLabels[a]) {
                    var r = +t.date + a;
                    ve(s = e.renderHourFooter({
                        date: new Date(r),
                        events: t.eventMap[r] || [],
                        isActive: t.isActive
                    })) && (i = n._safeHtml(s), n._shouldEnhance = !0)
                }
                return Ct("div", {
                    key: a,
                    className: "mbsc-timeline-footer-time mbsc-flex-1-1 " + _,
                    dangerouslySetInnerHTML: i
                }, s)
            }, W = function (t, a) {
                var s, i;
                return e.renderDay ? ve(s = e.renderDay({
                    date: t.date,
                    events: t.eventMap[t.timestamp] || [],
                    isActive: t.isActive
                })) && (i = n._safeHtml(s), n._shouldEnhance = !0) : s = t.dateText, Ct("div", {
                    ref: a ? n._setStickyDay : le,
                    "aria-hidden": "true",
                    dangerouslySetInnerHTML: i,
                    className: (a ? "mbsc-timeline-header-text" : "") + (t.isActive && !e.renderDay ? " mbsc-timeline-header-active" : "") + (e.renderDay ? " mbsc-timeline-header-date-cont" : " mbsc-timeline-header-date-text") + _
                }, s)
            }, U = function (t, a) {
                var s, i;
                return e.renderWeek ? ve(s = e.renderWeek({
                    date: t.date,
                    endDate: t.endDate,
                    events: t.eventMap[t.timestamp] || [],
                    isActive: t.isActive,
                    startDate: t.date,
                    weekNr: t.weekNr
                })) && (i = n._safeHtml(s), n._shouldEnhance = !0) : s = t.weekText, Ct("div", {
                    ref: a ? n._setStickyWeek : le,
                    "aria-hidden": "true",
                    dangerouslySetInnerHTML: i,
                    className: (a ? "mbsc-timeline-header-text" : "") + (e.renderWeek ? " mbsc-timeline-header-week-cont" : " mbsc-timeline-header-week-text") + (t.lastOfWeek ? "  mbsc-timeline-header-week-text-last" : "") + _
                }, s)
            }, B = function (t) {
                var a, s;
                return e.renderWeekFooter && ve(a = e.renderWeekFooter({
                    date: t.date,
                    endDate: t.endDate,
                    events: t.eventMap[t.timestamp] || [],
                    isActive: t.isActive,
                    startDate: t.date,
                    weekNr: t.weekNr
                })) && (s = n._safeHtml(a), n._shouldEnhance = !0), Ct("div", {
                    dangerouslySetInnerHTML: s,
                    className: "mbsc-timeline-footer-week-cont"
                }, a)
            }, j = function (t, a) {
                var s, i;
                return e.renderMonth ? ve(s = e.renderMonth({
                    date: t.date,
                    events: t.eventMap[t.timestamp] || [],
                    isActive: t.isActive
                })) && (i = n._safeHtml(s), n._shouldEnhance = !0) : s = t.monthText, Ct("div", {
                    ref: a ? n._setStickyMonth : le,
                    "aria-hidden": "true",
                    dangerouslySetInnerHTML: i,
                    className: (a ? "mbsc-timeline-header-text" : "") + (e.renderMonth ? " mbsc-timeline-header-month-cont" : " mbsc-timeline-header-month-text") + (t.lastOfMonth ? " mbsc-timeline-header-month-text-last" : "") + _
                }, s)
            }, K = function (t) {
                var a, s;
                return e.renderMonthFooter && ve(a = e.renderMonthFooter({
                    date: t.date,
                    events: t.eventMap[t.timestamp] || [],
                    isActive: t.isActive
                })) && (s = n._safeHtml(a), n._shouldEnhance = !0), Ct("div", {
                    dangerouslySetInnerHTML: s,
                    className: "mbsc-timeline-footer-month-cont"
                }, a)
            }, X = function (t) {
                var a, s;
                return e.renderQuarter && ve(a = e.renderQuarter({
                    date: t.date,
                    events: t.eventMap[t.timestamp] || [],
                    isActive: t.isActive
                })) && (s = n._safeHtml(a), n._shouldEnhance = !0), Ct("div", {
                    "aria-hidden": "true",
                    dangerouslySetInnerHTML: s,
                    className: (e.renderQuarter ? " mbsc-timeline-header-month-cont" : " mbsc-timeline-header-month-text") + _
                }, a)
            }, J = function (t) {
                var a, s;
                return e.renderQuarterFooter && ve(a = e.renderQuarterFooter({
                    date: t.date,
                    events: t.eventMap[t.timestamp] || [],
                    isActive: t.isActive
                })) && (s = n._safeHtml(a), n._shouldEnhance = !0), Ct("div", {
                    dangerouslySetInnerHTML: s,
                    className: "mbsc-timeline-footer-month-cont"
                }, a)
            }, q = function (t) {
                var a, s;
                return e.renderYear ? ve(a = e.renderYear({
                    date: t.date,
                    events: t.eventMap[t.timestamp] || [],
                    isActive: t.isActive
                })) && (s = n._safeHtml(a), n._shouldEnhance = !0) : a = t.columnTitle, Ct("div", {
                    "aria-hidden": "true",
                    dangerouslySetInnerHTML: s,
                    className: (t.isActive && !e.renderYear ? " mbsc-timeline-header-active" : "") + (e.renderYear ? " mbsc-timeline-header-year-cont" : " mbsc-timeline-header-year-text") + _
                }, a)
            }, G = function (t) {
                var a, s;
                return e.renderYearFooter && ve(a = e.renderYearFooter({
                    date: t.date,
                    events: t.eventMap[t.timestamp] || [],
                    isActive: t.isActive
                })) && (s = n._safeHtml(a), n._shouldEnhance = !0), Ct("div", {
                    dangerouslySetInnerHTML: s,
                    className: "mbsc-timeline-footer-year-cont"
                }, a)
            }, Z = function (t, a) {
                var s, i, r = t.isParent, o = (a ? a + "-" : "") + t.id, l = {minHeight: n._rowHeights[o]};
                return e.renderSidebar && ve(s = e.renderSidebar(t)) && (i = n._safeHtml(s), n._shouldEnhance = !0), o !== n._dragRow && Ct("div", {
                    key: o,
                    className: "mbsc-timeline-sidebar-resource mbsc-timeline-row mbsc-flex-1-0" + (r ? " mbsc-timeline-parent mbsc-flex" : "") + _ + u + h,
                    style: l
                }, Ct("div", {className: "mbsc-timeline-sidebar-resource-title", dangerouslySetInnerHTML: i}, s))
            }, Q = function (t, a) {
                var s, i = t.isParent, r = n._hasHierarchy ? 1.75 * t.depth + "em" : le, o = (a ? a + "-" : "") + t.id,
                    l = {minHeight: n._rowHeights[o], paddingLeft: e.rtl ? le : r, paddingRight: e.rtl ? r : le},
                    c = t.name;
                return e.renderResource && ve(c = e.renderResource(t)) && (s = n._safeHtml(c), n._shouldEnhance = !0), o !== n._dragRow && Ct("div", {
                    key: o,
                    className: "mbsc-timeline-resource mbsc-timeline-row mbsc-flex-1-0" + (i ? " mbsc-timeline-parent mbsc-flex" : "") + _ + u + h,
                    style: l
                }, i && Ct(Pi, {
                    className: "mbsc-timeline-resource-icon" + u + h,
                    svg: t.collapsed ? e.rtl ? e.nextIconRtl : e.nextIcon : e.downIcon,
                    theme: e.theme,
                    onClick: function (e) {
                        return n._onParentClick(e, t)
                    }
                }), Ct("div", {
                    className: "mbsc-timeline-resource-title" + (i ? " mbsc-flex-1-1" : ""),
                    dangerouslySetInnerHTML: s
                }, c))
            }, $ = function (e, t, a, s, i) {
                var r = e[t][bl][i || "all"], o = [];
                if (r) for (var c = 0, d = r.data; c < d.length; c++) {
                    var h = d[c];
                    (s && l === h.id || n._batchStart <= h.endDate && n._batchEnd > h.startDate) && o.push(h)
                }
                return a(o, i || "all", t, bl)
            }, ee = function (e) {
                return e.map((function (e, t) {
                    return Ct("div", {
                        key: t,
                        className: "mbsc-schedule-color mbsc-timeline-color" + e.cssClass + _,
                        style: e.position
                    }, Ct("div", {className: "mbsc-schedule-color-text"}, e.title))
                }))
            }, te = function (e) {
                return e.map((function (e, t) {
                    return e.position && Ct("div", {
                        key: t,
                        className: "mbsc-schedule-invalid mbsc-timeline-invalid" + e.cssClass + _,
                        style: e.position
                    }, Ct("div", {className: "mbsc-schedule-invalid-text"}, e.title))
                }))
            }, ne = function (t, a, s, i) {
                var r = n._resourcesMap[s].eventResize, d = s + "__" + i + "__" + a,
                    h = Ds(o && o.draggedEvent && o.draggedEvent.original.resize, e.dragToResize, r), u = {
                        displayTimezone: e.displayTimezone,
                        drag: e.dragToMove || e.externalDrag,
                        endDay: e.endDay,
                        eventHeight: n._setRowHeight ? n._eventHeight : le,
                        exclusiveEndDates: e.exclusiveEndDates,
                        gridEndTime: v,
                        gridStartTime: p,
                        hasResY: L,
                        isListing: b,
                        isTimeline: !0,
                        lastDay: +n._lastDay,
                        render: e.renderEvent,
                        renderContent: e.renderEventContent,
                        resource: s,
                        rtl: e.rtl,
                        slot: i,
                        startDay: e.startDay,
                        theme: e.theme,
                        timezonePlugin: e.timezonePlugin
                    };
                return Ct(kt, null, t.map((function (t) {
                    return t.position && Ct(Il, c({}, u, {
                        event: t,
                        inactive: l === t.id,
                        key: t.uid,
                        resize: Ds(t.original.resize, e.dragToResize, r),
                        selected: !(!e.selectedEventsMap[t.uid] && !e.selectedEventsMap[t.id]),
                        onClick: e.onEventClick,
                        onDoubleClick: e.onEventDoubleClick,
                        onRightClick: e.onEventRightClick,
                        onHoverIn: e.onEventHoverIn,
                        onHoverOut: e.onEventHoverOut,
                        onDelete: e.onEventDelete,
                        onDragStart: n._onEventDragStart,
                        onDragMove: n._onEventDragMove,
                        onDragEnd: n._onEventDragEnd,
                        onDragModeOn: n._onEventDragModeOn,
                        onDragModeOff: n._onEventDragModeOff
                    }))
                })), o && o.originDates && o.originDates[d] && Ct(Il, c({}, u, {
                    event: o.originDates[d],
                    hidden: o && !!o.draggedDates,
                    isDrag: !0,
                    resize: h,
                    onDragStart: n._onEventDragStart,
                    onDragMove: n._onEventDragMove,
                    onDragEnd: n._onEventDragEnd,
                    onDragModeOff: n._onEventDragModeOff
                })), o && o.draggedDates && o.draggedDates[d] && Ct(Il, c({}, u, {
                    event: o.draggedDates[d],
                    isDrag: !0,
                    resize: h
                })))
            }, ae = function (a, s) {
                var i = a.id, r = (s ? s + "-" : "") + i;
                return Ct("div", {
                    key: r,
                    className: "mbsc-timeline-row mbsc-flex mbsc-flex-1-0" + (a.isParent ? " mbsc-timeline-parent" : "") + (r === n._dragRow ? " mbsc-timeline-hidden" : "") + _ + h,
                    style: {minHeight: n._rowHeights[r]}
                }, !d && Ct(kt, null, Ct("div", {className: "mbsc-timeline-events"}, $(n._events, i, ne, !0, s)), $(n._invalids, i, te, void 0, s), $(n._colors, i, ee, void 0, s)), Ct("div", {
                    style: {width: n._placeholderSizeX + "px"},
                    className: "mbsc-flex-none"
                }), C.map((function (a) {
                    var r = a.timestamp, o = s || a.dateKey;
                    return I ? Ct("div", {
                        key: r,
                        className: "mbsc-timeline-day mbsc-flex" + _ + u + h + (o === F ? " mbsc-timeline-hidden" : "") + (a.dateIndex < E - 1 && (D || a.lastOfMonth) ? " mbsc-timeline-day-border" : "") + (t.hasScrollX ? " mbsc-flex-none" : " mbsc-flex-1-0-0") + (x || n._isMulti ? " mbsc-timeline-day-month" : "")
                    }, g.map((function (t) {
                        var a = t.id, s = n._events[i][a][o], l = n._colors[i][a][o], p = n._invalids[i][a][o];
                        return Ct("div", {
                            key: a,
                            className: "mbsc-flex mbsc-flex-1-1" + (d ? " mbsc-timeline-slot" : "")
                        }, d && Ct(kt, null, Ct("div", {className: "mbsc-timeline-events"}, ne(s ? s.data : [], o, i, a)), p && te(p.data), l && ee(l.data)), m.map((function (t, n) {
                            var s, o = Ml(r, t), l = !n, d = n === m.length - 1,
                                p = ((s = {}).onDoubleClick = function (t) {
                                    return e.onCellDoubleClick({date: o, domEvent: t, resource: i, slot: a, source: y})
                                }, s.onContextMenu = function (t) {
                                    return e.onCellRightClick({date: o, domEvent: t, resource: i, slot: a, source: y})
                                }, s);
                            return Ct("div", c({
                                key: n,
                                className: "mbsc-timeline-column mbsc-flex-1-1" + _ + u + h + (l && !d && T || d && !l && S ? " mbsc-flex-none" : ""),
                                onClick: function (t) {
                                    return e.onCellClick({date: o, domEvent: t, resource: i, slot: a, source: y})
                                },
                                style: l && !d ? T : d && !l ? S : le
                            }, p))
                        })))
                    }))) : Ct("div", {
                        key: r,
                        className: "mbsc-timeline-day mbsc-timeline-column" + _ + u + h + (o === F ? " mbsc-timeline-hidden" : "") + (t.hasScrollX ? " mbsc-flex-none" : " mbsc-flex-1-0-0")
                    })
                })))
            };
        return Ct("div", {
            ref: n._setEl,
            className: "mbsc-timeline mbsc-flex-1-1 mbsc-flex-col" + (t.cellWidth ? "" : " mbsc-hidden") + (n._hasSticky ? " mbsc-has-sticky" : "") + (Y ? "" : " mbsc-timeline-no-rows") + (H ? "" : " mbsc-timeline-no-resource") + _ + u
        }, Ct("div", {dangerouslySetInnerHTML: n.textParam}), Ct("div", {
            ref: n._setStickyHeader,
            className: "mbsc-timeline-header-sticky mbsc-flex" + _
        }, Y && Ct("div", {
            className: "mbsc-timeline-resource-header-cont " + P + _ + u + h,
            style: w
        }, (e.renderResourceHeader && ve(i = e.renderResourceHeader()) && (r = n._safeHtml(i), n._shouldEnhance = !0), Ct("div", {
            className: "mbsc-timeline-resource-header",
            dangerouslySetInnerHTML: r
        }, i))), I && Ct("div", {className: "mbsc-flex-1-1"}, !L && Ct(kt, null, n._isMulti && Ct("div", {className: "mbsc-timeline-header-month mbsc-flex" + _ + u + h}, j(M[N] || M[0], !0)), e.weekNumbers && Ct("div", {className: "mbsc-timeline-header-week mbsc-flex" + _ + u + h}, U(M[N] || M[0], !0)), (d || D) && Ct("div", {className: "mbsc-timeline-header-date mbsc-flex" + _ + u + h}, W(M[N] || M[0], !0)))), Y && e.renderSidebar && Ct("div", {
            className: "mbsc-timeline-sidebar-header-cont mbsc-timeline-sidebar-col" + _ + u + h,
            style: w
        }, function () {
            var t, a;
            return e.renderSidebarHeader && ve(t = e.renderSidebarHeader()) && (a = n._safeHtml(t), n._shouldEnhance = !0), Ct("div", {
                className: "mbsc-timeline-sidebar-header",
                dangerouslySetInnerHTML: a
            }, t)
        }()), t.hasScrollY && Ct("div", {className: "mbsc-schedule-fake-scroll-y"})), O && Ct("div", {
            ref: n._setStickyFooter,
            className: "mbsc-timeline-footer-sticky mbsc-flex" + _
        }, Y && Ct("div", {className: "mbsc-timeline-resource-footer-cont " + P + _ + u + h, style: k}, function () {
            var t, a;
            return e.renderResourceFooter && ve(t = e.renderResourceFooter()) && (a = n._safeHtml(t), n._shouldEnhance = !0), Ct("div", {
                className: "mbsc-timeline-resource-footer",
                dangerouslySetInnerHTML: a
            }, t)
        }()), I && Ct("div", {className: "mbsc-flex-1-1"}), Y && e.renderSidebar && Ct("div", {
            className: "mbsc-timeline-sidebar-footer-cont mbsc-timeline-sidebar-col" + _ + u + h,
            style: k
        }, function () {
            var t, a;
            return e.renderSidebarFooter && ve(t = e.renderSidebarFooter()) && (a = n._safeHtml(t), n._shouldEnhance = !0), Ct("div", {
                className: "mbsc-timeline-sidebar-footer",
                dangerouslySetInnerHTML: a
            }, t)
        }()), t.hasScrollY && Ct("div", {className: "mbsc-schedule-fake-scroll-y"})), Ct("div", {
            ref: n._setCont,
            className: "mbsc-timeline-grid-scroll mbsc-flex-col mbsc-flex-1-1" + _ + u + h,
            onScroll: n._onScroll
        }, Ct("div", {
            className: "mbsc-flex-none",
            style: n._hasSticky ? le : w
        }), Ct("div", {
            className: "mbsc-timeline-header mbsc-flex" + _ + u + h,
            ref: n._setHeaderCont
        }, Y && Ct("div", {className: "mbsc-timeline-resource-header-cont " + P + _ + u + h}), Ct("div", {className: "mbsc-timeline-header-bg mbsc-flex-1-0 mbsc-flex" + _}, Ct("div", {
            className: "mbsc-timeline-time-indicator-cont",
            style: {
                height: (t.scrollContHeight || 0) - (t.headerHeight || 0) + "px",
                width: t.hasScrollX ? n._gridWidth + "px" : le
            }
        }, n._showTimeIndicator && Ct(Hl, {
            amText: e.amText,
            displayedTime: n._time,
            displayedDays: E,
            displayTimezone: e.displayTimezone,
            endDay: e.endDay,
            firstDay: n._firstDayTz,
            orientation: "y",
            pmText: e.pmText,
            rtl: e.rtl,
            startDay: e.startDay,
            startTime: p,
            theme: e.theme,
            timeFormat: e.timeFormat,
            timezonePlugin: e.timezonePlugin,
            hasResY: L
        }), n._showCursorTime && Ct("div", {
            ref: n._setCursorTimeCont,
            className: "mbsc-schedule-cursor-time mbsc-schedule-cursor-time-y" + _
        })), Ct("div", {
            className: "mbsc-flex-none",
            style: {width: n._placeholderSizeX + "px"}
        }), Ct("div", {className: t.hasScrollX ? "mbsc-flex-none" : "mbsc-flex-1-1"}, I ? Ct(kt, null, n._isMulti && !L && Ct("div", {className: "mbsc-flex"}, C.map((function (e) {
            var t = e.lastOfMonth;
            return e.dateKey === F ? le : Ct("div", {
                key: e.timestamp,
                className: "mbsc-timeline-month mbsc-flex-1-0-0" + _ + u + h + (e.dateIndex < E - 1 && t ? " mbsc-timeline-day mbsc-timeline-day-border" : "")
            }, Ct("div", {className: "mbsc-timeline-header-month" + _ + u + h + (t ? " mbsc-timeline-header-month-last" : "")}, e.monthTitle && j(e, !1)))
        }))), e.weekNumbers && Ct("div", {className: "mbsc-flex"}, C.map((function (e) {
            var t = e.lastOfWeek;
            return e.dateKey === F ? le : Ct("div", {
                key: e.timestamp,
                className: "mbsc-timeline-month mbsc-flex-1-0-0" + _ + u + h + (e.dateIndex < E - 1 && t && (D || e.lastOfMonth) ? " mbsc-timeline-day mbsc-timeline-day-border" : "")
            }, Ct("div", {className: "mbsc-timeline-header-week" + _ + u + h + (t ? " mbsc-timeline-header-week-last" : "")}, e.weekTitle && U(e, !1)))
        }))), Ct("div", {className: "mbsc-flex"}, C.map((function (t) {
            return t.dateKey === F ? le : Ct("div", {
                key: t.timestamp,
                className: "mbsc-timeline-day mbsc-flex-1-0-0" + _ + u + h + (t.dateIndex < E - 1 && (D || t.lastOfMonth) ? " mbsc-timeline-day-border" : "") + (x || n._isMulti ? " mbsc-timeline-day-month" : "")
            }, !L && Ct("div", {className: "mbsc-timeline-header-date" + _ + u + h}, W(t), t.label && Ct("div", {className: "mbsc-hidden-content"}, t.label)), d && Ct("div", {className: "mbsc-flex mbsc-timeline-slots" + _}, g.map((function (a) {
                return Ct("div", {
                    key: a.id,
                    className: "mbsc-timeline-slot mbsc-timeline-slot-header mbsc-flex-1-1" + u + _
                }, a.name && function (t) {
                    var a, s = t.slot, i = s.name;
                    return e.renderSlot && ve(i = e.renderSlot(t)) && (a = n._safeHtml(i), n._shouldEnhance = !0), Ct("div", {
                        key: s.id,
                        className: "mbsc-timeline-slot-title",
                        dangerouslySetInnerHTML: a
                    }, i)
                }({slot: a, date: t.date}))
            }))), Ct("div", {"aria-hidden": "true", className: "mbsc-flex"}, m.map((function (e, a) {
                var s = !a, i = a === m.length - 1;
                return Ct("div", {
                    key: a,
                    style: s && !i ? T : i && !s ? S : le,
                    className: "mbsc-flex mbsc-flex-1-1 mbsc-timeline-header-column" + _ + u + h + (!n._displayTime || d ? " mbsc-timeline-no-height" : "") + (f > n._stepCell && m[a + 1] % f ? " mbsc-timeline-no-border" : "") + (s && T || i && S ? " mbsc-flex-none" : "")
                }, R(t, e), n._timesBetween.map((function (n, a) {
                    var s = e + (a + 1) * f;
                    return s > p && s < v && R(t, s)
                })))
            }))))
        })))) : Ct("div", {className: "mbsc-flex"}, C.map((function (t) {
            return t.dateKey === F ? le : Ct("div", {
                key: t.timestamp,
                className: "mbsc-timeline-day mbsc-flex-1-0-0" + _ + u + h
            }, Ct("div", {className: "mbsc-timeline-header-week mbsc-timeline-header-week-last" + _ + u + h}, Ct("div", {className: "mbsc-timeline-header-week-text mbsc-timeline-header-week-text-last" + (t.isActive && !(e.renderWeek || e.renderMonth || e.renderQuarter || e.renderYear) ? " mbsc-timeline-header-active" : "") + _}, function (t) {
                switch (e.resolution) {
                    case"week":
                        if (e.renderWeek) return U(t, !1);
                        break;
                    case"month":
                        if (e.renderMonth) return j(t, !1);
                        break;
                    case"quarter":
                        if (e.renderQuarter) return X(t);
                        break;
                    case"year":
                        if (e.renderYear) return q(t)
                }
                return t.columnTitle
            }(t))))
        }))))), Y && e.renderSidebar && Ct("div", {className: "mbsc-timeline-sidebar-header-cont mbsc-timeline-sidebar-col" + _ + u + h})), Ct("div", {className: "mbsc-flex mbsc-flex-1-1"}, Ct("div", {className: "mbsc-flex mbsc-flex-1-1"}, Y && Ct("div", {
            className: "mbsc-timeline-resources mbsc-flex-col " + P + _ + u,
            ref: n._setResCont
        }, Ct("div", {
            className: "mbsc-flex-none",
            style: n._hasSideSticky ? le : w
        }), Ct("div", {className: "mbsc-timeline-resource-bg mbsc-flex-1-1" + (n._hasHierarchy || t.hasScrollY ? "" : " mbsc-flex-col") + _}, Ct("div", {
            style: {height: n._placeholderSizeY + "px"},
            className: "mbsc-flex-none"
        }), n._rowBatch.map((function (e) {
            var t = e.day, a = t ? t.dateKey : "";
            return !e.hidden && t ? H ? Ct("div", {
                key: a,
                className: "mbsc-timeline-row-group mbsc-flex mbsc-flex-1-0" + _ + h
            }, Ct("div", {className: "mbsc-timeline-row-date mbsc-timeline-row-date-col mbsc-flex-none" + u + _ + h}, W(t)), Ct("div", {className: "mbsc-timeline-row-resource-col mbsc-flex-1-1 mbsc-flex-col"}, e.rows.map((function (e) {
                return Q(e, a)
            })))) : Ct("div", {
                key: a,
                className: "mbsc-timeline-row-date mbsc-flex-1-0" + u + _ + h,
                style: {minHeight: n._rowHeights[a + "-" + bl]}
            }, W(t)) : e.rows.map((function (e) {
                return Q(e, a)
            }))
        }))), Ct("div", {
            className: "mbsc-flex-none",
            style: n._hasSideSticky ? le : k
        })), Y && Ct("div", {className: n._hasSideSticky ? "" : P}), Ct("div", {className: "mbsc-timeline-hidden"}, Ct("div", {className: "mbsc-timeline-row mbsc-timeline-empty-row" + _}), Ct("div", {className: "mbsc-timeline-row mbsc-timeline-parent mbsc-timeline-empty-parent" + _}), Ct("div", {className: "mbsc-timeline-row-gutter" + _})), Ct("div", c({
            className: "mbsc-timeline-grid mbsc-flex-1-0" + (n._hasHierarchy || t.hasScrollY ? "" : " mbsc-flex-col"),
            ref: n._setGridCont,
            style: {height: t.hasScrollY ? n._gridHeight + "px" : le, width: t.hasScrollX ? n._gridWidth + "px" : le}
        }, z), Ct("div", {
            style: {height: n._placeholderSizeY + "px"},
            className: "mbsc-flex-none"
        }), n._rowBatch.map((function (e) {
            var t = e.day, n = t ? t.dateKey : "";
            return t && H ? Ct("div", {
                key: n,
                className: "mbsc-timeline-row-group mbsc-flex-col mbsc-flex-1-0" + _ + h
            }, e.rows.map((function (e) {
                return ae(e, n)
            }))) : Ct(kt, {key: n}, e.rows.map((function (e) {
                return ae(e, n)
            })))
        })), n._connections && Ct("svg", c({
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none"
        }, V), n._connections.map((function (e) {
            var t, a = ((t = {}).className = "mbsc-connection " + e.cssClass + _, t.d = e.pathD, t.style = {
                stroke: e.color,
                fill: e.fill
            }, t["vector-effect"] = "non-scaling-stroke", t);
            return ea(n._batchStart, n._batchEnd, e.startDate, e.endDate, !0) && Ct("path", c({key: e.id}, a))
        })))), Y && e.renderSidebar && Ct("div", {
            className: "mbsc-timeline-sidebar mbsc-timeline-sidebar-col mbsc-flex-col" + _ + u,
            ref: n._setSidebarCont
        }, Ct("div", {
            className: "mbsc-flex-none",
            style: n._hasSideSticky ? le : w
        }), Ct("div", {className: "mbsc-timeline-resource-bg mbsc-flex-1-1" + (n._hasHierarchy || t.hasScrollY ? "" : " mbsc-flex-col") + _}, Ct("div", {
            style: {height: n._placeholderSizeY + "px"},
            className: "mbsc-flex-none"
        }), n._rowBatch.map((function (e) {
            var t = e.day, n = t ? t.dateKey : "";
            return t && H ? Ct("div", {
                key: n,
                className: "mbsc-timeline-row-group mbsc-flex-col mbsc-flex-1-0" + _ + h
            }, e.rows.map((function (e) {
                return Z(e, n)
            }))) : e.rows.map((function (e) {
                return Z(e, n)
            }))
        }))), Ct("div", {
            className: "mbsc-flex-none",
            style: n._hasSideSticky ? le : k
        })), Y && e.renderSidebar && Ct("div", {className: n._hasSideSticky ? "" : "mbsc-timeline-sidebar-col"}))), O && Ct(kt, null, Ct("div", {
            className: "mbsc-flex-none",
            style: n._hasSticky ? le : k
        }), Ct("div", {
            className: "mbsc-timeline-footer mbsc-flex" + _ + u + h,
            ref: n._setFooterCont
        }, Y && Ct("div", {className: "mbsc-timeline-resource-footer-cont " + P + _ + u + h}), Ct("div", {className: "mbsc-timeline-footer-bg mbsc-flex-1-0 mbsc-flex" + _}, Ct("div", {
            className: "mbsc-flex-none",
            style: {width: n._placeholderSizeX + "px"}
        }), Ct("div", {className: t.hasScrollX ? "mbsc-flex-none" : "mbsc-flex-1-1"}, Ct("div", {className: "mbsc-flex"}, C.map((function (t) {
            return t.dateKey === F ? le : I ? Ct("div", {
                key: t.timestamp,
                className: "mbsc-timeline-day mbsc-flex-1-0-0" + _ + u + h + (t.dateIndex < E - 1 && (D || t.lastOfMonth) ? " mbsc-timeline-day-border" : "") + (x || n._isMulti ? " mbsc-timeline-day-month" : "")
            }, Ct("div", {className: "mbsc-flex"}, m.map((function (e, a) {
                var s = !a, i = a === m.length - 1;
                return Ct("div", {
                    key: a,
                    style: s && !i ? T : i && !s ? S : le,
                    className: "mbsc-flex mbsc-flex-1-1 mbsc-timeline-column mbsc-timeline-footer-column" + _ + u + h + (!n._displayTime || d ? " mbsc-timeline-no-height" : "") + (f > n._stepCell && m[a + 1] % f ? "mbsc-timeline-no-border" : "") + (s && !i && T || i && !s && S ? " mbsc-flex-none" : "")
                }, A(t, e), n._timesBetween.map((function (n, a) {
                    var s = e + (a + 1) * f;
                    return s > p && s < v && A(t, s)
                })))
            }))), e.renderDayFooter && Ct("div", {className: "mbsc-timeline-footer-date" + _ + u + h}, function (t) {
                var a, s;
                return e.renderDayFooter && ve(a = e.renderDayFooter({
                    date: t.date,
                    events: t.eventMap[t.timestamp] || []
                })) && (s = n._safeHtml(a), n._shouldEnhance = !0), Ct("div", {
                    className: "mbsc-timeline-footer-date-cont",
                    dangerouslySetInnerHTML: s
                }, a)
            }(t)), d && Ct("div", {className: "mbsc-flex"}, g.map((function (e) {
                return Ct("div", {key: e.id, className: "mbsc-timeline-slot mbsc-flex-1-1" + u + _})
            })))) : Ct("div", {
                key: t.timestamp,
                className: "mbsc-timeline-day mbsc-flex-1-0-0" + _ + u + h
            }, Ct("div", {className: "mbsc-timeline-footer-week mbsc-timeline-footer-week-last" + _ + u + h}, Ct("div", {className: "mbsc-timeline-footer-week-text" + _}, function (t) {
                switch (e.resolution) {
                    case"week":
                        if (e.renderWeekFooter) return B(t);
                        break;
                    case"month":
                        if (e.renderMonthFooter) return K(t);
                        break;
                    case"quarter":
                        if (e.renderQuarterFooter) return J(t);
                        break;
                    case"year":
                        if (e.renderYearFooter) return G(t)
                }
            }(t))))
        }))))), Y && e.renderSidebar && Ct("div", {className: "mbsc-timeline-sidebar-footer-cont mbsc-timeline-sidebar-col" + _ + u + h})))), o && !t.isTouchDrag && Ct("div", {className: "mbsc-calendar-dragging"}))
    }

    var Al = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e, t) {
            return Rl(e, t, this)
        }, t
    }(zl);

    function Wl(e, t, n, a, s, i, r) {
        var o, l = !e._colorEventList, c = i ? "popover" : "agenda", d = !i || e.state.showPopover, h = e._theme,
            u = r ? r.eventContent : s.renderEventContent, m = r ? r.event : s.renderEvent, _ = u ? u(t) : Ct("div", {
                className: "mbsc-event-text " + h,
                title: t.tooltip,
                dangerouslySetInnerHTML: t.html
            }, le);
        ve(_) ? (_ = Ct("div", {
            className: "mbsc-event-content mbsc-flex-1-1 " + h,
            dangerouslySetInnerHTML: {__html: _}
        }), e._shouldEnhance = d && c) : _ = Ct("div", {className: "mbsc-event-content mbsc-flex-1-1 " + h}, _);
        var p = m ? m(t) : Ct(kt, null, Ct("div", {
            className: "mbsc-event-color" + h + e._rtl,
            style: t.style
        }), _, Ct("div", {className: "mbsc-event-time" + h + e._rtl}, t.allDayText && Ct("div", {className: "mbsc-event-all-day" + h}, t.allDayText), t.lastDay && Ct("div", {className: "mbsc-event-until" + h}, t.lastDay), t.start && Ct("div", {className: "mbsc-event-start" + h}, t.start), t.start && t.end && Ct("div", {className: "mbsc-event-sep" + h}, "-"), t.end && Ct("div", {className: "mbsc-event-end" + h}, t.end)));
        return ve(p) && (o = {__html: p}, p = le, e._shouldEnhance = d && c), Ct(yl, {
            className: "mbsc-event" + (l ? "" : " mbsc-colored-event") + (t.original.cssClass ? " " + t.original.cssClass : ""),
            "data-id": t.original.id,
            key: n,
            actionable: s.actionableEvents,
            dangerouslySetInnerHTML: o,
            data: t.original,
            drag: i && e._showEventLabels && (s.dragToMove || s.externalDrag),
            rtl: s.rtl,
            selected: !(!e._selectedEventsMap[t.uid] && !e._selectedEventsMap[t.id]),
            style: l ? le : t.style,
            theme: s.theme,
            themeVariant: s.themeVariant,
            onClick: function (n) {
                return e._onEventClick({date: a, domEvent: n.domEvent, event: t.original, source: c})
            },
            onDoubleClick: function (n) {
                return e._onEventDoubleClick({date: a, domEvent: n, event: t.original, source: c})
            },
            onContextMenu: function (n) {
                return e._onEventRightClick({date: a, domEvent: n, event: t.original, source: c})
            },
            onHoverIn: function (n) {
                var s = n.domEvent;
                return e._onEventHoverIn({date: a, domEvent: s, event: t.original, source: c})
            },
            onHoverOut: function (n) {
                var s = n.domEvent;
                return e._onEventHoverOut({date: a, domEvent: s, event: t.original, source: c})
            },
            onDelete: e._onEventDelete,
            onDragEnd: e._onLabelUpdateEnd,
            onDragModeOff: e._onLabelUpdateModeOff,
            onDragModeOn: e._onLabelUpdateModeOn,
            onDragMove: e._onLabelUpdateMove,
            onDragStart: e._onLabelUpdateStart
        }, p)
    }

    function Ul(e, t, n, a) {
        var s;
        n._listDays || (n._listDays = {}), n._showEventList && (s = function (e, t, n) {
            var a, s = e.theme, i = t._listDays, r = t.state.eventList || [], o = n ? n.agenda : e.renderAgenda,
                l = n ? n.agendaEmpty : e.renderAgendaEmpty;
            if (o && t._eventListHTML === le) return o(r, e, i);
            if (!r.length) {
                var c = l && l(), d = ve(c) && {__html: c};
                d ? (a = Ct("div", {dangerouslySetInnerHTML: d}), t._shouldEnhance = t._list) : a = Ct("div", {className: c ? "" : "mbsc-event-list-empty" + t._theme}, c || e.noEventsText)
            }
            return Ct(pl, {theme: s, themeVariant: e.themeVariant, rtl: e.rtl}, !r.length && a, r.map((function (a, r) {
                return Ct("div", {
                    className: "mbsc-event-group" + t._theme, key: r, ref: function (e) {
                        return i[a.timestamp] = e
                    }
                }, ("day" !== t._eventListType || t._eventListSize > 1) && Ct(fl, {
                    theme: s,
                    themeVariant: e.themeVariant,
                    className: "mbsc-event-day"
                }, a.date), a.events.map((function (s, i) {
                    return Wl(t, s, i, a.timestamp, e, le, n)
                })))
            })))
        }(e, n, a), ve(s) && (n._eventListHTML = {__html: s}, n._shouldLoadDays = !0, n._shouldEnhance = !0, s = le));
        var i = {
            amText: e.amText,
            clickToCreate: e.clickToCreate,
            dataTimezone: e.dataTimezone,
            dateFormat: e.dateFormat,
            dayNames: e.dayNames,
            dayNamesMin: e.dayNamesMin,
            dayNamesShort: e.dayNamesShort,
            displayTimezone: e.displayTimezone,
            dragBetweenResources: e.dragBetweenResources,
            dragInTime: e.dragInTime,
            dragToCreate: e.dragToCreate,
            dragToResize: e.dragToResize,
            eventMap: n._eventMap,
            eventOrder: e.eventOrder,
            exclusiveEndDates: e.exclusiveEndDates,
            firstDay: e.firstDay,
            fromText: e.fromText,
            getDate: e.getDate,
            getDay: e.getDay,
            getMaxDayOfMonth: e.getMaxDayOfMonth,
            getMonth: e.getMonth,
            getWeekNumber: e.getWeekNumber,
            getYear: e.getYear,
            monthNames: e.monthNames,
            monthNamesShort: e.monthNamesShort,
            onActiveChange: n._onActiveChange,
            onEventDragEnter: n._onEventDragEnter,
            onEventDragLeave: n._onEventDragLeave,
            pmText: e.pmText,
            refDate: n._refDate,
            renderDay: a ? a.day : e.renderDay,
            rtl: e.rtl,
            selectedEventsMap: n._selectedEventsMap,
            showEventTooltip: e.showEventTooltip,
            theme: e.theme,
            themeVariant: e.themeVariant,
            timeFormat: e.timeFormat,
            timezonePlugin: e.timezonePlugin,
            toText: e.toText
        }, r = c({}, i, {
            allDayText: e.allDayText,
            checkSize: n._checkSize,
            colorsMap: n._colorsMap,
            currentTimeIndicator: n._currentTimeIndicator,
            dateFormatLong: e.dateFormatLong,
            dragTimeStep: n._dragTimeStep,
            dragToMove: e.dragToMove,
            eventDragEnd: n._onEventDragStop,
            eventOverlap: e.eventOverlap,
            extendDefaultEvent: e.extendDefaultEvent,
            externalDrag: e.externalDrag,
            externalDrop: e.externalDrop,
            groupBy: e.groupBy,
            height: t.height,
            invalidateEvent: e.invalidateEvent,
            invalidsMap: n._invalidsMap,
            maxDate: n._maxDate,
            minDate: n._minDate,
            navigateToEvent: n._navigateToEvent,
            navigationService: n._navService,
            newEventText: e.newEventText,
            onCellClick: n._onCellClick,
            onCellDoubleClick: n._onCellDoubleClick,
            onCellRightClick: n._onCellRightClick,
            onEventClick: n._onEventClick,
            onEventDelete: n._onEventDelete,
            onEventDoubleClick: n._onEventDoubleClick,
            onEventDragEnd: n._onEventDragEnd,
            onEventDragStart: n._onEventDragStart,
            onEventHoverIn: n._onEventHoverIn,
            onEventHoverOut: n._onEventHoverOut,
            onEventRightClick: n._onEventRightClick,
            renderEvent: a ? a.scheduleEvent : e.renderScheduleEvent,
            renderEventContent: a ? a.scheduleEventContent : e.renderScheduleEventContent,
            renderResource: a ? a.resource : e.renderResource,
            resources: e.resources,
            scroll: n._shouldScrollSchedule,
            selected: n._selectedDateTime,
            width: t.width
        });
        return Ct(wr, c({ref: n._setEl}, i, {
            activeDate: n._active,
            calendarScroll: n._calendarScroll,
            calendarType: n._calendarType,
            colors: e.colors,
            context: e.context,
            cssClass: n._cssClass,
            downIcon: e.downIcon,
            dragData: t.labelDragData,
            dragToMove: e.dragToMove || e.externalDrag,
            endDay: n._rangeEndDay,
            eventRange: n._rangeType,
            eventRangeSize: n._showSchedule ? n._scheduleSize : n._showTimeline ? n._timelineSize : n._eventListSize,
            hasContent: n._showEventList || n._showSchedule || n._showTimeline,
            hasPicker: !0,
            height: e.height,
            invalid: e.invalid,
            instanceService: n._instanceService,
            labels: e.labels,
            labelList: n._calendarLabelList,
            labelsMap: n._labelsMap,
            marked: e.marked,
            marksMap: n._marksMap,
            max: e.max,
            min: e.min,
            mouseSwipe: !e.dragToCreate && "single" !== e.clickToCreate || !n._showEventLabels && !n._showEventCount,
            mousewheel: e.mousewheel,
            navigationService: n._navService,
            nextIconH: e.nextIconH,
            nextIconV: e.nextIconV,
            nextPageText: e.nextPageText,
            noOuterChange: !n._showEventList,
            onCellHoverIn: n._onCellHoverIn,
            onCellHoverOut: n._onCellHoverOut,
            onDayClick: n._onDayClick,
            onDayDoubleClick: n._onDayDoubleClick,
            onDayRightClick: n._onDayRightClick,
            onGestureStart: n._onGestureStart,
            onLabelClick: n._onLabelClick,
            onLabelDoubleClick: n._onLabelDoubleClick,
            onLabelRightClick: n._onLabelRightClick,
            onLabelHoverIn: n._onLabelHoverIn,
            onLabelHoverOut: n._onLabelHoverOut,
            onLabelDelete: n._onEventDelete,
            onLabelUpdateStart: n._onLabelUpdateStart,
            onLabelUpdateMove: n._onLabelUpdateMove,
            onLabelUpdateEnd: n._onLabelUpdateEnd,
            onLabelUpdateModeOn: n._onLabelUpdateModeOn,
            onLabelUpdateModeOff: n._onLabelUpdateModeOff,
            onPageChange: n._onPageChange,
            onPageLoaded: n._onPageLoaded,
            onPageLoading: n._onPageLoading,
            onResize: n._onResize,
            pageLoad: n._pageLoad,
            prevIconH: e.prevIconH,
            prevIconV: e.prevIconV,
            prevPageText: e.prevPageText,
            resourcesMap: n._resourcesMap,
            responsiveStyle: !0,
            renderHeader: a ? a.header : e.renderHeader,
            renderDayContent: a ? a.dayContent : e.renderDayContent,
            renderLabel: a ? a.label : e.renderLabel,
            renderLabelContent: a ? a.labelContent : e.renderLabelContent,
            selectedDates: n._selectedDates,
            selectView: cs,
            showCalendar: n._showCalendar,
            showControls: e.showControls,
            showLabelCount: n._showEventCount,
            showOuterDays: n._showOuterDays,
            showSchedule: n._showSchedule || n._showTimeline,
            showToday: e.showToday,
            showWeekNumbers: n._showWeekNumbers,
            size: n._calendarSize,
            startDay: n._rangeStartDay,
            swipe: !t.isTouchDrag,
            upIcon: e.upIcon,
            valid: e.valid,
            weeks: n._calendarSize,
            width: e.width,
            eventText: e.eventText,
            eventsText: e.eventsText,
            fromText: e.fromText,
            moreEventsPluralText: e.moreEventsPluralText,
            moreEventsText: e.moreEventsText,
            todayText: e.todayText,
            toText: e.toText,
            weekText: e.weekText,
            yearSuffix: e.yearSuffix
        }), n._showDate && Ct("div", {className: "mbsc-schedule-date-header mbsc-flex" + n._theme + n._hb}, n._showSchedule && !n._showCalendar && e.resources && Ct("div", {className: "mbsc-schedule-time-col"}), Ct("div", {className: "mbsc-schedule-date-header-text mbsc-flex-1-1" + n._theme}, n._selectedDateHeader), n._showSchedule && !n._showCalendar && e.resources && Ct("div", {className: "mbsc-schedule-fake-scroll-y"})), n._showEventList && Ct("div", {
            className: "mbsc-flex-1-1 mbsc-event-list" + (t.isListScrollable ? " mbsc-event-list-scroll" : ""),
            dangerouslySetInnerHTML: n._eventListHTML,
            onScroll: n._onScroll,
            ref: n._setList
        }, s), n._showSchedule && Ct(Vl, c({}, r, {
            endDay: n._scheduleEndDay,
            endTime: n._scheduleEndTime,
            renderDayContent: a ? a.dayContent : e.renderDayContent,
            showAllDay: n._showScheduleAllDay,
            showDays: n._showScheduleDays,
            size: n._scheduleSize,
            startDay: n._scheduleStartDay,
            startTime: n._scheduleStartTime,
            timeCellStep: n._scheduleTimeCellStep,
            timeLabelStep: n._scheduleTimeLabelStep,
            timezones: n._scheduleTimezones,
            type: n._scheduleType,
            onWeekDayClick: n._onWeekDayClick
        })), n._showTimeline && Ct(Al, c({}, r, {
            connections: e.connections,
            downIcon: e.chevronIconDown,
            dragBetweenSlots: e.dragBetweenSlots,
            dragToCreate: !e.slots && e.dragToCreate,
            dragToResize: !e.slots && e.dragToResize,
            endDay: n._timelineEndDay,
            endTime: n._timelineEndTime,
            eventList: n._timelineListing,
            nextIcon: e.nextIconH,
            nextIconRtl: e.prevIconH,
            onResourceCollapse: n._proxy,
            onResourceExpand: n._proxy,
            quarterText: e.quarterText,
            renderDayFooter: a ? a.dayFooter : e.renderDayFooter,
            renderHour: a ? a.hour : e.renderHour,
            renderHourFooter: a ? a.hourFooter : e.renderHourFooter,
            renderMonth: a ? a.month : e.renderMonth,
            renderMonthFooter: a ? a.monthFooter : e.renderMonthFooter,
            renderQuarter: a ? a.quarter : e.renderQuarter,
            renderQuarterFooter: a ? a.quarterFooter : e.renderQuarterFooter,
            renderWeek: a ? a.week : e.renderWeek,
            renderWeekFooter: a ? a.weekFooter : e.renderWeekFooter,
            renderYear: a ? a.year : e.renderYear,
            renderYearFooter: a ? a.yearFooter : e.renderYearFooter,
            renderResourceFooter: a ? a.resourceFooter : e.renderResourceFooter,
            renderResourceHeader: a ? a.resourceHeader : e.renderResourceHeader,
            renderSidebar: a ? a.sidebar : e.renderSidebar,
            renderSidebarFooter: a ? a.sidebarFooter : e.renderSidebarFooter,
            renderSidebarHeader: a ? a.sidebarHeader : e.renderSidebarHeader,
            renderSlot: a ? a.slot : e.renderSlot,
            resolution: n._timelineResolution,
            resolutionVertical: n._timelineResolutionVertical,
            rowHeight: n._timelineRowHeight,
            weekNumbers: n._showTimelineWeekNumbers,
            weekText: e.weekText,
            size: n._timelineSize,
            slots: e.slots,
            startDay: n._timelineStartDay,
            startTime: n._timelineStartTime,
            timeCellStep: n._timelineTimeCellStep,
            timeLabelStep: n._timelineTimeLabelStep,
            type: n._timelineType,
            virtualScroll: !n._print && n._timelineVirtualScroll
        })), Ct(dr, {
            anchor: n._anchor,
            closeOnScroll: !0,
            contentPadding: !1,
            context: e.context,
            cssClass: "mbsc-calendar-popup " + n._popoverClass,
            display: "anchored",
            isOpen: t.showPopover,
            locale: e.locale,
            maxHeight: "24em",
            onClose: n._onPopoverClose,
            rtl: e.rtl,
            scrollLock: !1,
            showOverlay: !1,
            theme: e.theme,
            themeVariant: e.themeVariant
        }, t.popoverList && Ct(pl, {
            ref: n._setPopoverList,
            theme: e.theme,
            themeVariant: e.themeVariant,
            rtl: e.rtl,
            className: "mbsc-popover-list"
        }, t.popoverList.map((function (s, i) {
            return Wl(n, s, i, t.popoverDate, e, !0, a)
        })))), t.labelDragData && t.labelDragData.draggedEvent && !t.isTouchDrag && Ct("div", {className: "mbsc-calendar-dragging"}))
    }

    var Bl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._instanceService = new Li, t
        }

        return l(t, e), t.prototype._template = function (e, t) {
            return Ul(e, t, this)
        }, t
    }(ml), jl = {
        before: function (e, t) {
            t.selectedDate && (t.defaultSelectedDate = t.selectedDate, delete t.selectedDate)
        }
    };
    var Kl = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e) {
            return e.children || ""
        }, t
    }(il), Xl = {
        before: function (e, t) {
            t.element = e
        }
    }, Jl = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t._selector = "[mbsc-draggable]", t._renderOpt = Xl, t
    }(Kl), ql = ko(Jl, Xl), Gl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._onExternalDrag = function (e) {
                var n, a = t.s.element || t._el, s = function () {
                    return e.endY < t._elBottom && e.endY > t._elTop && e.endX > t._elLeft && e.endX < t._elRight
                };
                switch (e.eventName) {
                    case"onDragStart":
                        if (a) {
                            var i = a.getBoundingClientRect();
                            t._elTop = i.top, t._elBottom = i.bottom, t._elLeft = i.left, t._elRight = i.right, t._isItemIn = t._isOwner = s()
                        }
                        break;
                    case"onDragMove":
                        (n = s()) && !t._isItemIn ? t._hook("onItemDragEnter", {
                            clone: e.clone,
                            data: e.event,
                            domEvent: e.domEvent
                        }) : !n && t._isItemIn && t._hook("onItemDragLeave", {
                            clone: e.clone,
                            data: e.event,
                            domEvent: e.domEvent
                        }), t._isItemIn = n;
                        break;
                    case"onDragEnd":
                        t._isItemIn && !t._isOwner && (e.from && (e.from._eventDropped = !0), t._hook("onItemDrop", {
                            clone: e.clone,
                            data: e.event,
                            domEvent: e.domEvent
                        })), t._isItemIn = !1
                }
            }, t
        }

        return l(t, e), t.prototype._mounted = function () {
            this._unsubscribe = nl(this._onExternalDrag)
        }, t.prototype._destroy = function () {
            this._unsubscribe && al(this._unsubscribe)
        }, t._name = "Dropcontainer", t
    }(ja);
    var Zl = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e) {
            return e.children || ""
        }, t
    }(Gl), Ql = {
        before: function (e, t) {
            t.element = e
        }
    }, $l = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t._selector = "[mbsc-dropcontainer]", t._renderOpt = Ql, t
    }(Zl), ec = ko($l, Ql), tc = ko(Bl, jl), nc = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t._selector = "[mbsc-button]", t._renderOpt = Xi, t
    }(Ki), ac = ko(nc, Xi), sc = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._onChange = function (e) {
                var n = t.s, a = e.target.checked;
                n.checked === le && t.setState({checked: a}), t._change(a), n.onChange && n.onChange(e)
            }, t._setInput = function (e) {
                t._input = e
            }, t
        }

        return l(t, e), t.prototype._change = function (e) {
        }, t.prototype._mounted = function () {
            var e = this;
            this._unlisten = Bi(this._input, {
                click: !0, onBlur: function () {
                    e.setState({hasFocus: !1})
                }, onFocus: function () {
                    e.setState({hasFocus: !0})
                }, onPress: function () {
                    e.setState({isActive: !0})
                }, onRelease: function () {
                    e.setState({isActive: !1})
                }
            })
        }, t.prototype._render = function (e, t) {
            var n = e.disabled === le ? t.disabled : be(e.disabled),
                a = "start" === e.position ? e.rtl ? "right" : "left" : e.rtl ? "left" : "right",
                s = e.modelValue !== le ? e.modelValue : e.checked;
            this._disabled = n, this._checked = s !== le ? be(s) : t.checked === le ? be(e.defaultChecked) : t.checked, this._cssClass = "mbsc-checkbox mbsc-form-control-wrapper mbsc-font " + this._className + this._theme + this._rtl + this._hb + " mbsc-checkbox-" + a + (n ? " mbsc-disabled" : ""), this._boxClass = "mbsc-checkbox-box" + this._theme + " mbsc-checkbox-box-" + a + (t.hasFocus && !n ? " mbsc-focus" : "") + (t.isActive && !n ? " mbsc-active" : "") + (e.color ? " mbsc-checkbox-box-" + e.color : "") + (n ? " mbsc-disabled" : "") + (this._checked ? " mbsc-checked" : "")
        }, t.prototype._destroy = function () {
            this._unlisten && this._unlisten()
        }, t.defaults = {position: "start"}, t._name = "Checkbox", t
    }(ja);
    var ic = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), Object.defineProperty(t.prototype, "checked", {
            get: function () {
                return this._checked
            }, set: function (e) {
                this._checked = e, this.setState({checked: e})
            }, enumerable: !0, configurable: !0
        }), t.prototype._template = function (e) {
            return function (e, t, n) {
                var a = t.props;
                a.children, a.className, a.color, a.defaultChecked;
                var s = a.description, i = a.hasChildren;
                a.inputStyle;
                var r = a.label;
                a.modelValue, a.onChange, a.position, a.rtl, a.theme, a.themeVariant;
                var o = d(a, ["children", "className", "color", "defaultChecked", "description", "hasChildren", "inputStyle", "label", "modelValue", "onChange", "position", "rtl", "theme", "themeVariant"]);
                return Ct("label", {className: t._cssClass}, Ct("input", c({
                    type: "checkbox",
                    className: "mbsc-form-control-input mbsc-reset",
                    onChange: t._onChange,
                    disabled: t._disabled,
                    checked: t._checked,
                    ref: t._setInput
                }, o)), Ct("span", {className: t._boxClass}), (r || i) && Ct("span", {className: "mbsc-form-control-label" + t._theme + (t._disabled ? " mbsc-disabled" : "")}, r), s && Ct("span", {className: "mbsc-description" + t._theme + (t._disabled ? " mbsc-disabled" : "")}, s), n)
            }(0, this, e.children)
        }, t
    }(sc), rc = {
        hasChildren: !0,
        parentClass: "mbsc-form-control-label",
        readProps: ["disabled"],
        renderToParent: !0,
        before: function (e, t) {
            t.defaultChecked = e.checked
        }
    }, oc = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t._selector = "[mbsc-checkbox]", t._renderOpt = rc, t
    }(ic), lc = ko(oc, rc), cc = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._tag = "select", t
        }

        return l(t, e), t._name = "Dropdown", t
    }(Br), dc = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._tag = "textarea", t
        }

        return l(t, e), t._name = "Textarea", t
    }(Br), hc = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t._selector = "[mbsc-input]", t._renderOpt = jr, t
    }(Br), uc = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t._selector = "[mbsc-dropdown]", t._renderOpt = Kr, t
    }(cc), mc = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t._selector = "[mbsc-textarea]", t._renderOpt = Xr, t
    }(dc), _c = ko(hc, jr), pc = ko(uc, Kr), vc = ko(mc, jr), fc = [], gc = [], yc = v && !!tn.Promise;

    function bc(e, t, n, a, s) {
        return c({
            closeOnOverlayClick: !1,
            context: t.context,
            cssClass: "mbsc-alert",
            display: t.display || "center",
            onClose: function () {
                e.shift()
            },
            onClosed: function () {
                Dc(t, a, s)
            },
            theme: t.theme,
            themeVariant: t.themeVariant
        }, n)
    }

    function xc(e, t, n, a) {
        return bc(gc, e, {
            animation: e.animation || (a ? "pop" : le),
            buttons: [],
            closeOnOverlayClick: !1,
            contentPadding: a,
            cssClass: "mbsc-" + (a ? "toast" : "snackbar") + " mbsc-" + (e.color ? e.color : "color-none") + " " + (e.cssClass || ""),
            display: e.display || "bottom",
            focusOnClose: !1,
            focusOnOpen: !1,
            focusTrap: !1,
            onOpen: function (t, n) {
                !function (e, t) {
                    !1 !== e.duration && setTimeout((function () {
                        t.close()
                    }), e.duration || 3e3)
                }(e, n)
            },
            scrollLock: !1,
            setActive: !1,
            showOverlay: !1,
            touchUi: !0
        }, t, n)
    }

    function Dc(e, t, n, a) {
        n && n(a), e.callback && e.callback(a), e.onClose && e.onClose(a), fc.length ? fc[0].open() : gc.length && gc[0].open(), t && t()
    }

    function Tc(e, t, n) {
        return xc(e, t, n, !0)
    }

    function Sc(e, t, n) {
        return xc(e, t, n, !1)
    }

    function Cc(e, t, n) {
        return bc(fc, e, {
            buttons: ["ok"],
            cssClass: "mbsc-alert " + (e.cssClass || ""),
            okText: e.okText || "OK"
        }, t, n)
    }

    function wc(e, t, n) {
        var a = !1;
        return bc(fc, e, {
            buttons: ["cancel", "ok"],
            cancelText: e.cancelText || "Cancel",
            cssClass: "mbsc-confirm " + (e.cssClass || ""),
            okText: e.okText || "OK",
            onButtonClick: function (e) {
                "ok" === e.button.name && (a = !0)
            },
            onClosed: function () {
                Dc(e, t, n, a)
            }
        }, t, n)
    }

    function kc(e, t, n, a) {
        var s;
        return bc(fc, e, {
            activeElm: "input",
            buttons: ["cancel", "ok"],
            cancelText: e.cancelText || "Cancel",
            cssClass: "mbsc-prompt " + (e.cssClass || ""),
            okText: e.okText || "OK",
            onButtonClick: function (e) {
                "ok" === e.button.name && (s = !0)
            },
            onClosed: function () {
                Dc(e, t, n, s && a ? a() : null)
            }
        }, t, n)
    }

    function Mc(e) {
        fc.length || e.open(), fc.push(e)
    }

    function Ec(e) {
        var t = gc[0];
        gc.push(e), fc.length || (t ? t.close() : e.open())
    }

    function Nc(e, t) {
        var n;
        return yc ? n = new Promise((function (n) {
            e(t, n)
        })) : e(t, Te), n
    }

    function Ic(e) {
        return Ct("div", {className: "mbsc-alert-content"}, e.title && Ct("h2", {className: "mbsc-alert-title"}, e.title), Ct("p", {className: "mbsc-alert-message"}, " ", e.message || "", " "))
    }

    function Lc(e, t, n, a, s, i, r) {
        if (en) {
            var o = en.createElement("div"), l = n(t, (function () {
                setTimeout((function () {
                    var e;
                    (e = o)._children && qt(null, e)
                }))
            }), s, r);
            qt(Ct(dr, c({
                onInit: function (e, t) {
                    i && i(t), a(t)
                }
            }, l), e), o)
        }
    }

    function Hc(e, t) {
        Lc(function (e) {
            return Ct("div", {className: "mbsc-toast-background mbsc-toast-message"}, e.message || "")
        }(e), e, Tc, Ec, t)
    }

    function Oc(e, t) {
        var n, a = function (e, t) {
            return Ct("div", {className: "mbsc-toast-background mbsc-snackbar-cont mbsc-flex"}, Ct("div", {className: "mbsc-snackbar-message mbsc-flex-1-1"}, e.message || ""), e.button && Ct(Ki, {
                className: "mbsc-snackbar-button",
                icon: e.button.icon,
                onClick: t,
                theme: e.theme,
                themeVariant: e.themeVariant,
                variant: "flat"
            }, e.button.text))
        }(e, (function () {
            n && (n.close(), e.button && e.button.action && e.button.action())
        }));
        Lc(a, e, Sc, Ec, t, (function (e) {
            n = e
        }))
    }

    function Yc(e, t) {
        Lc(Ic(e), e, Cc, Mc, t)
    }

    function Pc(e, t) {
        Lc(Ic(e), e, wc, Mc, t)
    }

    function Fc(e, t) {
        var n = e.value || "", a = function () {
            return n
        };
        Lc(function (e, t, n) {
            return Ct("div", {className: "mbsc-alert-content"}, e.title && Ct("h2", {className: "mbsc-alert-title"}, e.title), Ct("p", {className: "mbsc-alert-message"}, " ", e.message || ""), Ct(Br, {
                className: "mbsc-prompt-input",
                label: e.label,
                onInput: t,
                placeholder: e.placeholder || "",
                type: e.inputType,
                theme: e.theme,
                themeVariant: e.themeVariant,
                defaultValue: n()
            }))
        }(e, (function (e) {
            n = e.target.value
        }), a), e, kc, Mc, t, le, a)
    }

    var Vc = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._render = function (e) {
            this._cssClass = "mbsc-page mbsc-font " + this._className + this._theme + this._rtl
        }, t.defaults = {}, t._name = "Page", t
    }(ja);
    var zc = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t.prototype._template = function (e) {
            return function (e, t, n) {
                return Ct(e.tag || "div", {className: t._cssClass, ref: t._setEl}, n)
            }(e, this, e.children)
        }, t
    }(Vc), Rc = {
        hasChildren: !0, parentClass: "mbsc-page", before: function (e, t) {
            t.tag = e.nodeName.toLowerCase()
        }
    }, Ac = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t._selector = "[mbsc-page]", t._renderOpt = Rc, t
    }(zc), Wc = ko(Ac, Rc), Uc = 1, Bc = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._setInput = function (e) {
                t._input = e
            }, t._onChange = function (e) {
                var n = t.s, a = e.target.checked;
                t._change(a), t._onGroupChange && t._onGroupChange(e, t._value), t._toggle(a), n.onChange && n.onChange(e)
            }, t._onValueChange = function (e) {
                var n = t.s, a = e === t._value;
                n.checked === le && t.setState({checked: a}), t._change(a)
            }, t
        }

        return l(t, e), t.prototype._change = function (e) {
        }, t.prototype._groupOptions = function (e) {
            var t = e.color, n = e.disabled, a = e.name, s = e.onChange, i = e.position, r = e.rtl, o = e.value,
                l = this.s, c = this.state, d = r === le ? l.rtl : r, h = t === le ? l.color : t,
                u = "start" === (i === le ? l.position : i) ? l.rtl ? "right" : "left" : l.rtl ? "left" : "right",
                m = n === le ? l.disabled === le ? c.disabled : be(l.disabled) : be(n),
                _ = l.modelValue !== le ? l.modelValue === l.value : l.checked,
                p = _ !== le ? be(_) : c.checked === le ? be(l.defaultChecked) : c.checked;
            this._id = l.id === le ? this._id || "mbsc-radio-" + Uc++ : l.id, this._value = l.value === le ? this._id : l.value, this._onGroupChange = s, this._name = a === le ? l.name : a, this._rtl = d ? " mbsc-rtl" : " mbsc-ltr", this._checked = o === le ? p : o === this._value, this._disabled = m, this._cssClass = "mbsc-radio mbsc-form-control-wrapper mbsc-font " + this._className + this._theme + this._rtl + this._hb + " mbsc-radio-" + u + (m ? " mbsc-disabled" : ""), this._boxClass = "mbsc-radio-box" + this._theme + " mbsc-radio-box-" + u + (c.hasFocus && !m ? " mbsc-focus" : "") + (c.isActive && !m ? " mbsc-active" : "") + (h ? " mbsc-radio-box-" + h : "") + (m ? " mbsc-disabled" : "") + (this._checked ? " mbsc-checked" : "")
        }, t.prototype._mounted = function () {
            var e = this;
            this._unlisten = Bi(this._input, {
                click: !0, onBlur: function () {
                    e.setState({hasFocus: !1})
                }, onFocus: function () {
                    e.setState({hasFocus: !0})
                }, onPress: function () {
                    e.setState({isActive: !0})
                }, onRelease: function () {
                    e.setState({isActive: !1})
                }
            })
        }, t.prototype._toggle = function (e) {
            this.s.checked === le && this.setState({checked: e}), e && ho(this._name, this._value)
        }, t.prototype._updated = function () {
            this._name && !this._unsubscribe && (this._unsubscribe = lo(this._name, this._onValueChange))
        }, t.prototype._destroy = function () {
            this._unsubscribe && co(this._name, this._unsubscribe), this._unlisten && this._unlisten()
        }, t.defaults = {position: "start"}, t._name = "Radio", t
    }(ja);
    var jc = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), Object.defineProperty(t.prototype, "checked", {
            get: function () {
                return this._checked
            }, set: function (e) {
                this._checked = e, this._toggle(e)
            }, enumerable: !0, configurable: !0
        }), t.prototype._template = function (e, t) {
            var n = this;
            return Ct(ro.Consumer, null, (function (t) {
                return function (e, t, n, a) {
                    var s = t.props;
                    s.children, s.className, s.color, s.defaultChecked;
                    var i = s.description, r = s.hasChildren, o = s.label;
                    s.modelValue, s.onChange, s.position, s.rtl, s.theme, s.themeVariant;
                    var l = d(s, ["children", "className", "color", "defaultChecked", "description", "hasChildren", "label", "modelValue", "onChange", "position", "rtl", "theme", "themeVariant"]);
                    return t._groupOptions(a), Ct("label", {className: t._cssClass}, Ct("input", c({
                        checked: t._checked,
                        className: "mbsc-form-control-input mbsc-reset",
                        disabled: t._disabled,
                        name: t._name,
                        onChange: t._onChange,
                        type: "radio",
                        value: t._value,
                        ref: t._setInput
                    }, l)), Ct("span", {className: t._boxClass}), (o || r) && Ct("span", {className: "mbsc-form-control-label" + t._theme + (t._disabled ? " mbsc-disabled" : "")}, o), i && Ct("span", {className: "mbsc-description" + t._theme + (t._disabled ? " mbsc-disabled" : "")}, i), n)
                }(0, n, e.children, t)
            }))
        }, t
    }(Bc), Kc = {
        hasChildren: !0,
        parentClass: "mbsc-form-control-label",
        readAttrs: ["value"],
        readProps: ["disabled", "name"],
        renderToParent: !0,
        before: function (e, t) {
            t.defaultChecked = e.checked
        }
    }, Xc = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t._selector = "[mbsc-radio]", t._renderOpt = Kc, t
    }(jc), Jc = ko(Xc, Kc), qc = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t._selector = "[mbsc-segmented]", t._renderOpt = yo, t
    }(go), Gc = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t._selector = "[mbsc-segmented-group]", t._renderOpt = bo, t
    }(po), Zc = ko(qc, yo), Qc = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._onChange = function (e) {
                var n = t.s, a = t._round(+e.target.value);
                e.target.value = a + "", n.value === le && t.setState({value: a}), t._change(a), n.onChange && n.onChange(e)
            }, t._onMinusClick = function () {
                t._setValue(t._value - t._step)
            }, t._onPlusClick = function () {
                t._setValue(t._value + t._step)
            }, t._setInput = function (e) {
                t._input = e
            }, t._onLabelClick = function (e) {
                e.preventDefault()
            }, t
        }

        return l(t, e), t.prototype._change = function (e) {
        }, t.prototype._mounted = function () {
            bn(this._input, Ns, this._onChange)
        }, t.prototype._render = function (e, t) {
            this._max = fe(e.max) ? 100 : +e.max, this._min = fe(e.min) ? 0 : +e.min, this._step = fe(e.step) ? 1 : +e.step;
            var n = e.disabled === le ? t.disabled : be(e.disabled),
                a = e.defaultValue !== le ? e.defaultValue : this._min || 0,
                s = e.modelValue !== le ? e.modelValue : e.value, i = s !== le ? s : t.value !== le ? t.value : a;
            this._value = this._round(i), this._changed = this._value !== +i, this._disabled = n, this._disabledMinus = this._value === this._min || n, this._disabledPlus = this._value === this._max || n, this._cssClass = "mbsc-stepper mbsc-form-control-wrapper mbsc-font mbsc-" + (e.color || "color-none") + this._theme + this._rtl + this._hb + " mbsc-stepper-" + e.inputPosition + (n ? " mbsc-disabled" : "")
        }, t.prototype._updated = function () {
            this._input.value = this._value + "", this._changed && (On(this._input, Ns), this._changed = !1)
        }, t.prototype._destroy = function () {
            xn(this._input, Ns, this._onChange)
        }, t.prototype._round = function (e) {
            var t = this._step, n = Math.abs(t) < 1 ? (t + "").split(".")[1].length : 0;
            return +Math.min(this._max, Math.max(Math.round(e / t) * t, this._min)).toFixed(n)
        }, t.prototype._setValue = function (e) {
            var t = +this._input.value, n = this._round(e);
            t !== n && (this._input.value = n + "", On(this._input, Ns))
        }, t.defaults = {inputPosition: "center"}, t._name = "Stepper", t
    }(ja);
    var $c = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), Object.defineProperty(t.prototype, "value", {
            get: function () {
                return this._value
            }, set: function (e) {
                this._value = e, this.setState({value: e})
            }, enumerable: !0, configurable: !0
        }), t.prototype._template = function (e) {
            return function (e, t) {
                var n = t.props;
                n.children, n.className, n.color, n.defaultValue;
                var a = n.description;
                n.inputClass, n.inputPosition;
                var s = n.label;
                n.onChange, n.rtl, n.theme, n.themeVariant, n.value;
                var i = d(n, ["children", "className", "color", "defaultValue", "description", "inputClass", "inputPosition", "label", "onChange", "rtl", "theme", "themeVariant", "value"]),
                    r = t._theme;
                return Ct("label", {
                    className: t._cssClass,
                    onClick: t._onLabelClick
                }, Ct("div", {className: "mbsc-stepper-content"}, s && Ct("span", {className: "mbsc-stepper-label" + r + (t._disabled ? " mbsc-disabled" : "")}, s), a && Ct("span", {className: "mbsc-description" + r + (t._disabled ? " mbsc-disabled" : "")}, a)), Ct("div", {className: "mbsc-stepper-control mbsc-flex" + r + t._rtl}, Ct(Ki, {
                    className: "mbsc-stepper-minus mbsc-stepper-button",
                    disabled: t._disabledMinus,
                    onClick: t._onMinusClick,
                    theme: e.theme,
                    themeVariant: e.themeVariant
                }, Ct("span", {className: "mbsc-stepper-inner" + r}, "–")), Ct("input", c({
                    className: "mbsc-stepper-input" + (t._disabled ? " mbsc-disabled" : "") + " " + (e.inputClass || "") + r,
                    disabled: t._disabled,
                    max: t._max,
                    min: t._min,
                    ref: t._setInput,
                    step: t._step,
                    type: "number"
                }, i)), Ct(Ki, {
                    className: "mbsc-stepper-plus mbsc-stepper-button",
                    disabled: t._disabledPlus,
                    onClick: t._onPlusClick,
                    theme: e.theme,
                    themeVariant: e.themeVariant
                }, Ct("span", {className: "mbsc-stepper-inner" + r}, "+"))))
            }(e, this)
        }, t
    }(Qc), ed = {
        readProps: ["disabled", "type", "min", "max", "step"], renderToParent: !0, before: function (e, t) {
            var n = e.parentNode, a = en.createElement("div");
            n.insertBefore(a, e), a.appendChild(e), t.defaultValue = +e.value, t.inputClass = e.getAttribute("class") || "";
            var s = en.createElement("div");
            n.insertBefore(s, a)
        }
    }, td = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t._selector = "[mbsc-stepper]", t._renderOpt = ed, t
    }($c), nd = ko(td, ed), ad = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._onChange = function (e) {
                var n = t.s, a = e.target.checked;
                e.stopPropagation(), n.checked === le && t.setState({checked: a}), t._change(a), n.onChange && n.onChange(e)
            }, t._setInput = function (e) {
                t._input = e
            }, t._setHandleCont = function (e) {
                t._handleCont = e
            }, t._setHandle = function (e) {
                t._handle = e
            }, t._onLabelClick = function (e) {
                e.preventDefault()
            }, t
        }

        return l(t, e), t.prototype._change = function (e) {
        }, t.prototype._setHandleLeft = function (e) {
            this._handle.style.left = e + "%"
        }, t.prototype._mounted = function () {
            var e, t, n, a, s, i = this;
            bn(this._input, Is, this._onChange), this._inputUnlisten = Bi(this._input, {
                onBlur: function () {
                    i.setState({hasFocus: !1})
                }, onFocus: function () {
                    i._disabled || i.setState({hasFocus: !0})
                }
            }), this._unlisten = Bi(this._el, {
                click: !1, onEnd: function (e) {
                    if (!i._disabled && !s) {
                        if (a) {
                            var t = Math.abs(e.deltaX) < 3 && Math.abs(e.deltaY) < 3, r = +new Date - n > 300,
                                o = t && !r ? !i._checked : i._handleLeft >= 50;
                            o !== i._checked && (i._input.click(), i._change(o)), a = !1
                        }
                        i.setState({dragging: !1, isActive: !1})
                    }
                }, onMove: function (n) {
                    var r = n.domEvent, o = i.state.dragging;
                    if (!i._disabled && !s && a && e && (Math.abs(n.deltaX) > 5 && (o = !0, i.setState({dragging: !0})), o)) {
                        r.cancelable && r.preventDefault();
                        var l = (n.startX - t) / e * 100, c = Math.max(Math.min(l, 100), 0) + n.deltaX / e * 100,
                            d = Math.max(Math.min(c, 100), 0);
                        i._handleLeft = d, i._setHandleLeft(d)
                    }
                    !o && !s && Math.abs(n.deltaY) > 7 && r.type === Xs && (s = !0, i.setState({isActive: !1}))
                }, onStart: function (r) {
                    i._disabled || (s = !1, e = i._handleCont.clientWidth, t = In(i._handleCont).left, n = +new Date, (r.domEvent.target === i._handleCont || i._handleCont.contains(r.domEvent.target)) && (a = !0), i.setState({isActive: !0}))
                }
            }), this._setHandleLeft(this._handleLeft)
        }, t.prototype._render = function (e, t) {
            var n = e.disabled === le ? t.disabled : be(e.disabled),
                a = "start" === e.position ? e.rtl ? "right" : "left" : e.rtl ? "left" : "right",
                s = e.color !== le ? " mbsc-switch-" + e.color : "", i = e.modelValue !== le ? e.modelValue : e.checked;
            if (this._disabled = n, this._checked = i !== le ? be(i) : t.checked === le ? be(e.defaultChecked) : t.checked, this._cssClass = "mbsc-switch mbsc-form-control-wrapper mbsc-font " + this._className + this._theme + this._rtl + this._hb + " mbsc-switch-" + a + (n ? " mbsc-disabled" : ""), !t.dragging) {
                var r = this._checked ? 100 : 0;
                r !== this._handleLeft && this._handle && this._setHandleLeft(r), this._handleLeft = r
            }
            this._handleContClass = "mbsc-switch-track mbsc-switch-track-" + a + this._theme + s + (this._checked ? " mbsc-checked" : "") + (n ? " mbsc-disabled" : "") + (t.hasFocus ? " mbsc-focus" : "") + (t.isActive ? " mbsc-active" : ""), this._handleClass = "mbsc-switch-handle" + this._theme + s + (t.dragging ? "" : " mbsc-switch-handle-animate") + (this._checked ? " mbsc-checked" : "") + (this.state.isActive ? " mbsc-active" : "") + (n ? " mbsc-disabled" : "") + (this.state.hasFocus ? " mbsc-focus" : "")
        }, t.prototype._destroy = function () {
            xn(this._input, Is, this._onChange), this._unlisten && this._unlisten(), this._inputUnlisten && this._inputUnlisten()
        }, t.defaults = {position: "end"}, t._name = "Switch", t
    }(ja);
    var sd = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), Object.defineProperty(t.prototype, "checked", {
            get: function () {
                return this._checked
            }, set: function (e) {
                this._checked = e, this.setState({checked: e})
            }, enumerable: !0, configurable: !0
        }), t.prototype._template = function (e) {
            return function (e, t, n) {
                var a = t.props;
                a.children, a.className, a.color, a.defaultChecked;
                var s = a.description, i = a.hasChildren;
                a.inputStyle;
                var r = a.label;
                a.modelValue, a.onChange, a.position, a.rtl, a.theme, a.themeVariant;
                var o = d(a, ["children", "className", "color", "defaultChecked", "description", "hasChildren", "inputStyle", "label", "modelValue", "onChange", "position", "rtl", "theme", "themeVariant"]);
                return Ct("label", {
                    className: t._cssClass,
                    ref: t._setEl,
                    onClick: t._onLabelClick
                }, Ct("input", c({
                    type: "checkbox",
                    className: "mbsc-form-control-input mbsc-reset",
                    onChange: Te,
                    disabled: t._disabled,
                    checked: t._checked,
                    ref: t._setInput
                }, o)), Ct("span", {
                    className: t._handleContClass,
                    ref: t._setHandleCont
                }, Ct("span", {
                    className: t._handleClass,
                    ref: t._setHandle
                })), (r || i) && Ct("span", {className: "mbsc-form-control-label" + t._theme + (t._disabled ? " mbsc-disabled" : "")}, r), s && Ct("span", {className: "mbsc-description" + t._theme + (t._disabled ? " mbsc-disabled" : "")}, s), n)
            }(0, this, e.children)
        }, t
    }(ad), id = {
        hasChildren: !0,
        parentClass: "mbsc-form-control-label",
        readProps: ["disabled"],
        renderToParent: !0,
        before: function (e, t) {
            t.defaultChecked = e.checked
        }
    }, rd = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return l(t, e), t._selector = "[mbsc-switch]", t._renderOpt = id, t
    }(sd), od = ko(rd, id), ld = ko(dr, hr);
    Rn(nc), Rn(oc), Rn(hc), Rn($l), Rn(uc), Rn(Jl), Rn(mc), Rn(Ac), Rn(Xc), Rn(qc), Rn(Gc), Rn(td), Rn(rd), Rn(zo), Rn(Ro), Rn(Ao), Rn(Vo), t.fw = "javascript", e.Button = nc, e.CalendarNav = Vo, e.CalendarNext = zo, e.CalendarPrev = Ro, e.CalendarToday = Ao, e.Checkbox = oc, e.Datepicker = So, e.Draggable = Jl, e.Dropcontainer = $l, e.Dropdown = uc, e.Eventcalendar = Bl, e.Input = hc, e.Page = Ac, e.Popup = dr, e.Radio = Xc, e.Segmented = qc, e.SegmentedGroup = Gc, e.Select = Qo, e.Stepper = td, e.Switch = rd, e.Textarea = mc, e.alert = function (e) {
        return Nc(Yc, e)
    }, e.autoDetect = M, e.button = ac, e.calendarNav = jo, e.calendarNext = Wo, e.calendarPrev = Uo, e.calendarToday = Bo, e.checkbox = lc, e.confirm = function (e) {
        return Nc(Pc, e)
    }, e.createCustomTheme = I, e.datepicker = Ko, e.draggable = ql, e.dropcontainer = ec, e.dropdown = pc, e.enhance = An, e.eventcalendar = tc, e.formSwitch = od, e.formatDate = ba, e.getAutoTheme = N, e.getInst = function (e, t) {
        return t ? e.__mbscFormInst : e.__mbscInst
    }, e.getJson = Eo, e.globalChanges = E, e.hijriCalendar = vt, e.input = _c, e.jalaliCalendar = Re, e.locale = gt, e.localeAr = $, e.localeBg = ee, e.localeCa = te, e.localeCs = ne, e.localeDa = ae, e.localeDe = se, e.localeEl = ie, e.localeEn = ft, e.localeEnGB = re, e.localeEs = oe, e.localeFa = Ae, e.localeFi = We, e.localeFr = Ue, e.localeHe = Be, e.localeHi = je, e.localeHr = Ke, e.localeHu = Xe, e.localeIt = Je, e.localeJa = qe, e.localeKo = Ge, e.localeLt = Ze, e.localeNl = Qe, e.localeNo = $e, e.localePl = et, e.localePtBR = nt, e.localePtPT = tt, e.localeRo = at, e.localeRu = st, e.localeRuUA = it, e.localeSk = rt, e.localeSr = ot, e.localeSv = lt, e.localeTh = ct, e.localeTr = dt, e.localeUa = ht, e.localeVi = ut,e.localeZh = mt,e.luxonTimezone = Oo,e.momentTimezone = Fo,e.options = C,e.page = Wc,e.parseDate = Da,e.platform = L,e.popup = ld,e.prompt = function (e) {
        return Nc(Fc, e)
    },e.radio = Jc,e.registerComponent = Rn,e.remote = t,e.segmented = Zc,e.select = el,e.setOptions = function (e) {
        for (var t = 0, n = Object.keys(e); t < n.length; t++) {
            var a = n[t];
            C[a] = e[a]
        }
        E.next(C)
    },e.snackbar = function (e) {
        return Nc(Oc, e)
    },e.stepper = nd,e.textarea = vc,e.themes = k,e.toast = function (e) {
        return Nc(Hc, e)
    },e.updateRecurringEvent = function (e, t, n, a, s, i, r) {
        var o, l = c({}, e), d = null, h = n && n.start, u = n && n.end, m = t && t.start, _ = ts(e.recurring);
        switch (s) {
            case"following":
                if (a ? (a.recurring && (o = ts(a.recurring)), delete (d = c({}, a)).id) : h && m && (o = ns(_, h, m), d = c({}, n)), _.until = sa(ga(m)), _.count) {
                    var p = t && t.nr || 0;
                    o && (o.count = _.count - p), _.count = p
                }
                h && o && (o.from = h), d && o && (d.recurring = o), l.recurring = _;
                break;
            case"all":
                if (a ? (h = a.start, u = a.end, l = c({}, a)) : n && h && u && m && (l.allDay = n.allDay, l.recurring = ns(_, h, m)), h && u) {
                    var v = i && r ? {displayTimezone: i, timezonePlugin: r} : le, f = l.allDay ? le : v,
                        g = e.allDay ? le : v, y = ga(h, f), b = ga(u, f), x = e.start, D = e.end,
                        T = e.allDay && !l.allDay, S = x && ga(x, g), C = m && ga(m, g), w = b - y,
                        k = S && C ? fa(f, +S + (C ? y - C : 0)) : y, M = fa(f, +k + w);
                    _a(x) || !x && T ? l.start = ba("HH:mm", y) : x && (l.start = f ? k.toISOString() : k), _a(D) || !D && T ? l.end = ba("HH:mm", b) : D && (l.end = f ? M.toISOString() : M)
                }
                break;
            default:
                var E = e.recurringException, N = me(E) ? E.slice() : E ? [E] : [];
                m && N.push(m), l.recurringException = N, d = a || n
        }
        return {updatedEvent: l, newEvent: d}
    },e.util = w,Object.defineProperty(e, "__esModule", {value: !0})
}));
