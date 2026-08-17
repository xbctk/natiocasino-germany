# Аудит брендового сателлита

## Паспорт проверки

- URL: https://natiocasino.vercel.app/
- Финальный origin после редиректов: https://natiocasino.vercel.app
- GEO: Новая Зеландия
- Язык: английский
- Исходники: `/Users/aleksandrnosko/Documents/Проекты/Natiocasino`
- Дата: 13 августа 2026 года
- Допущения: GEO и язык заданы пользователем. Опубликованная версия является основным объектом приёмки; исходники использованы для уточнения повторяющихся причин. Внешняя достоверность лицензии, бонусов, платежей, приложения и иных заявлений бренда не проверялась.

## Итог

**Статус сайта:** На доработку

**Полнота проверки:** Полная

Блокирующих ошибок и запрета индексации не обнаружено: все 4 опубликованные HTML-страницы отвечают `200`, допускают обход и индексацию, имеют self-canonical, а raw- и rendered-директивы не содержат `noindex`. Приёмку не позволяют завершить три существенные системные ошибки: bonus/promotions CTA ведут на польскую локализацию, шесть legal/help-ссылок footer ведут на общий affiliate landing вместо заявленных документов, а в опубликованном контенте остались обрезанная строка и серия пунктуационных склеек.

## Охват

- Найдено внутренних HTML-страниц: 4 — `/`, `/bonuses`, `/app`, `/responsible-gaming`.
- Проверено статически: 4/4 HTML-страницы, `robots.txt`, `sitemap.xml`, 91/91 уникальный same-origin ресурс; лимит обхода 100 страниц и ресурсов 150 не достигнут.
- Проверено в браузере: все 4 страницы на desktop; главная при 1728 px, все шаблоны при 1280 px. Проверены rendered metadata, schema, console, меню, якоря, таблицы, footer и CTA-редиректы.
- Проверено по доступным мобильным состояниям: все 4 страницы при 390, 375, 360 и 320 px; мобильное меню и переходы Main → Bonuses → App → Main; отсутствие page-level overflow и локальный scroll таблиц.
- Пропущено или заблокировано: внешний structured-data validator, лабораторные Core Web Vitals, slow-network/CLS, точный визуальный crop каждого изображения на каждом mobile viewport и полноценная клавиатурная проверка hover/focus.
- Использована выборка общих шаблонов: общий header/sidebar/footer проверен на каждой странице; page-specific metadata, заголовки, ссылки, таблицы и контент проверены без выборки.

## Блокирующие ошибки

Не обнаружены.

## Существенные ошибки

1. `AUD-001`: все 26 опубликованных bonus/promotions affiliate-ссылок используют `lpid=522` и завершают редирект на польском `https://natiocazino.com/pl/promotions?...`, хотя сайт предназначен для английского языка и Новой Зеландии.
2. `AUD-002`: на всех 4 страницах ссылки `Terms and Conditions`, `Privacy policy`, `Bonuses - General Terms`, `FAQ`, `About Us`, `Contact Us` имеют один generic affiliate target; проверенный `Terms and Conditions` завершает редирект на главной казино `/en_nz`, а не на условия.
3. `AUD-003`: на главной в Key Factors опубликовано `Established — No public inco`; ещё в 10 местах на Main, Bonuses и App отсутствует пробел между предложениями, например `Program.Players`, `NZ$500.After` и `Internet.The`.

## Внутренние несоответствия

- `AUD-001` — обычный CTA (`lpid=1172`) подтверждён до стабильного `/en_nz`, а bonus CTA (`lpid=522`) — до польского `/pl/promotions`.
- `AUD-002` — шесть разных footer labels обещают разные legal/help destinations, но фактически имеют один и тот же target.
- `AUD-005` — Hero показывает `Overall Rating 96/100`, экспертный блок — `Expert Rating:4,4/5`, а таблица использует точку (`4.7/5`, `4.5/5`). Это не доказанное противоречие значений, но методики не объяснены, а формат непоследователен.
- GEO, `lang="en-NZ"`, `og:locale="en_NZ"`, NZD, PWA-статус, возраст `18+`, бонусные значения и поддержка `24/7` между страницами согласованы. NZ$10/NZ$35/NZ$500 относятся к разным сценариям и конфликтом не являются.

