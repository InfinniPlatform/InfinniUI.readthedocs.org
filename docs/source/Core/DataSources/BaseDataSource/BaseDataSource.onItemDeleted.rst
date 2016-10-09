BaseDataSource.onItemDeleted
============================

Устанавливает `обработчик события <../../../Script/>`__ о том, что
элемент удален.

Description
-----------

Вызов метода `deleteItem() <../BaseDataSource.deleteItem.html>`__ производит
удаление указанного элемента в соответствующем источнику данных
хранилище. Успешное удаление элемента приводит к возникновению события
`onItemDeleted <../BaseDataSource.onItemDeleted.html>`__.

Syntax
------

.. code:: js

    BaseDataSource.onItemDeleted(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - callback
     - `Script <../../../Script/>`__
     - Обработчик события о том, что элемент удален. Параметр ``args`` данного обработчика содержит поля: source - ссылка на `источник данных <../>`__, value - удаленный элемент


Examples
--------

.. code:: js

    BaseDataSource.onItemDeleted(
      function(context, args) { alert('Item is deleted!'); }
    );

See Also
--------

-  `deleteItem() <../BaseDataSource.deleteItem.html>`__
