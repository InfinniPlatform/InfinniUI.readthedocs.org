Script.metadata
---------------

Метаданные описывающие типа `Script <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - Name*
     - ``String``
     - Имя скрипта, по которому он будет доступен в представлении.
   * - Body*
     - ``String``
     - Содержимое скрипта (на javascript).


\* Обязательное свойство.

Exampes
~~~~~~~

Зададим скрипт ``alertAction``, который при вызове будет выводить
сообщение на экране. Объявим этот скрипт обработчиком события нажатия на
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

