LocalStorageDataSource.metadata
--------------------------------

В метаданных `LocalStorageDataSource <./>`__ может задаваться в качестве источника для `DataBinding <../../DataBinding/DataBinding.metadata.html>`__. При этом имя источника необходимо указывать как ``LocalStorageDS``.

Examples
~~~~~~~~

.. code:: json

    {
        "Label": {
          "Name": "SomeLabel",
          "Value": {
            "Source": "LocalStorageDS",
            "Property": "0.FirstName"
          }
        }
    }

.. code:: json

    {
        "Button": {
          "Name": "SomeButton",
          "Text": {
            "Source": "LocalStorageDS",
            "Property": "0.BtnName"
          }
        }
    }
