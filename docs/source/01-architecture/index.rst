Architecture description
=========================

The biggest blocks in infinniUI architecture are data sources and elements of User Interface. Those two are completely independent on each other.

Data sources
-----------------

Data sources rely on data can be retireved from various sources for instance remote services like http-services and applied logic. Sources can grant CRUD access to the data and subscribe to the data update as well.

User interface elements
-------------------------------------

Each element defines UI entities for instance button, text field, label, contaner elements like panels and so on.

Data source and elements binding. Metadata.
--------------------------------------------------------------------

Binding process is automatic based on defined metadata. Metadata is a JSON-schema document which has UI structure, data sources list and data bindings described in it.

UI structure can be described as:

.. code:: js

    //infinni-ui-demo
    {
    "DataSources": [],

    "Items": [
    {
    //infinni-ui-display-begin
    "GridPanel": {
        "Items": [
            {
                "Cell": {
                    "ColumnSpan": 4,
                    "Items": [
                        {
                            "Label": {
                                "Text": "Some label",
                                "HorizontalAlignment": "Right"
                            }
                        }
                    ]
                }
            },{
                  "Cell": {
                      "ColumnSpan": 4,
                      "Items": [
                          {
                              "TextBox": {
                                  "Name": "TB",
                                  "Value": "Some value"
                              }
                          }
                      ]
                  }
              }
        ]
    }
    //infinni-ui-display-end
    }
    ]
    }

Data source, in this case pre-defined local data set, can be defined as:

.. code:: js

    {
        "DataSources": [{
            "ObjectDataSource": {
                "Name": "MainDataSource",
                "Items":[{
                    "someField": "value"
                }]
            }
        }]
    }

Data binding to a text field:

.. code:: js

    //infinni-ui-demo
    {
        "DataSources": [{
            "ObjectDataSource": {
                "Name": "MainDataSource",
                "Items":[{
                    "someField": "value"
                }]
            }
        }],

        "Items": [{

            "GridPanel": {
                "Items": [
                    {
                        "Cell": {
                            "ColumnSpan": 4,
                            "Items": [
                                {
                                    "Label": {
                                        "Text": "Some label",
                                        "HorizontalAlignment": "Right"
                                    }
                                }
                            ]
                        }
                    },{
                        "Cell": {
                            "ColumnSpan": 4,
                                "Items": [
                                {
                                    "TextBox": {
                                        "Name": "TB",
                                        "Value": {
                                            "Source": "MainDataSource",
                                            "Property": "$.someField"
                                        }
                                    }
                                }
                            ]
                        }
                     }
                ]
            }
        }]
    }


Thus InfinniUI processes data in the following way:

-  InfinniUI recieves metadata described as JSON-schema.
-  InfinniUI transits metadata to builders.
-  In accordance with metadata descriptions builders generate web user interface, create data sources and perform data binding.
