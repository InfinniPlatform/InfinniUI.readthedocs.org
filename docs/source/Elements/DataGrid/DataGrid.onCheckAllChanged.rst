DataGrid.onCheckAllChanged
==========================

Устанавливает `обработчик события <../../../Core/Script/>`__ о том, что
состояние элемента "Выбрать все" в шапке таблицы изменилось.

Description
-----------

Новое значение переключателя передаётся в параметре ``args.value``.

Syntax
------

.. code:: js

    DataGrid.onCheckAllChanged(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - callback
     - `Обработчик события <../../../Core/Script/>`__
     - `Обработчик события <../../../Core/Script/>`__ о том, что одно из свойств элемента изменилось. В параметре ``args`` передается информация о произошедшем событии. Свойство ``args.value`` - новое значение (``true`` - Установлен, ``false`` - сброшен).


See Also
--------

-  `getCheckAll() <../DataGrid.getCheckAll.html>`__
