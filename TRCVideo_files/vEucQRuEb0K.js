/*!CK:3303781729!*//*1417641326,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Ni62x"]); }

__d("MCoreInit",["AddressBar","ErrorUtils","MCache","MTabletLoader","MFacewebAndroidLink","MPageController","MViewport","MWildeLink","RemoteDevice","Resource","ServerJS","Stratcom","ix"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){function t(u){s.add(u.ixData);if(u.hideLocationBar)g.setupLoadListener();if(u.isWildeWeb)n.setupListeners();if(u.isFacewebAndroid)k.setupListeners();if(j.isTabletFrame)j.MTabletLink.initialize();r.mergeData(0);m.init();l.init();o.getLogicalScreenWidth();p.load(u.coreResources,function(){h.guard(function(){if(u.clearMCache)i.clear();if(u.onload)(new Function(u.onload))();if(u.onafterload)(new Function(u.onafterload))();(new q()).handle(u.serverJSData);r.invoke('m:root:render');},'onload')();});}f.init=t;},null);