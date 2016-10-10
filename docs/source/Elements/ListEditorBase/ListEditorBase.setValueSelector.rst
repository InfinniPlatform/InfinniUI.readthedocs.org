ListEditorBase.setValueSelector
===============================

Устанавливает `функцию <../Core/Script/>`__ выборки из элемента
коллекции значимой части.

Description
-----------

Устанавливает `функцию <../Core/Script/>`__ выборки значения для
элемента коллекции, который передается в параметре ``args.value``.

Syntax
------

.. code:: js

    ListEditorBase.setValueSelector(selector);

Returns
~~~~~~~

Нет

Examples
--------

.. code:: js

    var idSelector = function (context, args) {
        var item = args.value;
        return item ? item.id : null;
    };

    ListEditorBase.setValueSelector(idSelector);

See Also
--------

-  `setValueSelector() <ListEditorBase.getValueSelector.html>`__
