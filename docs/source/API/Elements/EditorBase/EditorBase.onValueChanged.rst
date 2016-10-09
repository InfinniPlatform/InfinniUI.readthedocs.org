EditorBase.onValueChanged
=========================

Устанавливает `обработчик события <../../Core/Script/>`__ о том, что
значение было изменено.

Description
-----------

Метод `setValue() <../EditorBase.setValue.html>`__ позволяет изменить
значение редактора. Если значение переданного параметра отличается от
текущего значения редактора, происходит генерация события
`onValueChanging <../EditorBase.onValueChanging.html>`__. Если нет ни одного
обработчика, подписанного на событие
`onValueChanging <../EditorBase.onValueChanging.html>`__, либо если все
обработчики этого события вернули значение, отличное от ``false``,
значение редактора меняется на новое. Факт изменения значения редактора
приводит к возникновению события
`onValueChanged <../EditorBase.onValueChanged.html>`__.

Syntax
------

.. code:: js

    EditorBase.onValueChanged(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../../Core/Script/>`__
     - `Обработчик события <../../../Core/Script/>`__ о том, что значение было изменено. В параметре ``argument`` передается информация о произошедшем событии. Свойство ``argument.oldValue`` содержит предыдущее значение редактора, ``argument.newValue`` - новое значение редактора.


Examples
--------

.. code:: js

    EditorBase.onValueChanged(
      function(context, argument) {
        alert('Value is changed!');
      }
    );

See Also
--------

-  `setValue <../EditorBase.setValue.html>`__
-  `onValueChanging <../EditorBase.onValueChanging.html>`__
