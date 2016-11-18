Script
======

Scripts in InfinniUI are js-functions. Developers can code any logic to implement in front end applications. Scripts have fix input parameters: context and arguments.

Scirpts can be attached to  `views <../Elements/View/>`__ as

.. code:: js

    {
        name: 'ScriptName',
        func: someScriptInstance
    }

This will make the script get into the view script list and then will become available by its name.

generally scripts are defined and used at the metadata level. They can be defined in two ways. First in section scrips in metadata views. In this case they will get attached to this view under the defined name. for example: Let us create script ``alertAction`` which upon invocation will display a message on the screen. Let us declare this script as an event processor upon button click.

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
                                "Name": "button_1",
                                "Text": "Button",
                                "OnClick": "alertAction"
                            }
                        }]
                    }
                }]
            }
        }],

        "Scripts": [{
            "Name": "alertAction",
            "Body": "alert(args.source.getName());"
        }]
    }

Second way is the more short way. If script is supposed to be used
only in one place then its body can be defined in a boody of processor
without view registration:

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


.. toctree::
   :hidden:

   ScriptBuilder/index.rst
   Script.metadata.rst


.. include:: Script.metadata.rst
