ObjectDataSource.setItems()
===========================

Устанавливает список элементов источника данных.

Description
-----------

Вызов метода ``setItems()`` устанавливает указанный массив в качестве
поставщика данных. Данный метод не обновляет список элементов источника
данных. Для обновления списка элементов необходимо вызвать метод
`updateItems() <../BaseDataSource/BaseDataSource.updateItems.html>`__.

Syntax
------

.. code:: js

    ObjectDataSource.setItems(items)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - items
     - Массив элементов источника данных


Returns
~~~~~~~

Метод ничего не возвращает

Examples
--------

.. code:: js

    ObjectDataSource.setItems([
      { Id: 1, Display: 'LTE' },
      { Id: 2, Display: '3G' },
      { Id: 3, Display: '2G' }
    ]);

    ObjectDataSource.updateItems();

See Also
--------

-  `updateItems() <../BaseDataSource/BaseDataSource.updateItems.html>`__
