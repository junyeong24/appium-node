//client import
const wdio = require("webdriverio");


// 옵션 설정
const opts = {
  // hostname: '175.126.172.231',
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    deviceName: "myphone",
    automationName: "UiAutomator2",
    udid: 'R3CN408PM6M', //변경
    bundleID: 'com.YoStarKR.Samsung.Arknights'
  }
};

async function main() {
  const client = await wdio.remote(opts);



  await client.deleteSession();
}

main();
