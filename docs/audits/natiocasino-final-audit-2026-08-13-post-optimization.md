# Аудит брендового сателлита

## Паспорт проверки

- URL: https://natiocasino.vercel.app/
- Финальный origin после редиректов: https://natiocasino.vercel.app
- GEO: Новая Зеландия
- Язык: английский
- Исходники: `/Users/aleksandrnosko/Documents/Проекты/Natiocasino`
- Дата: 13 августа 2026 года, полный финальный аудит после исправления контента, рейтингов, metadata, copyright и оптимизации изображений
- Допущения: GEO и язык заданы пользователем. Опубликованная версия является основным объектом приёмки; исходники использованы для уточнения повторяющихся причин. Внешняя достоверность лицензии, бонусов, платежей, приложения и иных заявлений бренда не проверялась.

## Итог

**Статус сайта:** На доработку

**Полнота проверки:** Полная

Блокирующих ошибок и запрета индексации не обнаружено: все 4 опубликованные HTML-страницы отвечают `200`, разрешены `robots.txt`, включены в `sitemap.xml`, имеют self-canonical, а raw- и rendered-директивы не содержат `noindex`. Последние исправления контента, рейтинга, metadata, copyright и веса изображений опубликованы корректно. Приёмку пока не позволяют завершить две существенные системные ошибки: bonus/promotions CTA ведут на польскую локализацию, а шесть legal/help-ссылок footer ведут на общий affiliate landing вместо заявленных документов.

## Охват

- Найдено внутренних HTML-страниц: 4 — `/`, `/bonuses`, `/app`, `/responsible-gaming`.
- Проверено статически: 4/4 HTML-страницы, `robots.txt` 200, валидный `sitemap.xml` с 4 URL, 91/91 уникальный same-origin ресурс; лимит обхода 100 страниц и ресурсов 150 не достигнут.
- Проверено в браузере: все 4 страницы на desktop при 1728 px визуально и при 1280 px структурно; rendered metadata, schema, browser logs, меню, якоря, таблицы, footer и CTA-редиректы.
- Проверено по доступным мобильным состояниям: все 4 страницы при 390, 375, 360 и 320 px; визуальные состояния всех Hero при 390 px, общий footer, мобильное меню и переходы Main → Bonuses → App → Main, отсутствие page-level overflow и локальный scroll таблиц.
- Пропущено или заблокировано: внешний structured-data validator, лабораторные Core Web Vitals, slow-network/числовой CLS и полноценный клавиатурный hover/focus walkthrough.
- Использована выборка общих шаблонов: общий header/sidebar/footer проверен в DOM на каждой странице; визуальный mobile footer проверен на Main как представитель общего компонента. Page-specific metadata, H1, ссылки, schema, таблицы и контент проверены на каждой странице.

## Блокирующие ошибки

Не обнаружены.

## Существенные ошибки

1. `AUD-001`: все 26 опубликованных bonus/promotions affiliate-ссылок используют `lpid=522` и завершают редирект на польском `https://natiocazino.com/pl/promotions?...`, хотя сайт предназначен для английского языка и Новой Зеландии.
2. `AUD-002`: на всех 4 страницах ссылки `Terms and Conditions`, `Privacy policy`, `Bonuses - General Terms`, `FAQ`, `About Us`, `Contact Us` имеют один generic affiliate target; проверенный `Terms and Conditions` завершается на главной казино `/en_nz`, а не на документе условий.

## Внутренние несоответствия

- `AUD-001` — обычный CTA с `lpid=1172` подтверждён кликом до стабильного `/en_nz`, а bonus CTA с `lpid=522` — до польского `/pl/promotions`.
- `AUD-002` — шесть разных footer labels обещают разные legal/help destinations, но фактически имеют один и тот же target.
- GEO, `lang="en-NZ"`, `og:locale="en_NZ"`, NZD, PWA-статус, возраст `18+`, бонусные значения, поддержка `24/7` и рейтинг `4.4/5` между страницами согласованы. NZ$10/NZ$35/NZ$500 относятся к разным сценариям и конфликтом не являются.

## Индексируемость

