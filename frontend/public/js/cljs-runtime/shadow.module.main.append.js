
shadow.cljs.devtools.client.env.module_loaded('main');

try { phonebook.ui.core.init(); } catch (e) { console.error("An error occurred when calling (phonebook.ui.core/init)"); console.error(e); }