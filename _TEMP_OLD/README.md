# ThinAir
## PITA-less Web Development Framework built with Node.js.
### Currently developed by Tommy Bergeron / 2012.

#### Project status: **Ready for development** [![Build Status](https://secure.travis-ci.org/tbergeron/ThinAir.png?branch=master)](http://travis-ci.org/tbergeron/ThinAir)

***

##### Update 2012-07-28
ThinAir is now _Ready for development_. What it means is that developers who want to try the framework and develop project with it are now welcome to do so! Documentation is almost 100% finished, if anything seems missing, please open an issue. 

##### Update 2012-07-27
Docs are finally done! Not deeply explanatory but still, every component of ThinAir has been covered. If any questions are left to be answered do not hesitate to open an issue!

***

## Goals

The main goal of *ThinAir* is to give a basic but versatile set of tools to Node.js user and newcomers for building web applications. 

This ain't no revolution, but a simple, concised way of achieving what you want without having to re-invent the wheel.

Another goal I have in mind while doing this project is to show everyone (even *PHP* developers!) that Node.js projects are fun, flexible and can finally replace those old technologies once and for all.


## Installation

There's no **npm** package yet because some of the packages used aren't very modulable. But it's certain that it will become available in a near future.

To install ThinAir, you'll need to fork this repository of clone it and simply replace the stuff from the _app/_ directory with your stuff. Simple as this.

Be sure though, to run `npm install` before trying to use anything. (This will install ThinAir's dependencies).

## Usage

To start ThinAir, simply type:
```
node core.js
```

You can read more  about ThinAir usage in the [wiki](https://github.com/tbergeron/ThinAir/wiki).

## Updates
Since there's no **npm** yet, I made a little auto-update bash script that you can simply use by doing `./updateThinAir.sh`. What it does is, it clones ThinAir in a temporary directory, replaces the `package.json` and the `libs/` directory with the new content and finally runs `npm install` to get the latest dependencies.

## Contributors

 - [Tommy Bergeron](https://github.com/tbergeron)
 - [Raynos](https://github.com/Raynos)
 - [Florian Margaine](https://github.com/Ralt)
 - [Hubert Perron](https://github.com/hubertperron)


## Thanks

Thanks to [Raynos](https://github.com/Raynos) for his help, patience and nCore (nCore is GREAT!)

Thanks to [Florian Margaine](https://github.com/Ralt) for all the time you've spent helping me finding great solutions!

Thanks to [Hubert Perron](https://github.com/hubertperron) for kicking my ass in the good direction when I'm trying too hard to reinvent the wheel! ;-)