| URL | HTTP | robots.txt | Meta robots | X-Robots-Tag | Canonical | Sitemap | Итог |
|---|---|---|---|---|---|---|---|
| https://natiocasino.vercel.app/ | `200`, final URL совпадает | `Allow: /` для `*`, Googlebot и Bingbot | raw/rendered: отсутствует | отсутствует | resolved self | включена | ИНДЕКСИРУЕТСЯ |
| https://natiocasino.vercel.app/bonuses | `200`, final URL совпадает | `Allow: /` | raw/rendered: отсутствует | отсутствует | self | включена | ИНДЕКСИРУЕТСЯ |
| https://natiocasino.vercel.app/app | `200`, final URL совпадает | `Allow: /` | raw/rendered: отсутствует | отсутствует | self | включена | ИНДЕКСИРУЕТСЯ |
| https://natiocasino.vercel.app/responsible-gaming | `200`, final URL совпадает | `Allow: /` | raw/rendered: отсутствует | отсутствует | self | включена | ИНДЕКСИРУЕТСЯ |

`hreflang` отсутствует и для одноязычного single-GEO сайта отмечен как НЕ ПРИМЕНИМО. OG URL совпадает с canonical после разрешения URL. `robots.txt` содержит ссылку на sitemap; sitemap валиден, включает все 4 страницы и намеренно не содержит необязательный `<lastmod>`.

## Мелкие замечания

Не обнаружены.

## Рекомендации

- `AUD-003`: видимые H1 на Main, Bonuses и App длиннее редакционного ориентира в шесть слов. Это не мешает публикации и не является SEO-ошибкой; при следующей редактуре их можно естественно сократить, сохранив бренд, GEO и интент. H1 Responsible Gaming укладывается в ориентир.

## Результаты по категориям

| Категория | ПРОЙДЕНО | ОШИБКА | ПРЕДУПРЕЖДЕНИЕ | НЕ ПРИМЕНИМО | НЕ ПРОВЕРЕНО | Комментарий |
|---|---:|---:|---:|---:|---:|---|
| Доступность и production readiness | 6 | 0 | 0 | 0 | 0 | Все страницы и 91/91 ресурсов доступны; следов незавершённой редакции нет. |
| Desktop-визуал | 5 | 0 | 0 | 0 | 1 | Layout устойчив на 1728/1280 px; полный keyboard focus walkthrough не завершён. |
| Mobile/responsive | 8 | 0 | 0 | 0 | 0 | 16 комбинаций без page overflow; меню, таблицы, Hero и footer проверены. |
| Структура и интент | 8 | 0 | 1 | 1 | 0 | Структура содержательная; три длинных H1 — рекомендация. |
| Текст и редактура | 8 | 0 | 0 | 0 | 0 | Обрезанная строка и пунктуационные склейки исправлены на live. |
| GEO и локализация | 7 | 1 | 0 | 0 | 0 | Видимый сайт локализован; bonus destination открывается по-польски. |
| SEO metadata | 8 | 0 | 0 | 0 | 0 | Все Titles 47–59, Descriptions 141–159; metadata полны и уникальны. |
| Индексация и URL-сигналы | 12 | 0 | 0 | 1 | 0 | Все 4 страницы разрешены robots и включены в валидный sitemap. |
| Изображения и favicon | 7 | 0 | 0 | 0 | 0 | Broken images нет; основные raster assets оптимизированы, favicon работает. |
| Open Graph и schema | 8 | 0 | 0 | 0 | 1 | OG/schema согласованы; внешний validator не запускался. |
| Ссылки, навигация и CTA | 6 | 2 | 0 | 0 | 0 | CTA технически работают, но bonus GEO и footer destinations неверны. |
| Таблицы | 7 | 0 | 0 | 0 | 0 | Данные заполнены, рейтинг согласован, mobile scroll локальный. |
| Responsible Gambling | 6 | 0 | 0 | 0 | 0 | Есть 18+, loss-awareness, отдельная страница и help resources. |
| FAQ и экспертный блок | 6 | 0 | 0 | 1 | 0 | FAQ/schema совпадают; rating унифицирован как 4.4/5. |
| Footer | 1 | 3 | 0 | 1 | 0 | Copyright исправлен; legal/help destinations не соответствуют labels. |
| Производительность | 6 | 0 | 0 | 0 | 2 | Тяжёлые PNG оптимизированы; CWV/slow-network/CLS не измерялись. |
| Блокеры | 14 | 0 | 0 | 0 | 0 | Ни один критерий блокирующей ошибки не сработал. |

## Детальные находки

