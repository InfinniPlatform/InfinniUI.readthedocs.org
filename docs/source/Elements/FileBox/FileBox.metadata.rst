FileBox.metadata
================

Метаданные типа `FileBox <../>`__.

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
        "application/pdf",
        "application/msword"
      ],
      "MaxSize": 1048576,
      "Value": {
        "Source": "dataSource1",
        "Property": "$.Attachment"
      }
    }
