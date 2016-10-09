RestDataSource.setDeletingUrlParams()
=====================================

Устанавливает параметры запроса на удаление.

Syntax
------

.. code:: js

    RestDataSource.setDeletingUrlParams(propertyName, value)
    RestDataSource.setDeletingUrlParams(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - propertyName
     - Название параметра
   * - value
     - Значение параметров/параметра


Returns
~~~~~~~

Метод ничего не возвращает

Examples
--------

.. code:: js

    RestDataSource.setDeletingUrlParams("data.filter", "eq(_id, '<%_id%>')");

    RestDataSource.setDeletingUrlParams({
        type: 'delete',
        origin:'http://some.ru',
        path:'/delete/user/',
        params: {
            _id: 'c852edce7d'
        }
    });

See Also
--------

-  `getDeletingUrlParams <../RestDataSource.getDeletingUrlParams.html>`__
