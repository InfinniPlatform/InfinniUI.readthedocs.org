TabPage.getCanClose()
=====================

Возвращает значение, определяющее, разрешено ли закрытие страницы.

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

    tabPage.getCanClose()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

Логическое значение, определяющее, разрешено ли закрытие страницы.
Значение ``true`` означает, что закрытие страницы разрешено, значение
  ``false`` - запрещено.

Examples
--------

.. code:: js

    var canClose = tabPage.getCanClose();

See Also
--------

-  `setCanClose() <TabPage.setCanClose.html>`__
-  `close() <TabPage.close.html>`__
-  `onClosing <TabPage.onClosing.html>`__
-  `onClosed <TabPage.onClosed.html>`__
