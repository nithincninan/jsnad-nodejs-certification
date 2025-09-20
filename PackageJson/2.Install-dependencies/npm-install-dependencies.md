Installing Dependencies (1)

- Once a folder has a package.json file, dependencies can be installed.

Install a logger:  npm install pino

  ```
  added 13 packages, and audited 14 packages in 2s

  1 package is looking for funding
    run `npm fund` for details

  found 0 vulnerabilities
  ```
 
 Will add below dependencies in package.json
  ```
    {
      "dependencies": {
        "pino": "^9.10.0"
      }
    }
  ```

- ls -ltr
  ```
  total 32
  -rw-r--r--@  1 nithinninan  staff    50 20 Sep 13:59 package.json
  -rw-r--r--@  1 nithinninan  staff  5359 20 Sep 13:59 package-lock.json
  drwxr-xr-x@ 17 nithinninan  staff   544 20 Sep 13:59 node_modules
  ```

==========================================================================

Once the dependency is installed the package.json file will have the following content:

  ```
    {
      "name": "2.install-dependencies",
      "version": "1.0.0",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "description": "",
      "dependencies": {
        "pino": "^9.10.0"
      }
    }
  ```

  Note: 
   - Running npm install pino without specifying a version will install the latest version of the package
   - With Version : npm install pino@7


==========================================================================

Automatic package-lock.json generation can be turned off with the following command:

  ```
    node -e "fs.appendFileSync(path.join(os.homedir(), '.npmrc'), '\npackage-lock=false\n')"
  ```

O/P: 

  ```
  ls -ltr /Users/nithinninan/.npmrc
  -rw-r--r--@ 1 nithinninan  staff  20 20 Sep 19:55 /Users/nithinninan/.npmrc
  ```

cat .npmrc
  ```
  package-lock=false
  ```

To remove : remove  package-lock=false from this file.


==========================================================================

npm ls :


npm ls command can be used to describe the dependency tree of a package

  ```
    npm ls
      2.install-dependencies@1.0.0 /Users/nithinninan/Projects/jsnad-nodejs-certification/PackageJson/2.Install-dependencies
      └── pino@9.10.0

  ```

npm ls --depth=999 : Show the entire dependency tree, all the way down.

  ```
    --depth=0 → Show only top-level dependencies (the ones you directly installed).
    --depth=1 → Show your dependencies + their immediate sub-dependencies.
    --depth=999 → Show the entire dependency tree, all the way down.
  ```

==========================================================================