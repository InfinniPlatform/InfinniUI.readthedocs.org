RestDataSource.getSettingUrlParams()
====================================

Возвращает параметры запроса на сохранение данных.

Syntax
------

.. code:: js

    RestDataSource.getSettingUrlParams(propertyName)

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

    RestDataSource.getSettingUrlParams('data');

See Also
--------

-  `setSettingUrlParams <RestDataSource.setSettingUrlParams.html>`__
