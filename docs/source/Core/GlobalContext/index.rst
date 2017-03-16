GlobalContext
=============

Application global context. Context provides API to appication methods and properties that are used jointly.

Variable ``InfinniUI.global`` contains global context. 

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
   * - ``localizations``
     - ``Object``
     - Map, where key is localization name and value is `localization <../Localizations/>`__.
   * - ``localized``
     - `Localization <../Localizations/>`__
     - Current language and regional settings. It stores value from InfinniUI.global.localizations associated with InfinniUI.config.lang.
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
