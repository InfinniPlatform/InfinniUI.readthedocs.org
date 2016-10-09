View.getDataSources()
=====================

Возвращает `коллекцию <../../../Collection/>`__ `источников данных
представления <../../../DataSources/BaseDataSource/>`__.

Syntax
------

.. code:: js

    view.getDataSources()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

`Коллекция <../../../Collection/>`__ `источников данных
представления <../../../DataSources/BaseDataSource/>`__.

Examples
--------

.. code:: js

    var myDataSource = new ObjectDataSource(View);
    myDataSource.setName('myDataSource');

    var dataSources = view.getDataSources();
    dataSources.add(myDataSource);

    var myDataSource2 = dataSources.getById('myDataSource'); // myDataSource2 === myDataSource

See Also
--------

-  `Collection <../../../Collection/>`__
-  `BaseDataSource <../../../DataSources/BaseDataSource/>`__
