# uwu
## Getting Started
### Folder Structure
```yaml
.
├── bwckwnd                     # Node server for uwuifying
│   ├── index.js                # Run to run server
│   ├── package.json            # What to install
│   └── package-lock.json       # The cooler package
├── icons                       # Extension icons
├── content_script.js           # Where all the magic happens
├── manifest.json               # What Chrome sees
├── options.js                  # Broken JavaScript for extension
├── README.md                   # this
├── UBlock_Origin.png           # Extension icon again                  
└── uwu.html                    # Extension page
```
### Running the Extension
#### Node Server
Can run via Docker container or Node directly
##### Node
- `cd` into `bwckwnd`
- Run `npm install`
- Run `node index.js`

##### Docker
- `docker run -p 3000:3000 --platform linux/amd64 -d jamesliangg/mchacks-bwckwnd:0.1`
#### Extension
- Go to [chrome://extensions](chrome://extensions)
- Enable `Developer Mode`
- Click `Load unpacked` and select the root folder (`uwuwuend`)
- Load any website and enjoy
### Building and Running Docker Container
- Build container `docker buildx build --platform=linux/amd64 --output type=docker -t jamesliangg/<CONTAINER_NAME> .`
- Push container`docker push jamesliangg/<CONTAINER_NAME>:<VERSION>`
- Run container `docker run -p 3000:3000 --platform linux/amd64 -d jamesliangg/<CONTAINER_NAME>:<VERSION>`
