BaseDataSource.setFilterParams()
====================================

Устанавливает значение параметра.

Syntax
------

.. code:: js

    BaseDataSource.setFilterParams(name, value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - name
     - Название параметра
   * - value
     - Значение, которое необходимо установить


Returns
~~~~~~~

Метод ничего не возвращает

Examples
--------

.. code:: js

    var filter = 'and(contains(Name, <%filterName%>),contains(currency, <%filterPrice%>))';
    dataSource.setFilter(filter);

    dataSource.setFilterParams('filterName', 'name');
    dataSource.setFilterParams('filterPrice', '999');

See Also
--------

-  `getFilterParams <BaseDataSource.getFilterParams.html>`__
-  `getFilter() <BaseDataSource.getFilter.html>`__
-  `setFilter() <BaseDataSource.setFilter.html>`__
