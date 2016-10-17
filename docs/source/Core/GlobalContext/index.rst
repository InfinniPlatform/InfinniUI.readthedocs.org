GlobalContext
=============

Application global context. Context provides API to appication methods and properties that are used jointly.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``containers``
     - ``Object``
     - List of containers to view in mode ``OpenMode="Container"``.
   * - ``culture``
     - `Culture <../Culture/>`__
     - Language and regional settings.
   * - ``factory``
     - `ApplicationBuilder <../Builders/>`__
     - Common application `builder <../Builders/>`__.
   * - ``logger``
     - `Logger <../Logger/>`__
     - `Message logging service <../Logger/>`__.
   * - ``messageBus``
     - `MessageBus <../MessageBus/>`__
     - `Application message bus <../MessageBus/>`__ .
   * - ``session``
     - `Session <../Session/>`__
     -  `User session <../Session/>`__ provider.
   * - ``notificationSubsription``
     - `NotificationSubscriptions <../NotificationSubscriptions/>`__
     - Server notification service.


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `executeAction <GlobalContext.executeAction.html>`__
     - Fires up execution of an `action <../Actions/>`__.



.. toctree::
   :hidden:

   GlobalContext.executeAction.rst
