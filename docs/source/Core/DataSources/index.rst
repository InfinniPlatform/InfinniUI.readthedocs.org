DataSources
===========

Web interface is always linked with certain type of data. To work with data InfinniUI uses Data Sources. 
Each Data Source implements `base API <BaseDataSource/>`_, but each type of Data Source also has particular functions.

Data source provides the following closely related functionality:

-  Incapsulates Data Provider
-  Incapsulates Tracking Changes
-  Creates, reads, updates and deletes data (CRUD)
-  Page navigation Страничная навигация по данным (Paging)
-  Provides Data Filtering
-  Provides Data Validation

At this moment a few data sources can be outlined that can work out the most of visual data representaion tasks.

-  `BaseDataSource <BaseDataSource/>`__ - base Data Source type.
-  `ObjectDataSource <ObjectDataSource/>`__ - Data Source type for any type of data array.
-  `RestDataSource <RestDataSource/>`__ - Data Source for any http-like data services.
-  `DocumentDataSource <DocumentDataSource/>`__ -  InfinniPlatform document Data Source.


.. toctree::
   :hidden:

   BaseDataSource/index.rst
   DocumentDataSource/index.rst
   ObjectDataSource/index.rst
   RestDataSource/index.rst
