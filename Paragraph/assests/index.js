var haystack = ` <h1> JavaScript </h1> JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS. <br> JavaScript is a client-side scripting language, which means the source code is processed by the client's web browser rather than on the web server. This means JavaScript functions can run after a webpage has loaded without communicating with the server.<br>
<h1> What Would the Web Look Like Without JavaScript?</h1>
Without JavaScript, all you would have on the web would be HTML and CSS. These alone limit you to a few web page implementations. 90% (if not more) of your webpages would be static, and you'd only have the dynamic changes like animations that CSS provides.<h1>How to Use JavaScript in HTML</h1>

<li>Inline JavaScript</li>
<li>Internal JavaScript, with the script tag</li>
<li>External JavaScript</li>

<h1>JavaScript types </h1>The set of types in the JavaScript language consists of primitive values and objects.
 <h2> Primitive values</h2>All types except objects define immutable values (that is, values which can't be changed).


 <h2>Boolean type </h2>Boolean represents a logical entity and can have two values: true and false. 
 <h2>Null type </h2>The Null type has exactly one value: null.
 <h2>Undefined type </h2>A variable that has not been assigned a value has the value undefined. 
 <h2> Numeric types</h2>ECMAScript has two built-in numeric types: Number and BigInt .
 <h2>String type</h2>JavaScript's String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values. Each element in the String occupies a position in the String.
 <h2>Symbol type </h2>A Symbol is a unique and immutable primitive value and may be used as the key of an Object property
 <h2> Objects</h2>In computer science, an object is a value in memory which is possibly referenced by an identifier.
 <h2> </h2>
 <h2> </h2>

 `
document.querySelector("#haystack").innerHTML = haystack;
function findMyText(find, replacement) {
    haystackText = document.getElementById("haystack").innerHTML;
    ///regexp/ is an ECMAScript1 (ES1) feature.
    //  A regular expression is a pattern of characters. The pattern is used to do pattern-matching "search-and-replace" functions on text.

    //"g"	Perform a global match (find all matches rather than stopping after the first match)

    //'i'	Perform case-insensitive matching
     //"m"	Perform multiline matching
    var match = new RegExp(find, "igm");
    var replaced = "";
    if (replacement.length > 0) {
        replaced = haystackText.replace(match, replacement);
    }
    else {
        var boldText = "<div id='yellow'>" + find + "</div>";
        replaced = haystackText.replace(match, boldText);
    }
    document.getElementById("haystack").innerHTML = replaced;
}