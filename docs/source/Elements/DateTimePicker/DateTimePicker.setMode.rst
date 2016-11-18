DateTimePicker.setMode
======================

Устанавливает режим работы элемента.

Syntax
------

.. code:: js

    DateTimePicker.setMode(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``value``
     - ``String``
     - Режим работы элемента: ``Date``, ``Time`` или ``DateTime``.


Examples
--------

.. code:: js

    //js-demo

    //  Format
    var format = new InfinniUI.DateTimeFormat("G");
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
    dtPicker.setValue("2016-07-04T17:00");
    dtPicker.setDisplayFormat(displayFormat);
    dtPicker.setEditMask(editMask);
    dtPicker.onValueChanged(function (context, args) {
        dtPicker.setHintText("New Value: " + args.newValue);
    });

    //  Render
    $elementForExample.append(dtPicker.render());

See Also
--------

-  `getMode() <DateTimePicker.getMode.html>`__
