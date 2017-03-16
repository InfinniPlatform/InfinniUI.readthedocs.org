RouterService
=============

RouterService allows to set up routing for Single Page Application

It is stored in ``InfinniUI.RouterService``.

Description
-----------

RouterService allows to set up routing at the
client side and link this with events,  For browsers not supporting
History API, RouterService does the same by implementing fragmentary URL.


While the page is loading and after your application opens
HomePage view, all routes will be created as defined in
`InfinniUI.config.Routes <../../Config/>`__,
router will be automatically fired up in accordance with History API settings from
`InfinniUI.config.HistoryAPI <../../Config/>`__.
RouterService is a harness for `Backbone.Router <http://backbonejs.org/#Router>`_.

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
   * - `setContext() <RouterService.setContext.html>`__
     - Set Context used in scripts
   * - `setParams() <RouterService.setParams.html>`__
     - Set Params used in scripts
   * - `addParams() <RouterService.addParams.html>`__
     - Add Params used in scripts


.. toctree::
   :hidden:

   RouterService.getLinkByName.rst
   RouterService.startRouter.rst
   RouterService.setContext.rst
   RouterService.setParams.rst
   RouterService.addParams.rst
