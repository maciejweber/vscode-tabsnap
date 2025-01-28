# TabSnap ✂️📋

[![Version](https://img.shields.io/visual-studio-marketplace/v/maciejweber.tabsnap)](https://marketplace.visualstudio.com/items?itemName=maciejweber.tabsnap)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/maciejweber.tabsnap)](https://marketplace.visualstudio.com/items?itemName=maciejweber.tabsnap)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A lightweight Visual Studio Code extension that copies content of all open files to clipboard with their relative paths. Perfect for sharing code snippets or creating quick backups.

## Features ✨

- 📂 Copy content of **all open files** with one click
- 📍 Preserves file structure with **relative paths**
- 🚫 Automatically ignores unsaved/new files
- ⚡ Fast and lightweight (no dependencies)

## Installation ⬇️

1. Open VS Code Extensions Marketplace (`Ctrl+Shift+X`)
2. Search for "TabSnap"
3. Click **Install**
4. Reload VS Code

## Usage 🚀

### Via Command Palette

1. Open multiple files
2. Open Command Palette (`Cmd+Shift+P` or `Ctrl+Shift+P`)
3. Type `Copy All Tabs Content` and press Enter

### Via Menu

1. Open multiple files
2. Click `...` in editor tab bar
3. Select **"Copy All Tabs Content"**

**Example Output:**

```text
// app/models/user.py
class User:
    def __init__(self, name: str, email: str):
        self.name = name
        self.email = email

    def display_info(self):
        print(f"User: {self.name} <{self.email}>")

// utils/helpers.py
import datetime

def get_current_date():
    """Returns current date in YYYY-MM-DD format"""
    return datetime.datetime.now().strftime("%Y-%m-%d")

def format_name(first_name: str, last_name: str) -> str:
    """Formats full name from first and last name"""
    return f"{first_name} {last_name}".title()
```

## Customization ⚙️

Add to your `keybindings.json`:

```json
{
  "key": "<your-custom-keybinding>",
  "command": "extension.copyAllTabsContent"
}
```

## Contributing 🤝

Found a bug? Have a feature idea? [Open an issue](https://github.com/maciejweber/vscode-tabsnap/issues)

## License

MIT © Maciej Weber
