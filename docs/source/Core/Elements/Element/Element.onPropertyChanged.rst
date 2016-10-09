Element.onPropertyChanged
=========================

Устанавливает `обработчик события <../../../Script/>`__ о том, что одно
из свойств элемента изменилось.

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

    Element.onPropertyChanged(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../../Script/>`__
     - Обработчик события о том, что одно из свойств элемента изменилось. В параметре ``args`` передается информация о произошедшем событии. Свойство ``property`` содержит путь к свойству, ``argument.oldValue`` - предыдущее значение, ``argument.newValue`` - новое значение.


Examples
--------

.. code:: js

    Element.onPropertyChanged(
      function(context, args) { alert('Property ' + args.property + ' is changed!'); }
    );

See Also
--------

-  `getProperty() <../Element.getProperty.html>`__
-  `setProperty() <../Element.setProperty.html>`__
-  `DataBinding <../../../DataBinding/>`__
