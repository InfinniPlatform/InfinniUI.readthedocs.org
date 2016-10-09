DataBinding.getSource()
=======================

Возвращает источник данных привязки.

Syntax
------

.. code:: js

    dataBinding.getSource()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

Источник данных привязки, установленный вызовом метода
`bindSource() <../DataBinding.bindSource.html>`__.

Examples
--------

.. code:: js

    dataBinding.bindSource(context.dataSources['DataSource1'], '$.FirstName');
    var source = dataBinding.getSource(); // source === context.dataSources['DataSource1']

See Also
--------

-  `bindSource() <../DataBinding.bindSource.html>`__
-  `getSourceProperty() <../DataBinding.getSourceProperty.html>`__
