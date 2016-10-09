RestDataSource.setSettingUrlParams()
====================================

Устанавливает параметры запроса на сохранение данных.

Syntax
------

.. code:: js

    RestDataSource.setSettingUrlParams(propertyName, value)
    RestDataSource.setSettingUrlParams(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - propertyName
     - Название парметра
   * - value
     - Значение параметров/парметра


Returns
~~~~~~~

Метод ничего не возвращает

Examples
--------

.. code:: js

    RestDataSource.setSettingUrlParams('type', 'post');

.. code:: js

    RestDataSource.setSettingUrlParams({
        type: 'post',
        origin:'http://some.ru',
        path:'/some/<%param1%>/<%param2%>',
        data: {
            a: 2,
            b: '<%param1%>',
            c: '!1<%param2%>2!'
        },

        params: {
            param1: '',
            param2: ''
        }
    });

See Also
--------

-  `getSettingUrlParams <../RestDataSource.getSettingUrlParams.html>`__
