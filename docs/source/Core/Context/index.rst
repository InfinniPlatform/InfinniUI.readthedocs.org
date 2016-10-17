ViewContext
===========

View context is a program object which stores its view state and provides API to access to view elements. Any applied script  or event processor invocation accompanied by view context transmittance. Context is created for each view instance and its lifetime is defined by corresponding life time view instance.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `view <ViewContext.view.html>`__
     - Returns `View <../Elements/View/>`__ context
   * - `global <ViewContext.global.html>`__
     - Returns `global application context <../GlobalContext/>`__
   * - `messageBus <ViewContext.messageBus.html>`__
     - Returns `Message Bus View <../MessageBus/>`__
   * - `scripts <ViewContext.scripts.html>`__
     - Returns associative list of `Script View <../Script/>`__
   * - `parameters <ViewContext.parameters.html>`__
     - Returns associative list of `Parameters View <../Parameters/>`__
   * - `dataSources <ViewContext.dataSources.html>`__
     - Returns associative list of `Data Sources View <../DataSources/BaseDataSource/>`__
   * - `controls <ViewContext.controls.html>`__
     - Returns associative list of `Visual View Elements<../Elements/Element/>`__



.. toctree::
   :hidden:

   ViewContext.controls.rst
   ViewContext.dataSources.rst
   ViewContext.global.rst
   ViewContext.messageBus.rst
   ViewContext.parameters.rst
   ViewContext.scripts.rst
   ViewContext.view.rst
