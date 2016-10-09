RestDataSource.getDeletingUrlParams()
=====================================

Возвращает параметры запроса на удаление.

Syntax
------

.. code:: js

    RestDataSource.getDeletingUrlParams(propertyName)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - propertyName
     - Название параметра


Returns
~~~~~~~

Значение указанного парметра. Если propertyName не было указано, то
вернёт объект со значениями всех параметров.

Examples
--------

.. code:: js

    RestDataSource.getDeletingUrlParams('origin');

See Also
--------

-  `setDeletingUrlParams <../RestDataSource.setDeletingUrlParams.html>`__
