BaseDataSource.beforeDeleteItem()
=================================

Вы можете переопределить этот метод в наследнике BaseDataSource, если
есть необходимость выполнять некие действия перед удалением элемента

Syntax
------

.. code:: js

    BaseDataSource.beforeDeleteItem(item)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - item
     - Элемент источника данных


Returns
~~~~~~~

Метод ничего не возвращает

Examples
--------

.. code:: js

    var selectedItem = BaseDataSource.getSelectedItem();
    BaseDataSource.beforeDeleteItem(selectedItem);

See Also
--------

-  `deleteItem() <../BaseDataSource.deleteItem.html>`__
