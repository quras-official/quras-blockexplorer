# Introduction

# Dependencies
angular 7.x

# Installation

# Make Project History

1. Platform

    Windows 7 64 bit

    <pre>
    $ node --version
    v10.13.0
    $ yarn --version
    1.12.3
</pre>

2. First create workspace with angular/cli like this.

    <pre>
    $ npm install -g @angular/cli
    $ ng new app
    $ cd app
    $ ng serve --open
</pre>

3. Generate Components.

    <pre>
    $ cd app
    $ ng generate module block
    $ ng generate component block/blocks
    $ ng generate component block/block

</pre>

4. Environment

    production, development, staging

    <pre>
    $ ng serve --configuration=sandbox
    $ ng build --configuration=sandbox
</pre>

# Todo

1. show page loading

2. fix block detail page's previous block

3. responsive to mobile

# See Also
https://angular.io/guide/quickstart

https://angular.io/tutorial/

https://angular.io/api

https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap

https://www.npmjs.com/package/ngx-moment

https://www.npmjs.com/package/ngx-webstorage

Angular BlockExplorer Source

- https://github.com/EOSEssentials/EOSTracker

- https://github.com/bitpay/insight