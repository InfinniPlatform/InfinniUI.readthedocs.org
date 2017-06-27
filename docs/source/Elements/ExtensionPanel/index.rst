ExtensionPanel
==============

Контейнер для встраивания произвольных прикладных элементов.

Description
-----------

Для реализации функционала, не предусмотренного платформой, нужно
зарегистрировать с помощью `InfinniUI.extensionPanels.register <ExtensionPanelsRegister/InfinniUI.extensionPanels.register.html>`__
функцию-конструктор, экземпляры которой будут добавлять 
нужный элемент, а затем указать имя функции-конструктора
ExtensionPanel в поле `ExtensionName <ExtensionPanel.setExtensionName.html>`__.

Extends
-------

`Container </Core/Elements/Container/>`__

Syntax
------

.. code:: js

    new ExtensionPanel(parent)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - parent
     - `Element <../../Core/Elements/Element>`__
     - Родительский элемент


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `setExtensionName <ExtensionPanel.setExtensionName.html>`__
     - Устанавливает название прикладного элемента
   * - `setContext <ExtensionPanel.setContext.html>`__
     - Устанавливает `контекст представления </Core/Context/>`__
   * - `setBuilder <ExtensionPanel.setBuilder.html>`__
     - Устанавливает `Builder </Core/Builders/>`__
   * - `getParameters <ExtensionPanel.getParameters.html>`__
     - Возвращает `параметры </Core/Parameters/>`__, передаваемые в прикладной элемент
   * - `setParameters <ExtensionPanel.setParameters.html>`__
     - Устанавливает `параметры </Core/Parameters/>`__, передаваемые в прикладной элемент


Events
------

Нет


.. include:: ExtensionPanel.metadata.rst

See Also
--------

-  `InfinniUI.extensionPanels <ExtensionPanelsRegister/>`__

.. toctree::
   :hidden:

   ExtensionPanelsRegister/index.rst
   ExtensionPanelsRegister/InfinniUI.extensionPanels.register.rst
   ExtensionPanelsRegister/InfinniUI.extensionPanels.getByName.rst
   ExtensionPanel.getParameters.rst
   ExtensionPanel.metadata.rst
   ExtensionPanel.setBuilder.rst
   ExtensionPanel.setContext.rst
   ExtensionPanel.setExtensionName.rst
   ExtensionPanel.setParameters.rst