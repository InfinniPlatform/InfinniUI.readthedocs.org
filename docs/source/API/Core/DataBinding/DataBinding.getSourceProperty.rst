DataBinding.getSourceProperty()
===============================

Возвращает путь к свойству источника данных привязки.

Syntax
------

.. code:: js

    dataBinding.getSourceProperty()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

Путь к свойству источника данных привязки, установленный вызовом метода
`bindSource() <../DataBinding.bindSource.html>`__.

Examples
--------

.. code:: js

    dataBinding.bindSource(context.dataSources['DataSource1'], '$.FirstName');
    var sourceProperty = dataBinding.getSourceProperty(); // sourceProperty === '$.FirstName'

See Also
--------

-  `bindSource() <../DataBinding.bindSource.html>`__
-  `getSource() <../DataBinding.getSource.html>`__
