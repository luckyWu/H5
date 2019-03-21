function $(id) {
	return document.getElementById(id);
}

/**
 * 绑定事件
 * @param {HTMLElement} elem HTML元素
 * @param {Event} en 事件名称
 * @param {Function} fn 回调函数
 */
function bind(elem, en, fn) {
	if (elem.addEventListener) {
		elem.addEventListener(en, fn);
	} else {
		elem.attachEvent("on" + en, fn);
	}
}

/**
 * 反绑定事件
 * @param {HTMLElement} elem HTML元素
 * @param {Event} en 事件名称
 * @param {Function} fn 回调函数
 */
function unbind(elem, en, fn) {
	if (elem.removeEventListener) {
		elem.removeEventListener(en, fn);
	} else {
		elem.detachEvent("on" + en, fn);
	}
}

/**
 * 生成[min, max]范围的随机整数
 * @param {Number} min 下限
 * @param {Number} max 上限
 */
function randomInt(min, max) {
	return parseInt(Math.random() * (max - min + 1) + min);
}

/**
 * 生成随机颜色
 */
function randomColor() {
	var red = randomInt(0, 255);
	var green = randomInt(0, 255)
	var blue = randomInt(0, 255);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}
