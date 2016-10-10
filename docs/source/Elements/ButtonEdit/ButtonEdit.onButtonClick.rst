ButtonEdit.onButtonClick
========================

Устанавливает `обработчик события <../../Core/Script/>`__ нажатия на
кнопку.

Syntax
------

.. code:: js

    buttonEdit.onButtonClick(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../Core/Script/>`__
     - Обработчик события нажатия на кнопку


Examples
--------

.. code:: js

    buttonEdit.onButtonClick(
      function(context, args) { alert('onButtonClick'); }
    );
