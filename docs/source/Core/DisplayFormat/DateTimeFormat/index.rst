DateTimeFormat
==============

Формат отображения даты/времени. Строка форматирования должна
записываться в формате, который описан в разделе
`dateTimeFormatting <../../Localizations/Localizations.dateTimeFormatting.html>`__.

Extends
-------

`BaseFormat <../BaseFormat>`__.

Example
-------

.. code:: js

    //js-demo
    format = new InfinniUI.DateTimeFormat();
    format.setFormat('dd-MM-yyyy');

    $elementForExample.append(format.formatValue(new Date()));

See also
--------

`dateTimeFormatting <../../Localizations/Localizations.dateTimeFormatting.html>`__


.. toctree::
   :hidden:

   DateTimeFormat.metadata.rst


.. include:: DateTimeFormat.metadata.rst