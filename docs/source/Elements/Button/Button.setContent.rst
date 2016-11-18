Button.setContent
=================

Устанавливает содержимое кнопки.

Syntax
------

.. code:: js

    button.setContent(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - ``String``
     - Содержимое кнопки


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    //js-demo
    var button = new InfinniUI.Button();
    button.setContent('Click<br/>me');
    $elementForExample.append(button.render());

See Also
--------

-  `getContent <Button.getContent.html>`__
