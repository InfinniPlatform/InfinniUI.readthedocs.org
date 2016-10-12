RadioGroup.metadata
-------------------

Метаданные типа `RadioGroup <./>`__.

Properties
~~~~~~~~~~

Метаданные строятся по той же схеме, что и
`ListBox.metadata <../ListBox/ListBox.metadata.html>`__.

Examples
~~~~~~~~

.. code:: json

    {
      "RadioGroup": {
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
