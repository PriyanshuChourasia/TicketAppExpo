/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};



export const AppColors ={
  gray:{
    gray100:'#f3f4f6',
    gray200:'#e5e7eb',
    gray500:'#6b7280',
    gray700:'#374151',
    gray900:'#111827'
  },
  red:{
    red600:'#dc2626'
  },
  green:{
    green600:'#16a34a',
    green400:'#4ade80',
    green300:'#86efac',
    green200:'#bbf7d0'
  },
  black:'black'
}
