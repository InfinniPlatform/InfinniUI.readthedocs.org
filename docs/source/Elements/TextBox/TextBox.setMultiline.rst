TextBox.setMultiLine
====================

Устанавливает значение, определяющее, разрешен ли многострочный текст.

Syntax
------

.. code:: js

    textbox.setMultiline(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``value``
     - ``Boolean``
     - Значение, определяющее, разрешен ли многострочный текст.


Returns
~~~~~~~

Нет

Examples
--------

.. code:: js

    //js-demo
    var textarea = new TextBox();
    textarea.setMultiline(true);
    textarea.setLineCount(4);
    textarea.setLabelText('textarea');
    $elementForExample.append(textarea.render());

See Also
--------

-  `getMultiLine <TextBox.getMultiline.html>`__
-  `setLineCount <TextBox.setLineCount.html>`__
-  `getLineCount <TextBox.getLineCount.html>`__
