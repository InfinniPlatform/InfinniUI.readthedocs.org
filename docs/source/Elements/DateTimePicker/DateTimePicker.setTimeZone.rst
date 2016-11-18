DateTimePicker.setTimeZone
==========================

Устанавливает смещение часового пояса. Смещение задается разностью в
минутах между временем UTC и местным временем.

Syntax
------

.. code:: js

    DateTimePicker.setTimeZone(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``value``
     - ``Integer``
     - Смещение часового пояса.


Examples
--------

.. code:: js

    //js-demo

    //  Format
    var format = new InfinniUI.DateTimeFormat("G");
    var timeZone = -180; // UTC+3
    format.setOptions({TimeZone: timeZone});    
    var displayFormat = function (context, args) {
        return format.formatValue(args.value);
    }

    //  EditMask
    var editMask = new InfinniUI.DateTimeEditMask();
    editMask.mask = "G";
    editMask.format = format;

    //  DateTimePicker
    var dtPicker = new InfinniUI.DateTimePicker();
    dtPicker.setMode("DateTime");
    dtPicker.setTimeZone(timeZone);
    dtPicker.setDisplayFormat(displayFormat);
    dtPicker.setEditMask(editMask);
    dtPicker.onValueChanged(function (context, args) {
        dtPicker.setHintText("New Value: " + args.newValue);
        dtPicker.setWarningText("TimeZone: " + dtPicker.getTimeZone());
    });

    //  Render
    $elementForExample.append(dtPicker.render());

See Also
--------

-  `getTimeZone() <DateTimePicker.getTimeZone.html>`__
