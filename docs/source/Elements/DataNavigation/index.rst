DataNavigation
==============

Панель навигации по данным.

Extends
-------

`Element <../../Core/Elements/Element>`__

Syntax
------

.. code:: js

    new DataNavigation(parent)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - parent
     - `Element <../../Core/Elements/Element>`__
     - Родительский `элемент <../../Core/Elements/Element>`__


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getDataSource <DataNavigation.getDataSource.html>`__
     - Возвращает `источник данных <../../Core/DataSources/BaseDataSource/>`__.
   * - `setDataSource <DataNavigation.setDataSource.html>`__
     - Устанавливает `источник данных <../../Core/DataSources/BaseDataSource/>`__.
   * - `getAvailablePageSizes <DataNavigation.getAvailablePageSizes.html>`__
     - Возвращает `коллекцию <../../Core/Collection/>`__ доступных размеров страниц.
   * - `getPageNumber <DataNavigation.getPageNumber.html>`__
     - Возвращает номер текущей страницы.
   * - `setPageNumber <DataNavigation.setPageNumber.html>`__
     - Устанавливает номер текущей страницы.
   * - `getPageSize <DataNavigation.getPageSize.html>`__
     - Возвращает размер страницы.
   * - `setPageSize <DataNavigation.setPageSize.html>`__
     - Устанавливает размер страницы.
   * - `getPageCount <DataNavigation.getPageCount.html>`__
     - Возвращает количество страниц.
   * - `setPageCount <DataNavigation.setPageCount.html>`__
     - Устанавливает количество страниц.
   * - `getIsDataReady <DataNavigation.getIsDataReady.html>`__
     - Возвращает значение о том, готовы данные или нет.
   * - `setIsDataReady <DataNavigation.setIsDataReady.html>`__
     - Устанавливает значение о том, готовы данные или нет.


Events
------

.. list-table::
   :header-rows: 1

   * - `onPageSizeChanged <DataNavigation.onPageSizeChanged.html>`__
     - `Обработчик события <../../Core/Script/>`__ о том, что размер страницы изменился.
   * - `onPageNumberChanged <DataNavigation.onPageNumberChanged.html>`__
     - `Обработчик события <../../Core/Script/>`__ о том, что номер страницы изменился.

