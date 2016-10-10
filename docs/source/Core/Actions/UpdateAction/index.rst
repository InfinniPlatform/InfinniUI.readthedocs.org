UpdateAction
============

Обновляет список элементов `источника данных <../../DataSources>`__.

Extends
-------

`BaseAction <../BaseAction/>`__

Syntax
------

.. code:: js

    new UpdateAction(parentView)

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
     - Description
   * - dataSource
     - `DataSource <../../DataSources/>`__
     - Источник данных, который будет обновляться


Метод execute
-------------

Если при вызове метода `execute <../BaseAction/BaseAction.execute.html>`__
указан параметр callback, то вызов данного обработчика осуществляется с
параметрами context и argument.

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - context
     - `Контекст представления <../../Context/>`__
     - Контекст родительского представления
   * - argument.value
     - ``Array``
     - Новый список элементов `источника данных <../../DataSources>`__


Examples
--------

.. code:: js

    var updateAction = new UpdateAction(parentView);
    updateAction.setProperty('dataSource', parentView.context.dataSources['DataSource1']);
    updateAction.execute(); // обновит DataSource1


.. toctree::
   :hidden:

   UpdateAction.metadata.rst
