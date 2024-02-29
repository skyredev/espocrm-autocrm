/*!
FullCalendar Moment Plugin v6.1.8
Docs & License: https://fullcalendar.io/docs/moment-plugin
(c) 2023 Adam Shaw
*/
FullCalendar.Moment=function(e,t,l,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=a(l);function u(e,t,l,n){let a;return"local"===t?a=r.default(e):"UTC"===t?a=r.default.utc(e):r.default.tz?a=r.default.tz(e,t):(a=r.default.utc(e),null!=l&&a.utcOffset(l)),a.locale(n),a}function o(t){return e=>e?t.format(e):""}l=t.createPlugin({name:"@fullcalendar/moment",cmdFormatter:function(e,t){return e=function t(e){let l=e.match(/^(.*?)\{(.*)\}(.*)$/);if(l){let e=t(l[2]);return{head:l[1],middle:e,tail:l[3],whole:l[1]+e.whole+l[3]}}return{head:null,middle:null,tail:null,whole:e}}(e),t.end?function u(o,d,i,f){if(o.middle){let e=d(o.head),t=u(o.middle,d,i,f),l=d(o.tail),n=i(o.head),a=u(o.middle,d,i,f),r=i(o.tail);if(e===n&&l===r)return e+(t===a?t:t+f+a)+l}let e=d(o.whole);let t=i(o.whole);if(e===t)return e;return e+f+t}(e,o(u(t.start.array,t.timeZone,t.start.timeZoneOffset,t.localeCodes[0])),o(u(t.end.array,t.timeZone,t.end.timeZoneOffset,t.localeCodes[0])),t.defaultSeparator):u(t.date.array,t.timeZone,t.date.timeZoneOffset,t.localeCodes[0]).format(e.whole)}});return t.globalPlugins.push(l),e.default=l,e.toMoment=function(e,t){if(!(t instanceof n.CalendarImpl))throw new Error("must supply a CalendarApi instance");return t=t.getCurrentData().dateEnv,u(e,t.timeZone,null,t.locale.codes[0])},e.toMomentDuration=function(e){return r.default.duration(e)},Object.defineProperty(e,"__esModule",{value:!0}),e}({},FullCalendar,moment,FullCalendar.Internal);
//# sourceMappingURL=fullcalendar-moment.js.map