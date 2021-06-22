1. Download and copy chromedriver.exe to the folder's root
2. Open CMD and write(execute) chromedriver.exe
3. Open another CMD window and write:
```bash
curl -XPOST http://localhost:9515/session -d "{\"desiredCapabilities\":{\"browserName\":\"chrome\"}}"
```
4. You must see a chromedriver window and in the CMD a JSON response. Copy and paste in the code the sessionID value (is at the begining of the JSON response).
5. Run the test:
```bash
npm run test
```