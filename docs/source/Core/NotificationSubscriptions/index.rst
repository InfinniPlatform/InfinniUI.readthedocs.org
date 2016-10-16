NotificationSubscriptions
=========================

Service allows to subscribe to server notifications. 
NotificationSubscriptions based on signalR components - a set of server and clients
libraries providing two way real time interaction between server and client.

Description
-----------

Regulary working with a web-page, both request and transmission is initiated by a client. However in some cases updating data on the web-page should be done timely. To inform clients about changes so called push-notifications are used. SignaR can organize those. NotificationSubscriptions service allows subscribe to notifications from external services made with SignalR.

Parameters
~~~~~~~~~~

No

Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `subscribe <NotificationSubscriptions.subscribe.html>`__
     - Adds subsciption to event
   * - `unsubscribe <NotificationSubscriptions.unsubscribe.html>`__
     - Removes subscribtion to event
   * - `startConnection <NotificationSubscriptions.startConnection.html>`__
     - Sets server connection and adds listeners in accordance to certain keys
   * - `stopConnection <NotificationSubscriptions.stopConnection.html>`__
     - Removes server connection
   * - `reconnection <NotificationSubscriptions.reconnection.html>`__
     - Re-establishes conection to a server with certain parameters
   * - `isDisconnected <NotificationSubscriptions.isDisconnected.html>`__
     - Checks if the connection is removed
   * - `on <NotificationSubscriptions.on.html>`__
     - Checks subscription signalR status



.. toctree::
   :hidden:

   NotificationSubscriptions.isDisconnected.rst
   NotificationSubscriptions.on.rst
   NotificationSubscriptions.reconnection.rst
   NotificationSubscriptions.startConnection.rst
   NotificationSubscriptions.stopConnection.rst
   NotificationSubscriptions.subscribe.rst
   NotificationSubscriptions.unsubscribe.rst