## Индексируемость

| URL | HTTP | robots.txt | Meta robots | X-Robots-Tag | Canonical | Sitemap | Итог |
|---|---|---|---|---|---|---|---|
| https://natiocasino.vercel.app/ | `200`, final URL совпадает | `404`: правил нет, обход не запрещён для `*`, Googlebot и Bingbot | raw/rendered: отсутствует | отсутствует | resolved self | отсутствует | ИНДЕКСИРУЕТСЯ |
| https://natiocasino.vercel.app/bonuses | `200`, final URL совпадает | правил нет, обход не запрещён | raw/rendered: отсутствует | отсутствует | self | отсутствует | ИНДЕКСИРУЕТСЯ |
| https://natiocasino.vercel.app/app | `200`, final URL совпадает | правил нет, обход не запрещён | raw/rendered: отсутствует | отсутствует | self | отсутствует | ИНДЕКСИРУЕТСЯ |
| https://natiocasino.vercel.app/responsible-gaming | `200`, final URL совпадает | правил нет, обход не запрещён | raw/rendered: отсутствует | отсутствует | self | отсутствует | ИНДЕКСИРУЕТСЯ |

`hreflang` отсутствует и для одноязычного single-GEO сайта отмечен как НЕ ПРИМЕНИМО. OG URL совпадает с canonical после разрешения URL.

## Мелкие замечания

- `AUD-004`: общий footer содержит `18+`, Responsible Gaming, Terms и Privacy labels, но не содержит copyright и текущий год.

## Рекомендации

- `AUD-005`: объяснить различие шкал `96/100` и `4.4/5`, унифицировать английский десятичный формат и пробел в `Expert Rating: 4.4/5`.
- `AUD-006`: сократить Title на Bonuses (67), App (65) и Responsible Gaming (73 символа); App Description имеет 161 символ вместо рекомендованных 140–160. Длинные H1 можно сделать короче без потери темы.
- `AUD-007`: опубликовать `sitemap.xml` со всеми 4 индексируемыми страницами; при необходимости добавить явный `robots.txt`. Отсутствие robots rules сейчас не блокирует обход.
- `AUD-008`: оптимизировать крупные PNG/OG hero assets. Исходные файлы имеют 1.45–1.88 МБ, оптимизированные варианты — примерно 500–669 КБ; видимого функционального сбоя загрузки не наблюдалось.

## Результаты по категориям

| Категория | ПРОЙДЕНО | ОШИБКА | ПРЕДУПРЕЖДЕНИЕ | НЕ ПРИМЕНИМО | НЕ ПРОВЕРЕНО | Комментарий |
|---|---:|---:|---:|---:|---:|---|
| Доступность и production readiness | 5 | 1 | 0 | 0 | 0 | Сайт доступен; опубликована незавершённая редактура. |
| Desktop-визуал | 5 | 0 | 0 | 0 | 1 | Layout устойчив; полная keyboard focus-проверка не завершена. |
| Mobile/responsive | 7 | 0 | 0 | 0 | 1 | 16 комбинаций без overflow; точный crop всех изображений не подтверждён. |
| Структура и интент | 8 | 0 | 1 | 1 | 0 | Структура содержательная; длинные H1 — рекомендация. |
| Текст и редактура | 7 | 1 | 0 | 0 | 0 | Обрезанная строка и 10 пунктуационных склеек. |
| GEO и локализация | 6 | 1 | 1 | 0 | 0 | Польский bonus destination и смешанный decimal format. |
| SEO metadata | 6 | 0 | 2 | 0 | 0 | Metadata присутствуют; несколько значений длиннее ориентира. |
| Индексация и URL-сигналы | 10 | 0 | 2 | 1 | 0 | Индексация разрешена; sitemap отсутствует. |
| Изображения и favicon | 5 | 0 | 2 | 0 | 0 | Favicon и изображения доступны; крупные raster assets стоит оптимизировать. |
| Open Graph и schema | 8 | 0 | 0 | 0 | 1 | OG/schema согласованы; внешний validator не запускался. |
| Ссылки, навигация и CTA | 6 | 2 | 0 | 0 | 0 | CTA технически работают, но bonus GEO и footer destinations неверны. |
| Таблицы | 6 | 1 | 0 | 0 | 0 | Адаптивны; Key Facts содержит обрезанную строку. |
| Responsible Gambling | 6 | 0 | 0 | 0 | 0 | Есть 18+, loss-awareness, отдельная страница и help resources. |
| FAQ и экспертный блок | 5 | 0 | 1 | 1 | 0 | FAQ/schema совпадают; шкалы рейтинга требуют пояснения. |
| Footer | 0 | 4 | 0 | 1 | 0 | Legal/help targets не соответствуют labels; нет copyright/year. |
| Производительность | 5 | 0 | 1 | 0 | 2 | Работоспособность подтверждена; CWV/CLS не измерялись. |
| Блокеры | 14 | 0 | 0 | 0 | 0 | Ни один критерий блокирующей ошибки не сработал. |

