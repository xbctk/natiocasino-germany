# Аудит брендового сателлита

## Паспорт проверки

- URL: https://natiocasino.vercel.app/
- Финальный origin после редиректов: https://natiocasino.vercel.app
- GEO: Новая Зеландия
- Язык: английский
- Исходники: `/Users/aleksandrnosko/Documents/Проекты/Natiocasino`
- Дата: 12 августа 2026 года
- Допущения: GEO и язык заданы пользователем; внешняя достоверность лицензии, бонусов, платежей, приложения и иных заявлений бренда не проверялась. Папка проекта использована как дополнительный источник, а опубликованная версия — как основной объект приёмки.

## Итог

**Статус сайта:** На доработку

**Полнота проверки:** Полная

Блокирующих ошибок и запрета индексации не обнаружено: все 4 опубликованные HTML-страницы отвечают `200`, допускают обход и индексацию, имеют self-canonical, а raw- и rendered-директивы не содержат `noindex`. Приёмку не позволяют завершить три существенные системные ошибки: 16 региональных ссылок footer возвращают `404`, все ссылки на общий bonus/promotions affiliate URL ведут на польскую локализацию, а в опубликованном контенте остались обрезанная строка и серия пунктуационных склеек.

## Охват

- Найдено внутренних HTML-страниц: 4; дополнительно обнаружено 16 внутренних URL footer, отвечающих `404` и поэтому не являющихся HTML-страницами сайта.
- Проверено статически: 4 HTML-страницы, 20 уникальных внутренних URL, `robots.txt`, `sitemap.xml`, 90 уникальных same-origin ресурсов и все уникальные внешние ссылки footer/CTA.
- Проверено в браузере: все 4 HTML-страницы на desktop; главная дополнительно осмотрена при 1728 px, остальные страницы и общий шаблон — при 1280 px. Проверены rendered metadata, консоль, меню, якорные цели, таблицы и CTA.
- Проверено по доступным мобильным состояниям: все 4 страницы при 390, 375, 360 и 320 px; открытие/закрытие меню и переходы Main → Bonuses → App → Main; отсутствие page-level overflow и локальный scroll таблиц.
- Пропущено или заблокировано: внешняя валидация structured data, лабораторные Core Web Vitals, slow-network и измерение CLS. Захват скриншотов длинных внутренних страниц завершался тайм-аутом, но rendered DOM, геометрия, интерактивность и console logs были доступны и проверены.
- Использована выборка общих шаблонов: общий header/sidebar/footer проверен на каждой странице; page-specific metadata, заголовки, ссылки, таблицы и контент проверены без выборки.
- Лимит обхода: 100 HTML-страниц; лимит не достигнут, исключений по лимиту нет.

## Блокирующие ошибки

Не обнаружены.

## Существенные ошибки

1. `AUD-001`: 16 региональных ссылок общего footer ведут на несуществующие внутренние маршруты и возвращают `404` на всех страницах.
2. `AUD-002`: общий bonus/promotions URL используется 26 раз на 4 страницах и завершает редирект на `https://natiocazino.com/pl/promotions?...`, хотя сайт предназначен для английского языка и Новой Зеландии.
3. `AUD-003`: на главной в Key Factors опубликовано `Established — No public inco`; ещё в 10 местах на Main, Bonuses и App отсутствует пробел между предложениями, например `Program.Players`, `NZ$500.After` и `Internet.The`.

## Внутренние несоответствия

- `AUD-002` — несоответствие CTA локализации: обычный affiliate URL (`lpid=1172`) подтверждён до стабильного `https://natiocazino.com/en_nz?...`, а bonus/promotions URL (`lpid=522`) — до польского `/pl/promotions`. Исправление должно установить единый NZ/English destination для всех повторяющихся bonus CTA.
- `AUD-006` — неоднозначное представление рейтинга на главной: Hero показывает `Overall Rating 96/100`, экспертный блок — `Expert Rating:4,4/5`, таблица использует десятичную точку (`4.7/5`, `4.5/5` и т. п.). Значения могут относиться к разным методикам, поэтому это рекомендация: пояснить различие шкал и унифицировать английский десятичный формат.
- GEO, HTML `lang="en-NZ"`, `og:locale="en_NZ"`, NZD, PWA-статус, возраст `18+`, бонусные значения, минимальные депозиты и поддержка `24/7` между страницами не противоречат друг другу. Варианты NZ$10/NZ$35/NZ$500 явно относятся к разным сценариям и не являются конфликтом.

## Индексируемость

