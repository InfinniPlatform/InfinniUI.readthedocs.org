ObjectDataSource.metadata
-------------------------

Метаданные `ObjectDataSource <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - Items
     - ``Array``(⇔)
     - Массив элементов источника данных


(⇔) Свойство может быть задано, как
`DataBinding <../../DataBinding/DataBinding.metadata.html>`__.

Examples
~~~~~~~~

.. code:: json

    {
        "ObjectDataSource": {
          "Name": "objectDataSource1",
          "Items": [
            { "Id": 1, "Display": "LTE" },
            { "Id": 2, "Display": "3G" },
            { "Id": 3, "Display": "2G" }
          ]
        }
    }

.. code:: json

    {
        "ObjectDataSource": {
          "Name": "convertedDataSource",
          "Items": {
              "Source": "MainDataSource",
              "Property": "",
              "Mode": "ToElement",
              "Converter": {
                  "ToElement": "{ return args.value.map(function(item){return {FullName: item.LastName + ' ' + item.FirstName, Birthday: item.Birthday}; }); }"
                }
            }
        }
    }
