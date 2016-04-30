/**
 * Created by jack on 16-4-26.
 */

import angularProvide from './angular-provide';
import autoprefixer from './autoprefixer';
import browersync from './browsersync';
import cssFlex from './css-flex';
import decorator from './decorator-design-pattern';
import es6 from './es2015';
import jsDoc from './js-doc';
import privateNpmServer from './private-npm-server';

let posts = [];

posts.push(angularProvide);
posts.push(autoprefixer);
posts.push(browersync);
posts.push(cssFlex);
posts.push(decorator);
posts.push(es6);
posts.push(jsDoc);
posts.push(privateNpmServer);

posts.sort((a, b) => {
	return a.createdTime > b.createdTime ? -1 : 1;
});

// 暂时由静态目录通过 webpack 的文件引入为对象的方式来管理 Post
// 后期可直接将这部分移植至 database
export default posts;
