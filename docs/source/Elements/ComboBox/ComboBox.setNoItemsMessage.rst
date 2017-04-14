ComboBox.setNoItemsMessage
=============================

Устанавливает значение, для поиска в выпадающем списке значений

Description
-----------

Устанавивает значение, которое будет использоваться для отображения когда не найден не один элемент.

Syntax
------

.. code:: js

    comboBox.setNoItemsMessage( message )

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - message
     - Сообщение, которое отображается когда не найдено ни одного элемента


Returns
~~~~~~~

Нет.

Examples
--------

.. code:: js

    text = comboBox.setNoItemsMessage( "Вы ничего не нашли по запросу \"<span class=\"search-message\""></span>\"" );