## Детальные находки

| ID | Важность | Статус | Страница | Элемент/файл | Проблема | Доказательство | Что исправить |
|---|---|---|---|---|---|---|---|
| AUD-001 | Существенная | ОШИБКА | Все 4 страницы; клик подтверждён на https://natiocasino.vercel.app/bonuses | `Get bonus`, `Promotions`; `components/affiliateLinks.ts:1` | Bonus/promotions CTA не соответствует GEO и языку. | `lpid=522` используется 26 раз и завершает цепочку на `https://natiocazino.com/pl/promotions?...`; общий CTA ведёт на `/en_nz`. | Получить корректный NZ/English affiliate destination, заменить `BONUS_AFFILIATE_URL` и повторно проверить все CTA. |
| AUD-002 | Существенная | ОШИБКА | Все 4 страницы | Общий footer; `components/Footer.tsx` | Шесть legal/help labels ведут на generic casino landing. | Все шесть `href` равны general affiliate URL; `Terms and Conditions` кликом проверен до `/en_nz`, а не до terms document. | Установить отдельный корректный destination для каждой ссылки либо убрать label до появления страницы; повторно проверить цепочки. |
| AUD-003 | Существенная | ОШИБКА | https://natiocasino.vercel.app/, /bonuses, /app | Key Factors и body copy; `components/MainContent.tsx:131,153,155,217,398,471,590`; `components/BonusesContent.tsx:165,187,218`; `components/AppContent.tsx:366` | В production осталась обрезанная строка и 10 склеек предложений. | `Established — No public inco`; примеры `Program.Players`, `account.Slots`, `deposit.The`, `NZ$500.After`, `Promotions.Some`, `Internet.The`. | Сверить утверждённые DOCX, восстановить полную строку и пробелы без переписывания смысла. |
| AUD-004 | Мелкая | ОШИБКА | Все 4 страницы | Общий footer; `components/Footer.tsx` | Нет copyright и текущего года. | Footer заканчивается legal copy и `18+`; copyright-строка отсутствует. | Добавить согласованную строку copyright с текущим годом и идентичностью сайта. |
| AUD-005 | Рекомендация | ПРЕДУПРЕЖДЕНИЕ | https://natiocasino.vercel.app/ | Hero, National Casino Grade, review schema | Рейтинговые шкалы не объяснены; decimal formats смешаны. | `96/100`, `Expert Rating:4,4/5`, table `4.7/5`; review schema совпадает с шестью видимыми отзывами после нормализации разделителя. | Пояснить методики и унифицировать `4.4/5`. |
| AUD-006 | Рекомендация | ПРЕДУПРЕЖДЕНИЕ | https://natiocasino.vercel.app/bonuses, /app, /responsible-gaming | Title, Description, H1 | Часть metadata/H1 длиннее редакционных ориентиров. | Title: 67/65/73; App Description: 161; несколько H1 длиннее 6 слов. | Сократить естественно, сохранив бренд, GEO и интент. |
| AUD-007 | Рекомендация | ПРЕДУПРЕЖДЕНИЕ | Все 4 страницы | `/sitemap.xml`, `/robots.txt` | Sitemap отсутствует; явные robots rules не опубликованы. | Оба URL отвечают `404`; robots 404 означает отсутствие правил, не crawl block. | Опубликовать sitemap; robots.txt добавить при необходимости. |
| AUD-008 | Рекомендация | ПРЕДУПРЕЖДЕНИЕ | Все 4 страницы | Hero/OG PNG и cache headers | Крупные PNG создают неоптимальный payload. | Оригиналы 1.45–1.88 МБ; проверенные оптимизированные варианты 500–669 КБ; image cache требует revalidation. | Рассмотреть WebP/AVIF, responsive sizes и более эффективное кэширование. |

