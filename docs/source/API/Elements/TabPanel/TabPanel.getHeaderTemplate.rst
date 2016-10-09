TabPanel.getHeaderTemplate()
============================

Возвращает `функцию <../../../Core/Script/>`__ шаблонизации закладок
дочерних элементов панели.

Description
-----------

Если `функция <../../../Core/Script/>`__ шаблонизации закладок дочерних
элементов панели определена, то она используется при изменении
`коллекции <../../../Core/Collection/>`__ дочерних элементов панели -
`getItems() <../../../Core/Elements/Container/Container.getItems.html>`__.

Syntax
------

.. code:: js

    tabPanel.getHeaderTemplate()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

`Функция <../../../Core/Script/>`__ шаблонизации закладок дочерних
элементов панели. В параметре ``args`` передается информация,
необходимая для формирования `визуального
элемента <../../../Core/Elements/Element/>`__, который будет отображен в
качестве закладки панели. Свойство ``args.value`` содержит исходный
элемент. Результатом работы функции должен быть `визуальный
элемент <../../../Core/Elements/Element/>`__.

Examples
--------

.. code:: js

    var headerTemplate = tabPanel.getHeaderTemplate();

See Also
--------

-  `setHeaderTemplate() <../TabPanel.setHeaderTemplate.html>`__
-  `getItemTemplate() <../../../Core/Elements/Container/Container.getItemTemplate.html>`__
-  `setItemTemplate() <../../../Core/Elements/Container/Container.setItemTemplate.html>`__
-  `getItems() <../../../Core/Elements/Container/Container.getItems.html>`__
-  `Collection <../../../Core/Collection/>`__