| URL | HTTP | robots.txt | Meta robots | X-Robots-Tag | Canonical | Sitemap | Итог |
|---|---|---|---|---|---|---|---|
| https://natiocasino.vercel.app/ | `200`, финальный URL совпадает | `404`: правил нет, обход не запрещён для `*`, Googlebot и Bingbot | raw: отсутствует; rendered: отсутствует | отсутствует | raw `https://natiocasino.vercel.app`; resolved self `https://natiocasino.vercel.app/` | отсутствует | ИНДЕКСИРУЕТСЯ |
| https://natiocasino.vercel.app/bonuses | `200`, финальный URL совпадает | правил нет, обход не запрещён | raw: отсутствует; rendered: отсутствует | отсутствует | self | отсутствует | ИНДЕКСИРУЕТСЯ |
| https://natiocasino.vercel.app/app | `200`, финальный URL совпадает | правил нет, обход не запрещён | raw: отсутствует; rendered: отсутствует | отсутствует | self | отсутствует | ИНДЕКСИРУЕТСЯ |
| https://natiocasino.vercel.app/responsible-gaming | `200`, финальный URL совпадает | правил нет, обход не запрещён | raw: отсутствует; rendered: отсутствует | отсутствует | self | отсутствует | ИНДЕКСИРУЕТСЯ |

`hreflang` отсутствует и для одноязычного single-GEO сайта отмечен как НЕ ПРИМЕНИМО. `og:url` совпадает с canonical; на главной raw OG URL без завершающего `/`, но resolved URL совпадает с финальным.

## Мелкие замечания

- `AUD-004`: favicon отсутствует — в HTML нет объявления, а `https://natiocasino.vercel.app/favicon.ico` отвечает `404`.
- `AUD-005`: общий footer содержит `18+`, Responsible Gaming, Terms и Privacy, но не содержит copyright и текущий год.

## Рекомендации

- `AUD-006`: пояснить различие `96/100` и `4,4/5`, использовать английскую десятичную точку и добавить пробел в `Expert Rating: 4.4/5`.
- `AUD-007`: опубликовать `sitemap.xml` со всеми 4 индексируемыми страницами; при желании добавить явный `robots.txt`. Отсутствие `robots.txt` сейчас не блокирует обход.
- `AUD-008`: сократить Title на Bonuses (67), App (65) и Responsible Gaming (73 символа); App Description имеет 161 символ вместо рекомендованных 140–160. Длинные H1 можно сделать короче без потери темы.
- `AUD-009`: добавить согласованные `FAQPage` для видимых FAQ на Main и App и `BreadcrumbList` для страниц с видимой breadcrumb-навигацией; затем проверить внешним валидатором.
- `AUD-010`: оптимизировать наиболее тяжёлые PNG и стратегию кэширования изображений. Среди проверенных ресурсов есть варианты около 500–669 КБ; видимого торможения не наблюдалось, поэтому это не ошибка приёмки.

## Результаты по категориям

| Категория | ПРОЙДЕНО | ОШИБКА | ПРЕДУПРЕЖДЕНИЕ | НЕ ПРИМЕНИМО | НЕ ПРОВЕРЕНО | Комментарий |
|---|---:|---:|---:|---:|---:|---|
| Доступность и production readiness | 4 | 2 | 0 | 0 | 0 | Сайт доступен; ошибки — broken footer routes и незавершённая редактура. |
| Desktop-визуал | 6 | 0 | 0 | 0 | 0 | Общий desktop-шаблон устойчив при 1728/1280 px. |
| Mobile/responsive | 7 | 0 | 0 | 0 | 1 | Overflow и меню проверены; точная оценка кадрирования всех mobile-изображений не выполнена. |
| Структура и интент | 8 | 0 | 1 | 1 | 0 | Структура содержательная; длинные H1 — рекомендация. |
| Текст и редактура | 7 | 1 | 0 | 0 | 0 | Серия опубликованных редакционных дефектов. |
| GEO и локализация | 6 | 1 | 1 | 0 | 0 | Польский bonus destination и неоднородный формат рейтинга. |
| SEO metadata | 6 | 0 | 2 | 0 | 0 | Title/Description присутствуют; часть длиннее ориентира. |
| Индексация и URL-сигналы | 9 | 1 | 2 | 1 | 0 | Индексация разрешена; отсутствует sitemap, URL footer нелогичны/сломаны. |
| Изображения и favicon | 5 | 1 | 1 | 0 | 0 | Все ресурсы доступны; favicon отсутствует, вес части PNG можно снизить. |
| Open Graph и schema | 4 | 0 | 3 | 1 | 1 | OG корректен; FAQ/Breadcrumb schema не опубликована; внешний валидатор не запускался. |
| Ссылки, навигация и CTA | 5 | 3 | 0 | 0 | 0 | CTA технически кликабельны, но footer 404 и bonus destination неверно локализован. |
| Таблицы | 6 | 1 | 0 | 0 | 0 | Таблицы адаптивны; Key Facts содержит обрезанную строку. |
| Responsible Gambling | 6 | 0 | 0 | 0 | 0 | Есть 18+, loss-awareness, отдельная страница и локальные help-ссылки. |
| FAQ и экспертный блок | 4 | 0 | 2 | 1 | 0 | Контент FAQ согласован; schema отсутствует, количество App FAQ немного выше ориентира. |
| Footer | 1 | 3 | 0 | 1 | 0 | Нет copyright/year; региональные ссылки сломаны. |
| Производительность | 5 | 0 | 1 | 0 | 2 | Загрузка рабочая; лабораторные CWV/CLS не измерялись. |
| Блокеры | 14 | 0 | 0 | 0 | 0 | Ни один критерий блокирующей ошибки не сработал. |

