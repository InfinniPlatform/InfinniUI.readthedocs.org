BaseDataSource.setProperty()
============================

Устанавливает значение указанного свойства источника.

Description
-----------

Методы `getProperty() <../BaseDataSource.getProperty.html>`__,
`setProperty() <../BaseDataSource.setProperty.html>`__ и событие
`onPropertyChanged <../BaseDataSource.onPropertyChanged.html>`__
используются механизмом `привязки данных <../../../DataBinding/>`__.
Вместе с этим они предоставляют универсальный унифицированный интерфейс
для работы со свойствами источника данных.

Syntax
------

.. code:: js

    BaseDataSource.setProperty(property, value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - property
     - Путь к свойству (подробности использования см. в разделе `Path rules <../BaseDataSource.getProperty/#path-rules>`__)
   * - value
     - Значение свойства


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    BaseDataSource.setProperty('$.Property1', 123);

See Also
--------

-  `getProperty() <../BaseDataSource.getProperty.html>`__
-  `onPropertyChanged <../BaseDataSource.onPropertyChanged.html>`__
-  `DataBinding <../../../DataBinding/>`__
