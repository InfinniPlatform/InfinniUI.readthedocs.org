Element.setStyle()
==================

Устанавливает элементу кастомный стиль (на деле устанавливает ему
одноименный класс, стили которого можно задать самому в подключаемых на
страницу стилях). Этот способ кастомизации внешнего вида череват разными
последствиями, поскольку примененные к классу css-правила могут
противоречить правилам задуманным InfinniUI, в следствии чего верстка
может "поехать" неожиданным образом. Следует применять эту возможность
как можно реже и как можно аккуратнее

Syntax
------

.. code:: js

    Element.setStyle(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - ``String``
     - Стилевой класс элемента.


Returns
~~~~~~~

Метод не возвращает значений.

Examples
--------

.. code:: js

    Element.setStyle('toolbar_button');

See Also
--------

-  `getStyle() <../Element.getStyle.html>`__
-  `getTextStyle() <../Element.getTextStyle.html>`__
-  `setTextStyle() <../Element.setTextStyle.html>`__
-  `getForeground() <../Element.getForeground.html>`__
-  `setForeground() <../Element.setForeground.html>`__
-  `getBackground() <../Element.getBackground.html>`__
-  `setBackground() <../Element.setBackground.html>`__