| ID | Важность | Статус | Страница | Элемент/файл | Проблема | Доказательство | Что исправить |
|---|---|---|---|---|---|---|---|
| AUD-001 | Существенная | ОШИБКА | Все 4 страницы; клик подтверждён на https://natiocasino.vercel.app/bonuses | `Get bonus`, `Promotions`; `components/affiliateLinks.ts:1` | Bonus/promotions CTA не соответствует GEO и языку. | `lpid=522` используется 26 раз и кликом завершает цепочку на `https://natiocazino.com/pl/promotions?...`; общий CTA ведёт на `/en_nz`. | Получить корректный NZ/English affiliate destination, заменить `BONUS_AFFILIATE_URL` и повторно проверить все CTA. |
| AUD-002 | Существенная | ОШИБКА | Все 4 страницы | Общий footer; `components/Footer.tsx:5` | Шесть legal/help labels ведут на generic casino landing. | Все шесть `href` равны general affiliate URL; `Terms and Conditions` кликом проверен до `/en_nz`, а не до terms document. | Установить отдельный корректный destination для каждой ссылки либо убрать label до появления страницы; повторно проверить цепочки. |
| AUD-003 | Рекомендация | ПРЕДУПРЕЖДЕНИЕ | https://natiocasino.vercel.app/, /bonuses, /app | Видимый Hero H1; `app/page.tsx`, `app/bonuses/page.tsx:26`, `app/app/page.tsx:26` | H1 длиннее ориентира в шесть слов. | Main — 8 смысловых слов, Bonuses и App — примерно по 10; на 320 px они остаются читаемыми и не вызывают overflow. | При следующей редактуре сократить естественно; текущая длина не является publication failure. |

## Покрытие страниц

| URL | Тип/шаблон | Static | Desktop | Mobile | Основной результат |
|---|---|---|---|---|---|
| https://natiocasino.vercel.app/ | Главная, 20 content blocks | ПРОЙДЕНО | ПРОЙДЕНО, 1728/1280 px | ПРОЙДЕНО, 390/375/360/320 px | Индексируется; контент, rating, copyright, metadata и WebP исправлены; остаются shared CTA/footer findings. |
| https://natiocasino.vercel.app/bonuses | Bonuses | ПРОЙДЕНО | ПРОЙДЕНО, 1728/1280 px | ПРОЙДЕНО, 390/375/360/320 px | Индексируется; bonus CTA ведёт на польскую локализацию. |
| https://natiocasino.vercel.app/app | App/PWA | ПРОЙДЕНО | ПРОЙДЕНО, 1728/1280 px | ПРОЙДЕНО, 390/375/360/320 px | Индексируется; PWA-описание, FAQ/schema и mobile layout согласованы. |
| https://natiocasino.vercel.app/responsible-gaming | Responsible Gaming | ПРОЙДЕНО | ПРОЙДЕНО, 1728/1280 px | ПРОЙДЕНО, 390/375/360/320 px | Индексируется; 18+, loss-awareness, KYC/AML и help resources доступны. |

## Не удалось проверить

### Обязательные core-проверки

Все обязательные core-области проверены: raw HTTP/headers, `robots.txt`, rendered directives, homepage indexability, все обнаруженные страницы, desktop behavior, internal navigation/resources и CTA click/redirect behavior.

### Необязательные проверки

- Внешний structured-data validator не был доступен; JSON-LD распарсен локально, FAQ/Breadcrumb/Review сопоставлены с видимым контентом.
- Core Web Vitals, slow-network resilience и числовой CLS не измерялись; значения не предполагались.
- Полноценный keyboard focus/hover walkthrough не завершён. В source/rendered CSS присутствует `:focus-visible`, но поведение всех controls с клавиатуры отдельно не подтверждено, поэтому `VD-05` оставлен НЕ ПРОВЕРЕНО.

## Приоритет исправлений

1. Заменить `BONUS_AFFILIATE_URL` на корректный NZ/English destination и проверить все 26 ссылок (`AUD-001`).
2. Назначить корректные destinations шести legal/help-ссылкам footer или временно убрать вводящие в заблуждение labels (`AUD-002`).
3. После устранения двух существенных ошибок повторить финальный link/CTA acceptance. Сокращение длинных H1 (`AUD-003`) можно выполнить отдельной редакционной правкой.

## Финальный комментарий

Сайт проверен по опубликованной версии и исходникам. Проверены визуал, мобильные viewport’ы, структура, контент, SEO, ссылки, микроразметка, локализация и внутренняя согласованность. Внешний фактчекинг заявлений бренда не проводился. Статус: На доработку.

## Полная матрица правил

