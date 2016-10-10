BaseDataSource.getProperty()
============================

Возвращает значение указанного свойства источника.

Description
-----------

Методы `getProperty() <BaseDataSource.getProperty.html>`__,
`setProperty() <BaseDataSource.setProperty.html>`__ и событие
`onPropertyChanged <BaseDataSource.onPropertyChanged.html>`__
используются механизмом `привязки данных <../../DataBinding/>`__.
Вместе с этим они предоставляют универсальный унифицированный интерфейс
для работы со свойствами источника данных.

Syntax
------

.. code:: js

    BaseDataSource.getProperty(property)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - property
     - Путь к свойству (подробности использования см. в разделе `Path rules <#path-rules>`__)


Returns
~~~~~~~

Значение свойства.

Path rules
----------

По умолчанию методы `getProperty <BaseDataSource.getProperty.html>`__,
  `setProperty <BaseDataSource.setProperty.html>`__ и
  `onPropertyChanged <BaseDataSource.onPropertyChanged.html>`__
  обращаются к свойствам элементов источников данных. Например,
  dataSource.getProperty('0.Name') вернёт свойство Name первого
  элемента.
Однако, иногда необходимо обращаться к `собственным свойствам
  источника данных <#specific-properties>`__, тогда передназванием
  свойства укажите точку. Например,
  dataSource.getProperty('.selectedItem') вернёт текущий элемент.

Examples
--------

.. code:: js

    var value = BaseDataSource.getProperty('$.Property1');

See Also
--------

-  `setProperty() <BaseDataSource.setProperty.html>`__
-  `onPropertyChanged <BaseDataSource.onPropertyChanged.html>`__
-  `DataBinding <../../DataBinding/>`__
