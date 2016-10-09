View.setCloseButtonVisibility()
===============================

Устанавливает флаг видимости кнопки закрытия. Кнопка закрытия
отображается, когда представление открывается в режиме
`диалога <../LinkView/OpenMode/>`__. По умолчанию она является видимой.

Syntax
------

.. code:: js

    view.setCloseButtonVisibility(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - ``Boolean``
     - Флаг видимости кнопки закрытия


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    view.setOpenStrategy(new OpenModeDialogStrategy());
    view.setCloseButtonVisibility(false);

See Also
--------

-  `getCloseButtonVisibility() <../View.getCloseButtonVisibility.html>`__
