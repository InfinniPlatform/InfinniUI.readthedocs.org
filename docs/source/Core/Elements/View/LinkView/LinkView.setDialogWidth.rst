LinkView.setDialogWidth()
=========================

Устанавливает ширину диалогового окна (для случая OpenMode = 'Dialog').

Syntax
------

.. code:: js

    linkView.setDialogWidth(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - ``String``
     - Ширина диалогового окна


Возможные значения:

-  Small
-  Middle
-  Large
-  ExtraLarge

По умолчанию диалоговое окно имеет ширину Middle.

Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    linkView.setOpenMode('Dialog');
    linkView.setDialogWidth('Large');

See Also
--------

-  `getOpenMode <../LinkView.getOpenMode.html>`__
-  `setOpenMode <../LinkView.setOpenMode.html>`__
-  `OpenMode <../OpenMode/>`__
