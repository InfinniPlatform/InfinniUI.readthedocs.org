TreeView.setParentSelector
==========================

Устанавливает `функцию <../../../Core/Script/>`__ выборки из элемента
коллекции идентификатора родителя.

Syntax
------

.. code:: js

    TreeView.setParentSelector(value)

Parameters
~~~~~~~~~~

\|Name\|Type\|Description\|
``value``\ \|\ `Script <../../../Core/Script/>`__\ \|\ `Функция <../../../Core/Script/>`__
выборки из элемента коллекции идентификатора родителя.

Returns
~~~~~~~

Нет.

Examples
--------

.. code:: js

    var parentSelector = function (context, args) {
        return args.value ? args.value['parentId'] : null;
    }
    treeview.setParentSelector(parentSelector);

See Also
--------

-  `getParentSelector <../TreeView.getParentSelector/>`__
