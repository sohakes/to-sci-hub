function openPage(tab) {
    browser.tabs.create({
        url: "http://sci-hub.tw/" + tab.url
    });

  }
  
  browser.browserAction.onClicked.addListener(openPage);