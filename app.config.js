const IS_DEV = process.env.APP_VARIANT === 'development'
const IS_PREVIEW = process.env.APP_VARIANT === 'preview'

const getBundleIdentifier = () => {
  if (IS_DEV) {
    return 'com.nickater.predikt.dev'
  }

  if (IS_PREVIEW) {
    return 'com.nickater.predikt.preview'
  }

  return 'com.nickater.predikt'
}

const getAppName = () => {
  if (IS_DEV) {
    return 'Predikt (Dev)'
  }

  if (IS_PREVIEW) {
    return 'Predikt (Preview)'
  }

  return 'Predikt'
}

export default {
  name: getAppName(),
  slug: 'predikt-mobile',
  version: '0.1.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'predikt',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  splash: {
    image: './assets/images/icon.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  ios: {
    bundleIdentifier: getBundleIdentifier(),
    supportsTablet: false,
  },
  plugins: ['expo-router', 'expo-font'],
  experiments: {
    typedRoutes: true,
  },
  platforms: ['ios'],
  extra: {
    router: {
      origin: false,
    },
    eas: {
      projectId: '984427f8-1bdd-4ad3-823c-692918c416d7',
    },
  },
}
