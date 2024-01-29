const {
  withAndroidManifest,
  AndroidConfig,
  createRunOncePlugin,
} = require("@expo/config-plugins");
const pkg = require("./package.json");
const withKey = (
  config,
  { appkey, channel, push, xiaomiAppid, xiaomiAppkey }
) => {
  config = withAndroidManifest(config, (config) => {
    const mainApplication = AndroidConfig.Manifest.getMainApplicationOrThrow(
      config.modResults
    );
    AndroidConfig.Manifest.addMetaDataItemToMainApplication(
      mainApplication,
      "UMENG_APPKEY",
      appkey
    );
    AndroidConfig.Manifest.addMetaDataItemToMainApplication(
      mainApplication,
      "UMENG_CHANNEL",
      channel
    );
    AndroidConfig.Manifest.addMetaDataItemToMainApplication(
      mainApplication,
      "UMENG_PUSH",
      push
    );
    AndroidConfig.Manifest.addMetaDataItemToMainApplication(
      mainApplication,
      "XIAOMI_APPID",
      xiaomiAppid
    );
    AndroidConfig.Manifest.addMetaDataItemToMainApplication(
      mainApplication,
      "XIAOMI_APPKEY",
      xiaomiAppkey
    );
    return config;
  });
  return config;
};

exports.default = createRunOncePlugin(withKey, pkg.name, pkg.version);
