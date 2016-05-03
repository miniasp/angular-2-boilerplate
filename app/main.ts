// 匯入支援瀏覽器平台的 Angular 2 啟動器 (也有可能換成 Node.js 版本的啟動器)
import { bootstrap }    from 'angular2/platform/browser';

// 匯入 Angular 2 應用程式的「根元件」(AppComponent)
import { AppComponent } from './app.component';

// 啟動 Angular 2
bootstrap(AppComponent);
