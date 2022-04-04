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
(function($) {

  var DateUtilities = {
    millisecondsInDay: 1000 * 60 * 60 * 24,
    daysSinceEpoch: function(date) {
      return Math.floor(date.getTime() / this.millisecondsInDay);
    },
    sameDay: function(date1, date2) {
      return this.daysSinceEpoch(date1) === this.daysSinceEpoch(date2);
    },
    beforeDay: function(date1, date2) {
      return this.daysSinceEpoch(date1) < this.daysSinceEpoch(date2);
    },
    afterDay: function(date1, date2) {
      return this.daysSinceEpoch(date1) > this.daysSinceEpoch(date2);
    },
    onOrBeforeDay: function(date1, date2) {
      return this.daysSinceEpoch(date1) <= this.daysSinceEpoch(date2);
    },
    onOrAfterDay: function(date1, date2) {
      return this.daysSinceEpoch(date1) >= this.daysSinceEpoch(date2);
    },
    fromISOString: function(dateString) {
      if (dateString) {
        // ISO 8601 date-time format. both Z and +/-00:00 formats, though the latter is ignored
        var matches = /(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)(?:(?:\.|,)(\d\d\d))?((Z)|([+-]\d\d(:?\d\d)?))?/.exec(dateString);
        var year  = parseInt(matches[1], 10);
        var month = parseInt(matches[2], 10) - 1;
        var day   = parseInt(matches[3], 10);
        var hours   = parseInt(matches[4], 10);
        var minutes = parseInt(matches[5], 10);
        var seconds = parseInt(matches[6], 10);
        var milliseconds = matches[7] ? parseInt(matches[7], 10) : null;
        return new Date(Date.UTC(year, month, day, hours, minutes, seconds, milliseconds));
      } else {
        return null;
      }
    },
    toISOString: function(date) {
      if (date) {
        return                 date.getUTCFullYear()         + '-'
          + DateUtilities._pad(date.getUTCMonth() + 1   , 2) + '-'
          + DateUtilities._pad(date.getUTCDate()        , 2) + 'T'
          + DateUtilities._pad(date.getUTCHours()       , 2) + ':'
          + DateUtilities._pad(date.getUTCMinutes()     , 2) + ':'
          + DateUtilities._pad(date.getUTCSeconds()     , 2) + "."
          + DateUtilities._pad(date.getUTCMilliseconds(), 3) + 'Z';
      } else {
        return "";
      }
    },
    _pad: function(number, length) {
      var s = String(number);
      if (s.length > length) {
        s = substr(0, length);
      }
      while (s.length < length) {
        s = '0' + s;
      }
      return s;
    }
  };

  this.Tableau || (this.Tableau = {});
  this.Tableau.DateUtilities = DateUtilities;

}).call(this, jQuery);
