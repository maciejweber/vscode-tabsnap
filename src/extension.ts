import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.copyAllTabsContent",
    async () => {
      const openDocuments = vscode.workspace.textDocuments.filter(
        (doc) => doc.uri.scheme === "file"
      );

      if (openDocuments.length === 0) {
        vscode.window.showWarningMessage("No open files to copy!");
        return;
      }

      let allContent = "";

      for (const doc of openDocuments) {
        const relativePath = vscode.workspace.asRelativePath(doc.uri);
        const docContent = doc.getText();
        allContent += `// ${relativePath}\n${docContent}\n\n`;
      }

      await vscode.env.clipboard.writeText(allContent.trim());
      vscode.window.showInformationMessage(
        `Copied ${openDocuments.length} files!`
      );
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
