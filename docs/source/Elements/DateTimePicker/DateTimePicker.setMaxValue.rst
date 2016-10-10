DateTimePicker.setMaxValue
==========================

Устанавливает максимальное значение для ввода.

Syntax
------

.. code:: js

    DateTimePicker.setMaxValue(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``value``
     - ``Date``
     - Максимальное значение для ввода.


Examples
--------

.. code:: js

    //js-demo

    //  Format
    var format = new DateTimeFormat("G");
    var displayFormat = function (context, args) {
        return format.formatValue(args.value);
    }

    //  EditMask
    var editMask = new DateTimeEditMask();
    editMask.mask = "G";
    editMask.format = format;

    //  DateTimePicker
    var dtPicker = new DateTimePicker();
    dtPicker.setMode("DateTime");
    dtPicker.setMaxValue(new Date());   // Set maximum value
    dtPicker.setDisplayFormat(displayFormat);
    dtPicker.setEditMask(editMask);
    dtPicker.onValueChanged(function (context, args) {
        dtPicker.setHintText("New Value: " + args.newValue);
    });

    //  Render
    $elementForExample.append(dtPicker.render());

See Also
--------

-  `getMaxValue() <DateTimePicker.getMaxValue.html>`__
