ExtensionPanel.metadata
=======================

Метаданные типа `ExtensionPanel <./>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ExtensionName
     - ``String``
     - Название пользовательского элемента
   * - Parameters
     - ``Array``
     - Параметры, передаваемые в пользовательский элемент


Examples
--------

.. code:: json

    {
        "ExtensionName": "SuperPanelExtension",
        "ItemTemplate": {
            "Label": {
                "Value": {
                    "Source": "MainDataSource",
                    "Property": "#.Name"
                }
            }
        },
        "Items": {
            "Source": "MainDataSource",
            "Property": ""
        }
    }

.. code:: json

    {
        "ExtensionName": "CaptchaExtension",
        "Parameters": [
          {
            "Name": "type",
            "Value": "reCAPTCHA"
          }
        ]
    }
