const {
  withAndroidManifest,
  AndroidConfig,
  createRunOncePlugin,
} = require("@expo/config-plugins");
const pkg = require("./package.json");
const withKey = (config, { appkey, channel, push }) => {
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
    return config;
  });
  return config;
};

exports.default = createRunOncePlugin(withKey, pkg.name, pkg.version);
