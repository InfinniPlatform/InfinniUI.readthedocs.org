BaseDataSource.resumeUpdate()
=============================

Разрешает обновление списка элементов.

Syntax
------

.. code:: js

    BaseDataSource.resumeUpdate(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - value
     - Причина запрета на обновление


Обратите внимание, что причина запрета, указанная в resumeUpdate должна
совпадать с той, что была указана в
`suspendUpdate() <BaseDataSource.suspendUpdate.html>`__. Пока не будут
вызваны resumeUpdate для всех тех причин, которые указывались при
вызовах `suspendUpdate() <BaseDataSource.suspendUpdate.html>`__,
обновление списка элементов будет запрещено. Узнать, есть ли запрет на
обновление списка элементов можно с помощью метода
`isUpdateSuspended() <BaseDataSource.isUpdateSuspended.html>`__.

Returns
~~~~~~~

Метод ничего не возвращает

Examples
--------

.. code:: js

    BaseDataSource.resumeUpdate('updateParamsNotReady');

See Also
--------

-  `isUpdateSuspended() <BaseDataSource.isUpdateSuspended.html>`__
-  `suspendUpdate() <BaseDataSource.suspendUpdate.html>`__
-  `setFilter() <BaseDataSource.setFilter.html>`__
-  `updateItems() <BaseDataSource.updateItems.html>`__
