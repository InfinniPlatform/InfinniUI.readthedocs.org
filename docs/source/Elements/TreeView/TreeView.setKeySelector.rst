TreeView.setKeySelector
=======================

Устанавливает `функцию <../../Core/Script/>`__ выборки из элемента
коллекции идентификатора.

Syntax
------

.. code:: js

    TreeView.setKeySelector(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``value``
     - `Script <../../Core/Script/>`__
     - `Функция <../../Core/Script/>`__ выборки из элемента коллекции идентификатора.


Returns
~~~~~~~

Нет.

Examples
--------

.. code:: js

    var keySelector = function (context, args) {
        return args.value ? args.value['Id'] : null;
    }
    treeview.setKeySelector(keySelector);

See Also
--------

-  `getKeySelector <TreeView.getKeySelector.html>`__
