InlineScriptFactory
=============

Создает и настраивает inline script из метаданных, для дальнейшего исполнения

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - scriptBody
     - ``String``
     -  Тело скрипта
   * - builder
     -  `Билдер <../../Builders/>`__
     -  Билдер
   * - builderParams
     -  ``Object``
     -  Параметры билдера

Examples
--------

.. code:: js

    var inlineScript = InfinniUI.InlineScriptFactory( scriptBody, builder, builderParams );
