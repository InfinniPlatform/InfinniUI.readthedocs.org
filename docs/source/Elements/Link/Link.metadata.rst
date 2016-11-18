Link.metadata
-------------

Метаданные типа `Link <./>`__.

Properties
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Default
     - Description
   * - Href
     - ``String``
     - `Object <#hrefmetadata>`__
     - "javascript:;"
     - Адрес документа, на который должна переводить ссылка.
   * - Target
     - ``String``
     - "self"
     - Режим загрузки документа. Может принимать следующие значения: ● blank - загружает страницу в новое окно браузера, ● self - загружает страницу в текущее окно, ● parent - загружает страницу во фрейм-родитель (если фреймов нет, то работает как self), ● top - отменяет все фреймы и загружает страницу в полном окне браузера (если фреймов нет, то работает как self).


Href.metadata
"""""""""""""

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - Name\*
     - ``String``
     - Название маршрута из `InfinniUI.config.Routes </Core/InfinniUI/InfinniUI.config.Routes.html>`__.
   * - Params
     - ``Array``.<`Href.paramObject <#hrefparamobject>`__>
     - Параметры запроса.
   * - Query
     - ``Array``.<`Href.paramObject <#hrefparamobject>`__>
     - Параметры поиска.


\* Обязательное свойство.

Href.paramObject
""""""""""""""""

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - Name*
     - ``String``
     - Название параметра.
   * - Value*
     - ``String``
     - `DataBinding </Core/DataBinding/DataBinding.metadata.html>`__
     - Значение параметра.


\* Обязательное свойство.

Examples
~~~~~~~~

Простая ссылка:

::

  //infinni-ui-demo
  {
    "Items": [
    //infinni-ui-display-begin
  {
    "Link": {
      "Text": "link",
      "Href": "http://infinnity.ru/",
      "Target": "blank"
    }
  }
    //infinni-ui-display-end
    ]
  }

Рассмотрим случай, когда ссылка должна изменяться в зависимости от неких
параметров. Тогда в массив
`InfinniUI.config.Routes </Core/InfinniUI/InfinniUI.config.Routes.html>`__
необходимо добавить соответсвующий путь. Пусть

.. code:: js

    window.InfinniUI.config.Routes = [
      {
        Name: "mainPageRouter",
        Path: "/publicPages/<% pageName %>/?userId=<% userId %>&date=<% date %>",
        Action: "{ routeCallback(context, args) }"
      }
    ];

Определим соответсвующую ссылку

.. code:: json

    {
      "Link": {
        "Text": "link",
        "Href": {
          "Name": "mainPageRouter",
          "Params": [
            {
              "Name": "pageName",
              "Value": "patient"
            }
          ],
          "Query": [
            {
              "Name": "date",
              "Value": "2016-12-16"
            },
            {
              "Name": "userId",
              "Value": {
                "Source": "usersDataSource",
                "Property": "$.id"
              }
            }
          ]
        },
        "Target": "blank"
      }
    }
