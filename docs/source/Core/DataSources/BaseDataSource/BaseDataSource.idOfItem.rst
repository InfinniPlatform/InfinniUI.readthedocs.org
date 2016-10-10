BaseDataSource.idOfItem()
=========================

Возвращает значение идентификатора по переданному элементу item.

Syntax
------

.. code:: js

    BaseDataSource.idOfItem(item)

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

Значение идентификатора.

Examples
--------

.. code:: js

    var selectedItem = BaseDataSource.getSelectedItem();
    var selectedId = BaseDataSource.idOfItem(selectedItem);

See Also
--------

-  `getIdProperty() <BaseDataSource.getIdProperty.html>`__
-  `setIdProperty() <BaseDataSource.setIdProperty.html>`__
