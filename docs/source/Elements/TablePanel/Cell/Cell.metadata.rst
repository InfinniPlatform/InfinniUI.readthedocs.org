Cell.metadata
=============

Метаданные типа `Cell <../>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - ColumnSpan
     - ``Integer``
     - 1
     - Размер ячейки


Example
-------

.. code:: json

    {
        "Cell": {
          "ColumnSpan": 2,
          "Items": [
            {
              "Label": {
                "Value": "Cell text"
              }
            }
          ]
        }
    }
