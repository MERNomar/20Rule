const STORAGE_KEY = "user-preference-alarm-enabled";

async function checkAlarmState() {
  await chrome.alarms.create({ periodInMinutes: 1 });
}

checkAlarmState();
