CancelAction
============

Устанавливает в качестве результата работы родительского
`представления <../../Elements/View/>`__ значение
`DialogResult.canceled <../../Elements/View/DialogResult/>`__.

Extends
-------

`BaseAction <../BaseAction/>`__

Syntax
------

.. code:: js

    new CancelAction(parentView)

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

    var cancelAction = new CancelAction(parentView);
    cancelAction.execute(); //parentView.getDialogResult() === DialogResult.canceled

See Also
--------

-  `AcceptAction <../AcceptAction/>`__


.. toctree::
   :hidden:

   CancelAction.metadata.rst
