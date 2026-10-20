goog.provide('phonebook.ui.validation');
/**
 * Loose international phone format: optional +, then 7-20 digits with
 *   optional spaces, dashes, dots and parentheses.
 */
phonebook.ui.validation.phone_pattern = /^\+?[0-9][0-9\s\-().]{6,19}$/;
phonebook.ui.validation.email_pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
phonebook.ui.validation.too_long_QMARK_ = (function phonebook$ui$validation$too_long_QMARK_(s,n){
return (cljs.core.count(s) > n);
});
/**
 * Validate a contact form map. Returns {} when valid, otherwise a map of
 *   field keyword -> error message.
 */
phonebook.ui.validation.validate_contact = (function phonebook$ui$validation$validate_contact(p__18899){
var map__18900 = p__18899;
var map__18900__$1 = cljs.core.__destructure_map(map__18900);
var _form = map__18900__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18900__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var phoneNumber = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18900__$1,new cljs.core.Keyword(null,"phoneNumber","phoneNumber",-1478227908));
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18900__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18900__$1,new cljs.core.Keyword(null,"address","address",559499426));
var G__18901 = cljs.core.PersistentArrayMap.EMPTY;
var G__18901__$1 = ((clojure.string.blank_QMARK_(name))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18901,new cljs.core.Keyword(null,"name","name",1843675177),"Name is required"):G__18901);
var G__18901__$2 = (((((!(clojure.string.blank_QMARK_(name)))) && (phonebook.ui.validation.too_long_QMARK_(name,(255)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18901__$1,new cljs.core.Keyword(null,"name","name",1843675177),"Name must be 255 characters or fewer"):G__18901__$1);
var G__18901__$3 = ((clojure.string.blank_QMARK_(phoneNumber))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18901__$2,new cljs.core.Keyword(null,"phoneNumber","phoneNumber",-1478227908),"Phone number is required"):G__18901__$2);
var G__18901__$4 = (((((!(clojure.string.blank_QMARK_(phoneNumber)))) && (cljs.core.not(cljs.core.re_matches(phonebook.ui.validation.phone_pattern,phoneNumber)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18901__$3,new cljs.core.Keyword(null,"phoneNumber","phoneNumber",-1478227908),"Phone number format is invalid, e.g. +1 555 123 4567 or 0171 2345678"):G__18901__$3);
var G__18901__$5 = (((((!(clojure.string.blank_QMARK_(phoneNumber)))) && (phonebook.ui.validation.too_long_QMARK_(phoneNumber,(50)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18901__$4,new cljs.core.Keyword(null,"phoneNumber","phoneNumber",-1478227908),"Phone number must be 50 characters or fewer"):G__18901__$4);
var G__18901__$6 = (((((!(clojure.string.blank_QMARK_(email)))) && (cljs.core.not(cljs.core.re_matches(phonebook.ui.validation.email_pattern,email)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18901__$5,new cljs.core.Keyword(null,"email","email",1415816706),"Email address format is invalid"):G__18901__$5);
if((((!(clojure.string.blank_QMARK_(email)))) && (phonebook.ui.validation.too_long_QMARK_(email,(255))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18901__$6,new cljs.core.Keyword(null,"email","email",1415816706),"Email must be 255 characters or fewer");
} else {
return G__18901__$6;
}
});
/**
 * Validate a login form map. Returns {} when valid.
 */
phonebook.ui.validation.validate_login = (function phonebook$ui$validation$validate_login(p__18902){
var map__18903 = p__18902;
var map__18903__$1 = cljs.core.__destructure_map(map__18903);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18903__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18903__$1,new cljs.core.Keyword(null,"password","password",417022471));
var G__18904 = cljs.core.PersistentArrayMap.EMPTY;
var G__18904__$1 = ((clojure.string.blank_QMARK_(email))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18904,new cljs.core.Keyword(null,"email","email",1415816706),"Email is required"):G__18904);
var G__18904__$2 = (((((!(clojure.string.blank_QMARK_(email)))) && (cljs.core.not(cljs.core.re_matches(phonebook.ui.validation.email_pattern,email)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18904__$1,new cljs.core.Keyword(null,"email","email",1415816706),"Email address format is invalid"):G__18904__$1);
if(clojure.string.blank_QMARK_(password)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18904__$2,new cljs.core.Keyword(null,"password","password",417022471),"Password is required");
} else {
return G__18904__$2;
}
});
/**
 * Validate a registration form map (includes password confirmation).
 */
phonebook.ui.validation.validate_register = (function phonebook$ui$validation$validate_register(p__18905){
var map__18906 = p__18905;
var map__18906__$1 = cljs.core.__destructure_map(map__18906);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18906__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18906__$1,new cljs.core.Keyword(null,"password","password",417022471));
var confirm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18906__$1,new cljs.core.Keyword(null,"confirm","confirm",-2004000608));
var G__18907 = cljs.core.PersistentArrayMap.EMPTY;
var G__18907__$1 = ((clojure.string.blank_QMARK_(email))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18907,new cljs.core.Keyword(null,"email","email",1415816706),"Email is required"):G__18907);
var G__18907__$2 = (((((!(clojure.string.blank_QMARK_(email)))) && (cljs.core.not(cljs.core.re_matches(phonebook.ui.validation.email_pattern,email)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18907__$1,new cljs.core.Keyword(null,"email","email",1415816706),"Email address format is invalid"):G__18907__$1);
var G__18907__$3 = ((clojure.string.blank_QMARK_(password))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18907__$2,new cljs.core.Keyword(null,"password","password",417022471),"Password is required"):G__18907__$2);
var G__18907__$4 = (((((!(clojure.string.blank_QMARK_(password)))) && ((cljs.core.count(password) < (8)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18907__$3,new cljs.core.Keyword(null,"password","password",417022471),"Password must be at least 8 characters"):G__18907__$3);
var G__18907__$5 = (((((!(clojure.string.blank_QMARK_(password)))) && (phonebook.ui.validation.too_long_QMARK_(password,(128)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18907__$4,new cljs.core.Keyword(null,"password","password",417022471),"Password must be 128 characters or fewer"):G__18907__$4);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(password,confirm)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18907__$5,new cljs.core.Keyword(null,"confirm","confirm",-2004000608),"Passwords do not match");
} else {
return G__18907__$5;
}
});

//# sourceMappingURL=phonebook.ui.validation.js.map
