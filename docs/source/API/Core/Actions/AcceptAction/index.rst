AcceptAction
============

Устанавливает в качестве результата работы родительского
`представления <../../Elements/View/>`__ значение
`DialogResult.accepted <../../Elements/View/DialogResult/>`__.

Extends
-------

`BaseAction <../BaseAction/>`__

Syntax
------

.. code:: js

    new AcceptAction(parentView)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - parentView
     - `View <../../Elements/View/>`__
     -  Родительское представление 


Properties
----------

Нет

Examples
--------

.. code:: js

    var acceptAction = new AcceptAction(parentView);
    acceptAction.execute(); //parentView.getDialogResult() === DialogResult.accepted

See Also
--------

-  `CancelAction <../CancelAction/>`__
