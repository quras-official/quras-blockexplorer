/**
 * coin-chart
 * 
 * @copyright 2018 newfund
 * @version 0.1
 * 
 */
(function($) {

	"use strict";

	$.coinChart = function($this, options) {

		var self = this;
		
		var $container = $this;

		var $price = null;

		self.defaults = {
			major_color: '#428bca',
			initial_range: '1d',
			width: 750,
			height: 390, //chart with control
			ranges: ['6h', '12h', '1d', '1w', '1m', '3m', '1y', 'All'],
			is_visible_ranges: true,
			
			api_url: 'https://mining-profit.com/api/btc-chart',
			control_height: 40,
			
			//variable values:
			current_range: null
		};
		options = $.extend({}, self.defaults, options);

		self.lastValidation = function() {
			if (options.is_visible_ranges) {
				options.height -= options.control_height;
			}

			if (options.is_visible_ranges) {
				if (options.ranges.indexOf(options.initial_range) == -1) {
					options.initial_range = options.ranges[0];
				}
			}
		};

		self.sendRequest = function() {
			$.getJSON(options.api_url+'?range=' + options.current_range + '&exchanges=["bitstamp"]', self.updateChart);
		};

		self.initialChart = function() {
			
			self.chart = nv.models.lineChart()
				.useInteractiveGuideline(true)
				.x(function(d) { return parseInt(d.date) * 1000 })
				.y(function(d) { return d.price })
				.duration(300)
				.showLegend(false);


			self.chart.xAxis
				.tickFormat(function(d) {// %Y/%m/%d
					return d3.time.format('%I:%M %p')(new Date(d));
				})
				.showMaxMin(false)
				.staggerLabels(true);

			self.chart.yAxis
				.tickFormat(function(d) {
					if (d == null) {
						return 'N/A';
					}
					return d3.format(',.2f')(d);
				});

			// set up the tooltip to display full dates
            var tooltip = self.chart.interactiveLayer.tooltip;
            tooltip.headerFormatter(function (d) { return d3.time.format('%Y/%m/%d %I:%M %p')(new Date(d)); });
			
			self.sendRequest();
		};

		var configureUpdate = function(last_date_timest, r_part) {
			if (r_part && ('hd'.indexOf(r_part.rname) != -1)) {
				this.is_not_normalized = false;
				var second_reserv = 30;
				var time_now = new Date();
				var rest_time = this.norm_period_update*1000 - (time_now - last_date_timest*1000) + second_reserv*1000;
				setTimeout(function(){
					var part_r1 = coinChart.getSimplePartRange();
					if (part_r1 && ('hdw'.indexOf(part_r1.rname) != -1)) {
						coinChart.sendRequest();
					}
					setInterval(function(){
						var part_r2 = coinChart.getSimplePartRange();
						if (part_r2 && ('hdw'.indexOf(part_r2.rname) != -1)) {
							coinChart.sendRequest();
						}
					}, coinChart.norm_period_update*1000);
				}, rest_time);
			}
		};

		self.updateChart = function(data) {
			var points = JSON.parse(data.prices);
			var start_of_range = data.start_of_range;
			var count_hours = self.getCountHours(start_of_range);
			
			var less_grid = (options.width < 750) ? 2 : 1;
			var xFormat = '';
			if (count_hours <= 24) { //less then 1 day
				xFormat = '%I:%M %p';
			}
			else if (count_hours <= 8784) {//less then 1 year
				xFormat = '%m/%d';
				//this.options_chart.hAxis.gridlines.count = parseInt(8/less_grid);
			}
			else {
				xFormat = '%y %m';
				//this.options_chart.hAxis.gridlines.count = parseInt(8/less_grid);
			}

			var data = [
				{
					values: points['bitstamp'],
					key: "Paycle",
					color: options.main_color
				}
			];

			self.chart.xAxis
				.tickFormat(function(d) { return d3.time.format(xFormat)(new Date(d)); });
			
			d3.select($price[0]).selectAll('svg').remove();
			d3.select($price[0]).append('svg')
				.datum(data)
				.call(self.chart);

			nv.utils.windowResize(self.chart.update);
		};

		self.drawControlPanel = function(){
			if (!options.is_visible_ranges) {
				return;
				
			}

			var $rangesContainer = $('<div>').addClass('chart-range-container clear-flow')

			for (var i = 0; i < options.ranges.length; i++) {
				if (options.ranges[i] == options.initial_range) {
					$rangesContainer.append(
						$('<div>').addClass('chart-range chart-range-active').html(options.ranges[i])
					);
				}
				else {
					$rangesContainer.append(
						$('<div>').addClass('chart-range').html(options.ranges[i])
					);
				}
			}

			var $controls = $('<div>').addClass('chart-controls clear-flow').css({'margin-bottom': '16px'})
				.append($rangesContainer);

			$container.append($controls);

			$('.chart-range', $container).click(self.chooseRange);
			
		};

		var getSimplePartRange = function() {
			var range = options.current_range;
			if (range == 'All') {return 0;}
			else {
				var i = 0; 
				var range_digit = '';
				var range_name; 
				while (!isNaN(parseFloat(range[i])) && isFinite(range[i])) {
					range_digit += range[i];
					i += 1;
				}
				range_name = range.slice(i, range.length);
				return {'rdigit': parseInt(range_digit), 'rname': range_name};
			}
		};

		self.getCountHours = function(from_timestamp) {
			var to_timestamp = new Date();
			to_timestamp = (to_timestamp.setMilliseconds(0))/1000;
			return parseInt((to_timestamp-from_timestamp)/3600);
		};

		self.chooseRange = function(e) {
			var $new = $(this);
			var $old = $('.chart-range-active', $container);
			if ($new.html() != $old.html()) {
				$old.removeClass('chart-range-active');
				$new.addClass('chart-range-active');
				options.current_range = $new.html();
				self.sendRequest();
			}
		};

		self.initialize = function() {
			self.lastValidation();
			options.current_range = options.initial_range;

			$container.addClass('chart-container').css({width: options.width});

			// control-panel
			self.drawControlPanel();
			
			// price
			$price = $('<div>').addClass('chart-price').css({height: options.height});
			$container.append($price);


			self.initialChart();
		};

		return self.initialize();
	};

	$.fn.coinChart = function(options){
		return this.each(function() {
			var one = new $.coinChart($(this), options);
		});
	};

}(jQuery));