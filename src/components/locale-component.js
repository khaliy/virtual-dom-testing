/**
 * Example component to render a locale switcher
 */
define('locale-component', ['virtual-dom/h', 'i18n', 'message-source'], function (require, module, exports, h, i18n, messageSource) {
    "use strict";

    var locales = messageSource.locales;
    var activeLocale = messageSource.locale;

    var locale = function (locale) {
        return h('a', {
                style: {
                    display: 'block'
                },
                className: (activeLocale === locale ? 'active':''),
                href: '?locale=' + locale
            },[
                i18n('locale.switcher', locale)
            ]);
    };

    var localeComponent = function localeComponent() {

        return h('main', {
                className: 'component locale-component'
            }, [
                locales.map(locale)
            ]);
    };

    module.exports = localeComponent;
});