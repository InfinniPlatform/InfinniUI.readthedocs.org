Script
======

Scripts in InfinniUI are js-functions. Developers can code any logic to implement in front end applications. Scripts have fix input parameters: context and arguments.

Generally scripts are defined and used at the metadata level. They can be defined in two ways. In first case, define any function in js-scripts and call in by name from metadata views. For example: Let us create function ``alertAction`` which upon invocation will display a message on the screen. Let us declare this script as an event processor upon button click.

.. code:: js

    function alertAction(context, args) {
        alert(args.source.getName());
    }

    //infinni-ui-demo
    {
        "DataSources": [
        ],

        "Items": [{
            "GridPanel": {
                "Items": [{
                    "Cell": {
                        "ColumnSpan": 4,
                        "Items": [{
                            "Button": {
                                "Name": "button_1",
                                "Text": "Button",
                                "OnClick": "{ alertAction(context, args); }"
                            }
                        }]
                    }
                }]
            }
        }]
    }

Second way is the more short way. If script is supposed to be used
only in one place then its body can be defined in a body of processor
without creating a separate function:

.. code:: js

    //infinni-ui-demo
    {
        "DataSources": [
        ],

        "Items": [{
            "GridPanel": {
                "Items": [{
                    "Cell": {
                        "ColumnSpan": 4,
                        "Items": [{
                            "Button": {
                                "Name": "button_2",
                                "Text": "Button",
                                "OnClick": "{ alert(args.source.getName()); }"
                            }
                        }]
                    }
                }]
            }
        }]
    }

As you may notice for this type of script its contents are placed in braces.

Also Script can be an object, that describe any action:

.. code:: js

    //infinni-ui-demo
    {
        "DataSources": [
        ],

        "Items": [{
            "GridPanel": {
                "Items": [{
                    "Cell": {
                        "ColumnSpan": 4,
                        "Items": [{
                            "Button": {
                                "Name": "button_2",
                                "Text": "Button",
                                "OnClick": {
                                    "OpenAction": {
                                        "LinkView": {
                                            "InlineView": { ... }
                                        }
                                    }
                                }
                            }
                        }]
                    }
                }]
            }
        }]
    }

.. toctree::
   :hidden:

   ActionExecutor/index.rst
   ActionFactory/index.rst
   Executor/index.rst
   InlineScriptFactory/index.rst
   Script.metadata.rst


.. include:: Script.metadata.rst
