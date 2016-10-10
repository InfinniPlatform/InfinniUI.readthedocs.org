ViewContext.dataSources
=======================

Возвращает ассоциативный список `источников данных
представления <../DataSources/BaseDataSource/>`__.

Syntax
------

.. code:: js

    ViewContext.dataSources

Examples
--------

.. code:: js

    var dataSource1 = ViewContext.dataSources.myDataSource;
    var dataSource2 = ViewContext.dataSources['myDataSource']; // dataSource2 === dataSource1

See Also
--------

-  `BaseDataSource <../DataSources/BaseDataSource/>`__