| Правило | Статус | Краткое доказательство |
|---|---|---|
| AV-01 | ПРОЙДЕНО | Главная открывается с HTTP 200 без redirect loop или interstitial. |
| AV-02 | ПРОЙДЕНО | Все 4 обнаруженные internal HTML pages открываются с 200. |
| AV-03 | ПРОЙДЕНО | Пустых critical sections, broken layout и runtime failures нет; 91/91 ресурсов доступны. |
| AV-04 | ПРОЙДЕНО | Visible template tokens, Lorem ipsum и AI-инструкции не найдены; TODO есть только в проектной документации и не публикуется. |
| AV-05 | ПРОЙДЕНО | Дублированных sections, unfinished components, test images и production notes на live нет. |
| AV-06 | ПРОЙДЕНО | Релевантные source routes соответствуют live; крупных raster-файлов свыше 400 КБ и accidental test assets не найдено. |
| VD-01 | ПРОЙДЕНО | На 1728/1280 px overlap, clipping и page overflow не обнаружены. |
| VD-02 | ПРОЙДЕНО | Cards, tables, lists, banners и CTA сохраняют единый spacing. |
| VD-03 | ПРОЙДЕНО | Headings, CTA и изображения не имеют видимого desktop cropping/distortion. |
| VD-04 | ПРОЙДЕНО | Критический текст читаем на поверхностях и hero overlays. |
| VD-05 | НЕ ПРОВЕРЕНО | Полный hover/keyboard focus walkthrough не завершён; наличие `:focus-visible` подтверждено. |
| VD-06 | ПРОЙДЕНО | Якорь `#verification-process` кликом остаётся ниже sticky header; `scroll-margin-top: 93px`. |
| VM-01 | ПРОЙДЕНО | Все 4 страницы проверены при 390, 375, 360 и 320 px. |
| VM-02 | ПРОЙДЕНО | Page-level horizontal overflow отсутствует во всех 16 page/width combinations. |
| VM-03 | ПРОЙДЕНО | H1/body остаются внутри viewport с боковыми отступами до 320 px. |
| VM-04 | ПРОЙДЕНО | Tables используют локальный `overflow-x:auto`; page overflow отсутствует. |
| VM-05 | ПРОЙДЕНО | CTA имеют высоту 44 px, читаемы и не выходят за mobile viewport. |
| VM-06 | ПРОЙДЕНО | Меню открывается/закрывается; Main, Bonuses, App проверены кликами. |
| VM-07 | ПРОЙДЕНО | Header, mobile section nav, footer и back-to-top не сталкиваются. |
| VM-08 | ПРОЙДЕНО | Hero всех 4 страниц визуально проверены при 390 px; важные субъекты и текст не потеряны. |
| ST-01 | ПРОЙДЕНО | Main содержит 20 meaningful blocks; internal pages содержательны для своих intents. |
| ST-02 | ПРОЙДЕНО | Live block order соответствует approved project structure/source templates. |
| ST-03 | ПРОЙДЕНО | Thin, empty или decorative-only critical sections не найдены. |
| ST-04 | ПРОЙДЕНО | На каждой из 4 страниц ровно один видимый H1. |
| ST-05 | ПРЕДУПРЕЖДЕНИЕ | AUD-003: H1 Main, Bonuses и App длиннее ориентира в 6 слов. |
| ST-06 | ПРОЙДЕНО | Main H1 не содержит `review` или его локализованный эквивалент. |
| ST-07 | ПРОЙДЕНО | Heading hierarchy логична; необоснованных jumps не выявлено. |
| ST-08 | ПРОЙДЕНО | H2/H3 уникальны и покрывают разные intents. |
| ST-09 | ПРОЙДЕНО | Key Facts, Pros/Cons, app, bonuses, payments, RG, support, FAQ и summary представлены. |
| ST-10 | НЕ ПРИМЕНИМО | Optional blocks не требуются approved structure отдельных pages. |
| CT-01 | ПРОЙДЕНО | Visible interface, tables, CTA и footer написаны на английском. |
| CT-02 | ПРОЙДЕНО | Обрезанная строка и 10 пунктуационных склеек исправлены; malformed localized terms не найдены. |
| CT-03 | ПРОЙДЕНО | Duplicate body paragraphs/filler не найдены; footer repeat является общим template. |
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
| LO-06 | ПРОЙДЕНО | Decimal/currency formats согласованы; rating опубликован как `4.4/5`. |
| LO-07 | ПРОЙДЕНО | CTA tone не содержит гарантий или чрезмерных обещаний. |
| LO-08 | ПРОЙДЕНО | Legal/RG copy информационен и не обещает legal availability. |
| SE-01 | ПРОЙДЕНО | Непустой Title есть на всех 4 pages. |
| SE-02 | ПРОЙДЕНО | Titles имеют длину 59, 53, 48 и 47 символов. |
| SE-03 | ПРОЙДЕНО | Topic/brand/GEO появляются рано; stuffing не выявлен. |
| SE-04 | ПРОЙДЕНО | Непустая Meta Description есть на всех 4 pages. |
| SE-05 | ПРОЙДЕНО | Descriptions имеют длину 147, 154, 141 и 159 символов. |
| SE-06 | ПРОЙДЕНО | Descriptions естественно отражают localized intent. |
| SE-07 | ПРОЙДЕНО | На каждой page один H1 и unique useful H2. |
| SE-08 | ПРОЙДЕНО | Keyword stuffing в metadata/headings/body/alt не найден. |
| IX-01 | ПРОЙДЕНО | Все 4 indexable pages имеют canonical. |
| IX-02 | ПРОЙДЕНО | Canonicals разрешаются в self final URLs. |
| IX-03 | ПРОЙДЕНО | Raw/rendered noindex и blocking robots directives отсутствуют. |
| IX-04 | ПРОЙДЕНО | Page-wide nofollow не найден. |
| IX-05 | ПРОЙДЕНО | Internal URL structure логична; redirects внутренних pages не выявлены. |
| IX-06 | ПРОЙДЕНО | Browser title и final URL совпадают с ожидаемыми pages. |
| IX-07 | ПРОЙДЕНО | robots.txt отвечает 200 с `Allow: /` и Sitemap; XML валиден и содержит 4 URL. |
| IX-08 | НЕ ПРИМЕНИМО | Сайт single-language/single-GEO; hreflang не обязателен. |
| IX-09 | ПРОЙДЕНО | `Allow: /` применяется к `*`, Googlebot и Bingbot на всех 4 URL. |
| IX-10 | ПРОЙДЕНО | X-Robots-Tag отсутствует на всех HTML responses. |
| IX-11 | ПРОЙДЕНО | Raw/rendered robots directives совпадают: директив нет. |
| IX-12 | ПРОЙДЕНО | Все 4 HTML pages имеют статус ИНДЕКСИРУЕТСЯ. |
| IX-13 | ПРОЙДЕНО | Все 4 intended indexable pages присутствуют в sitemap.xml. |
| IM-01 | ПРОЙДЕНО | 91/91 same-origin resources доступны; broken images не обнаружены. |
| IM-02 | ПРОЙДЕНО | Informative images имеют useful alt; decorative assets допускают empty alt. |
| IM-03 | ПРОЙДЕНО | `image1` и keyword-stuffed alt не найдены. |
| IM-04 | ПРОЙДЕНО | Основные content/banner/app raster assets используют WebP или оптимизированные Next.js variants; оставшиеся PNG оправданы размером/прозрачностью. |
| IM-05 | ПРОЙДЕНО | Accidental placeholder filenames не найдены; `hero`, `welcome` и другие имена семантичны в своих папках. |
| IM-06 | ПРОЙДЕНО | Raster-файлов свыше 400 КБ в source нет; крупнейшие live image variants около 176 КБ. |
| IM-07 | ПРОЙДЕНО | Favicon отвечает 200 и отображается в rendered page. |
| SC-01 | ПРОЙДЕНО | Все pages имеют og:title/description/image/url/type. |
| SC-02 | ПРОЙДЕНО | OG values соответствуют visible page, en_NZ, canonical и final URL. |
| SC-03 | ПРОЙДЕНО | JSON-LD blocks parse без syntax errors. |
| SC-04 | ПРОЙДЕНО | Main/App visible FAQ представлены FAQPage. |
| SC-05 | ПРОЙДЕНО | Visible breadcrumbs внутренних pages представлены BreadcrumbList. |
| SC-06 | ПРОЙДЕНО | Review/rating schema согласована с visible rating и testimonials. |
| SC-07 | ПРОЙДЕНО | Hidden или contradictory schema values не обнаружены. |
| SC-08 | НЕ ПРОВЕРЕНО | External structured-data validator недоступен; local parse выполнен. |
| SC-09 | ПРОЙДЕНО | Все visible FAQ Q/A совпадают со schema по смыслу и структуре. |
| LK-01 | ОШИБКА | AUD-002: шесть footer links ведут не к заявленным legal/help destinations. |
| LK-02 | ПРОЙДЕНО | Primary/bonus CTA кликабельны, chains завершаются stable URLs. |
| LK-03 | ПРОЙДЕНО | Non-GEO 4xx/5xx, loops, DNS failures и malformed targets не найдены. |
| LK-04 | ПРОЙДЕНО | Все anchor targets существуют; sticky-header offset проверен кликом. |
| LK-05 | ПРОЙДЕНО | Empty href, placeholder `#` и JavaScript no-op не найдены. |
| LK-06 | ОШИБКА | AUD-001/AUD-002: repeated labels/destinations не соответствуют NZ intent или label. |
| LK-07 | ПРОЙДЕНО | External brand judged по function/consistency, не по имени. |
| LK-08 | ПРОЙДЕНО | 91/91 same-origin resources проверены; cap 150 не достигнут. |
| TB-01 | ПРОЙДЕНО | Key Factors заполнен; `Established — No public information` опубликовано полностью. |
| TB-02 | ПРОЙДЕНО | Bonus tables имеют stable columns и согласованы с text по scope. |
| TB-03 | ПРОЙДЕНО | Payment/limits content согласован с NZD context. |
| TB-04 | ПРОЙДЕНО | Slots/live/tournament tables populated и имеют stable headers. |
| TB-05 | ПРОЙДЕНО | Expert table/summary согласованы с visible `4.4/5`. |
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
| FE-07 | ПРОЙДЕНО | Hero и expert summary используют единый rating `4.4/5`; schema не противоречит. |
| FT-01 | ОШИБКА | AUD-002: 18+, RG wording и copyright есть, но Terms/Privacy targets неверны. |
| FT-02 | ОШИБКА | AUD-002: Bonus Terms/About/Contact/FAQ labels ведут на generic landing. |
| FT-03 | ПРОЙДЕНО | На всех pages отображается `© 2026 National Casino New Zealand.` |
| FT-04 | ОШИБКА | AUD-002: footer layout mobile устойчив, но шесть destinations не соответствуют labels. |
| FT-05 | НЕ ПРИМЕНИМО | Required satellite interlinking не задано. |
| PF-01 | ПРОЙДЕНО | Primary content появляется без fatal delay на desktop/mobile. |
| PF-02 | ПРОЙДЕНО | Source не содержит raster-файлов свыше 400 КБ; live variants максимум около 176 КБ. |
| PF-03 | ПРОЙДЕНО | Scripts не ломают menu, anchors, CTA или tables; browser logs пусты. |
| PF-04 | ПРОЙДЕНО | Non-critical raster images преимущественно используют lazy loading. |
| PF-05 | ПРОЙДЕНО | H1/hero/body доступны сразу после load. |
| PF-06 | НЕ ПРОВЕРЕНО | Slow-network resilience и numerical CLS не измерялись. |
| PF-07 | НЕ ПРОВЕРЕНО | Core Web Vitals не измерялись и не предполагались. |
| PF-08 | ПРОЙДЕНО | HTML 54–189 КБ raw/8.9–35.6 КБ wire, 91 resources, известный суммарный payload 5.95 МБ. |
| AB-01 | ПРОЙДЕНО | Homepage доступна, blank state и redirect loop отсутствуют. |
| AB-02 | ПРОЙДЕНО | На 390/375/360/320 px page-level horizontal scroll отсутствует. |
| AB-03 | ПРОЙДЕНО | Mobile navigation открывается, закрывается и ведёт по destinations. |
| AB-04 | ПРОЙДЕНО | Primary CTA достигает stable `/en_nz`; bonus CTA также достигает stable URL. |
| AB-05 | ПРОЙДЕНО | Visible template tokens/placeholders отсутствуют. |
| AB-06 | ПРОЙДЕНО | Критический текст читаем; contrast blocker не обнаружен. |
| AB-07 | ПРОЙДЕНО | Empty critical sections отсутствуют. |
| AB-08 | ПРОЙДЕНО | Homepage имеет один visible H1. |
| AB-09 | ПРОЙДЕНО | Homepage имеет Meta Title и Meta Description. |
| AB-10 | ПРОЙДЕНО | Site-wide есть и `18+`, и meaningful RG/loss-awareness content. |
| AB-11 | ПРОЙДЕНО | Runtime failure, мешающий normal use, не обнаружен; browser logs пусты. |
| AB-12 | ПРОЙДЕНО | robots.txt опубликован; `Allow: /`, site-wide Disallow отсутствует. |
| AB-13 | ПРОЙДЕНО | Homepage/site-wide noindex отсутствует в raw/rendered/header signals. |
| AB-14 | ПРОЙДЕНО | Mandatory homepage indexability полностью проверена. |
