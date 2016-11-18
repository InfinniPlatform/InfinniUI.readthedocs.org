NumberFormat
============

Формат отображения числового значения. Строка форматирования должна
записываться в формате, который описан в разделе
`numberFormatting <../../Culture/Culture.numberFormatting.html>`__.

Extends
-------

`BaseFormat <../BaseFormat>`__.

Example
-------

.. code:: js

    //js-demo
    format = new InfinniUI.NumberFormat();
    format.setFormat('n2');

    $elementForExample.append(format.formatValue(1/3));

See also
--------

`Настройки форматирования для числового
значения <../../Culture/Culture.numberFormatting.html>`__


.. toctree::
   :hidden:

   NumberFormat.metadata.rst


.. include:: NumberFormat.metadata.rst