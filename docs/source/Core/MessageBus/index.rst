MessageBus
==========

Message bus is a program object which shares infrastructure to exchange events (messages) between various view elements both visual and non-visual.

Description
-----------

Message bus is created for each view instance. Messages are sent asynchronously that is sender doesn't get acknowledgement when the message is finally processed. Message exchange within a single instance view doesn't affect the other view instances.

Each element both visual and non-visual may be a message source and/or be a message subscriber. The time when element will initiate a message sending depends on element working logic. The time when element will process a newly recieved message depends on element. Thus the moment when the message is sent and the moment when its processing is stopped is not determined perhaps the message has never been sent and perhaps will have never been processed). In other words, the only thing that message bus guarantees is delivery to all existing subscribers.

Syntax
------

.. code:: js

    new MessageBus(view)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``view``
     - `View <../Elements/View/>`__
     - Parent `view <../Elements/View/>`__ of message bus.


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getView <MessageBus.getView.html>`__
     - Returns parent `view <../Elements/View/>`__.
   * - `send <MessageBus.send.html>`__
     - Sends a message of a certain type.
   * - `subscribe <MessageBus.subscribe.html>`__
     - Subscribes to certain type messages.
   * - `unsubscribeByType <MessageBus.unsubscribeByType.html>`__
     - Unsubscribes from certain type messages.



.. toctree::
   :hidden:

   InfinniUIMessages.rst
   MessageBus.getView.rst
   MessageBus.send.rst
   MessageBus.subscribe.rst
   MessageBus.unsubscribeByType.rst
