Container.getItemTemplate()
===========================

Возвращает `функцию <../../../Script/>`__ шаблонизации дочерних
элементов контейнера.

Description
-----------

Если `функция <../../../Script/>`__ шаблонизации дочерних элементов
определена, то она используется при изменении
`коллекции <../../../Collection/>`__ дочерних элементов контейнера -
`getItems() <../Container.getItems.html>`__. Если шаблон не определен,
коллекция дочерних элементов контейнера должна содержать ссылки на
готовые `визуальные элементы <../../Element/>`__.

Syntax
------

.. code:: js

    container.getItemTemplate()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

`Функция <../../../Script/>`__ шаблонизации дочерних элементов
контейнера.

В параметре ``args`` передается информация, необходимая для
  формирования `визуального элемента <../../Element/>`__. Свойство
  ``args.value`` содержит исходный элемент.
Результатом работы функции должен быть `визуальный
  элемент <../../Element/>`__.

Examples
--------

.. code:: js

    var itemTemplate = container.getItemTemplate();

See Also
--------

-  `setItemTemplate() <../Container.setItemTemplate.html>`__
-  `getItems() <../Container.getItems.html>`__
-  `Collection <../../../Collection/>`__
