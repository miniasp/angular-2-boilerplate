// 匯入支援瀏覽器平台的 Angular 2 啟動器 (也有可能換成 Node.js 版本的啟動器)
import { bootstrap }    from '@angular/platform-browser-dynamic';

// 匯入 Angular 2 應用程式的「根元件」(AppComponent)
import { AppComponent } from './app.component';

// 設定 Angular 2 使用生產環境模式
// import { enableProdMode } from '@angular/core';
// enableProdMode()

// 啟動 Angular 2
bootstrap(AppComponent);
