DataSources
===========

Каждый web-интерфейс, как правило, связано с какими-либо данными. Для
работы с данными в Infinni UI используются источники данных. Каждый
источник данных предоставляет `базовый API <BaseDataSource/>`__, который
может расширяться в зависимости от типа источника. Источник данных
реализует несколько взаимосвязанных аспектов:

-  Инкапсуляция работы с поставщиком данных (Data Provider)
-  Инкапсуляция отслеживания изменения данных (Tracking Changes)
-  Создание, чтение, обновление, удаление данных (CRUD)
-  Страничная навигация по данным (Paging)
-  Фильтрация данных (Filtering)
-  Проверка данных (Validation)

На данный момент выделено несколько типов источников данных, покрывающих
подавляющее количество задач работы с данными на уровне визуального
представления:

-  `BaseDataSource <BaseDataSource/>`__ - базовый тип источников данных
   представления.
-  `ObjectDataSource <ObjectDataSource/>`__ - источник данных
   представления для произвольного массива данных.
-  `LocalStorageDataSource <LocalStorageDataSource/>`__ - тип источника данных, 
   который хранит массив данных в локальном хранилище браузера.
-  `RestDataSource <RestDataSource/>`__ - источник данных представления
   для произвольных http-сервисов данных.
-  `DocumentDataSource <DocumentDataSource/>`__ - источник данных
   представления для документов InfinniPlatform.
   
.. toctree::
   :hidden:

   BaseDataSource/index.rst
   DocumentDataSource/index.rst
   ObjectDataSource/index.rst
   LocalStorageDataSource/index.rst
   RestDataSource/index.rst
