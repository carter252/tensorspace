import { MinAlpha } from "./Constant";

function ColorUtils() {

}

ColorUtils.prototype = {

	getAdjustValues: function(values) {

		let max = values[0], min = values[0];
		for (let i = 1; i < values.length; i++) {

			if (values[i] > max) {
				max = values[i];
			}

			if (values[i] < min) {
				min = values[i];
			}

		}

		let adjustValues = [];
		let distance = max - min;
		for (let i = 0; i < values.length; i++) {
			adjustValues.push( (values[i] - min) / distance );
		}

		return adjustValues;

	},

	getColors: function(values) {

		let adjustValues = this.getAdjustValues(values);

		let colorList = [];

		for (let i = 0; i < adjustValues.length; i++) {

			let rgbTriple = [];
			let tempAlpha = MinAlpha + adjustValues[i] * (1 - MinAlpha);
			for (let j = 0; j < 3; j++) {
				rgbTriple.push(tempAlpha);
			}

			colorList.push(rgbTriple);

		}

		return colorList;

	}

};

let colorUtils = new ColorUtils();

export default colorUtils;