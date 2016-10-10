SaveAction
==========

Обновляет список элементов `источника данных <../../DataSources>`__.

Extends
-------

`BaseAction <../BaseAction/>`__

Syntax
------

.. code:: js

    new SaveAction(parentView)

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
   * - dataSource
     - `DataSource <../../DataSources/>`__
     - –
     - Источник данных, который будет сохранятся
   * - canClose
     - ``Boolean``
     - true
     - Значение, определяющее, нужно ли закрыть родительское представление после сохранения


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
   * - argument
     - ``Object``
     - В случае, если сохранение произошло успешно, то argument содержит поле source - источник данных, в который осуществляется сохранение. Если же при сохранении произошла ошибка, то argument содержить поле value, которое содержит результаты проверки валидации


Examples
--------

.. code:: js

    var saveAction = new SaveAction(parentView);
    saveAction.setProperty('dataSource', parentView.context.dataSources['DataSource1']);
    saveAction.setProperty('canClose', true);
    saveAction.execute(); // сохранит выбранный элемент DataSource1 и закроет parentView

See Also
--------

-  `getProperty <../BaseAction/BaseAction.getProperty.html>`__
-  `setProperty <../BaseAction/BaseAction.setProperty.html>`__


.. toctree::
   :hidden:

   SaveAction.metadata.rst
