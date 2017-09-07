Script.metadata
---------------

Метаданные описывающие тип `Script <./>`__.

Exampes
~~~~~~~

Зададим скрипт, который при вызове будет выводить сообщение на экране. Объявим этот скрипт обработчиком события нажатия на
кнопку.

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
                                "Name": "button",
                                "Text": "Button",
                                "OnClick": "{ alert( args.source.getName() ); }"
                            }
                        }]
                    }
                }]
            }
        }]
    }

