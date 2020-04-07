export const isMobile = function(check) {
  let isMobile = {
    Android: function() {
      return window.navigator.userAgent.match(/Android/i);
    },
    iOS: function() {
      return window.navigator.userAgent.match(/iPhone|iPod/i);
    },
    any: function() {
      return isMobile.Android() || isMobile.iOS();
    },
    tablet: function() {
      return window.navigator.userAgent.match(/iPad/i);
    },
    app: function() {
      return (
        window.USER.client.indexOf('iPad') !== -1 ||
        window.USER.client.indexOf('iPhone') !== -1
      );
    },
    iphone: function() {
      return window.USER.client.indexOf('iPhone') !== -1;
    },
    ipad: function() {
      return window.USER.client.indexOf('iPad') !== -1;
    },
  };
  if (check) {
    return isMobile[check]() ? true : false;
  }
  return isMobile.any() ? true : false;
};