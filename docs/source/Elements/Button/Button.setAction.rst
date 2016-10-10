Button.setAction
================

Устанавливает `действие <../../Core/Actions/>`__ при нажатии на
кнопку.

Syntax
------

.. code:: js

    button.setAction(action)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - action
     - `Action <../../Core/Actions/>`__
     - Действие


Returns
~~~~~~~

Нет

Examples
--------

.. code:: js

    var action = new ServerAction(/** Params for ServerAction **/); 
    var content = button.getContent(action);

See Also
--------

-  `getContent <Button.getContent.html>`__
