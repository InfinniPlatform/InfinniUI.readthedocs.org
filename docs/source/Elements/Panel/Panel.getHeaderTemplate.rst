Panel.getHeaderTemplate()
=========================

Возвращает `функцию <../../Core/Script/>`__ шаблонизации заголовка
панели.

Syntax
------

.. code:: js

    panel.getHeaderTemplate()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

`Функция <../../Core/Script/>`__ шаблонизации заголовка панели. В
параметре ``args`` передается информация, необходимая для формирования
`визуального элемента <../../Core/Elements/Element/>`__, который
будет отображен в качестве заголовка панели. Свойство ``args.value``
содержит данные заголовка. Результатом работы функции должен быть
`визуальный элемент <../../Core/Elements/Element/>`__.

Examples
--------

.. code:: js

    var headerTemplate = panel.getHeaderTemplate();

See Also
--------

-  `setHeaderTemplate() <Panel.setHeaderTemplate.html>`__
-  `getHeader() <Panel.getHeader.html>`__
-  `setHeader() <Panel.setHeader.html>`__
