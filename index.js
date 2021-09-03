import { franc as lang } from "franc";

import langName from "langs";

import colors from "colors";

const str = lang("a");

function getLangeCode(langCodeCharCount, langCode) {
	const result = langName.where(langCodeCharCount, langCode);
	if (result) return result.name.green;
	else return "no result :(".red;
}

const result = getLangeCode("3", str);
console.log(result);
