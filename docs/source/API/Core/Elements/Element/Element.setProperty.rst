Element.setProperty()
=====================

Устанавливает значение указанного свойства элемента.

Description
-----------

Методы `getProperty() <../Element.getProperty.html>`__,
`setProperty() <../Element.setProperty.html>`__ и событие
`onPropertyChanged <../Element.onPropertyChanged.html>`__ используются
механизмом `привязки данных <../../../DataBinding/>`__. Вместе с этим
они предоставляют универсальный унифицированный интерфейс для работы со
свойствами элемента.

Syntax
------

.. code:: js

    Element.setProperty(property, value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - property
     - ``String``
     - Путь к свойству.
   * - value
     -  \* 
     - Значение свойства.


Returns
~~~~~~~

Метод не возвращает значений.

Examples
--------

.. code:: js

    Element.setProperty('Visible', true); // Идентично Element.setVisible(true);

See Also
--------

-  `getProperty() <../Element.getProperty.html>`__
-  `onPropertyChanged <../Element.onPropertyChanged.html>`__
-  `DataBinding <../../../DataBinding/>`__
