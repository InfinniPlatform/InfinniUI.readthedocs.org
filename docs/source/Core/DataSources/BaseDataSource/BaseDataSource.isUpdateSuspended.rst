BaseDataSource.isUpdateSuspended()
==================================

Возвращает значение, указывающее, запрещено ли обновление списка
элементов.

Syntax
------

.. code:: js

    BaseDataSource.isUpdateSuspended()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

Возвращает ``true``, если обновление списка элементов запрещено, иначе
возвращает ``false``.

Examples
--------

.. code:: js

    var isUpdateSuspended = BaseDataSource.isUpdateSuspended();

See Also
--------

-  `resumeUpdate() <BaseDataSource.resumeUpdate.html>`__
-  `suspendUpdate() <BaseDataSource.suspendUpdate.html>`__
