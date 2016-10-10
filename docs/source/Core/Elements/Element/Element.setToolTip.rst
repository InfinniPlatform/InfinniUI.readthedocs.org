Element.setToolTip()
====================

Устанавливает всплывающую подсказку элемента.

Syntax
------

.. code:: js

    Element.setToolTip(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - ``String``/`Element <./>`__
     - Текст или визуальный элемент, появляющийся при наведении на элемент


Returns
~~~~~~~

Метод не возвращает значений

Examples
--------

.. code:: js

    var toolTip = new Label();
    toolTip.setValue('Help text');
    Element.setToolTip(toolTip);

See Also
--------

-  `getToolTip() <Element.getToolTip.html>`__
