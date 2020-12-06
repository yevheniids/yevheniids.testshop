# Welcome to Parcel Shopify Boilerplate

Идея взята из [Shopify](https://github.com/Shopify) / **[slate](https://github.com/Shopify/slate)**. И реализована как простая и модифицированая альтернатива.

---

## Short documentation

Для корректной работы нужны [nodejs](https://nodejs.org/en/), [npm](https://www.npmjs.com/) и [Shopify Theme Kit](https://shopify.github.io/themekit/).
В основным сборщиком является [Parcel](https://parceljs.org/).

### Code style

Давайте следовать код стайлу позаимствованого у [airbnb](https://github.com/airbnb):

- [styles](https://github.com/airbnb/css)
- [javascript](https://github.com/airbnb/javascript)

---

### Files

Основная структура шаблона наследует Шопифай [Structure of a theme](https://help.shopify.com/en/manual/using-themes/theme-structure). Расширением является папки/файлы:

- #### /scripts/

  - **sections**(**snippets**|**templates**)/ – наследуем структуру темы, для "удобной" структуры
    - **index.js** – обьеденяет все исходные коды для подальшего подключение
    - **sectionName.js** – _содержит код который используется в данной секции_
  - **ui**/ – часто используемые/основные компоненты темы
    - **index.js** – обьеденяет все исходные коды для подальшего подключение
    - **lozyload.js** – [lozad](https://github.com/ApoorvSaxena/lozad.js) библиотека для ленивой загрузки изображений (как подключать _snippets/lazy-img.liquid_)
  - **polyfills.js** – полифилы для устаревших браузеров, нестандартных нешений
  - **scripts.js** – основной файл в который подключаются все скрипты

- #### /styles/ – идея подключения такая же как и в scripts (наследование структуры темы)

  - **components/\*.scss** – основные ui елементы темы (кнопки/шрифты/ссылки)
  - **static/\*.scss** – вендорные файлы, стили для слайдеров, нормализация стилей и тд
  - **IE11.scss** – фиксы конкретно для IE11
  - **variables.scss** - переменные которые используются повсеместно
  - **styles.scss** - основной файл в который подключаются все стили

- #### /snippets/

  - **css-fonts.liquid** – подключение кастомных шрифтов
  - **css-variables.liquid** – [Кастомные свойства](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties). Ex.:`color: var(--variable);`
  - **lazy-img.liquid** - снипет для ленивой загрузки изображения (внутри есть описание как использовать)

---

## Shopify git flow

> немного адаптированый flow **bitbucket**

- **master** - main branch
- **develop** - branch is created form **master**
- **feature/** - branch is created from **develop**. When a _feature_ is complete it is merged into the **develop** branch. Branches should be named `feature/header`
- **bugfix/** - if an issue in **any branch** is detected a _bugfix_ branch is created from **issued branch**. Branches should be named `bugfix/[username]/[issue-name or month_day]` (_bugfix/johnds/06_13_)
- **hotfix/** - if an issue in **master** is detected a _hotfix_ branch is created from **master**. Branches should be named `hotfix/[username]/[issue-name]` (_hotfix/pedrods/header-flashing_)
- **release/** - when the branch is done it is merged into **develop** and **master**

## Shopify theme flow

- **Staging** - main live theme
- **BACKUP | Staging | [date]** - theme is created from the **Staging** theme. We use these themes for fast backuping or review differences between functionality (ex. `BACKUP | Staging | 06.13`).
- **branch_name** - theme is created from the **Staging** theme, also named _development_ theme. These branches may be named _feature/homepage-instagram_, _bugfix/alexds/04_22_ etc.
- **SP | [date]** - theme is created from the **desired** theme. We use these themes for **special purposes**: testing, previewing etc.

### Shopify theme flow description

#### When you are going to start work on the them

1. Создайте _дубликат темы_.
2. Переименуйте Вашу **тему**.
3. Созайте/перейдите в **ветку** (не забудте забрать с удаленного репозитория изменения).
4. Настройте _config.yml_ (смените **theme_id**).
5. (пере)Установите зависимости `yarn`.
6. Задеплойте **ветку** в **тему** `yarn deploy`.
7. Откройте **превью** темы `theme open`
8. Гляньте полуприкрытым глазком, что все, вроде как, работает.
9. Запуститете **watcher** `yarn watch`.
10. Убедитесь, что вы работаете в той же теме (запустили превью нужной темы).
11. Вносите изминения, **не забывая о комитах**.

#### Когда вы закончили работу над _багом/фичей/хотфиксом_

1. **commit** изминений.
2. **push**.
3. Сделайте **rebase** _родительской ветки_ (ex. `git pull --rebase origin development`)
4. Создайте **pull request**.

#### Когда стоит задача обновить **Staging**

1. Уточните, что нужно залить.
2. Сделайте дубликат темы. Переименуйте его (ex. `BACKUP | Staging | 11.31`).
   > на этом этапе можно запаблишить бекап, что бы не ломать лив. а потом после 5го шага запаблишить основную тему.
3. Настройте **config.yml**, а именно **test** environment (**STAGING_THEME_ID**). Что бы файл выглядел:

   ```yml
   development: /* development configuration */
   test:
     password: SHOPIFY_PRIVATE_APP_PASSWORD
     theme_id: STAGING_THEME_ID
     store: SHOPIFY_STORE_URL.myshopify.com
     ignore_files:
   ```

4. Выполнить команду `yarn deploy-staging`
5. Еще раз убедитесь что все работает как вы ожидали.

---

## Start theme customization

> или как в народе называют подогнать под дизайн

Для того что бы начать кастомизацию существующей темы с данным сборщиком, нужно:

> имеется ввиду что, вы уже настроили config.yml

1. Загрузить файлы установленной на магизин темы с помощью [Shopify Theme Kit](https://shopify.github.io/themekit/) выполнив команду: `theme download`
   Тема будет выкачана и содержать все нужные файлы.
2. Затем нужно "перетащить" сборку. Есть 2 варианта:
   - переместить папки **scripts, styles и основные файлы** в загруженую тему и отредактировать `theme.liquid` (добавить подключение скриптов, стилей, сниппетов)
   - переместить файлы темы в сборку с заменой файлов и также подправить `theme.liquid`
3. У Вас также есть возможность интегрировать исходные стили/скрипты темы в сборку (но по-сути это не обязательно)
4. Отредактировать `config.yml` чтобы не "убить" исходную тему (создать новую тему)
5. Залить "сборку" на шопифай. Для того что бы это сделать нужно выполнить "Initial steps" и выполнить команду `yarn deploy`. Эта команда сбилдит скрипты и стили в папку _assets_ и дальше выполнит деплой.
   > на этом этапе возможны ошибки. в консоле будет вся информация. плачем и чиним.

---

## Start theme development

> по модному: разработка с 0

1. Создаем магазин
2. Создаем коннект с магазином [Todo из Theme Kit](https://shopify.github.io/themekit/#get-api-access)
3. Настраиваем `config.yml`. Будет выглядеть примерно вот так:

   ```yml
   development:
     password: SHOPIFY_PRIVATE_APP_PASSWORD
     theme_id: SHOPIFY_THEME_ID
     store: SHOPIFY_STORE_URL.myshopify.com
     ignore_files:
   test:
     password: SHOPIFY_PRIVATE_APP_PASSWORD
     theme_id: STAGING_SHOPIFY_THEME_ID
     store: SHOPIFY_STORE_URL.myshopify.com
     ignore_files:
   ```

4. Устанавливаем все зависимости `npm i` или `yarn`.
5. Запускаем "watcher" `yarn watch`.
6. Пишем код.
