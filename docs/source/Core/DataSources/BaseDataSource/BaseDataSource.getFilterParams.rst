BaseDataSource.getFilterParams()
====================================

Возвращает значение параметра.

Syntax
------

.. code:: js

    BaseDataSource.getFilterParams(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - value
     - Название параметра


Returns
~~~~~~~

Значение указанного параметра, либо объект со всеми параметрами, если
метод вызывался без названия параметра.

Examples
--------

.. code:: js

    var filterParams = dataSource.getFilterParams();
    var documentName = dataSource.getFilterParams('documentName');

See Also
--------

-  `setFilterParams <BaseDataSource.setFilterParams.html>`__
-  `getFilter() <BaseDataSource.getFilter.html>`__
-  `setFilter() <BaseDataSource.setFilter.html>`__
