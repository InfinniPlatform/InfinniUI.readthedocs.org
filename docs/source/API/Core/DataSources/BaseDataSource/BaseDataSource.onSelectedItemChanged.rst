BaseDataSource.onSelectedItemChanged
====================================

Устанавливает `обработчик события <../../../Script/>`__ о том, что
выделенный элемент изменился.

Syntax
------

.. code:: js

    BaseDataSource.onSelectedItemChanged(callback, owner)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - callback\*
     - `Script <../../../Script/>`__
     - Обработчик события о том, что выделенный элемент изменился. Параметр ``args`` данного обработчика содержит поля: source - ссылка на `источник данных <../>`__, value - выбранный элемент
   * - owner
   * - Родительский элемент, используется для автоматической отписки. Должен иметь поле или метод isRemoved. Если isRemoved возвращает истину, происходит автоматическая отписка 


\* Обязательный аргумент.

Examples
--------

.. code:: js

    BaseDataSource.onSelectedItemChanged(
      function(context, args) { alert('Selected item is changed!'); }
    );

See Also
--------

-  `setSelectedItem() <../BaseDataSource.setSelectedItem.html>`__
