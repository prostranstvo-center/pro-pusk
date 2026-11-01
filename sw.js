// Минимальный service worker: нужен браузеру, чтобы предложить «Установить приложение».
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
