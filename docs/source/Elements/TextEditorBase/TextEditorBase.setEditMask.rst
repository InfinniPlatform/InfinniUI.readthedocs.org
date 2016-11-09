TextEditorBase.setEditMask
==========================

Устанавливает `маску ввода данных </Core/EditMask/>`__.

Syntax
------

.. code:: js

    TextEditorBase.setEditMask(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``value``
     - `EditMask </Core/EditMask/>`__
     - Маска ввода данных.


Examples
--------

.. code:: js

    var editMask = new NumberEditMask('n2');
    TextEditorBase.setEditMask(editMask);

See Also
--------

-  `getEditMask() <TextEditorBase.getEditMask.html>`__
