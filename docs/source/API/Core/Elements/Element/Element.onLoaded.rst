Element.onLoaded
================

Устанавливает `обработчик события <../../../Script/>`__ о том, что
элемент был загружен.

Syntax
------

.. code:: js

    Element.onLoaded(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``callback``
     - `Script <../../../Script/>`__
     - Обработчик события о том, что элемент был загружен.


Examples
--------

.. code:: js

    Element.onLoaded(
      function(context, args) { alert('Element is loaded!'); }
    );