## Покрытие страниц

| URL | Тип/шаблон | Static | Desktop | Mobile | Основной результат |
|---|---|---|---|---|---|
| https://natiocasino.vercel.app/ | Главная, 20 content blocks | ПРОЙДЕНО | ПРОЙДЕНО, 1728/1280 px | ПРОЙДЕНО, 390/375/360/320 px | Индексируется; редакционные дефекты и неоднозначные rating scales. |
| https://natiocasino.vercel.app/bonuses | Bonuses | ПРОЙДЕНО | ПРОЙДЕНО, 1280 px | ПРОЙДЕНО, 390/375/360/320 px | Индексируется; bonus CTA ведёт на польскую локализацию; есть редакционные склейки. |
| https://natiocasino.vercel.app/app | App/PWA | ПРОЙДЕНО | ПРОЙДЕНО, 1280 px | ПРОЙДЕНО, 390/375/360/320 px | Индексируется; PWA-описание согласовано; одна редакционная склейка. |
| https://natiocasino.vercel.app/responsible-gaming | Responsible Gaming | ПРОЙДЕНО | ПРОЙДЕНО, 1280 px | ПРОЙДЕНО, 390/375/360/320 px | Индексируется; 18+, loss-awareness и help resources доступны. |

## Не удалось проверить

### Обязательные core-проверки

Все обязательные core-области проверены: raw HTTP/headers, `robots.txt`, rendered directives, homepage indexability, все обнаруженные страницы, desktop behavior, internal navigation/resources и CTA click/redirect behavior.

### Необязательные проверки

- Внешний structured-data validator не был доступен; JSON-LD распарсен локально, FAQ/Breadcrumb/Review сопоставлены с видимым контентом.
- Core Web Vitals, slow-network resilience и числовой CLS не измерялись; значения не предполагались.
- Точный визуальный crop каждого изображения на всех 16 mobile combinations не подтверждён отдельными screenshots; загрузка, размеры и отсутствие overflow проверены в rendered DOM.
- Полноценный keyboard focus/hover walkthrough не завершён; controls и `focus-visible` стили проверены частично, поэтому правило оставлено НЕ ПРОВЕРЕНО.

## Приоритет исправлений

1. Заменить `BONUS_AFFILIATE_URL` на корректный NZ/English destination и проверить все 26 ссылок (`AUD-001`).
2. Назначить корректные destinations шести legal/help-ссылкам footer или временно убрать вводящие в заблуждение labels (`AUD-002`).
3. Исправить обрезанное значение Key Facts и 10 пунктуационных склеек строго по утверждённым DOCX (`AUD-003`).
4. Добавить copyright/year (`AUD-004`).
5. Затем выполнить рекомендации по rating formats, metadata, sitemap и raster assets (`AUD-005`–`AUD-008`).

## Финальный комментарий

Сайт проверен по опубликованной версии и исходникам. Проверены визуал, мобильные viewport’ы, структура, контент, SEO, ссылки, микроразметка, локализация и внутренняя согласованность. Внешний фактчекинг заявлений бренда не проводился. Статус: На доработку.

## Полная матрица правил

