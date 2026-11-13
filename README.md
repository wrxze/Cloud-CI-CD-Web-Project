# Cloud-CICD-Project

Учебный статический сайт-портфолио с автоматической публикацией на GitHub Pages.

## Запуск локально
Откройте `index.html` в браузере или используйте расширение Live Server в VS Code.

## Публикация
1. Создайте публичный репозиторий GitHub с именем `Cloud-CICD-Project`.
2. Отправьте содержимое этой папки в ветку `main`:
   ```bash
   git init
   git add .
   git commit -m "Initial website and CI/CD workflow"
   git branch -M main
   git remote add origin https://github.com/ВАШ_ЛОГИН/Cloud-CICD-Project.git
   git push -u origin main
   ```
3. В репозитории откройте Settings → Pages и выберите **GitHub Actions** как источник публикации.
4. Откройте Actions и дождитесь успешного завершения workflow.
5. Адрес сайта будет иметь вид `https://ВАШ_ЛОГИН.github.io/Cloud-CICD-Project/`.

При каждом push в `main` workflow автоматически проверит наличие файлов и базовую структуру HTML, соберёт артефакт и опубликует сайт.

> Скриншоты успешного запуска и обновлённой страницы нужно сделать после реального запуска в вашем GitHub-аккаунте. Их нельзя достоверно подготовить заранее.
