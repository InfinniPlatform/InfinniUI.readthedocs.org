DocumentDataSource.setFilterParams()
====================================

Устанавливает значение параметра.

Syntax
------

.. code:: js

    serverAction.setFilterParams(name, value)
    serverAction.setFilterParams(value)

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

    serverAction.setFilterParams('documentName', 'Patient');

    serverAction.setFilterParams({
        documentName: 'Patient',
        userId: '12345'
    });

See Also
--------

-  `getFilterParams <../DocumentDataSource.getFilterParams.html>`__
-  `getFilter() <../DocumentDataSource.getFilter.html>`__
-  `setFilter() <../DocumentDataSource.setFilter.html>`__
