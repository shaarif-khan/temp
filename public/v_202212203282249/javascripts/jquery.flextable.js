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
// jQuery extention: flextable
(function ($) {

    var methods = {

        create: function (options) {

            var settings = $.extend({
                cols: [],
                rows: [],
                columnPadding: 10,
                maxStartingColumnWidth: 200,
                contentWidthChanged: null
            }, options);

            var setWidths = function (h, c, w) {
                h.width(w);
                c.width(w);
            };

            return this.each(function() {
                var $this = $(this);

                var table   = $('<div>').addClass('flextable-table');
                var header  = $('<div>').addClass('flextable-header');
                var content = $('<div>').addClass('flextable-content');

                table.append(header).append(content);

                // create and add the header columns and content columns
                var headerColumns = $('<span>').addClass('flextable-header-columns');
                var contentColumns = $('<span>').addClass('flextable-content-columns');

                // create and add the rows background
                var rowsBackground = $('<div>').addClass('flextable-rows-background');
                $.each(settings.rows, function (row_index, row) {
                    var rowBackground = $('<div>').addClass('flextable-row-background').addClass(row_index % 2 == 0 ? 'even' : 'odd');
                    rowsBackground.append(rowBackground);
                });
                contentColumns.append(rowsBackground);
                
                $.each(settings.cols, function (col_index, col) {
                    var headerColumn = $('<span>').addClass('flextable-header-column');
                    var contentColumn = $('<span>').addClass('flextable-content-column');

                    if (col.active) {
                        headerColumn.addClass('flextable-active');
                    }
                    if (col_index > 0) {
                        headerColumn.append($('<div>').addClass('flextable-header-left-border'));
                    }

                    // add the column name text to the header column
                    headerColumn.append($('<span>').addClass('flextable-header-text').html(col.html));

                    if (col.resizable) {
                        // create and add the header column divider
                        var headerColumnDivider = $('<div>').addClass('flextable-column-divider').addClass('flextable-header-column-divider');
                        headerColumnDivider.data('headerColumn', headerColumn);
                        headerColumnDivider.data('contentColumn', contentColumn);
                        headerColumn.append(headerColumnDivider);
                    } else {
                        var headerColumnSpacer = $('<div>').addClass('flextable-header-column-spacer');
                        headerColumn.append(headerColumnSpacer);
                    }

                    // add the header column
                    headerColumns.append(headerColumn);

                    // create and add the content column cells
                    var contentColumnCells = $('<div>').addClass('flextable-content-column-cells');
                    $.each(settings.rows, function (row_index, row) {
                        var cellObj = row.cells[col_index];
                        var cellDiv = $('<div>').addClass('flextable-cell');
                        if (cellObj.align === "right") {
                            cellDiv.addClass('flextable-text-align-right');
                        }
                        var cellText = $('<div>').addClass('flextable-cell-text').html(cellObj.html);
                        if (col.resizable) {
                            cellText.addClass('flextable-text-overflow-ellipsis');
                        }
                        cellDiv.append(cellText);
                        contentColumnCells.append(cellDiv);
                    });
                    contentColumn.append(contentColumnCells);

                    if (col.resizable) {
                        // create and add the content column divider
                        var contentColumnDivider = $('<div>').addClass('flextable-column-divider').addClass('flextable-content-column-divider');
                        contentColumnDivider.data('headerColumn', headerColumn);
                        contentColumnDivider.data('contentColumn', contentColumn);
                        contentColumn.append(contentColumnDivider);
                    }

                    contentColumn.data('headerColumn', headerColumn);
                    contentColumn.data('padding', col.resizable ? settings.columnPadding : 0);

                    // add the content column
                    contentColumns.append(contentColumn);
                });
                header.append(headerColumns);
                content.append(contentColumns);

                // add the table to the document
                // we have to do this before we start measuring anything
                $this.html(table);

                // set the height of the table to fit all the rows
                content.height(contentColumns.outerHeight());

                // calculate minimum width for columns
                headerColumns.children('.flextable-header-column').each(function (index, headerColumn) {
                    var $headerColumn = $(headerColumn);
                    var minWidth = $headerColumn.width() + settings.columnPadding;
                    $headerColumn.data('minWidth', minWidth);
                });

                var clippedColumns = []

                // set column widths to fit content (subject to maximum starting width)
                contentColumns.children('.flextable-content-column').each(function (index, contentColumn) {
                    var $contentColumn = $(contentColumn);
                    var contentColumnWidth = $contentColumn.outerWidth();
                    $contentColumn.data('contentWidth', contentColumnWidth);
                    var headerColumn = $contentColumn.data('headerColumn');
                    var minWidth = headerColumn.data('minWidth');
                    var padding = $contentColumn.data('padding');
                    var columnWidth = Math.min(Math.max(contentColumnWidth + padding, minWidth), settings.maxStartingColumnWidth);
                    setWidths(headerColumn, $contentColumn, columnWidth);
                    if (columnWidth === settings.maxStartingColumnWidth) {
                        clippedColumns[clippedColumns.length] = $contentColumn;
                    }
                });

                // If there are clipped columns and is there extra space,
                // give that space to the clipped columns in left-to-right order.
                if (clippedColumns.length > 0) {
                    var extraSpace = content.outerWidth() - contentColumns.outerWidth() - 10;
                    if (extraSpace > 0) {
                        $(clippedColumns).each(function (index, contentColumn) {
                            var $contentColumn = $(contentColumn);
                            var contentColumnWidth =  $contentColumn.data('contentWidth');
                            var padding = $contentColumn.data('padding');
                            var headerColumn = $contentColumn.data('headerColumn');
                            var columnWidth = Math.min(contentColumnWidth + padding, settings.maxStartingColumnWidth + extraSpace);
                            setWidths(headerColumn, $contentColumn, columnWidth);
                            extraSpace -= (columnWidth - settings.maxStartingColumnWidth);
                            return extraSpace > 0;
                        });
                    }
                }

                if (settings.contentWidthChanged) {
                    settings.contentWidthChanged(headerColumns.outerWidth());
                }

                // event handling for column resizing
                table.on('mousedown.flextable', '.flextable-column-divider', function (mousedownEvent) {
                    var divider = $(this);
                    var headerColumn = divider.data('headerColumn');
                    var contentColumn = divider.data('contentColumn');
                    var columnMinWidth = headerColumn.data('minWidth');
                    var mouseStartX = mousedownEvent.pageX;
                    var columnStartWidth = headerColumn.width();
                    var doc = $(document);
                    var body = $(document.body);

                    // Disable selection when resizing
                    body.addClass('flextable-user-select-none');
                    if ($.browser.msie) {
                        table.attr('unselectable', 'on');
                        // this fails with a range error with a large number of cells, 
                        // but IE will fail displaying a large table anyway.
                        // could use $('.flextable-table *').attr..., but that changes all flextables on the page
                        table.find('*').attr('unselectable', 'on');
                    }

                    doc.on('mousemove.flextable', function(mousemoveEvent) {
                        var dx = mousemoveEvent.pageX - mouseStartX;
                        // ensure the column width stays greater than its minimum width
                        if (columnStartWidth + dx < columnMinWidth) {
                            dx = columnMinWidth - columnStartWidth;
                        }
                        setWidths(headerColumn, contentColumn, columnStartWidth + dx);
                    });

                    doc.on('mouseup.flextable', function() {
                        doc.off('.flextable');

                        // Re-enable selection
                        body.removeClass('flextable-user-select-none');
                        if ($.browser.msie) {
                            table.removeAttr('unselectable');
                            table.find('*').removeAttr('unselectable');
                        }
                        if (settings.contentWidthChanged) {
                            settings.contentWidthChanged(headerColumns.width());
                        }
                    });
                });

                table.on('dblclick.flextable', '.flextable-column-divider', function(event) {
                    var divider = $(this);
                    var headerColumn = divider.data('headerColumn');
                    var contentColumn = divider.data('contentColumn');
                    var contentColumnWidth = contentColumn.data('contentWidth');
                    var padding = contentColumn.data('padding');
                    var minWidth = headerColumn.data('minWidth');

                    setWidths(headerColumn, contentColumn, Math.max(contentColumnWidth + padding, minWidth));
                    if (settings.contentWidthChanged) {
                        settings.contentWidthChanged(headerColumns.width());
                    }
                });
            });
        },

        remove: function () {
            return this.each(function() {
                var $this = $(this);
                $this.html('');
            });
        }

    };

    $.fn.flextable = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.create.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.fn.flextable');
        }
    };

}(jQuery));
