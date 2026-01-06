<!DOCTYPE html>
<html class="side-border-box">
    <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge;chrome=1"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script type="text/javascript">
            var sideRuntimeEnviroment = 'prod';

            window.sideClientIP = "10.251.63.98";

            var sideLang = 'tr';

            var SideModuleMap = {
                prod: {
                    e: {
                        side: "http://10.251.63.99:30870/side/side-dispatch",
                        app: "http://eyoklama.gelirler.gov.tr:32516/edenetis/dispatch",
                        im: "",
                        prefix: "e",
                        isLocalModule: false,
                        isFormDesigner: false
                    },
                    keys: {
                        side: "/keys/side-dispatch",
                        app: "/keyss/external_dispatch",
                        im: "",
                        prefix: "keys",
                        isLocalModule: false,
                        isFormDesigner: false
                    },
                    g: {
                        side: "side-dispatch",
                        app: "/gibintranet_server/dispatch",
                        im: "",
                        prefix: "g",
                        isLocalModule: true,
                        isFormDesigner: false
                    },
                    inka: {
                        side: "side-dispatch",
                        app: "http://10.251.63.99/inka_server/external_dispatch",
                        im: "",
                        prefix: "inka",
                        isLocalModule: false,
                        isFormDesigner: false
                    },
                    g2: {
                        side: "/side-g2/side-dispatch",
                        app: "/gibintranet_server2/dispatch",
                        im: "",
                        prefix: "g2",
                        isLocalModule: false,
                        isFormDesigner: false
                    },
                    g3: {
                        side: "http://10.251.63.28:30989/gibintranet/side-dispatch",
                        app: "http://10.251.63.28:30989/gibintranet_server/harici",
                        im: "",
                        prefix: "g3",
                        isLocalModule: false,
                        isFormDesigner: false
                    },
                    sila: {
                        side: "/sila/side-dispatch",
                        app: "/sila/dispatch",
                        im: "",
                        prefix: "sila",
                        isLocalModule: false,
                        isFormDesigner: false
                    }
                },
                test: {
                    e: {
                        side: "http://10.251.55.99:30870/side/side-dispatch",
                        app: "http://eyoklamatest.gelirler.gov.tr:32516/edenetis/dispatch",
                        im: "",
                        prefix: "e",
                        isLocalModule: false,
                        isFormDesigner: false
                    },
                    keys: {
                        side: "/keys/side-dispatch",
                        app: "/keyss/external_dispatch",
                        im: "",
                        prefix: "keys",
                        isLocalModule: false,
                        isFormDesigner: false
                    },
                    g: {
                        side: "side-dispatch",
                        app: "/gibintranet_server/dispatch",
                        im: "",
                        prefix: "g",
                        isLocalModule: true,
                        isFormDesigner: false
                    },
                    inka: {
                        side: "side-dispatch",
                        app: "http://10.251.55.99/inka_server/external_dispatch",
                        im: "",
                        prefix: "inka",
                        isLocalModule: false,
                        isFormDesigner: false
                    },
                    g2: {
                        side: "/side-g2/side-dispatch",
                        app: "/gibintranet_server2/dispatch",
                        im: "",
                        prefix: "g2",
                        isLocalModule: false,
                        isFormDesigner: false
                    },
                    g3: {
                        side: "http://10.251.51.56:30985/gibintranet/side-dispatch",
                        app: "http://10.251.51.56:30985/gibintranet_server/harici",
                        im: "",
                        prefix: "g3",
                        isLocalModule: false,
                        isFormDesigner: false
                    },
                    sila: {
                        side: "/sila/side-dispatch",
                        app: "/sila/dispatch",
                        im: "",
                        prefix: "sila",
                        isLocalModule: false,
                        isFormDesigner: false
                    }
                },
            };
            var SideModules = SideModuleMap['prod'];

            if (!window.SideDefaults) {
                var SideDefaults = {};
            }
            SideDefaults['g'] = {};
            SideDefaults['g']['support-service-call-extra-params'] = false;
            SideDefaults['g']['service-caller-show-messages-notify-timeout'] = 0;
            SideDefaults['g']['service-caller-show-sys-error-messages'] = true;
            SideDefaults['g']['support-side-services'] = true;
            SideDefaults['g']['MENU_LOCK_TIME'] = '';
            SideDefaults['g']['support-service-call-path'] = false;
            SideDefaults['g']['pg-relogin'] = 'P_RE_LOGIN';
            SideDefaults['g']['side-lib-prefix-control'] = true;
            SideDefaults['g']['content-security-policy-config'] = '';
            SideDefaults['g']['support-bind-components-and-rf-data'] = false;
            SideDefaults['g']['exportModuleName'] = 'g';
            SideDefaults['g']['support-multi-page'] = true;
            SideDefaults['g']['show-excel-export-errors'] = false;
            SideDefaults['g']['sn-getUserSessionInfo'] = 'getUserSessionInfo';
            SideDefaults['g']['support-side-gmap'] = false;
            SideDefaults['g']['ref-data-dependency-force-dependent-module-load'] = false;
            SideDefaults['g']['call-logout-on-window-unload'] = false;
            SideDefaults['g']['support-changed-event-on-setvalue'] = false;
            SideDefaults['g']['projectTheme'] = 'gibintra';
            SideDefaults['g']['sn-getCacheableRfDataInfo'] = 'GET_CACHABLE_RF_DATA_INFO';
            SideDefaults['g']['createSession-sn'] = 'eosKullaniciServices_createSession';
            SideDefaults['g']['support-dt-for-grid'] = false;
            SideDefaults['g']['param-global-popup'] = false;
            SideDefaults['g']['support-cors-filter'] = true;
            SideDefaults['g']['support-app-rf-data'] = true;
            SideDefaults['g']['param-token-key'] = 'token';
            SideDefaults['g']['MENU_LOCK'] = '';
            SideDefaults['g']['support-test-screen-load-relogin'] = true;
            SideDefaults['g']['excelExport-button-timeout'] = 0;
            SideDefaults['g']['createSession-params'] = '';
            SideDefaults['g']['side-export-dev-entry'] = false;
            SideDefaults['g']['support-multilang'] = true;
            SideDefaults['g']['service-caller-show-success-messages'] = false;
            SideDefaults['g']['show-errors-on-runtime-errors'] = false;
            SideDefaults['g']['createSession-auto'] = '';
            SideDefaults['g']['service-caller-show-messages-notify'] = false;
            SideDefaults['g']['createSession-session-params'] = "['orgs','vdbDefIlKodu','kullaniciKodu','ad','soyad']";
            SideDefaults['g']['support-side-im'] = false;
            SideDefaults['g']['support-dt-for-table'] = false;
            SideDefaults['g']['createSession-auth-sn'] = '';
            SideDefaults['g']['sn-login'] = 'login';
            SideDefaults['g']['sn-logout'] = 'logout';
            SideDefaults['g']['param-login-page'] = 'login.html?dl=e';
            SideDefaults['g']['sn-checkRefDataStatus'] = '';
            SideDefaults['g']['excelExport-send-appRefData'] = false;
            SideDefaults['g']['mask-page-on-runtime-errors'] = false;
            SideDefaults['g']['support-auto-focus'] = false;
            SideDefaults['g']['service-caller-show-messages'] = true;

            (function(window, undefined) {
                if (!window.BCDefaults) {
                    BCDefaults = {};
                    window.BCDefaults = BCDefaults;
                }
                BCDefaults["g"] = {};
                BCDefaults["g"]["CSC-GRID"] = {
                    showAll: 1
                };
                BCDefaults["g"]["CSC-TABLE"] = {
                    showAll: 1,
                    showAllBtn: 1
                };
                BCDefaults["g"]["CSC-COMBOBOX"] = {
                    defaultValue: ''
                };
                BCDefaults["g"]["CSC-MASKFIELD"] = {
                    raw: true,
                    roNoMask: true
                };

                BCDefaults.get = function(bcName, key, defvalue, module) {
                    if (!bcName || !key) {
                        return defvalue;
                    }
                    if (!module) {
                        if (BCEngine && BCEngine.getRegisterModuleName) {
                            module = BCEngine.getRegisterModuleName();
                        }
                        if (!module && SideModuleManager) {
                            module = SideModuleManager.getLocalModuleName();
                        }
                        if (!module) {
                            throw "BCDefaults module name not found";
                        }
                    }
                    // modul clone yapılmışsa
                    var sourceModule = SideModuleManager.getModules()[module].clonedFrom;
                    if (sourceModule) {
                        module = sourceModule;
                    }
                    if (!BCDefaults[module][bcName]) {
                        return defvalue;
                    }
                    return BCDefaults[module][bcName][key];
                }
                ;
            }
            )(window);
        </script>
        <link rel="stylesheet" type="text/css" href="css/bc-style/side-bc.css?v=1766050355729" media="all">
        <link rel="stylesheet" type="text/css" href="css/style/themes/side/side.css?v=1766050355729" media="all">
        <link rel="stylesheet" type="text/css" href="css/style/themes/gibintra/gibintra.css?v=1766050355729" media="all">
        <link rel="stylesheet" type="text/css" href="side-bf-g.css?v=1766050355729" media="all">
        <link rel="stylesheet" type="text/css" href="css/style/themes/gibintra/gibintra-runtime.css?v=1766050355729" media="all">
        <link rel="stylesheet" type="text/css" href="css/style/ui-blitzer/jquery-ui-1.10.4.custom.min.css?v=1766050355729" media="all">
        <script type="text/javascript" src="js/3thParty/jquery/jquery-2.0.3.min.js?v=1766050355729"></script>
        <script type="text/javascript" src="js/3thParty/jquery-ui/jquery-ui-1.10.4.custom.min.js?v=1766050355729"></script>
        <script type="text/javascript" src="js/3thParty/jquery-ui-timepicker/jquery-ui-timepicker-addon.min.js?v=1766050355729"></script>
        <script type="text/javascript" src="js/3thParty/ui.datepicker-tr/ui.datepicker-tr.js?v=1766050355729"></script>
        <script type="text/javascript" src="js/3thParty/jquery.maskedinput/jquery.maskedinput.js?v=1766050355729"></script>
        <script type="text/javascript" src="js/3thParty/jquery.ratings/jquery.ratings.js?v=1766050355729"></script>
        <script type="text/javascript" src="js/3thParty/jquery-jmenu/jMenu.jquery.js?v=1766050355729"></script>
        <script type="text/javascript" src="js/3thParty/jquery-currency-autonumeric/autoNumeric.min.js?v=1766050355729"></script>
        <script type="text/javascript" src="js/3thParty/underscore/underscore-min.js?v=1766050355729"></script>
        <script type="text/javascript" src="js/3thParty/tinymce/tinymce.min.js?v=1766050355729"></script>
        <script type="text/javascript" src="js/3thParty/nouislider/jquery.nouislider.min.js?v=1766050355729"></script>
        <script type="text/javascript" src="js/3thParty/tus/tus.min.js?v=1766050355729"></script>
        <script type="text/javascript" src="js/cs/side-common.js?v=1766050355729"></script>
        <script type="text/javascript" src="js/cs/side-bc.js?v=1766050355729"></script>
        <script type="text/javascript" src="js/cs/side-user-lib-g.js?v=1766050355729"></script>
        <script type="text/javascript" src="sf/js/html2canvas.min.js?v=1766050355729"></script>
        <script type="text/javascript" src="sf/js/html2canvas.js?v=1766050355729"></script>
        <script type="text/javascript" src="sf/js/gallery.js?v=1766050355729"></script>
        <script>
            var sideLoadedLibArr = ['jquery', 'jquery-ui', 'jquery-ui-timepicker', 'ui.datepicker-tr', 'jquery.maskedinput', 'jquery.ratings', 'jquery-jmenu', 'jquery-currency-autonumeric', 'underscore', 'tinymce', 'nouislider', 'tus', ];
        </script>
        <script type="text/javascript">

            (function(window, undefined) {
                function Definition() {
                    this.VERSION = "1";
                    this.BC_REF = "CSC-IMAGE";
                    this.EVENTS = [];
                    this.METHODS = [];
                    this.SCR = {};
                    this.Business = function() {
                        this.$$oc = function(n, i) {
                            window.z = i;
                            eval(n + "=window.z;")
                        }
                        ;
                        this.$$destroy = function() {}
                        ;
                        this.init = function() {}
                    }
                }
                BFEngine.register("IMG", new Definition())
            }
            )(window);
            (function(window, undefined) {
                function Definition() {
                    this.VERSION = "1";
                    this.BC_REF = "CSC-BUTTON";
                    this.EVENTS = [];
                    this.METHODS = [];
                    this.SCR = {
                        style: {
                            "min-width": "15px"
                        }
                    };
                    this.Business = function() {
                        this.$$oc = function(n, i) {
                            window.z = i;
                            eval(n + "=window.z;")
                        }
                        ;
                        this.$$destroy = function() {}
                        ;
                        this.init = function() {}
                    }
                }
                BFEngine.register("BUTON", new Definition())
            }
            )(window);
            (function(window, undefined) {
                function Definition() {
                    this.VERSION = "1";
                    this.BC_REF = "CSC-CS-METIN";
                    this.EVENTS = [];
                    this.METHODS = [];
                    this.SCR = {
                        labelPosition: "inherited",
                        label: "KULLANICI KODU",
                        defaultName: "kKodu"
                    };
                    this.Business = function() {
                        this.$$oc = function(n, i) {
                            window.z = i;
                            eval(n + "=window.z;")
                        }
                        ;
                        this.$$destroy = function() {}
                        ;
                        this.init = function() {}
                    }
                }
                BFEngine.register("E_KULLANICIKODU", new Definition())
            }
            )(window);
            (function(window, undefined) {
                function Definition() {
                    this.VERSION = "1";
                    this.BC_REF = "CSC-SEPERATOR";
                    this.EVENTS = [];
                    this.METHODS = [];
                    this.SCR = {};
                    this.Business = function() {
                        this.$$oc = function(n, i) {
                            window.z = i;
                            eval(n + "=window.z;")
                        }
                        ;
                        this.$$destroy = function() {}
                        ;
                        this.init = function() {}
                    }
                }
                BFEngine.register("SEPERATOR", new Definition())
            }
            )(window);
            (function(b, c) {
                function a() {
                    this.VERSION = "1";
                    this.NON_BUSINESS = true;
                    this.MEMBERS = {
                        userid: "E_KULLANICIKODU",
                        password: "E_SIFRE"
                    };
                    this.EVENTS = [];
                    this.METHODS = [];
                    this.SCR = {
                        layout: "CSC-VERTICAL",
                        style: {
                            "min-width": "50px"
                        }
                    };
                    this.Business = function() {
                        this.init = function() {}
                    }
                }
                BFEngine.register("GEN_PNL$$7347519", new a())
            }
            )(window);
            (function(window, undefined) {
                function Definition() {
                    this.VERSION = "1";
                    this.BC_REF = "CSC-PASSWORDFIELD";
                    this.EVENTS = [];
                    this.METHODS = [];
                    this.SCR = {
                        layoutConfig: {},
                        visible: true,
                        readonly: false,
                        labelPosition: "inherited",
                        style: {},
                        disabled: false,
                        label: "Şifre",
                        defaultName: "eSifre",
                        validation: {}
                    };
                    this.Business = function() {
                        this.$$oc = function(n, i) {
                            window.z = i;
                            eval(n + "=window.z;")
                        }
                        ;
                        this.$$destroy = function() {}
                        ;
                        this.init = function() {}
                    }
                }
                BFEngine.register("E_SIFRE", new Definition())
            }
            )(window);
            (function(b, c) {
                function a() {
                    this.VERSION = "1";
                    this.NON_BUSINESS = true;
                    this.MEMBERS = {
                        panel4: "GEN_PNL$$7347522",
                        seperator: "SEPERATOR",
                        title: "TITLE"
                    };
                    this.EVENTS = [];
                    this.METHODS = [];
                    this.SCR = {
                        layout: "CSC-VERTICAL",
                        style: {
                            "min-width": "50px"
                        }
                    };
                    this.Business = function() {
                        this.init = function() {}
                    }
                }
                BFEngine.register("GEN_PNL$$7347518", new a())
            }
            )(window);
            (function(window, undefined) {
                function Definition() {
                    this.VERSION = "1";
                    this.BC_REF = "CSC-LINK";
                    this.EVENTS = [];
                    this.METHODS = [];
                    this.SCR = {};
                    this.Business = function() {
                        this.$$oc = function(n, i) {
                            window.z = i;
                            eval(n + "=window.z;")
                        }
                        ;
                        this.$$destroy = function() {}
                        ;
                        this.init = function() {}
                    }
                }
                BFEngine.register("LINK", new Definition())
            }
            )(window);
            (function(window, undefined) {
                function Definition() {
                    this.VERSION = "1";
                    this.BC_REF = "CSC-TITLE";
                    this.EVENTS = [];
                    this.METHODS = [];
                    this.SCR = {};
                    this.Business = function() {
                        this.$$oc = function(n, i) {
                            window.z = i;
                            eval(n + "=window.z;")
                        }
                        ;
                        this.$$destroy = function() {}
                        ;
                        this.init = function() {}
                    }
                }
                BFEngine.register("TITLE", new Definition())
            }
            )(window);
            (function(window, undefined) {
                function Definition() {
                    this.VERSION = "1";
                    this.MEMBERS = {
                        panel: "GEN_PNL$$7347518",
                        userinfo: "GEN_PNL$$7347519",
                        btnPanel: "GEN_PNL$$7347520",
                        linkPanel: "GEN_PNL$$7347521"
                    };
                    this.EVENTS = ["login"];
                    this.METHODS = ["ajaxcall", "assosLogin"];
                    this.SCR = {
                        layoutConfig: {
                            minWidth: "400"
                        },
                        layout: "CSC-PAGE",
                        border: true,
                        visible: true,
                        readonly: false,
                        style: {},
                        disabled: false,
                        memberConfig: {
                            img: {
                                layoutConfig: {},
                                src: "sf/img/logo-gib-kirmizi.png"
                            },
                            btnPanel: {
                                layoutConfig: {
                                    zindex: 100
                                },
                                horAlign: "center"
                            },
                            anaSayfaLink: {
                                fontSize: "12",
                                title: "Ana Sayfaya Git"
                            },
                            linkPanel: {
                                layoutConfig: {
                                    zindex: 100
                                },
                                horAlign: "right"
                            },
                            panel4: {
                                layoutConfig: {},
                                cssClass: "gibKirmiziBg",
                                horAlign: "center"
                            },
                            panel: {
                                layoutConfig: {
                                    zindex: 100
                                },
                                horAlign: "center",
                                style: {
                                    width: "",
                                    height: "90"
                                }
                            },
                            title: {
                                style: {},
                                title: "Oturum süreniz doldu. Lütfen tekrar giriş yapınız."
                            },
                            seperator: {
                                layoutConfig: {},
                                size: "10"
                            },
                            userid: {
                                label: "Kullanıcı Kodu",
                                sql: false
                            },
                            girisBtn: {
                                title: "Giriş"
                            },
                            userinfo: {
                                layoutConfig: {
                                    zindex: 100
                                },
                                layout: "CSC-BASIC-FORM"
                            }
                        },
                        validation: {}
                    };
                    this.Business = function() {
                        var panel = null;
                        var panel4 = null;
                        var img = null;
                        var seperator = null;
                        var title = null;
                        var userinfo = null;
                        var userid = null;
                        var password = null;
                        var btnPanel = null;
                        var girisBtn = null;
                        var linkPanel = null;
                        var anaSayfaLink = null;
                        this.$$oc = function(n, i) {
                            window.z = i;
                            eval(n + "=window.z;")
                        }
                        ;
                        this.$$destroy = function() {
                            panel = null;
                            panel4 = null;
                            img = null;
                            seperator = null;
                            title = null;
                            userinfo = null;
                            userid = null;
                            password = null;
                            btnPanel = null;
                            girisBtn = null;
                            linkPanel = null;
                            anaSayfaLink = null
                        }
                        ;
                        this.init = function() {
                            panel = BFEngine.get("panel", this);
                            panel4 = BFEngine.get("panel.panel4", this);
                            img = BFEngine.get("panel.panel4.img", this);
                            seperator = BFEngine.get("panel.seperator", this);
                            title = BFEngine.get("panel.title", this);
                            userinfo = BFEngine.get("userinfo", this);
                            userid = BFEngine.get("userinfo.userid", this);
                            password = BFEngine.get("userinfo.password", this);
                            btnPanel = BFEngine.get("btnPanel", this);
                            girisBtn = BFEngine.get("btnPanel.girisBtn", this);
                            linkPanel = BFEngine.get("linkPanel", this);
                            anaSayfaLink = BFEngine.get("linkPanel.anaSayfaLink", this);
                            anaSayfaLink.on("selected", this, function(component) {
                                BFEngine.a();
                                try {
                                    if (window.location.href.indexOf("10.251.55.99") !== -1 || window.location.href.indexOf("10.251.63.99") !== -1 || window.location.href.indexOf("keys.ggm.bim") !== -1 || window.location.href.indexOf("keys.vedop.gov") !== -1) {
                                        window.close()
                                    } else {
                                        window.location = "login.html"
                                    }
                                } finally {
                                    BFEngine.r()
                                }
                            }, 432);
                            girisBtn.on("selected", this, function(component) {
                                BFEngine.a();
                                try {
                                    if (window.location.href.indexOf("10.251.63.56") !== -1) {
                                        var me = this;
                                        me.ajaxcall({
                                            assoscmd: "login",
                                            rtype: "json",
                                            userid: userid.getValue(),
                                            sifre: password.getValue(),
                                            parola: "1"
                                        }, function(resp) {
                                            if (resp) {
                                                resp = eval("(" + resp + ")")
                                            }
                                            CSPopupContext.getLasPopup().close();
                                            me.fire("login", resp)
                                        })
                                    } else {
                                        this.call("login", userinfo.getValue()).then(function(resp) {
                                            CSPopupContext.getLasPopup().close();
                                            this.fire("login", resp)
                                        })
                                    }
                                } finally {
                                    BFEngine.r()
                                }
                            }, 433);
                            this.on("oninit", this, function(component, param) {
                                BFEngine.a();
                                try {
                                    if (param && param.message) {
                                        title.setTitle(param.message)
                                    }
                                    var s_userid = CSSession.getUserId();
                                    if (!s_userid) {
                                        if (CSSession.getEnv() == "dev") {
                                            var kkodu = localStorage.getItem("test-last-user");
                                            var pwd = localStorage.getItem("test-last-user");
                                            userid.setValue(kkodu);
                                            password.setValue(pwd)
                                        } else {
                                            userinfo.setVisible(false);
                                            btnPanel.setVisible(false)
                                        }
                                    } else {
                                        userid.setValue(s_userid);
                                        userid.setReadonly(false);
                                        password.setValue("")
                                    }
                                } finally {
                                    BFEngine.r()
                                }
                            }, 434);
                            this.on("onload", this, function(component) {
                                BFEngine.a();
                                try {
                                    if (window.location.href.indexOf("10.251.55.99") !== -1 || window.location.href.indexOf("10.251.63.99") !== -1 || window.location.href.indexOf("keys.ggm.bim") !== -1 || window.location.href.indexOf("keys.vedop.gov") !== -1) {
                                        userinfo.setVisible(false);
                                        girisBtn.setTitle("Kapat")
                                    }
                                    if (userid.getValue()) {
                                        password.focus()
                                    } else {
                                        userid.focus()
                                    }
                                } finally {
                                    BFEngine.r()
                                }
                            }, 435);
                            userinfo.on("onEnterPressed", this, function(component) {
                                BFEngine.a();
                                try {
                                    girisBtn.fire("selected")
                                } finally {
                                    BFEngine.r()
                                }
                            }, 436);
                            this.ajaxcall = function(params, callback) {
                                BFEngine.a();
                                try {
                                    var xmlhttp = new XMLHttpRequest();
                                    xmlhttp.onreadystatechange = function() {
                                        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                                            if (callback) {
                                                callback(xmlhttp.responseText)
                                            }
                                        }
                                    }
                                    ;
                                    var paramStr = "";
                                    for (var key in params) {
                                        if (typeof params[key] === "string") {
                                            paramStr += key + "=" + params[key] + "&"
                                        } else {
                                            paramStr += key + "=" + JSON.stringify(params[key]) + "&"
                                        }
                                    }
                                    xmlhttp.open("POST", SideModuleManager.getAppUrl(SideModuleManager.getLocalModuleName(), "assos-login"), true);
                                    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
                                    xmlhttp.send(paramStr)
                                } finally {
                                    BFEngine.r()
                                }
                            }
                            ;
                            this.assosLogin = function() {
                                BFEngine.a();
                                try {
                                    function ajaxCall(url, paramsObj, callback) {
                                        ;var xmlhttp = new XMLHttpRequest();
                                        xmlhttp.onreadystatechange = function() {
                                            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                                                if (callback) {
                                                    callback(xmlhttp.responseText)
                                                }
                                            } else {
                                                if (xmlhttp.readyState == 4) {
                                                    CSPopupUTILS.MessageBox("Sisteme giriş başarısız. Bilgilerinizi kontrol edip tekrar deneyin.")
                                                }
                                            }
                                        }
                                        ;
                                        var paramStr = "";
                                        for (var key in paramsObj) {
                                            if (typeof paramsObj[key] === "string") {
                                                paramStr += key + "=" + paramsObj[key] + "&"
                                            } else {
                                                paramStr += key + "=" + JSON.stringify(paramsObj[key]) + "&"
                                            }
                                        }
                                        xmlhttp.open("POST", url, true);
                                        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
                                        xmlhttp.send(paramStr)
                                    }
                                    var param = {
                                        assoscmd: "login",
                                        rtype: "json",
                                        userid: this.userid.getValue(),
                                        sifre: this.password.getValue(),
                                        parola: "1"
                                    };
                                    var t = this;
                                    ajaxCall("http://10.251.74.172:48088/assos-login", param, function(res) {
                                        ;res = eval("(" + res + ")");
                                        if (res.error) {
                                            if (res.messages && res.messages.length > 0) {
                                                CSPopupUTILS.MessageBox(res.messages[0].text)
                                            } else {
                                                CSPopupUTILS.MessageBox("Sunucu ile iletişimde problem var. Lütfen bir süre sonra tekrar deneyiniz.")
                                            }
                                        } else {
                                            libGIBIntraUtil.GIBIntraServiceCall(t, "login", param, function(resp) {
                                                console.log(resp)
                                            })
                                        }
                                    })
                                } finally {
                                    BFEngine.r()
                                }
                            }
                        }
                    }
                }
                BFEngine.register("P_RE_LOGIN", new Definition())
            }
            )(window);
            (function(b, c) {
                function a() {
                    this.VERSION = "1";
                    this.NON_BUSINESS = true;
                    this.MEMBERS = {
                        girisBtn: "BUTON"
                    };
                    this.EVENTS = [];
                    this.METHODS = [];
                    this.SCR = {
                        layout: "CSC-VERTICAL",
                        style: {
                            "min-width": "50px"
                        }
                    };
                    this.Business = function() {
                        this.init = function() {}
                    }
                }
                BFEngine.register("GEN_PNL$$7347520", new a())
            }
            )(window);
            (function(b, c) {
                function a() {
                    this.VERSION = "1";
                    this.NON_BUSINESS = true;
                    this.MEMBERS = {
                        img: "IMG"
                    };
                    this.EVENTS = [];
                    this.METHODS = [];
                    this.SCR = {
                        layout: "CSC-VERTICAL",
                        style: {
                            "min-width": "50px"
                        }
                    };
                    this.Business = function() {
                        this.init = function() {}
                    }
                }
                BFEngine.register("GEN_PNL$$7347522", new a())
            }
            )(window);
            (function(b, c) {
                function a() {
                    this.VERSION = "1";
                    this.NON_BUSINESS = true;
                    this.MEMBERS = {
                        anaSayfaLink: "LINK"
                    };
                    this.EVENTS = [];
                    this.METHODS = [];
                    this.SCR = {
                        layout: "CSC-VERTICAL",
                        style: {
                            "min-width": "50px"
                        }
                    };
                    this.Business = function() {
                        this.init = function() {}
                    }
                }
                BFEngine.register("GEN_PNL$$7347521", new a())
            }
            )(window);
        </script>
        <script type="text/javascript">

            function initSession(flow, useNewToken) {

                var token = "daf7ac54a56ee0e6755b6ec2019e072c761be9f551f71cc3db03bb61b2057e86dd8791fa0f2252133b5044292fb0a4a859d916ec3e38a10569a8d90b67f94783";
                if (useNewToken) {
                    token = null;
                }
                if (!token || token == "null") {
                    token = CSSession.getToken();
                    if (!token) {
                        try {
                            token = localStorage.getItem("token");
                        } catch (e) {}
                    }
                }
                try {
                    localStorage.setItem("token", token);
                } catch (e) {}

                if (!false && !getSideDefaults("support-multi-page")) {
                    $$.bindEvent(window, "storage", function(e) {
                        if ($$.isie()) {
                            return;
                        }
                        if (e.key !== 'token') {
                            return;
                        }
                        if (e.key != token) {
                            window.location = 'login.html?dl=e';
                        }
                    });
                }

                CSSession.setToken(token);

                CSSession.set("SIDE-THEME", "gibintra");
                CSSession.setModuleName("g");

                var refDataCheckService = getSideDefaults("sn-checkRefDataStatus")
                  , refDataVersionInfo = [];
                if (!refDataCheckService) {
                    //RefData kontolü ayrıca yapılacak mı?
                    refDataVersionInfo = CSRefDataManager.getAppRefVersionInfo()
                }
                CSCaller.call(getSideDefaults("sn-getUserSessionInfo"), {
                    token: token || null,
                    rfDataInfo: refDataVersionInfo
                }).then(function(resp) {
                    CSSession.setSession(resp);
                    if (resp.rfDeleteList && resp.rfDeleteList.length > 0) {
                        CSRefDataManager.removeAppRefdata(resp.rfDeleteList, function() {
                            flow.ok("Session info ok.");
                        });
                    } else {
                        flow.ok("Session info ok.");
                    }
                }).error(function(resp) {
                    GlobalBusinessEvents.onReLogin(function() {
                        initSession(flow, true);
                    });
                });

            }
            //Referans veri güncelliğinin getUserSessionInfo'dan değil de ayrı bir servisten kontrol edildiği durum için geçerli.
            //Ayrı bir servisle mi bakılacağı CSRefDataManager.checkRefDataStatus metodunda kontrol ediliyor
            function checkRefDataStatus(flow) {
                CSRefDataManager.checkRefDataStatus(function(err) {
                    if (err) {
                        flow.error(err);
                        return;
                    }
                    flow.ok(err);
                });
            }
            function initServiceManager(flow) {
                CSServiceManager = new CsServiceManager();
                flow.ok("Service Manager init ok");
            }

            function loadServiceList(flow) {
                CSServiceManager.init(function() {
                    flow.ok("Service list load ok");
                });
            }

            function initIMManager(flow) {
                CSIMMan = new CSIMManager();
                CSIMMan.init(function() {
                    flow.ok("Instant Messaging init ok");
                });
            }

            var CSRefDataManager = null;
            function initRefDataManager(flow) {
                CSRefDataManager = new RefDataManager("designer");
                CSRefDataManager.init(function() {
                    flow.ok("CSRefDataManager init ok");
                }, true);
            }

            function initOther(flow) {
                CSCaller.changeURL("/gibintranet_server/dispatch");
                flow.ok("Init others ok.");
            }

            function initAuthorization(flow) {
                var authManager = CSSession.get("AUTH_MANAGER");
                if (authManager === true || authManager === "true") {
                    CSAuthorizationMan = new CSAuthorizationManager();
                    CSAuthorizationMan.init(true, function() {
                        flow.ok("Authorization load ok");
                    });
                } else {
                    //createSession-auth-sn varsa global olarak yetki tanımı gerekmiyordur ama modül özelinde yetki tanımlarını istemek gerekir.
                    if (window.getSideDefaults("createSession-auth-sn")) {
                        CSAuthorizationMan = new CSAuthorizationManager();
                        SideModuleManager.loadAuthInfo(SideModuleManager.getLocalModuleName(), function(success) {
                            if (success) {
                                flow.ok("Authorization load ok");
                            } else {
                                flow.error("Authorization load error");
                            }
                        });
                    } else {
                        flow.ok("Authorization skipped");
                    }
                }
            }

            function initPage(flow) {
                var bfname = "g.PG_INDEX";
                BFEngine.loadDefinition(bfname, function() {
                    var bf = BFEngine.create({
                        BF: bfname,
                        name: "PROD"
                    }, "root");
                    var title = bf.getConfig().title || "Side";
                    document.title = title;
                    try {
                        BFEngine.renderTo("runtime-main", bf);
                    } catch (e) {}
                    flow.ok("Init page ok.");
                });
            }

            function byid(id) {
                return document.getElementById(id);
            }
            function updateSideProgressMessage(msg) {
                if (typeof msg == "function") {
                    msg = msg();
                }
                var msgDiv = byid("side-progress-msg-div");
                if (msgDiv) {
                    msgDiv.innerHTML = msg;
                }
            }
            function showHideSideProgressDiv(show) {
                var msgDiv = byid("side-progress-msg-div");
                if (msgDiv) {
                    msgDiv.style.display = show ? "block" : "none";
                }
            }

            //bu metod side nin kendi ihtiyacı olan ml gereksinimleri için var. Bc, util ve core kısımda kullanılan kullanıcı mesajları ve bileşenlere ait gerekli yerlerde kullanılır.
            function initSideMultiLang(flow) {
                window.SideMLManager = new SideMLManagerClass();
                SideMLManager.init(function() {
                    flow.ok("Init Side Multi Lang. Man. ok.");
                });
            }

            function checkSideRefDataVersions(flow) {

                var refDataVers = {
                    "RF_CUZDAN_VER_NEDEN": {
                        "name": "RF_CUZDAN_VER_NEDEN",
                        "version": 6
                    },
                    "RF_VERGI_KODLARI_7326": {
                        "name": "RF_VERGI_KODLARI_7326",
                        "version": 21
                    },
                    "RF_BILDIRIM_TIPI_7326": {
                        "name": "RF_BILDIRIM_TIPI_7326",
                        "version": 14
                    },
                    "RF_MBSDURUM_IADE": {
                        "name": "RF_MBSDURUM_IADE",
                        "version": 7
                    },
                    "RF_SIRKET_TURU1111": {
                        "name": "RF_SIRKET_TURU1111",
                        "version": 12
                    },
                    "RF_VERGI_KODLARI_7440": {
                        "name": "RF_VERGI_KODLARI_7440",
                        "version": 14
                    },
                    "RF_BILDIRIM_TIPI_7440": {
                        "name": "RF_BILDIRIM_TIPI_7440",
                        "version": 14
                    },
                    "RF_GMBS_ADR_DRM": {
                        "name": "RF_GMBS_ADR_DRM",
                        "version": 4
                    },
                    "RF_YMM_BAGLI_OLD_ODA": {
                        "name": "RF_YMM_BAGLI_OLD_ODA",
                        "version": 29
                    },
                    "RF_VMR_UCRET_TIP": {
                        "name": "RF_VMR_UCRET_TIP",
                        "version": 5
                    },
                    "RF_VAR_YOK": {
                        "name": "RF_VAR_YOK",
                        "version": 7
                    },
                    "RF_PASAPORT_DURUM": {
                        "name": "RF_PASAPORT_DURUM",
                        "version": 2
                    },
                    "RF_OTV_IADELISTELERI_DILIM": {
                        "name": "RF_OTV_IADELISTELERI_DILIM",
                        "version": 6
                    },
                    "RF_FORM_DURUM": {
                        "name": "RF_FORM_DURUM",
                        "version": 19
                    },
                    "RF_GBS_YILLAR": {
                        "name": "RF_GBS_YILLAR",
                        "version": 17
                    },
                    "RF_KOMISYON160A_DURUM": {
                        "name": "RF_KOMISYON160A_DURUM",
                        "version": 40
                    },
                    "RF_IS_DURUM": {
                        "name": "RF_IS_DURUM",
                        "version": 30
                    },
                    "RF_BKONUSU_6736": {
                        "name": "RF_BKONUSU_6736",
                        "version": 33
                    },
                    "RF_KOMISYON160A_GUNCELLE": {
                        "name": "RF_KOMISYON160A_GUNCELLE",
                        "version": 13
                    },
                    "RF_VUK_160A_DURUM": {
                        "name": "RF_VUK_160A_DURUM",
                        "version": 119
                    },
                    "RF_DILEKCE_TIP": {
                        "name": "RF_DILEKCE_TIP",
                        "version": 17
                    },
                    "RF_RAPOR_TURU": {
                        "name": "RF_RAPOR_TURU",
                        "version": 18
                    },
                    "RF_YILLAR_OZES": {
                        "name": "RF_YILLAR_OZES",
                        "version": 8
                    },
                    "RF_TDI_DONEM_TURU": {
                        "name": "RF_TDI_DONEM_TURU",
                        "version": 4
                    },
                    "R_VMR_YUM_ISLEM": {
                        "name": "R_VMR_YUM_ISLEM",
                        "version": 2
                    },
                    "RF_MUK_DURUM": {
                        "name": "RF_MUK_DURUM",
                        "version": 11
                    },
                    "RF_GBS_BEYAN_COL_ESL": {
                        "name": "RF_GBS_BEYAN_COL_ESL",
                        "version": 14
                    },
                    "RF_HACIZ_IHB_MUZ": {
                        "name": "RF_HACIZ_IHB_MUZ",
                        "version": 5
                    },
                    "RF_TECIL_TIP_GENEL": {
                        "name": "RF_TECIL_TIP_GENEL",
                        "version": 13
                    },
                    "RF_WS_PROTOKOL_PAYLASILAN_PARAMETRE": {
                        "name": "RF_WS_PROTOKOL_PAYLASILAN_PARAMETRE",
                        "version": 42
                    },
                    "RF_IST_SIR_TUR": {
                        "name": "RF_IST_SIR_TUR",
                        "version": 17
                    },
                    "RF_LISANS_TURU_BIO": {
                        "name": "RF_LISANS_TURU_BIO",
                        "version": 7
                    },
                    "RF_YAZISMADURUM_VERG": {
                        "name": "RF_YAZISMADURUM_VERG",
                        "version": 8
                    },
                    "RF_TAHSIL_GUCLUGU": {
                        "name": "RF_TAHSIL_GUCLUGU",
                        "version": 2
                    },
                    "RF_VMR_BORDRO_KNTRL": {
                        "name": "RF_VMR_BORDRO_KNTRL",
                        "version": 7
                    },
                    "RF_DEFTER_DURUM": {
                        "name": "RF_DEFTER_DURUM",
                        "version": 4
                    },
                    "RF_KDVIST_IS_CESIT10": {
                        "name": "RF_KDVIST_IS_CESIT10",
                        "version": 3
                    },
                    "RF_VMR_MTV_TALEP_DRM": {
                        "name": "RF_VMR_MTV_TALEP_DRM",
                        "version": 10
                    },
                    "RF_KDV_IADE_ALINDI_DURUM": {
                        "name": "RF_KDV_IADE_ALINDI_DURUM",
                        "version": 3
                    },
                    "RF_HESAP_DURUMU": {
                        "name": "RF_HESAP_DURUMU",
                        "version": 8
                    },
                    "RF_KYY_DURUMKODU": {
                        "name": "RF_KYY_DURUMKODU",
                        "version": 6
                    },
                    "RF_DTP_GELDIGI_YER": {
                        "name": "RF_DTP_GELDIGI_YER",
                        "version": 4
                    },
                    "RF_BILG_EDN_BASVURAN": {
                        "name": "RF_BILG_EDN_BASVURAN",
                        "version": 30
                    },
                    "RF_VERGI_KODU": {
                        "name": "RF_VERGI_KODU",
                        "version": 9
                    },
                    "RF_VMR_ODM_TUR": {
                        "name": "RF_VMR_ODM_TUR",
                        "version": 8
                    },
                    "RF_ADRES_NITELIK": {
                        "name": "RF_ADRES_NITELIK",
                        "version": 18
                    },
                    "RF_OTV_135_TAPDK_TUR": {
                        "name": "RF_OTV_135_TAPDK_TUR",
                        "version": 5
                    },
                    "RF_OTV_DONEMTURU": {
                        "name": "RF_OTV_DONEMTURU",
                        "version": 4
                    },
                    "RF_DTP_YAZISMA_TIPI_GIDEN_EVRAK": {
                        "name": "RF_DTP_YAZISMA_TIPI_GIDEN_EVRAK",
                        "version": 9
                    },
                    "RF_MUKIMLIK_BELGE_T": {
                        "name": "RF_MUKIMLIK_BELGE_T",
                        "version": 2
                    },
                    "RF_DUYURU_DURUM": {
                        "name": "RF_DUYURU_DURUM",
                        "version": 2
                    },
                    "RF_BASVURU_KONUSU_7440": {
                        "name": "RF_BASVURU_KONUSU_7440",
                        "version": 42
                    },
                    "RF_VIMER_CAGRIDETAYI": {
                        "name": "RF_VIMER_CAGRIDETAYI",
                        "version": 7
                    },
                    "RF_DBS_DEFTERBILGI": {
                        "name": "RF_DBS_DEFTERBILGI",
                        "version": 1
                    },
                    "RF_IADE_MAHSUP_DRM": {
                        "name": "RF_IADE_MAHSUP_DRM",
                        "version": 19
                    },
                    "RF_MU_IZIN_DURUM": {
                        "name": "RF_MU_IZIN_DURUM",
                        "version": 3
                    },
                    "RF_OTV_EPDK_BILDIRIM": {
                        "name": "RF_OTV_EPDK_BILDIRIM",
                        "version": 5
                    },
                    "RF_MERSIS_TEMS_TUR": {
                        "name": "RF_MERSIS_TEMS_TUR",
                        "version": 3
                    },
                    "RF_TBLIG_OKUNMA_DURUMU": {
                        "name": "RF_TBLIG_OKUNMA_DURUMU",
                        "version": 4
                    },
                    "RF_HUKUKI_DRM": {
                        "name": "RF_HUKUKI_DRM",
                        "version": 3
                    },
                    "RF_TDI_HCZ_VRK_DRM": {
                        "name": "RF_TDI_HCZ_VRK_DRM",
                        "version": 3
                    },
                    "BASVURU_KONUSU_7326": {
                        "name": "BASVURU_KONUSU_7326",
                        "version": 47
                    },
                    "RF_TDI_BORC_ARALIGI": {
                        "name": "RF_TDI_BORC_ARALIGI",
                        "version": 5
                    },
                    "RF_YES_NO": {
                        "name": "RF_YES_NO",
                        "version": 3
                    },
                    "RF_YAZISMA_SEGMENT": {
                        "name": "RF_YAZISMA_SEGMENT",
                        "version": 96
                    },
                    "RF_GK_IADESEKILLERI": {
                        "name": "RF_GK_IADESEKILLERI",
                        "version": 5
                    },
                    "RF_DAVA_DURUM": {
                        "name": "RF_DAVA_DURUM",
                        "version": 43
                    },
                    "RF_DBS_BASVURU_YAPAN": {
                        "name": "RF_DBS_BASVURU_YAPAN",
                        "version": 3
                    },
                    "RF_ISTATISTIK_RAPOR": {
                        "name": "RF_ISTATISTIK_RAPOR",
                        "version": 6
                    },
                    "RF_YMM_MALSAHIBIKIRA": {
                        "name": "RF_YMM_MALSAHIBIKIRA",
                        "version": 3
                    },
                    "RF_OTV_GUYUM_IS": {
                        "name": "RF_OTV_GUYUM_IS",
                        "version": 6
                    },
                    "RF_OKD_KAYNAK": {
                        "name": "RF_OKD_KAYNAK",
                        "version": 20
                    },
                    "RF_TDI_6111TECILDRM": {
                        "name": "RF_TDI_6111TECILDRM",
                        "version": 13
                    },
                    "RF_EBELGE_UYUM_ANALIZ_CEZA_NEDENI": {
                        "name": "RF_EBELGE_UYUM_ANALIZ_CEZA_NEDENI",
                        "version": 8
                    },
                    "RF_MUKERRER_DRM": {
                        "name": "RF_MUKERRER_DRM",
                        "version": 7
                    },
                    "RF_GK_IA_ISLM_TUR": {
                        "name": "RF_GK_IA_ISLM_TUR",
                        "version": 14
                    },
                    "RF_OTV_13_5_DUZBRM": {
                        "name": "RF_OTV_13_5_DUZBRM",
                        "version": 5
                    },
                    "RF_IHBDURUMU": {
                        "name": "RF_IHBDURUMU",
                        "version": 26
                    },
                    "RF_GEMI_BORCDURUMU": {
                        "name": "RF_GEMI_BORCDURUMU",
                        "version": 11
                    },
                    "RF_YMM_NEDEN": {
                        "name": "RF_YMM_NEDEN",
                        "version": 7
                    },
                    "RF_YMM_TASIMASEKLI": {
                        "name": "RF_YMM_TASIMASEKLI",
                        "version": 5
                    },
                    "RF_DONEM_KAM_PER": {
                        "name": "RF_DONEM_KAM_PER",
                        "version": 6
                    },
                    "RF_OTV135_TPDK_IML": {
                        "name": "RF_OTV135_TPDK_IML",
                        "version": 6
                    },
                    "RF_GF_BLDRM_CEZA_DYNK_TUR": {
                        "name": "RF_GF_BLDRM_CEZA_DYNK_TUR",
                        "version": 4
                    },
                    "RF_VIMER_CAGRIDURUMU": {
                        "name": "RF_VIMER_CAGRIDURUMU",
                        "version": 25
                    },
                    "RF_LISANS_TUR_HAVA": {
                        "name": "RF_LISANS_TUR_HAVA",
                        "version": 4
                    },
                    "RF_TEMINAT_GONDTIPI": {
                        "name": "RF_TEMINAT_GONDTIPI",
                        "version": 4
                    },
                    "RF_TOPLU_ISLEM": {
                        "name": "RF_TOPLU_ISLEM",
                        "version": 1
                    },
                    "RF_TDI_OZEL_ESAS_TUR": {
                        "name": "RF_TDI_OZEL_ESAS_TUR",
                        "version": 4
                    },
                    "RF_KDV_IST_FL_NIT13": {
                        "name": "RF_KDV_IST_FL_NIT13",
                        "version": 2
                    },
                    "RF_TUM_MALVVARLIGI_STATUS": {
                        "name": "RF_TUM_MALVVARLIGI_STATUS",
                        "version": 6
                    },
                    "RF_YMM_SURE": {
                        "name": "RF_YMM_SURE",
                        "version": 5
                    },
                    "RF_MESLEK_CESIDI_CMB": {
                        "name": "RF_MESLEK_CESIDI_CMB",
                        "version": 7
                    },
                    "RF_BASVURUMADDESİ": {
                        "name": "RF_BASVURUMADDESİ",
                        "version": 30
                    },
                    "RF_YETKI_ADI_MAIN_PAGE": {
                        "name": "RF_YETKI_ADI_MAIN_PAGE",
                        "version": 5
                    },
                    "RF_DOSYA_TAKIP_EVRAK_GONDERME_SEKLI": {
                        "name": "RF_DOSYA_TAKIP_EVRAK_GONDERME_SEKLI",
                        "version": 11
                    },
                    "RF_VIMER_CAGRIKONUSU": {
                        "name": "RF_VIMER_CAGRIKONUSU",
                        "version": 6
                    },
                    "RF_BEYAN_İSTEK_DURUM": {
                        "name": "RF_BEYAN_İSTEK_DURUM",
                        "version": 3
                    },
                    "RF_YILLAR >= 2010": {
                        "name": "RF_YILLAR >= 2010",
                        "version": 23
                    },
                    "RF_VD_YETKI_ALANI": {
                        "name": "RF_VD_YETKI_ALANI",
                        "version": 3
                    },
                    "RF_OTV_TEMCOZ_DILEKCE_TURU": {
                        "name": "RF_OTV_TEMCOZ_DILEKCE_TURU",
                        "version": 4
                    },
                    "RF_OTOBIODIZEL_LSNS": {
                        "name": "RF_OTOBIODIZEL_LSNS",
                        "version": 4
                    },
                    "RF_OKC_DURUM": {
                        "name": "RF_OKC_DURUM",
                        "version": 16
                    },
                    "RF_HACIZ_BILDIRISI_TURU": {
                        "name": "RF_HACIZ_BILDIRISI_TURU",
                        "version": 7
                    },
                    "RF_TDI_TKP_DZNLM_NDN": {
                        "name": "RF_TDI_TKP_DZNLM_NDN",
                        "version": 11
                    },
                    "RF_OTV_TUTUN_BEYANNAME_DURUM": {
                        "name": "RF_OTV_TUTUN_BEYANNAME_DURUM",
                        "version": 8
                    },
                    "RF_YRT_DURDURMA": {
                        "name": "RF_YRT_DURDURMA",
                        "version": 2
                    },
                    "RF_OTV_IADELISTELERI_LISTE_2": {
                        "name": "RF_OTV_IADELISTELERI_LISTE_2",
                        "version": 6
                    },
                    "RF_OTV_IADELISTELERI_LISTE_3": {
                        "name": "RF_OTV_IADELISTELERI_LISTE_3",
                        "version": 10
                    },
                    "RF_BASVURUMAD_7020": {
                        "name": "RF_BASVURUMAD_7020",
                        "version": 17
                    },
                    "RF_TAKYIDAT_TURU": {
                        "name": "RF_TAKYIDAT_TURU",
                        "version": 19
                    },
                    "RF_BASVURUMAD_7143": {
                        "name": "RF_BASVURUMAD_7143",
                        "version": 44
                    },
                    "RF_CINSIYET": {
                        "name": "RF_CINSIYET",
                        "version": 2
                    },
                    "RF_KDVLISTEDURUM": {
                        "name": "RF_KDVLISTEDURUM",
                        "version": 5
                    },
                    "RF_YAP_TIP": {
                        "name": "RF_YAP_TIP",
                        "version": 4
                    },
                    "RF_VIMER_GET_RAPOR_A": {
                        "name": "RF_VIMER_GET_RAPOR_A",
                        "version": 13
                    },
                    "RF_TAKSIT_SAYISI": {
                        "name": "RF_TAKSIT_SAYISI",
                        "version": 38
                    },
                    "RF_6736_VERGIKODU": {
                        "name": "RF_6736_VERGIKODU",
                        "version": 14
                    },
                    "RF_OTV_IADE_IPTALPASIF_TUR": {
                        "name": "RF_OTV_IADE_IPTALPASIF_TUR",
                        "version": 2
                    },
                    "RF_YMM_MUKIL_MULKIYET": {
                        "name": "RF_YMM_MUKIL_MULKIYET",
                        "version": 3
                    },
                    "RF_HESAPLAMA_TURU": {
                        "name": "RF_HESAPLAMA_TURU",
                        "version": 18
                    },
                    "RF_IADE_TAKIP_ISL_DR": {
                        "name": "RF_IADE_TAKIP_ISL_DR",
                        "version": 3
                    },
                    "RF_ALIM_TURU": {
                        "name": "RF_ALIM_TURU",
                        "version": 2
                    },
                    "RF_DONEM_GUNAY": {
                        "name": "RF_DONEM_GUNAY",
                        "version": 10
                    },
                    "RF_TEBLIG_DURUM": {
                        "name": "RF_TEBLIG_DURUM",
                        "version": 9
                    },
                    "RF_6111_YAPILANDIRMA": {
                        "name": "RF_6111_YAPILANDIRMA",
                        "version": 75
                    },
                    "RF_MERKEZ_SUBE": {
                        "name": "RF_MERKEZ_SUBE",
                        "version": 4
                    },
                    "RF_AKTIF_DONEM": {
                        "name": "RF_AKTIF_DONEM",
                        "version": 3
                    },
                    "RF_TECIL18TAKSIT": {
                        "name": "RF_TECIL18TAKSIT",
                        "version": 19
                    },
                    "RF_DUYURU_TIPI": {
                        "name": "RF_DUYURU_TIPI",
                        "version": 3
                    },
                    "RF_YMM_BILDIRIM_DURU": {
                        "name": "RF_YMM_BILDIRIM_DURU",
                        "version": 2
                    },
                    "RF_GMSI_UCRET_GERIBILDIRIM": {
                        "name": "RF_GMSI_UCRET_GERIBILDIRIM",
                        "version": 13
                    },
                    "RF_KDV_IST_TALEP_TUR": {
                        "name": "RF_KDV_IST_TALEP_TUR",
                        "version": 25
                    },
                    "RF_SAAT": {
                        "name": "RF_SAAT",
                        "version": 25
                    },
                    "RF_GMSI_GERIBILDIRIM": {
                        "name": "RF_GMSI_GERIBILDIRIM",
                        "version": 9
                    },
                    "RF_KSLISTE_HUKUKI_DU": {
                        "name": "RF_KSLISTE_HUKUKI_DU",
                        "version": 6
                    },
                    "ORDER_TEST": {
                        "name": "ORDER_TEST",
                        "version": 2
                    },
                    "RF_TEST_DATA": {
                        "name": "RF_TEST_DATA",
                        "version": 3
                    },
                    "RF_YILLAR_KMSYN": {
                        "name": "RF_YILLAR_KMSYN",
                        "version": 81
                    },
                    "RF_VEFAT_DURUM": {
                        "name": "RF_VEFAT_DURUM",
                        "version": 2
                    },
                    "RF_HACIZ_DURUMU": {
                        "name": "RF_HACIZ_DURUMU",
                        "version": 7
                    },
                    "RF_GMSI_GERI_BILDIRI": {
                        "name": "RF_GMSI_GERI_BILDIRI",
                        "version": 16
                    },
                    "RF_EBELGE_DURUM": {
                        "name": "RF_EBELGE_DURUM",
                        "version": 5
                    },
                    "RF_ADRES_DURUMU": {
                        "name": "RF_ADRES_DURUMU",
                        "version": 9
                    },
                    "RF_KDV_IADESI_DURUM": {
                        "name": "RF_KDV_IADESI_DURUM",
                        "version": 4
                    },
                    "RF_NIN_NUN_EKI": {
                        "name": "RF_NIN_NUN_EKI",
                        "version": 9
                    },
                    "RF_SOZLESME_DURUM_BYN": {
                        "name": "RF_SOZLESME_DURUM_BYN",
                        "version": 5
                    },
                    "RF_OTV_ISTEK_DURUM": {
                        "name": "RF_OTV_ISTEK_DURUM",
                        "version": 4
                    },
                    "RF_7326_TECIL_TIPI": {
                        "name": "RF_7326_TECIL_TIPI",
                        "version": 89
                    },
                    "RF_KDV_IST_BLG_ONY_DURUM": {
                        "name": "RF_KDV_IST_BLG_ONY_DURUM",
                        "version": 3
                    },
                    "RF_KDV_ISTISNA_BLG_DURUM": {
                        "name": "RF_KDV_ISTISNA_BLG_DURUM",
                        "version": 11
                    },
                    "RF_KTK_BELGE_CINSI": {
                        "name": "RF_KTK_BELGE_CINSI",
                        "version": 3
                    },
                    "RF_SOZLESME_DURUM": {
                        "name": "RF_SOZLESME_DURUM",
                        "version": 5
                    },
                    "RF_KDV_GUYUM_DURUM_MEMUR": {
                        "name": "RF_KDV_GUYUM_DURUM_MEMUR",
                        "version": 13
                    },
                    "RF_TEMINAT_CIKIS_TURU": {
                        "name": "RF_TEMINAT_CIKIS_TURU",
                        "version": 3
                    },
                    "RF_MERSIS_FIRMA_DRM": {
                        "name": "RF_MERSIS_FIRMA_DRM",
                        "version": 10
                    },
                    "RF_DOSYA_TAKIP_EVRAK_TIPI": {
                        "name": "RF_DOSYA_TAKIP_EVRAK_TIPI",
                        "version": 7
                    },
                    "RF_MUKERRER_TUR": {
                        "name": "RF_MUKERRER_TUR",
                        "version": 3
                    },
                    "RF_VERGI_DURUM": {
                        "name": "RF_VERGI_DURUM",
                        "version": 5
                    },
                    "RF_TRFK_KRM": {
                        "name": "RF_TRFK_KRM",
                        "version": 10
                    },
                    "RF_IMKB_RAPORTURU": {
                        "name": "RF_IMKB_RAPORTURU",
                        "version": 16
                    },
                    "RF_SIRALAMA_KRITERI": {
                        "name": "RF_SIRALAMA_KRITERI",
                        "version": 7
                    },
                    "RF_YAT_TES_FAT_KALEM_TIPI": {
                        "name": "RF_YAT_TES_FAT_KALEM_TIPI",
                        "version": 8
                    },
                    "RF_PISMANLIK_DURUM": {
                        "name": "RF_PISMANLIK_DURUM",
                        "version": 8
                    },
                    "RF_TICSICIL_DURUM": {
                        "name": "RF_TICSICIL_DURUM",
                        "version": 4
                    },
                    "RF_2NOLU_KDV_ODEME_TURU": {
                        "name": "RF_2NOLU_KDV_ODEME_TURU",
                        "version": 3
                    },
                    "RF_OTV_GUYUM_DONUS2": {
                        "name": "RF_OTV_GUYUM_DONUS2",
                        "version": 30
                    },
                    "RF_YMM_ISYERITURLERI": {
                        "name": "RF_YMM_ISYERITURLERI",
                        "version": 5
                    },
                    "RF_OZES_ISTIRAKCI": {
                        "name": "RF_OZES_ISTIRAKCI",
                        "version": 3
                    },
                    "RF_IC_GENELGE_DURUM": {
                        "name": "RF_IC_GENELGE_DURUM",
                        "version": 2
                    },
                    "RF_TEMINAT_ALMA_NEDENI": {
                        "name": "RF_TEMINAT_ALMA_NEDENI",
                        "version": 5
                    },
                    "RF_IPTAL_NEDENI": {
                        "name": "RF_IPTAL_NEDENI",
                        "version": 5
                    },
                    "RF_YILLAR >= 2023": {
                        "name": "RF_YILLAR >= 2023",
                        "version": 8
                    },
                    "RF_VMR_ODENMEYEN_TTR": {
                        "name": "RF_VMR_ODENMEYEN_TTR",
                        "version": 7
                    },
                    "RF_YABANCI_PER_DONEM": {
                        "name": "RF_YABANCI_PER_DONEM",
                        "version": 4
                    },
                    "RF_RAPOR_LISTE_TURU": {
                        "name": "RF_RAPOR_LISTE_TURU",
                        "version": 4
                    },
                    "RF_OTV1_KOD_ITHL_IMAL_ACIKLAMA": {
                        "name": "RF_OTV1_KOD_ITHL_IMAL_ACIKLAMA",
                        "version": 6
                    },
                    "RF_VMR_MTV_TALEP_TUR": {
                        "name": "RF_VMR_MTV_TALEP_TUR",
                        "version": 11
                    },
                    "RF_YMM_IADESEKLI": {
                        "name": "RF_YMM_IADESEKLI",
                        "version": 4
                    },
                    "RF_EVRAK_KODU_NEW": {
                        "name": "RF_EVRAK_KODU_NEW",
                        "version": 59
                    },
                    "RF_YMM_DEFTERTURLERI": {
                        "name": "RF_YMM_DEFTERTURLERI",
                        "version": 6
                    },
                    "RF_ADSOYADVKNTCKN": {
                        "name": "RF_ADSOYADVKNTCKN",
                        "version": 4
                    },
                    "RF_OTV13_5_TUT_TUR": {
                        "name": "RF_OTV13_5_TUT_TUR",
                        "version": 7
                    },
                    "RF_UZL_SONUC": {
                        "name": "RF_UZL_SONUC",
                        "version": 5
                    },
                    "RF_ISEMRI_CVP_DRM": {
                        "name": "RF_ISEMRI_CVP_DRM",
                        "version": 3
                    },
                    "RF_6736_TLP_DRM": {
                        "name": "RF_6736_TLP_DRM",
                        "version": 2
                    },
                    "RF_KDV_IHTRZ_DAVA_GD": {
                        "name": "RF_KDV_IHTRZ_DAVA_GD",
                        "version": 6
                    },
                    "RF_SUREKSIZ_GRUBU": {
                        "name": "RF_SUREKSIZ_GRUBU",
                        "version": 21
                    },
                    "RF_OTV_EK2": {
                        "name": "RF_OTV_EK2",
                        "version": 6
                    },
                    "RF_YMMRAPOR_DILEKCE_DURUMU": {
                        "name": "RF_YMMRAPOR_DILEKCE_DURUMU",
                        "version": 5
                    },
                    "RF_KEYSEVDO_DURUM": {
                        "name": "RF_KEYSEVDO_DURUM",
                        "version": 3
                    },
                    "RF_OTV_5MD_BLG_TUR": {
                        "name": "RF_OTV_5MD_BLG_TUR",
                        "version": 3
                    },
                    "RF_OTV_EPDK_ISLEM_DURUM": {
                        "name": "RF_OTV_EPDK_ISLEM_DURUM",
                        "version": 8
                    },
                    "RF_OTV_TEMCOZ_TESLIM_KAYNAGI": {
                        "name": "RF_OTV_TEMCOZ_TESLIM_KAYNAGI",
                        "version": 4
                    },
                    "RF_OTV_DONEM_DETAY": {
                        "name": "RF_OTV_DONEM_DETAY",
                        "version": 3
                    },
                    "RF_GMBS_ADR_TIP": {
                        "name": "RF_GMBS_ADR_TIP",
                        "version": 3
                    },
                    "RF_YATIRIMTESVIK_DURUM": {
                        "name": "RF_YATIRIMTESVIK_DURUM",
                        "version": 2
                    },
                    "RF_TDI_HB_DURUM": {
                        "name": "RF_TDI_HB_DURUM",
                        "version": 6
                    },
                    "RF_DISIPLIN_KES_SEB": {
                        "name": "RF_DISIPLIN_KES_SEB",
                        "version": 3
                    },
                    "RF_ODEMESEKLI": {
                        "name": "RF_ODEMESEKLI",
                        "version": 33
                    },
                    "RF_GIBEGITIM_DURUM": {
                        "name": "RF_GIBEGITIM_DURUM",
                        "version": 3
                    },
                    "RF_SNV_YOKLAMA_DURUM": {
                        "name": "RF_SNV_YOKLAMA_DURUM",
                        "version": 8
                    },
                    "RF_MUKELLEF_BUYUKLUK": {
                        "name": "RF_MUKELLEF_BUYUKLUK",
                        "version": 6
                    },
                    "RF_OTV_2A_ISTISNA_TURLERI": {
                        "name": "RF_OTV_2A_ISTISNA_TURLERI",
                        "version": 39
                    },
                    "RF_YMM_RAPOR_FORMAT_TT": {
                        "name": "RF_YMM_RAPOR_FORMAT_TT",
                        "version": 8
                    },
                    "RF_GBS_DONEMLER": {
                        "name": "RF_GBS_DONEMLER",
                        "version": 7
                    },
                    "RF_BORCUYOKTUR_DURUM": {
                        "name": "RF_BORCUYOKTUR_DURUM",
                        "version": 8
                    },
                    "RF_ETGB_KDV_IST_YARARLANDI_MI": {
                        "name": "RF_ETGB_KDV_IST_YARARLANDI_MI",
                        "version": 2
                    },
                    "RF_VDK": {
                        "name": "RF_VDK",
                        "version": 3
                    },
                    "RF_OKD_DURUM": {
                        "name": "RF_OKD_DURUM",
                        "version": 7
                    },
                    "RF_GERIGELEN_BEYANNAME TURU": {
                        "name": "RF_GERIGELEN_BEYANNAME TURU",
                        "version": 2
                    },
                    "RF_INTIKAL_SEKLI": {
                        "name": "RF_INTIKAL_SEKLI",
                        "version": 8
                    },
                    "RF_EFT_TURLERI": {
                        "name": "RF_EFT_TURLERI",
                        "version": 13
                    },
                    "RF_YMM_FAALIYET": {
                        "name": "RF_YMM_FAALIYET",
                        "version": 2
                    },
                    "RF_SORUMLU_TURU": {
                        "name": "RF_SORUMLU_TURU",
                        "version": 10
                    },
                    "RF_CMD_DENEME": {
                        "name": "RF_CMD_DENEME",
                        "version": 3
                    },
                    "RF_OTV_ATAK_URUN": {
                        "name": "RF_OTV_ATAK_URUN",
                        "version": 6
                    },
                    "TEST_MAHMUT": {
                        "name": "TEST_MAHMUT",
                        "version": 7
                    },
                    "RF_CP_TEFTIS_SERVIS": {
                        "name": "RF_CP_TEFTIS_SERVIS",
                        "version": 11
                    },
                    "RF_MATRAH_ART": {
                        "name": "RF_MATRAH_ART",
                        "version": 24
                    },
                    "RF_GEK17_EK_CMB": {
                        "name": "RF_GEK17_EK_CMB",
                        "version": 3
                    },
                    "RF_CP_VDB": {
                        "name": "RF_CP_VDB",
                        "version": 65
                    },
                    "RF_THS_GUC_GIR_IST": {
                        "name": "RF_THS_GUC_GIR_IST",
                        "version": 1
                    },
                    "RF_TAPU_CINSI": {
                        "name": "RF_TAPU_CINSI",
                        "version": 5
                    },
                    "RF_ODM_EMR_TBLG_SKL": {
                        "name": "RF_ODM_EMR_TBLG_SKL",
                        "version": 21
                    },
                    "RF_YOK_VAR": {
                        "name": "RF_YOK_VAR",
                        "version": 4
                    },
                    "RF_TAKSITSAYISI_6736": {
                        "name": "RF_TAKSITSAYISI_6736",
                        "version": 15
                    },
                    "RF_KDV_IST_FL_NT10": {
                        "name": "RF_KDV_IST_FL_NT10",
                        "version": 8
                    },
                    "RF_DOSYA_TAKIP_INCELENEN_VERGI_TURU": {
                        "name": "RF_DOSYA_TAKIP_INCELENEN_VERGI_TURU",
                        "version": 10
                    },
                    "RF_7256_TECIL_KALDIRMA_KODU": {
                        "name": "RF_7256_TECIL_KALDIRMA_KODU",
                        "version": 13
                    },
                    "RF_YETKI_ADI": {
                        "name": "RF_YETKI_ADI",
                        "version": 6
                    },
                    "RF_HAYIR_EVET": {
                        "name": "RF_HAYIR_EVET",
                        "version": 3
                    },
                    "RF_ODEME_DURUM": {
                        "name": "RF_ODEME_DURUM",
                        "version": 2
                    },
                    "RF_INC_ELEMANI_UNVAN": {
                        "name": "RF_INC_ELEMANI_UNVAN",
                        "version": 19
                    },
                    "RF_OTV_EPDK_ISLEM_DRM": {
                        "name": "RF_OTV_EPDK_ISLEM_DRM",
                        "version": 3
                    },
                    "RF_OTOMATIK_DILEKCELER": {
                        "name": "RF_OTOMATIK_DILEKCELER",
                        "version": 45
                    },
                    "RF_OTV3B_GTIP": {
                        "name": "RF_OTV3B_GTIP",
                        "version": 17
                    },
                    "RF_VDK_INCELEME_RP_TUR": {
                        "name": "RF_VDK_INCELEME_RP_TUR",
                        "version": 12
                    },
                    "RF_IADETURLERI": {
                        "name": "RF_IADETURLERI",
                        "version": 6
                    },
                    "RF_MAVIKART": {
                        "name": "RF_MAVIKART",
                        "version": 2
                    },
                    "RF_OTV_13_5_DUZ_BRM": {
                        "name": "RF_OTV_13_5_DUZ_BRM",
                        "version": 7
                    },
                    "RF_PISMANLIK_DURUM_DETAY": {
                        "name": "RF_PISMANLIK_DURUM_DETAY",
                        "version": 45
                    },
                    "RF_TUT_AZ_ARSV": {
                        "name": "RF_TUT_AZ_ARSV",
                        "version": 8
                    },
                    "RF_OTV_IADELISTELERI_LISTE_1": {
                        "name": "RF_OTV_IADELISTELERI_LISTE_1",
                        "version": 14
                    },
                    "RF_MUNFERIT_ITHLATCI_BLG_DRM": {
                        "name": "RF_MUNFERIT_ITHLATCI_BLG_DRM",
                        "version": 5
                    },
                    "RF_VERASET_BEY_DURUM": {
                        "name": "RF_VERASET_BEY_DURUM",
                        "version": 2
                    },
                    "RF_BASVURUMAD_6552": {
                        "name": "RF_BASVURUMAD_6552",
                        "version": 20
                    },
                    "RF_THS_IST_MENU_LIST": {
                        "name": "RF_THS_IST_MENU_LIST",
                        "version": 6
                    },
                    "RF_OKD_GELISYERI": {
                        "name": "RF_OKD_GELISYERI",
                        "version": 7
                    },
                    "RF_CEVDURUM": {
                        "name": "RF_CEVDURUM",
                        "version": 5
                    },
                    "RF_ISEMRI_TRH_BLG": {
                        "name": "RF_ISEMRI_TRH_BLG",
                        "version": 4
                    },
                    "RF_MUDURLUK": {
                        "name": "RF_MUDURLUK",
                        "version": 10
                    },
                    "RF_TAPU_EDILIS_SEKLI": {
                        "name": "RF_TAPU_EDILIS_SEKLI",
                        "version": 6
                    },
                    "RF_ALT_BSLK_KDV_BYN": {
                        "name": "RF_ALT_BSLK_KDV_BYN",
                        "version": 54
                    },
                    "RF_6736_YAPILANDIRMA": {
                        "name": "RF_6736_YAPILANDIRMA",
                        "version": 41
                    },
                    "RF_ELEK_DGAZ_YILLAR": {
                        "name": "RF_ELEK_DGAZ_YILLAR",
                        "version": 10
                    },
                    "RF_SARP_GERI_BILDIRIM": {
                        "name": "RF_SARP_GERI_BILDIRIM",
                        "version": 4
                    },
                    "RF_HACIZ_BILDIRI_TIP": {
                        "name": "RF_HACIZ_BILDIRI_TIP",
                        "version": 5
                    },
                    "RF_IADE_TALEP_TUR": {
                        "name": "RF_IADE_TALEP_TUR",
                        "version": 5
                    },
                    "RF_SOZLESME_TURU_BYN": {
                        "name": "RF_SOZLESME_TURU_BYN",
                        "version": 2
                    },
                    "RF_OTV1_ORTAK_TIPI": {
                        "name": "RF_OTV1_ORTAK_TIPI",
                        "version": 3
                    },
                    "RF_GNL_ESAS_IADE_DRM": {
                        "name": "RF_GNL_ESAS_IADE_DRM",
                        "version": 4
                    },
                    "RF_KDVLISTETURLERI": {
                        "name": "RF_KDVLISTETURLERI",
                        "version": 73
                    },
                    "RF_ISEMRI_DLKC_TURU": {
                        "name": "RF_ISEMRI_DLKC_TURU",
                        "version": 3
                    },
                    "RF_YMM_RAPOR_FORMATI_OTV": {
                        "name": "RF_YMM_RAPOR_FORMATI_OTV",
                        "version": 15
                    },
                    "RF_DOSYA_TAKIP_EK_BILGI_NEDENI": {
                        "name": "RF_DOSYA_TAKIP_EK_BILGI_NEDENI",
                        "version": 8
                    },
                    "RF_EVDO_SICIL_DURUMU": {
                        "name": "RF_EVDO_SICIL_DURUMU",
                        "version": 9
                    },
                    "RF_BANKA_THS_KYNK": {
                        "name": "RF_BANKA_THS_KYNK",
                        "version": 6
                    },
                    "RF_7256_TECIL_KALDIRMA_TIP": {
                        "name": "RF_7256_TECIL_KALDIRMA_TIP",
                        "version": 13
                    },
                    "RF_OZEL_ESAS_BELGE_T": {
                        "name": "RF_OZEL_ESAS_BELGE_T",
                        "version": 3
                    },
                    "RF_VIMER_BASVURU_TUR": {
                        "name": "RF_VIMER_BASVURU_TUR",
                        "version": 7
                    },
                    "RF_CP_ORG": {
                        "name": "RF_CP_ORG",
                        "version": 31
                    },
                    "RF_AFET_TANIM_TAKSIT": {
                        "name": "RF_AFET_TANIM_TAKSIT",
                        "version": 3
                    },
                    "RF_KDV_IST_IS_NITELI": {
                        "name": "RF_KDV_IST_IS_NITELI",
                        "version": 26
                    },
                    "RF_VERASET_DURUM": {
                        "name": "RF_VERASET_DURUM",
                        "version": 5
                    },
                    "RF_DOSYA_TAKIP_ISTENILEN_BILGI_TURU": {
                        "name": "RF_DOSYA_TAKIP_ISTENILEN_BILGI_TURU",
                        "version": 15
                    },
                    "RF_ATU_DURUM": {
                        "name": "RF_ATU_DURUM",
                        "version": 4
                    },
                    "RF_CHARTS": {
                        "name": "RF_CHARTS",
                        "version": 8
                    },
                    "RF_FORM_TIP": {
                        "name": "RF_FORM_TIP",
                        "version": 4
                    },
                    "RF_IADETAKIP_DURUM_L": {
                        "name": "RF_IADETAKIP_DURUM_L",
                        "version": 21
                    },
                    "RF_DBS_YILLAR": {
                        "name": "RF_DBS_YILLAR",
                        "version": 22
                    },
                    "RF_IMZA_DURUM": {
                        "name": "RF_IMZA_DURUM",
                        "version": 2
                    },
                    "RF_YMM_ISYERIDURUMU": {
                        "name": "RF_YMM_ISYERIDURUMU",
                        "version": 5
                    },
                    "RF_TDI_RAPOR_TURU": {
                        "name": "RF_TDI_RAPOR_TURU",
                        "version": 3
                    },
                    "RF_KDV_IST_FL_NIT8B": {
                        "name": "RF_KDV_IST_FL_NIT8B",
                        "version": 6
                    },
                    "RF_IADE_TIPI_NEW": {
                        "name": "RF_IADE_TIPI_NEW",
                        "version": 24
                    },
                    "RF_DATAP_DAVA_DURUM": {
                        "name": "RF_DATAP_DAVA_DURUM",
                        "version": 3
                    },
                    "RF_EBYN_IRAT_TUR": {
                        "name": "RF_EBYN_IRAT_TUR",
                        "version": 5
                    },
                    "RF_7100_TLP_DRM": {
                        "name": "RF_7100_TLP_DRM",
                        "version": 1
                    },
                    "RF_GMSI_INDIRIMTURU": {
                        "name": "RF_GMSI_INDIRIMTURU",
                        "version": 2
                    },
                    "RF_DOSYA_TAKIP_VERGI_TUR": {
                        "name": "RF_DOSYA_TAKIP_VERGI_TUR",
                        "version": 9
                    },
                    "RF_OTV_DENIZYAKIT_ISTEK_DURUM": {
                        "name": "RF_OTV_DENIZYAKIT_ISTEK_DURUM",
                        "version": 3
                    },
                    "RF_PISMANLIK_DURUM_DETAY_IHBDUZ": {
                        "name": "RF_PISMANLIK_DURUM_DETAY_IHBDUZ",
                        "version": 6
                    },
                    "RF_IC_GENELGE_KAPSAM_TIPI": {
                        "name": "RF_IC_GENELGE_KAPSAM_TIPI",
                        "version": 12
                    },
                    "RF_KDV_IADE_YUKLENIM_TURU": {
                        "name": "RF_KDV_IADE_YUKLENIM_TURU",
                        "version": 4
                    },
                    "RF_INC_DOSYASI_DURUM": {
                        "name": "RF_INC_DOSYASI_DURUM",
                        "version": 5
                    },
                    "RF_FIRAT_DENEME": {
                        "name": "RF_FIRAT_DENEME",
                        "version": 4
                    },
                    "RF_KATP_VERGI_TURU": {
                        "name": "RF_KATP_VERGI_TURU",
                        "version": 22
                    },
                    "RF_TKPSATIRTHKDURUM": {
                        "name": "RF_TKPSATIRTHKDURUM",
                        "version": 3
                    },
                    "RF_YAZISMADURUM_IADE": {
                        "name": "RF_YAZISMADURUM_IADE",
                        "version": 10
                    },
                    "RF_MHK_DAVA_IHB_DRM": {
                        "name": "RF_MHK_DAVA_IHB_DRM",
                        "version": 4
                    },
                    "RF_INC_ELMN_TOPL_UNV": {
                        "name": "RF_INC_ELMN_TOPL_UNV",
                        "version": 37
                    },
                    "RF_VIMER_ONERIYAPILA": {
                        "name": "RF_VIMER_ONERIYAPILA",
                        "version": 9
                    },
                    "RF_THS_ODM_SEKLI": {
                        "name": "RF_THS_ODM_SEKLI",
                        "version": 9
                    },
                    "RF_VUK_DURUM": {
                        "name": "RF_VUK_DURUM",
                        "version": 8
                    },
                    "RF_IADETAKIP_TALEP_T": {
                        "name": "RF_IADETAKIP_TALEP_T",
                        "version": 10
                    },
                    "R_YMM_TEDBIRLI_IPTAL_KONU": {
                        "name": "R_YMM_TEDBIRLI_IPTAL_KONU",
                        "version": 10
                    },
                    "RF_YAZICI_TIPLERI": {
                        "name": "RF_YAZICI_TIPLERI",
                        "version": 6
                    },
                    "RF_INT_IMALATCI_OTV_BEY_TURU": {
                        "name": "RF_INT_IMALATCI_OTV_BEY_TURU",
                        "version": 8
                    },
                    "RF_YMM_SOZ_IPTAL_NDN": {
                        "name": "RF_YMM_SOZ_IPTAL_NDN",
                        "version": 7
                    },
                    "RF_6111_TLP_DRM": {
                        "name": "RF_6111_TLP_DRM",
                        "version": 30
                    },
                    "RF_EDEFTERBERAT_TIPI": {
                        "name": "RF_EDEFTERBERAT_TIPI",
                        "version": 6
                    },
                    "RF_ISYERI_MULK": {
                        "name": "RF_ISYERI_MULK",
                        "version": 5
                    },
                    "RF_ISEMRI_KURUM": {
                        "name": "RF_ISEMRI_KURUM",
                        "version": 21
                    },
                    "RF_OTV_GUYUM_DONUS": {
                        "name": "RF_OTV_GUYUM_DONUS",
                        "version": 49
                    },
                    "RF_7440_TECIL_TIPI\t": {
                        "name": "RF_7440_TECIL_TIPI\t",
                        "version": 42
                    },
                    "RF_TDI_7020TECILDRM": {
                        "name": "RF_TDI_7020TECILDRM",
                        "version": 25
                    },
                    "RF_FORMBABS_IHB_TUR": {
                        "name": "RF_FORMBABS_IHB_TUR",
                        "version": 3
                    },
                    "RF_GK_TALEP_TIPI": {
                        "name": "RF_GK_TALEP_TIPI",
                        "version": 12
                    },
                    "RF_IMALAT_OTV_TUR": {
                        "name": "RF_IMALAT_OTV_TUR",
                        "version": 7
                    },
                    "RF_YMM_TEMSILDURUM": {
                        "name": "RF_YMM_TEMSILDURUM",
                        "version": 3
                    },
                    "RF_KDV_IST_FL_NIT6A": {
                        "name": "RF_KDV_IST_FL_NIT6A",
                        "version": 7
                    },
                    "RF_KDV_IST_FL_NIT6B": {
                        "name": "RF_KDV_IST_FL_NIT6B",
                        "version": 6
                    },
                    "RF_KDV_IST_FL_NIT6C": {
                        "name": "RF_KDV_IST_FL_NIT6C",
                        "version": 4
                    },
                    "RF_BASVURUMAD_7440": {
                        "name": "RF_BASVURUMAD_7440",
                        "version": 51
                    },
                    "RF_BILG_EDN_MRCT_SEK": {
                        "name": "RF_BILG_EDN_MRCT_SEK",
                        "version": 25
                    },
                    "RF_TALEP_SEKLI": {
                        "name": "RF_TALEP_SEKLI",
                        "version": 6
                    },
                    "RF_THK_DURUM": {
                        "name": "RF_THK_DURUM",
                        "version": 9
                    },
                    "RF_6736_DURUM_TIP": {
                        "name": "RF_6736_DURUM_TIP",
                        "version": 3
                    },
                    "RF_VERGI_GECIKME_ZAM": {
                        "name": "RF_VERGI_GECIKME_ZAM",
                        "version": 2
                    },
                    "RF_BILG_EDN_DURUM": {
                        "name": "RF_BILG_EDN_DURUM",
                        "version": 40
                    },
                    "RF_INT_OTVIADE_SATIR_DURUM": {
                        "name": "RF_INT_OTVIADE_SATIR_DURUM",
                        "version": 3
                    },
                    "RF_YETKI_GRUBU": {
                        "name": "RF_YETKI_GRUBU",
                        "version": 5
                    },
                    "RF_ACIKLAMA_BABS": {
                        "name": "RF_ACIKLAMA_BABS",
                        "version": 29
                    },
                    "RF_GIRISTURU": {
                        "name": "RF_GIRISTURU",
                        "version": 16
                    },
                    "RF_KDV_IST_FL_NIT6D": {
                        "name": "RF_KDV_IST_FL_NIT6D",
                        "version": 4
                    },
                    "RF_IADE_ISLEM_TURU": {
                        "name": "RF_IADE_ISLEM_TURU",
                        "version": 2
                    },
                    "RF_WS_PROTOKOL_ALINAN_PARAMETRE": {
                        "name": "RF_WS_PROTOKOL_ALINAN_PARAMETRE",
                        "version": 30
                    },
                    "RF_DBS_RAPOR_TIP": {
                        "name": "RF_DBS_RAPOR_TIP",
                        "version": 4
                    },
                    "RF_MUKIMLIK_SIRKET_T": {
                        "name": "RF_MUKIMLIK_SIRKET_T",
                        "version": 6
                    },
                    "RF_GK_IADE_DURUM": {
                        "name": "RF_GK_IADE_DURUM",
                        "version": 3
                    },
                    "RF_IADE_EKLER": {
                        "name": "RF_IADE_EKLER",
                        "version": 5
                    },
                    "RF_GMSI_ISLER_AVUKAT": {
                        "name": "RF_GMSI_ISLER_AVUKAT",
                        "version": 8
                    },
                    "RF_OZES_ORTAK_DURUM": {
                        "name": "RF_OZES_ORTAK_DURUM",
                        "version": 8
                    },
                    "RF_MKKRRAPORTURU": {
                        "name": "RF_MKKRRAPORTURU",
                        "version": 10
                    },
                    "RF_TECIL_TIPI_7326_TALEP": {
                        "name": "RF_TECIL_TIPI_7326_TALEP",
                        "version": 21
                    },
                    "RF_BASVURUKONU_6552": {
                        "name": "RF_BASVURUKONU_6552",
                        "version": 3
                    },
                    "RF_IADESEKILLERI": {
                        "name": "RF_IADESEKILLERI",
                        "version": 17
                    },
                    "RF_IPT_PASF_YRISK": {
                        "name": "RF_IPT_PASF_YRISK",
                        "version": 5
                    },
                    "RF_THK_THS_DURUM": {
                        "name": "RF_THK_THS_DURUM",
                        "version": 9
                    },
                    "RF_OTV_TUTUN_ONAYDURUM": {
                        "name": "RF_OTV_TUTUN_ONAYDURUM",
                        "version": 9
                    },
                    "RF_MUK_TURU": {
                        "name": "RF_MUK_TURU",
                        "version": 7
                    },
                    "RF_YMM_ASG_KONT_TUR": {
                        "name": "RF_YMM_ASG_KONT_TUR",
                        "version": 5
                    },
                    "RF_KANUN_NO": {
                        "name": "RF_KANUN_NO",
                        "version": 63
                    },
                    "RF_MUKELLEF_TURU": {
                        "name": "RF_MUKELLEF_TURU",
                        "version": 10
                    },
                    "RF_BKONUSU_7143": {
                        "name": "RF_BKONUSU_7143",
                        "version": 28
                    },
                    "RF_SINAVSONUC_TIPI": {
                        "name": "RF_SINAVSONUC_TIPI",
                        "version": 3
                    },
                    "RF_CALISMA_SEKLI_CMB": {
                        "name": "RF_CALISMA_SEKLI_CMB",
                        "version": 6
                    },
                    "RF_OTV1_SORUMLU": {
                        "name": "RF_OTV1_SORUMLU",
                        "version": 6
                    },
                    "RF_DEFTERDARLIK": {
                        "name": "RF_DEFTERDARLIK",
                        "version": 158
                    },
                    "RF_TEBLIG_SEKLI": {
                        "name": "RF_TEBLIG_SEKLI",
                        "version": 12
                    },
                    "RF_YABANCI_PERSONEL_HYK": {
                        "name": "RF_YABANCI_PERSONEL_HYK",
                        "version": 3
                    },
                    "RF_THK_GOSTERIM_KRIT": {
                        "name": "RF_THK_GOSTERIM_KRIT",
                        "version": 2
                    },
                    "RF_IADEAKIS_INCELEME": {
                        "name": "RF_IADEAKIS_INCELEME",
                        "version": 8
                    },
                    "RF_GMSI_DILEKCE_NEDE": {
                        "name": "RF_GMSI_DILEKCE_NEDE",
                        "version": 11
                    },
                    "RF_KDV_GUYUM_TEVK_GD": {
                        "name": "RF_KDV_GUYUM_TEVK_GD",
                        "version": 38
                    },
                    "RF_DONEM_TURLERI_AFET_TANIMLAMA": {
                        "name": "RF_DONEM_TURLERI_AFET_TANIMLAMA",
                        "version": 101
                    },
                    "RF_MBS_ORANLAR": {
                        "name": "RF_MBS_ORANLAR",
                        "version": 24
                    },
                    "RF_EVDO_SICIL_DURUM_PTNSYL_DHL": {
                        "name": "RF_EVDO_SICIL_DURUM_PTNSYL_DHL",
                        "version": 4
                    },
                    "RF_ISEMRI_TLP_NEDEN": {
                        "name": "RF_ISEMRI_TLP_NEDEN",
                        "version": 13
                    },
                    "REF_DKI_BILDIRIM": {
                        "name": "REF_DKI_BILDIRIM",
                        "version": 4
                    },
                    "RF_YAT_TESVIK_IADE_LISTE_TURU": {
                        "name": "RF_YAT_TESVIK_IADE_LISTE_TURU",
                        "version": 10
                    },
                    "RF_INTVRG_YETKI": {
                        "name": "RF_INTVRG_YETKI",
                        "version": 6
                    },
                    "RF_TECIL_6183_DURUMU": {
                        "name": "RF_TECIL_6183_DURUMU",
                        "version": 12
                    },
                    "RF_SORGULAMA_TIPI": {
                        "name": "RF_SORGULAMA_TIPI",
                        "version": 2
                    },
                    "RF_RUHSAT_TIPI": {
                        "name": "RF_RUHSAT_TIPI",
                        "version": 16
                    },
                    "RF_OTV_IADE_LIST_ALTMUK_ANALIZ_DRM": {
                        "name": "RF_OTV_IADE_LIST_ALTMUK_ANALIZ_DRM",
                        "version": 4
                    },
                    "RF_NOTER_ICMAL_DETAY_TUR": {
                        "name": "RF_NOTER_ICMAL_DETAY_TUR",
                        "version": 13
                    },
                    "RF_TELEFON_TUR": {
                        "name": "RF_TELEFON_TUR",
                        "version": 30
                    },
                    "RF_HACIZ_HB_DURUM": {
                        "name": "RF_HACIZ_HB_DURUM",
                        "version": 3
                    },
                    "RF_SANAYI_SCL_VIZE_DURUM": {
                        "name": "RF_SANAYI_SCL_VIZE_DURUM",
                        "version": 2
                    },
                    "RF_BASLIK_KDV_BYN": {
                        "name": "RF_BASLIK_KDV_BYN",
                        "version": 8
                    },
                    "RF_GERI_GELEN_KDV_IST_FAYDA_DURUM": {
                        "name": "RF_GERI_GELEN_KDV_IST_FAYDA_DURUM",
                        "version": 2
                    },
                    "RF_TECIL_TIPI_7256_TALEP": {
                        "name": "RF_TECIL_TIPI_7256_TALEP",
                        "version": 17
                    },
                    "RF_EPOSTA_TUR": {
                        "name": "RF_EPOSTA_TUR",
                        "version": 5
                    },
                    "RF_MKKR_LISTETURU": {
                        "name": "RF_MKKR_LISTETURU",
                        "version": 65
                    },
                    "RF_7256_BASVURU_KONUSU": {
                        "name": "RF_7256_BASVURU_KONUSU",
                        "version": 51
                    },
                    "RF_IKT_NEDENI": {
                        "name": "RF_IKT_NEDENI",
                        "version": 5
                    },
                    "RF_GK_DONEMTIPI": {
                        "name": "RF_GK_DONEMTIPI",
                        "version": 4
                    },
                    "RF_CEZA_CESIDI": {
                        "name": "RF_CEZA_CESIDI",
                        "version": 10
                    },
                    "RF_GMSI_BYN_YIL": {
                        "name": "RF_GMSI_BYN_YIL",
                        "version": 4
                    },
                    "RF_TEFTIS_UNVAN": {
                        "name": "RF_TEFTIS_UNVAN",
                        "version": 5
                    },
                    "RF_TDI_TAKIP_DRM": {
                        "name": "RF_TDI_TAKIP_DRM",
                        "version": 3
                    },
                    "RF_TEBLIGAT_DURUM": {
                        "name": "RF_TEBLIGAT_DURUM",
                        "version": 38
                    },
                    "RF_7256_TECIL_DOS_OL_DURUMU": {
                        "name": "RF_7256_TECIL_DOS_OL_DURUMU",
                        "version": 2
                    },
                    "RF_MUCBIR_SEBEP_TURU": {
                        "name": "RF_MUCBIR_SEBEP_TURU",
                        "version": 19
                    },
                    "RF_OTVIRA_SEGMENT_TUR": {
                        "name": "RF_OTVIRA_SEGMENT_TUR",
                        "version": 8
                    },
                    "RF_SAMPLE": {
                        "name": "RF_SAMPLE",
                        "version": 1
                    },
                    "RF_THKTHSKODU": {
                        "name": "RF_THKTHSKODU",
                        "version": 7
                    },
                    "RF_MUK_POTANSIYEL": {
                        "name": "RF_MUK_POTANSIYEL",
                        "version": 4
                    },
                    "RF_ODM_CHZ_DRM": {
                        "name": "RF_ODM_CHZ_DRM",
                        "version": 5
                    },
                    "RF_DONEM_TURLERI": {
                        "name": "RF_DONEM_TURLERI",
                        "version": 59
                    },
                    "RF_YAT_TES_FATURA_ID": {
                        "name": "RF_YAT_TES_FATURA_ID",
                        "version": 3
                    },
                    "RF_VERGI_GRUBU": {
                        "name": "RF_VERGI_GRUBU",
                        "version": 25
                    },
                    "RF_SICIL_DURUM": {
                        "name": "RF_SICIL_DURUM",
                        "version": 2
                    },
                    "RF_KAYNAK": {
                        "name": "RF_KAYNAK",
                        "version": 4
                    },
                    "RF_TESPITTURU": {
                        "name": "RF_TESPITTURU",
                        "version": 7
                    },
                    "RF_OTV_IADELISTELERI_DILIM_2": {
                        "name": "RF_OTV_IADELISTELERI_DILIM_2",
                        "version": 3
                    },
                    "RF_EGM_ONAY_DRM": {
                        "name": "RF_EGM_ONAY_DRM",
                        "version": 3
                    },
                    "RF_LISANS_TURU": {
                        "name": "RF_LISANS_TURU",
                        "version": 9
                    },
                    "RF_GK_LISTE_DURUM": {
                        "name": "RF_GK_LISTE_DURUM",
                        "version": 5
                    },
                    "RF_EVRAK_BASKANLIK": {
                        "name": "RF_EVRAK_BASKANLIK",
                        "version": 14
                    },
                    "RF_RAPOR_DEF_DURUM": {
                        "name": "RF_RAPOR_DEF_DURUM",
                        "version": 2
                    },
                    "RF_KAYIT_TIPI": {
                        "name": "RF_KAYIT_TIPI",
                        "version": 3
                    },
                    "RF_YETKI_MODULU": {
                        "name": "RF_YETKI_MODULU",
                        "version": 1
                    },
                    "RF_MTV_TPC_SERI": {
                        "name": "RF_MTV_TPC_SERI",
                        "version": 136
                    },
                    "RF_SEGMENTLER": {
                        "name": "RF_SEGMENTLER",
                        "version": 238
                    },
                    "RF_KEYS_EVRAK_TIPI": {
                        "name": "RF_KEYS_EVRAK_TIPI",
                        "version": 3
                    },
                    "RF_GK_TUT_AZ_ARSV": {
                        "name": "RF_GK_TUT_AZ_ARSV",
                        "version": 4
                    },
                    "RF_TDI_HB_THSEDLDRM": {
                        "name": "RF_TDI_HB_THSEDLDRM",
                        "version": 12
                    },
                    "RF_KDV_IS_FL_NIT_6EF": {
                        "name": "RF_KDV_IS_FL_NIT_6EF",
                        "version": 2
                    },
                    "RF_YAT_TES_FAT_BILGI_CINSI": {
                        "name": "RF_YAT_TES_FAT_BILGI_CINSI",
                        "version": 3
                    },
                    "RF_GK_TALEP_DURUM": {
                        "name": "RF_GK_TALEP_DURUM",
                        "version": 4
                    },
                    "RF_ADRES_DURUM_PTNSYL_DHL": {
                        "name": "RF_ADRES_DURUM_PTNSYL_DHL",
                        "version": 4
                    },
                    "RF_CEV_RAP_KULL": {
                        "name": "RF_CEV_RAP_KULL",
                        "version": 19
                    },
                    "RF_INC_SEVK_NEDEN": {
                        "name": "RF_INC_SEVK_NEDEN",
                        "version": 9
                    },
                    "RF_INTVD_TALP_DURUM": {
                        "name": "RF_INTVD_TALP_DURUM",
                        "version": 5
                    },
                    "RF_TAHAKKUK_KAYNAGI": {
                        "name": "RF_TAHAKKUK_KAYNAGI",
                        "version": 4
                    },
                    "RF_KURUM_TURU": {
                        "name": "RF_KURUM_TURU",
                        "version": 3
                    },
                    "RF_YMM_KAPASITE_TASDIK": {
                        "name": "RF_YMM_KAPASITE_TASDIK",
                        "version": 4
                    },
                    "RF_BKONUSU_7100": {
                        "name": "RF_BKONUSU_7100",
                        "version": 14
                    },
                    "RF_AYLAR": {
                        "name": "RF_AYLAR",
                        "version": 39
                    },
                    "RF_INTVD_YAP_ISLEM": {
                        "name": "RF_INTVD_YAP_ISLEM",
                        "version": 3
                    },
                    "RF_CEV_RAP_BOLUM": {
                        "name": "RF_CEV_RAP_BOLUM",
                        "version": 29
                    },
                    "RF_NEDEN": {
                        "name": "RF_NEDEN",
                        "version": 11
                    },
                    "RF_TEO_NEDENI": {
                        "name": "RF_TEO_NEDENI",
                        "version": 2
                    },
                    "RF_DBS_BELGE_TIP": {
                        "name": "RF_DBS_BELGE_TIP",
                        "version": 4
                    },
                    "RF_IS_MAK_TESCIL_STATUS": {
                        "name": "RF_IS_MAK_TESCIL_STATUS",
                        "version": 4
                    },
                    "RF_VD_TIPI": {
                        "name": "RF_VD_TIPI",
                        "version": 2
                    },
                    "RF_MIZAN_TUR": {
                        "name": "RF_MIZAN_TUR",
                        "version": 7
                    },
                    "RF_KARNE_YIL": {
                        "name": "RF_KARNE_YIL",
                        "version": 27
                    },
                    "RF_GELIR_UNSURU_BILGISI": {
                        "name": "RF_GELIR_UNSURU_BILGISI",
                        "version": 5
                    },
                    "RF_DTP_YAZISMA_TIPI_GELEN_EVRAK": {
                        "name": "RF_DTP_YAZISMA_TIPI_GELEN_EVRAK",
                        "version": 11
                    },
                    "RF_BELGEBASIM": {
                        "name": "RF_BELGEBASIM",
                        "version": 2
                    },
                    "FD_TEMINATLI": {
                        "name": "FD_TEMINATLI",
                        "version": 3
                    },
                    "RF_DFGLTSPTYAPAN": {
                        "name": "RF_DFGLTSPTYAPAN",
                        "version": 7
                    },
                    "RF_9B_FATURA_TIP": {
                        "name": "RF_9B_FATURA_TIP",
                        "version": 4
                    },
                    "RF_DOSYA_TAKIP_YAZISMA_TIPI": {
                        "name": "RF_DOSYA_TAKIP_YAZISMA_TIPI",
                        "version": 43
                    },
                    "RF_YMM_FORM2_GORUNTU": {
                        "name": "RF_YMM_FORM2_GORUNTU",
                        "version": 9
                    },
                    "RF_BASVURUMAD_6736": {
                        "name": "RF_BASVURUMAD_6736",
                        "version": 79
                    },
                    "RF_ISLEM_DURUM": {
                        "name": "RF_ISLEM_DURUM",
                        "version": 6
                    },
                    "RF_BASMADDESI_7100": {
                        "name": "RF_BASMADDESI_7100",
                        "version": 13
                    },
                    "RF_LPG_LISANS_TURU": {
                        "name": "RF_LPG_LISANS_TURU",
                        "version": 5
                    },
                    "RF_IPA2_BASVURU_DURUMU": {
                        "name": "RF_IPA2_BASVURU_DURUMU",
                        "version": 20
                    },
                    "RF_CAL_YAR_BELGE_TURU": {
                        "name": "RF_CAL_YAR_BELGE_TURU",
                        "version": 57
                    },
                    "RF_BASVURU_SEKLI": {
                        "name": "RF_BASVURU_SEKLI",
                        "version": 4
                    },
                    "RF_DZT_MIKDEGTIP": {
                        "name": "RF_DZT_MIKDEGTIP",
                        "version": 8
                    },
                    "RF_OTV_TUTUN_52.MDR": {
                        "name": "RF_OTV_TUTUN_52.MDR",
                        "version": 12
                    },
                    "RF_TUZEL_TUR": {
                        "name": "RF_TUZEL_TUR",
                        "version": 13
                    },
                    "RF_OTV_TEMCOZ_BEYANNAME_BOLUM": {
                        "name": "RF_OTV_TEMCOZ_BEYANNAME_BOLUM",
                        "version": 12
                    },
                    "RF_IHRAC_KAYITLIMI": {
                        "name": "RF_IHRAC_KAYITLIMI",
                        "version": 4
                    },
                    "RF_TKPSATIRANADETAY": {
                        "name": "RF_TKPSATIRANADETAY",
                        "version": 3
                    },
                    "RF_TASDIK_RAPOR_TURLERI_DGSN": {
                        "name": "RF_TASDIK_RAPOR_TURLERI_DGSN",
                        "version": 2
                    },
                    "RF_VDK_RP_TUR_TABLE": {
                        "name": "RF_VDK_RP_TUR_TABLE",
                        "version": 4
                    },
                    "RF_OTV_IADE_TLP_DRM": {
                        "name": "RF_OTV_IADE_TLP_DRM",
                        "version": 10
                    },
                    "RF_FORM_TURU": {
                        "name": "RF_FORM_TURU",
                        "version": 3
                    },
                    "RF_MAHKEME_KARAR": {
                        "name": "RF_MAHKEME_KARAR",
                        "version": 12
                    },
                    "RF_KDV_GUYUM_DURUM": {
                        "name": "RF_KDV_GUYUM_DURUM",
                        "version": 9
                    },
                    "RF_MU_IZIN_BELGE_TUR": {
                        "name": "RF_MU_IZIN_BELGE_TUR",
                        "version": 3
                    },
                    "RF_YMMRAPORSORGU_IADEDAYANAGI": {
                        "name": "RF_YMMRAPORSORGU_IADEDAYANAGI",
                        "version": 7
                    },
                    "RF_LPG_DURUM": {
                        "name": "RF_LPG_DURUM",
                        "version": 3
                    },
                    "RF_OZES_YENIEKLEMUK": {
                        "name": "RF_OZES_YENIEKLEMUK",
                        "version": 15
                    },
                    "RF_ADRES_DURUM": {
                        "name": "RF_ADRES_DURUM",
                        "version": 9
                    },
                    "RF_MHK_EBELGE_TURU": {
                        "name": "RF_MHK_EBELGE_TURU",
                        "version": 3
                    },
                    "RF_IADE_FARK_TIPI": {
                        "name": "RF_IADE_FARK_TIPI",
                        "version": 13
                    },
                    "RF_AKIS_DURUMU_GNC_SRG": {
                        "name": "RF_AKIS_DURUMU_GNC_SRG",
                        "version": 16
                    },
                    "R_VMR_VERILEN_YNT": {
                        "name": "R_VMR_VERILEN_YNT",
                        "version": 2
                    },
                    "RF_OTV_GUYUM_SATIR": {
                        "name": "RF_OTV_GUYUM_SATIR",
                        "version": 5
                    },
                    "RF_GIBINTRA_DBS_BİRİM": {
                        "name": "RF_GIBINTRA_DBS_BİRİM",
                        "version": 6
                    },
                    "RF_IPTALGECERLIDURUM": {
                        "name": "RF_IPTALGECERLIDURUM",
                        "version": 2
                    },
                    "RF_EVRAK_MUDURLUK": {
                        "name": "RF_EVRAK_MUDURLUK",
                        "version": 15
                    },
                    "RF_MATBAA_DURUM": {
                        "name": "RF_MATBAA_DURUM",
                        "version": 4
                    },
                    "RF_DOSYA_TAKIP_EVET_HAYIR": {
                        "name": "RF_DOSYA_TAKIP_EVET_HAYIR",
                        "version": 10
                    },
                    "RF_DIS_CEZA_TUR": {
                        "name": "RF_DIS_CEZA_TUR",
                        "version": 5
                    },
                    "RF_IC_GENELGE_ILLER": {
                        "name": "RF_IC_GENELGE_ILLER",
                        "version": 32
                    },
                    "RF_OTV_BILDIRIM_TIP": {
                        "name": "RF_OTV_BILDIRIM_TIP",
                        "version": 9
                    },
                    "RF_DIS_BITIS_SEB": {
                        "name": "RF_DIS_BITIS_SEB",
                        "version": 2
                    },
                    "RF_YMM_BUROUNVAN": {
                        "name": "RF_YMM_BUROUNVAN",
                        "version": 9
                    },
                    "RF_CALISMA_DURUM": {
                        "name": "RF_CALISMA_DURUM",
                        "version": 19
                    },
                    "RF_TERK_NAKIL": {
                        "name": "RF_TERK_NAKIL",
                        "version": 4
                    },
                    "RF_YMM_KAPASITE_URETIM": {
                        "name": "RF_YMM_KAPASITE_URETIM",
                        "version": 3
                    },
                    "RF_THK_BYNDURUM": {
                        "name": "RF_THK_BYNDURUM",
                        "version": 4
                    },
                    "RF_OTV1_DEN_YAKITI": {
                        "name": "RF_OTV1_DEN_YAKITI",
                        "version": 5
                    },
                    "RF_COVID_ISLEM_DURUMLAR": {
                        "name": "RF_COVID_ISLEM_DURUMLAR",
                        "version": 4
                    },
                    "RF_KDV_ILAVE_GD": {
                        "name": "RF_KDV_ILAVE_GD",
                        "version": 7
                    },
                    "RF_CP_ORG_ALT": {
                        "name": "RF_CP_ORG_ALT",
                        "version": 20
                    },
                    "RF_BILG_EDN_BAS_SEKL": {
                        "name": "RF_BILG_EDN_BAS_SEKL",
                        "version": 31
                    },
                    "RF_OKD_KAYNAKBELGE": {
                        "name": "RF_OKD_KAYNAKBELGE",
                        "version": 10
                    },
                    "RF_MAHKEME_DURUM": {
                        "name": "RF_MAHKEME_DURUM",
                        "version": 6
                    },
                    "RF_7256_BASVURUMAD": {
                        "name": "RF_7256_BASVURUMAD",
                        "version": 70
                    },
                    "RF_OTV_BYN_DLM2": {
                        "name": "RF_OTV_BYN_DLM2",
                        "version": 2
                    },
                    "RF_IADETKP_KRTR_TUR": {
                        "name": "RF_IADETKP_KRTR_TUR",
                        "version": 4
                    },
                    "RF_HB_SEGMENT": {
                        "name": "RF_HB_SEGMENT",
                        "version": 12
                    },
                    "RF_OTV_FATURA_DURUM": {
                        "name": "RF_OTV_FATURA_DURUM",
                        "version": 5
                    },
                    "RF_GEL_TEV_TUR": {
                        "name": "RF_GEL_TEV_TUR",
                        "version": 2
                    },
                    "RF_YILLAR_2013": {
                        "name": "RF_YILLAR_2013",
                        "version": 3
                    },
                    "RF_OZEL_ESAS_OTR": {
                        "name": "RF_OZEL_ESAS_OTR",
                        "version": 6
                    },
                    "RF_TECIL_DURUMU": {
                        "name": "RF_TECIL_DURUMU",
                        "version": 6
                    },
                    "RF_OTV_BYN_DLM": {
                        "name": "RF_OTV_BYN_DLM",
                        "version": 3
                    },
                    "RF_SICIL_ADRES_TİPİ": {
                        "name": "RF_SICIL_ADRES_TİPİ",
                        "version": 4
                    },
                    "RF_TKST_SYS_7020": {
                        "name": "RF_TKST_SYS_7020",
                        "version": 12
                    },
                    "RF_EVET_HAYIR": {
                        "name": "RF_EVET_HAYIR",
                        "version": 4
                    },
                    "RF_SM_RAPOR_TURU": {
                        "name": "RF_SM_RAPOR_TURU",
                        "version": 6
                    },
                    "RF_6552_YAP_TIPI": {
                        "name": "RF_6552_YAP_TIPI",
                        "version": 10
                    },
                    "RF_OTV13_5_SIGARA": {
                        "name": "RF_OTV13_5_SIGARA",
                        "version": 58
                    },
                    "RF_OTV_LISTE": {
                        "name": "RF_OTV_LISTE",
                        "version": 19
                    },
                    "RF_KIMLIK_POTANSIYEL": {
                        "name": "RF_KIMLIK_POTANSIYEL",
                        "version": 2
                    },
                    "RF_EBYN_TAM_TEV_SOZ_DURUM": {
                        "name": "RF_EBYN_TAM_TEV_SOZ_DURUM",
                        "version": 4
                    },
                    "RF_TECIL_TIPI": {
                        "name": "RF_TECIL_TIPI",
                        "version": 31
                    },
                    "RF_ISEMRI_TLP_KYNK": {
                        "name": "RF_ISEMRI_TLP_KYNK",
                        "version": 9
                    },
                    "EVRAK_ISLEM_DURUMU": {
                        "name": "EVRAK_ISLEM_DURUMU",
                        "version": 15
                    },
                    "RF_TEMINAT_TURU": {
                        "name": "RF_TEMINAT_TURU",
                        "version": 6
                    },
                    "RF_INT_IMALATCI_OTV_BEY_DILIM": {
                        "name": "RF_INT_IMALATCI_OTV_BEY_DILIM",
                        "version": 3
                    },
                    "RF_SORGU_TURU": {
                        "name": "RF_SORGU_TURU",
                        "version": 2
                    },
                    "RF_TAHAKKUK_ISL_DURUMU_7326": {
                        "name": "RF_TAHAKKUK_ISL_DURUMU_7326",
                        "version": 4
                    },
                    "RF_MATRAH_ART_6736": {
                        "name": "RF_MATRAH_ART_6736",
                        "version": 64
                    },
                    "RF_BIRIM_TURLERI": {
                        "name": "RF_BIRIM_TURLERI",
                        "version": 2
                    },
                    "RF_AKISDURUMU": {
                        "name": "RF_AKISDURUMU",
                        "version": 25
                    },
                    "RF_DISIPLIN_UNVAN": {
                        "name": "RF_DISIPLIN_UNVAN",
                        "version": 3
                    },
                    "RF_TAH_GUC_KAL_NDN": {
                        "name": "RF_TAH_GUC_KAL_NDN",
                        "version": 12
                    },
                    "RF_MERSIS_ORT_TUR": {
                        "name": "RF_MERSIS_ORT_TUR",
                        "version": 6
                    },
                    "RF_OTV1_ISLEM": {
                        "name": "RF_OTV1_ISLEM",
                        "version": 16
                    },
                    "RF_DAKIKA": {
                        "name": "RF_DAKIKA",
                        "version": 59
                    },
                    "RF_TDI_TAK_SEVK_GRPLM": {
                        "name": "RF_TDI_TAK_SEVK_GRPLM",
                        "version": 3
                    },
                    "RF_MUH_BYN_ARSIV": {
                        "name": "RF_MUH_BYN_ARSIV",
                        "version": 2
                    },
                    "R_OTV1_ISEMRI_TUR": {
                        "name": "R_OTV1_ISEMRI_TUR",
                        "version": 6
                    },
                    "RF_EFAT_BER_DURUM": {
                        "name": "RF_EFAT_BER_DURUM",
                        "version": 14
                    },
                    "RF_DEGERLENDIRME_SONUC": {
                        "name": "RF_DEGERLENDIRME_SONUC",
                        "version": 5
                    },
                    "RF_BASARILISIZ": {
                        "name": "RF_BASARILISIZ",
                        "version": 3
                    },
                    "RF_TDI_RAPOR_STATUS": {
                        "name": "RF_TDI_RAPOR_STATUS",
                        "version": 6
                    },
                    "RF_KOMISYON_TEYIT": {
                        "name": "RF_KOMISYON_TEYIT",
                        "version": 2
                    },
                    "RF_EK_TURU": {
                        "name": "RF_EK_TURU",
                        "version": 34
                    },
                    "RF_CP_TEFTIS_BOLUM": {
                        "name": "RF_CP_TEFTIS_BOLUM",
                        "version": 5
                    },
                    "RF_FETO_PDY_DURUM": {
                        "name": "RF_FETO_PDY_DURUM",
                        "version": 3
                    },
                    "RF_ISTISNA_TURU": {
                        "name": "RF_ISTISNA_TURU",
                        "version": 34
                    },
                    "RF_SORGU_TIP": {
                        "name": "RF_SORGU_TIP",
                        "version": 2
                    },
                    "RF_EPTT_GONDERIM_DURUMU": {
                        "name": "RF_EPTT_GONDERIM_DURUMU",
                        "version": 22
                    },
                    "RF_TDI_7440_DURUM": {
                        "name": "RF_TDI_7440_DURUM",
                        "version": 13
                    },
                    "RF_IS_DETAY": {
                        "name": "RF_IS_DETAY",
                        "version": 25
                    },
                    "RF_HESAP_TIP": {
                        "name": "RF_HESAP_TIP",
                        "version": 7
                    },
                    "RF_OTVIRA_IADETURLERI": {
                        "name": "RF_OTVIRA_IADETURLERI",
                        "version": 17
                    },
                    "RF_DOSYA_TAKIP_TALEP_DURUM": {
                        "name": "RF_DOSYA_TAKIP_TALEP_DURUM",
                        "version": 2
                    },
                    "RF_EKSIKLIK_OKUNDU": {
                        "name": "RF_EKSIKLIK_OKUNDU",
                        "version": 2
                    },
                    "RF_INT_OTVIADE_ODA_TURLERI": {
                        "name": "RF_INT_OTVIADE_ODA_TURLERI",
                        "version": 4
                    },
                    "RF_7326_BASVURUMAD": {
                        "name": "RF_7326_BASVURUMAD",
                        "version": 68
                    },
                    "RF_IADE_TIPI": {
                        "name": "RF_IADE_TIPI",
                        "version": 3
                    },
                    "RF_GUN": {
                        "name": "RF_GUN",
                        "version": 31
                    },
                    "RF_KDV_IST_ARAC_CES": {
                        "name": "RF_KDV_IST_ARAC_CES",
                        "version": 8
                    },
                    "RF_YMM_BEYANNME_DURUM": {
                        "name": "RF_YMM_BEYANNME_DURUM",
                        "version": 5
                    },
                    "RF_EGT_KULL_LIST": {
                        "name": "RF_EGT_KULL_LIST",
                        "version": 3
                    },
                    "RF_VMR_IHBAR_ISLEM": {
                        "name": "RF_VMR_IHBAR_ISLEM",
                        "version": 35
                    },
                    "RF_OOI_NEDENI": {
                        "name": "RF_OOI_NEDENI",
                        "version": 4
                    },
                    "RF_MHK_DAVA_TUR": {
                        "name": "RF_MHK_DAVA_TUR",
                        "version": 3
                    },
                    "RF_YMM_KREDITURLERI": {
                        "name": "RF_YMM_KREDITURLERI",
                        "version": 3
                    },
                    "RF_DAMGA_VERGISI_DURUM_VD": {
                        "name": "RF_DAMGA_VERGISI_DURUM_VD",
                        "version": 2
                    },
                    "RF_BELGE_TEMIN_SEKLI": {
                        "name": "RF_BELGE_TEMIN_SEKLI",
                        "version": 3
                    },
                    "RF_UYRUK": {
                        "name": "RF_UYRUK",
                        "version": 5
                    },
                    "RF_KDVLISTE_UEFA_BIRIM": {
                        "name": "RF_KDVLISTE_UEFA_BIRIM",
                        "version": 51
                    },
                    "RF_YAT_TES_BIRIM": {
                        "name": "RF_YAT_TES_BIRIM",
                        "version": 44
                    },
                    "RF_YMM_BURODURUM": {
                        "name": "RF_YMM_BURODURUM",
                        "version": 6
                    },
                    "RF_GK_TALEP_ISLEM": {
                        "name": "RF_GK_TALEP_ISLEM",
                        "version": 4
                    },
                    "RF_DOSYA_TAKIP_MUKIMLIK": {
                        "name": "RF_DOSYA_TAKIP_MUKIMLIK",
                        "version": 3
                    },
                    "RF_TEBLIGAT_EK_TURU": {
                        "name": "RF_TEBLIGAT_EK_TURU",
                        "version": 20
                    },
                    "RF_CAL_YAR_KANUN_TURU": {
                        "name": "RF_CAL_YAR_KANUN_TURU",
                        "version": 37
                    },
                    "RF_YMMRPR_IADEDAYANAK": {
                        "name": "RF_YMMRPR_IADEDAYANAK",
                        "version": 4
                    },
                    "RF_GMSI_ISLER": {
                        "name": "RF_GMSI_ISLER",
                        "version": 49
                    },
                    "RF_YAT_TES_FATURA_TIPI": {
                        "name": "RF_YAT_TES_FATURA_TIPI",
                        "version": 6
                    },
                    "RF_TEMINAT": {
                        "name": "RF_TEMINAT",
                        "version": 8
                    },
                    "RF_DENIZYAKITI_DILEKCE_TUR": {
                        "name": "RF_DENIZYAKITI_DILEKCE_TUR",
                        "version": 8
                    },
                    "RF_INTVDKDVISTDURUM": {
                        "name": "RF_INTVDKDVISTDURUM",
                        "version": 7
                    },
                    "RF_HIS_ITUS_BLG_TUR": {
                        "name": "RF_HIS_ITUS_BLG_TUR",
                        "version": 3
                    },
                    "RF_DTP_YAZISMA_TIPI_IC_YAZISMA": {
                        "name": "RF_DTP_YAZISMA_TIPI_IC_YAZISMA",
                        "version": 6
                    },
                    "RF_KARNE_ISTISNA_SEGMENT": {
                        "name": "RF_KARNE_ISTISNA_SEGMENT",
                        "version": 10
                    },
                    "RF_MATBAA_SOZLESME_D": {
                        "name": "RF_MATBAA_SOZLESME_D",
                        "version": 5
                    },
                    "RF_MAHKEME": {
                        "name": "RF_MAHKEME",
                        "version": 6
                    },
                    "RF_TDI_TKP_DRM": {
                        "name": "RF_TDI_TKP_DRM",
                        "version": 4
                    },
                    "RF_TASDIK_RAPOR_TURLERI": {
                        "name": "RF_TASDIK_RAPOR_TURLERI",
                        "version": 56
                    },
                    "RF_GERCEK_FAYDALANICI_KAYNAK": {
                        "name": "RF_GERCEK_FAYDALANICI_KAYNAK",
                        "version": 17
                    },
                    "RF_TDI_BASVURU_DRM_7143": {
                        "name": "RF_TDI_BASVURU_DRM_7143",
                        "version": 58
                    },
                    "RF_VMR_ISYERI_TURU": {
                        "name": "RF_VMR_ISYERI_TURU",
                        "version": 6
                    },
                    "RF_MUKELLEF_BILGI": {
                        "name": "RF_MUKELLEF_BILGI",
                        "version": 3
                    },
                    "RF_YMM_RAPORMAHIYET": {
                        "name": "RF_YMM_RAPORMAHIYET",
                        "version": 4
                    },
                    "RF_OTV_EPDK_PIYASA": {
                        "name": "RF_OTV_EPDK_PIYASA",
                        "version": 12
                    },
                    "RF_IS_YERI_TURU": {
                        "name": "RF_IS_YERI_TURU",
                        "version": 2
                    },
                    "RF_SICIL_MUK_TIPI  ": {
                        "name": "RF_SICIL_MUK_TIPI  ",
                        "version": 6
                    },
                    "RF_7256_TECIL_TIPI": {
                        "name": "RF_7256_TECIL_TIPI",
                        "version": 35
                    },
                    "RF_SOZLESME_TURU": {
                        "name": "RF_SOZLESME_TURU",
                        "version": 8
                    },
                    "RF_KAMU_PER_GSTRGE": {
                        "name": "RF_KAMU_PER_GSTRGE",
                        "version": 41
                    },
                    "RF_OTS_GECERLILIK_DURUM": {
                        "name": "RF_OTS_GECERLILIK_DURUM",
                        "version": 5
                    },
                    "RF_VMR_IHBAR_TIPI": {
                        "name": "RF_VMR_IHBAR_TIPI",
                        "version": 69
                    },
                    "RF_DURUM_AKTIF_PASIF": {
                        "name": "RF_DURUM_AKTIF_PASIF",
                        "version": 3
                    },
                    "RF_DOSYA_TAKIP_DAYANDIGI_ANLASMA": {
                        "name": "RF_DOSYA_TAKIP_DAYANDIGI_ANLASMA",
                        "version": 3
                    },
                    "RF_ISEMRI_CEVAP": {
                        "name": "RF_ISEMRI_CEVAP",
                        "version": 3
                    },
                    "RF_293_VUK_TEBLIG_TAHSIL": {
                        "name": "RF_293_VUK_TEBLIG_TAHSIL",
                        "version": 2
                    },
                    "RF_TAKSIT_SAYISI_7440": {
                        "name": "RF_TAKSIT_SAYISI_7440",
                        "version": 36
                    },
                    "RF_BEYAN": {
                        "name": "RF_BEYAN",
                        "version": 19
                    },
                    "RF_VMR_CALISMA_DRM": {
                        "name": "RF_VMR_CALISMA_DRM",
                        "version": 9
                    },
                    "RF_TAKSIT_SAYISI_7326": {
                        "name": "RF_TAKSIT_SAYISI_7326",
                        "version": 12
                    },
                    "RF_DAMGA_VERGISI_DURUM": {
                        "name": "RF_DAMGA_VERGISI_DURUM",
                        "version": 3
                    },
                    "RF_LINK_TIPI": {
                        "name": "RF_LINK_TIPI",
                        "version": 4
                    },
                    "RF_YMM_YAZI_NEDEN": {
                        "name": "RF_YMM_YAZI_NEDEN",
                        "version": 3
                    },
                    "RF_7440_BASVURUMAD": {
                        "name": "RF_7440_BASVURUMAD",
                        "version": 76
                    },
                    "RF_OZES_DEGERLENDIRME_DURUMU": {
                        "name": "RF_OZES_DEGERLENDIRME_DURUMU",
                        "version": 5
                    },
                    "RF_BELGE_VER_YER": {
                        "name": "RF_BELGE_VER_YER",
                        "version": 4
                    },
                    "RF_DOSYA_TAKIP_GECIKME_NEDENI": {
                        "name": "RF_DOSYA_TAKIP_GECIKME_NEDENI",
                        "version": 7
                    },
                    "RF_ISEMRI_MUVAFAKAT": {
                        "name": "RF_ISEMRI_MUVAFAKAT",
                        "version": 5
                    },
                    "RF_BASVURUKONUSU": {
                        "name": "RF_BASVURUKONUSU",
                        "version": 15
                    },
                    "RF_MUNF_ITH_TUR": {
                        "name": "RF_MUNF_ITH_TUR",
                        "version": 3
                    },
                    "RF_7256_TECIL_DURUM": {
                        "name": "RF_7256_TECIL_DURUM",
                        "version": 5
                    },
                    "RF_DOSYA_TAKIP_GERCEK_TUZEL_BILGI": {
                        "name": "RF_DOSYA_TAKIP_GERCEK_TUZEL_BILGI",
                        "version": 5
                    },
                    "RF_ONAYLAYAN_UNVAN": {
                        "name": "RF_ONAYLAYAN_UNVAN",
                        "version": 2
                    },
                    "RF_DEGERLENDIRME_SEKLI": {
                        "name": "RF_DEGERLENDIRME_SEKLI",
                        "version": 3
                    },
                    "RF_OTV_DILIM": {
                        "name": "RF_OTV_DILIM",
                        "version": 5
                    },
                    "RF_EVRAK_KODU": {
                        "name": "RF_EVRAK_KODU",
                        "version": 28
                    },
                    "RF_YILLAR": {
                        "name": "RF_YILLAR",
                        "version": 123
                    },
                    "RF_GMSI_TUR": {
                        "name": "RF_GMSI_TUR",
                        "version": 6
                    },
                    "RF_TEMINAT_SRG": {
                        "name": "RF_TEMINAT_SRG",
                        "version": 3
                    },
                    "RF_TDI_6736_DURUM": {
                        "name": "RF_TDI_6736_DURUM",
                        "version": 12
                    },
                    "RF_IADE_ISLEM_TIP": {
                        "name": "RF_IADE_ISLEM_TIP",
                        "version": 5
                    },
                    "RF_KDV_IADE_VD_AKT_MUK": {
                        "name": "RF_KDV_IADE_VD_AKT_MUK",
                        "version": 12
                    },
                    "RF_GELIR_TURU": {
                        "name": "RF_GELIR_TURU",
                        "version": 5
                    },
                    "RF_ETGB_LISTE_TURU": {
                        "name": "RF_ETGB_LISTE_TURU",
                        "version": 3
                    },
                    "RF_TDI_6111TECILTIPI": {
                        "name": "RF_TDI_6111TECILTIPI",
                        "version": 9
                    },
                    "RF_VMR_RAPOR_TURU": {
                        "name": "RF_VMR_RAPOR_TURU",
                        "version": 12
                    },
                    "RF_OTV_TEMCOZ_CETVEL_BILGISI": {
                        "name": "RF_OTV_TEMCOZ_CETVEL_BILGISI",
                        "version": 3
                    },
                    "RF_TDI_TKP_TBLG_DRM": {
                        "name": "RF_TDI_TKP_TBLG_DRM",
                        "version": 5
                    },
                    "RF_YTB_BELGE_DURUMU": {
                        "name": "RF_YTB_BELGE_DURUMU",
                        "version": 4
                    },
                    "RF_EVDO_SICIL_DURUM": {
                        "name": "RF_EVDO_SICIL_DURUM",
                        "version": 4
                    },
                    "RF_YMM_SERMAYETURLERI": {
                        "name": "RF_YMM_SERMAYETURLERI",
                        "version": 12
                    },
                    "RF_ISEMRI_ONAY": {
                        "name": "RF_ISEMRI_ONAY",
                        "version": 2
                    },
                    "RF_INTVRG_OLCU_BIRIMI": {
                        "name": "RF_INTVRG_OLCU_BIRIMI",
                        "version": 9
                    },
                    "RF_ORTAKLIK_160A": {
                        "name": "RF_ORTAKLIK_160A",
                        "version": 11
                    },
                    "RF_HACIZ_VARAKA_TIPI": {
                        "name": "RF_HACIZ_VARAKA_TIPI",
                        "version": 5
                    },
                    "RF_YMM_TEMSILILZAM": {
                        "name": "RF_YMM_TEMSILILZAM",
                        "version": 3
                    },
                    "RF_COVID_DURUMLAR": {
                        "name": "RF_COVID_DURUMLAR",
                        "version": 10
                    },
                    "RF_KATP_KURUM": {
                        "name": "RF_KATP_KURUM",
                        "version": 14
                    },
                    "RF_MUN_ITH_YURUTME_DURUMU": {
                        "name": "RF_MUN_ITH_YURUTME_DURUMU",
                        "version": 2
                    },
                    "RF_MUKELLEF_SAYISI": {
                        "name": "RF_MUKELLEF_SAYISI",
                        "version": 14
                    },
                    "RF_DOSYA_TAKIP_KAPATMA_NEDENI": {
                        "name": "RF_DOSYA_TAKIP_KAPATMA_NEDENI",
                        "version": 7
                    },
                    "RF_AKTIF_PASIF": {
                        "name": "RF_AKTIF_PASIF",
                        "version": 3
                    },
                    "RF_KDV_GUYUM_GERI_DO": {
                        "name": "RF_KDV_GUYUM_GERI_DO",
                        "version": 32
                    }
                };
                var localRefDatas = CSRefDataManager.getLocalCacheStatus(true);
                var removeList = [];
                for (var i = 0; i < localRefDatas.length; i++) {
                    if (localRefDatas[i] == "__lang") {
                        continue;
                    }
                    var refDataVer = refDataVers[localRefDatas[i].rf];
                    if (refDataVer) {
                        var lv = localRefDatas[i].v;
                        if (!lv || lv < refDataVer.version) {
                            removeList.push(localRefDatas[i].rf);
                        }
                    }
                }

                CSRefDataManager.removeSideRefdata(removeList, function() {
                    flow.ok("Old RefData Caches cleaned.");
                });
            }

            function initSide() {

                var flow = new CSWaterFall();
                flow.add(function(flow) {
                    showHideSideProgressDiv(true);
                    flow.ok("");
                });

                flow.add(function(flow) {
                    updateSideProgressMessage("Uygulama başlatılıyor...");
                    initSideMultiLang(flow);
                });
                flow.add(function(flow) {
                    updateSideProgressMessage(function() {
                        return SideMLManager.get("welcome.appStart")
                    });
                    initOther(flow);
                });
                flow.add(function(flow) {
                    updateSideProgressMessage(function() {
                        return SideMLManager.get("welcome.appStart")
                    });
                    initServiceManager(flow);
                });
                if (getSideDefaults("support-side-services")) {
                    flow.add(function(flow) {
                        updateSideProgressMessage(function() {
                            return SideMLManager.get("welcome.appStart")
                        });
                        loadServiceList(flow);
                    });
                }
                flow.add(function(flow) {
                    updateSideProgressMessage(function() {
                        return SideMLManager.get("welcome.appStart")
                    });
                    initRefDataManager(flow);
                });
                flow.add(function(flow) {
                    updateSideProgressMessage(function() {
                        return SideMLManager.get("welcome.sessionStart")
                    });
                    initSession(flow);
                });
                flow.add(function(flow) {
                    updateSideProgressMessage(function() {
                        return SideMLManager.get("welcome.refDataControl")
                    });
                    checkRefDataStatus(flow);
                });
                flow.add(function(flow) {
                    updateSideProgressMessage(function() {
                        return SideMLManager.get("welcome.refDataControl")
                    });
                    checkSideRefDataVersions(flow);
                });
                flow.add(function(flow) {
                    updateSideProgressMessage(function() {
                        return SideMLManager.get("welcome.sessionStart")
                    });
                    initAuthorization(flow);
                });
                if (getSideDefaults("support-side-im")) {
                    flow.add(function(flow) {
                        updateSideProgressMessage(function() {
                            return SideMLManager.get("welcome.sessionStart")
                        });
                        initIMManager(flow);
                    });
                }
                flow.add(function(flow) {
                    updateSideProgressMessage(function() {
                        return SideMLManager.get("welcome.pageLoading")
                    });
                    initPage(flow);
                });
                flow.add(function(flow) {
                    showHideSideProgressDiv(false);
                    flow.ok("");
                });
                flow.listen(function(success, index, length, message) {
                    var s = success ? "SUCCESS" : "FAIL";
                    console.log(message);
                });
                flow.run();

                //istenmişse pencere kapatılırken logout servisini çağır 
                // 	if(getSideDefaults("call-logout-on-window-unload")){
                // 		window.onbeforeunload = function() {
                // 			CSCaller.call(getSideDefaults("sn-logout"), {}).then(function(resp){
                // 				console.log("Uygulama sunucusunda oturum sonlandırıldı.")
                // 			}).error(function(resp){
                // 				console.error("Uygulama sunucusunda oturum sonlandırılamadı.")
                // 			});
                // 		}
                // 	}

                if (getSideDefaults("show-errors-on-runtime-errors")) {
                    window.onerror = function(err, url, lineNumber) {
                        console.error(err);
                        var msg = "Beklenmeyen bir hata oluştu.";
                        try {
                            var config = {};
                            if (getSideDefaults("mask-page-on-runtime-errors")) {
                                //ekranı maskele işleme izin verme...
                                config.showTitleBar = false;
                                config.closeOnEscape = false;
                            }
                            config.utilPopup = true;
                            config.width = 520;
                            config.height = 70;
                            var $msgDiv = $("<div>").html(msg).css("text-align", "center");
                            var popup = new CSSimplePopup($msgDiv,config);
                            popup.open();
                        } catch (e) {
                            console.error(e);
                            alert(msg);
                        }
                    }
                    ;
                }
            }

            inParams = {
                "token": ["daf7ac54a56ee0e6755b6ec2019e072c761be9f551f71cc3db03bb61b2057e86dd8791fa0f2252133b5044292fb0a4a859d916ec3e38a10569a8d90b67f94783"]
            };
        </script>
    </head>
    <body id="runtime-body" class="side-body" onload="initSide()">
        <div id="runtime-main" class="gibintra"></div>
        <div id="side-progress-msg-div"></div>
    </body>
</html>
