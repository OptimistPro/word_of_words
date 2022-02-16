import bridge from '@vkontakte/vk-bridge';
bridge.send('VKWebAppInit');
//bridge.send("VKWebAppAllowNotifications");
//bridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});

//bridge.send("VKWebAppShowNativeAds", {ad_format:"interstitial"})
//.then(data => console.log(data.result))
//.catch(error => console.log(error));

