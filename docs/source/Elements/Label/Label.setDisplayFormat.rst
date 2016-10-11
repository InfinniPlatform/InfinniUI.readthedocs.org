Label.setDisplayFormat
======================

Устанавливает `функцию <../Core/Script/>`__ форматирования
`значения <EditorBase/EditorBase.getValue.html>`__ для отображения.

Syntax
------

.. code:: js

    Label.setDisplayFormat(format)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - format
     - `функция <../Core/Script/>`__
     - `Функция <../Core/Script/>`__ форматирования `значения <EditorBase/EditorBase.getValue.html>`__ для отображения.


Returns
~~~~~~~

нет

Examples
--------

.. code:: js

    //js-demo
    var label = new Label();
    var formaToLowerCase = function (context, args) {
        return String(args.value).toLowerCase();
    }
    label.setDisplayFormat(formaToLowerCase);
    label.setValue('sOmEcAsE');

    $elementForExample.prepend(label.render());

See Also
--------

-  `getDisplayFormat() <Label.getDisplayFormat.html>`__
