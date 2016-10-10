ImageBox.metadata
=================

Метаданные типа `ImageBox <../>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - AcceptTypes
     - ``Array``
     - Список допустимых форматов данных.
   * - MaxSize
     - ``Number``
     - Максимальный размер данных в байтах.


Examples
--------

.. code:: json

    {
      "AcceptTypes": [
        "image/jpeg",
        "image/png"
      ],
      "MaxSize": 1048576,
      "Value": {
        "Source": "dataSource1",
        "Property": "$.Photo"
      }
    }

.. code:: json

    {
      "ImageBox": {
        "Enabled": false,
        "Value": "\\img\\notice.png"
      }
    }