## Детальные находки

| ID | Важность | Статус | Страница | Элемент/файл | Проблема | Доказательство | Что исправить |
|---|---|---|---|---|---|---|---|
| AUD-001 | Существенная | ОШИБКА | Все 4 страницы | Footer `Choose region`; `components/Footer.tsx:5-21` | 16 региональных ссылок ведут на отсутствующие internal routes. | `/de`, `/ie`, `/it`, `/se`, `/si`, `/pl`, `/au`, `/ca`, `/cz`, `/gr`, `/ch`, `/at`, `/hu`, `/ar`, `/pt`, `/fi` возвращают `404`. | Удалить ссылки до публикации локалей либо направить каждую на реально существующий стабильный URL. |
| AUD-002 | Существенная | ОШИБКА | Все 4 страницы; подтверждено кликом на https://natiocasino.vercel.app/bonuses | `Get bonus`, `Promotions`; `components/affiliateLinks.ts:1` | Bonus/promotions CTA не соответствует GEO и языку. | `lpid=522` (26 ссылок) завершает цепочку на `https://natiocazino.com/pl/promotions?...`; обычный `lpid=1172` ведёт на `/en_nz`. | Получить корректный NZ affiliate destination и заменить единый `BONUS_AFFILIATE_URL`; повторно проверить все CTA. |
| AUD-003 | Существенная | ОШИБКА | https://natiocasino.vercel.app/, /bonuses, /app | Key Factors и body copy; `components/MainContent.tsx:110,132,134,196,377,450,557`, `components/BonusesContent.tsx:165,187,218`, `components/AppContent.tsx:352` | В production осталась обрезанная строка и 10 склеек предложений. | Видимый текст `Established — No public inco`; примеры `Program.Players`, `account.Slots`, `deposit.The`, `NZ$500.After`, `Promotions.Some`, `Internet.The`. | Сверить утверждённый DOCX, восстановить полную строку и пробелы без переписывания смысла. |
| AUD-004 | Мелкая | ОШИБКА | Все 4 страницы | `<head>`, `/favicon.ico` | Нет рабочего favicon. | Ссылка favicon в HTML отсутствует; стандартный URL отвечает `404`. | Добавить утверждённый брендовый icon/favicon через Next metadata и проверить ответ `200`. |
| AUD-005 | Мелкая | ОШИБКА | Все 4 страницы | Общий footer; `components/Footer.tsx` | Нет copyright и года. | Footer заканчивается legal copy, `18+` и validator; строки copyright нет. | Добавить согласованную строку с текущим годом и идентичностью сайта. |
| AUD-006 | Рекомендация | ПРЕДУПРЕЖДЕНИЕ | https://natiocasino.vercel.app/ | Hero и National Casino Grade | Две рейтинговые шкалы не объяснены; десятичные форматы смешаны. | `Overall Rating 96/100`, `Expert Rating:4,4/5`, строки таблицы `4.7/5`, `4.5/5`. | Пояснить методики и унифицировать формат `4.4/5`. |
| AUD-007 | Рекомендация | ПРЕДУПРЕЖДЕНИЕ | Все 4 страницы | `/sitemap.xml`, `/robots.txt` | Sitemap отсутствует; robots rules явно не опубликованы. | Оба URL отвечают `404`; это не запрещает crawl, но страницы не перечислены в sitemap. | Опубликовать sitemap; при необходимости добавить явный robots.txt. |
| AUD-008 | Рекомендация | ПРЕДУПРЕЖДЕНИЕ | /bonuses, /app, /responsible-gaming | Title, Description, H1 | Метаданные и H1 частично длиннее редакционных ориентиров. | Title: 67/65/73; App Description: 161; H1 содержат больше 6 слов. | Сократить естественно, сохранив бренд, GEO и интент. |
| AUD-009 | Рекомендация | ПРЕДУПРЕЖДЕНИЕ | /, /app и страницы с breadcrumbs | JSON-LD | Видимые FAQ/breadcrumbs не представлены schema. | Main FAQ: 8 вопросов; App FAQ: 9; `jsonld_types` пуст на всех страницах. | Добавить schema, точно совпадающую с видимым контентом, и провалидировать. |
| AUD-010 | Рекомендация | ПРЕДУПРЕЖДЕНИЕ | Все страницы | Raster assets и cache headers | Часть PNG тяжелее необходимого; оптимизированные image responses имеют `max-age=0`. | Крупные проверенные варианты: 500–669 КБ; CSS/JS immutable, изображения требуют revalidation. | Рассмотреть WebP/AVIF, корректные responsive sizes и более эффективное кэширование. |