| Правило | Статус | Краткое доказательство |
|---|---|---|
| AV-01 | ПРОЙДЕНО | Главная открывается с HTTP 200 без redirect loop или interstitial. |
| AV-02 | ПРОЙДЕНО | Все 4 обнаруженные internal HTML pages открываются с 200. |
| AV-03 | ПРОЙДЕНО | Пустых critical sections, broken layout и runtime failures нет; 91/91 ресурсов доступны. |
| AV-04 | ПРОЙДЕНО | Template tokens, Lorem ipsum, TODO/FIXME и AI-инструкции не найдены. |
| AV-05 | ОШИБКА | AUD-003: обрезанное значение и 10 склеек показывают незавершённую редактуру. |
| AV-06 | ПРОЙДЕНО | Релевантные source routes соответствуют live; generated/dependency content исключён. |
| VD-01 | ПРОЙДЕНО | На 1728/1280 px overlap, clipping и page overflow не обнаружены. |
| VD-02 | ПРОЙДЕНО | Cards, tables, lists, banners и CTA сохраняют единый spacing. |
| VD-03 | ПРОЙДЕНО | Headings, CTA и изображения не имеют видимого desktop cropping/distortion. |
| VD-04 | ПРОЙДЕНО | Критический текст читаем на поверхностях и hero overlays. |
| VD-05 | НЕ ПРОВЕРЕНО | Полный hover/keyboard focus walkthrough не завершён; focus-visible CSS проверен частично. |
| VD-06 | ПРОЙДЕНО | Все anchor targets существуют; `scroll-margin-top: 93px` учитывает sticky header. |
| VM-01 | ПРОЙДЕНО | Все 4 страницы проверены при 390, 375, 360 и 320 px. |
| VM-02 | ПРОЙДЕНО | `scrollWidth` равен viewport во всех 16 page/width combinations. |
| VM-03 | ПРОЙДЕНО | H1/body остаются внутри viewport с боковыми отступами до 320 px. |
| VM-04 | ПРОЙДЕНО | Tables используют локальный `overflow-x:auto`; page overflow отсутствует. |
| VM-05 | ПРОЙДЕНО | CTA видимы, читаемы и не выходят за mobile viewport. |
| VM-06 | ПРОЙДЕНО | Меню открывается/закрывается; Main, Bonuses, App проверены кликами. |
| VM-07 | ПРОЙДЕНО | Header, mobile section nav и back-to-top не сталкиваются. |
| VM-08 | НЕ ПРОВЕРЕНО | Точный visual crop всех mobile images не подтверждён отдельными screenshots. |
| ST-01 | ПРОЙДЕНО | Main содержит 20 meaningful blocks; internal pages соответствуют интенту. |
| ST-02 | ПРОЙДЕНО | Live block order соответствует approved project structure/source templates. |
| ST-03 | ПРОЙДЕНО | Thin, empty или decorative-only critical sections не найдены. |
| ST-04 | ПРОЙДЕНО | На каждой из 4 страниц ровно один видимый H1. |
| ST-05 | ПРЕДУПРЕЖДЕНИЕ | AUD-006: несколько H1 длиннее ориентира в 6 слов. |
| ST-06 | ПРОЙДЕНО | Main H1 не содержит `review` или его локализованный эквивалент. |
| ST-07 | ПРОЙДЕНО | Heading hierarchy логична; необоснованных jumps не выявлено. |
| ST-08 | ПРОЙДЕНО | H2/H3 уникальны и покрывают разные intents. |
| ST-09 | ПРОЙДЕНО | Key Facts, Pros/Cons, app, bonuses, payments, RG, support, FAQ и summary представлены. |
| ST-10 | НЕ ПРИМЕНИМО | Optional blocks не требуются approved structure отдельных pages. |
| CT-01 | ПРОЙДЕНО | Visible interface, tables, CTA и footer написаны на английском. |
| CT-02 | ОШИБКА | AUD-003: видимы обрезанная фраза и 10 мест без пробела между предложениями. |
| CT-03 | ПРОЙДЕНО | Duplicate body paragraphs/filler не найдены; footer repeat является template. |
| CT-04 | ПРОЙДЕНО | Guaranteed wins/payouts, risk-free income не найдены. |
| CT-05 | ПРОЙДЕНО | Есть `18+`, RG page и `Gambling can be addictive. Play responsibly.` |
| CT-06 | ПРОЙДЕНО | Тон информационный, условия и риски раскрыты. |
| CT-07 | ПРОЙДЕНО | Claims оценивались на internal consistency без external fact-check. |
| CT-08 | ПРОЙДЕНО | Упоминания других брендов не классифицировались как ошибки. |
| LO-01 | ОШИБКА | AUD-001: bonus CTA NZ/English сайта завершает редирект на `/pl/promotions`. |
| LO-02 | ПРОЙДЕНО | Menu, buttons, tables и footer labels остаются английскими. |
| LO-03 | ПРОЙДЕНО | Очевидной language/GEO подмены rendered images не обнаружено. |
| LO-04 | ПРОЙДЕНО | NZD локален; прочие currencies явно описаны как поддерживаемые. |
| LO-05 | ПРОЙДЕНО | Country/currency contradiction не обнаружено. |
| LO-06 | ПРЕДУПРЕЖДЕНИЕ | AUD-005: `4,4/5` смешано с `4.7/5`; смысл не сломан. |
| LO-07 | ПРОЙДЕНО | CTA tone не содержит гарантий или чрезмерных обещаний. |
| LO-08 | ПРОЙДЕНО | Legal/RG copy информационен и не обещает legal availability. |
| SE-01 | ПРОЙДЕНО | Непустой Title есть на всех 4 pages. |
| SE-02 | ПРЕДУПРЕЖДЕНИЕ | AUD-006: Title 67/65/73 на трёх pages; home 59. |
| SE-03 | ПРОЙДЕНО | Topic/brand/GEO появляются рано; stuffing не выявлен. |
| SE-04 | ПРОЙДЕНО | Непустая Meta Description есть на всех 4 pages. |
| SE-05 | ПРЕДУПРЕЖДЕНИЕ | AUD-006: App Description 161; остальные 147/154/159. |
| SE-06 | ПРОЙДЕНО | Descriptions естественно отражают localized intent. |
| SE-07 | ПРОЙДЕНО | На каждой page один H1 и unique useful H2. |
| SE-08 | ПРОЙДЕНО | Keyword stuffing в metadata/headings/body/alt не найден. |
| IX-01 | ПРОЙДЕНО | Все 4 indexable pages имеют canonical. |
| IX-02 | ПРОЙДЕНО | Canonicals разрешаются в self final URLs. |
| IX-03 | ПРОЙДЕНО | Raw/rendered noindex и blocking robots directives отсутствуют. |
| IX-04 | ПРОЙДЕНО | Page-wide nofollow не найден. |
| IX-05 | ПРОЙДЕНО | Internal URL structure логична; redirects внутренних pages не выявлены. |
| IX-06 | ПРОЙДЕНО | Browser title и final URL совпадают с ожидаемыми pages. |
| IX-07 | ПРЕДУПРЕЖДЕНИЕ | AUD-007: sitemap отсутствует; robots 404 означает отсутствие rules, не block. |
| IX-08 | НЕ ПРИМЕНИМО | Сайт single-language/single-GEO; hreflang не обязателен. |
| IX-09 | ПРОЙДЕНО | robots.txt 404: rules для `*`, Googlebot и Bingbot не опубликованы. |
| IX-10 | ПРОЙДЕНО | X-Robots-Tag отсутствует на всех HTML responses. |
| IX-11 | ПРОЙДЕНО | Raw/rendered robots directives совпадают: директив нет. |
| IX-12 | ПРОЙДЕНО | Все 4 HTML pages имеют статус ИНДЕКСИРУЕТСЯ. |
| IX-13 | ПРЕДУПРЕЖДЕНИЕ | AUD-007: sitemap отсутствует, поэтому pages в нём не перечислены. |
| IM-01 | ПРОЙДЕНО | 91/91 same-origin resources доступны; broken images не обнаружены. |
| IM-02 | ПРОЙДЕНО | Informative images имеют useful alt; decorative assets допускают empty alt. |
| IM-03 | ПРОЙДЕНО | `image1` и keyword-stuffed alt не найдены. |
| IM-04 | ПРЕДУПРЕЖДЕНИЕ | AUD-008: крупные hero/OG assets остаются PNG. |
| IM-05 | ПРОЙДЕНО | Accidental placeholder filenames не найдены. |
| IM-06 | ПРЕДУПРЕЖДЕНИЕ | AUD-008: originals 1.45–1.88 МБ, variants 500–669 КБ. |
| IM-07 | ПРОЙДЕНО | `/icon.png?...` отвечает 200 `image/png`; favicon rendered. |
| SC-01 | ПРОЙДЕНО | Все pages имеют og:title/description/image/url/type. |
| SC-02 | ПРОЙДЕНО | OG values соответствуют visible page, en_NZ, canonical и final URL. |
| SC-03 | ПРОЙДЕНО | JSON-LD blocks parse без syntax errors. |
| SC-04 | ПРОЙДЕНО | Main/App visible FAQ представлены FAQPage. |
| SC-05 | ПРОЙДЕНО | Visible breadcrumbs внутренних pages представлены BreadcrumbList. |
| SC-06 | ПРОЙДЕНО | Review schema сопоставлена с шестью видимыми testimonials/ratings. |
| SC-07 | ПРОЙДЕНО | Hidden или contradictory schema values не обнаружены. |
| SC-08 | НЕ ПРОВЕРЕНО | External structured-data validator недоступен; local parse выполнен. |
| SC-09 | ПРОЙДЕНО | Все visible FAQ Q/A совпадают со schema по смыслу и структуре. |
| LK-01 | ОШИБКА | AUD-002: шесть footer links ведут не к заявленным legal/help destinations. |
| LK-02 | ПРОЙДЕНО | Primary/bonus CTA кликабельны, chains завершаются stable URLs. |
| LK-03 | ПРОЙДЕНО | Non-GEO 4xx/5xx, loops, DNS failures и malformed targets не найдены. |
| LK-04 | ПРОЙДЕНО | Все anchor targets существуют; sticky-header offset задан. |
| LK-05 | ПРОЙДЕНО | Empty href, placeholder `#` и JavaScript no-op не найдены. |
| LK-06 | ОШИБКА | AUD-001/AUD-002: repeated labels/destinations не соответствуют NZ intent или label. |
| LK-07 | ПРОЙДЕНО | External brand judged по function/consistency, не по имени. |
| LK-08 | ПРОЙДЕНО | 91/91 same-origin resources проверены; cap 150 не достигнут. |
| TB-01 | ОШИБКА | AUD-003: Key Factors row `Established — No public inco` незавершён. |
| TB-02 | ПРОЙДЕНО | Bonus tables имеют stable columns и согласованы с text по scope. |
| TB-03 | ПРОЙДЕНО | Payment/limits content согласован с NZD context. |
| TB-04 | ПРОЙДЕНО | Slots/live/tournament tables populated и имеют stable headers. |
| TB-05 | ПРОЙДЕНО | Expert table average соответствует visible `4.4/5` после normalization. |
| TB-06 | ПРОЙДЕНО | Mobile tables ограничены собственным horizontal scroll. |
| TB-07 | ПРОЙДЕНО | Intentional omissions используются последовательно; accidental empty rows нет. |
| RG-01 | ПРОЙДЕНО | Есть отдельная meaningful `/responsible-gaming` page. |
| RG-02 | ПРОЙДЕНО | Visible `18+`, footer warning и loss-awareness wording присутствуют. |
| RG-03 | ПРОЙДЕНО | KYC/AML и safety language представлены в approved structure. |
| RG-04 | ПРОЙДЕНО | Safety/payout/profit/no-risk guarantees не найдены. |
| RG-05 | ПРОЙДЕНО | Есть affordable-funds/limits/self-exclusion guidance. |
| RG-06 | ПРОЙДЕНО | Age 18+, limits и self-exclusion wording согласованы. |
| FE-01 | ПРОЙДЕНО | Main 8 FAQ, App 9; approved content задаёт фактический объём. |
| FE-02 | ПРОЙДЕНО | FAQ покрывает deposit, KYC, app, payments и gameplay intents. |
| FE-03 | ПРОЙДЕНО | Answers readable/substantive; length использована как guidance. |
| FE-04 | ПРОЙДЕНО | FAQ не противоречит body/tables по сопоставимым scopes. |
| FE-05 | ПРОЙДЕНО | Visible FAQ полностью сопоставлен с FAQ schema. |
| FE-06 | НЕ ПРИМЕНИМО | Author/role/update date не обязательны для approved expert template. |
| FE-07 | ПРЕДУПРЕЖДЕНИЕ | AUD-005: expert value согласован, но `96/100` и `4.4/5` не объяснены. |
| FT-01 | ОШИБКА | AUD-002/AUD-004: Terms/Privacy targets неверны; copyright отсутствует. |
| FT-02 | ОШИБКА | AUD-002: Bonus Terms/About/Contact/FAQ labels ведут на generic landing. |
| FT-03 | ОШИБКА | AUD-004: current copyright year и identity отсутствуют. |
| FT-04 | ОШИБКА | AUD-002: footer layout mobile устойчив, но шесть destinations не соответствуют labels. |
| FT-05 | НЕ ПРИМЕНИМО | Required satellite interlinking не задано. |
| PF-01 | ПРОЙДЕНО | Primary content появляется без fatal delay на desktop/mobile. |
| PF-02 | ПРЕДУПРЕЖДЕНИЕ | AUD-008: несколько PNG unusually heavy; functional impact не наблюдался. |
| PF-03 | ПРОЙДЕНО | Scripts не ломают menu, anchors, CTA или tables; console clean. |
| PF-04 | ПРОЙДЕНО | Non-critical raster images преимущественно используют lazy loading. |
| PF-05 | ПРОЙДЕНО | H1/hero/body доступны сразу после load. |
| PF-06 | НЕ ПРОВЕРЕНО | Slow-network resilience и numerical CLS не измерялись. |
| PF-07 | НЕ ПРОВЕРЕНО | Core Web Vitals не измерялись и не предполагались. |
| PF-08 | ПРОЙДЕНО | HTML 54–189 КБ raw/8.9–35.6 КБ gzip, 91 resources, cache/size evidence recorded. |
| AB-01 | ПРОЙДЕНО | Homepage доступна, blank state и redirect loop отсутствуют. |
| AB-02 | ПРОЙДЕНО | На 390/375/360/320 px page-level horizontal scroll отсутствует. |
| AB-03 | ПРОЙДЕНО | Mobile navigation открывается, закрывается и ведёт по destinations. |
| AB-04 | ПРОЙДЕНО | Primary CTA достигает stable `/en_nz`; bonus CTA также достигает stable URL. |
| AB-05 | ПРОЙДЕНО | Visible template tokens/placeholders отсутствуют; editorial defect не blocker-token. |
| AB-06 | ПРОЙДЕНО | Критический текст читаем; contrast blocker не обнаружен. |
| AB-07 | ПРОЙДЕНО | Empty critical sections отсутствуют. |
| AB-08 | ПРОЙДЕНО | Homepage имеет один visible H1. |
| AB-09 | ПРОЙДЕНО | Homepage имеет Meta Title и Meta Description. |
| AB-10 | ПРОЙДЕНО | Site-wide есть и `18+`, и meaningful RG/loss-awareness content. |
| AB-11 | ПРОЙДЕНО | Runtime failure, мешающий normal use, не обнаружен; console clean. |
| AB-12 | ПРОЙДЕНО | Effective `Disallow: /` отсутствует; robots.txt не опубликован. |
| AB-13 | ПРОЙДЕНО | Homepage/site-wide noindex отсутствует в raw/rendered/header signals. |
| AB-14 | ПРОЙДЕНО | Mandatory homepage indexability полностью проверена. |
