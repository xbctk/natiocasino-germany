# Разработка и публикация

Публичный сайт: [https://natiocasino.vercel.app/](https://natiocasino.vercel.app/)

## Локальный запуск

Проект использует pnpm 11.9.0, закреплённый в `package.json`.

```bash
pnpm install
pnpm dev
```

После запуска сайт доступен по адресу [http://localhost:3000](http://localhost:3000).

## Проверка перед публикацией

```bash
pnpm lint
pnpm build
```

Не публикуйте изменения, пока обе команды не завершатся успешно.

`pnpm build` создаёт полностью статический сайт в папке `out`: главную `index.html` и отдельные HTML-файлы остальных стран. Для его публикации Node.js и `node_modules` не нужны. На хостинг загружается только содержимое `out`.

## Commit и push

Сначала проверьте список изменённых файлов:

```bash
git status --short
git diff
```

Добавьте только относящиеся к задаче файлы, создайте commit и отправьте его в `main`:

```bash
git add <файлы>
git commit -m "Краткое описание изменения"
git push origin main
```

Не добавляйте в Git `.env`, секреты, `node_modules`, `.next`, логи и временные файлы.

## Публикация на Vercel

Репозиторий GitHub уже подключён к Vercel. После push в ветку `main` Vercel автоматически запускает production deployment. Повторно импортировать проект не нужно.

1. Откройте deployment в панели Vercel и дождитесь статуса `Ready`.
2. Проверьте публичный сайт: [https://natiocasino.vercel.app/](https://natiocasino.vercel.app/).
3. Если deployment завершился ошибкой, откройте Build Logs и найдите первую ошибку установки или сборки.

Для текущей конфигурации Vercel должен запускать pnpm 11.9.0 и читать `pnpm-workspace.yaml`, где отдельно разрешён build-скрипт `unrs-resolver`. Если в Build Logs указана другая версия pnpm, проверьте настройки Corepack и Install Command проекта в Vercel.
