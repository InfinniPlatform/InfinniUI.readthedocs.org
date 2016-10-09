View.setOpenStrategy()
======================

Устанавливает `стратегию отображения
представления <../LinkView/OpenMode/>`__.

Syntax
------

.. code:: js

    view.setOpenStrategy(strategy)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - strategy
     - `OpenMode <../LinkView/OpenMode/>`__
     - Стратегия отображения представления


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    view.setOpenStrategy(new OpenModeDialogStrategy());

See Also
--------

-  `OpenMode <../LinkView/OpenMode/>`__
