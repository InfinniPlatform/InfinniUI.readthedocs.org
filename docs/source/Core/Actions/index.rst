Actions
=======

Actions are used to perform typical actions in infinniUI. All actions form 
 `base API <BaseAction/>`__.

At this moment Infinni UI has got the following actions:

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `OpenAction <OpenAction/>`__
     - Opens `view <../Elements/View/>`__
   * - `AcceptAction <AcceptAction/>`__
     - Sets as a work result of  `View <../Elements/View/>`__ value `DialogResult.accepted <../Elements/View/DialogResult/>`__
   * - `CancelAction <CancelAction/>`__
     - Sets as a work result of `View <../Elements/View/>`__ value `DialogResult.canceled <../Elements/View/DialogResult/>`__
   * - `AddAction <AddAction/>`__
     - Creates a new element in  `Data Source <../DataSources>`__
   * - `EditAction <EditAction/>`__
     - Edits element from  `Data Source <../DataSources>`__
   * - `DeleteAction <DeleteAction/>`__
     - Deletes element from `Data Sources <../DataSources>`__
   * - `UpdateAction <UpdateAction/>`__
     - Updates list of elements `Data Sources <../DataSources>`__
   * - `SaveAction <SaveAction/>`__
     - Saves changes fro each current element in `Data Source <../DataSources>`__
   * - `SelectAction <SelectAction/>`__
     - Fills a field of element in `Data Source <../DataSources>`__ by data from other `Data Source <../DataSources>`__ element
   * - `ServerAction <ServerAction/>`__
     - Sends http request
   * - `RouteToAction <RouteToAction/>`__
     - Follows a pre-defined route



.. toctree::
   :hidden:

   AcceptAction/index.rst
   AddAction/index.rst
   BaseAction/index.rst
   CancelAction/index.rst
   DeleteAction/index.rst
   EditAction/index.rst
   OpenAction/index.rst
   RouteToAction/index.rst
   SaveAction/index.rst
   SelectAction/index.rst
   ServerAction/index.rst
   UpdateAction/index.rst
