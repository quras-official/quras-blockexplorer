<p align="center">
<img
    src="http://blockapi.quraswallet.org/quras/img/logo1.png"
    width="200px">
</p>

# Introduction

BlockExplorer of Quras blockchain.

# Dependencies
angular 7.x

# Installation

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
