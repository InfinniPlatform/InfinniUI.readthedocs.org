FileBox.setAcceptTypes
======================

Устанавливает список допустимых форматов данных. Значениями могут быть
имена MIME-типа или расширения файлов вместе с разделительной точкой.

Syntax
------

.. code:: js

    FileBox.setAcceptTypes(value)

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

    fileBox.setAcceptTypes(['application/pdf', 'application/zip', '.7z', '.rar']);

See Also
--------

-  `getAcceptTypes <FileBox.getAcceptTypes.html>`__
