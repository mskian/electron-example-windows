# Electron Example Windows APPlication

[![dependencies Status](https://david-dm.org/mskian/electron-example-windows/status.png)](https://david-dm.org/mskian/electron-example-windows) [![Build Status](https://travis-ci.org/mskian/electron-example-windows.svg?branch=master)](https://travis-ci.org/mskian/electron-example-windows)  

> Convert your website/blog into Windows Application Build using Electron  

## Requirements

- Electron
- Electron Packager
- Electron Win Installer

```bash

# Install Electrom
sudo npm install -g electron --unsafe-perm=true

# Install Electron Packager
sudo npm install electron-packager -g

```

## Installation

- Clone this Respo

```bash
https://github.com/mskian/electron-example-windows.git
```

- Install dependencies

```bash
cd electron-example-windows
```

```bash
yarn
```

- Build a Package for Windows

```bash
yarn package-win
```

- Build `.exe` Package

```bash
yarn create-installer-win
```

## Customization

### Add ICONS

- Add Icons on `assets/icons/win` Directory
- open `https://convertico.com/` and Upload your ICON.Format `png` & size 512x512
- Convert your `png` icon to `ico`Format
- Rename the icon `Icon-512.ico` to `Icon.ico`
- Next Move the Icon to `assets/icons/win` Folder (PS: Before Adding your Own ICON Cleanup Default icon which already added for example APP)

### Convert the website/blog to Desktop APP

- open `main.js` File
- Find the Below & Update your Blog/website URL

```js
var weburl = 'https://task.santhoshveer.com';
```

- Add Background Color Find this Line `backgroundColor: '#15171A',` & Replace it with your Background Color code
- Test your APP

```bash
electron main.js
```

- Open `/installers/windows/createinstaller.js` File & Update the APP Directory, Author name, Output Directory, Setup `exe` File Name.

#### Windows package Setup

- `package.json` - Open it & replace it with your Name, Description and Version
- Windows Application Packager and Builder Configuration from `package.json`

```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "package-win": "electron-packager . electron-example --overwrite --asar --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=MSKIAN --version-string.FileDescription=MSKIAN --version-string.ProductName=\"Electron Example\"",
    "create-installer-win": "node installers/windows/createinstaller.js"
  },
```

- `electron-example` - Replace with your APP Name
- `release-builds/electron-example-win32-ia32/` - same Replace `electron-example` with your APP Name

### Learn More about Electron

Special thanks to Christian Engvall for this Awesome Tutorials

| # | Topic | Description |
|---|:------|-------------|
| 01 | [Hello world tutorial](http://www.christianengvall.se/electron-hello-world/) | Get electron running on your computer |
| 02 | [Testing electron app on Ubuntu](http://www.christianengvall.se/testing-electron-app-on-ubuntu-linux/) | Set up a VirtualBox virtual machine running Ubuntu and share app |
| 03 | [Electron app icons](http://www.christianengvall.se/electron-app-icons/) | Adding icons to the app |
| 04 | [Electron packager tutorial](http://www.christianengvall.se/electron-packager-tutorial/) | Creating packages for mac, windows and linux |
| 05 | [Electron menu](http://www.christianengvall.se/electron-menu/) | Adding a main menu to your Electron app |
| 06 | [Electron asar](http://www.christianengvall.se/electron-asar/) | Packaging the app with asar |
| 07 | [DMG Installer](http://www.christianengvall.se/dmg-installer-electron-app/) | Creating a DMG-installer for macOS |
| 08 | [Windows installer](http://www.christianengvall.se/electron-windows-installer/) | Creating a windows installer with electron-winstaller |
| 09 | [Debian package installer](https://www.christianengvall.se/electron-installer-debian-package/) | Create a debian package |
| 10 | [Update to latest Electron version](https://www.christianengvall.se/update-to-latest-electron-version/) | Update electron to the latest version using npm |

## LICENSE

MIT
