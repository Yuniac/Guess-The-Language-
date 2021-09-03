// this package returns a language code if it managed to guess it, the code is 3 letters iso code;
import { franc as lang } from "franc";

// this package takes a langauge code and whether it's a 3, or 2 or 1 iso code and returns information about this language;
import langName from "langs";

// this package adds colors and stuff over strings. optional;
import colors from "colors";

const str = lang(process.argv[2]);

function guessLanguage(langCodeCharCount, langCode) {
	const result = langName.where(langCodeCharCount, langCode);
	if (result) return `If I had to guess I would say it's: ${result.name.green}.`;
	else return "Couldn't guess it at all, try with a different sentence and make sure it's more than 10 letters.".red;
}

const result = guessLanguage("3", str);
console.log(result);
