RestDataSource.getGettingUrlParams()
====================================

Возвращает параметры запроса на получение данных.

Syntax
------

.. code:: js

    RestDataSource.getGettingUrlParams(propertyName)

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

    RestDataSource.getGettingUrlParams('path');

See Also
--------

-  `setGettingUrlParams <RestDataSource.setGettingUrlParams.html>`__
