ActionFactory
=============

Создает и настраивает экшен из метаданных, для дальнейшего исполнения

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - actionMetadata
     - ``Object``
     -  Метаданные экшена
   * - builder
     -  `Билдер <../../Builders/>`__
     -  Билдер
   * - builderParams
     -  ``Object``
     -  Параметры билдера

Examples
--------

.. code:: js

    var actionFactory = InfinniUI.ActionFactory( actionMetadata, builder, builderParams );
