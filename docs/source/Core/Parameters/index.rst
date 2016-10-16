Parameters
==========

View parameter

Description
-----------

Parameters declared as views and used to exchange data between views.

Syntax
------

.. code:: js

    new Parameter(options);

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``options.view``
     - `View <../../Core/View/View>`__
     - Parent `view <../../Core/View/View>`__.


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getName <Parameter.getName.html>`__
     - Returns parameter name.
   * - `setName <Parameter.setName.html>`__
     - Sets parameter name.
   * - `getView <Parameter.getView.html>`__
     - Returns parent view.
   * - `getValue <Parameter.getValue.html>`__
     - Returns parameter value.
   * - `setValue <Parameter.setValue.html>`__
     - Sets parameter value.
   * - `getProperty <Parameter.getProperty.html>`__
     - Returns value of parameter attribute.
   * - `setProperty <Parameter.setProperty.html>`__
     - Sets value of parameter attribute.


Events
------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - ``onPropertyChanged``
     - Sets `event processor <../../Core/Script/>`__ that event remained unchanged.



.. toctree::
   :hidden:

   Parameter.getName.rst
   Parameter.getProperty.rst
   Parameter.getValue.rst
   Parameter.getView.rst
   Parameter.metadata.rst
   Parameter.setName.rst
   Parameter.setProperty.rst
   Parameter.setValue.rst


.. include:: Parameter.metadata.rst
