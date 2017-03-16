Localizations
=============

Localization is language and regional settings.

Localization represents info on localization name and its view formats for various data types.

``InfinniUI.localizations`` is map of localizations settings. InfinniUI.config.lang specifies current language and regional settings. Current localization is stored in ``InfinniUI.localized``.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - name
     - ``String``
     - `Localization name <http://tools.ietf.org/html/rfc5646>`__.
   * - caption
     - ``String``
     - Original localization name.
   * - dateTimeFormatInfo
     - `DateTimeFormatInfo <Localizations.dateTimeFormatInfo.html>`__
     - Info on date and time format
   * - numberFormatInfo
     - `NumberFormatInfo <Localizations.numberFormatInfo.html>`__
     - Info on numeric view formats.


Example
-------

.. code:: js

    InfinniUI.localizations = {
        'en-US': {
            caption: 'English',
            name: 'en-US',
            dateTimeFormatInfo: {
                monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
                dayNames: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                firstDayOfWeek: 0
            },
            numberFormatInfo: {
                numberDecimalSeparator: '.',
                numberGroupSeparator: ','
            },
            strings: {
              ImageBox: {
                chooseImage: 'Choose photo',
                imageSizeTooBig: 'Size of the chosen file {chosen-size}MB is more than allowed {permitted-size}MB',
                incorrectFormat: 'Uploading of this file type is forbidden'
              },
              FileBox: {
                  noFile: 'Choose file...',
                  fileSizeTooBig: 'Size of the chosen file {chosen-size}MB is more than allowed {permitted-size}MB',
                  incorrectFormat: 'Uploading of this file type is forbidden'
              },
              custom: {
                button: {
                  name: "Text for button",
                  tooltip: "Tooltip"
                },
                anotherButton: {
                  name: "Another text for button"
                }
              }
            }
        },

        'ru-RU': {
            caption: 'Русский',
            name: 'ru-RU',
            dateTimeFormatInfo: {
                monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
                dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
                firstDayOfWeek: 1
            },
            numberFormatInfo: {
                numberDecimalSeparator: ',',
                numberGroupSeparator: ' '
            },
            strings: {
              ImageBox: {
                  chooseImage: 'Выбрать изображение',
                  imageSizeTooBig: 'Размер выбранного файла {chosen-size}Мб больше допустимого размера {permitted-size}Мб',
                  incorrectFormat: 'Загрузка данного типа файла не разрешена'
              },
              FileBox: {
                  noFile: 'Файл не выбран...',
                  fileSizeTooBig: 'Размер выбранного файла {chosen-size}Мб больше допустимого размера {permitted-size}Мб',
                  incorrectFormat: 'Загрузка данного типа файла не разрешена'
              },
              custom: {
                button: {
                  name: "Текст для кнопки",
                  tooltip: "Тултип"
                },
                anotherButton: {
                  name: "Другой текст для кнопки"
                }
              }
            }
        }
    }


See Also
--------

-  `Localizations.dateTimeFormatInfo <Localizations.dateTimeFormatInfo.html>`__
-  `Localizations.dateTimeFormatting <Localizations.dateTimeFormatting.html>`__
-  `Localizations.numberFormatInfo <Localizations.numberFormatInfo.html>`__
-  `Localizations.numberFormatting <Localizations.numberFormatting.html>`__

.. toctree::
   :hidden:

   Localizations.dateTimeFormatInfo.rst
   Localizations.dateTimeFormatting.rst
   Localizations.numberFormatInfo.rst
   Localizations.numberFormatting.rst