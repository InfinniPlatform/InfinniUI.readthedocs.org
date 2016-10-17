RouterService
=============

RouterService allows to set up routing for Single Page
Application

Description
-----------

RouterService allows to set up routing at the
client side and link this with events,  For browsers not supporting
History API, RouterService does the same by implementing fragmentary URL.


While the page is loading and after your application opens
HomePage view, all routes will be created as defined in
`InfinniUI.config.Routes <../InfinniUI/InfinniUI.config.html>`__,
router will be automatically fired up in accordance with History API settings from
`InfinniUI.config.HistoryAPI <../InfinniUI/InfinniUI.config.html>`__.
RouterService is a harness for Backbone.Router.

Parameters
~~~~~~~~~~

No

Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getLinkByName() <RouterService.getLinkByName.html>`__
     - Returns link by name path
   * - `startRouter() <RouterService.startRouter.html>`__
     - Starts routing



.. toctree::
   :hidden:

   RouterService.getLinkByName.rst
   RouterService.startRouter.rst
