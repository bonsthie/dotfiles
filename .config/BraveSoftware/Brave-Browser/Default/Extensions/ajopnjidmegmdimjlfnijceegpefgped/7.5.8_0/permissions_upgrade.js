window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('upgrade').addEventListener('click', () => {
        chrome.permissions.request({
            origins: ['*://*.youtube.com/*'],
        }, (granted) => {
            if (!granted) {
                return;
            }
            window.close();
        });
    });

    document.getElementById('page_title').innerText = chrome.i18n.getMessage('EXTENSION_PERMISSIONS_UPGRADE_PAGE_TITLE');
    document.getElementById('title').innerText = chrome.i18n.getMessage('EXTENSION_PERMISSIONS_UPGRADE_TITLE');
    document.getElementById('body').innerText = chrome.i18n.getMessage('EXTENSION_PERMISSIONS_UPGRADE_BODY');
    document.getElementById('upgrade').innerText = chrome.i18n.getMessage('EXTENSION_PERMISSIONS_UPGRADE_BUTTON');
    document.getElementById('footer').innerText = chrome.i18n.getMessage('EXTENSION_PERMISSIONS_UPGRADE_FOOTER');
});
