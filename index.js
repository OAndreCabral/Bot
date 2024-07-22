import puppeteer from "puppeteer";

const exec = async() => {
    const browser = await puppeteer.launch({ 
        headless: false,
        defaultViewport: false,
        userDataDir: "./temp"
    });
    const page = await browser.newPage();
    await page.goto("https://google.com.br");
    await page.screenshot({ path: "testePDF.pdf" });
    await page.screenshot({ path: "testePNG.png" });

    // await browser.close();
}

exec();