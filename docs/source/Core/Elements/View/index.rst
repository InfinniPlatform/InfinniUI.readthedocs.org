View
====

Визуальное представление.

Description
-----------

Визуальное представление - программный объект, который может быть
отображен на экране и представляет собой контейнер взаимосвязанных друг
с другом визуальных и невизуальных элементов. Визуальное представление
расширяет `базовый тип контейнера элементов <../Container/>`__, таким
образом, одно представление может являться частью другого.

Extends
-------

`Container <../Container/>`__

Syntax
------

.. code:: js

    new View(parent)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - parent
     - `Element <../Element/>`__
     - Родительский элемент


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getContext <View.getContext.html>`__
     - Возвращает `контекст представления <../../Context/>`__
   * - `getScripts <View.getScripts.html>`__
     - Возвращает `коллекцию <../../Collection/>`__ `скриптов представления <../../Script/>`__
   * - `getParameters <View.getParameters.html>`__
     - Возвращает `коллекцию <../../Collection/>`__ `параметров представления <../../Parameters/>`__
   * - `getDataSources <View.getDataSources.html>`__
     - Возвращает `коллекцию <../../Collection/>`__ `источников данных представления <../../DataSources/BaseDataSource/>`__
   * - `getDialogResult <View.getDialogResult.html>`__
     - Возвращает `результат работы представления <DialogResult/>`__
   * - `setDialogResult <View.setDialogResult.html>`__
     - Устанавливает `результат работы представления <DialogResult/>`__
   * - `open <View.open.html>`__
     - Открывает представление
   * - `close <View.close.html>`__
     - Закрывает представление
   * - `setOpenStrategy <View.setOpenStrategy.html>`__
     - Устанавливает `стратегию отображения представления <LinkView/OpenMode/>`__
   * - `getHeaderTemplate <View.getHeaderTemplate.html>`__
     - Возвращает `функцию <../../Script/>`__ шаблонизации заголовка представления
   * - `setHeaderTemplate <View.setHeaderTemplate.html>`__
     - Устанавливает `функцию <../../Script/>`__ шаблонизации заголовка представления
   * - `getCloseButtonVisibility <View.getCloseButtonVisibility.html>`__
     - Возвращает флаг видимости кнопки закрытия
   * - `setCloseButtonVisibility <View.setCloseButtonVisibility.html>`__
     - Устанавливает флаг видимости кнопки закрытия
   * - `getApplicationView <View.getApplicationView.html>`__
     - Возвращает корневое представление
   * - `getFocusOnControl <View.getFocusOnControl.html>`__
     - Возвращает имя элемента представления, который получит фокус при открытии представления
   * - `setFocusOnControl <View.setFocusOnControl.html>`__
     - Устанавливает имя элемента представления, который получит фокус при открытии представления


Events
------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `onOpening <View.onOpening.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что представление открывается
   * - `onOpened <View.onOpened.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что представление было открыто
   * - `onClosing <View.onClosing.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что представление закрывается
   * - `onClosed <View.onClosed.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что представление было закрыто
   * - `onBeforeLoaded <View.onBeforeLoaded.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что представление было загружено. Данный обработчик сработает до `onLoaded <../Element/Element.onLoaded.html>`__



.. toctree::
   :hidden:

   DialogResult/index.rst
   LinkView/index.rst
   DialogResult.rst
   View.close.rst
   View.getApplicationView.rst
   View.getCloseButtonVisibility.rst
   View.getContext.rst
   View.getDataSources.rst
   View.getDialogResult.rst
   View.getFocusOnControl.rst
   View.getHeaderTemplate.rst
   View.getParameters.rst
   View.getScripts.rst
   View.metadata.rst
   View.onBeforeLoaded.rst
   View.onClosed.rst
   View.onClosing.rst
   View.onOpened.rst
   View.onOpening.rst
   View.open.rst
   View.setCloseButtonVisibility.rst
   View.setDialogResult.rst
   View.setFocusOnControl.rst
   View.setHeaderTemplate.rst
   View.setOpenStrategy.rst
