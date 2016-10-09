ObjectFormat
============

Формат отображения объекта. Строка форматирования должна записываться в
формате, который описан в разделе
`ObjectFormat.format <ObjectFormat.format>`__.

Extends
-------

`BaseFormat <../BaseFormat>`__.

Example
-------

.. code:: js

    //js-demo
    format = new ObjectFormat();
    format.setFormat('{:n3}');

    $elementForExample.append(format.formatValue(1/3));

See also
--------

`Настройки форматирования объекта <ObjectFormat.format>`__
