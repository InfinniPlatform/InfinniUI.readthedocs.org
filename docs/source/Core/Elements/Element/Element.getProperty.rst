Element.getProperty()
=====================

Возвращает значение указанного свойства элемента.

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

    Element.getProperty(property)

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

Значение свойства.

Examples
--------

.. code:: js

    var value = Element.getProperty('Visible'); // Идентично вызову Element.getVisible();

See Also
--------

-  `setProperty() <../Element.setProperty.html>`__
-  `onPropertyChanged <../Element.onPropertyChanged.html>`__
-  `DataBinding <../../../DataBinding/>`__
