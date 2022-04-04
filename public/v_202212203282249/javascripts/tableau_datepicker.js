// -----------------------------------------------------------------------------
// 
// This file is the copyrighted property of Tableau Software and is protected 
// by registered patents and other applicable U.S. and international laws and 
// regulations.
// 
// Unlicensed use of the contents of this file is prohibited. Please refer to 
// the NOTICES.txt file for further details.
// 
// -----------------------------------------------------------------------------
// Depends on:
//   Globalize
//   Tableau.DateUtilities
(function($) {

  var DatePicker = function(settings) {
    this.firstDayOfWeek = Globalize.culture().calendar.firstDay;
    this.lastDayOfWeek = this._addDayOfWeek(this.firstDayOfWeek, 6);
    this.shortDayOfWeekNames = Globalize.culture().calendar.days.namesShort;

    var now = new Date();
    this.today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    this.showDate = settings.showDate
      ? new Date(settings.showDate.getFullYear(), settings.showDate.getMonth(), 1)
      : new Date(this.today.getFullYear(), this.today.getMonth(), 1);
    this.selectedDate = settings.selectedDate
      ? new Date(settings.selectedDate.getFullYear(), settings.selectedDate.getMonth(), settings.selectedDate.getDate())
      : null;

    this.$el = $("<span>").addClass("tab-datepicker");
    this._makeHeader().appendTo(this.$el);
    this._makeMonthTable().appendTo(this.$el);
    
    this.$el.prop('unselectable', 'on');
    this.$el.find('*').prop('unselectable', 'on');

    this._update();
  }
  DatePicker.prototype = {
    _makeHeader: function() {
      var header = $("<div>").addClass("tab-datepicker-header");
      
      this.monthYearBox = $("<span>")
        .addClass("tab-datepicker-header-text")
        .appendTo(header);

      this.prevMonthButton = $("<span>")
        .addClass("tab-datepicker-header-button")
        .addClass("tab-datepicker-prev-month-button")
        .text("\u25c0") // BLACK LEFT-POINTING TRIANGLE
        .appendTo(header)
        .on("click", $.proxy(this._showPrevMonth, this));

      this.nextMonthButton = $("<span>")
        .addClass("tab-datepicker-header-button")
        .addClass("tab-datepicker-next-month-button")
        .text("\u25b6") // BLACK RIGHT-POINTING TRIANGLE
        .appendTo(header)
        .on("click", $.proxy(this._showNextMonth, this));

      return header;
    },
    _makeMonthTable: function() {
      this.monthTable = $("<table>").addClass("tab-datepicker-month-table");
      this.monthTable.on("click", ".tab-datepicker-day-cell", this, this._dayCellClicked);
      return this.monthTable;
    },
    _dayCellClicked: function(event) {
      event.data._selectDay($(this));
    },
    _selectDay: function(cell) {
      this.monthTable.find(".tab-datepicker-day-cell-selected").removeClass("tab-datepicker-day-cell-selected");
      cell.addClass("tab-datepicker-day-cell-selected");
      this.selectedDate = new Date(this.showDate.getFullYear(), this.showDate.getMonth(), cell.data("dayOfMonth"));
      this.$el.trigger("dateSelected", [this.selectedDate]);
    },
    _showPrevMonth: function() {
      if (this.showDate.getMonth() === 0) {
        if (this.showDate.getFullYear() > 1) {
          this.showDate.setMonth(11);
          this.showDate.setFullYear(this.showDate.getFullYear() - 1);
        }
      } else {
        this.showDate.setMonth(this.showDate.getMonth() - 1);
      }
      this._update();
    },
    _showNextMonth: function() {
      if (this.showDate.getMonth() === 11) {
        this.showDate.setMonth(0);
        this.showDate.setFullYear(this.showDate.getFullYear() + 1);
      } else {
        this.showDate.setMonth(this.showDate.getMonth() + 1);
      }
      this._update();
    },
    _update: function() {
      this._updateHeader();
      this._updateMonthTable();
    },
    _updateHeader: function() {
      this.monthYearBox.text(Globalize.format(this.showDate, "Y"));
    },
    _updateMonthTable: function() {
      var daysInMonth = new Date(this.showDate.getFullYear(), this.showDate.getMonth() + 1, 0).getDate();
      var startDayOfWeek = new Date(this.showDate.getFullYear(), this.showDate.getMonth(), 1).getDay();
      var dayOfMonth, dayOfWeek, date;
      var thead, tbody, tr, td;

      this.monthTable.html("");

      // header
      thead = $("<thead>").appendTo(this.monthTable);
      tr = $("<tr>").appendTo(thead);
      dayOfWeek = this.firstDayOfWeek;
      do {
        $("<th>").addClass("tab-datepicker-header-cell").text(this.shortDayOfWeekNames[dayOfWeek]).appendTo(tr);
        dayOfWeek = this._addDayOfWeek(dayOfWeek, 1);
      } while (dayOfWeek !== this.firstDayOfWeek);

      // body
      tbody = $("<tbody>").appendTo(this.monthTable)
      tr = $("<tr>").appendTo(tbody);
      dayOfWeek = this.firstDayOfWeek;
      dayOfMonth = 1;

      // leading empty cells
      while (dayOfWeek !== startDayOfWeek) {
        $("<td>").appendTo(tr);
        dayOfWeek = this._addDayOfWeek(dayOfWeek, 1);
      }

      // day cells
      date = new Date(this.showDate.getFullYear(), this.showDate.getMonth(), dayOfMonth);
      while (dayOfMonth <= daysInMonth) {
        td = $("<td>").addClass("tab-datepicker-day-cell").text(dayOfMonth).appendTo(tr);
        td.data("dayOfMonth", dayOfMonth);
        if (Tableau.DateUtilities.sameDay(date, this.today)) {
          td.addClass("tab-datepicker-day-cell-today");
        }
        if (this.selectedDate && Tableau.DateUtilities.sameDay(date, this.selectedDate)) {
          td.addClass("tab-datepicker-day-cell-selected");
        }
        ++dayOfMonth;
        date.setDate(dayOfMonth);
        dayOfWeek = this._addDayOfWeek(dayOfWeek, 1);
        if (dayOfWeek === this.firstDayOfWeek) {
          tr = $("<tr>").appendTo(tbody);
        }
      }

      // trailing empty cells
      do {
        $("<td>").appendTo(tr);
        dayOfWeek = this._addDayOfWeek(dayOfWeek, 1);
      } while (dayOfWeek !== this.firstDayOfWeek);
    },
    _addDayOfWeek: function(dayOfWeek, days) {
      return (dayOfWeek + days) % 7;
    }
  };

  this.Tableau || (this.Tableau = {});
  this.Tableau.DatePicker = DatePicker;

}).call(this, jQuery);