# receipeApp

Общие рекомендации

Целевая ширина экрана — 1200px, ширина контейнера при этом 700px. Как дополнительная опция реализовать адаптивный дизайн для меньших размеров экрана.

Можно использовать bootstrap и тему https://bootswatch.com/united/

Можно и рекомендуется использовать Angular. Также рекомендуется использовать Angular Router для создания каркаса одностраничного приложения.

Можно использовать jQuery и плагины Bootstrap-а, дополнительную баллы можно получить если реализовать эту функциональность самим, использую инструменты Angular или создавая jQuery плагины.

Делайте акцент на чистоту кода и возможность переиспользования компонент задания в будущем. Вёрстка 1-в-1 в этом задании не должна быть приоритетом, крайне важно сделать стабильное и функциональное приложение, которое неплохо выглядит.

После того как основная функциональность будет готова, попробуйте как-нибудь “сломать” приложение. Например, ввести большое число символов в поля ввода, нажимать несколько раз быстро на функциональные кнопки и т.д. После этого попробуйте защитить приложение от подобных действий.

Данные о рецептах необходимо хранить в LocalStorage.

Рекомендую такой ход реализации задания: 
- используя каркас одностраничного приложения, сделать простой набросок практически без вёрстки основной функциональности;
- по одному сверстать максимально близко к оригиналу все основные шаблоны и добавить в набросок;
- переписать при необходимости часть JS кода, написанного на первом этапе;
- заняться оптимизацией и обработкой частных случаев;

В таком случае, у вас меньше вероятность не успеть выполнить задание в срок, чем если вы начнёте с  вёрстки и сразу попытаетесь реализовать чистовую функциональность. 

Рецепты можно брать с http://andychef.ru/recipe



Разделы в приложении

Идеи — подготовленные рецепты, хранятся на сервере, отдаются по AJAX по адресу https://api.myjson.com/bins/208a5 (информация http://myjson.com/api, http://myjson.com/208a5), запасной вариант https://jsonblob.com/api/jsonBlob/56c089b3e4b01190df4ef1ce
Мои рецепты — список сохранённых рецептов, хранятся в LocalStorage
Списки — состоит из 2 списков рецептов и одного списка ингредиентов (которых по сути тоже является списком рецептов)


Параметры рецепта

Название — тестовое поле (ограничение 200 символов)
Описание — текстовое многострочное поле (ограничение 2000 символов)
Время готовки — числовое поле (ограничение 4 символа)
Ингредиенты — набор из текстовых полей (у каждого ограничение 100 символов)
Инструкция — текстовое многострочное поле (ограничение 10000 символов)
Фото — ссылка на фотографию (ограничение 200 символов)

При редактировании рецепта необходимо сообщать пользователю об ошибках рядом с ошибочным полем в стиле Bootstrap.


Функциональность рецепта

Добавить в избранное — добавление текущего рецепта в список “Избранное", доступного на странице “Списки"
Добавить в покупки — добавление текущего рецепта в список “Покупки”. Ингредиенты рецепта доступны на странице “Списки”, во вкладке “Покупки"
Добавить в план — добавление текущего рецепта в список “План", доступного на странице “Списки"

Редактировать — функция открытия текущего рецепта на редактирования. При нажатии должна открыться страница на основе страницы создания нового рецепта, но с заполненными полями и заголовком “Редактирование рецепта”.
Сохранить — функция сохранения рецептов из списка “Идеи” в мои рецепты. При нажатии, текущий рецепт должен сохраниться в мои рецепты значение и функциональность кнопки поменяться на “Редактировать"

