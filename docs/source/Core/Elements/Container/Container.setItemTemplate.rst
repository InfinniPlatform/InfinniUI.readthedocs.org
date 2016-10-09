Container.setItemTemplate()
===========================

Устанавливает `функцию <../../../Script/>`__ шаблонизации дочерних
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

    container.setItemTemplate(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - `Script <../../../Script/>`__
     - Функция шаблонизации дочерних элементов контейнера


В параметре ``args`` передается информация, необходимая для формирования
`визуального элемента <../../Element/>`__. Свойство ``args.value``
содержит исходный элемент. Результатом работы функции должен быть
`визуальный элемент <../../Element/>`__.

Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    container.setItemTemplate(function(context, args) {
      var element = new Label();
      element.setValue(args.value);
      return element;
    });

    container.getItems().reset([
      'One',
      'Two',
      'Three'
    ]);

See Also
--------

-  `getItemTemplate() <../Container.getItemTemplate.html>`__
-  `getItems() <../Container.getItems.html>`__
-  `Collection <../../../Collection/>`__
