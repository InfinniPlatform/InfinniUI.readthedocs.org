ListBox.metadata
================

Метаданные типа `ListBox <../>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - ViewMode
     - ``String``
     - ``common``
     - `Режим отображения <../../../Core/viewMode/>`__ списка. Может принимать значения: 'common', 'base', 'checking'.


Examples
--------

.. code:: json

    {
      "ListBox": {
        "Name": "ChildrenList",
        "ItemTemplate": {
            "Label": {
              "Value": {
                "Source": "MainDataSource",
                "Property": "$.Childrens.#.Name"
              }
            }
        },
        "Items": {
          "Source": "MainDataSource",
          "Property": "$.Childrens"
        }
      }
    }
