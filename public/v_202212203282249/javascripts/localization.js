/**
 * Globalize Runtime v1.4.2
 *
 * http://github.com/jquery/globalize
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2019-03-07T13:47Z
 */
/*!
 * Globalize Runtime v1.4.2 2019-03-07T13:47Z Released under the MIT license
 * http://git.io/TrdQbw
 */
(function( root, factory ) {

	"use strict";

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define( factory );
	} else if ( typeof exports === "object" ) {

		// Node, CommonJS
		module.exports = factory();
	} else {

		// Globalize
		root.Globalize = factory();
	}
}( this, function() {




/**
 * A toString method that outputs meaningful values for objects or arrays and
 * still performs as fast as a plain string in case variable is string, or as
 * fast as `"" + number` in case variable is a number.
 * Ref: http://jsperf.com/my-stringify
 */
var toString = function( variable ) {
	return typeof variable === "string" ? variable : ( typeof variable === "number" ? "" +
		variable : JSON.stringify( variable ) );
};




/**
 * formatMessage( message, data )
 *
 * @message [String] A message with optional {vars} to be replaced.
 *
 * @data [Array or JSON] Object with replacing-variables content.
 *
 * Return the formatted message. For example:
 *
 * - formatMessage( "{0} second", [ 1 ] ); // 1 second
 *
 * - formatMessage( "{0}/{1}", ["m", "s"] ); // m/s
 *
 * - formatMessage( "{name} <{email}>", {
 *     name: "Foo",
 *     email: "bar@baz.qux"
 *   }); // Foo <bar@baz.qux>
 */
var formatMessage = function( message, data ) {

	// Replace {attribute}'s
	message = message.replace( /{[0-9a-zA-Z-_. ]+}/g, function( name ) {
		name = name.replace( /^{([^}]*)}$/, "$1" );
		return toString( data[ name ] );
	});

	return message;
};




var objectExtend = function() {
	var destination = arguments[ 0 ],
		sources = [].slice.call( arguments, 1 );

	sources.forEach(function( source ) {
		var prop;
		for ( prop in source ) {
			destination[ prop ] = source[ prop ];
		}
	});

	return destination;
};




var createError = function( code, message, attributes ) {
	var error;

	message = code + ( message ? ": " + formatMessage( message, attributes ) : "" );
	error = new Error( message );
	error.code = code;

	objectExtend( error, attributes );

	return error;
};




var runtimeStringify = function( args ) {
	return JSON.stringify( args, function( key, value ) {
		if ( value && value.runtimeKey ) {
			return value.runtimeKey;
		}
		return value;
	} );
};




// Based on http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
var stringHash = function( str ) {
	return [].reduce.call( str, function( hash, i ) {
		var chr = i.charCodeAt( 0 );
		hash = ( ( hash << 5 ) - hash ) + chr;
		return hash | 0;
	}, 0 );
};




var runtimeKey = function( fnName, locale, args, argsStr ) {
	var hash;
	argsStr = argsStr || runtimeStringify( args );
	hash = stringHash( fnName + locale + argsStr );
	return hash > 0 ? "a" + hash : "b" + Math.abs( hash );
};




var validate = function( code, message, check, attributes ) {
	if ( !check ) {
		throw createError( code, message, attributes );
	}
};




var validateParameterPresence = function( value, name ) {
	validate( "E_MISSING_PARAMETER", "Missing required parameter `{name}`.",
		value !== undefined, { name: name });
};




var validateParameterType = function( value, name, check, expected ) {
	validate(
		"E_INVALID_PAR_TYPE",
		"Invalid `{name}` parameter ({value}). {expected} expected.",
		check,
		{
			expected: expected,
			name: name,
			value: value
		}
	);
};




var validateParameterTypeString = function( value, name ) {
	validateParameterType(
		value,
		name,
		value === undefined || typeof value === "string",
		"a string"
	);
};




// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions?redirectlocale=en-US&redirectslug=JavaScript%2FGuide%2FRegular_Expressions
var regexpEscape = function( string ) {
	return string.replace( /([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1" );
};




var stringPad = function( str, count, right ) {
	var length;
	if ( typeof str !== "string" ) {
		str = String( str );
	}
	for ( length = str.length; length < count; length += 1 ) {
		str = ( right ? ( str + "0" ) : ( "0" + str ) );
	}
	return str;
};




function Globalize( locale ) {
	if ( !( this instanceof Globalize ) ) {
		return new Globalize( locale );
	}

	validateParameterPresence( locale, "locale" );
	validateParameterTypeString( locale, "locale" );

	this._locale = locale;
}

Globalize.locale = function( locale ) {
	validateParameterTypeString( locale, "locale" );

	if ( arguments.length ) {
		this._locale = locale;
	}
	return this._locale;
};

Globalize._createError = createError;
Globalize._formatMessage = formatMessage;
Globalize._regexpEscape = regexpEscape;
Globalize._runtimeKey = runtimeKey;
Globalize._stringPad = stringPad;
Globalize._validateParameterPresence = validateParameterPresence;
Globalize._validateParameterTypeString = validateParameterTypeString;
Globalize._validateParameterType = validateParameterType;

return Globalize;




}));

/**
 * Globalize Runtime v1.4.2
 *
 * http://github.com/jquery/globalize
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2019-03-07T13:47Z
 */
/*!
 * Globalize Runtime v1.4.2 2019-03-07T13:47Z Released under the MIT license
 * http://git.io/TrdQbw
 */
(function( root, factory ) {

	"use strict";

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define([
			"../globalize-runtime"
		], factory );
	} else if ( typeof exports === "object" ) {

		// Node, CommonJS
		module.exports = factory( require( "../globalize-runtime" ) );
	} else {

		// Extend global
		factory( root.Globalize );
	}
}(this, function( Globalize ) {



var runtimeKey = Globalize._runtimeKey,
	validateParameterPresence = Globalize._validateParameterPresence,
	validateParameterType = Globalize._validateParameterType;


var validateParameterTypeNumber = function( value, name ) {
	validateParameterType(
		value,
		name,
		value === undefined || typeof value === "number",
		"Number"
	);
};




var pluralGeneratorFn = function( plural ) {
	return function pluralGenerator( value ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeNumber( value, "value" );

		return plural( value );
	};
};




Globalize._pluralGeneratorFn = pluralGeneratorFn;
Globalize._validateParameterTypeNumber = validateParameterTypeNumber;

Globalize.plural =
Globalize.prototype.plural = function( value, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeNumber( value, "value" );
	return this.pluralGenerator( options )( value );
};

Globalize.pluralGenerator =
Globalize.prototype.pluralGenerator = function( options ) {
	options = options || {};
	return Globalize[ runtimeKey( "pluralGenerator", this._locale, [ options ] ) ];
};

return Globalize;




}));

/**
 * Globalize Runtime v1.4.2
 *
 * http://github.com/jquery/globalize
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2019-03-07T13:47Z
 */
/*!
 * Globalize Runtime v1.4.2 2019-03-07T13:47Z Released under the MIT license
 * http://git.io/TrdQbw
 */
(function( root, factory ) {

	"use strict";

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define([
			"../globalize-runtime"
		], factory );
	} else if ( typeof exports === "object" ) {

		// Node, CommonJS
		module.exports = factory( require( "../globalize-runtime" ) );
	} else {

		// Extend global
		factory( root.Globalize );
	}
}(this, function( Globalize ) {



var runtimeKey = Globalize._runtimeKey,
	validateParameterType = Globalize._validateParameterType;


/**
 * Function inspired by jQuery Core, but reduced to our use case.
 */
var isPlainObject = function( obj ) {
	return obj !== null && "" + obj === "[object Object]";
};




var validateParameterTypeMessageVariables = function( value, name ) {
	validateParameterType(
		value,
		name,
		value === undefined || isPlainObject( value ) || Array.isArray( value ),
		"Array or Plain Object"
	);
};




var messageFormatterFn = function( formatter ) {
	return function messageFormatter( variables ) {
		if ( typeof variables === "number" || typeof variables === "string" ) {
			variables = [].slice.call( arguments, 0 );
		}
		validateParameterTypeMessageVariables( variables, "variables" );
		return formatter( variables );
	};
};




Globalize._messageFormatterFn = messageFormatterFn;
/* jshint ignore:start */
Globalize._messageFormat = (function() {
var number = function (value, offset) {
  if (isNaN(value)) throw new Error("'" + value + "' isn't a number.");
  return value - (offset || 0);
};
var plural = function (value, offset, lcfunc, data, isOrdinal) {
  if ({}.hasOwnProperty.call(data, value)) return data[value]();
  if (offset) value -= offset;
  var key = lcfunc(value, isOrdinal);
  if (key in data) return data[key]();
  return data.other();
};
var select = function (value, data) {
  if ({}.hasOwnProperty.call(data, value)) return data[value]();
  return data.other()
};

return {number: number, plural: plural, select: select};
}());
/* jshint ignore:end */
Globalize._validateParameterTypeMessageVariables = validateParameterTypeMessageVariables;

Globalize.messageFormatter =
Globalize.prototype.messageFormatter = function( /* path */ ) {
	return Globalize[
		runtimeKey( "messageFormatter", this._locale, [].slice.call( arguments, 0 ) )
	];
};

Globalize.formatMessage =
Globalize.prototype.formatMessage = function( path /* , variables */ ) {
	return this.messageFormatter( path ).apply( {}, [].slice.call( arguments, 1 ) );
};

return Globalize;




}));

