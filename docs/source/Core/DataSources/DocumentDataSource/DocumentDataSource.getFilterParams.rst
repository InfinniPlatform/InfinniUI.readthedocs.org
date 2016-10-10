DocumentDataSource.getFilterParams()
====================================

Возвращает значение параметра.

Syntax
------

.. code:: js

    DocumentDataSource.getFilterParams(value)

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

    var filterParams = DocumentDataSource.getFilterParams();
    var documentName = DocumentDataSource.getFilterParams('documentName');

See Also
--------

-  `setFilterParams <DocumentDataSource.setFilterParams.html>`__
-  `getFilter() <DocumentDataSource.getFilter.html>`__
-  `setFilter() <DocumentDataSource.setFilter.html>`__
