# Домашнее задание к блоку «React Router» — Задача «Навигационное меню»

Одностраничное веб-приложение (SPA) на React 19 и TypeScript 5 с верхним навигационным меню, реализованное на базе библиотеки React Router v7 с использованием вложенных маршрутов и динамической подсветки активных вкладок.

[![Build Status](https://github.com/ivantr033/ra16-homeworks-menu/actions/workflows/deploy.yml/badge.svg)](https://github.com/ivantr033/ra16-homeworks-menu/actions/workflows/deploy.yml)

## 🌐 Ссылка на развертывание (GitHub Pages)

* **Racing Taxi Menu App:** [Открыть приложение](https://ivantr033.github.io/ra16-homeworks-menu/)

## ⚙️ Реализованные требования и технические характеристики

* **Клиентский роутинг (`createHashRouter`):** Настроена маршрутизация без перезагрузки страницы с использованием `createHashRouter` для корректной работы прямой навигации и обновления страниц на статическом хостинге GitHub Pages.
* **Переиспользуемый каркас (`Layout` + `Outlet`):** Общее меню навигации вынесено в корневой компонент `Layout`, а содержимое разделов подставляется динамически через `<Outlet />`.
* **Подсветка активного пункта (`NavLink`):** В компоненте `Menu` используется `NavLink` для автоматического добавления класса `menu__item-active`. Для корневого маршрута `"/"` применён проп `end`, чтобы он не оставался активным на вложенных путях.
* **Обработка несуществующих маршрутов (404):** Реализован универсальный маршрут `path="*"` с компонентом `NotFoundPage` и ссылкой для возврата на главную страницу.

## 🛠️ Технологический стек

* **Фронтенд:** React 19, React Router v7 (`createHashRouter`, `RouterProvider`, `NavLink`, `Outlet`, `Link`)
* **Язык:** TypeScript 5
* **Сборщик:** Vite 8
* **CI/CD:** GitHub Actions (автоматический деплой на ветку `gh-pages`)

## 🔧 Инструкция по установке и запуску

1. Клонируйте репозиторий и перейдите в папку проекта:

   ```bash
   git clone https://github.com/ivantr033/ra16-homeworks-menu
   cd ra16-homeworks-menu
   ```

2. Установите зависимости:

   ```bash
   npm install --legacy-peer-deps
   ```

3. Запустите проект в режиме разработки:

   ```bash
   npm run dev
   ```

   Приложение откроется локально по адресу `http://localhost:5173`.

4. Для создания production-сборки выполните:

   ```bash
   npm run build
   ```