## Покрытие страниц

| URL | Тип/шаблон | Static | Desktop | Mobile | Основной результат |
|---|---|---|---|---|---|
| https://natiocasino.vercel.app/ | Главная, длинный editorial template | ПРОЙДЕНО | ПРОЙДЕНО, 1728 и 1280 px | ПРОЙДЕНО, 390/375/360/320 px | Индексируется; редакционные дефекты в Key Facts/body; рейтинг требует пояснения. |
| https://natiocasino.vercel.app/bonuses | Bonuses | ПРОЙДЕНО | ПРОЙДЕНО, 1280 px | ПРОЙДЕНО, 390/375/360/320 px | Индексируется; bonus CTA ведёт на польскую локализацию; есть редакционные склейки. |
| https://natiocasino.vercel.app/app | App/PWA | ПРОЙДЕНО | ПРОЙДЕНО, 1280 px | ПРОЙДЕНО, 390/375/360/320 px | Индексируется; PWA-описание внутренне согласовано; одна редакционная склейка. |
| https://natiocasino.vercel.app/responsible-gaming | Responsible Gaming | ПРОЙДЕНО | ПРОЙДЕНО, 1280 px | ПРОЙДЕНО, 390/375/360/320 px | Индексируется; 18+, help-ссылки и loss-awareness доступны. |
| 16 региональных URL footer | Несуществующие маршруты | ОШИБКА, `404` | ОШИБКА | ОШИБКА | Не являются опубликованными HTML-страницами; ссылки должны быть исправлены или удалены. |

## Не удалось проверить

### Обязательные core-проверки

Все обязательные core-области проверены: raw HTTP/headers, `robots.txt`, rendered directives, homepage indexability, все обнаруженные HTML-страницы, desktop behavior, internal navigation/resources и CTA redirect behavior.

### Необязательные проверки

- Внешний structured-data validator не был доступен; локальный парсинг подтвердил отсутствие JSON-LD и отсутствие syntax errors в несуществующей разметке.
- Core Web Vitals, throttled slow-network и числовой CLS не измерялись; выводов о CWV не делалось.
- Точные screenshots длинных внутренних страниц не сохранились из-за тайм-аута browser capture. Rendered DOM, viewport geometry, console, links, tables and interactive states были доступны и проверены; это не затронуло обязательную полноту.
- Source analyzer рекурсивно увидел generated `.next` и `node_modules`; их служебные HTML-файлы исключены как не относящиеся к опубликованным маршрутам. Релевантные application sources и generated route HTML проверены отдельно.

## Приоритет исправлений

1. Исправить `BONUS_AFFILIATE_URL`, чтобы все bonus/promotions CTA завершались на стабильной English/NZ странице.
2. Удалить или исправить 16 региональных ссылок footer, возвращающих `404`.
3. Восстановить `No public inco` по утверждённому DOCX и исправить 10 склеек предложений.
4. Добавить favicon и copyright/year.
5. Опубликовать sitemap, затем доработать FAQ/Breadcrumb schema, метаданные и оптимизацию изображений.

## Финальный комментарий

Сайт проверен по опубликованной версии и локальным исходникам. Проверены визуал, доступные мобильные viewport’ы, структура, контент, SEO, ссылки, микроразметка, локализация и внутренняя согласованность. Внешний фактчекинг заявлений бренда не проводился. Статус: На доработку.

## Полная матрица правил

