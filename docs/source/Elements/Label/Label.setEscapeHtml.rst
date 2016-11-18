Label.setEscapeHtml
===================

Устанавливает значение, определяющее, экранируется ли HTML-разметка.

Syntax
------

.. code:: js

    Label.setEscapeHtml(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - ``Boolean``
     - Значение, определяющее, экранируется ли HTML-разметка.


Returns
~~~~~~~

Нет.

Examples
--------

.. code:: js

    //js-demo

    var metadata = {
        Label: {
            EscapeHtml: false,
            DisplayFormat: "{title}<sup>{id}</sup>"
        }
    };

    var value = {id: 3, title: "Three"};

    var builder = new InfinniUI.ApplicationBuilder();
    var label = builder.build(metadata);
    label.setValue(value);

    //  Render
    $elementForExample.append(label.render());

See Also
--------

-  `getEscapeHtml() <Label.getEscapeHtml.html>`__
