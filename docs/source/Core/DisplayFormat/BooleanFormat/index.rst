BooleanFormat
=============

Формат отображения логического значения.

Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getFalseText <BooleanFormat.getFalseText.html>`__
     - Возвращает текст для отображения ложного значения.
   * - `setFalseText <BooleanFormat.setFalseText.html>`__
     - Устанавливает текст для отображения ложного значения.
   * - `getTrueText <BooleanFormat.getTrueText.html>`__
     - Возвращает текст для отображения истинного значения.
   * - `setTrueText <BooleanFormat.setTrueText.html>`__
     - Устанавливает текст для отображения истинного значения.


Example
-------

.. code:: js

    //js-demo
    format = new InfinniUI.BooleanFormat();
    format.setTrueText('Y');
    format.setFalseText('N');

    $elementForExample.append(format.formatValue(true));
    $elementForExample.append('<hr>');
    $elementForExample.append(format.formatValue(false));



.. toctree::
   :hidden:

   BooleanFormat.getFalseText.rst
   BooleanFormat.getTrueText.rst
   BooleanFormat.metadata.rst
   BooleanFormat.setFalseText.rst
   BooleanFormat.setTrueText.rst


.. include:: BooleanFormat.metadata.rst