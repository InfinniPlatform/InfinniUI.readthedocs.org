ExtensionPanel.setContext()
====================

Устанавливает `контекст представления </Core/Context/>`__.

Syntax
------

.. code:: js

    extensionPanel.setContext(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - `ViewContext </Core/Context/>`__
     - Контекст представления


Returns
~~~~~~~

Метод не возвращает значений.

Examples
--------

.. code:: js

    extensionPanel.setContext( view.getContext() );
