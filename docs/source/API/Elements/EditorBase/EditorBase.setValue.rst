EditorBase.setValue
===================

Устанавливает значение.

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

    EditorBase.setValue(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``value``
     - Значение редактора.


Returns
~~~~~~~

Нет.

Examples
--------

.. code:: js

    EditorBase.setValue(newValue);

See Also
--------

-  `getValue() <../EditorBase.getValue.html>`__
-  `onValueChanging <../EditorBase.onValueChanging.html>`__
-  `onValueChanged <../EditorBase.onValueChanged.html>`__
