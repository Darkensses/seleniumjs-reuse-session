const {WebDriver} = require('selenium-webdriver');
const _http = require('selenium-webdriver/http');
require('chromedriver');

// 1. Download and copy chromedriver.exe to the folder's root
// 2. Open CMD and write(execute) chromedriver.exe
// 3. Open another CMD window and write:
//    curl -XPOST http://localhost:9515/session -d "{\"desiredCapabilities\":{\"browserName\":\"chrome\"}}"
// 4. You must see a chromedriver window and in the CMD a JSON response,
//    copy the sessioID value (is at the begining of the JSO response)

const SESSION_ID = "PASTE_YOUR_SESSION_ID_HERE"
const WD_URL = 'http://localhost:9515/';
let driver;


describe("Re-using a exisiting chromedriver session", function() {

    this.timeout(5000);

    this.afterAll(async function() {
        await driver.quit();
    });

    it("Connecting selenium", async function() {
        driver = await new WebDriver(
            SESSION_ID,
            new _http.Executor(Promise.resolve(WD_URL)
                .then(
                    url => new _http.HttpClient(url, null, null))
            )
        );
    });

    it("Get to Jasiel Guillen github", async function() {
        await driver.get("https://github.com/Darkensses");          
    });

    it("Waiting 2 seconds", async function() {
        await driver.sleep(2000) ;
    })

})