| Правило | Статус | Краткое доказательство |
|---|---|---|
| AV-01 | ПРОЙДЕНО | Главная открывается с HTTP 200 без redirect loop или interstitial. |
| AV-02 | ОШИБКА | AUD-001: 16 обнаруженных внутренних URL footer возвращают 404; 4 HTML-страницы открываются с 200. |
| AV-03 | ПРОЙДЕНО | Пустых критических секций, broken layout и material runtime failures не обнаружено; 90/90 ресурсов доступны. |
| AV-04 | ПРОЙДЕНО | `[Brand]`, `[Country]`, Lorem ipsum, TODO, FIXME и другие шаблонные токены не найдены. |
| AV-05 | ОШИБКА | AUD-003: `No public inco` и 10 склеек предложений показывают незавершённую редактуру. |
| AV-06 | ПРОЙДЕНО | Релевантные source routes совпадают с live; `.next` и `node_modules` отделены как generated/dependency content. |
| VD-01 | ПРОЙДЕНО | На 1728/1280 px не обнаружены overlap, clipping или page-level overflow. |
| VD-02 | ПРОЙДЕНО | Карточки, таблицы, списки, banners и CTA сохраняют единый spacing. |
| VD-03 | ПРОЙДЕНО | Заголовки и CTA не обрезаются; loaded images сохраняют рабочие размеры. |
| VD-04 | ПРОЙДЕНО | Критический текст читаем на тёмных поверхностях и hero overlay. |
| VD-05 | ПРОЙДЕНО | Общие hover/focus-visible стили присутствуют; mobile menu и controls работают как native interactive elements. |
| VD-06 | ПРОЙДЕНО | Все 43 уникальные anchor targets существуют; `scroll-margin-top: 93px` учитывает header 73px. |
| VM-01 | ПРОЙДЕНО | Все 4 страницы проверены при 390, 375, 360 и 320 px. |
| VM-02 | ПРОЙДЕНО | `documentElement.scrollWidth` равен viewport на всех 16 page/width combinations. |
| VM-03 | ПРОЙДЕНО | H1 и body остаются внутри viewport с боковыми отступами до 320 px. |
| VM-04 | ПРОЙДЕНО | Таблицы имеют собственный `overflow-x:auto`; page overflow отсутствует. |
| VM-05 | ПРОЙДЕНО | CTA остаются видимыми и не выходят за viewport. |
| VM-06 | ПРОЙДЕНО | Меню открывается/закрывается; Main, Bonuses и App проверены кликами. |
| VM-07 | ПРОЙДЕНО | Header, mobile section nav и back-to-top не выходят за viewport и не сталкиваются. |
| VM-08 | НЕ ПРОВЕРЕНО | Точный визуальный crop всех изображений не подтверждён screenshots из-за тайм-аута capture. |
| ST-01 | ПРОЙДЕНО | Main имеет 20 содержательных блоков; внутренние страницы короче, но соответствуют своему интенту. |
| ST-02 | ПРОЙДЕНО | Live-порядок блоков соответствует реализованным source templates и утверждённой структуре проекта. |
| ST-03 | ПРОЙДЕНО | Thin, пустых или decorative-only критических секций не найдено. |
| ST-04 | ПРОЙДЕНО | На каждой из 4 страниц ровно один видимый H1. |
| ST-05 | ПРЕДУПРЕЖДЕНИЕ | AUD-008: H1 длиннее ориентира в 6 слов, но остаются естественными и читаемыми. |
| ST-06 | ПРОЙДЕНО | Main H1 не содержит `review` или его локализованный эквивалент. |
| ST-07 | ПРОЙДЕНО | Иерархия H1/H2/H3/H4 логична; необоснованных jumps не выявлено. |
| ST-08 | ПРОЙДЕНО | H2/H3 уникальны и покрывают разные пользовательские интенты. |
| ST-09 | ПРОЙДЕНО | Key Facts, Pros/Cons, registration, app, bonuses, payments, RG, support, FAQ, summary и footer представлены по сайту. |
| ST-10 | НЕ ПРИМЕНИМО | Отсутствующие optional blocks не требуются утверждённой структурой отдельных страниц. |
| CT-01 | ПРОЙДЕНО | Видимый интерфейс, таблицы, CTA и footer написаны на английском. |
| CT-02 | ОШИБКА | AUD-003: обрезанная фраза и 10 мест без пробела между предложениями. |
| CT-03 | ПРОЙДЕНО | Нежелательных повторов body paragraphs или filler не найдено; повтор footer является общим шаблоном. |
| CT-04 | ПРОЙДЕНО | Обещаний guaranteed wins, guaranteed payouts, risk-free income не найдено. |
| CT-05 | ПРОЙДЕНО | Есть `18+`, отдельная RG page и `Gambling can be addictive. Play responsibly.` |
| CT-06 | ПРОЙДЕНО | Тон преимущественно информационный, условия и риски раскрыты. |
| CT-07 | ПРОЙДЕНО | Заявления оценивались только на внутреннюю согласованность, без внешнего fact-check. |
| CT-08 | ПРОЙДЕНО | Имена провайдеров и других брендов не использовались как самостоятельные ошибки. |
| LO-01 | ОШИБКА | AUD-002: bonus CTA для NZ/English сайта завершает редирект на польском `/pl/promotions`. |
| LO-02 | ПРОЙДЕНО | Меню, buttons, tables и footer live-site остаются английскими. |
| LO-03 | ПРОЙДЕНО | В доступном rendered state очевидной языковой/GEO подмены изображений не обнаружено. |
| LO-04 | ПРОЙДЕНО | NZD является локальным контекстом; прочие валюты явно описаны как поддерживаемые. |
| LO-05 | ПРОЙДЕНО | Единственной противоречащей локальной валюты нет; NZD используется последовательно. |
| LO-06 | ПРЕДУПРЕЖДЕНИЕ | AUD-006: `4,4/5` смешано с `4.7/5`; смысл не сломан, но формат не унифицирован. |
| LO-07 | ПРОЙДЕНО | CTA `Join now`/`Get bonus` не содержат гарантий или чрезмерных обещаний. |
| LO-08 | ПРОЙДЕНО | Legal/RG copy информационен и не обещает легальную доступность. |
| SE-01 | ПРОЙДЕНО | Непустой Title есть на всех 4 страницах. |
| SE-02 | ПРЕДУПРЕЖДЕНИЕ | AUD-008: Title 67/65/73 символа на трёх страницах; главная — 59. |
| SE-03 | ПРОЙДЕНО | Topic/brand/GEO появляются рано; keyword stuffing не выявлен. |
| SE-04 | ПРОЙДЕНО | Непустая Meta Description есть на всех 4 страницах. |
| SE-05 | ПРЕДУПРЕЖДЕНИЕ | AUD-008: App Description — 161 символ; остальные 147/154/159. |
| SE-06 | ПРОЙДЕНО | Descriptions естественно описывают локальный интент и содержание. |
| SE-07 | ПРОЙДЕНО | На каждой странице один H1 и уникальные полезные H2. |
| SE-08 | ПРОЙДЕНО | Очевидного keyword stuffing в metadata, headings, body или alt нет. |
| IX-01 | ПРОЙДЕНО | Все 4 indexable pages имеют canonical. |
| IX-02 | ПРОЙДЕНО | Все canonical разрешаются в self URL; home raw без slash разрешается в финальный URL со slash. |
| IX-03 | ПРОЙДЕНО | Raw HTML и rendered DOM не содержат noindex; crawl не запрещён. |
| IX-04 | ПРОЙДЕНО | Page-wide nofollow не найден. |
| IX-05 | ОШИБКА | AUD-001: 16 логически внутренних locale URLs footer возвращают 404. |
| IX-06 | ПРОЙДЕНО | Browser title и final URL совпадают с ожидаемыми страницами. |
| IX-07 | ПРЕДУПРЕЖДЕНИЕ | AUD-007: sitemap.xml отсутствует; robots.txt 404 означает отсутствие правил, а не crawl block. |
| IX-08 | НЕ ПРИМЕНИМО | Сайт одноязычный и single-GEO; hreflang не обязателен. |
| IX-09 | ПРОЙДЕНО | robots.txt отвечает 404: запрещающих правил для `*`, Googlebot и Bingbot нет. |
| IX-10 | ПРОЙДЕНО | X-Robots-Tag отсутствует на всех HTML responses. |
| IX-11 | ПРОЙДЕНО | Raw и rendered robots directives совпадают: директив нет. |
| IX-12 | ПРОЙДЕНО | Все 4 HTML-страницы имеют эффективный статус ИНДЕКСИРУЕТСЯ. |
| IX-13 | ПРЕДУПРЕЖДЕНИЕ | AUD-007: sitemap отсутствует, поэтому indexable pages в нём не перечислены. |
| IM-01 | ПРОЙДЕНО | 90/90 unique same-origin resources отвечают успешно; material broken images не подтверждены. |
| IM-02 | ПРОЙДЕНО | Informative images имеют осмысленные alt; decorative assets используют пустой alt. |
| IM-03 | ПРОЙДЕНО | Alt вида `image1` или keyword-stuffed alt не найден. |
| IM-04 | ПРЕДУПРЕЖДЕНИЕ | AUD-010: часть крупных raster assets остаётся PNG; современный формат может уменьшить payload. |
| IM-05 | ПРОЙДЕНО | Имена контентных файлов описательны; служебные `cards.png`/`coin-1.png` не являются production placeholders. |
| IM-06 | ПРОЙДЕНО | Размеры ресурсов получены; максимум проверенных image variants около 669 КБ, видимого сбоя загрузки нет. |
| IM-07 | ОШИБКА | AUD-004: favicon declaration отсутствует, `/favicon.ico` возвращает 404. |
| SC-01 | ПРОЙДЕНО | Все 4 страницы имеют og:title, og:description, og:image, og:url и og:type. |
| SC-02 | ПРОЙДЕНО | OG values соответствуют visible page, en_NZ, canonical и final URL. |
| SC-03 | ПРОЙДЕНО | JSON-LD blocks отсутствуют; syntax errors не обнаружены. |
| SC-04 | ПРЕДУПРЕЖДЕНИЕ | AUD-009: видимый FAQ есть на Main и App, FAQPage не опубликован. |
| SC-05 | ПРЕДУПРЕЖДЕНИЕ | AUD-009: visible breadcrumbs на внутренних pages не представлены BreadcrumbList. |
| SC-06 | НЕ ПРИМЕНИМО | Rating/review schema отсутствует, требовать её только из-за editorial score нельзя. |
| SC-07 | ПРОЙДЕНО | Hidden или противоречащих schema values нет, поскольку JSON-LD отсутствует. |
| SC-08 | НЕ ПРОВЕРЕНО | Внешний structured-data validator недоступен; локальные JSON-LD checks выполнены. |
| SC-09 | ПРЕДУПРЕЖДЕНИЕ | AUD-009: visible FAQ questions/answers не представлены FAQPage/Question schema. |
| LK-01 | ОШИБКА | AUD-001: 16 footer region links возвращают 404; остальные nav/footer links проверены. |
| LK-02 | ПРОЙДЕНО | Primary и bonus CTA кликабельны, targets валидны, redirect chains завершаются стабильными URLs. |
| LK-03 | ОШИБКА | AUD-001: internal locale links дают non-GEO 404; loops/DNS failures CTA не обнаружены. |
| LK-04 | ПРОЙДЕНО | Все 43 уникальные hash targets существуют; CSS учитывает sticky header. |
| LK-05 | ПРОЙДЕНО | Empty href, placeholder `#` и JavaScript no-op не найдены. |
| LK-06 | ОШИБКА | AUD-002: повторяющиеся bonus/promotions labels ведут на польский destination вместо English/NZ. |
| LK-07 | ПРОЙДЕНО | External brand destination оценивался по функции и согласованности, не по имени бренда. |
| LK-08 | ПРОЙДЕНО | 90/90 same-origin images/styles/scripts/favicon candidates/OG images проверены; cap 150 не достигнут. |
| TB-01 | ОШИБКА | AUD-003: Key Factors row `Established — No public inco` является незавершённым значением. |
| TB-02 | ПРОЙДЕНО | Bonus tables стабильны и не противоречат bonus text в сопоставимых scope. |
| TB-03 | ПРОЙДЕНО | Payment/limits content согласован с NZD context; внешняя истинность не проверялась. |
| TB-04 | ПРОЙДЕНО | Slots/live/tournament tables имеют стабильные headers и populated rows. |
| TB-05 | ПРОЙДЕНО | Expert table average соответствует видимому `4.4/5` после нормализации decimal separator. |
| TB-06 | ПРОЙДЕНО | На mobile все tables ограничены собственным horizontal scroll container. |
| TB-07 | ПРОЙДЕНО | Intentional omissions не используются противоречиво; пустых случайных строк нет. |
| RG-01 | ПРОЙДЕНО | Есть отдельная содержательная `/responsible-gaming` page. |
| RG-02 | ПРОЙДЕНО | Видимы `18+`, footer warning и meaningful loss-awareness/self-exclusion wording. |
| RG-03 | ПРОЙДЕНО | KYC/AML и security language представлены в утверждённой структуре. |
| RG-04 | ПРОЙДЕНО | Guarantees of safety, payout, profit или no-risk не найдены. |
| RG-05 | ПРОЙДЕНО | Есть рекомендации остановить deposits, использовать limits и обратиться за независимой помощью. |
| RG-06 | ПРОЙДЕНО | Возраст 18+, limits и self-exclusion wording согласованы между страницами/footer. |
| FE-01 | ПРЕДУПРЕЖДЕНИЕ | Main имеет 8 FAQ, App — 9; последнее слегка выше ориентира 4–8, но вопросы полезны. |
| FE-02 | ПРОЙДЕНО | FAQ questions покрывают реальные deposit, payments, KYC, app и gameplay intents без механического повтора. |
| FE-03 | ПРОЙДЕНО | Ответы читаемы и достаточно содержательны; длина использована как guidance, не hard gate. |
| FE-04 | ПРОЙДЕНО | FAQ не противоречит body/tables в сопоставимых scope. |
| FE-05 | ПРЕДУПРЕЖДЕНИЕ | AUD-009: FAQ schema отсутствует, поэтому visible/schema comparison завершён предупреждением. |
| FE-06 | НЕ ПРИМЕНИМО | Автор/роль/update date не закреплены как обязательные для текущего approved expert template. |
| FE-07 | ПРОЙДЕНО | Expert `4.4/5` соответствует среднему таблицы; rating schema отсутствует. |
| FT-01 | ОШИБКА | AUD-005: footer содержит 18+, RG, Terms и Privacy, но copyright отсутствует. |
| FT-02 | ПРОЙДЕНО | Bonus Terms, About, Contact и FAQ присутствуют и отвечают 200. |
| FT-03 | ОШИБКА | AUD-005: current copyright year и copyright identity отсутствуют. |
| FT-04 | ОШИБКА | AUD-001: legal/help links работают, но 16 region links дают 404; mobile layout не переполняется. |
| FT-05 | НЕ ПРИМЕНИМО | Обязательное satellite interlinking пользователем/ТЗ не задано. |
| PF-01 | ПРОЙДЕНО | Primary content появляется без fatal delay на desktop и доступных mobile viewports. |
| PF-02 | ПРЕДУПРЕЖДЕНИЕ | AUD-010: несколько PNG variants имеют 500–669 КБ; наблюдаемого functional impact нет. |
| PF-03 | ПРОЙДЕНО | Scripts не ломают menu, internal routes, CTA или tables; console errors отсутствуют. |
| PF-04 | ПРОЙДЕНО | Non-critical raster images в основном используют lazy loading. |
| PF-05 | ПРОЙДЕНО | H1/hero/body доступны сразу после load; blank critical state не наблюдался. |
| PF-06 | НЕ ПРОВЕРЕНО | Slow-network resilience и числовой CLS не измерялись. |
| PF-07 | НЕ ПРОВЕРЕНО | Core Web Vitals не измерялись; значения не предполагались. |
| PF-08 | ПРОЙДЕНО | Зафиксированы HTML 61–185 КБ raw/9.6–35.5 КБ gzip, 90 resources, cache headers и размеры assets. |
| AB-01 | ПРОЙДЕНО | Homepage доступна и не попадает в redirect loop. |
| AB-02 | ПРОЙДЕНО | На 390/375/360/320 px page-level horizontal scroll отсутствует. |
| AB-03 | ПРОЙДЕНО | Mobile navigation открывается, закрывается и переводит по всем destination pages. |
| AB-04 | ПРОЙДЕНО | Primary CTA достигает стабильного `/en_nz`; bonus CTA также технически достигает стабильного URL, хотя локализация ошибочна. |
| AB-05 | ПРОЙДЕНО | Явных template tokens/placeholders нет; `No public inco` классифицирован как substantive editorial defect, не blocker-token. |
| AB-06 | ПРОЙДЕНО | Критический текст читаем; contrast blocker не обнаружен. |
| AB-07 | ПРОЙДЕНО | Пустых критических секций нет. |
| AB-08 | ПРОЙДЕНО | Homepage имеет один видимый H1. |
| AB-09 | ПРОЙДЕНО | Homepage имеет Meta Title и Meta Description. |
| AB-10 | ПРОЙДЕНО | Site-wide есть и 18+, и meaningful Responsible Gambling/loss-awareness content. |
| AB-11 | ПРОЙДЕНО | Runtime failure, мешающий normal use, не обнаружен; browser console без errors/warnings. |
| AB-12 | ПРОЙДЕНО | Site-wide `Disallow: /` отсутствует; robots.txt не опубликован. |
| AB-13 | ПРОЙДЕНО | Homepage/site-wide noindex отсутствует в raw HTML, rendered DOM и headers. |
| AB-14 | ПРОЙДЕНО | Mandatory homepage indexability полностью проверена. |
