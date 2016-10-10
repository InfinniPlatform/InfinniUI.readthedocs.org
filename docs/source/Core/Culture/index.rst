Culture
=======

Культура (языковые и региональные настройки).

Культура предоставляет сведения о наименовании культуры, а также о
формате представления значений для различных типов данных.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - name
     - ``String``
     - `Наименование культуры <http://tools.ietf.org/html/rfc5646>`__.
   * - caption
     - ``String``
     - Отображаемое наименование культуры.
   * - dateTimeFormatInfo
     - `DateTimeFormatInfo <Culture.dateTimeFormatInfo.html>`__
     - Сведения о формате представления даты и времени.
   * - numberFormatInfo
     - `NumberFormatInfo <Culture.numberFormatInfo.html>`__
     - Сведения о формате представления числовых значений.



.. toctree::
   :hidden:

   Culture.dateTimeFormatInfo.rst
   Culture.dateTimeFormatting.rst
   Culture.numberFormatInfo.rst
   Culture.numberFormatting.rst
