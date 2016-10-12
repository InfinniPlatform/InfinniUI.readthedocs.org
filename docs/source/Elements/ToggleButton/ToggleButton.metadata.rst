ToggleButton.metadata
---------------------

Метаданные типа `ToggleButton <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - TextOn
     - ``String``
     - 'ON'
     - Текст на включенное состояние.
   * - TextOff
     - ``String``
     - 'OFF'
     - Текст на выключенное состояние.


Examples
~~~~~~~~

.. code:: json

    {
      "Text": "Subscribe",
      "TextOn": "yes",
      "TextOff": "no",
      "Value": {
        "Source": "dataSource1",
        "Property": "$.IsSubscribe"
      }
    }

.. code:: js

    //js-demo

    var metadata = {
        ToggleButton: {
            "Text": "Subscribe",
            "TextOn": "yes",
            "TextOff": "no"
        }
    };

    var builder = new ApplicationBuilder();
    var toggle = builder.build(metadata);

    //  Render
    $elementForExample.append(toggle.render());
