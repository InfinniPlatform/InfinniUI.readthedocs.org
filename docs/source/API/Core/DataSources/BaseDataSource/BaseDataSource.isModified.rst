BaseDataSource.isModified()
===========================

Проверяет, является ли элемент несохраненным.

Syntax
------

.. code:: js

    BaseDataSource.isModified(item)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - item
     - Элемент источника данных. Если указан, на наличие изменений проверяется только указанный элемент; если не указан, на наличие изменений проверяются все элементы


Returns
~~~~~~~

Возвращает ``true``, если элемент был изменен, иначе возвращает
``false``.

Examples
--------

.. code:: js

    var selectedItem = BaseDataSource.getSelectedItem();
    var selectedIsModified = BaseDataSource.isModified(selectedItem);

See Also
--------

-  `isModifiedItems() <../BaseDataSource.isModifiedItems.html>`__
-  `saveItem() <../BaseDataSource.saveItem.html>`__
-  `updateItems() <../BaseDataSource.updateItems.html>`__
