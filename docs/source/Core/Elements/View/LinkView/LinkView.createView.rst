LinkView.createView()
=====================

Создает `представление <...html>`__.

Syntax
------

.. code:: js

    linkView.createView(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - callback
     - `Script <../../../Script/>`__
     - Обработчик события о том, что представление было создано


Созданное представление передается в качестве аргумента в callback.

Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    var onViewReady = function(createdView){
        createdView.open();
    }

    linkView.createView(onViewReady);
