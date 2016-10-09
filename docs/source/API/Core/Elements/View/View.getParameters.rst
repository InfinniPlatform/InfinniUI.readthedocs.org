View.getParameters()
====================

Возвращает `коллекцию <../../../Collection/>`__ `параметров
представления <../../../Parameters/>`__.

Syntax
------

.. code:: js

    view.getParameters()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

`Коллекция <../../../Collection/>`__ `параметров
представления <../../../Parameters/>`__.

Examples
--------

.. code:: js

    var myParameter = new Parameter({view: parentView});
    myParameter.setName('myParameter');
    myParameter.setValue(123);

    var parameters = parentView.getParameters();
    parameters.add(myParameter);
    var myParameter2 = parameters.getById('myParameter'); // myParameter2 === myParameter

    myParameter2.getValue(); // 123

See Also
--------

-  `Collection <../../../Collection/>`__
-  `Parameter <../../../Parameters/>`__
