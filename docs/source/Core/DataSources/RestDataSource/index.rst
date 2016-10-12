RestDataSource
==============

Источник данных представления для произвольных http-сервисов данных.

Extends
-------

`BaseDataSource <../BaseDataSource/>`__

Syntax
------

.. code:: js

    new RestDataSource(parameters)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - parameters
     - ``Object``
     -  Объект с параметрами представления. Один из параметров обязательный: parameters.view - родительское представление источника данных


Properties
----------

Нет

Specific Properties
-------------------

Для работы с данными свойствами используйте методы
  `getProperty <../BaseDataSource/BaseDataSource.getProperty.html>`__ и
  `setProperty <../BaseDataSource/BaseDataSource.setProperty.html>`__.
Обратите внимание, что для работы с данными свойствами необходимо
  `указывать точку в
  названии <../BaseDataSource/BaseDataSource.getProperty/#path-rules>`__.

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - urlParams.get
     - Параметры запроса на получение данных
   * - urlParams.set
     - Параметры запроса на сохранение данных
   * - urlParams.delete
     - Параметры запроса на удаление


urlParams Format
----------------

Параметры запроса хранятся в виде объекта со следующими полями:

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - origin
     - ``String``1
     - Хост и порт
   * - path
     - ``String``1
     - Строка пути (относительно хоста)
   * - method
     - ``String``
     - Метод запроса
   * - data
     - ``Object``1
     - Данные запроса
   * - params
     - ``Object``
     - Параметры запроса


1 `Шаблонизируемая величина <#parameters-templating>`__.

Parameters Templating
---------------------

Зачастую при описании запроса возникает необходимость использовать
  изменяемые значения.
Для этого в RestDataSource введены параметры. Вы можете задать
  значение параметра в свойстве params. А затем использовать его в
  шаблонизируемых величинах, обозначив ``<%[paramName]%>``.

Например, задан параметр *userId*, тогда в свойстве **path** можно
обратится к нему следующим образом:
``"/users?filter=eq(userId,<%userId%>)"``. При отправке запроса вместо
*<%userId%>* будет установлено соответсвующее значение параметра.

.. code:: js

    RestDataSource.setGettingUrlParams('params.userId', '12345');
    RestDataSource.setGettingUrlParams('path', '/users?filter=eq(userId,<%userId%>)');

Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getGettingUrlParams <RestDataSource.getGettingUrlParams.html>`__
     - Возвращает параметры запроса на получение данных
   * - `setGettingUrlParams <RestDataSource.setGettingUrlParams.html>`__
     - Устанавливает параметры запроса на получение данных
   * - `getSettingUrlParams <RestDataSource.getSettingUrlParams.html>`__
     - Возвращает параметры запроса на сохранение данных
   * - `setSettingUrlParams <RestDataSource.setSettingUrlParams.html>`__
     - Устанавливает параметры запроса на сохранение данных
   * - `getDeletingUrlParams <RestDataSource.getDeletingUrlParams.html>`__
     - Возвращает параметры запроса на удаление
   * - `setDeletingUrlParams <RestDataSource.setDeletingUrlParams.html>`__
     - Устанавливает параметры запроса на удаление
   * - `setUpdatingItemsConverter <RestDataSource.setUpdatingItemsConverter.html>`__
     - Устанавливает конвертер ответа http-сервиса в контейнер элементов источника данных


Events
------

Нет


.. toctree::
   :hidden:

   RestDataSource.getDeletingUrlParams.rst
   RestDataSource.getGettingUrlParams.rst
   RestDataSource.getSettingUrlParams.rst
   RestDataSource.metadata.rst
   RestDataSource.setDeletingUrlParams.rst
   RestDataSource.setGettingUrlParams.rst
   RestDataSource.setSettingUrlParams.rst
   RestDataSource.setUpdatingItemsConverter.rst


.. include:: RestDataSource.metadata.rst