(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define( ["globalize-runtime/plural","globalize-runtime/message"], factory );
	} else if ( typeof exports === "object" ) {

		// Node, CommonJS
		module.exports = factory( require("globalize/dist/globalize-runtime/plural"), require("globalize/dist/globalize-runtime/message") );
	} else {

		// Global
		factory( root.Globalize );
	}
}( this, function( Globalize ) {

var validateParameterTypeNumber = Globalize._validateParameterTypeNumber;
var validateParameterPresence = Globalize._validateParameterPresence;
var pluralGeneratorFn = Globalize._pluralGeneratorFn;
var validateParameterTypeMessageVariables = Globalize._validateParameterTypeMessageVariables;
var messageFormat = Globalize._messageFormat;
var messageFormatterFn = Globalize._messageFormatterFn;

Globalize.a1625405296 = pluralGeneratorFn(function(n
/*``*/) {
  var s = String(n).split('.'), v0 = !s[1];
  return (n == 1 && v0) ? 'one' : 'other';
});
Globalize.b93237009 = messageFormatterFn((function(  ) {
  return function (d) { return "Geben Sie Ihr Kennwort ein, um fortzufahren"; }
})(), Globalize("de").pluralGenerator({}));
Globalize.b435533122 = messageFormatterFn((function(  ) {
  return function (d) { return "E-Mail-Adresse"; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a1003831203 = messageFormatterFn((function(  ) {
  return function (d) { return "Haben Sie Ihr Kennwort vergessen?"; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a450015913 = messageFormatterFn((function(  ) {
  return function (d) { return "Muss mindestens acht Zeichen und Buchstaben, Zahlen und Sonderzeichen enthalten."; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a113354639 = messageFormatterFn((function(  ) {
  return function (d) { return "Kennwort"; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a1240693970 = messageFormatterFn((function(  ) {
  return function (d) { return "Geben Sie die mit Ihrem Konto verbundene E-Mail-Adresse ein und wir senden Ihnen einen Link zum Zur??cksetzen des Kennworts."; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a1946256237 = messageFormatterFn((function(  ) {
  return function (d) { return "Kennwort zur??cksetzen"; }
})(), Globalize("de").pluralGenerator({}));
Globalize.b1429329737 = messageFormatterFn((function(  ) {
  return function (d) { return "E-Mail senden"; }
})(), Globalize("de").pluralGenerator({}));
Globalize.b714451532 = messageFormatterFn((function(  ) {
  return function (d) { return "Erstellen Sie jetzt Ihr Profil kostenlos"; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a303456065 = messageFormatterFn((function(  ) {
  return function (d) { return "Sie haben noch kein Profil?"; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a1861422475 = messageFormatterFn((function(  ) {
  return function (d) { return "Anmelden"; }
})(), Globalize("de").pluralGenerator({}));
Globalize.b2122636949 = messageFormatterFn((function(  ) {
  return function (d) { return "Diese Site ist SSL-verschl??sselt"; }
})(), Globalize("de").pluralGenerator({}));
Globalize.b472149440 = messageFormatterFn((function(  ) {
  return function (d) { return "Tableau Public-Anmeldung"; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a1805135655 = messageFormatterFn((function(  ) {
  return function (d) { return "In der E-Mail, die Sie von uns erhalten, m??ssen Sie auf den Link zur Best??tigung klicken, um Ihr Profil zu aktivieren."; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a545851329 = messageFormatterFn((function(  ) {
  return function (d) { return "Diese E-Mail-Adresse ist nicht verf??gbar."; }
})(), Globalize("de").pluralGenerator({}));
Globalize.b1430276705 = messageFormatterFn((function(  ) {
  return function (d) { return "Dieses Feld darf nur Buchstaben und Basiszeichen enthalten."; }
})(), Globalize("de").pluralGenerator({}));
Globalize.b1732166469 = messageFormatterFn((function(  ) {
  return function (d) { return "Geben Sie eine g??ltige E-Mail-Adresse ein."; }
})(), Globalize("de").pluralGenerator({}));
Globalize.b1143944806 = messageFormatterFn((function(  ) {
  return function (d) { return "Ung??ltige E-Mail-Adresse oder ung??ltiges Kennwort"; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a1908618417 = messageFormatterFn((function(  ) {
  return function (d) { return "Ihr Kennwort muss mindestens acht Zeichen lang sein."; }
})(), Globalize("de").pluralGenerator({}));
Globalize.b456010778 = messageFormatterFn((function(  ) {
  return function (d) { return "Es ist bereits ein Konto mit dieser E-Mail-Adresse vorhanden"; }
})(), Globalize("de").pluralGenerator({}));
Globalize.b1122246366 = messageFormatterFn((function(  ) {
  return function (d) { return "Best??tigen"; }
})(), Globalize("de").pluralGenerator({}));
Globalize.b771989053 = messageFormatterFn((function(  ) {
  return function (d) { return "Falsche Anmeldedetails: Versuchen Sie es nochmals."; }
})(), Globalize("de").pluralGenerator({}));
Globalize.b1214982301 = messageFormatterFn((function(  ) {
  return function (d) { return "Wir ben??tigen Ihre E-Mail-Adresse, um Ihr Konto zu erstellen. Wir versprechen, Ihre pers??nlichen Daten niemals zu vermieten, zu verkaufen oder einzutauschen."; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a126187553 = messageFormatterFn((function(  ) {
  return function (d) { return "Best??tigen Sie Ihr Kennwort."; }
})(), Globalize("de").pluralGenerator({}));
Globalize.b311137365 = messageFormatterFn((function(  ) {
  return function (d) { return "Geben Sie Ihre E-Mail-Adresse ein."; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a2132954091 = messageFormatterFn((function(  ) {
  return function (d) { return "Dieses Feld ist erforderlich."; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a1382690696 = messageFormatterFn((function(  ) {
  return function (d) { return "Dies wird aus rechtlichen Gr??nden ben??tigt."; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a818655261 = messageFormatterFn((function(  ) {
  return function (d) { return "Stellen Sie sicher, dass Ihre Kennw??rter ??bereinstimmen."; }
})(), Globalize("de").pluralGenerator({}));
Globalize.b1702766830 = messageFormatterFn((function(  ) {
  return function (d) { return "Geben Sie Ihren Namen ein."; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a1210253705 = messageFormatterFn((function(  ) {
  return function (d) { return "Es ist ein Problem mit der Verbindung zu unseren Servern aufgetreten. Versuchen Sie es noch einmal. Oder versuchen Sie es sp??ter."; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a1676218509 = messageFormatterFn((function(  ) {
  return function (d) { return "Wenn es sich bei dieser E-Mail-Adresse um ein registriertes Konto handelt, senden wir Ihnen einfach Anweisungen zum Zur??cksetzen Ihres Kennworts zu."; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a1676058095 = messageFormatterFn((function(  ) {
  return function (d) { return "Ihr Profil wurde erfolgreich erstellt. Sie werden angemeldet"; }
})(), Globalize("de").pluralGenerator({}));
Globalize.b1852354259 = messageFormatterFn((function(  ) {
  return function (d) { return "Eigenes Profil erstellen"; }
})(), Globalize("de").pluralGenerator({}));
Globalize.b2053239859 = messageFormatterFn((function(  ) {
  return function (d) { return "Diese E-Mail-Adresse ist nicht verf??gbar."; }
})(), Globalize("de").pluralGenerator({}));
Globalize.b812564407 = messageFormatterFn((function(  ) {
  return function (d) { return "Verwenden Sie Ihre E-Mail-Adresse zur Anmeldung bei Tableau Public. Sie ist nur f??r uns sichtbar. Wir versprechen, Ihre pers??nlichen Daten niemals zu vermieten, zu verkaufen oder einzutauschen."; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a1099281846 = messageFormatterFn((function(  ) {
  return function (d) { return "Profil erstellen"; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a1683049438 = messageFormatterFn((function(  ) {
  return function (d) { return "Ich habe die <a target=\"_blank\" href=\"https://www.tableau.com/de-de/tos\">Nutzungsbedingungen</a> gelesen und stimme ihnen zu."; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a747048470 = messageFormatterFn((function(  ) {
  return function (d) { return "Rechtliche Hinweise lesen"; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a2053433699 = messageFormatterFn((function(  ) {
  return function (d) { return "Die tats??chlichen Namen sind uns wichtig und sorgen f??r ein Gemeinschaftsgef??hl."; }
})(), Globalize("de").pluralGenerator({}));
Globalize.a856289737 = messageFormatterFn((function(  ) {
  return function (d) { return "Name"; }
})(), Globalize("de").pluralGenerator({}));
Globalize.b681623291 = messageFormatterFn((function(  ) {
  return function (d) { return "Tableau Public-Anmeldung"; }
})(), Globalize("de").pluralGenerator({}));

return new Globalize('de');

}));

(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define( ["globalize-runtime/plural","globalize-runtime/message"], factory );
	} else if ( typeof exports === "object" ) {

		// Node, CommonJS
		module.exports = factory( require("globalize/dist/globalize-runtime/plural"), require("globalize/dist/globalize-runtime/message") );
	} else {

		// Global
		factory( root.Globalize );
	}
}( this, function( Globalize ) {

var validateParameterTypeNumber = Globalize._validateParameterTypeNumber;
var validateParameterPresence = Globalize._validateParameterPresence;
var pluralGeneratorFn = Globalize._pluralGeneratorFn;
var validateParameterTypeMessageVariables = Globalize._validateParameterTypeMessageVariables;
var messageFormat = Globalize._messageFormat;
var messageFormatterFn = Globalize._messageFormatterFn;

Globalize.b1732789968 = pluralGeneratorFn(function(n
/*``*/) {
  var s = String(n).split('.'), v0 = !s[1];
  return (n == 1 && v0) ? 'one' : 'other';
});
Globalize.b1594356089 = messageFormatterFn((function(  ) {
  return function (d) { return "Enter your password to continue"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1653637206 = messageFormatterFn((function(  ) {
  return function (d) { return "Email"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2078660853 = messageFormatterFn((function(  ) {
  return function (d) { return "Forgot your password?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1793898479 = messageFormatterFn((function(  ) {
  return function (d) { return "Must be a minimum of 8 characters and contain alphabetic, numeric and special characters."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a215509751 = messageFormatterFn((function(  ) {
  return function (d) { return "Password"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1003220422 = messageFormatterFn((function(  ) {
  return function (d) { return "Enter the email associated with your account and we'll send you a link to reset your password."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a818097413 = messageFormatterFn((function(  ) {
  return function (d) { return "Password Reset"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b317595105 = messageFormatterFn((function(  ) {
  return function (d) { return "Send Email"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a412961052 = messageFormatterFn((function(  ) {
  return function (d) { return "Create one now for free"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1940458327 = messageFormatterFn((function(  ) {
  return function (d) { return "Don't have a profile yet?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a32551203 = messageFormatterFn((function(  ) {
  return function (d) { return "Sign In"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1268662019 = messageFormatterFn((function(  ) {
  return function (d) { return "This site is SSL encrypted"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b461113432 = messageFormatterFn((function(  ) {
  return function (d) { return "Tableau Public Login"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1237263217 = messageFormatterFn((function(  ) {
  return function (d) { return "You need to click the confirmation link in the email we sent to activate your profile."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b314583255 = messageFormatterFn((function(  ) {
  return function (d) { return "This email is not available."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1736531767 = messageFormatterFn((function(  ) {
  return function (d) { return "This field can only include letters and basic characters."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1392395741 = messageFormatterFn((function(  ) {
  return function (d) { return "Please enter a valid email address."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2047613134 = messageFormatterFn((function(  ) {
  return function (d) { return "Invalid email or password"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a79747145 = messageFormatterFn((function(  ) {
  return function (d) { return "Your password must be at least 8 characters long."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a737591678 = messageFormatterFn((function(  ) {
  return function (d) { return "An account with this email already exists"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a820711610 = messageFormatterFn((function(  ) {
  return function (d) { return "Confirm"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a513112363 = messageFormatterFn((function(  ) {
  return function (d) { return "Incorrect sign in details: please try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1426955467 = messageFormatterFn((function(  ) {
  return function (d) { return "We need your email to create your account. We promise never to rent, sell, or barter your personal information to anyone."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1691543159 = messageFormatterFn((function(  ) {
  return function (d) { return "Please confirm your password."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1631820611 = messageFormatterFn((function(  ) {
  return function (d) { return "Please enter your email."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1291084675 = messageFormatterFn((function(  ) {
  return function (d) { return "This field is required."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b969318624 = messageFormatterFn((function(  ) {
  return function (d) { return "Lawyers need this."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2031130501 = messageFormatterFn((function(  ) {
  return function (d) { return "Please make sure your passwords match."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1362996102 = messageFormatterFn((function(  ) {
  return function (d) { return "Please enter your name."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1872238351 = messageFormatterFn((function(  ) {
  return function (d) { return "We're having trouble communicating with our servers. Try again. Or maybe try later."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a815783925 = messageFormatterFn((function(  ) {
  return function (d) { return "If that email is a registered account, we just sent over instructions for how to reset your password."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a608084871 = messageFormatterFn((function(  ) {
  return function (d) { return "Success, your profile was created. Logging you in"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1374639813 = messageFormatterFn((function(  ) {
  return function (d) { return "Create My Profile"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a412856165 = messageFormatterFn((function(  ) {
  return function (d) { return "This email is unavailable."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b637648927 = messageFormatterFn((function(  ) {
  return function (d) { return "Use your email to sign in to Tableau Public. Nobody sees this but us. We promise never to rent, sell, or barter your personal information to anyone."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1180016354 = messageFormatterFn((function(  ) {
  return function (d) { return "Create a Profile"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a100392310 = messageFormatterFn((function(  ) {
  return function (d) { return "I've read and agree to the <a target=\"_blank\" href=\"https://www.tableau.com/en-gb/tos\">Terms of Service</a>"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1081822802 = messageFormatterFn((function(  ) {
  return function (d) { return "Review the Legal"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a985460475 = messageFormatterFn((function(  ) {
  return function (d) { return "Real names are important to us and build a sense of community."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a14420321 = messageFormatterFn((function(  ) {
  return function (d) { return "Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b339507043 = messageFormatterFn((function(  ) {
  return function (d) { return "Tableau Public Signup"; }
})(), Globalize("en-GB").pluralGenerator({}));

return new Globalize('en-GB');

}));

(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define( ["globalize-runtime/plural","globalize-runtime/message"], factory );
	} else if ( typeof exports === "object" ) {

		// Node, CommonJS
		module.exports = factory( require("globalize/dist/globalize-runtime/plural"), require("globalize/dist/globalize-runtime/message") );
	} else {

		// Global
		factory( root.Globalize );
	}
}( this, function( Globalize ) {

var validateParameterTypeNumber = Globalize._validateParameterTypeNumber;
var validateParameterPresence = Globalize._validateParameterPresence;
var pluralGeneratorFn = Globalize._pluralGeneratorFn;
var validateParameterTypeMessageVariables = Globalize._validateParameterTypeMessageVariables;
var messageFormat = Globalize._messageFormat;
var messageFormatterFn = Globalize._messageFormatterFn;

Globalize.a1662346136 = pluralGeneratorFn(function(n
/*``*/) {
  var s = String(n).split('.'), v0 = !s[1];
  return (n == 1 && v0) ? 'one' : 'other';
});
Globalize.b1355825897 = messageFormatterFn((function(  ) {
  return function (d) { return "Enter your password to continue"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1518730982 = messageFormatterFn((function(  ) {
  return function (d) { return "Email"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1329219973 = messageFormatterFn((function(  ) {
  return function (d) { return "Forgot your password?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1337666433 = messageFormatterFn((function(  ) {
  return function (d) { return "Must be a minimum of 8 characters and contain alphabetic, numeric and special characters."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1313579623 = messageFormatterFn((function(  ) {
  return function (d) { return "Password"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2128344490 = messageFormatterFn((function(  ) {
  return function (d) { return "Enter the email associated with your account and we'll send you a link to reset your password."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a498525077 = messageFormatterFn((function(  ) {
  return function (d) { return "Password Reset"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1833966991 = messageFormatterFn((function(  ) {
  return function (d) { return "Send Email"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b585916276 = messageFormatterFn((function(  ) {
  return function (d) { return "Create one now for free"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1191106585 = messageFormatterFn((function(  ) {
  return function (d) { return "Don't have a profile yet?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2133785677 = messageFormatterFn((function(  ) {
  return function (d) { return "Sign In"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1816908397 = messageFormatterFn((function(  ) {
  return function (d) { return "This site is SSL encrypted"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b390022376 = messageFormatterFn((function(  ) {
  return function (d) { return "Tableau Public Login"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1715884031 = messageFormatterFn((function(  ) {
  return function (d) { return "You need to click the confirmation link in the email we sent to activate your profile."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1248450201 = messageFormatterFn((function(  ) {
  return function (d) { return "This email is not available."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1416959431 = messageFormatterFn((function(  ) {
  return function (d) { return "This field can only include letters and basic characters."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1279521389 = messageFormatterFn((function(  ) {
  return function (d) { return "Please enter a valid email address."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b838216254 = messageFormatterFn((function(  ) {
  return function (d) { return "Invalid email or password"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2086589735 = messageFormatterFn((function(  ) {
  return function (d) { return "Your password must be at least 8 characters long."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b167931890 = messageFormatterFn((function(  ) {
  return function (d) { return "An account with this email already exists"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a24849226 = messageFormatterFn((function(  ) {
  return function (d) { return "Confirm"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1030477669 = messageFormatterFn((function(  ) {
  return function (d) { return "Incorrect sign in details: please try again."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b874471365 = messageFormatterFn((function(  ) {
  return function (d) { return "We need your email to create your account. We promise never to rent, sell, or barter your personal information to anyone."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a794150137 = messageFormatterFn((function(  ) {
  return function (d) { return "Please confirm your password."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a835958227 = messageFormatterFn((function(  ) {
  return function (d) { return "Please enter your email."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b414650861 = messageFormatterFn((function(  ) {
  return function (d) { return "This field is required."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1765181008 = messageFormatterFn((function(  ) {
  return function (d) { return "Lawyers need this."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1514395915 = messageFormatterFn((function(  ) {
  return function (d) { return "Please make sure your passwords match."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1250121750 = messageFormatterFn((function(  ) {
  return function (d) { return "Please enter your name."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1122797471 = messageFormatterFn((function(  ) {
  return function (d) { return "We're having trouble communicating with our servers. Try again. Or maybe try later."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1916149915 = messageFormatterFn((function(  ) {
  return function (d) { return "If that email is a registered account, we just sent over instructions for how to reset your password."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1929051625 = messageFormatterFn((function(  ) {
  return function (d) { return "Success, your profile was created. Logging you in"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1162496683 = messageFormatterFn((function(  ) {
  return function (d) { return "Create My Profile"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1753480715 = messageFormatterFn((function(  ) {
  return function (d) { return "This email is unavailable."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a715602545 = messageFormatterFn((function(  ) {
  return function (d) { return "Use your email to sign in to Tableau Public. Nobody sees this but us. We promise never to rent, sell, or barter your personal information to anyone."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1580988274 = messageFormatterFn((function(  ) {
  return function (d) { return "Create a Profile"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1566049286 = messageFormatterFn((function(  ) {
  return function (d) { return "I've read and agree to the <a target=\"_blank\" href=\"https://www.tableau.com/en-us/tos\">Terms of Service</a>"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1046807614 = messageFormatterFn((function(  ) {
  return function (d) { return "Review the Legal"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1551676021 = messageFormatterFn((function(  ) {
  return function (d) { return "Real names are important to us and build a sense of community."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1691315215 = messageFormatterFn((function(  ) {
  return function (d) { return "Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1864315693 = messageFormatterFn((function(  ) {
  return function (d) { return "Tableau Public Signup"; }
})(), Globalize("en").pluralGenerator({}));

return new Globalize('en');

}));

(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define( ["globalize-runtime/plural","globalize-runtime/message"], factory );
	} else if ( typeof exports === "object" ) {

		// Node, CommonJS
		module.exports = factory( require("globalize/dist/globalize-runtime/plural"), require("globalize/dist/globalize-runtime/message") );
	} else {

		// Global
		factory( root.Globalize );
	}
}( this, function( Globalize ) {

var validateParameterTypeNumber = Globalize._validateParameterTypeNumber;
var validateParameterPresence = Globalize._validateParameterPresence;
var pluralGeneratorFn = Globalize._pluralGeneratorFn;
var validateParameterTypeMessageVariables = Globalize._validateParameterTypeMessageVariables;
var messageFormat = Globalize._messageFormat;
var messageFormatterFn = Globalize._messageFormatterFn;

Globalize.a1666963741 = pluralGeneratorFn(function(n
/*``*/) {
  return (n == 1) ? 'one' : 'other';
});
Globalize.a1707575964 = messageFormatterFn((function(  ) {
  return function (d) { return "Escriba la contrase??a para continuar"; }
})(), Globalize("es").pluralGenerator({}));
Globalize.a689272171 = messageFormatterFn((function(  ) {
  return function (d) { return "Correo electr??nico"; }
})(), Globalize("es").pluralGenerator({}));
Globalize.a2137245014 = messageFormatterFn((function(  ) {
  return function (d) { return "??Olvid?? la contrase??a?"; }
})(), Globalize("es").pluralGenerator({}));
Globalize.a911751836 = messageFormatterFn((function(  ) {
  return function (d) { return "Debe contener al menos 8 caracteres alfab??ticos, num??ricos y especiales."; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b147004990 = messageFormatterFn((function(  ) {
  return function (d) { return "Contrase??a"; }
})(), Globalize("es").pluralGenerator({}));
Globalize.a1702429893 = messageFormatterFn((function(  ) {
  return function (d) { return "Escriba el correo electr??nico asociado con su cuenta y le enviaremos un enlace para restablecer la contrase??a."; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b1829924966 = messageFormatterFn((function(  ) {
  return function (d) { return "Restablecimiento de contrase??a"; }
})(), Globalize("es").pluralGenerator({}));
Globalize.a631266346 = messageFormatterFn((function(  ) {
  return function (d) { return "Enviar correo electr??nico"; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b32978457 = messageFormatterFn((function(  ) {
  return function (d) { return "Cree uno de forma gratuita ahora"; }
})(), Globalize("es").pluralGenerator({}));
Globalize.a765191988 = messageFormatterFn((function(  ) {
  return function (d) { return "??A??n no tiene un perfil?"; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b2096315784 = messageFormatterFn((function(  ) {
  return function (d) { return "Iniciar sesi??n"; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b168079592 = messageFormatterFn((function(  ) {
  return function (d) { return "Este sitio est?? cifrado mediante SSL"; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b1990369229 = messageFormatterFn((function(  ) {
  return function (d) { return "Inicio de sesi??n de Tableau Public"; }
})(), Globalize("es").pluralGenerator({}));
Globalize.a94114842 = messageFormatterFn((function(  ) {
  return function (d) { return "Haga clic en el enlace de confirmaci??n que encontrar?? en el correo electr??nico que le enviamos para activar su perfil."; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b1884950412 = messageFormatterFn((function(  ) {
  return function (d) { return "Este correo electr??nico no est?? disponible."; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b911490612 = messageFormatterFn((function(  ) {
  return function (d) { return "Este campo solo puede contener letras y caracteres b??sicos."; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b1222940754 = messageFormatterFn((function(  ) {
  return function (d) { return "Escriba una direcci??n de correo electr??nico v??lida."; }
})(), Globalize("es").pluralGenerator({}));
Globalize.a810612551 = messageFormatterFn((function(  ) {
  return function (d) { return "Correo electr??nico o contrase??a no v??lidos"; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b2049119842 = messageFormatterFn((function(  ) {
  return function (d) { return "La contrase??a debe contener al menos 8 caracteres."; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b1205663853 = messageFormatterFn((function(  ) {
  return function (d) { return "Ya existe una cuenta con este correo electr??nico"; }
})(), Globalize("es").pluralGenerator({}));
Globalize.a1778848911 = messageFormatterFn((function(  ) {
  return function (d) { return "Confirmar"; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b525917834 = messageFormatterFn((function(  ) {
  return function (d) { return "Datos de inicio de sesi??n incorrectos: vuelva a intentarlo."; }
})(), Globalize("es").pluralGenerator({}));
Globalize.a1315576150 = messageFormatterFn((function(  ) {
  return function (d) { return "Necesitamos su correo electr??nico para crear la cuenta. Le prometemos que nunca alquilaremos, venderemos o intercambiaremos su informaci??n personal."; }
})(), Globalize("es").pluralGenerator({}));
Globalize.a1414516372 = messageFormatterFn((function(  ) {
  return function (d) { return "Confirme la contrase??a."; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b1705009384 = messageFormatterFn((function(  ) {
  return function (d) { return "Escriba su correo electr??nico."; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b733101480 = messageFormatterFn((function(  ) {
  return function (d) { return "Este campo es obligatorio."; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b11181323 = messageFormatterFn((function(  ) {
  return function (d) { return "Los abogados necesitan esto."; }
})(), Globalize("es").pluralGenerator({}));
Globalize.a1952069072 = messageFormatterFn((function(  ) {
  return function (d) { return "Aseg??rese de que las contrase??as coincidan."; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b1193541115 = messageFormatterFn((function(  ) {
  return function (d) { return "Escriba su nombre."; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b1951299780 = messageFormatterFn((function(  ) {
  return function (d) { return "Tenemos problemas para establecer comunicaci??n con nuestros servidores. Int??ntelo de nuevo."; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b754583232 = messageFormatterFn((function(  ) {
  return function (d) { return "Si el correo electr??nico que especific?? es una cuenta registrada, le hemos enviado instrucciones para restablecer su contrase??a."; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b1842819428 = messageFormatterFn((function(  ) {
  return function (d) { return "El perfil se cre?? correctamente. Iniciando la sesi??n"; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b1076264486 = messageFormatterFn((function(  ) {
  return function (d) { return "Crear mi perfil"; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b1716010822 = messageFormatterFn((function(  ) {
  return function (d) { return "Este correo electr??nico no est?? disponible."; }
})(), Globalize("es").pluralGenerator({}));
Globalize.a1980365238 = messageFormatterFn((function(  ) {
  return function (d) { return "Use su correo electr??nico para iniciar sesi??n en Tableau Public. Nadie m??s podr?? verlo excepto nosotros. Le prometemos que nunca alquilaremos, venderemos o intercambiaremos su informaci??n personal."; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b1916022039 = messageFormatterFn((function(  ) {
  return function (d) { return "Crear un perfil"; }
})(), Globalize("es").pluralGenerator({}));
Globalize.a477682443 = messageFormatterFn((function(  ) {
  return function (d) { return "He le??do y acepto las <a target=\"_blank\" href=\"https://www.tableau.com/es-es/tos\">condiciones de servicio</a>"; }
})(), Globalize("es").pluralGenerator({}));
Globalize.a1084277507 = messageFormatterFn((function(  ) {
  return function (d) { return "Revise los datos legales"; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b1465443824 = messageFormatterFn((function(  ) {
  return function (d) { return "Creemos que es importante usar nombres reales, ya que generan un sentimiento de comunidad."; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b2009765834 = messageFormatterFn((function(  ) {
  return function (d) { return "Nombre"; }
})(), Globalize("es").pluralGenerator({}));
Globalize.b501796494 = messageFormatterFn((function(  ) {
  return function (d) { return "Registro de Tableau Public"; }
})(), Globalize("es").pluralGenerator({}));

return new Globalize('es');

}));

(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define( ["globalize-runtime/plural","globalize-runtime/message"], factory );
	} else if ( typeof exports === "object" ) {

		// Node, CommonJS
		module.exports = factory( require("globalize/dist/globalize-runtime/plural"), require("globalize/dist/globalize-runtime/message") );
	} else {

		// Global
		factory( root.Globalize );
	}
}( this, function( Globalize ) {

var validateParameterTypeNumber = Globalize._validateParameterTypeNumber;
var validateParameterPresence = Globalize._validateParameterPresence;
var pluralGeneratorFn = Globalize._pluralGeneratorFn;
var validateParameterTypeMessageVariables = Globalize._validateParameterTypeMessageVariables;
var messageFormat = Globalize._messageFormat;
var messageFormatterFn = Globalize._messageFormatterFn;

Globalize.a1694669371 = pluralGeneratorFn(function(n
/*``*/) {
  return (n >= 0 && n < 2) ? 'one' : 'other';
});
Globalize.b1386849350 = messageFormatterFn((function(  ) {
  return function (d) { return "Entrez votre mot de passe pour continuer"; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.a7486601 = messageFormatterFn((function(  ) {
  return function (d) { return "E-mail"; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.a1461198456 = messageFormatterFn((function(  ) {
  return function (d) { return "Vous avez oubli?? votre mot de passe???"; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.b1643735746 = messageFormatterFn((function(  ) {
  return function (d) { return "Doit comporter 8 caract??res au minimum, dont des caract??res alphab??tiques, num??riques et sp??ciaux."; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.b320578076 = messageFormatterFn((function(  ) {
  return function (d) { return "Mot de passe"; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.b853057689 = messageFormatterFn((function(  ) {
  return function (d) { return "Saisissez l'adresse e-mail associ??e ?? votre compte et nous vous enverrons un lien pour r??initialiser votre mot de passe."; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.a1379243960 = messageFormatterFn((function(  ) {
  return function (d) { return "R??initialisation du mot de passe"; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.a2004997068 = messageFormatterFn((function(  ) {
  return function (d) { return "Envoyer un e-mail"; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.b1010318839 = messageFormatterFn((function(  ) {
  return function (d) { return "Cr??er un compte gratuitement"; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.b1790295594 = messageFormatterFn((function(  ) {
  return function (d) { return "Vous n'avez pas encore de profil???"; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.b1871496426 = messageFormatterFn((function(  ) {
  return function (d) { return "Connexion"; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.a1134958646 = messageFormatterFn((function(  ) {
  return function (d) { return "Ce site est crypt?? SSL"; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.a1292451541 = messageFormatterFn((function(  ) {
  return function (d) { return "Connexion ?? Tableau Public"; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.b1046565700 = messageFormatterFn((function(  ) {
  return function (d) { return "Vous devez cliquer sur le lien de confirmation dans l'e-mail que nous vous avons envoy?? pour activer votre profil."; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.a789482390 = messageFormatterFn((function(  ) {
  return function (d) { return "Cette adresse e-mail n'est pas disponible."; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.b1997288982 = messageFormatterFn((function(  ) {
  return function (d) { return "Ce champ ne peut inclure que des lettres et des caract??res de base."; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.b883456944 = messageFormatterFn((function(  ) {
  return function (d) { return "Saisissez une adresse e-mail valide."; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.a2113650789 = messageFormatterFn((function(  ) {
  return function (d) { return "Adresse e-mail ou mot de passe non valide"; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.b1824300484 = messageFormatterFn((function(  ) {
  return function (d) { return "Votre mot de passe doit comporter 8 caract??res au minimum."; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.a1157878961 = messageFormatterFn((function(  ) {
  return function (d) { return "Il existe d??j?? un compte avec cette adresse e-mail"; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.b582054867 = messageFormatterFn((function(  ) {
  return function (d) { return "Confirmer"; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.b1793526120 = messageFormatterFn((function(  ) {
  return function (d) { return "D??tails de connexion incorrects??: veuillez r??essayer."; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.a1570959352 = messageFormatterFn((function(  ) {
  return function (d) { return "Nous avons besoin de votre adresse e-mail pour cr??er votre compte. Nous promettons de ne pas louer, vendre ou ??changer vos informations personnelles avec qui que ce soit."; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.a841746486 = messageFormatterFn((function(  ) {
  return function (d) { return "Veuillez confirmer votre mot de passe."; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.a229054134 = messageFormatterFn((function(  ) {
  return function (d) { return "Saisissez votre adresse e-mail."; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.a1651162102 = messageFormatterFn((function(  ) {
  return function (d) { return "Ce champ est obligatoire."; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.a1922882195 = messageFormatterFn((function(  ) {
  return function (d) { return "Les juristes en ont besoin."; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.a1276022514 = messageFormatterFn((function(  ) {
  return function (d) { return "Assurez-vous que les mots de passe concordent."; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.b854057305 = messageFormatterFn((function(  ) {
  return function (d) { return "Saisissez votre nom."; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.a1667620958 = messageFormatterFn((function(  ) {
  return function (d) { return "Nous rencontrons des difficult??s de communication avec nos serveurs. R??essayez maintenant ou ult??rieurement."; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.a1919849570 = messageFormatterFn((function(  ) {
  return function (d) { return "Si cette adresse e-mail correspond ?? un compte enregistr??, nous venons juste de vous envoyer des instructions de r??initialisation de votre mot de passe."; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.b1325426246 = messageFormatterFn((function(  ) {
  return function (d) { return "Votre profil a bien ??t?? cr????. Connexion en cours"; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.b558871304 = messageFormatterFn((function(  ) {
  return function (d) { return "Cr??er mon profil"; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.b1491191464 = messageFormatterFn((function(  ) {
  return function (d) { return "Cette adresse e-mail n'est pas disponible."; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.a979006804 = messageFormatterFn((function(  ) {
  return function (d) { return "Utilisez votre adresse e-mail pour vous connecter ?? Tableau Public. Nous sommes les seuls ?? pouvoir la voir. Nous promettons de ne jamais louer, vendre ou ??changer vos informations personnelles avec qui que ce soit."; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.a368742667 = messageFormatterFn((function(  ) {
  return function (d) { return "Cr??er un profil"; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.b1757551319 = messageFormatterFn((function(  ) {
  return function (d) { return "J'ai lu les <a target=\"_blank\" href=\"https://www.tableau.com/fr-fr/tos\">Conditions d'utilisation</a> et je les accepte"; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.a1309096865 = messageFormatterFn((function(  ) {
  return function (d) { return "V??rifier l'aspect juridique"; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.b948050642 = messageFormatterFn((function(  ) {
  return function (d) { return "Les noms r??els comptent beaucoup pour nous et cr??ent un sens de la communaut??."; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.a374497748 = messageFormatterFn((function(  ) {
  return function (d) { return "Nom"; }
})(), Globalize("fr").pluralGenerator({}));
Globalize.b1813567728 = messageFormatterFn((function(  ) {
  return function (d) { return "Inscription ?? Tableau Public"; }
})(), Globalize("fr").pluralGenerator({}));

return new Globalize('fr');

}));

(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define( ["globalize-runtime/plural","globalize-runtime/message"], factory );
	} else if ( typeof exports === "object" ) {

		// Node, CommonJS
		module.exports = factory( require("globalize/dist/globalize-runtime/plural"), require("globalize/dist/globalize-runtime/message") );
	} else {

		// Global
		factory( root.Globalize );
	}
}( this, function( Globalize ) {

var validateParameterTypeNumber = Globalize._validateParameterTypeNumber;
var validateParameterPresence = Globalize._validateParameterPresence;
var pluralGeneratorFn = Globalize._pluralGeneratorFn;
var validateParameterTypeMessageVariables = Globalize._validateParameterTypeMessageVariables;
var messageFormat = Globalize._messageFormat;
var messageFormatterFn = Globalize._messageFormatterFn;

Globalize.a1782403866 = pluralGeneratorFn(function(n
/*``*/) {
  var s = String(n).split('.'), v0 = !s[1];
  return (n == 1 && v0) ? 'one' : 'other';
});
Globalize.a983211161 = messageFormatterFn((function(  ) {
  return function (d) { return "Inserisci la password per continuare"; }
})(), Globalize("it").pluralGenerator({}));
Globalize.a1427638376 = messageFormatterFn((function(  ) {
  return function (d) { return "E-mail"; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b1395443527 = messageFormatterFn((function(  ) {
  return function (d) { return "Password dimenticata"; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b1146178497 = messageFormatterFn((function(  ) {
  return function (d) { return "Deve essere costituita da un minimo di 8 caratteri che devono essere alfabetici, numerici e speciali."; }
})(), Globalize("it").pluralGenerator({}));
Globalize.a1993085349 = messageFormatterFn((function(  ) {
  return function (d) { return "Password"; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b355500440 = messageFormatterFn((function(  ) {
  return function (d) { return "Inserisci l'e-mail associata al tuo account e ti invieremo un collegamento per reimpostare la password."; }
})(), Globalize("it").pluralGenerator({}));
Globalize.a88366103 = messageFormatterFn((function(  ) {
  return function (d) { return "Reimpostazione della password"; }
})(), Globalize("it").pluralGenerator({}));
Globalize.a628521293 = messageFormatterFn((function(  ) {
  return function (d) { return "Invia e-mail"; }
})(), Globalize("it").pluralGenerator({}));
Globalize.a905565130 = messageFormatterFn((function(  ) {
  return function (d) { return "Creane uno nuovo gratuitamente"; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b1292738345 = messageFormatterFn((function(  ) {
  return function (d) { return "Non hai ancora un profilo?"; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b1159568459 = messageFormatterFn((function(  ) {
  return function (d) { return "Accedi"; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b1897032427 = messageFormatterFn((function(  ) {
  return function (d) { return "Questo sito ?? crittografato con SSL"; }
})(), Globalize("it").pluralGenerator({}));
Globalize.a950632406 = messageFormatterFn((function(  ) {
  return function (d) { return "Accesso di Tableau Public"; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b1795409219 = messageFormatterFn((function(  ) {
  return function (d) { return "Per attivare il tuo profilo, devi selezionare il collegamento di conferma presente nell'e-mail che ti abbiamo inviato."; }
})(), Globalize("it").pluralGenerator({}));
Globalize.a1384412887 = messageFormatterFn((function(  ) {
  return function (d) { return "Questa e-mail non ?? disponibile."; }
})(), Globalize("it").pluralGenerator({}));
Globalize.a1006800457 = messageFormatterFn((function(  ) {
  return function (d) { return "Questo campo pu?? includere solo lettere e caratteri di base."; }
})(), Globalize("it").pluralGenerator({}));
Globalize.a191575121 = messageFormatterFn((function(  ) {
  return function (d) { return "Immettere un indirizzo e-mail valido."; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b918340284 = messageFormatterFn((function(  ) {
  return function (d) { return "E-mail o password non validi"; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b1112372517 = messageFormatterFn((function(  ) {
  return function (d) { return "La tua password deve essere lunga almeno 8 caratteri."; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b1379159152 = messageFormatterFn((function(  ) {
  return function (d) { return "Esiste gi?? un account con questa e-mail"; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b1615799220 = messageFormatterFn((function(  ) {
  return function (d) { return "Conferma"; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b796823847 = messageFormatterFn((function(  ) {
  return function (d) { return "Dati di accesso errati: riprova."; }
})(), Globalize("it").pluralGenerator({}));
Globalize.a232189177 = messageFormatterFn((function(  ) {
  return function (d) { return "Per creare l'account ci occorre la tua e-mail- Ti promettiamo di non vendere, fornire o divulgare mai a nessuno le tue informazioni personali."; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b256196937 = messageFormatterFn((function(  ) {
  return function (d) { return "Conferma la tua password."; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b804690219 = messageFormatterFn((function(  ) {
  return function (d) { return "Inserisci la tua e-mail."; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b104432363 = messageFormatterFn((function(  ) {
  return function (d) { return "Questo campo ?? obbligatorio."; }
})(), Globalize("it").pluralGenerator({}));
Globalize.a889137842 = messageFormatterFn((function(  ) {
  return function (d) { return "Necessario per i legali."; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b1580619469 = messageFormatterFn((function(  ) {
  return function (d) { return "Assicurati che le due password corrispondano."; }
})(), Globalize("it").pluralGenerator({}));
Globalize.a220974760 = messageFormatterFn((function(  ) {
  return function (d) { return "Inserisci il tuo nome."; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b1189021025 = messageFormatterFn((function(  ) {
  return function (d) { return "Stiamo riscontrando problemi di comunicazione con i nostri server. Riprova. O magari torna pi?? tardi."; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b1780187229 = messageFormatterFn((function(  ) {
  return function (d) { return "Se quell'e-mail corrisponde a un account registrato, ti abbiamo inviato le istruzioni su come reimpostare la password."; }
})(), Globalize("it").pluralGenerator({}));
Globalize.a312985497 = messageFormatterFn((function(  ) {
  return function (d) { return "Il tuo profilo ?? stato creato correttamente. Accesso in corso"; }
})(), Globalize("it").pluralGenerator({}));
Globalize.a1079540439 = messageFormatterFn((function(  ) {
  return function (d) { return "Crea il mio profilo"; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b779263497 = messageFormatterFn((function(  ) {
  return function (d) { return "Questa e-mail non ?? disponibile."; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b760305805 = messageFormatterFn((function(  ) {
  return function (d) { return "Usa la tua e-mail per eseguire l'accesso a Tableau Public. Non la vedr?? nessuno tranne noi. Ti promettiamo di non vendere, fornire o divulgare a nessuno le tue informazioni personali."; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b1701931572 = messageFormatterFn((function(  ) {
  return function (d) { return "Crea un profilo"; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b961684856 = messageFormatterFn((function(  ) {
  return function (d) { return "Ho letto e accettato le <a target=\"_blank\" href=\"https://www.tableau.com/it-it/tos\">Condizioni di servizio</a>"; }
})(), Globalize("it").pluralGenerator({}));
Globalize.a2021024832 = messageFormatterFn((function(  ) {
  return function (d) { return "Rivedi parte legale"; }
})(), Globalize("it").pluralGenerator({}));
Globalize.a690361101 = messageFormatterFn((function(  ) {
  return function (d) { return "I nomi reali per noi sono importanti e aiutano a costruire un senso di comunit??."; }
})(), Globalize("it").pluralGenerator({}));
Globalize.b1381096717 = messageFormatterFn((function(  ) {
  return function (d) { return "Nome"; }
})(), Globalize("it").pluralGenerator({}));
Globalize.a474940975 = messageFormatterFn((function(  ) {
  return function (d) { return "Registrazione a Tableau Public"; }
})(), Globalize("it").pluralGenerator({}));

return new Globalize('it');

}));

(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define( ["globalize-runtime/plural","globalize-runtime/message"], factory );
	} else if ( typeof exports === "object" ) {

		// Node, CommonJS
		module.exports = factory( require("globalize/dist/globalize-runtime/plural"), require("globalize/dist/globalize-runtime/message") );
	} else {

		// Global
		factory( root.Globalize );
	}
}( this, function( Globalize ) {

var validateParameterTypeNumber = Globalize._validateParameterTypeNumber;
var validateParameterPresence = Globalize._validateParameterPresence;
var pluralGeneratorFn = Globalize._pluralGeneratorFn;
var validateParameterTypeMessageVariables = Globalize._validateParameterTypeMessageVariables;
var messageFormat = Globalize._messageFormat;
var messageFormatterFn = Globalize._messageFormatterFn;

Globalize.a1793486118 = pluralGeneratorFn(function(n
/*``*/) {
  return 'other';
});
Globalize.b1972545883 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a1154924148 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.b806868691 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a1267600307 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????????????????????????? 8 ?????????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.b653324263 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a2058278364 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.b345953245 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a2037007041 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.b344364482 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a1121040459 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.b1928634175 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a2060156705 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????? SSL ???????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.b2031206582 = messageFormatterFn((function(  ) {
  return function (d) { return "Tableau Public ????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a1184292401 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.b981787829 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a572481109 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????????????????????????????????????????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a327368645 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????? ??????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.b1256118448 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.b1881438233 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????? 8 ???????????????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a1284244892 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.b1701167272 = messageFormatterFn((function(  ) {
  return function (d) { return "??????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a414119757 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????????????????????????????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a1193335917 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a1232682027 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.b890058271 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a1708266529 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a803769790 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.b992044633 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????????????????????????????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a356768284 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.b600446189 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a148579351 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a1378936229 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????????????????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a2145491171 = messageFormatterFn((function(  ) {
  return function (d) { return "?????? ???????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.b1548329213 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a1416131199 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????? Tableau Public ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a1788954688 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a1580195476 = messageFormatterFn((function(  ) {
  return function (d) { return "<a target=\"_blank\" href=\"https://www.tableau.com/ja-jp/tos\">??????????????????</a>??????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a1251959116 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a1756311833 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????????????????????????????????????????????????????????????????????????????????????????????????????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.a431602175 = messageFormatterFn((function(  ) {
  return function (d) { return "??????"; }
})(), Globalize("ja").pluralGenerator({}));
Globalize.b1767754437 = messageFormatterFn((function(  ) {
  return function (d) { return "Tableau Public ????????????"; }
})(), Globalize("ja").pluralGenerator({}));

return new Globalize('ja');

}));

(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define( ["globalize-runtime/plural","globalize-runtime/message"], factory );
	} else if ( typeof exports === "object" ) {

		// Node, CommonJS
		module.exports = factory( require("globalize/dist/globalize-runtime/plural"), require("globalize/dist/globalize-runtime/message") );
	} else {

		// Global
		factory( root.Globalize );
	}
}( this, function( Globalize ) {

var validateParameterTypeNumber = Globalize._validateParameterTypeNumber;
var validateParameterPresence = Globalize._validateParameterPresence;
var pluralGeneratorFn = Globalize._pluralGeneratorFn;
var validateParameterTypeMessageVariables = Globalize._validateParameterTypeMessageVariables;
var messageFormat = Globalize._messageFormat;
var messageFormatterFn = Globalize._messageFormatterFn;

Globalize.a1835044563 = pluralGeneratorFn(function(n
/*``*/) {
  return 'other';
});
Globalize.b171732910 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????? ????????? ??????????????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2015237855 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a326545120 = messageFormatterFn((function(  ) {
  return function (d) { return "????????? ???????????????????"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1729336230 = messageFormatterFn((function(  ) {
  return function (d) { return "8??? ??????????????? ?????? ?????????, ?????? ??? ?????? ????????? ??????????????? ?????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b913683892 = messageFormatterFn((function(  ) {
  return function (d) { return "??????"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1774953009 = messageFormatterFn((function(  ) {
  return function (d) { return "????????? ????????? ????????? ????????? ??????????????????. ????????? ???????????? ??? ?????? ????????? ?????? ????????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a172832848 = messageFormatterFn((function(  ) {
  return function (d) { return "?????? ?????????"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b197364172 = messageFormatterFn((function(  ) {
  return function (d) { return "????????? ?????????"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a337108593 = messageFormatterFn((function(  ) {
  return function (d) { return "?????? ????????? ?????????"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1582776382 = messageFormatterFn((function(  ) {
  return function (d) { return "?????? ???????????? ???????????? ???????????????????"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1591405138 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b280253234 = messageFormatterFn((function(  ) {
  return function (d) { return "??? ???????????? SSL ???????????? ???????????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a745540925 = messageFormatterFn((function(  ) {
  return function (d) { return "Tableau Public ?????????"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b526728412 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????? ???????????? ??? ????????? Tableau?????? ?????? ???????????? ?????? ?????? ????????? ??????????????? ?????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a882377726 = messageFormatterFn((function(  ) {
  return function (d) { return "??? ???????????? ????????? ??? ????????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1091267202 = messageFormatterFn((function(  ) {
  return function (d) { return "??? ???????????? ???????????? ?????? ????????? ????????? ??? ????????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a836594360 = messageFormatterFn((function(  ) {
  return function (d) { return "????????? ????????? ????????? ??????????????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a698438909 = messageFormatterFn((function(  ) {
  return function (d) { return "????????? ????????? ?????? ??????"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1544209196 = messageFormatterFn((function(  ) {
  return function (d) { return "????????? 8??? ??????????????? ?????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a534591817 = messageFormatterFn((function(  ) {
  return function (d) { return "??? ???????????? ???????????? ????????? ?????? ????????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1199928005 = messageFormatterFn((function(  ) {
  return function (d) { return "??????"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a660190976 = messageFormatterFn((function(  ) {
  return function (d) { return "????????? ????????? ?????? ??????: ?????? ??????????????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b571072928 = messageFormatterFn((function(  ) {
  return function (d) { return "????????? ???????????? ???????????? ???????????????. Tableau??? ???????????? ?????? ????????? ?????? ???3????????? ???????????????, ???????????????, ?????? ????????? ???????????? ????????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1773956450 = messageFormatterFn((function(  ) {
  return function (d) { return "????????? ??? ??? ??? ??????????????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2011037006 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????? ??????????????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1157789042 = messageFormatterFn((function(  ) {
  return function (d) { return "??? ????????? ???????????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b590102229 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????? ????????? ????????? ???????????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a141369178 = messageFormatterFn((function(  ) {
  return function (d) { return "????????? ??????????????? ??????????????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a865993999 = messageFormatterFn((function(  ) {
  return function (d) { return "????????? ??????????????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a532967622 = messageFormatterFn((function(  ) {
  return function (d) { return "?????? ????????? ????????? ????????????. ?????? ??????????????? ????????? ?????? ??????????????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2012744906 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????? ????????? ????????? ?????? ?????? ???????????? ?????? ??????????????? ????????? ???????????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2139941294 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????? ??????????????????. ??????????????? ???"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1373386352 = messageFormatterFn((function(  ) {
  return function (d) { return "??? ????????? ?????????"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1211100176 = messageFormatterFn((function(  ) {
  return function (d) { return "??? ???????????? ????????? ??? ????????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b85906452 = messageFormatterFn((function(  ) {
  return function (d) { return "????????? ???????????? ???????????? Tableau Public??? ?????????????????????. ??? ????????? Tableau??? ??? ??? ????????????. Tableau??? ???????????? ?????? ????????? ?????? ???3????????? ???????????????, ???????????????, ?????? ????????? ???????????? ????????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1226349197 = messageFormatterFn((function(  ) {
  return function (d) { return "????????? ?????????"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a374828481 = messageFormatterFn((function(  ) {
  return function (d) { return "<a target=\"_blank\" href=\"https://www.tableau.com/ko-kr/tos\">????????? ??????</a>??? ?????? ?????????"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1589188153 = messageFormatterFn((function(  ) {
  return function (d) { return "?????? ?????? ?????? ??????"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1762565690 = messageFormatterFn((function(  ) {
  return function (d) { return "????????? ???????????? ??????, ????????? ??????????????? ???????????? ?????? ?????????."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1860513900 = messageFormatterFn((function(  ) {
  return function (d) { return "??????"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1587927640 = messageFormatterFn((function(  ) {
  return function (d) { return "Tableau Public ??????"; }
})(), Globalize("ko").pluralGenerator({}));

return new Globalize('ko');

}));

(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define( ["globalize-runtime/plural","globalize-runtime/message"], factory );
	} else if ( typeof exports === "object" ) {

		// Node, CommonJS
		module.exports = factory( require("globalize/dist/globalize-runtime/plural"), require("globalize/dist/globalize-runtime/message") );
	} else {

		// Global
		factory( root.Globalize );
	}
}( this, function( Globalize ) {

var validateParameterTypeNumber = Globalize._validateParameterTypeNumber;
var validateParameterPresence = Globalize._validateParameterPresence;
var pluralGeneratorFn = Globalize._pluralGeneratorFn;
var validateParameterTypeMessageVariables = Globalize._validateParameterTypeMessageVariables;
var messageFormat = Globalize._messageFormat;
var messageFormatterFn = Globalize._messageFormatterFn;

Globalize.a1982807923 = pluralGeneratorFn(function(n
/*``*/) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n;
  return ((t0 && n >= 0 && n <= 2) && n != 2) ? 'one' : 'other';
});
Globalize.b927121166 = messageFormatterFn((function(  ) {
  return function (d) { return "Insira a senha para continuar"; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.a1506851265 = messageFormatterFn((function(  ) {
  return function (d) { return "E-mail"; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.b415724992 = messageFormatterFn((function(  ) {
  return function (d) { return "Esqueceu a senha?"; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.a984971014 = messageFormatterFn((function(  ) {
  return function (d) { return "Deve ter um m??nimo de 8 caracteres e conter caracteres alfab??ticos, num??ricos e especiais."; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.b407751252 = messageFormatterFn((function(  ) {
  return function (d) { return "Senha"; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.a1775649071 = messageFormatterFn((function(  ) {
  return function (d) { return "Insira o endere??o de e-mail associado ?? sua conta e enviaremos um link para redefinir sua senha."; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.b1323124496 = messageFormatterFn((function(  ) {
  return function (d) { return "Redefini????o de senha"; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.b29079148 = messageFormatterFn((function(  ) {
  return function (d) { return "Enviar e-mail"; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.a851249617 = messageFormatterFn((function(  ) {
  return function (d) { return "Crie um agora gratuitamente"; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.a838411166 = messageFormatterFn((function(  ) {
  return function (d) { return "Ainda n??o tem um perfil?"; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.b392368562 = messageFormatterFn((function(  ) {
  return function (d) { return "Fazer logon"; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.a942660974 = messageFormatterFn((function(  ) {
  return function (d) { return "Este site ?? criptografado por SSL"; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.a1074049181 = messageFormatterFn((function(  ) {
  return function (d) { return "Logon do Tableau Public"; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.b883734908 = messageFormatterFn((function(  ) {
  return function (d) { return "?? preciso clicar no link de confirma????o no e-mail que enviamos para que seu perfil seja ativado."; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.b602194082 = messageFormatterFn((function(  ) {
  return function (d) { return "Esse e-mail n??o est?? dispon??vel."; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.b404690142 = messageFormatterFn((function(  ) {
  return function (d) { return "Este campo pode conter apenas letras e caracteres b??sicos."; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.b1647792616 = messageFormatterFn((function(  ) {
  return function (d) { return "Insira um endere??o de e-mail v??lido."; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.a1921353117 = messageFormatterFn((function(  ) {
  return function (d) { return "E-mail ou senha inv??lido"; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.b345172620 = messageFormatterFn((function(  ) {
  return function (d) { return "Sua senha deve ter no m??nimo 8 caracteres."; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.a1686907369 = messageFormatterFn((function(  ) {
  return function (d) { return "J?? existe uma conta com este e-mail"; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.a1493343077 = messageFormatterFn((function(  ) {
  return function (d) { return "Confirmar"; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.b373763488 = messageFormatterFn((function(  ) {
  return function (d) { return "Detalhes de logon incorretos: tente novamente"; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.a790970816 = messageFormatterFn((function(  ) {
  return function (d) { return "Seu endere??o de e-mail ?? obrigat??rio para criar a sua conta. Prometemos nunca alugar, vender ou fornecer suas informa????es pessoais a ningu??m."; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.a897893886 = messageFormatterFn((function(  ) {
  return function (d) { return "Confirme sua senha."; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.b1990515218 = messageFormatterFn((function(  ) {
  return function (d) { return "Insira o seu e-mail."; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.a1536693038 = messageFormatterFn((function(  ) {
  return function (d) { return "Este campo ?? obrigat??rio."; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.b296687157 = messageFormatterFn((function(  ) {
  return function (d) { return "Isso ?? um requerimento legal."; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.b600900934 = messageFormatterFn((function(  ) {
  return function (d) { return "As senhas devem ser correspondentes."; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.b1618392977 = messageFormatterFn((function(  ) {
  return function (d) { return "Insira o seu nome."; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.b209302490 = messageFormatterFn((function(  ) {
  return function (d) { return "Encontramos problemas na comunica????o com nossos servidores. Tente novamente agora ou mais tarde."; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.a528173098 = messageFormatterFn((function(  ) {
  return function (d) { return "Se o e-mail pertencer a uma conta registrada, as informa????es enviadas s??o instru????es para redefinir a sua senha."; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.a619489010 = messageFormatterFn((function(  ) {
  return function (d) { return "Seu perfil foi criado com sucesso. Efetuando logon"; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.a1386043952 = messageFormatterFn((function(  ) {
  return function (d) { return "Criar meu perfil"; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.b12063600 = messageFormatterFn((function(  ) {
  return function (d) { return "Esse e-mail n??o est?? dispon??vel."; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.a1731794060 = messageFormatterFn((function(  ) {
  return function (d) { return "Use o seu endere??o de e-mail para fazer logon no Tableau Public. Ningu??m al??m de n??s ter?? acesso a ele. Prometemos n??o alugar, vender ou fornecer suas informa????es pessoais a terceiros."; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.a937472211 = messageFormatterFn((function(  ) {
  return function (d) { return "Criar um perfil"; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.b93172127 = messageFormatterFn((function(  ) {
  return function (d) { return "Li e concordo com os <a target=\"_blank\" href=\"https://www.tableau.com/pt-br/tos\">Termos de servi??o</a>"; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.b1506742567 = messageFormatterFn((function(  ) {
  return function (d) { return "Ler os termos legais"; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.a996864614 = messageFormatterFn((function(  ) {
  return function (d) { return "Nomes reais s??o importantes e criam um sentimento de comunidade."; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.a260028684 = messageFormatterFn((function(  ) {
  return function (d) { return "Nome"; }
})(), Globalize("pt").pluralGenerator({}));
Globalize.a5893704 = messageFormatterFn((function(  ) {
  return function (d) { return "Registro no Tableau Public"; }
})(), Globalize("pt").pluralGenerator({}));

return new Globalize('pt');

}));

(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define( ["globalize-runtime/plural","globalize-runtime/message"], factory );
	} else if ( typeof exports === "object" ) {

		// Node, CommonJS
		module.exports = factory( require("globalize/dist/globalize-runtime/plural"), require("globalize/dist/globalize-runtime/message") );
	} else {

		// Global
		factory( root.Globalize );
	}
}( this, function( Globalize ) {

var validateParameterTypeNumber = Globalize._validateParameterTypeNumber;
var validateParameterPresence = Globalize._validateParameterPresence;
var pluralGeneratorFn = Globalize._pluralGeneratorFn;
var validateParameterTypeMessageVariables = Globalize._validateParameterTypeMessageVariables;
var messageFormat = Globalize._messageFormat;
var messageFormatterFn = Globalize._messageFormatterFn;

Globalize.b1234768562 = pluralGeneratorFn(function(n
/*``*/) {
  return 'other';
});
Globalize.a1543411621 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1988296844 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b203962323 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b2023691597 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????? 8 ???????????????????????????????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1472909543 = messageFormatterFn((function(  ) {
  return function (d) { return "??????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1233013540 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????????????????????????????????????????????????????????????????????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a16706851 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1394171455 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1082231102 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a2124715851 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1304632895 = messageFormatterFn((function(  ) {
  return function (d) { return "??????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a429965345 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????? SSL ??????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1436606902 = messageFormatterFn((function(  ) {
  return function (d) { return "Tableau Public ??????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a756727089 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????????????????????????????????????????????????????????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1182382667 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a935141205 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1671765701 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1408657488 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1257436953 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????????????????????????? 8 ????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1027651940 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1320435800 = messageFormatterFn((function(  ) {
  return function (d) { return "??????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b8350131 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????????: ????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1755989139 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1832608981 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a2131544801 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1537534687 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b469594434 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b389138265 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1701165340 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a2460179 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????????????????????????????????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1982217449 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????????????????????????????????????????????????????????????????????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1405802843 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????????????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b639247901 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b924327933 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1046508415 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????????????? Tableau Public????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1968596800 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a511483796 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????<a target=\"_blank\" href=\"https://www.tableau.com/zh-cn/tos\">????????????</a>"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1875960396 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1028427239 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????????????????????????????????????????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1480768255 = messageFormatterFn((function(  ) {
  return function (d) { return "??????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b515033541 = messageFormatterFn((function(  ) {
  return function (d) { return "Tableau Public ??????"; }
})(), Globalize("zh-Hans").pluralGenerator({}));

return new Globalize('zh-Hans');

}));

(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define( ["globalize-runtime/plural","globalize-runtime/message"], factory );
	} else if ( typeof exports === "object" ) {

		// Node, CommonJS
		module.exports = factory( require("globalize/dist/globalize-runtime/plural"), require("globalize/dist/globalize-runtime/message") );
	} else {

		// Global
		factory( root.Globalize );
	}
}( this, function( Globalize ) {

var validateParameterTypeNumber = Globalize._validateParameterTypeNumber;
var validateParameterPresence = Globalize._validateParameterPresence;
var pluralGeneratorFn = Globalize._pluralGeneratorFn;
var validateParameterTypeMessageVariables = Globalize._validateParameterTypeMessageVariables;
var messageFormat = Globalize._messageFormat;
var messageFormatterFn = Globalize._messageFormatterFn;

Globalize.b1233845041 = pluralGeneratorFn(function(n
/*``*/) {
  return 'other';
});
Globalize.a1297098534 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.b1295195147 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.b1228656244 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.b390887598 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????? 8 ???????????????????????????????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a811953912 = messageFormatterFn((function(  ) {
  return function (d) { return "??????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a399790459 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????????????????????????????????????????????????????????????????????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a2127997220 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.b1634711584 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a2051812125 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.b537447446 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a420848002 = messageFormatterFn((function(  ) {
  return function (d) { return "??????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a759731106 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????? SSL ??????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a820304105 = messageFormatterFn((function(  ) {
  return function (d) { return "Tableau Public??????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.b426620208 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????????????????????????????????????????????????????????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.b1162284374 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.b1248535722 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a1683081828 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a1738423249 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a468043944 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????????????????????????? 8 ????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a1341782045 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a1671235737 = messageFormatterFn((function(  ) {
  return function (d) { return "??????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a92561836 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????????: ????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.b1317979636 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.b1708535734 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.b1812622558 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a1834749026 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.b118794497 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.b1413832186 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a1712481467 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.b1022233742 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????????????????????????????????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.b31917194 = messageFormatterFn((function(  ) {
  return function (d) { return "??????????????????????????????????????????????????????????????????????????????????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a1188423974 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????????????????????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a1954978916 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a801152964 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.b1277519424 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????????????? Tableau Public????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a1901590047 = messageFormatterFn((function(  ) {
  return function (d) { return "???????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.b1424176491 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????<a target=\"_blank\" href=\"https://www.tableau.com/zh-tw/tos\">????????????</a>"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.b693526003 = messageFormatterFn((function(  ) {
  return function (d) { return "????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a1565799578 = messageFormatterFn((function(  ) {
  return function (d) { return "?????????????????????????????????????????????????????????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a558084672 = messageFormatterFn((function(  ) {
  return function (d) { return "??????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));
Globalize.a729730940 = messageFormatterFn((function(  ) {
  return function (d) { return "Tableau Public ??????"; }
})(), Globalize("zh-Hant").pluralGenerator({}));

return new Globalize('zh-Hant');

}));

(function($, Globalize) {

  function getGlobalizeLocaleFromTableauLocale(locale) {
    switch (locale.toLowerCase()) {
      // German
      case 'de-de':
        return 'de';
      // English (Great British)
      case 'en-gb':
        return 'en-GB';
      // English
      case 'en-us':
        return 'en';
      // Spanish
      case 'es-es':
        return 'es';
      // French
      case 'fr-fr':
        return 'fr';
      // Italian
      case 'it-it':
        return 'it';
      // Japanese
      case 'ja-jp':
        return 'ja';
      // Korean
      case 'ko-kr':
        return 'ko';
      // Portuguese
      case 'pt-br':
        return 'pt';
      // Chinese
      case 'zh-cn':
        return 'zh-Hans';
      // Chinese (Taiwan)
      case 'zh-tw':
        return 'zh-Hant';
      default:
        return 'en';
    }
  }

  function getLocaleFromQueryString() {
    var searchString = window.location.search;
    if (!searchString || searchString.indexOf('?') != 0) {
      // no valid search string, default to English
      return 'en';
    }
    // remove the '?'
    var queryString = searchString.substring(1);
    var params = {}, queries, temp;

    // Split into key/value pairs
    queries = queryString.split("&");

    // Convert the array of strings into an object
    var length = queries.length;
    for (var i = 0; i < length; i++) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }

    return getGlobalizeLocaleFromTableauLocale(params['language']);
  }

  function doTextReplacement() {
    var elementsToBindText = $('[data-translate]').each(function() {
      var elem = $(this);
      var key = elem.attr('data-translate');

      var translatedString = translate(key);
      elem.text(translatedString);
    });

    var elementsToBindHtml = $('[data-translate-html]').each(function() {
      var elem = $(this);
      var key = elem.attr('data-translate-html');

      var translatedString = translate(key);
      elem.html(translatedString);
    });

    var elementsToBindPlaceholder = $('[data-translate-placeholder]').each(function() {
      var elem = $(this);
      var key = elem.attr('data-translate-placeholder');

      var translatedString = translate(key);
      elem.attr('placeholder', translatedString);
    });
  }

  function translate(key) {
    var globalizeInstance = Globalize(window.language);

    var messageFormatter = globalizeInstance.messageFormatter(key);
    if (!messageFormatter) {
      messageFormatter = Globalize('en').messageFormatter(key);
    }
    var translationValues = {};
    return messageFormatter(translationValues);
  }

  window.language = getLocaleFromQueryString();
  window.translate = translate;

  doTextReplacement();

})(jQuery, Globalize);