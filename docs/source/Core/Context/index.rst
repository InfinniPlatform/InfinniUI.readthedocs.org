ViewContext
===========

Контекст представления - программный объект, который хранит состояние
представления и предоставляет строго определенный API для доступа к
элементам представления. Вызов любого прикладного скрипта или
обработчика события сопровождается передачей ему контекста
представления. Контекст создается для каждого экземпляра представления и
время его жизни определяется временем жизни соответствующего экземпляра
представления.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `view <ViewContext.view.html>`__
     - Возвращает `представление <../Elements/View/>`__ контекста
   * - `global <ViewContext.global.html>`__
     - Возвращает `глобальный контекст приложения <../GlobalContext/>`__
   * - `messageBus <ViewContext.messageBus.html>`__
     - Возвращает `шину сообщений представления <../MessageBus/>`__
   * - `scripts <ViewContext.scripts.html>`__
     - Возвращает ассоциативный список `скриптов представления <../Script/>`__
   * - `parameters <ViewContext.parameters.html>`__
     - Возвращает ассоциативный список `параметров представления <../Parameters/>`__
   * - `dataSources <ViewContext.dataSources.html>`__
     - Возвращает ассоциативный список `источников данных представления <../DataSources/BaseDataSource/>`__
   * - `controls <ViewContext.controls.html>`__
     - Возвращает ассоциативный список `визуальных элементов представления <../Elements/Element/>`__



.. toctree::
   :hidden:

   ViewContext.controls.rst
   ViewContext.dataSources.rst
   ViewContext.global.rst
   ViewContext.messageBus.rst
   ViewContext.parameters.rst
   ViewContext.scripts.rst
   ViewContext.view.rst
