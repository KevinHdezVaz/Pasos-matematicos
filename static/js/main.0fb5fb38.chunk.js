(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{336:function(e,n,t){},339:function(e,n,t){e.exports=t(960)},431:function(e,n,t){},528:function(e,n,t){var a={"(":"left parenthesis",")":"right parenthesis","[":"open bracket","]":"close bracket","\\{":"left brace","\\}":"right brace","\\lvert":"open vertical bar","\\rvert":"close vertical bar","|":"vertical bar","\\uparrow":"up arrow","\\Uparrow":"up arrow","\\downarrow":"down arrow","\\Downarrow":"down arrow","\\updownarrow":"up down arrow","\\leftarrow":"left arrow","\\Leftarrow":"left arrow","\\rightarrow":"right arrow","\\Rightarrow":"right arrow","\\langle":"open angle","\\rangle":"close angle","\\lfloor":"open floor","\\rfloor":"close floor","\\int":"integral","\\intop":"integral","\\lim":"limit","\\ln":"natural log","\\log":"log","\\sin":"sine","\\cos":"cosine","\\tan":"tangent","\\cot":"cotangent","\\sum":"sum","/":"slash",",":"comma",".":"point","-":"negative","+":"plus","~":"tilde",":":"colon","?":"question mark","'":"apostrophe","\\%":"percent"," ":"space","\\ ":"space","\\$":"dollar sign","\\angle":"angle","\\degree":"degree","\\circ":"circle","\\vec":"vector","\\triangle":"triangle","\\pi":"pi","\\prime":"prime","\\infty":"infinity","\\alpha":"alpha","\\beta":"beta","\\gamma":"gamma","\\omega":"omega","\\theta":"theta","\\sigma":"sigma","\\lambda":"lambda","\\tau":"tau","\\Delta":"delta","\\delta":"delta","\\mu":"mu","\\rho":"rho","\\nabla":"del","\\ell":"ell","\\ldots":"dots"},r={"\\prime":"prime","\\degree":"degree","\\circ":"degree"},o={"|":"open vertical bar",".":""},i={"|":"close vertical bar",".":""},c={"+":"plus","-":"minus","\\pm":"plus minus","\\cdot":"dot","*":"times","/":"divided by","\\times":"times","\\div":"divided by","\\circ":"circle","\\bullet":"bullet"},u={"=":"equals","\\approx":"approximately equals","\\neq":"does not equal","\\ne":"does not equal","\\geq":"is greater than or equal to","\\ge":"is greater than or equal to","\\leq":"is less than or equal to","\\le":"is less than or equal to",">":"is greater than","<":"is less than","\\leftarrow":"left arrow","\\Leftarrow":"left arrow","\\rightarrow":"right arrow","\\Rightarrow":"right arrow",":":"colon"},l=function(e,n,t){if(e){var r;if((r="open"===n?e in o?o[e]:a[e]||e:"close"===n?e in i?i[e]:a[e]||e:"bin"===n?c[e]||e:"rel"===n?u[e]||e:a[e]||e)===e&&!/^\w+$/.test(e))throw new Error("KaTeX a11y "+n+" string not found: "+e);/^\d+$/.test(r)&&t.length>0&&/^\d+$/.test(t[t.length-1])?t[t.length-1]+=r:r&&t.push(r)}},s=function(e,n){var t=[];e.push(t),n(t)},p={accent:function(e,n){s(n,function(n){h(e.value.base,n),n.push("with"),h(e.value.accent,n),n.push("on top")})},bin:function(e,n){l(e.value,"bin",n)},close:function(e,n){l(e.value,"close",n)},color:function(e,n){var t=e.value.color.replace(/katex-/,"");s(n,function(n){n.push("start color "+t),h(e.value.value,n),n.push("end color "+t)})},delimsizing:function(e,n){e.value.value&&"."!==e.value.value&&l(e.value.value,"normal",n)},genfrac:function(e,n){s(n,function(n){e.value.hasBarLine?(n.push("start fraction"),l(e.value.leftDelim,"open",n),h(e.value.numer,n),n.push("divided by"),h(e.value.denom,n),l(e.value.rightDelim,"close",n),n.push("end fraction")):(n.push("start binomial"),l(e.value.leftDelim,"open",n),h(e.value.numer,n),n.push("over"),h(e.value.denom,n),l(e.value.rightDelim,"close",n),n.push("end binomial"))})},katex:function(e,n){n.push("KaTeX")},leftright:function(e,n){s(n,function(n){l(e.value.left,"open",n),h(e.value.body,n),l(e.value.right,"close",n)})},llap:function(e,n){h(e.value.body,n)},mathord:function(e,n){h(e.value,n)},op:function(e,n){l(e.value.body,"normal",n)},open:function(e,n){l(e.value,"open",n)},ordgroup:function(e,n){h(e.value,n)},overline:function(e,n){s(n,function(n){n.push("start overline"),h(e.value.body,n),n.push("end overline")})},phantom:function(e,n){n.push("empty space")},punct:function(e,n){l(e.value,"punct",n)},rel:function(e,n){l(e.value,"rel",n)},rlap:function(e,n){h(e.value.body,n)},rule:function(e,n){n.push("rule")},sizing:function(e,n){h(e.value.value,n)},spacing:function(e,n){n.push("space")},styling:function(e,n){h(e.value.value,n)},sqrt:function(e,n){s(n,function(n){e.value.index&&(n.push("root"),n.push("start index"),h(e.value.index,n),n.push("end index")),n.push("square root of"),h(e.value.body,n),n.push("end square root")})},supsub:function(e,n){e.value.base&&h(e.value.base,n),e.value.sub&&s(n,function(n){n.push("start subscript"),h(e.value.sub,n),n.push("end subscript")});var t=e.value.sup;if(t){var a=r[t],o=t.value;!a&&o&&(a="object"===typeof o&&1===o.length?r[o[0].value]:r[o]),s(n,function(n){a?n.push(a):(n.push("start superscript"),h(e.value.sup,n),n.push("end superscript"))})}},text:function(e,n){"string"!==typeof e.value?h(e.value.body,n):l(e,"normal",n)},textord:function(e,n){h(e.value,n)}},h=function e(n,t){if(t=t||[],"string"===typeof n)l(n,"normal",t);else if(n.constructor===Array)for(var a=0;a<n.length;a++)e(n[a],t);else{if(!(n.type&&n.type in p))throw new Error("KaTeX a11y un-recognized type: "+n.type);p[n.type](n,t)}return t},g=function(e){return katex.__parse(e)};e.exports={render:function(e,n){var t=g(e);!function e(n,t){for(var a=t.ownerDocument,r=0;r<n.length;r++){var o=n[r];if(r>0&&t.appendChild(a.createTextNode(", ")),"string"===typeof o)t.appendChild(a.createTextNode(o));else{var i=a.createElement("span");t.appendChild(i),e(o,i)}}}(h(t),n)},renderString:function(e){var n=g(e);return function e(n){var t=[];return n.forEach(function(n){Array.isArray(n)?t=t.concat(e(n)):t.push(n)}),t}(h(n)).join(", ")},parseMath:g}},61:function(e,n){var t={isOperator:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return"OperatorNode"===e.type&&"unaryMinus"!==e.fn&&"*+-/^".includes(e.op)&&(!n||e.op===n)},isParenthesis:function(e){return"ParenthesisNode"===e.type},isUnaryMinus:function(e){return"OperatorNode"===e.type&&"unaryMinus"===e.fn},isFunction:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return"FunctionNode"===e.type&&(!n||e.fn.name===n)},isSymbol:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"SymbolNode"===e.type||!(!n||!t.isUnaryMinus(e))&&t.isSymbol(e.args[0],!1)},isConstant:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"ConstantNode"===e.type||!(!n||!t.isUnaryMinus(e))&&(!!t.isConstant(e.args[0],!1)&&parseFloat(e.args[0].value)>=0)},isConstantFraction:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!!t.isOperator(e,"/")&&e.args.every(function(e){return t.isConstant(e,n)})},isConstantOrConstantFraction:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!(!t.isConstant(e,n)&&!t.isConstantFraction(e,n))},isIntegerFraction:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!t.isConstantFraction(e,n))return!1;var a=e.args[0],r=e.args[1];return n&&(t.isUnaryMinus(a)&&(a=a.args[0]),t.isUnaryMinus(r)&&(r=r.args[0])),Number.isInteger(parseFloat(a.value))&&Number.isInteger(parseFloat(r.value))}};e.exports=t},89:function(e,n,t){function a(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==t.return||t.return()}finally{if(u)throw i}}}}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var o=t(526),i=t(4),c=t(147),u=t(51),l=t(527),s=t(528),p=[],h=[],g=!1,f=function(e,n){p.push(e),h.push(n),g||(g=!0,setTimeout(T,0))},d=function(e){if("undefined"!==typeof MathJax)e();else{if("undefined"===typeof Khan||!Khan.mathJaxLoaded)throw new Error("MathJax wasn't loaded before it was needed by <TeX/>");Khan.mathJaxLoaded.then(e)}},T=function(){d(function(){MathJax.Hub.Queue(function(){var e=MathJax.Hub.elementScripts;MathJax.Hub.elementScripts=function(e){return p};try{return MathJax.Hub.Process(null,function(){var e,n=a(h);try{for(n.s();!(e=n.n()).done;){(0,e.value)()}}catch(t){n.e(t)}finally{n.f()}p=[],h=[],g=!1})}catch(n){throw n}finally{MathJax.Hub.elementScripts=e}})})},m={border:0,clip:"rect(0,0,0,0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px"},E=l({propTypes:{children:u.node,onClick:u.func,onRender:u.func,style:u.any},mixins:[o],getDefaultProps:function(){return{onRender:function(){},onClick:null}},componentDidMount:function(){var e=this;if(this._root=c.findDOMNode(this),this.refs.katex.childElementCount>0)this.props.onRender(this._root);else{var n=this.props.children;this.setScriptText(n),f(this.script,function(){return e.props.onRender(e._root)})}},componentDidUpdate:function(e,n){var t=this;if(this.refs.katex.childElementCount>0)return this.script&&d(function(){var e=MathJax.Hub.getJaxFor(t.script);e&&e.Remove()}),void this.props.onRender();var a=this.props.children;this.script?d(function(){MathJax.Hub.Queue(function(){var e=MathJax.Hub.getJaxFor(t.script);if(e)return e.Text(a,t.props.onRender);t.setScriptText(a),f(t.script,t.props.onRender)})}):(this.setScriptText(a),f(this.script,this.props.onRender))},componentWillUnmount:function(){var e=this;this.script&&d(function(){var n=MathJax.Hub.getJaxFor(e.script);n&&n.Remove()})},setScriptText:function(e){this.script||(this.script=document.createElement("script"),this.script.type="math/tex",c.findDOMNode(this.refs.mathjax).appendChild(this.script)),"text"in this.script?this.script.text=e:this.script.textContent=e},render:function(){var e=null;try{e={__html:katex.renderToString(this.props.children)}}catch(t){if(t.__proto__!==katex.ParseError.prototype)throw t}var n=null;if(e)try{n={__html:s.renderString(this.props.children)}}catch(t){}return i.createElement("span",{style:this.props.style,onClick:this.props.onClick},i.createElement("span",{ref:"mathjax"}),i.createElement("span",{ref:"katex",dangerouslySetInnerHTML:e,"aria-hidden":!!e&&!!n}),i.createElement("span",{dangerouslySetInnerHTML:n,style:m}))}});e.exports=E},90:function(e,n){var t=function(e){return"".concat(e.leftNode.toTex()," ").concat(e.comparator," ").concat(e.rightNode.toTex())};e.exports={oldNode:function(e){return e.oldNode?e.oldNode.toTex():t(e.oldEquation)},newNode:function(e){return e.newNode?e.newNode.toTex():t(e.newEquation)}}},958:function(e,n,t){},959:function(e,n,t){},960:function(e,n,t){"use strict";t.r(n);var a=t(4),r=t.n(a),o=t(147),i=t.n(o),c=(t(431),t(56)),u=t(57),l=t(59),s=t(58),p=t(60),h=t(337),g=t.n(h),f=t(338),d=t.n(f),T=t(89),m=t.n(T),E=t(0),v=t.n(E),_=t(90),O=t.n(_),C=(t(336),t(91)),N=t(61),I=t.n(N),y={changeFormatFunctionMap:{}},M={"+":"Combine","-":"Combine","*":"Multiply","/":"Divide"},x={"=":"equal to",">":"greater than",">=":"greater than or equal to","<":"less than","<=":"less than or equal to"};function F(e){return e.filter(function(e){return e.changeGroup})}function S(e){if(e.oldNode)return F(e.oldNode);if(e.oldEquation){var n=F(e.oldEquation.leftNode),t=F(e.oldEquation.rightNode);return[].concat(Object(C.a)(n),Object(C.a)(t))}return null}function R(e){if(e.newNode)return F(e.newNode);if(e.newEquation){var n=F(e.newEquation.leftNode),t=F(e.newEquation.rightNode);return[].concat(Object(C.a)(n),Object(C.a)(t))}return null}function b(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.forEach(function(e){e.changeGroup=void 0});var t=e.map(function(e){return e.toTex()});return n||(t=Object(C.a)(new Set(t))),0===t.length?"":1===t.length?t[0]:"".concat(t.slice(0,-1).join(", ")," \\text{ and } ").concat(t.slice(-1))}y.formatChange=function(e){if(!(e.changeType in y.changeFormatFunctionMap))return console.error(e.changeType+" does not have a change function!"),e.changeType;var n=(0,y.changeFormatFunctionMap[e.changeType])(e);return n||"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.ABSOLUTE_VALUE]=function(e){var n=S(e);if(1!==n.length)return null;var t=n[0];if(!I.a.isFunction(t,"abs"))return null;var a=t.args[0].toTex();return"\\text{Take the absolute value of } ".concat(a)},y.changeFormatFunctionMap[E.ChangeTypes.ADD_COEFFICIENT_OF_ONE]=function(e){var n=S(e),t=R(e);if(0===n.length||t.length!==n.length)return null;var a=b(n),r=b(t);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},y.changeFormatFunctionMap[E.ChangeTypes.ADD_EXPONENT_OF_ONE]=function(e){var n=S(e),t=R(e);if(0===n.length||t.length!==n.length)return null;var a=b(n),r=b(t);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},y.changeFormatFunctionMap[E.ChangeTypes.ADD_FRACTIONS]=function(e){var n=S(e),t=R(e);if(1!==n.length||1!==t.length)return null;var a=n[0];if(!I.a.isOperator(a)||"+"!==a.op||a.args.length>3)return null;var r=b(a.args,!0),o=t[0].toTex();return"\\text{Add } ".concat(r," \\text{ to get } ").concat(o)},y.changeFormatFunctionMap[E.ChangeTypes.ADD_NUMERATORS]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.ADD_POLYNOMIAL_TERMS]=function(e){var n=S(e),t=R(e);if(1!==n.length||1!==t.length)return null;var a=n[0];if(!I.a.isOperator(a)||"+"!==a.op)return null;var r=b(a.args,!0),o=t[0].toTex();return"\\text{Add } ".concat(r," \\text{ to get } ").concat(o)},y.changeFormatFunctionMap[E.ChangeTypes.ADD_TO_BOTH_SIDES]=function(e){var n=R(e);if(2!==n.length)return null;var t=n[0].toTex();return"\\text{Add } ".concat(t," \\text{ to both sides}")},y.changeFormatFunctionMap[E.ChangeTypes.BREAK_UP_FRACTION]=function(e){var n=S(e);if(1!==n.length)return null;var t=b(n);return"\\text{Break up the fraction } ".concat(t)},y.changeFormatFunctionMap[E.ChangeTypes.CANCEL_EXPONENT]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.CANCEL_EXPONENT_AND_ROOT]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.CANCEL_MINUSES]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.CANCEL_ROOT]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.CANCEL_TERMS]=function(e){var n=S(e);if(1!==n.length)return null;var t=b(n);return"\\text{Cancel } ".concat(t," \\text{ from the numerator and denominator}")},y.changeFormatFunctionMap[E.ChangeTypes.COLLECT_AND_COMBINE_LIKE_TERMS]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.COLLECT_EXPONENTS]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.COLLECT_LIKE_TERMS]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.COMBINE_NUMERATORS]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.COMBINE_UNDER_ROOT]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.COMMON_DENOMINATOR]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.CONVERT_INTEGER_TO_FRACTION]=function(e){var n=S(e),t=R(e);if(1!==n.length||1!==t.length)return null;var a=b(n),r=b(t);return"\\text{Change } ".concat(a," \\text{ to } ").concat(r," \\text{ so that it has a shared denominator}")},y.changeFormatFunctionMap[E.ChangeTypes.CONVERT_MULTIPLICATION_TO_EXPONENT]=function(e){var n=S(e),t=R(e);if(1!==n.length||1!==t.length)return null;var a=b(n),r=b(t);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},y.changeFormatFunctionMap[E.ChangeTypes.DISTRIBUTE]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.DISTRIBUTE_NEGATIVE_ONE]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.DISTRIBUTE_NTH_ROOT]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.DIVIDE_FRACTION_FOR_ADDITION]=function(e){var n=S(e),t=R(e);if(1!==n.length||1!==t.length)return null;var a=b(n),r=b(t);return"\\text{Divide } ".concat(a," \\text{ so it's in the decimal form } ").concat(r)},y.changeFormatFunctionMap[E.ChangeTypes.DIVIDE_FROM_BOTH_SIDES]=function(e){var n=R(e);if(2!==n.length)return null;var t=n[0].toTex();return"\\text{Divide both sides by } ".concat(t)},y.changeFormatFunctionMap[E.ChangeTypes.DIVISION_BY_NEGATIVE_ONE]=function(e){var n=S(e),t=R(e);if(1!==n.length||1!==t.length)return null;var a=b(n),r=b(t);return"".concat(a," \\text{ divided by -1 is } ").concat(r)},y.changeFormatFunctionMap[E.ChangeTypes.DIVISION_BY_ONE]=function(e){var n=S(e),t=R(e);if(1!==n.length||1!==t.length)return null;var a=b(n),r=b(t);return"".concat(a," \\text{ divided by 1 is } ").concat(r)},y.changeFormatFunctionMap[E.ChangeTypes.EVALUATE_DISTRIBUTED_NTH_ROOT]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.FACTOR_INTO_PRIMES]=function(e){var n=S(e),t=R(e);if(1!==n.length||t.length<n.length||t.length>5)return null;var a=b(n),r=b(t);return"\\text{Factor } ".concat(a," \\text{ into its prime factors: } ").concat(r)},y.changeFormatFunctionMap[E.ChangeTypes.GROUP_COEFFICIENTS]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.GROUP_TERMS_BY_ROOT]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.MULTIPLY_BOTH_SIDES_BY_INVERSE_FRACTION]=function(e){var n=R(e);if(2!==n.length)return null;var t=n[0].toTex();return"\\text{Multiply both sides by the inverse } ".concat(t)},y.changeFormatFunctionMap[E.ChangeTypes.MULTIPLY_BOTH_SIDES_BY_NEGATIVE_ONE]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.MULTIPLY_BY_INVERSE]=function(e){var n=S(e),t=R(e);if(1!==n.length||1!==t.length)return null;var a=b(n,!0),r=b(t);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},y.changeFormatFunctionMap[E.ChangeTypes.MULTIPLY_BY_ZERO]=function(e){var n=S(e),t=R(e);if(1!==n.length||1!==t.length)return null;var a=b(n),r=b(t);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},y.changeFormatFunctionMap[E.ChangeTypes.MULTIPLY_COEFFICIENTS]=function(e){var n=S(e),t=R(e);if(1!==n.length||1!==t.length)return null;var a=n[0];if(!I.a.isOperator(a)||"*"!==a.op)return null;var r=b(n,!0),o=t[0].toTex();return"\\text{Multiply the coefficients } ".concat(r," \\text{ to get } ").concat(o)},y.changeFormatFunctionMap[E.ChangeTypes.MULTIPLY_DENOMINATORS]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.MULTIPLY_FRACTIONS]=function(e){var n=S(e),t=R(e);if(1!==n.length||1!==t.length)return null;var a=n[0];if(!I.a.isOperator(a)||"*"!==a.op)return null;var r=b(a.args,!0),o=t[0].toTex();return"\\text{Multiply } ".concat(r," \\text{ to get } ").concat(o)},y.changeFormatFunctionMap[E.ChangeTypes.MULTIPLY_NUMERATORS]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.MULTIPLY_POLYNOMIAL_TERMS]=function(e){var n=S(e),t=R(e);if(1!==n.length||1!==t.length)return null;var a=n[0];if(!I.a.isOperator(a)||"*"!==a.op)return null;var r=b(a.args,!0),o=t[0].toTex();return"\\text{Multiply } ".concat(r," \\text{ to get } ").concat(o)},y.changeFormatFunctionMap[E.ChangeTypes.MULTIPLY_TO_BOTH_SIDES]=function(e){var n=R(e);if(2!==n.length)return null;var t=n[0].toTex();return"\\text{Multiply both sides by } ".concat(t)},y.changeFormatFunctionMap[E.ChangeTypes.NO_CHANGE]=function(){return null},y.changeFormatFunctionMap[E.ChangeTypes.NTH_ROOT_VALUE]=function(e){var n=S(e);if(1!==n.length)return null;var t=b(n);return"\\text{Take the root of } ".concat(t)},y.changeFormatFunctionMap[E.ChangeTypes.REARRANGE_COEFF]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.REDUCE_EXPONENT_BY_ZERO]=function(e){var n=S(e),t=R(e);if(1!==n.length||1!==t.length)return null;var a=b(n),r=b(t);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},y.changeFormatFunctionMap[E.ChangeTypes.REDUCE_ZERO_NUMERATOR]=function(e){var n=S(e),t=R(e);if(1!==n.length||1!==t.length)return null;var a=b(n),r=b(t);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},y.changeFormatFunctionMap[E.ChangeTypes.REMOVE_ADDING_ZERO]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.REMOVE_EXPONENT_BY_ONE]=function(e){var n=S(e),t=R(e);if(1!==n.length||1!==t.length)return null;var a=b(n),r=b(t);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},y.changeFormatFunctionMap[E.ChangeTypes.REMOVE_MULTIPLYING_BY_NEGATIVE_ONE]=function(e){var n=S(e),t=R(e);if(1!==n.length||1!==t.length)return null;var a=b(n),r=b(t);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},y.changeFormatFunctionMap[E.ChangeTypes.REMOVE_MULTIPLYING_BY_ONE]=function(e){var n=S(e),t=R(e);if(1!==n.length||1!==t.length)return null;var a=b(n),r=b(t);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},y.changeFormatFunctionMap[E.ChangeTypes.RESOLVE_DOUBLE_MINUS]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.SIMPLIFY_ARITHMETIC]=function(e){var n=S(e),t=R(e);if(1!==n.length||1!==t.length)return null;var a=n[0];if(!I.a.isOperator(a)||-1==="+-*/^".indexOf(a.op))return null;var r=b(a.args,!0),o=t[0].toTex();return"\\text{".concat(M[a.op]," } ").concat(r," \\text{ to get } ").concat(o)},y.changeFormatFunctionMap[E.ChangeTypes.SIMPLIFY_DIVISION]=function(e){var n=S(e),t=R(e);if(1!==n.length||1!==t.length)return null;var a=b(n),r=b(t);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},y.changeFormatFunctionMap[E.ChangeTypes.SIMPLIFY_FRACTION]=function(e){var n=S(e),t=R(e);if(1!==n.length||1!==t.length)return null;var a=b(n),r=b(t);return"\\text{Simplify } ".concat(a," \\text{ to } ").concat(r)},y.changeFormatFunctionMap[E.ChangeTypes.SIMPLIFY_LEFT_SIDE]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.SIMPLIFY_RIGHT_SIDE]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.SIMPLIFY_SIGNS]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.SIMPLIFY_TERMS]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.STATEMENT_IS_FALSE]=function(e){var n=e.newEquation.comparator;return"\\text{The left side is not ".concat(x[n]," the right side}")},y.changeFormatFunctionMap[E.ChangeTypes.STATEMENT_IS_TRUE]=function(e){var n=e.newEquation.comparator;return"\\text{The left side is ".concat(x[n]," the right side}")},y.changeFormatFunctionMap[E.ChangeTypes.SUBTRACT_FROM_BOTH_SIDES]=function(e){var n=R(e);if(2!==n.length)return null;var t=n[0].toTex();return"\\text{Subtract } ".concat(t," \\text{ from both sides}")},y.changeFormatFunctionMap[E.ChangeTypes.SWAP_SIDES]=function(e){return"\\text{".concat(y.ChangeText[e.changeType],"}")},y.changeFormatFunctionMap[E.ChangeTypes.UNARY_MINUS_TO_NEGATIVE_ONE]=function(e){var n=S(e),t=R(e);if(0===n.length||t.length!==n.length)return null;var a=b(n),r=b(t);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},y.ChangeText={ABSOLUTE_VALUE:"Toma el valor absoluto",ADD_COEFFICIENT_OF_ONE:"Reescribir el t\xe9rmino para que tenga un coeficiente de 1",ADD_EXPONENT_OF_ONE:"Reescribe el t\xe9rmino para que tenga un exponente de 1",ADD_FRACTIONS:"Suma las fracciones",ADD_NUMERATORS:"Agrega los t\xe9rminos en el numerador",ADD_POLYNOMIAL_TERMS:"Suma los t\xe9rminos polinomiales",ADD_TO_BOTH_SIDES:"Agrega el t\xe9rmino a ambos lados",BREAK_UP_FRACTION:"Divide la fracci\xf3n",CANCEL_EXPONENT:"Cancelar el exponente",CANCEL_EXPONENT_AND_ROOT:"Cancelar el exponente y la ra\xedz",CANCEL_MINUSES:"Cancelar los negativos en el numerador y denominador",CANCEL_ROOT:"Cancelar la ra\xedz",CANCEL_TERMS:"Cancelar t\xe9rminos similares en el numerador y denominador",COLLECT_AND_COMBINE_LIKE_TERMS:"Recopilar y combinar t\xe9rminos similares",COLLECT_EXPONENTS:"Recoge los exponentes",COLLECT_LIKE_TERMS:"Identifica los t\xe9rminos similares y agr\xfapalos",COMBINE_NUMERATORS:"Combinar los numeradores con un denominador compartido",COMMON_DENOMINATOR:"Multiplica los t\xe9rminos para que compartan un denominador com\xfan",COMBINE_UNDER_ROOT:"Combinar t\xe9rminos con la misma ra\xedz",CONVERT_INTEGER_TO_FRACTION:"Cambia el n\xfamero a una fracci\xf3n con el mismo denominador",CONVERT_MULTIPLICATION_TO_EXPONENT:"Cambiar repetidamente multiplicando un t\xe9rmino por un exponente",DISTRIBUIR:"Distribuir entre par\xe9ntesis",DISTRIBUTE_NEGATIVE_ONE:"Distribuir -1 entre par\xe9ntesis",DISTRIBUTE_NTH_ROOT:"Distribuir la ra\xedz en cada t\xe9rmino",DIVIDE_FRACTION_FOR_ADDITION:"Divide las fracciones para convertirlas a forma decimal",DIVIDE_FROM_BOTH_SIDES:"Divide el t\xe9rmino de ambos lados",DIVISION_BY_NEGATIVE_ONE:"Reescribe cualquier t\xe9rmino dividido por -1 como el negativo del t\xe9rmino",DIVISION_BY_ONE:"Reescribe cualquier t\xe9rmino dividido por 1 como solo el t\xe9rmino",EVALUATE_DISTRIBUTED_NTH_ROOT:"Saca la ra\xedz de todos los t\xe9rminos",FACTOR_INTO_PRIMES:"Factoriza el n\xfamero en sus factores primos",GROUP_COEFFICIENTS:"Agrupa los coeficientes",GROUP_TERMS_BY_ROOT:"Agrupar factores de repetici\xf3n",MULTIPLY_BOTH_SIDES_BY_INVERSE_FRACTION:"Multiplica ambos lados por el inverso de la fracci\xf3n",MULTIPLY_BOTH_SIDES_BY_NEGATIVE_ONE:"Multiplica ambos lados por -1",MULTIPLY_BY_INVERSE:"Reescribe la divisi\xf3n como multiplicaci\xf3n por el inverso",MULTIPLY_BY_ZERO:"Reescribe cualquier t\xe9rmino multiplicado por 0 como 0",MULTIPLY_COEFFICIENTS:"Multiplica los coeficientes juntos",MULTIPLY_DENOMINATORS:"Multiplica los t\xe9rminos en los denominadores",MULTIPLY_FRACTIONS:"Multiplica las fracciones",MULTIPLY_NUMERATORS:"Multiplica los t\xe9rminos en los numeradores",MULTIPLY_POLYNOMIAL_TERMS:"Multiplica los t\xe9rminos polinomiales juntos",MULTIPLY_TO_BOTH_SIDES:"Multiplica el t\xe9rmino a ambos lados",NTH_ROOT_VALUE:"Saca la ra\xedz del n\xfamero",NO_CHANGE:"Sin cambios",REARRANGE_COEFF:"Mover el coeficiente al principio del t\xe9rmino",REDUCE_ZERO_NUMERATOR:"Reescribe cero dividido por cualquier cosa como cero",REMOVE_EXPONENT_BY_ONE:"Reescribe cualquier t\xe9rmino a la potencia de 1 como \xe9l mismo",REDUCE_EXPONENT_BY_ZERO:"Reescribe cualquier t\xe9rmino a la potencia de 0 como 1",REMOVE_ADDING_ZERO:"Eliminar cero al agregar",REMOVE_MULTIPLYING_BY_NEGATIVE_ONE:"Reescribe cualquier t\xe9rmino multiplicado por -1 como el negativo del t\xe9rmino",REMOVE_MULTIPLYING_BY_ONE:"Reescribe cualquier t\xe9rmino multiplicado por 1 como solo el t\xe9rmino",RESOLVE_DOUBLE_MINUS:"Cambiar restar un negativo a suma",SIMPLIFY_ARITHMETIC:"Evaluar la aritm\xe9tica",SIMPLIFY_DIVISION:"Reescribe la cadena de divisi\xf3n",SIMPLIFY_FRACTION:"Simplifique dividiendo la parte superior e inferior por el m\xe1ximo com\xfan denominador",SIMPLIFY_LEFT_SIDE:"Simplifica el lado izquierdo",SIMPLIFY_RIGHT_SIDE:"Simplifica el lado derecho",SIMPLIFY_SIGNS:"Mueve el signo negativo al numerador",SIMPLIFY_TERMS:"Simplificar despu\xe9s de distribuir",STATEMENT_IS_FALSE:"La declaraci\xf3n es falsa",STATEMENT_IS_TRUE:"La declaraci\xf3n es verdadera",SUBTRACT_FROM_BOTH_SIDES:"Resta el t\xe9rmino de ambos lados",SWAP_SIDES:"Cambiar lados",UNARY_MINUS_TO_NEGATIVE_ONE:"Reescribe menos como un coeficiente de -1"};var A=y,L=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(o)))).state={substepsExpanded:!1},t.toggleSubsteps=function(){var e=t.state.substepsExpanded;t.setState({substepsExpanded:!e})},t.renderStep=function(e){return r.a.createElement("div",{className:"step latex"},r.a.createElement("div",null,r.a.createElement(m.a,null,O.a.newNode(e))))},t.renderSubsteps=function(e){var a=e.substeps;return 0===a.length?null:r.a.createElement("div",{className:"substeps"},r.a.createElement("div",{className:"latex"},r.a.createElement(m.a,null,O.a.oldNode(a[0]))),a.map(function(e,a){return r.a.createElement(n,{step:e,key:t.props.index+a.toString()})}))},t}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.props.step,n=this.state.substepsExpanded,t=r.a.createElement("div",{onClick:this.toggleSubsteps},r.a.createElement("div",{className:"toggleSubsteps"},this.state.substepsExpanded?"\u25bc":"\u25ba"," Subpasos"));return r.a.createElement("div",{key:O.a.oldNode(e)},r.a.createElement("div",{className:"changeDescription"},r.a.createElement(m.a,null,A.formatChange(e))),e.substeps.length>0&&t,n&&this.renderSubsteps(e),this.renderStep(e))}}]),n}(a.Component),D=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(o)))).renderSteps=function(e){var n=e.map(function(e,n){return r.a.createElement(L,{step:e,key:n})});return r.a.createElement("div",null,r.a.createElement("div",{className:"latex"},r.a.createElement(m.a,null,O.a.oldNode(e[0]))),n)},t}return Object(p.a)(n,e),Object(u.a)(n,[{key:"isEquation",value:function(e){var n=!1;return["<=",">=","=","<",">"].forEach(function(t){e.includes(t)&&(n=!0)}),n}},{key:"render",value:function(){var e=this.props.input,n=this.isEquation(e)?v.a.solveEquation(e):v.a.simplifyExpression(e);return 0===n.length?r.a.createElement("div",{className:"error"},"No hay pasos para esta entrada :( ",r.a.createElement("br",null)," ",r.a.createElement("br",null),"Esto probablemente se deba a que: ",r.a.createElement("br",null),"1. Tu novia te dejo ",r.a.createElement("br",null),"2. Esto ya est\xe1 simplificado / resuelto ",r.a.createElement("br",null),"3. Tuvimos problemas para analizar su entrada."):r.a.createElement("div",{className:"steps"},this.renderSteps(n))}}]),n}(a.Component),w=(t(958),function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={mathString:"2x + 4 + 5x + 4"},t.onMathStringChange=function(e,n){t.setState({mathString:n})},t}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"demo"},r.a.createElement("div",{className:"input"},r.a.createElement("span",{className:"yourInput"},"Entrada de datos:"),r.a.createElement(d.a,{name:"mathString",value:this.state.mathString,onChange:this.onMathStringChange,underlineFocusStyle:{borderColor:"#1d84ff"}})),r.a.createElement("div",{className:"stepsTitle"},"Pasos"),r.a.createElement(D,{input:this.state.mathString}))}}]),n}(a.Component)),U=(t(959),function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement("h2",null,"EasyMath")),r.a.createElement(w,null)))}}]),n}(a.Component)),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(U,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/mathsteps-website",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/mathsteps-website","/service-worker.js");P?function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Y(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):Y(e)})}}()}},[[339,1,2]]]);
//# sourceMappingURL=main.0fb5fb38.chunk.js.map