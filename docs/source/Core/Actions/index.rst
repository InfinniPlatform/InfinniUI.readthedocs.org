Actions
=======

Для реализации типичных действий в Infinni UI используются Actions. 
Все действия реализуют `базовый API <BaseAction/>`__.

На данный момент в Infinni UI реализованы следующие действия:

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `OpenAction <OpenAction/>`__
     - Открывает `представление <../Elements/View/>`__
   * - `AcceptAction <AcceptAction/>`__
     - Устанавливает в качестве результата работы `представления <../Elements/View/>`__ значение `DialogResult.accepted <../Elements/View/DialogResult/>`__
   * - `CancelAction <CancelAction/>`__
     - Устанавливает в качестве результата работы `представления <../Elements/View/>`__ значение `DialogResult.canceled <../Elements/View/DialogResult/>`__
   * - `AddAction <AddAction/>`__
     - Добавляет новый элемент в `источник данных <../DataSources>`__
   * - `CreateItemAction <CreateItemAction/>`__
     - Создает новый элемент в `источнике данных <../DataSources>`__
   * - `EditAction <EditAction/>`__
     - Редактирует элемент из `источника данных <../DataSources>`__
   * - `DeleteAction <DeleteAction/>`__
     - Удаляет элемент из `источника данных <../DataSources>`__
   * - `UpdateAction <UpdateAction/>`__
     - Обновляет список элементов `источника данных <../DataSources>`__
   * - `SaveAction <SaveAction/>`__
     - Сохраняет изменения для текущего элемента в `источнике данных <../DataSources>`__
   * - `SelectAction <SelectAction/>`__
     - Заполняет поле элемента в `источнике данных <../DataSources>`__ данными из другого элемента `источника данных <../DataSources>`__
   * - `ServerAction <ServerAction/>`__
     - Отправляет http запрос
   * - `RouteToAction <RouteToAction/>`__
     - Переходит по заданному маршруту



.. toctree::
   :hidden:

   AcceptAction/index.rst
   AddAction/index.rst
   CreateItemAction/index.rst
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
