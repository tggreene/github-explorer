// Compiled by ClojureScript 1.7.122 {}
goog.provide('ghe.dev');
goog.require('cljs.core');
goog.require('ghe.core');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),ghe.core.mount_root);
ghe.core.init_BANG_.call(null);

//# sourceMappingURL=dev.js.map