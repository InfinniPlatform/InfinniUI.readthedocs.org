TabPage.close()
===============

Закрывает страницу.

Description
-----------

Вызов метода `close() <TabPage.close.html>`__ предпринимает попытку
закрытия страницы панели. Закрытие страницы означает, что она будет
удалена из панели. Метод `close() <TabPage.close.html>`__ предпринимает
попытку закрытия страницы, если метод
`getCanClose() <TabPage.getCanClose.html>`__ вернул ``true``. Если при
этом нет ни одного обработчика, подписанного на событие
`onClosing <TabPage.onClosing.html>`__, либо если все обработчики этого
события вернули значение, отличное от ``false``, страница будет закрыта.
Иначе вызов метода `close() <TabPage.close.html>`__ ни к чему не
приведет. Наконец, если все попытки закончились успехом и страница была
закрыта, будет вызвано событие `onClosed <TabPage.onClosed.html>`__, в
обработчике которого можно обработать факт закрытия страницы.

Syntax
------

.. code:: js

    tabPage.close(success, error)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - success
     - `Script <../../Core/Script/>`__
     - Обработчик события о том, что страница была закрыта
   * - error
     - `Script <../../Core/Script/>`__
     - Обработчик события о том, что при закрытии страницы произошла ошибка


Returns
~~~~~~~

Метод ничего не возвращает

Examples
--------

.. code:: js

    tabPage.close();

See Also
--------

-  `getCanClose() <TabPage.getCanClose.html>`__
-  `setCanClose() <TabPage.setCanClose.html>`__
-  `onClosing <TabPage.onClosing.html>`__
-  `onClosed <TabPage.onClosed.html>`__
