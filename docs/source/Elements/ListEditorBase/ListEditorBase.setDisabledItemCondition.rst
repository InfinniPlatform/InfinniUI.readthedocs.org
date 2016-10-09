ListEditorBase.setDisabledItemCondition
=======================================

Устанавливает `функцию <../../../Core/Script/>`__, определяющую запрет
на выбор элемента.

Syntax
------

.. code:: js

    ListEditorBase.setDisabledItemCondition(func)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - func
     - `Script <../../../Core/Script/>`__
     - Функция, определяющая запрет на выбор элемента. Элементы, для которых данная функция вернёт true, будут недоступны для выбора.


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

listEditorBase.setDisabledItemCondition( function (context, args) {
return args.value.Count == 0; });

See Also
--------

-  `getDisabledItemCondition() <../ListEditorBase.getDisabledItemCondition.html>`__
