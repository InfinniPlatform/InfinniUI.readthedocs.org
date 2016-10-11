Getting Started
===================================

Данная статья поможет сделать необходимые предустановки для начала разработки на базе InfinniUI.

Install
---------

InfinniUI можно установить с помощью bower::

   bower install infinni-ui

клонировать репозиторий с `github <https://github.com/InfinniPlatform/InfinniUI>`_

или :download:`скачать <../_files/infinni-ui.zip>`.

Example
---------

Зайдите в директорию платформы, в папке ``example`` Вы найдёте пример разработки на базе InfinniUI.

Настройте сборку конфигурации. Для этого в файле ``<example>/gulpfile.js/gulptasks/sourceForTasks.js`` проверьте/исправьте значения переменных infinniUIpath, fromInfinniToNewStylesPath, projectRootFolder, projectFolderForPlatform, projectFolderForExtensions.

Файл ``runExample.bat`` (для его корректной работы необходим `Node.js <https://nodejs.org/en/>`_) делает полную сборку платформы и конфигурации, а также запуск сервера.

Результат сборки можно посмотреть по адресу http://localhost:4444.

Метаданные страницы
~~~~~~~~~~~~~~~~~~~~

В примере в качестве стартовой страницы выступает ``<example>/testConfigurations/stab.json``. В той же папке Вы найдёте другие примеры метаданных страницы.

Для создания желаемого отображения используйте встроенные :doc:`/Elements/index` или добавляйте :ref:`extention`.

Переопределение и расширение конфигурационных переменных
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Формат конфигурации платформы можно посмотреть в разделе :doc:`/Core/InfinniUI/InfinniUI.config`.

Чтобы перекрыть требуемые поля, нужно задать их до подключения основного js-файла с платформой.

В примере, это происходит в файле ``<example>/www/config.js`` (обратите внимание, что ``config.js`` подключается до ``platform.js``)


Переопределение и расширение стилей
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Для полноценного переопределения и расширения стилей, требуется подменять less файлы платформы. Это нужно иметь доступ к переменным стилей.

В примере эти файлы находятся в папке ``<example>/styles`` (путь до папки должен быть указан в перменной ``fromInfinniToNewStylesPath``)

Переопределить можно 4 файла:

 * platform-variables - переменные стилей самой платформы. `Оригинальный файл находится в проекте в InfinniUI <https://github.com/InfinniPlatform/InfinniUI/blob/master/bootstrap-framework/less/pl-variables.less>`_
 * bootstrap-variables - переменные стилей фреймворка bootstrap. `Оригинальный файл находится в проекте в InfinniUI <https://github.com/InfinniPlatform/InfinniUI/blob/master/bootstrap-framework/less/variables.less>`_
 * bootstrap-theme - стили перекрывающие/дополняющие стили фреймворка bootstrap. `Оригинальный файл находится в проекте в InfinniUI <https://github.com/InfinniPlatform/InfinniUI/blob/master/bootstrap-framework/less/theme.less>`_
 * extensions - стили перекрывающие/дополняющие стили платформы. Оригинального файла нет.

.. _extention:

Расширение функциональности
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Новая функциональность добавляется проще всего, достаточно просто подключить файлы с ее реализацией на страницу.
Желательно сделать это ниже подключения InfinniUI, чтобы был доступ к глобальным переменным платформы.

Кроме того, вы можете задавать новые элементы (см пример в папке ``<example>/js/elements/``).
Либо использовать возможности :doc:`/Elements/ExtensionPanel/index`, пример можно глянуть в папке ``<example>/js/extentionPanels/``.

Так же обратите внимание, что многие важные настроики происходят в файле ``<example>/www/js/main.js``.