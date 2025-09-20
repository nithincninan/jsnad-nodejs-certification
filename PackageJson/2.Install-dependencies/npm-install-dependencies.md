Installing Dependencies (1)

- Once a folder has a package.json file, dependencies can be installed.

Install a logger: 

- npm install pino
  ```
  added 13 packages, and audited 14 packages in 2s

  1 package is looking for funding
    run `npm fund` for details

  found 0 vulnerabilities
  ```
 
 Will add package.json
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