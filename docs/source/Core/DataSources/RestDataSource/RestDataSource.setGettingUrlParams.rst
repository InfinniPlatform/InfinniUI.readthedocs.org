RestDataSource.setGettingUrlParams()
====================================

Устанавливает параметры запроса на получение данных.

Syntax
------

.. code:: js

    RestDataSource.setGettingUrlParams(propertyName, value)
    RestDataSource.setGettingUrlParams(value)

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

    RestDataSource.setGettingUrlParams('origin', 'http://some.ru');

.. code:: js

    RestDataSource.setGettingUrlParams({
        type: 'get',
        origin:'http://some.ru',
        path:'/some/id<%param1%><%param2%>?a=2&b=<%param1%><%param3%>',
        data: {},

        params: {
            param1: 4,
            param2: missParam ? undefined : '/',
            param3: '&c=4'
        }
    });

See Also
--------

-  `getGettingUrlParams <RestDataSource.getGettingUrlParams.html>`__
