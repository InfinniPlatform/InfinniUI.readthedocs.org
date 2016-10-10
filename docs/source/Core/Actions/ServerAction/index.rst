ServerAction
============

Отправляет http запрос.

Extends
-------

`BaseAction <../BaseAction/>`__

Syntax
------

.. code:: js

    new ServerAction(parentView)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - parentView
     - `View <../../Elements/View/>`__
     -  Родительское представление 


Properties
----------

Для работы с данными свойствами используйте методы
`getProperty <../BaseAction/BaseAction.getProperty.html>`__ и
`setProperty <../BaseAction/BaseAction.setProperty.html>`__.

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - origin*
     - ``String``1
     - –
     - Хост и порт
   * - path*
     - ``String``1
     - –
     - Строка пути (относительно хоста)
   * - data
     - ``Object``1
     - –
     - Данные запроса
   * - contentType
     - ``String``
     - 'application/x-www-form-urlencoded; charset=utf-8'
     - Тип данных
   * - method
     - ``String``
     - 'GET'
     - Метод запроса


Url запроса определяется конкатинацией свойств origin и path.

\* Обязательное свойство.
1 `Шаблонизируемая величина <#parameters-templating>`__

Parameters Templating
---------------------

Зачастую при описании запроса возникает необходимость использовать
  изменяемые значения.
Для этого в ServerAction введены параметры. Вы можете задать значение
  параметра с помощью метода `setParam <ServerAction.setParam.html>`__. А
  затем использовать его в шаблонизируемых величинах, обозначив
  ``<%[paramName]%>``.
Например, задан параметр *userId*, тогда в свойстве **path** можно
  обратится к нему следующим образом:
  ``"/users?filter=eq(userId,<%userId%>)"``. При отправке запроса вместо
  *<%userId%>* будет установлено соответсвующее значение параметра.

Метод execute
-------------

Если при вызове метода `execute <../BaseAction/BaseAction.execute.html>`__
указан параметр callback, то вызов данного обработчика осуществляется с
параметром value.

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - value.requestUrl
     - Url запроса
   * - value.method
     - Метод запроса
   * - value.contentType
     - Тип данных
   * - value.args
     - Данные запроса


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getParam <ServerAction.getParam.html>`__
     - Возвращает значение параметра
   * - `setParam <ServerAction.setParam.html>`__
     - Устанавливает значение параметра

