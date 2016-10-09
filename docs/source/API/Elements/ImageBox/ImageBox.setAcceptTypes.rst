ImageBox.setAcceptTypes
=======================

Устанавливает список допустимых форматов данных. Значениями могут быть
имена MIME-типа.

Syntax
------

.. code:: js

    ImageBox.setAcceptTypes(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``value``
     - ``Array``
     - список допустимых форматов данных.


Returns
~~~~~~~

Нет.

Examples
--------

.. code:: js

    imageBox.setAcceptTypes(["image/jpeg", "image/png"]);

See Also
--------

-  `getAcceptTypes <../ImageBox.getAcceptTypes.html>`__
