
1) npm command:

- When Node.js is installed, the node binary and the npm executable are both made available to the Operating System that Node.js has been installed into.
- The npm command is a CLI tool that acts as a package manager for Node.js

npm help :

   ```
   npm <command>

   Usage:

   npm install        install all the dependencies in your project
   npm install <foo>  add the <foo> dependency to your project
   npm test           run this project's tests
   npm run <foo>      run the script named <foo>
   npm <command> -h   quick help on <command>
   npm -l             display usage info for all commands
   npm help <term>    search for help on <term>
   npm help npm       more involved overview

   All commands:

      access, adduser, audit, bugs, cache, ci, completion,
      config, dedupe, deprecate, diff, dist-tag, docs, doctor,
      edit, exec, explain, explore, find-dupes, fund, get, help,
      help-search, hook, init, install, install-ci-test,
      install-test, link, ll, login, logout, ls, org, outdated,
      owner, pack, ping, pkg, prefix, profile, prune, publish,
      query, rebuild, repo, restart, root, run-script, sbom,
      search, set, shrinkwrap, star, stars, start, stop, team,
      test, token, uninstall, unpublish, unstar, update, version,
      view, whoami

   Specify configs in the ini-formatted file:
      /Users/<nithinninan>/.npmrc
   or on the command line via: npm <command> --key=value

   More configuration info: npm help config
   Configuration fields: npm help 7 config

   npm@10.8.2 /Users/nithinninan/.nvm/versions/node/v20.18.2/lib/node_modules/npm
   ```

npm install -h : 
   ```
   quick help output for a particular command can be viewed using the -h flag with that command
   ```

2) Initializing a Package:

npm init :

- The npm init command can be used to quickly create a package.json in whatever directory it's called in.
- Running npm init will start a CLI wizard that will ask some questions

   ```
   npm init
   This utility will walk you through creating a package.json file.
   It only covers the most common items, and tries to guess sensible defaults.

   See `npm help init` for definitive documentation on these fields
   and exactly what they do.

   Use `npm install <pkg>` afterwards to install a package and
   save it as a dependency in the package.json file.

   Press ^C at any time to quit.
   package name: (code-practice)
   ```

npm init -y : 

 - Shorter way to accept the default value for every question is to use the -y flag

( Refer package.json )

   ```
   The default fields in a generated package.json are:

   name – the name of the package
   version – the current version number of the package
   description – a package description, this is used for meta analysis in package registries
   main – the entry-point file to load when the package is loaded
   scripts – namespaced shell scripts, these will be discussed later in this section
   keywords – array of keywords, improves discoverability of a published package
   author – the package author
   license – the package license.
   ```





