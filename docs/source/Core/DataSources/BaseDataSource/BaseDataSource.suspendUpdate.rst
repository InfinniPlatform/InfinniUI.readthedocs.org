BaseDataSource.suspendUpdate()
==============================

Запрещает обновление списка элементов.

Syntax
------

.. code:: js

    BaseDataSource.suspendUpdate(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - value
     - Причина запрета на обновление


Returns
~~~~~~~

Метод ничего не возвращает

Examples
--------

.. code:: js

    BaseDataSource.suspendUpdate('updateParamsNotReady');

See Also
--------

-  `resumeUpdate() <BaseDataSource.resumeUpdate.html>`__
-  `isUpdateSuspended() <BaseDataSource.isUpdateSuspended.html>`__
-  `setFilter() <BaseDataSource.setFilter.html>`__
-  `updateItems() <BaseDataSource.updateItems.html>`__
