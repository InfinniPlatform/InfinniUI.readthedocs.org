InfinniUI.extensionPanels.getByName
===================================

Возвращает функцию-конструктор для прикладного элемента по имени.

Syntax
------

.. code:: js

    InfinniUI.extensionPanels.getByName(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - `String`
     - Идентификатор прикладного элемента. 

Returns
~~~~~~~

Возвращает функцию-конструктор для прикладного элемента.

Examples
~~~~~~~~

.. code:: js

	InfinniUI.extensionPanels.getByName( 'SuperPanelExtension' );
