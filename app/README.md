`python -m venv .venv`

```markdown
# Windows command prompt
.venv\Scripts\activate.bat

# Windows PowerShell
.venv\Scripts\Activate.ps1

# macOS and Linux
source .venv/bin/activate
```

`pip install -r requirements.txt`

`streamlit run Information.py`

### Building and Running Docker Container
- Build container `docker buildx build --platform=linux/amd64 --output type=docker -t jamesliangg/<CONTAINER_NAME> .`
- Push container`docker push jamesliangg/<CONTAINER_NAME>:<VERSION>`
- Run container `docker run -p 3000:3000 --platform linux/amd64 -d jamesliangg/<CONTAINER_NAME>:<VERSION>`