DatePicker
==========

Редактор даты. Значением данного элемента всегдя является UNIX time -
количество секунд, прошедших с полуночи (00:00:00 UTC) 1 января 1970
года.

Extends
-------

`DateTimePicker <../DateTimePicker/>`__

Syntax
------

.. code:: js

    new DatePicker(parent)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``parent``
     - `Element <../../Core/Elements/Element>`__
     - Родительский `элемент <../../Core/Elements/Element/>`__.


.. code:: js

    //js-demo

    //  Format
    var format = new DateTimeFormat("d");
    format.setOptions({TimeZone: 0});
    var displayFormat = function (context, args) {
        return format.formatValue(args.value);
    }

    //  EditMask
    var editMask = new DateTimeEditMask();
    editMask.mask = "d";
    editMask.format = format;

    //  DateTimePicker
    var datePicker = new DatePicker();
    datePicker.setDisplayFormat(displayFormat);
    datePicker.setEditMask(editMask);
    datePicker.setMinValue(new Date());   // Set minimum value
    datePicker.onValueChanged(function (context, args) {
        datePicker.setHintText("New Value: " + args.newValue);
        datePicker.setErrorText("Min Value: " + datePicker.getMinValue());
        datePicker.setWarningText("Max Value: " + datePicker.getMaxValue());
    });

    //  Render
    $elementForExample.append(datePicker.render());

See Also
--------

-  `TimePicker <../TimePicker/>`__
-  `DateTimePicker <../DateTimePicker/>`__
